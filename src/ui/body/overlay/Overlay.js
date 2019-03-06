import {h, Component} from 'preact';
import ZoomTool from './overlay_controls/view/ZoomTool';
import PanTool from './overlay_controls/view/PanTool';

export default class CvitControls extends Component{
  render(props,state){
    return (
      <div
        id={'cvit-controls'}
      >
        <ZoomTool zoomDir={1}/>
        <ZoomTool zoomDir={-1}/>
      </div>
    );
  }
}