/**
 * @file draws a "chromosome" backbone that serves as a reference for drawing other features.
 * called chromosome, but can in practice be anything with a length.
 * @author awilkey
 * @module draw/glyph/chromosome
 */

import paper from 'paper';
import rbush from 'rbush';

import {formatColor} from '../../Utilities';

/**
 * @description Adds an individual chromosome backbone to the group
 *
 * @param {object} data - The target backbone to draw.
 * @param {object} parentGroup - The group that the backbone is to be added to.
 * @param {object} view - Object that contains configuration information.
 *
 */

export default class Chromosome {
  constructor(data,config, view) {
    this.positionTree = rbush();
    this.seqName = data.seqName;
    this.group =  this.formatChromosome(data,config,view);
  }

  // getters and setters
  get children(){
    return this.group.children;
  }

  get labelGroup(){
    return this.group.children[`${this.seqName}-label`];
  }

  formatChromosome(data, config, view){
    let group = new paper.Group();
    group.name = this.seqName;

    let labelGroup = new paper.Group();
    labelGroup.name = this.seqName + '-label';
    group.addChild(labelGroup);


    let xPos = view.xOffset;
    let yPos = view.yOffset.offsetTop + view.yAdjust;
    let startOffset = (data.start - view.min) * view.yScale;
    let point = new paper.Point(xPos, yPos + startOffset);

    let size = new paper.Size(view.chrWidth, (data.end - data.start) * view.yScale);
    let rectangle = new paper.Rectangle(point, size);
    let r = new paper.Path.Rectangle(rectangle);

    r.info = data.attribute;
    r.thisColor = 'black';
    r.fillColor = formatColor(config.chrom_color);

    if (config.chrom_border === 1) {
      r.strokeWidth = config.chrom_border_width ? config.chrom_border_width : 2;
      r.strokeColor = formatColor(config.chrom_border_color);
    }

    r.name = group.name;
    group.addChild(r);

    point.x = xPos + view.chrWidth / 2;
    point.y = yPos - view.chrWidth;

    let label = new paper.PointText(point);
    label.justification = 'center';
    label.fontFamily = config.chrom_font_face;
    label.content = data.attribute.hasOwnProperty('name') ? data.attribute.name : group.name;
    label.fontSize = config.chrom_font_size;
    label.fillColor = formatColor(config.chrom_label_color);
    label.name = group.name + 'Label';
    labelGroup.addChild(label);

    return group;
  }

  /**
   * simple console log to make sure class is loading properly
   */
  static test() {
    console.log('Access of centromere glyph');
  }
}
