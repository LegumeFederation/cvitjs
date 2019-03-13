import {h, Component} from 'preact';

//import CvitControls from './Overlay';
import CvitHeader from './header';
import CvitFooter from './footer';
import CvitBody from './body';
import InformationPopover from './popover';

export default class CvitUI extends Component {
  render(props,state){
    return (
      <div>
        <CvitHeader cvitModel={props.cvitModel} />
        <CvitBody cvitModel={props.cvitModel} />
        {props.cvitModel.popoverConfig.visible ?
          <InformationPopover popoverData={props.cvitModel.popoverConfig}/>
          :
          null
        }
        <CvitFooter cvitModel={props.cvitModel} />
      </div>
    );
  }
}
