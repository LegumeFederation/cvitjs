import {h, Component} from 'preact';
import paper from 'paper';
import {panCanvas} from '../../../../../canvas/Utilities';

export default class PanTool extends Component{
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
    this.state = { tool: null};
  }
  componentDidMount() {
    let pan = new paper.Tool();
    pan.name = 'pan';
    pan.onMouseDrag = (e)=>{
      panCanvas({x:e.movementX, y:e.movementY});
    };
    this.setState({tool:pan});
    pan.activate();
  }

  componentWillUnmount() {
    this.state.tool.remove();
  }

  onClick(event) {
    event.preventDefault();
    this.props.selectTool('pan');
    this.state.tool.activate();
  }

  render(props,state){
    return (
      <button
        className={'u-full-width cvit-button'}
        onClick={this.onClick}
        disabled={props.active === 'pan'}
      >
        <i className={'material-icons'}> {'pan_tool'} </i>
      </button>
    );
  }
}
