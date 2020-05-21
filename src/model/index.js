import paper from 'paper';
import Query from './QueryString';
import {parseFile} from './file';
import {defaultConfig} from './DefaultConfig';
import {parseGff} from "./file/ParseGff";

export default class Index {
  /**
   * Default constructor
   * @param {{viewConf:string, gff:Array.string}} passedConfig
   * @param {callback} sub
   */
  constructor(passedConfig,sub){
    this.cvitRoot = passedConfig.cvitRoot;
    this.onChanges = [sub];
    this._dirty = false;
    let qs = Query;
    this._viewLayout = {};
    this._viewData = {};
    this.defaultViewConf = defaultConfig();
    this._viewConfig = {};
    this._tag = '';
    this._active = 'status';
    this._status = 'Loading default view data.';
    this._mouseTool = 'pan';
    this._dataLoaded = new CustomEvent('baseDataLoaded');
    this._trigger = false;
    this._color1 = new paper.Color(0, 0, 0, 1);
    this._color2 = new paper.Color(0.7, 0.8, 0.8, 0.4);
    this._popoverConfig = {
      visible: false,
      position:{
        x:0,
        y:0
      },
      data:[]
    };

    this._paperContext = paper;

    parseFile(`${this.cvitRoot}cvit.conf`,'ini',{})
      .then(response => this.baseConfig = response)
      .then(()=>{
        this._tag = 'data.';
        if(passedConfig.hasOwnProperty('viewTag') && passedConfig.viewTag) {
          this._tag += passedConfig.viewTag;
        } else if (qs && qs.tag !== 'general'){
          this._tag += qs.tag;
        } else {
          if(this.baseConfig.general.hasOwnProperty('data_default')){
            this._tag += this.baseConfig.general.data_default;
          } else {
            throw new Error('Default dataset has not been configured.');
          }
        }

        let tag = this._tag;
        let viewConfig = passedConfig.viewConf ? passedConfig.viewConf : this.baseConfig[tag].conf;
        let dataSources = passedConfig.gff
          ? passedConfig.gff
          : qs && qs.gff
          ? qs.gff
          :  typeof this.baseConfig[tag].defaultData === 'string'
          ?  [this.baseConfig[tag].defaultData]
          :  this.baseConfig[tag].defaultData;

        // set fetch parameters
        let pcFetchParam = passedConfig.hasOwnProperty('fetchParam') ? passedConfig.fetchParam : {};
        let genFetchParam = this.baseConfig.general.hasOwnProperty('fetchParam') ? this.baseConfig.general.fetchParam: {};
        this._fetchParam = this._combineObjects(genFetchParam, pcFetchParam );
        // Load configuration for view
        this.loadViewConfig(this.cvitRoot+viewConfig);
        // Load _viewData for view
        this.loadInitialData(dataSources);
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
  }

  get mouseTool(){
    return this._mouseTool;
  }

  set mouseTool(tool){
    this._mouseTool = tool;
  }

  get paper(){
    return this._paperContext;
  }

  get view(){
    return this._viewLayout;
  }



  get color1(){
    return this._color1;
  }

  get color2(){
    return this._color2;
  }

  set color1(color){
    this._color1 = color;
  }

  set color2(color){
    this._color2 = color;
  }

  get popoverConfig(){
    return this._popoverConfig;
  }

  get status () {
    return this._status;
  }

  set status (status) {
    this._status = status;
  }


  setColor(target,color){
    this[target] = color;
    this._inform();
  }

  setActive(state){
    this.active = state;
    this._inform();
  }

  setDirty(state){
    this.dirty = state;
    if(state === false){ this.active = 'canvas'}
    this._inform();
  }

  setStatus(state){
    this.status = state;
    this._inform();
  }

  setTool(state){
    this.mouseTool = state;
    this._inform();
  }

  setPopover(props){
    for(let key in props){
      if(props.hasOwnProperty(key) && this._popoverConfig.hasOwnProperty(key)){
        this._popoverConfig[key] = props[key];
      }
    }
    this._inform();
  }

  /**
   * Public Methods
   */

  loadInitialData(files){
    files = files.map(file => this.cvitRoot+file );
    this.loadData(files)
  }
  /**
   * Load view _viewData from the passed file locations
   * @param files
   * @param fetchParam optional
   */
  loadData(files, fetchParam = {}) {
    this.status = 'Loading view data.';
    this._viewData = {};
    files.forEach((file, i) => {

      let fp = fetchParam.hasOwnProperty(file)
          ? fetchParam[file]
          : this._fetchParam.hasOwnProperty(file)
              ? this._fetchParam[file]
              : fetchParam;

      this.appendData(file,fp)
        .then(() => {
          if (i === files.length-1) {
            this.status = 'View data loaded';
            this.setDirty(true);
          }
        })
        .catch(e => {
          this.setStatus("error loading data");
          console.error(e);
        });
    });
  }

  /**
   * Load _viewConfig from the passed file location
   * @param file
   * @param fetchParam optional
   */
  loadViewConfig(file, fetchParam = {}){
    this.status = 'Loading view configuration.';
    this._viewConfig = {};
    let fp = fetchParam.hasOwnProperty(file)
        ? fetchParam[file]
        : this._fetchParam.hasOwnProperty(file)
            ? this._fetchParam[file]
            : {};
    parseFile(file, 'ini',fp) //get <config.ini/conf>
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
        console.log('set d load vc');
        this.status = 'View config loaded.';
        this.setDirty(true);
      })
      .catch(e => {
        this.setStatus("error loading view configuration");
        console.error(e);
      });
  }

