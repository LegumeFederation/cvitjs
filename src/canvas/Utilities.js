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
    let lastSearchedMax = offset >= +0 ? fBounds.left : fBounds.right;
    view.pileupTree.search(searchSpace).some(collision => {
      if (offset >= +0) {
        if (lastSearchedMax + pileupGap < collision.minX) return false;
        if (collision.maxX > pileupBound) pileupBound = collision.maxX;
        lastSearchedMax = collision.maxX;
      } else {
        if (lastSearchedMax + pileupGap < collision.maxX) return false;
        if (collision.minX < pileupBound) pileupBound = collision.minX;
        lastSearchedMax = collision.minX;
      }
      return true;
    });

    let offsetValue = pileupBound + pileupGap - fBounds.left;
    return offset >= +0 ? offsetValue : offsetValue - fBounds.width;
  }
  return 0;
}

