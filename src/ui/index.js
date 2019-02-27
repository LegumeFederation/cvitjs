import {h, Component} from 'preact';

//import CvitControls from './Overlay';
import CvitCanvas from './Canvas';

export default class CvitUI extends Component {

  constructor(){
    super();
  };

  render(props,state){
    return (
      <div class="row cvit app-main">
        {
        //  <CvitControls />
          <CvitCanvas
            cvitData={props.cvitModel.data}
            cvitConfig={props.cvitModel.config}
            cvitView={props.cvitModel.view}
          />
        }
      </div>
    );
  }
};