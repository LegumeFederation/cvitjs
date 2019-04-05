import paper from 'paper';

/**
 *
 * @param color
 * @returns {paper.Color}
 */
export function formatColor(color) {
  let grey = color.match(/gr[ea]y(\d+)/);
  if (grey) {
    color = 'grey';
    if (grey[1].length !== 0) {
      color = parseFloat(grey[1]/100);
    }
  }
    return new paper.Color(color);
}

/**
 *
 * @param colorArray
 * @param min
 * @param max
 * @param val
 * @returns {paper.Color}
 */
export function calculateColor(colorArray,min,max,val,invert = 0){
  val = calculateDistance(val,{start:0,stop:1},{start:min,stop:max},invert);
  let stop_dist = 1/(colorArray.length-1);
  let cval1 = Math.abs(Math.floor(val/stop_dist));
  let cval2 = Math.abs(Math.ceil(val/stop_dist));
  if(cval1 === cval2) return formatColor(colorArray[cval1]);
  let color1 = formatColor(colorArray[cval1]).components;
  let color2 = formatColor(colorArray[cval2]).components;
  let weight = calculateDistance(val,{start:0,stop:1},{start:(cval1*stop_dist),stop:(cval2*stop_dist)});
  let invWeight = 1-weight;

 return new paper.Color(
    (color2[0]*weight + color1[0]*invWeight) ,
    (color2[1]*weight + color1[1]*invWeight) ,
    (color2[2]*weight + color1[2]*invWeight)
 );
}

/**
 *
 * @param feature
 * @param view
 * @param offset
 * @param offDir
 * @param pileupGap
 * @returns {number}
 */
export function collisionOffset(feature,view,offset,offDir, pileupGap) {
  //setup collision search
  let fBounds = feature.getStrokeBounds();

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

/**
 *
 * @param config
 * @param view
 */
export function spreadBackbones(config,view){
  /** scale cvitView to 1 to prevent sizing to current zoom */
  let al = paper.projects[0].getActiveLayer();
  let z = al.zoom || 1;
  al.scale(1/z);

  /** Calculate spacing between backbones */
  let baseGroup = al.children['cvitView'];
  let labelGroup = al.children['cvitLabels'];
 // let rulers = paper.projects[0].getLayers()['rulersLayer'].children['rulers'];
  let padding = parseInt(config.general.image_padding);
  let lastEdge = view.leftEdge + padding;
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
    let gpad = config.general.display_ruler === 1 ? 1 : 0;
    let calcPadding = ((view.rightEdge-view.leftEdge) - groupW - (2*padding))/(groupV+gpad);
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
  let yMin = cl.children['cvitLabels'].bounds.bottomRight.y;
  rulers.children.forEach(child => {
    let baseRuler;
    if(child.children.hasOwnProperty('rulerLeft')){
      baseRuler = child.children['rulerLeft'];
    } else {
      baseRuler = child.children['rulerRight'];
    }
    baseRuler.bounds.topLeft.y = yMin;
    let tg = child.children['rulerTics'];
    let lg = child.children['rulerLabels'];
    tg.bounds.topLeft.y = yMin;
    lg.bounds.topLeft.y = yMin - lg.children[0].bounds.height;
  });

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
  paper.projects[0].layers['cvitLayer'].translate(delta);
  let al= paper.project.getActiveLayer();
  zoomCanvas({zoom:al.zoom}, al.zoom);
}

/**
 *
 * @param current
 * @param delta
 * @param center
 * @param newScale
 * @returns {{center: *, zoom: number}}
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

/**
 *
 * @param point
 * @param baseScale
 * @param newScale
 * @returns {number}
 */

export function calculateDistance(point, baseScale, newScale, invert = 0) {
  let val =((baseScale.stop - baseScale.start) * (point - newScale.start) / (newScale.stop - newScale.start) + baseScale.start) - baseScale.start;
  return invert ? (baseScale.stop - baseScale.start) - val : val;
}

/**
 *
 * @param value
 * @returns {boolean}
 */
export function offsetSign(value){
  return 1/value === 1/Math.abs(value);
}