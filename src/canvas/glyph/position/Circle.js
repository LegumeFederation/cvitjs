import paper from 'paper';
import Glyph from '../Glyph';

/**
 * @file Glyph for drawing ranges, a feature with length placed beside
 *   the chromosome.
 * @author awilkey
 * @module draw/glyph/range
 *
 */

export default class Circle extends Glyph{
  drawFeature(data, config, view) {
    let featureWidth = config.width;
    let radius = featureWidth / 2;
    let xOffset = config.offset;
    let chrEdge = config.offsetDir ? view.chrBounds.right : view.chrBounds.left - featureWidth;
    let yLoc = ((data.start - view.min) * view.yScale) + view.yOffset.offsetTop + view.yAdjust;
    let xLoc = (chrEdge + xOffset);
    let point = new paper.Point(xLoc, yLoc);
    return new paper.Path.Circle(point.add(radius), radius);
  }
}
