import {h, render} from 'preact';
import paper from 'paper';
import CvitUI from './ui';
import CvitModel from './model';
import {calculateZoomAndPan, zoomCanvas} from './canvas/Utilities';

export default class CVIT {
  constructor(passedData){
    this.model = new CvitModel(passedData,()=>{this._inform();});
    this.ui = render( <CvitUI cvitModel={this.model} />, document.querySelector('#cvit-app'));
    window.onresize = () => {this.model.dirty=true; this._inform()};
  }

  /**
   * Pass file to append to CViT view _viewData post load
   * @param file
   */
  appendData(file){
    this.model.appendData(file)
      .then(()=>{
        this.model.setDirty(true);
      });
  }

  /**
   * overwrite CViT view _viewData post load
   * @param  files
   */
  overwriteData(files){
    this.model.setData(files)
      .then(()=>{
        this.model.setDirty(true);
      });
  }

  /**
   * overwrite CViT view configuration post load
   * @param  file
   */
  overwriteConfig(file){
    this.model.loadViewConfig(file)
      .then( () => this.model.setDirty(true));
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