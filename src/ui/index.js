import {h, Component} from 'preact';

//import CvitControls from './Overlay';
import CvitStatus from './status';
import CvitHeader from './header';
import CvitFooter from './footer';
import CvitBody from './body';
import InformationPopover from './popover';

export default class CvitUI extends Component {
  render(props,state){
    return (
      <div>
        <CvitStatus status={props.cvitModel.status} active={props.cvitModel.active} />
        <CvitHeader cvitModel={props.cvitModel} />
        <CvitBody active={props.cvitModel.active}
                  data={props.cvitModel.data}
                  config={props.cvitModel.config}
                  canvas={props.cvitModel.canvas}
                  dirty={props.cvitModel.dirty}
                  setDirty={(state)=>{props.cvitModel.setDirty(state)}}
                  view={props.cvitModel.view}
                  mouseTool={props.cvitModel.mouseTool}
                  setTool={(state)=>{props.cvitModel.setTool(state)}}
                  setActive={(state)=>{props.cvitModel.setActive(state)}}
                  setStatus={(status)=>{props.cvitModel.setStatus(status)}}
                  popoverConfig={props.cvitModel.popoverConfig}
                  color1={props.cvitModel.color1}
                  color2={props.cvitModel.color2}
                  setColor={(target,color)=>{console.log("cvtUI sc", target, color); props.cvitModel.setColor(target, color)}}
                  cvitModel={props.cvitModel}
                  status={props.cvitModel.status}
        />
        {props.cvitModel.popoverConfig.visible ?
          <InformationPopover popoverData={props.cvitModel.popoverConfig} />
          :
          null
        }
        <CvitFooter cvitModel={props.cvitModel} />
      </div>
    );
  }
}
