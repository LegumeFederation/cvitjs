/**
 * @file Glyph for drawing markers, a feature with position but no set size
 * @author awilkey
 * @module draw/glyph/marker
 *
 */

import paper from 'paper';

import {formatColor, collisionOffset} from '../Utilities';

/**
 * @description Adds an individual chromosome backbone to the group
 *
 * @param {object} data - The target backbone to draw.
 * @param {object} parentGroup - The group that the backbone is to be added to.
 * @param {object} view - Object that contains configuration information.
 *
 */

export default class Glyph {
  constructor(data, config, view) {
    this.group = this.formatGlyph(data, config, view);
  }

  // getters and setters
  get children() {
    return this.group.children;
  }

  get bounds(){
    return this.group.getStrokeBounds();
  }

  formatGlyph(data, config, view) {
    data.name = data.attribute.name ? data.attribute.name : "";
    let fGroup = new paper.Group();
    fGroup.name = data.name;
    let labelGroup = new paper.Group();
    labelGroup.name = data.name + "-label";
    fGroup.addChild(labelGroup);

    let r = this.drawFeature(data,config,view);
    fGroup.addChild(r);

    r.info = data.attribute;
    let fillColor = r.info.hasOwnProperty('color') ? r.info.color : config.color;

    /** set glyphs stroke */
    if((config.hasOwnProperty('border') && parseInt(config.border)) ||
       (config.hasOwnProperty('stroke_width'))
    ){
     r.strokeWidth = config.hasOwnProperty('border_width') ?
       parseInt(config.border_width) :
       config.hasOwnProperty('stroke_width') ?
         parseInt(config.stroke_width) :
         2;
     let strokeColor = config.hasOwnProperty('border_color') ?
       config.border_color :
       r.info.hasOwnProperty('border_color') ?
         r.info.border_color :
         fillColor;
     r.strokeColor = formatColor(strokeColor);
    } else {
      r.strokeWidth = 0;
    }

    /** fill the figure, if it is an option for the glyph */
    let fill = config.hasOwnProperty('fill') ? parseInt(config.fill) : 1;
    if(fill) r.fillColor = formatColor(fillColor);

    /** draw label */
    //TODO: Draw labels

    /** pileup */
    if (view.pileup ) {
      let xOffset = parseInt(config.offset);
      let pGap = xOffset >= +0 ? parseInt(config.pileup_gap) : -parseInt(config.pileup_gap);
      fGroup.translate( new paper.Point(collisionOffset(fGroup, view, xOffset, pGap) ,0));
    }

    /** Attach Popover Listener */
    //r.onMouseDown = function () {
    //  utility.attachPopover(r, marker);
    //};

    return fGroup;
  }

  /**
   * simple console log to make sure class is loading properly
   */
  static test() {
    console.log("Access of centromere glyph");
  }

  /**
   * This needs to be extended by the actual glyph
   * @param data
   * @param config
   * @param view
   * @returns glyph
   */

  drawFeature(data,config,view){A
    let topLeft = new paper.Point(0, 0);
    let rectSize = new paper.Size(1, 1);
    return new paper.Path.Rectangle(new paper.Rectangle(topLeft, rectSize));
  }
}