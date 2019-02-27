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
  let searchMinX = offset >= +0 ? fBounds.left : view.pileupBounds.left;
  let searchMaxX = offset >= +0 ? view.pileupBounds.right : fBounds.right;
  let searchSpace = {
    minX: searchMinX,
    minY: fBounds.top,
    maxX: searchMaxX,
    maxY: fBounds.bottom
  };
  //test if there is a pileup
  if (view.pileupTree.collides(searchSpace)) {
    let pileupBound = fBounds.left;
    let lastSearchedMax = offset >= +0 ? Math.floor(fBounds.left) : Math.floor(fBounds.right);
    view.pileupTree.search(searchSpace) //search for collisions
      .sort((a,b)=>{return offset >= +0 ? a.minX - b.minX : a.maxX -b.maxX}) //sort results fo lastSearchedMax works
      .some(collision => { //if last+gap !== the edge of next you are in an overhang and can safely place
      if (offset >= +0) {
        if (lastSearchedMax + pileupGap < Math.floor(collision.minX)) return true;
        if (collision.maxX > pileupBound) pileupBound = collision.maxX;
        lastSearchedMax = Math.floor(collision.maxX);
      } else {
        if (lastSearchedMax + pileupGap < Math.floor(collision.maxX)) return true;
        if (collision.minX < pileupBound) pileupBound = collision.minX;
        lastSearchedMax = Math.floor(collision.minX);
      }
      return false;
    });

    let offsetValue = pileupBound + pileupGap - fBounds.left;
    return offset >= +0 ? offsetValue : offsetValue - fBounds.width;
  }
  return 0;
}

