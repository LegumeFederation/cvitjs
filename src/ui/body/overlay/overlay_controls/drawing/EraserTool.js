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

    eraser.onMouseDrag = (e)=>{
      panCanvas({x:e.movementX, y:e.movementY});
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
