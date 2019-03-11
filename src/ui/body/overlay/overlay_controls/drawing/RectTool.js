import {h, Component} from 'preact';
import paper from 'paper';

/**
 * Tool for drawing rectangles for picture annotation.
 */

export default class RectTool extends Component{
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
    this.state = { tool:null};
  }

  drawRect(start,end){
    let box = new paper.Path.Rectangle(start, end);
    box.strokeWidth = 2;
    box.strokeColor = paper.project.color1;
    box.dashArray = [2, 2];
    box.isErasable = true;
    box.fillColor = paper.project.color2;
    paper.view.draw();
    return box;
  }

  componentDidMount() {
    let tool = new paper.Tool();
    tool.name = 'rect';

    tool.omd = (e) => { // mouse down
      document.body.style.cursor = 'crosshair';
      if (!paper.project.color1) {
        paper.project.color1 = new paper.Color(0, 0, 0, 1);
      }
      if (!paper.project.color2) {
        paper.project.color2 = new paper.Color(0.7, 0.8, 0.8, 0.4);
      }
      let pt = new paper.Point(e.layerX,e.layerY);
      tool.box = this.drawRect(pt,pt);
      tool.dwnPt =  pt;
    };

    tool.omm = (e) => { // mouse move
     this.state.tool.box.remove();
     let pt = new paper.Point(e.layerX,e.layerY);
     tool.box = this.drawRect(tool.dwnPt, pt);
    };

    tool.omu = (e) => { //mouse up
      this.state.tool.box.remove();
      let pt = new paper.Point(e.layerX,e.layerY);
      tool.box = this.drawRect(tool.dwnPt, pt);
      document.body.style.cursor = 'default';
    };

    this.setState({tool:tool});

  }

  componentWillUnmount() {
    this.state.tool.remove();
  }

  onClick(e) {
    e.preventDefault();
    this.props.selectTool('rect');
    this.state.tool.activate();
  }

  render(props,state){
    return (
      <button
        className={'u-full-width cvit-button'}
        onClick={this.onClick}
        disabled={props.active === 'rect'}
      >
        <i className={'material-icons'}> {'crop_square'} </i>
      </button>
    );
  }
}
