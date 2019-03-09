import {h, Component} from 'preact';
import paper from 'paper';

export default class EraserTool extends Component{
  constructor(){
    super();
    this.state = { tool:null};
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    let eraser = new paper.Tool();
    let hitOptions = {
      segments: true,
      stroke: true,
      fill: true,
      tolerance: 5
    };

    eraser.omd = (e)=>{
      let hitTest = paper.project.hitTest(new paper.Point(e.layerX,e.layerY), hitOptions);
      if (hitTest.item.isErasable) {
        hitTest.item.remove();
      }
    };

    eraser.name = 'eraser';
    this.setState({tool:eraser});
  }

  componentWillUnmount() {
    this.state.tool.remove();
  }

  onClick(event) {
    event.preventDefault();
    this.props.selectTool('erase');
    this.state.tool.activate();
  }

  render(props,state){
    return (
      <button
        className={'u-full-width cvit-button'}
        onClick={this.onClick}
        disabled={props.active === 'erase'}
      >
        <i className={'material-icons'}> {'remove'} </i>
      </button>
    );
  }
}
