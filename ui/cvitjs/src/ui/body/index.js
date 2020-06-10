import {h,Component} from 'preact';

import CvitCanvas from './canvas/Canvas';
import CvitModal from './modal';
import CvitControls from './overlay/Overlay';

export default class CvitBody extends Component {
  render(props, state) {
    let active = props.active;
    let ctrl = props.view.displayControls;
    return (
      <div className={'row cvit'} id={'cvit-main'}>
        {(active === 'canvas' || /color.*/.test(active)) && (ctrl !== 'none') ?
          <CvitControls
            mouseTool={props.mouseTool}
            selectTool={(state) => {
              props.setTool(state);
            }}
            changeModal={(state) => {
              if (state !== active) {
                props.setActive(state);
              } else {
                props.setActive('canvas');
              }
            }}
            cColors={{color1: props.color1, color2: props.color2}}
            setColor={(target, color) => props.setColor(target, color)}
            displayControls={ctrl}
          /> :
          null
        }
        {active === 'canvas' || active === 'redraw' ?
          <CvitCanvas
            cvitData={props.data}
            cvitConfig={props.config}
            cvitView={props.view}
            dirty={props.dirty}
            active={props.active}
            setDirty={(newState) => props.setDirty(newState)}
            updateStatus={(status)=> props.setStatus(status)}
            updateActive={(status)=> props.setActive(status)}
            popover={props.popoverConfig}
            displayControls={ctrl}
          />
          :
          active !== 'status' && active !== 'canvas' && active !== 'redraw' ?
            <CvitModal
              active={active}
              cColors={{color1: props.color1, color2: props.color2}}
              setColor={(target, color) => props.setColor(target, color)}
            />
            :
            null
        }
      </div>
    );
  }
}