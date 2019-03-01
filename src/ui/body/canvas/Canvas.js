import {h, Component} from 'preact';
import paper from 'paper';

import layoutView from './LayoutView';

export default class CvitCanvas extends Component{
  constructor(){
    super();
  }

  layoutCanvasView(data,config,view){
    layoutView(data, config, view);
    this.props.setDirty(false);
    paper.view.draw();
  }

  componentDidMount() {
    if(this.props.dirty) { //only update paper state if there is reason to (changed config or new data)
      paper.setup(document.getElementById('cvit-canvas'));
      let layer = new paper.Layer();
      layer.name = 'cvitLayer';
      this.layoutCanvasView(this.props.cvitData, this.props.cvitConfig, this.props.cvitView);
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    paper.view.draw();
  }

  componentDidUpdate(){
    if(this.props.dirty) {
      this.layoutCanvasView(this.props.cvitData, this.props.cvitConfig, this.props.cvitView);
    }
    paper.view.draw();
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
        class={'twelve columns'}
        id={'cvit-canvas'}
        style={computedStyle}
      />
    );
  }
}