import {h, Component} from 'preact';
import CvitCanvas from './canvas/Canvas';
import CvitModal from './modal';

export default class CvitHeader extends Component {
  capitalise(str){
    return str.replace(/\w\S*/g, (word) => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }
  render(props,state){
    let active = props.cvitModel.active;
    return (
      <div class="row cvit" id={'cvit-main'}>
        {active === 'canvas' ?
          <CvitCanvas
            cvitData={props.cvitModel.data}
            cvitConfig={props.cvitModel.config}
            cvitView={props.cvitModel.view}
            dirty={props.cvitModel.dirty}
            setDirty={(newState)=>props.cvitModel.setDirty(newState)}
          />
          :
          active === 'status' ?
            <div className={'twelve columns'} id={'loading-div'}> "Loading Cvit Canvas" </div>
            : <CvitModal active={active} />
        }
      </div>
    );
  }
};