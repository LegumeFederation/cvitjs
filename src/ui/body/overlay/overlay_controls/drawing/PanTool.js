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
    let tool = new paper.Tool();
    tool.name = 'pan';

    tool.omd = () =>{
      document.body.style.cursor = 'all-scroll';
    };

    tool.omm = (e)=>{
      panCanvas({x:e.movementX, y:e.movementY});
    };

    tool.omu = ()=>{
      document.body.style.cursor = 'default';
    };

    this.setState({tool:tool});
    tool.activate();
  }

  componentWillUnmount() {
    this.state.tool.remove();
  }

  onClick(e) {
    e.preventDefault();
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
