import paper from 'paper';
import Glyph from '../Glyph';
import {sign} from '../../Utilities';

/**
 * @file Glyph for drawing ranges, a feature with length placed beside
 *   the chromosome.
 * @author awilkey
 * @module draw/glyph/range
 *
 */

export default class Rect extends Glyph{
  drawFeature(data, config, view) {
    let featureWidth = config.width;
    let yLoc = ((data.start - view.min) * view.yScale) + view.yOffset.offsetTop + view.yAdjust;
    let xOffset = config.offset;
    let chrEdge = sign(xOffset) ? view.chrBounds.right : view.chrBounds.left - featureWidth;
    let xLoc = (chrEdge + xOffset);
    let point = new paper.Point(xLoc, yLoc);
    let size = new paper.Size(featureWidth, featureWidth);
    return new paper.Path.Rectangle(new paper.Rectangle(point, size));
  }
}
