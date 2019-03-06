import {h, Component} from 'preact';
import paper from 'paper';

export default class ZoomTool extends Component{
  onClick(event) {
    event.preventDefault();
    let oz = paper.project.getActiveLayer().zoom || 1;
    let nz = this.changeZoom(oz, this.props.zoomDir,paper.view.center, paper.view.center);
    this.zoomCanvas(nz[0],oz);
    paper.view.draw();
  }

  zoomCanvas(newZoom,oldZoom){
    let zoomScale = newZoom/oldZoom;
    let cl = paper.project.layers['cvitLayer'];
    let rl = paper.project.layers['rulersLayer'];
    //Scale drawing and rulers
    cl.scale(zoomScale);
    rl.scale(1, zoomScale);
    let rulers = paper.project.layers['rulersLayer'].children['rulers'];
    //back scale ruler labels
    if(rulers.children.hasOwnProperty('leftRuler')){
      rulers.children['leftRuler'].children['rulerLabels'].children.forEach(child => {
        child.scale(1, 1/zoomScale);
      })
    }
    if(rulers.children.hasOwnProperty('rightRuler')){
      rulers.children['rightRuler'].children['rulerLabels'].children.forEach(child => {
        child.scale(1, 1/zoomScale);
        //child.translate(new paper.Point(1,newZoom/oldZoom));
      })
    }
    // move rulers if needed
    let yMin = cl.children['cvitView'].children[rulers.minSeq].children[rulers.minSeq].bounds.topLeft.y;
    let yMax = cl.children['cvitView'].children[rulers.maxSeq].children[rulers.maxSeq].bounds.bottomRight.y;
    rulers.children.forEach(child => {
      let baseRuler;
      if(child.children.hasOwnProperty('rulerLeft')){
        baseRuler = child.children['rulerLeft'];
      } else {
        baseRuler = child.children['rulerRight'];
      }
      baseRuler.bounds.topLeft.y = yMin;
      baseRuler.bounds.bottomRight.y = yMax;
      let tg = child.children['rulerTics'];
      let lg = child.children['rulerLabels'];
      tg.bounds.topLeft.y = yMin;
      lg.bounds.topLeft.y = yMin - lg.children[0].bounds.height;
    });

    //draw and update zoomLevel
    paper.project.getActiveLayer().zoom = newZoom;
    paper.view.draw();
  }

  changeZoom (current, delta, center, mouse, newScale=current) {
    let zoomLevel = newScale;
    let factor = 1.05;
    if (newScale === current) {
      if (delta < 0) {
        zoomLevel = current / factor;
      }
      if (delta > 0) {
        zoomLevel = current * factor;
      }
      zoomLevel = zoomLevel < 1 ? 1 : zoomLevel < 8 ? zoomLevel : 8;
    }

    let scale = current / zoomLevel;
    let pos = mouse.subtract(center);
    let offset = mouse.subtract(pos.multiply(scale)).subtract(center);
    return [zoomLevel, offset];
  }

  render(props,state){
    return (
      <button
        onClick={(e)=>this.onClick(e)}
      >
        <i className={'material-icons'}> {props.zoomDir === 1 ? 'zoom_in' : 'zoom_out' } </i>
      </button>
    );
  }
}
