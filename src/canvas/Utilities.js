import paper from 'paper';

export function formatColor(color) {
  //TODO: Think about supporting transparency.
  let grey = color.match(/gr[ea]y(.*)/);
  if (grey) {
    color = 'grey';
    if (grey[1].length !== 0) {
      color = parseFloat('.' + grey[1]);
    }
  }
  if (color[0] === '#') {
    return color;
  } else {
    return new paper.Color(color);
  }
}

export function collisionOffset(feature,view,offset,pileupGap) {
  //setup collision search
  let fBounds = feature.getStrokeBounds();
  let offDir = offset >=+0;
  let searchMinX = offDir ? fBounds.left : view.pileupBounds.left;
  let searchMaxX = offDir ? view.pileupBounds.right : fBounds.right;
  let searchSpace = {
    minX: searchMinX,
    minY: fBounds.top,
    maxX: searchMaxX,
    maxY: fBounds.bottom
  };
  //test if there is a pileup
  if (view.pileupTree.collides(searchSpace)) {
    let pileupBound = offDir ? fBounds.left : fBounds.right;
    let lastSearchedMax = offDir ? Math.floor(fBounds.left) : Math.floor(fBounds.right);
    view.pileupTree.search(searchSpace) //search for collisions
      .sort((a,b)=>{return offDir ? a.minX - b.minX : b.maxX - a.maxX;}) //sort results fo lastSearchedMax works
      .some(collision => { //if last+gap !== the edge of next you are in an overhang and can safely place
      if (offDir) {
        if (lastSearchedMax + pileupGap < Math.floor(collision.minX)) return true;
        if (collision.maxX > pileupBound) pileupBound = collision.maxX;
        lastSearchedMax = Math.floor(collision.maxX);
      } else {
        if (Math.floor(collision.maxX)-pileupGap < lastSearchedMax) return true;
        if (collision.minX < pileupBound) pileupBound = collision.minX;
        lastSearchedMax = Math.floor(collision.minX);
      }
      return false;
    });

    let offsetValue = pileupBound + pileupGap - fBounds.left;
    return offDir ? offsetValue : offsetValue - fBounds.width;
  }
  return 0;
}

export function spreadBackbones(config,view){
  /** scale cvitView to 1 to prevent sizing to current zoom */
  let al = paper.projects[0].getActiveLayer();
  let z = al.zoom || 1;
  al.scale(1/z);

  /** Calculate spacing between backbones */
  let baseGroup = al.children['cvitView'];
  let labelGroup = al.children['cvitLabels'];
  let rulers = paper.projects[0].getLayers()['rulersLayer'].children['rulers'];
  let padding = parseInt(config.general.image_padding);
  let lastEdge = rulers.children['leftRuler'].getStrokeBounds().right + padding;
  let offsetPadding = parseInt(config.general.chrom_spacing);
  if(!parseInt(config.general.fixed_chrom_spacing)){ // chrom spacing is variable
    let groupW = 0;
    let groupV = 0;
    baseGroup.children.forEach(child =>{
      if(child.visible){
        groupW += child.getStrokeBounds().width;
        groupV++;
      }
    });
    let calcPadding = ((view.rightEdge-view.leftEdge) - groupW - (2*padding))/(groupV+1);
    offsetPadding = calcPadding > offsetPadding ? calcPadding : offsetPadding;
  }

  /** Move backbones */
  view.chrOrder.forEach((chr) => {
    let chrGroup = baseGroup.children[chr];
    let lb = labelGroup.children[`${chr}-label`];
    if (chrGroup.visible) {
      let chrLeft = chrGroup.getStrokeBounds().left;
      chrGroup.translate(new paper.Point(lastEdge - chrLeft + offsetPadding, 0));
      lastEdge = chrGroup.getStrokeBounds().right;
      lb.position.x = chrGroup.children[chr].position.x;
      lb.visible = true;
    } else {
      lb.visible = false;
    }
  });

  /** scale back */
  al.scale(z);
}

/**
 * zoom the cvit view and the ruler to match the current requested drawing
 * @param newZoom
 * @param oldZoom
 */

export function zoomCanvas(newZoom , oldZoom){
  let zoomScale = newZoom.zoom / oldZoom;
  let cl = paper.projects[0].layers['cvitLayer'];
  let rl = paper.projects[0].layers['rulersLayer'];
  let pt = paper.projects[0].layers['pointerLayer'];
  let ob = {x:0,y:0};
  if(pt){
    ob = pt.children[0].position.subtract(pt.target.position);
  }
  //Scale drawing and rulers
  cl.scale(zoomScale,newZoom.center);
  rl.scale(1, zoomScale);
  let rulers = paper.project.layers['rulersLayer'].children['rulers'];
  //back scale ruler labels
  if(rulers.children.hasOwnProperty('leftRuler')){
    rulers.children['leftRuler'].children['rulerLabels'].children.forEach(child => {
      child.scale(1, 1/zoomScale);
    });
  }
  if(rulers.children.hasOwnProperty('rightRuler')){
    rulers.children['rightRuler'].children['rulerLabels'].children.forEach(child => {
      child.scale(1, 1/zoomScale);
      //child.translate(new paper.Point(1,newZoom/oldZoom));
    });
  }
  // move rulers if needed
  let yMin = cl.children['cvitView'].bounds.topLeft.y;
  let yMax = cl.children['cvitView'].bounds.bottomRight.y;
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

  /** Move pointer with zoom */
  if(pt) {
    let delta = ob.subtract(pt.children[0].position.subtract(pt.target.position));
    pt.children[0].translate(delta);
  }

  /** draw and update zoomLevel */
  paper.projects[0].getActiveLayer().zoom = newZoom.zoom;
  paper.view.draw();
}

/**
 * Pans canvas by x,y offset;
 * @param drag
 */
export function panCanvas(drag){
  let delta = new paper.Point(drag);
  let cv = paper.projects[0].layers['cvitLayer'];
  let pt = paper.projects[0].layers['pointerLayer'];
  cv.translate(delta);
  if(pt) pt.translate(delta);
  let al= paper.project.getActiveLayer();
  zoomCanvas({zoom:al.zoom}, al.zoom);
}

/**
 * Calculates the zoom and x-y offset required for pan
 * @param current - current zoom multiplier 1-8
 * @param delta - 1 or -1 zoom in or out
 * @param center - center of current view
 * @param mouse - center of new view (usually based on mouse position)
 * @param newScale - if you want to set the new zoom to an explicit level
 * @returns {*[]}
 */

export function calculateZoomAndPan (current, delta, center, newScale=current) {
  let zoomLevel = newScale;
  let factor = 1.05;
  if (newScale === current) {
    if (delta < 0) {
      zoomLevel = current / factor;
    }
    if (delta > 0) {
      zoomLevel = current * factor;
    }
  }
  zoomLevel = zoomLevel < 1 ? 1 : zoomLevel > 8 ?  8: zoomLevel;
  let pl = paper.projects[0].getActiveLayer().children['cvitView'];
  center = pl.globalToLocal(center);
  return {zoom:zoomLevel, center:center};
}
