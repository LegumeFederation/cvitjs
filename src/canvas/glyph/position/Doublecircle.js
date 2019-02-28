import paper from 'paper';
import Glyph from '../Glyph';

/**
 * @file Glyph for drawing ranges, a feature with length placed beside
 *   the chromosome.
 * @author awilkey
 * @module draw/glyph/range
 *
 */

export default class Doublecircle extends Glyph{
  drawFeature(data, config, view) {

    let featureWidth = parseInt(config.width);
    let radius = featureWidth / 2;
    let xOffset = parseInt(config.offset);
    let chrEdge = xOffset > -0 ? view.chrBounds.right : view.chrBounds.left - featureWidth;
    let yLoc = ((data.start - view.min) * view.yScale) + view.yOffset.offsetTop + view.yAdjust;
    let xLoc = (chrEdge + xOffset);
    //   let point = new paper.Point(xLoc, yLoc);
    return new paper.CompoundPath({
      children: [
        new paper.Path.Circle({
          center: new paper.Point(xLoc + (radius / 2), yLoc + radius / 2),
          radius: radius / 2
        }),
        new paper.Path.Circle({
          center: new paper.Point(xLoc + (radius + radius / 2), yLoc + radius / 2),
          radius: radius / 2
        })
      ]
    });
  }
}
