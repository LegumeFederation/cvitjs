import {h, Component} from 'preact';
import ZoomTool from './overlay_controls/zoom/ZoomTool';
import ResetTool from './overlay_controls/zoom/ResetTool';
import PanTool from './overlay_controls/drawing/PanTool';
import FreeTool from './overlay_controls/drawing/FreedrawTool';
import EraserTool from './overlay_controls/drawing/EraserTool';
import RectTool from './overlay_controls/drawing/RectTool';
import ColorSelector from './overlay_controls/drawing/ColorSelector';

export default class CvitControls extends Component{
  render(props,state){
    console.log('cvitControls',props);
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
        <PanTool
          changeModal={props.changeModal}
          active={props.mouseTool}
          selectTool={(tool)=> props.selectTool(tool)}
        />
        <FreeTool
          changeModal={props.changeModal}
          active={props.mouseTool}
          selectTool={(tool)=>props.selectTool(tool)}
          colors={props.cColors}
        />
        <RectTool
          changeModal={props.changeModal}
          active={props.mouseTool}
          selectTool={(tool)=>props.selectTool(tool)}
          colors={props.cColors}
        />
        <EraserTool changeModal={props.changeModal} active={props.mouseTool} selectTool={(tool)=>props.selectTool(tool)} />
        <hr />
        {props.mouseTool === 'free' || props.mouseTool === 'rect' ?
          <ColorSelector
            changeModal={props.changeModal}
            color={props.cColors.color1}
            setColor={props.setColor}
            target={'color1'}
          />
        :
          null
        }
        {props.mouseTool === 'rect' ?
          <ColorSelector
            changeModal={props.changeModal}
            color={props.cColors.color2}
            setColor={props.setColor}
            target={'color2'}
          />
          :
          null
        }

      </div>
    );
  }
}