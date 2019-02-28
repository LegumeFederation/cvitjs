import paper from 'paper';

import {formatColor,collisionOffset} from '../../Utilities';

/**
 * @file Glyph for drawing ranges, a feature with length placed beside
 *   the chromosome.
 * @author awilkey
 * @module draw/glyph/range
 *
 */

export default class Rect {
  constructor(data, config, view) {
    this.group = this.formatRange(data, config, view);
  }

  // getters and setters
  get children() {
    return this.group.children;
  }

  get bounds(){
    return this.group.getStrokeBounds();
  }

  formatRange(data, config, view) {
    data.name = data.attribute.name ? data.attribute.name : "";
    let fGroup = new paper.Group();
    fGroup.name = data.name;
    let labelGroup = new paper.Group();
    labelGroup.name = data.name + "-label";

    fGroup.addChild(labelGroup);

    let featureWidth = parseInt(config.width);
    let yLoc = ((data.start - view.min) * view.yScale) + view.yOffset.offsetTop + view.yAdjust;
    let xOffset = parseInt(config.offset);
    let chrEdge = xOffset > -0 ? view.chrBounds.right : view.chrBounds.left - featureWidth;
    let xLoc = (chrEdge + xOffset);
    let point = new paper.Point(xLoc, yLoc);
    let size = new paper.Size(featureWidth, featureWidth);
    let r = new paper.Path.Rectangle(new paper.Rectangle(point, size));

    r.strokeWidth = 2;
    r.info = data.attribute;
    r.thisColor = "black";
    let strokeColor = r.info.color ? r.info.color : config.color;
    r.strokeColor = formatColor(strokeColor);
    r.info = data.attribute;
    r.thisColor = "black";
    let fillColor = r.info.color ? r.info.color : config.color;
    r.fillColor = formatColor(fillColor);
    //r.onMouseDown = function () {
    //  utility.attachPopover(r, range);
    //};
    //console.log("rangeTest",view,r,featureGroup);
    if (view.pileup ) {
      let pGap = xOffset >= +0 ? parseInt(config.pileup_gap) : -parseInt(config.pileup_gap);
      r.translate( new paper.Point(collisionOffset(r, view, xOffset, pGap) ,0));
    }
    //if (parseInt(view.config.draw_label) === 1) {
    //  point.y = r.position.y;
    //  var label = utility.generateLabel(r, view, targetGroup.children[target]);
    //  featureGroup.children[gGroup + "-label"].addChild(label);
    //  label.bringToFront();
    //}
    fGroup.addChild(r);
//    r.sendToBack();
    return fGroup;
  }

  /**
   * simple console log to make sure class is loading properly
   */
  static test() {
    console.log("Access of centromere glyph");
  }
}
