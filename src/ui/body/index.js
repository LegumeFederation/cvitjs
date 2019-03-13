import {h, Component} from 'preact';
import paper from 'paper';

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
    if(paper.project) console.log('body',active,paper.project.getActiveLayer());
    return (
      <div class='row cvit' id={'cvit-main'}>
        {active === 'canvas' || /color.*/.test(active) ?
          <CvitControls
            mouseTool = {props.cvitModel.mouseTool}
            selectTool = {(state) =>{props.cvitModel.setTool(state)}}
            changeModal = {(state) =>{
              if(state !== active) {
                props.cvitModel.setActive(state);
              } else {
                props.cvitModel.setActive('canvas');
              }
            }}
            cColors={{color1:props.cvitModel.color1, color2:props.cvitModel.color2}}
            setColor={(target,color) => props.cvitModel.setColor(target,color)}
          /> :
          null
        }
        {active === 'canvas' ?
          <CvitCanvas
            cvitData={props.cvitModel.data}
            cvitConfig={props.cvitModel.config}
            cvitView={props.cvitModel.view}
            dirty={props.cvitModel.dirty}
            setDirty={(newState)=>props.cvitModel.setDirty(newState)}
            popover={props.cvitModel.popoverConfig}
          />
          :
          active === 'status' ?
            <div className={'twelve columns'} id={'loading-div'}> "Loading Cvit Canvas" </div>
            : <CvitModal
              active={active}
              cColors={{color1:props.cvitModel.color1,color2:props.cvitModel.color2}}
              setColor={(target,color) => props.cvitModel.setColor(target,color)}
            />
        }
      </div>
    );
  }
}