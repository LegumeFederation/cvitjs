import {h, Component} from 'preact';
import CvitCanvas from './canvas/Canvas';
import CvitModal from './modal';
import CvitControls from './overlay/Overlay';

export default class CvitHeader extends Component {
  capitalise(str){
    return str.replace(/\w\S*/g, (word) => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }
  render(props,state){
    let active = props.cvitModel.active;
    return (
      <div class='row cvit' id={'cvit-main'}>
        {active === 'canvas' ?
          <CvitControls
            mouseTool = {props.cvitModel.mouseTool}
            selectTool = {(state) =>{props.cvitModel.setTool(state)}}
          /> :
          null
        }
        {active === 'canvas' ?
          <CvitCanvas
            cvitData={props.cvitModel.data}
            cvitConfig={props.cvitModel.config}
            cvitView={props.cvitModel.view}
            dirty={props.cvitModel.dirty}
            redraw={props.cvitModel.redraw}
            setDirty={(newState)=>props.cvitModel.setDirty(newState)}
            setRedraw={(newState=>props.cvitModel.setRedraw(newState))}
          />
          :
          active === 'status' ?
            <div className={'twelve columns'} id={'loading-div'}> "Loading Cvit Canvas" </div>
            : <CvitModal active={active} />
        }
      </div>
    );
  }
}