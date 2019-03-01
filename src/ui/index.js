import {h, Component} from 'preact';

//import CvitControls from './Overlay';
import CvitHeader from './header';
import CvitFooter from './footer'
import CvitBody from './body';

export default class CvitUI extends Component {
  render(props,state){
    return (
      <div>
        <CvitHeader cvitModel={props.cvitModel} />
        <CvitBody cvitModel={props.cvitModel} />
        <CvitFooter />
      </div>
    );
  }
};
