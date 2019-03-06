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
  }

  layoutCanvasView(data,config,view){
    layoutView(data, config, view);
    this.props.setDirty(false);
    paper.view.draw();
  }

  componentDidMount() {
    if(this.props.dirty) { //only update paper state if there is reason to (changed config or new data)
      if(paper.project) paper.project.clear();
      paper.setup(document.getElementById('cvit-canvas'));
      let layer = new paper.Layer();
      layer.name = 'cvitLayer';
      this.layoutCanvasView(this.props.cvitData, this.props.cvitConfig, this.props.cvitView);
    } else if(this.props.redraw){
      paper.view.draw();
      this.props.setRedraw(false);
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if(this.props.redraw) {
      spreadBackbones(this.props.cvitConfig,this.props.cvitView);
      this.props.setRedraw(false);
    }
    paper.view.draw();
  }

  componentDidUpdate(){
    if(this.props.dirty) {
      this.layoutCanvasView(this.props.cvitData, this.props.cvitConfig, this.props.cvitView);
    }
    paper.view.draw();
  }

  zoomOnMouse(event){
    event.preventDefault();
    let oz = paper.project.getActiveLayer().zoom;
    let nz = calculateZoomAndPan(oz,event.deltaY,paper.project.layers[0].position,paper.project.layers[0].position);
    zoomCanvas(nz[0],oz);
    paper.view.draw();
  }

  onMouseUp(e){
    this.setState({isMouseDown:false});
  }

  onMouseDown(e){
    this.setState({isMouseDown:true});
  }

  onMouseMove(e){
   if(this.state.isMouseDown){
     console.log(e);
     panCanvas({x:e.movementX, y:e.movementY});
   }
  }

  render(props,state){
    let canvas = props.cvitView.canvas;
    let computedStyle = {
      backgroundColor: canvas.color,
      height: canvas.height
    };
    if(canvas.width){
      computedStyle.width = canvas.width;
    }

    return (
      <canvas
        class={'eleven columns'}
        id={'cvit-canvas'}
        style={computedStyle}
        onWheel={this.zoomOnMouse}
        onClick={()=>console.log('onClick!')}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
      />
    );
  }
}