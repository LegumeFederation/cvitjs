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
    this._redraw = true;
    let qs = Query;
    this._viewLayout = {};
    this._viewData = {};
    this.defaultViewConf = defaultConfig();
    this._viewConfig = {};
    this._tag = '';
    this._active = 'status';

    parseFile('cvit.conf','ini')
      .then(response => this.baseConfig = response)
      .then(()=>{
        this._dirty = true;
        this._tag = 'data.';
        if(qs.view ==='general') {
          if(this.baseConfig.general.data_default){
            this._tag += this.baseConfig.general.data_default;
          } else {
            throw new Error('Default dataset has not been configured.');
          }
        } else {
          this._tag += qs.view;
        }
        let tag = this._tag;
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
  get active(){
    return this._active;
  }

  set active(view){
    this._active = view;
    this._inform();
  }

  get config(){
    return this._viewConfig;
  }

  get data(){
    return this._viewData;
  }

  get dirty(){
    return this._dirty;
  }

  set dirty(state){
    this._dirty = state;
    this._inform();
  }

  get redraw(){
    return this._redraw;
  }

  set redraw(state){
    this._redraw = state;
    this._inform();
  }

  get view(){
    return this._viewLayout;
  }

  setDirty(state){
    this.dirty = state;
  }

  setRedraw(state){
    console.log('redrawing', state);
    this.redraw = state;
  }

  /**
   * Public Methods
   */

  /**
   * Load view _viewData from the passed file locations
   * @param files
   */
  loadData(files) {
    this._viewData = {};
    files.forEach((file, i) => {
      this.appendData(file)
        .then(() => {
          if (i === files.length-1) {
            this._dirty = true;
            this._inform();
          }
        })
        .catch(e => console.error(e));
    })
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
      .then(() => {
        this._dirty = true;
        this._inform()
      })
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
      .then(()=> this._dirty = true )
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
    if(this._viewConfig.general && this._viewData.hasOwnProperty('chromosome') && this._dirty){
      this._viewLayout = this._setupView(this._viewData,this._viewConfig);
      this._active = 'canvas';
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
      chrWidth: parseInt(viewConfig.general.chrom_width),
      canvas:{
        width: this.baseConfig[this._tag].hasOwnProperty('width') ?
          parseInt(this.baseConfig[this._tag].width) :
          this.baseConfig['general'].hasOwnProperty('width') ?
            parseInt(this.baseConfig['general'].width) :
            0,
        height: this.baseConfig[this._tag].hasOwnProperty('height') ?
          parseInt(this.baseConfig[this._tag].height):
          this.baseConfig['general'].hasOwnProperty('height') ?
            parseInt(this.baseConfig['general'].height) :
            600,
        color: this.baseConfig[this._tag].hasOwnProperty('canvasColor') ?
          parseInt(this.baseConfig[this._tag].canvasColor):
          this.baseConfig['general'].hasOwnProperty('canvasColor') ?
            this.baseConfig['general'].canvasColor :
            'white',
      }
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

    viewSetup.yScale = this._setYScale(viewSetup.canvas.height, viewSetup.max,viewSetup.min,viewSetup.yOffset);

    return viewSetup;
  }

  /**
   * @description
   * Set the y-scale factor for drawing on the canvas based on the actual
   * canvas dimensions and the vertical padding.
   * @param height
   * @param {number} chrMax - Minimum position of target chromosome
   * @param {number} chrMin - Maximum position of target chromosome
   * @param {number} offsetTop
   * @param {number} offsetBottom
   * @returns {number} y-scale factor
   * @private
   */

  _setYScale(height,chrMax,chrMin,{offsetTop,offsetBottom=0}){
    return (height-(offsetTop+offsetBottom))/(chrMax-chrMin);
  }
}