  /**
   * Append view _viewData from the passed file to existing dataset
   * @param {string} file
   * @param fetchParam
   * @returns {promise}
   */
  appendData(file,fetchParam = {}){
    if(this._active !== 'status'){
      this.status = 'Appending data.';
      this._active = 'status';
      this._inform();
    }

    let fp = fetchParam.hasOwnProperty(file)
        ? fetchParam[file]
        : this._fetchParam.hasOwnProperty(file)
            ? this._fetchParam[file]
            : fetchParam;
    let aliases = this.data.hasOwnProperty('alias') ? this.data.alias : {};
    return parseFile(file, 'gff',fp,this._viewLayout.chrOrder,aliases)
      .then(response => this._viewData = this._combineObjects(this._viewData,response))
      .then(()=> this._viewLayout.chrOrder = this._setChrOrder(this._viewData))
      .then(()=> {
        console.log('set d append data');
        this.status = 'Data appended.';
        this.setDirty(true);
      })
      .catch(e => {
        this.setStatus("error appending data");
        console.error(e);
      });

  }

  appendGff(gff,fetchParam = {}){
    this.status = 'Appending gff data.';
    let fp = fetchParam.hasOwnProperty(file)
        ? fetchParam[file]
        : this._fetchParam.hasOwnProperty(file)
            ? this._fetchParam[file]
            : fetchParam;
    parseFile(gff,'gff',fp)
        .then(response => this._viewData = this._combineObjects(this._viewData,response))
        .then(()=> this._viewLayout.chrOrder = this._setChrOrder(this._viewData))
        .then(()=> {
          console.log('set d append gff');
          this.status = 'gff appended.';
          this.setDirty(true);
        })
      .catch(e => {
        this.setStatus("error appending gff data");
        console.error(e);
      });
  }



  /**
   * Private Methods
   */

  /**
   * Callback to alert preact that model has updated and set _viewLayout
   * @private
   */

  _inform(){
    console.log("inform",this.active);
    if(this._viewConfig.general && this._viewData.hasOwnProperty('chromosome') && this._dirty){
      console.log("inform dirty");
      this._viewLayout = this._setupView(this._viewData,this._viewConfig);
      this._active = 'redraw';
      if(!this._trigger) {
        this._trigger = true;
        document.dispatchEvent(this._dataLoaded);
      }
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
 
      /** add glyph/draw_as sub-configuration to given configuration object */
      if(append[key] !== undefined) {
        if(append[key].hasOwnProperty('glyph') && base[append[key]['glyph']]){
          append[key] = this._combineObjects(JSON.parse(JSON.stringify(base[append[key]['glyph']])),append[key]);
        }

        if(append[key].hasOwnProperty('draw_as') && base[append[key]['draw_as']]){
            append[key] = this._combineObjects(JSON.parse(JSON.stringify(base[append[key]['draw_as']])), append[key]);
        }
      }

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
   * @returns {{chrOrder: Array, yOffset: {offsetTop: number, offsetBottom: number}, canvas: {color: any, width: number, height: number}, min: number, xOffset: number, max: number, chrMax: *, chrWidth: number, zoom: number, chrMin: *, yScale: number}}
   * @private
   */
 _setupView(dataModel,viewConfig) {
    let chr = dataModel.hasOwnProperty('chromosome') ? dataModel.chromosome : null; //should never return null
    // set up view limits
    let viewSetup = {
      min: viewConfig.general.ruler_min,
      max: viewConfig.general.ruler_max,
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
            parseInt(this.baseConfig['general'].width) : 0,
        height: this.baseConfig[this._tag].hasOwnProperty('height') ?
          parseInt(this.baseConfig[this._tag].height):
          this.baseConfig['general'].hasOwnProperty('height') ?
            parseInt(this.baseConfig['general'].height) : 600,
        color: this.baseConfig[this._tag].hasOwnProperty('canvasColor') ?
          parseInt(this.baseConfig[this._tag].canvasColor):
          this.baseConfig['general'].hasOwnProperty('canvasColor') ?
            this.baseConfig['general'].canvasColor : 'white',
      },
      displayControls: this.baseConfig[this._tag].hasOwnProperty('displayControls') ?
        this.baseConfig[this._tag].displayControls:
          this.baseConfig['general'].hasOwnProperty('displayControls') ?
            this.baseConfig['general'].displayControls : 'full',
      colorClasses : viewConfig.classes || {},
      setPopover: (props)=> this.setPopover(props)
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

    if(viewSetup.min > viewConfig.general.ruler_min) viewSetup.min = viewConfig.general.ruler_min;
    if(viewSetup.max < viewConfig.general.ruler_max) viewSetup.max = viewConfig.general.ruler_max;

    viewSetup.yScale = Index._setYScale(viewSetup.canvas.height, viewSetup.max,viewSetup.min,viewSetup.yOffset);

    return viewSetup;
  }

  _setChrOrder(viewData){
   let order = this._viewLayout.chrOrder || [];
   for(let key in viewData){
     if(viewData.hasOwnProperty(key)){
       for(let k in viewData[key]){
         if(viewData[key].hasOwnProperty(k) && k !=='features' && order.indexOf(k) !== -1){
           order.push(k);
         }
       }
     }
   }
   return order;
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

  static _setYScale(height,chrMax,chrMin,{offsetTop,offsetBottom=0}){
    return (height-(offsetTop+offsetBottom))/(chrMax-chrMin);
  }
}
