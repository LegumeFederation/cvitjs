import {h, render} from 'preact';
import CvitUI from './ui';
import CvitModel from './model';
import {parseFile} from "./model/file";

export default class CVIT {
  constructor(passedData){
    this.model = new CvitModel(passedData,()=>{this._inform();});
    this.ui = render( <CvitUI cvitModel={this.model} />, document.querySelector('#cvit-app'));

  }

  /**
   * Pass file to append to CViT view _viewData post load
   * @param file
   * @param fetchConfig
   */
  appendData(file,fetchConfig = {}){
    this.model.appendData(file,fetchConfig)
      .then(()=>{
        this.model.setDirty(true);
      });
  }

  _parseFile(file, format, fetchConfig={}){
    return parseFile(file,format,fetchConfig);
  }

  /**
   * overwrite CViT view _viewData post load
   * @param  files
   * @param fetchConfig
   */
  overwriteData(files,fetchConfig = {}){
    this.model.setStatus('Adding new data.');
    this.model.setData(files,fetchConfig)
      .then(()=>{
        this.model.status = '';
        this.model.setDirty(true);
      });
  }

  /**
   * overwrite CViT view configuration post load
   * @param  file
   * @param fetchConfig
   */
  overwriteConfig(file,fetchConfig = {}){
    this.model.setStatus('Adding new configuration.');
    this.model.loadViewConfig(file,fetchConfig)
      .then( () => {
        this.model.status = '';
        this.model.setDirty(true)
      });
  }

  pingModel(){
    console.log('ping',this.model);
  }

  /**
   * Inform preact that the component's props have updated
   * @private
   */
  _inform(){
    render(<CvitUI cvitModel={this.model} />,
      document.querySelector('#cvit-app'),
      this.ui);
  }

}