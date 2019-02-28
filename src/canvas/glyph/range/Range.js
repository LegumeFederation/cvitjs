import paper from 'paper';

import {formatColor,collisionOffset} from '../../Utilities';
import Glyph from '../Glyph';

/**
 * @file Glyph for drawing ranges, a feature with length placed beside
 *   the chromosome.
 * @author awilkey
 * @module draw/glyph/range
 *
 */

export default class Range extends Glyph{
  drawFeature(data, config, view) {
    let featureWidth = parseInt(config.width);
    let yLoc = ((data.start - view.min) * view.yScale) + view.yOffset.offsetTop + view.yAdjust;
    let xOffset = parseInt(config.offset);
    let chrEdge = xOffset >= +0 ? view.chrBounds.right : view.chrBounds.left - featureWidth;
    let xLoc = (chrEdge + xOffset);
    let point = new paper.Point(xLoc, yLoc);
    let size = new paper.Size(featureWidth, (data.end - data.start) * view.yScale);
    return new paper.Path.Rectangle(new paper.Rectangle(point, size));
  }
}
