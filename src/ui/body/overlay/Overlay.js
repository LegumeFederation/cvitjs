import {h, Component} from 'preact';
import ZoomTool from './overlay_controls/view/ZoomTool';
import PanTool from './overlay_controls/view/PanTool';
import ResetTool from './overlay_controls/view/ResetTool';

export default class CvitControls extends Component{
  render(props,state){
    return (
      <div
        class={'one column'}
        id={'cvit-controls'}
      >
        <div class={'control-label'}>
          <span> Zoom </span>
        </div>
        <ZoomTool zoomDir={1} />
        <ZoomTool zoomDir={-1} />
        <ResetTool/>
        <hr/>
      </div>
    );
  }
}