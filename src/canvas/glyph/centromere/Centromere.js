/**
 * @file Glyph for drawing markers, a feature with position but no set size
 * @author awilkey
 * @module draw/glyph/marker
 *
 */

import paper from 'paper';

import {formatColor} from '../../Utilities';

/**
 * @description Adds an individual chromosome backbone to the group
 *
 * @param {object} data - The target backbone to draw.
 * @param {object} parentGroup - The group that the backbone is to be added to.
 * @param {object} view - Object that contains configuration information.
 *
 */

export default class Centromere {
  constructor(data, config, view) {
    this.group = this.formatCentromere(data, config, view);
  }

  // getters and setters
  get children() {
    return this.group.children;
  }

  get bounds(){
    return this.group.getStrokeBounds();
  }

  formatCentromere(data, config, view) {
    data.name = data.attribute.name ? data.attribute.name : "";
    let fGroup = new paper.Group();
    fGroup.name = data.name;
    let labelGroup = new paper.Group();
    labelGroup.name = data.name + "-label";

    fGroup.addChild(labelGroup);

    let overhang = parseInt(config.centromere_overhang);
    let featureWidth = (2 * overhang) + view.chrBounds.width;
    let featureHeight = (data.end-data.start) * view.yScale;
    if(featureHeight < 2) featureHeight = 2;

    let yLoc = ((data.start - view.min) * view.yScale) + view.yOffset.offsetTop + view.yAdjust;
    let xLoc = view.chrBounds.left - overhang;
    let point = new paper.Point(xLoc, yLoc);
    let size = new paper.Size(featureWidth, featureHeight);
    let r = new paper.Path.Rectangle(new paper.Rectangle(point,size));

    r.strokeWidth = 0;
    r.info = data.attribute;
    r.thisColor = "black";
    let strokeColor = r.info.color ? r.info.color : config.color;
    r.fillColor = formatColor(strokeColor);
    //r.onMouseDown = function () {
    //  utility.attachPopover(r, marker);
    //};
    // As per perl CViT marker doesn't accept pileup control
    //if (parseInt(view.config.draw_label) === 1) {
    //  point.y = r.position.y;
    //  var label = utility.generateLabel(r, view, targetGroup.children[target]);
    //  featureGroup.children[gName + "-label"].addChild(label);
    //  label.bringToFront();
    //}
    fGroup.addChild(r);
    //r.sendToBack();
    return fGroup;
  }

  /**
   * simple console log to make sure class is loading properly
   */
  static test() {
    console.log("Access of centromere glyph");
  }
}