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
      .sort((a,b)=>{return offDir ? a.minX - b.minX : b.maxX - a.maxX}) //sort results fo lastSearchedMax works
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
  let baseGroup = paper.project.getActiveLayer().children['cvitView'];
  let rulers = paper.project.getLayers()['rulersLayer'].children['rulers'];
  let padding = parseInt(config.general.image_padding);
  let lastEdge = rulers.children['leftRuler'].getStrokeBounds().right + padding;
  let offsetPadding = parseInt(config.general.chrom_spacing);
  if(!parseInt(config.general.fixed_chrom_spacing)){
    let groupW = 0;
    let groupV = 0;
    baseGroup.children.forEach(child =>{
      if(child.visible){
        groupW += child.getStrokeBounds().width;
        groupV++;
      }
    });
    let calcPadding = ((view.rightEdge-view.leftEdge) - groupW - (2*padding))/(groupV+1);
    console.log('pad?',offsetPadding, calcPadding, groupW, view.rightEdge-view.leftEdge);
    offsetPadding = calcPadding > offsetPadding ? calcPadding : offsetPadding;
  }

  view.chrOrder.forEach((chr) => {
    let chrGroup = baseGroup.children[chr];
    console.log('offsetting',chr);
    if (chrGroup.visible) {
      console.log('visible', chr);
      let chrLeft = chrGroup.getStrokeBounds().left;
      chrGroup.translate(new paper.Point(lastEdge - chrLeft + offsetPadding, 0));
      lastEdge = chrGroup.getStrokeBounds().right;
    }
  });
}

