import Query from './QueryString';
import {parseFile} from './file';
import {defaultConfig} from './DefaultConfig';

export default class Index {
  /**
   * Default constructor
   * @param {{viewConf:string, gff:Array.string}} passedConfig
   * @param {callback} sub
   */
  constructor(passedConfig,sub){
    this.onChanges = [sub];
    this._dirty = false;
    let qs = Query;
    this._viewLayout = {};
    this._viewData = {};
    this.defaultViewConf = defaultConfig();
    this._viewConfig = {};

    parseFile('cvit.conf','ini')
      .then(response => this.baseConfig = response)
      .then(()=>{
        let tag = 'data.';
        if(qs.view ==='general') {
          if(this.baseConfig.general.data_default){
            tag += this.baseConfig.general.data_default;
          } else {
            throw new Error('Default dataset has not been configured.');
          }
        } else {
          tag += qs.view;
        }
        console.log('tag',tag,this.baseConfig);
        let viewConfig = passedConfig.viewConf ? passedConfig.viewConf : this.baseConfig[tag].conf;
        let dataSources = passedConfig.gff
          ? passedConfig.gff
          :  typeof this.baseConfig[tag].defaultData === 'string'
          ?  [this.baseConfig[tag].defaultData]
          :  this.baseConfig[tag].defaultData;

        // Load configuration for view
        this.loadViewConfig(viewConfig);
        // Load _viewData for view
        console.log('sources',dataSources);
        this.loadData(dataSources);

        this._inform();
      })
      .catch(e => console.error(e));
  }

  /**
   * Getters/Setters
   */

  get data(){
    return this._viewData;
  }

  get config(){
    return this._viewConfig;
  }

  get view(){
    return this._viewLayout;
  }

  get dirty(){
    return this._dirty;
  }

  /**
   * Public Methods
   */

  /**
   * Load view _viewData from the passed file locations
   * @param files
   */
  loadData(files){
    this._viewData={};
    files.forEach( file => {
      this.appendData(file)
        .then(()=> this._inform())
        .catch(e => console.error(e));
    });
  }

  /**
   * Load _viewConfig from the passed file location
   * @param file
   */
  loadViewConfig(file){
    this._viewConfig = {};
    parseFile(file, 'ini') //get <config.ini/conf>
      .then(response => this._viewConfig = this._combineObjects(this.defaultViewConf,response)) //overwrite default conf with passed data
      .then(() => { //set configuration info of custom types
        for(let key in this._viewConfig){
          if(this._viewConfig.hasOwnProperty(key)){
            if(this._viewConfig[key].glyph){
              let append = this._viewConfig[key];
              this._viewConfig[key] = this._combineObjects(
                JSON.parse(JSON.stringify(this._viewConfig[append.glyph])),
                append
              );
            }
          }
        }
      })
      .then(() => this._inform())
      .catch(e => console.error(e));
  }

  /**
   * Append view _viewData from the passed file to existing dataset
   * @param {string} file
   * @returns {promise}
   */
  appendData(file){
    return parseFile(file, 'gff')
      .then(response => this._viewData = this._combineObjects(this._viewData,response))
      .catch(e => console.error(e));
  }

  /**
   * Private Methods
   */

  /**
   * Callback to alert preact that model has updated and set _viewLayout
   * @private
   */

  _inform(){
    if(this._viewConfig.general && this._viewData.chromosome){
      this._viewLayout = this._setupView(this._viewData,this._viewConfig);
    }
    this.onChanges.forEach(callBack => callBack());
  }

  /**
   * Deep combine append to base. Append will overwrite non-array
   * lowest-level key-values and concat arrays.
   * @param {object} base - base object (usually a default)
   * @param {object} append - object to append
   * @returns {*} edited base object
   * @private
   */

  _combineObjects(base,append){
    if(typeof append !== 'object') return base;
    for(let key in append){
      if(base.hasOwnProperty(key)){
        if(Array.isArray(base[key])){
          base[key] = base[key].concat(append[key]);
        } else if (typeof base[key] === 'object'){
          this._combineObjects(base[key],append[key]);
        } else {
          base[key] = append[key];
        }
      } else {
        base[key] = append[key];
      }
    }
    return base;
  }

  /**
   * Setups _viewLayout, which contains computed values based on
   * the chromosome backbone.
   * @param dataModel - data object
   * @param viewConfig - config object
   * @returns {{chrOrder: Array.string, min: number, max: number, chrMax: string, zoom: number, chrMin: string}}
   * @private
   */
 _setupView(dataModel,viewConfig) {
    let chr = dataModel.chromosome;
    // set up view limits
    let viewSetup = {
      min: 0,
      max: 0,
      chrMin: chr.features[0].seqName,
      chrMax: chr.features[0].seqName,
      chrOrder: [],
      zoom: 0,
      yScale:1,
      yOffset:{
        offsetTop: parseInt(viewConfig.general.chrom_padding_top) || 0,
        offsetBottom: parseInt(viewConfig.general.chrom_padding_bottom) || 0
      },
      xOffset: parseInt(viewConfig.general.image_padding),
      chrWidth: parseInt(viewConfig.general.chrom_width)
    };

    chr.features.forEach(data => {
      let name = data.seqName;
      if (data.start < viewSetup.min) {
        viewSetup.min = data.start;
        viewSetup.chrMin = name;
      }
      if (data.end > viewSetup.max) {
        viewSetup.max = data.end;
        viewSetup.chrMax = name;
      }
      viewSetup.chrOrder.push(name);
    });

    viewSetup.yScale = this._setYScale(viewSetup.max,viewSetup.min,viewSetup.yOffset);

    return viewSetup;
  }

  /**
   * @description
   * Set the y-scale factor for drawing on the canvas based on the actual
   * canvas dimensions and the vertical padding.
   * @param {number} chrMax - Minimum position of target chromosome
   * @param {number} chrMin - Maximum position of target chromosome
   * @param {number} offsetTop
   * @param {number} offsetBottom
   * @returns {number} y-scale factor
   * @private
   */

  _setYScale(chrMax,chrMin,{offsetTop,offsetBottom=0}){
    return (document.querySelector('#cvit-canvas').height-(offsetTop+offsetBottom))/(chrMax-chrMin);
  }
}