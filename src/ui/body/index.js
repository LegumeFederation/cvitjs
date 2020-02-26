import {h,Component} from 'preact';

import CvitCanvas from './canvas/Canvas';
import CvitModal from './modal';
import CvitControls from './overlay/Overlay';

export default class CvitHeader extends Component {
  render(props, state) {
    let active = props.cvitModel.active;
    let ctrl = props.cvitModel.view.displayControls;
    return (
      <div className={'row cvit'} id={'cvit-main'}>
        {
          active === 'status' || props.cvitModel.status !== '' ?
            <div className={'twelve columns'} id={'loading-div'}> {props.cvitModel.status} </div>
            :
            null
        }
        {(active === 'canvas' || /color.*/.test(active)) && (ctrl !== 'none') && props.cvitModel.status === '' ?
          <CvitControls
            mouseTool={props.cvitModel.mouseTool}
            selectTool={(state) => {
              props.cvitModel.setTool(state);
            }}
            changeModal={(state) => {
              if (state !== active) {
                props.cvitModel.setActive(state);
              } else {
                props.cvitModel.setActive('canvas');
              }
            }}
            cColors={{color1: props.cvitModel.color1, color2: props.cvitModel.color2}}
            setColor={(target, color) => props.cvitModel.setColor(target, color)}
            displayControls={ctrl}
          /> :
          null
        }
        {active === 'canvas' ?
          <CvitCanvas
            cvitData={props.cvitModel.data}
            cvitConfig={props.cvitModel.config}
            cvitView={props.cvitModel.view}
            dirty={props.cvitModel.dirty}
            status={props.cvitModel.status}
            setDirty={(newState) => props.cvitModel.setDirty(newState)}
            updateStatus={(status)=> props.cvitModel.setStatus(status)}
            popover={props.cvitModel.popoverConfig}
            displayControls={ctrl}
          />
          :
          active !== 'status' && active !== 'canvas' ?
            <CvitModal
              active={active}
              cColors={{color1: props.cvitModel.color1, color2: props.cvitModel.color2}}
              setColor={(target, color) => props.cvitModel.setColor(target, color)}
            />
            :
            null
        }
      </div>
    );
  }
}