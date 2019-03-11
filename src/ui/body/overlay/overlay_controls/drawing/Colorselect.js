import {h, Component} from 'preact';
import paper from 'paper';

/**
 * Tool for drawing rectangles for picture annotation.
 */

export default class Colorselect extends Component{
  constructor(props){
    super(props);
    if (!paper.project.color1) {
      paper.project.color1 = new paper.Color(0, 0, 0, 1);
    }
    if (!paper.project.color2) {
      paper.project.color2 = new paper.Color(0.7, 0.8, 0.8, 0.4);
    }
    this.onClick = this.onClick.bind(this);
    this.state = { color:paper.projects[0][props.target]};
  }

  onClick(e) {
    e.preventDefault();
    this.props.changeModal(this.props.target);
  }

  render(props,state){
    return (
      <span title={props.target === 'color1' ? 'Select Line Color' : 'Select Fill Color'}>
        <button
          className={'u-full-width cvit-button'}
          onClick={this.onClick}
        >
          <i
            className={'material-icons'}
            style={{color:state.color.toCSS()}}
          >
            {'stop'}
          </i>
        </button>
      </span>
    );
  }
}
