import {h, Component} from 'preact';
import paper from 'paper';

export default class FreeTool extends Component{
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
    this.state = { tool:null};
  }
  componentDidMount() {
    let tool = new paper.Tool();
    
    tool.name = 'free';
    tool.omd = function (e) { // mouse down
      if (!paper.project.color1) {
        paper.project.color1 = new paper.Color(0, 0, 0, 1);
      }
      let path = new paper.Path();
      let point = new paper.Point(e.layerX,e.layerY);
      path.add(point);
      console.log(path);
      path.isErasable = true;
      path.strokeColor = paper.project.color1;
      tool.path = path;
    };

    tool.omm = function (e) { // mouse move
      let point = new paper.Point(e.layerX,e.layerY);
      tool.path.add(point);
    };

    tool.omu = function () { //mouse up
      tool.path.simplify(10);
    };

    this.setState({tool:tool});

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