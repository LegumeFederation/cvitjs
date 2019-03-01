import {h, Component} from 'preact';
import paper from 'paper';

import layoutView from './LayoutView';

export default class CvitCanvas extends Component{
  constructor(){
    super();
  }

  componentDidMount() {
    paper.setup(document.getElementById('cvit-canvas'));
    let layer = new paper.Layer();
    layer.name = 'cvitLayer';
    layoutView(this.props.cvitData, this.props.cvitConfig, this.props.cvitView);
  }

  componentDidUpdate(){
    if(this.props.cvitData.hasOwnProperty('chromosome') && this.props.cvitConfig.general) {
      layoutView(this.props.cvitData, this.props.cvitConfig, this.props.cvitView);
    }
    paper.view.draw();
  }

  render(props,state){
    let canvas = props.cvitView.canvas;
    let computedStyle = {
      backgroundColor: props.cvitView.color,
      height: canvas.height
    };
    if(canvas.width){
      computedStyle.width = canvas.width;
      computedStyle.maxWidth = canvas.width;
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