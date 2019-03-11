import {h, Component} from 'preact';
import ZoomTool from './overlay_controls/zoom/ZoomTool';
import ResetTool from './overlay_controls/zoom/ResetTool';
import PanTool from './overlay_controls/drawing/PanTool';
import FreeTool from './overlay_controls/drawing/FreedrawTool';
import EraserTool from './overlay_controls/drawing/EraserTool';
import RectTool from './overlay_controls/drawing/RectTool';
import Colorselect from './overlay_controls/drawing/Colorselect';

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
        <ZoomTool changeModal={props.changeModal} zoomDir={1} />
        <ZoomTool changeModal={props.changeModal} zoomDir={-1} />
        <ResetTool changeModal={props.changeModal} />
        <hr />
        <div class={'control-label'}>
          <span> Mouse </span>
        </div>
        <PanTool changeModal={props.changeModal} active={props.mouseTool} selectTool={(tool)=> props.selectTool(tool)} />
        <FreeTool changeModal={props.changeModal} active={props.mouseTool} selectTool={(tool)=>props.selectTool(tool)} />
        <RectTool changeModal={props.changeModal} active={props.mouseTool} selectTool={(tool)=>props.selectTool(tool)} />
        <EraserTool changeModal={props.changeModal} active={props.mouseTool} selectTool={(tool)=>props.selectTool(tool)} />
        <hr />
        {props.mouseTool === 'free' || props.mouseTool === 'rect' ?
          <Colorselect
            changeModal={props.changeModal}
            target={'color1'}
          />
        :
          null
        }
        {props.mouseTool === 'rect' ?
          <Colorselect
            changeModal={props.changeModal}
            target={'color2'}
          />
          :
          null
        }

      </div>
    );
  }
}