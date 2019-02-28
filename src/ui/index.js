import {h, Component} from 'preact';

//import CvitControls from './Overlay';
import CvitCanvas from './Canvas';

export default class CvitUI extends Component {

  constructor(){
    super();
  };

  render(props,state){
    console.log('canvas', props.cvitModel);
    return (
      <div class="row cvit app-main">
        { props.cvitModel.view.hasOwnProperty('canvas')
          ?
          <CvitCanvas
            cvitData={props.cvitModel.data}
            cvitConfig={props.cvitModel.config}
            cvitView={props.cvitModel.view}
          />
          :
          <div class={'twelve columns'} id={'loading-div'}> "Loading Cvit Canvas" </div>
        }

      </div>
    );
  }
};