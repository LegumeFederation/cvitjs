import {h, Component} from 'preact';
import paper from 'paper';

import layoutView from './LayoutView';
import {calculateZoomAndPan, panCanvas, spreadBackbones, zoomCanvas} from '../../../canvas/Utilities';

export default class CvitCanvas extends Component{

  constructor(){
    super();
    this.state = {
      isMouseDown: false
    };

    /** Bind mouse move events for click-and-drag events */
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    if(paper.view) paper.view.draw();
  }

  layoutCanvasView(data,config,view){
    console.log('lcv');
    console.log(paper.view);
    let zoom = 1;
    if(paper.view === null) {
      paper.setup(this.base.children[0]);
    } else {
      paper.project.clear();
      zoom = paper.view.zoom;
    }

    let layer = new paper.Layer();
    layer.name = 'cvitLayer';
    paper.view.zoom = zoom;
    layoutView(data, config, view);
    paper.view.draw();
  }

  componentDidMount() {
    console.log('cdm');
    if(paper.view) paper.view.draw();
    if(this.props.dirty) { //only update paper state if there is reason to (changed config or new data)
      this.layoutCanvasView(this.props.cvitData, this.props.cvitConfig, this.props.cvitView);
      paper.view.draw()
    }

  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log('cwrp');
    if(paper.view) paper.view.draw();
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('cwu');
    if (paper.view) {
      paper.view.draw();
      if (nextProps.dirty) {
        this.layoutCanvasView(this.props.cvitData, this.props.cvitConfig, this.props.cvitView);
        paper.view.draw();
      }
    }
  }


  componentDidUpdate(previousProps, previousState, previousContext) {
    console.log('cdu');
    if(paper.view) {
      paper.view.draw();
      if (this.props.dirty) {
        this.layoutCanvasView(this.props.cvitData, this.props.cvitConfig, this.props.cvitView);
        this.props.setDirty(false);
      }
    }
  }

  zoomOnMouse(e){
    e.preventDefault();
    let evtPt = paper.view.getEventPoint(e);
    let oz = paper.project.getActiveLayer().zoom;
    let nz = calculateZoomAndPan(oz, e.deltaY, evtPt);
   // panCanvas(nz[1].multiply(-1));
    zoomCanvas(nz,oz);
  }

  onMouseUp(e){
    this.setState({isMouseDown:false});
  }

  onMouseDown(e){
    this.setState({isMouseDown:true});
  }

  onMouseMove(e){
    e.preventDefault();
   if(this.state.isMouseDown){
     paper.tool.onMouseDrag(e); //tools are set in overlay_controls/tool
   }
  }

  onClick(e){
    console.log('click',e,paper.view.getEventPoint(e));
  }

  render(props,state){
    let canvas = props.cvitView.canvas;
    let computedStyle = {
      backgroundColor: canvas.color,
      height: canvas.height,
      width: canvas.width ? canvas.width : '100%'
    };

    return (
      <div
        className={'eleven columns'}
        id={'cvit-display'}
      >
          <canvas
            id={'cvit-canvas'}
            style={computedStyle}
            onWheel={this.zoomOnMouse}
            onClick={this.onClick}
            onMouseDown={this.onMouseDown}
            onMouseUp={this.onMouseUp}
            onMouseMove={this.onMouseMove}
          />
      </div>
    );
  }
}