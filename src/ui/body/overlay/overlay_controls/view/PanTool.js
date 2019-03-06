import {h, Component} from 'preact';
import paper from 'paper';

export default class PanTool extends Component{
  constructor(props) {
    super(props);
    let tool = new paper.Tool();
    console.log('tool',tool);
    if(paper.project) console.log('comp', paper.project.tools);
  }


  render(props,state){
    return (
      <button>
        <i className={'material-icons'}> {'pan_tool'} </i>
      </button>
    );
  }
}
