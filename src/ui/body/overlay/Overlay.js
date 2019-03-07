import {h, Component} from 'preact';
import ZoomTool from './overlay_controls/zoom/ZoomTool';
import ResetTool from './overlay_controls/zoom/ResetTool';
import PanTool from './overlay_controls/drawing/PanTool';
import FreeTool from './overlay_controls/drawing/FreedrawTool';
import EraserTool from './overlay_controls/drawing/EraserTool';

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
        <ResetTool />
        <hr />
        <div class={'control-label'}>
          <span> Mouse </span>
        </div>
        <PanTool active={props.mouseTool} selectTool={(tool)=> props.selectTool(tool)} />
        <FreeTool active={props.mouseTool} selectTool={(tool)=>props.selectTool(tool)} />
        <EraserTool active={props.mouseTool} selectTool={(tool)=>props.selectTool(tool)} />
        <hr />

      </div>
    );
  }
}