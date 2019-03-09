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
    free.omd = function (event) { // mouse down
      if (!paper.project.color1) {
        paper.project.color1 = new paper.Color(0, 0, 0, 1);
      }
      let path = new paper.Path();
      let point = new paper.Point(event.layerX,event.layerY);
      path.add(point);
      console.log(path);
      path.isErasable = true;
      path.strokeColor = paper.project.color1;
      free.path = path;
    };

    free.omm = function (event) { // mouse move
      console.log('on mouseDrag');
      event.preventDefault();
      let point = new paper.Point(event.layerX,event.layerY);
      free.path.add(point);
    };

    free.omu = function () { //mouse up
      free.path.simplify(10);
    };

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
