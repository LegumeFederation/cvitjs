import {h, Component} from 'preact';
import paper from 'paper';

/**
 * Tool for drawing rectangles for picture annotation.
 */

export default class ColorSelector extends Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
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
            style={{color:props.color.toCSS()}}
          >
            {'stop'}
          </i>
        </button>
      </span>
    );
  }
}
