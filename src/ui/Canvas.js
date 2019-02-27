import {h, Component} from 'preact';
import paper from 'paper';

import paperTest from '../canvas/Test';
import layoutView from './LayoutView';

export default class CvitCanvas extends Component{
  constructor(){
    super();
    this.state = {paperState:null};
  }

  componentDidMount() {
    paper.setup(document.getElementById('cvit-canvas'));
    let layer = new paper.Layer();
    layer.name = 'cvitLayer';
  }

  componentDidUpdate(){
    if(this.props.cvitData.hasOwnProperty('chromosome') && this.props.cvitConfig.general) {
      layoutView(this.props.cvitData, this.props.cvitConfig, this.props.cvitView);
    }

    paper.view.draw();
  }

  render(props,state){
    return (
      <canvas
        class={'twelve columns'}
        id={'cvit-canvas'}
        style={{
          backgroundColor: '#fffdd0',
          height:600
        }}
      />
    );
  }
}