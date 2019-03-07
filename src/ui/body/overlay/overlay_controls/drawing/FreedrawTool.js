import {h, Component} from 'preact';
import paper from 'paper';

export default class FreeTool extends Component{
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
    this.state = { tool:null};
  }
  componentDidMount() {
    let free = new paper.Tool();
    free.name = 'free';
    this.setState({tool:free});

  }

  componentWillUnmount() {
    this.state.tool.remove();
  }

  onClick(event) {
    event.preventDefault();
    this.props.selectTool('free');
    this.state.tool.activate();
  }

  render(props,state){
    return (
      <button
        className={'u-full-width cvit-button'}
        onClick={this.onClick}
        disabled={props.active === 'free'}
      >
        <i className={'material-icons'}> {'create'} </i>
      </button>
    );
  }
}
