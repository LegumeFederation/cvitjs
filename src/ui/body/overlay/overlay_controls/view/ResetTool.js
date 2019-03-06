import {h, Component} from 'preact';
import paper from 'paper';
import {calculateZoomAndPan, panCanvas, zoomCanvas} from '../../../../../canvas/Utilities';

export default class ResetTool extends Component{
  onClick(event) {
    event.preventDefault();
    let oz = paper.project.getActiveLayer().zoom || 1;
    zoomCanvas(1,oz);
    panCanvas(paper.view.center.subtract(paper.project.layers['cvitLayer'].position));
    paper.view.draw();
  }

  render(props,state){
    return (
      <button
        className={'u-full-width cvit-button'}
        onClick={(e)=>this.onClick(e)}
      >
        <i className={'material-icons'}> {'all_out' } </i>
      </button>
    );
  }
}
