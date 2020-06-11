import {h, Component} from 'preact';
import paper from 'paper';
import {calculateZoomAndPan, zoomCanvas} from '../../../../../canvas/Utilities';

export default class ZoomTool extends Component{
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
  }


  onClick(event) {
    event.preventDefault();
    let oz = paper.project.getActiveLayer().zoom || 1;
    let nz = calculateZoomAndPan(oz, this.props.zoomDir ,paper.view.center);
    zoomCanvas({zoom:nz.zoom},oz);
    paper.view.draw();
    this.props.changeModal('canvas');
  }

  render(props,state){
    return (
      <span title={props.zoomDir === 1 ? 'Zoom In':'Zoom Out'}>
        <button
          className={'u-full-width cvit-button'}
          onClick={this.onClick}
        >
          <i className={'material-icons'}> {props.zoomDir === 1 ? 'zoom_in' : 'zoom_out' } </i>
        </button>
      </span>
    );
  }
}
