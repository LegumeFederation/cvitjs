import {h, Component} from 'preact';
import paper from 'paper';
import {panCanvas, zoomCanvas} from '../../../../../canvas/Utilities';

export default class ResetTool extends Component{
  onClick(event) {
    event.preventDefault();
    let al = paper.project.getActiveLayer();
    let oz = al.zoom || 1;
    let offset = paper.view.cvtCenter.subtract(al.children['cvitView'].position);
    panCanvas(offset);
    zoomCanvas({zoom:1},oz);
    offset = paper.view.cvtCenter.subtract(al.children['cvitView'].position);
    panCanvas(offset);
    paper.view.draw();
    this.props.changeModal('canvas');
  }

  render(props,state){
    return (
      <span title={'Reset Zoom and Pan'}>
        <button
          className={'u-full-width cvit-button'}
          onClick={(e)=>this.onClick(e)}
        >
          <i className={'material-icons'}> {'all_out' } </i>
        </button>
      </span>
    );
  }
}
