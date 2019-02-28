/**
 * @file Glyph for drawing markers, a feature with position but no set size
 * @author awilkey
 * @module draw/glyph/marker
 *
 */

import paper from 'paper';
import Glyph from '../Glyph';


export default class Marker extends Glyph{
  drawFeature(data, config, view) {
    let featureWidth = parseInt(config.width);
    let yLoc = ((data.start - view.min) * view.yScale) + view.yOffset.offsetTop + view.yAdjust;
    let xOffset = parseInt(config.offset);
    let chrEdge = xOffset >= +0 ? view.chrBounds.right : view.chrBounds.left - featureWidth;
    let xLoc = (chrEdge + xOffset);
    let point = new paper.Point(xLoc, yLoc);
    return new paper.Path.Line(point, new paper.Point(point.x + featureWidth, point.y));
  }
}

