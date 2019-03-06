/**
 * @file Glyph for drawing centromeres, a feature drawn on the backbone
 * @author awilkey
 * @module draw/glyph/marker
 *
 */
import paper from 'paper';
import Glyph from '../Glyph';

export default class Border extends Glyph {
  drawFeature(data, config, view) {
    let featureWidth = view.chrBounds.width;
    let featureHeight = (data.end - data.start) * view.yScale;
    let yLoc = ((data.start - view.min) * view.yScale) + view.yOffset.offsetTop + view.yAdjust;
    let xLoc = view.chrBounds.left;
    let point = new paper.Point(xLoc, yLoc);
    let size = new paper.Size(featureWidth, featureHeight);
    return new paper.Path.Rectangle(new paper.Rectangle(point, size));
  }
}