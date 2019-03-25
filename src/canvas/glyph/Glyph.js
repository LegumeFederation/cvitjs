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
    /* not passing constructor allows us to call Glyphs to access functions without
       the time cost of initial draw, used for measures */
    if(data) this.group = this.formatGlyph(data, config, view);
  }

  // getters and setters
  get children() {
    return this.group.children;
  }

  get bounds(){
    return this.group.getStrokeBounds();
  }

  formatGlyph(data, config, view) {
    data.name = data.attribute.name ? data.attribute.name : '';
    let fGroup = new paper.Group();
    fGroup.name = data.name;
    let labelGroup = new paper.Group();
    labelGroup.name = data.name + '-label';
    fGroup.addChild(labelGroup);

    let r = this.drawFeature(data,config,view);
    fGroup.addChild(r);

    r.info = data.attribute;
    let fillColor = config.color;

    if(data.attribute.hasOwnProperty('class')){
      if (view.colorClasses.hasOwnProperty(data.attribute.class)) fillColor = view.colorClasses[data.attribute.class];
    }

    let transparent = config.transparent;
    let t_per = 1-config.transparent_percent;
    /** set glyphs stroke */
    //TODO: play more with border glyph
    if((config.hasOwnProperty('border') && config.border) ||
      (config.hasOwnProperty('stroke_width'))
    ){
      r.strokeWidth = config.hasOwnProperty('border_width') ?
       config.border_width :
        config.hasOwnProperty('stroke_width') ?
          config.stroke_width :
          2;
      let strokeColor = config.hasOwnProperty('border_color') ?
        config.border_color :
        r.info.hasOwnProperty('border_color') ?
          r.info.border_color :
          fillColor;
      r.strokeColor = formatColor(strokeColor);
      if(transparent) r.strokeColor.alpha = t_per;
    } else {
      r.strokeWidth = 0;
    }

    /** fill the figure, if it is an option for the glyph */
    let fill = config.hasOwnProperty('fill') ? config.fill : 1;
    if(fill) r.fillColor = formatColor(fillColor);
    if(transparent) r.fillColor.alpha = t_per;

    /** draw label */
    //TODO: Draw labels
    // TODO: Figure out if labels offset from item or from group?

    /** pileup */
    if (view.pileup ) {
      let xOffset = config.offset;
      let pGap = xOffset >= +0 ? config.pileup_gap : -config.pileup_gap;
      fGroup.translate( new paper.Point(collisionOffset(fGroup, view, xOffset, config.offsetDir, pGap) ,0));
    }

    /** Attach Popover Listener */
    r.onClick = (e) => {
      e.preventDefault();
      let pt = fGroup.localToGlobal(fGroup.getStrokeBounds().rightCenter)
        .add(new paper.Point(paper.view.element.offsetLeft,paper.view.element.offsetTop));
      let cl = paper.projects[0].layers['cvitLayer'].children[0];
      if(cl.children['cvitPtr']) cl.children['cvitPtr'].remove();
      let ptrGrp = new paper.Group();
      ptrGrp.name = 'cvitPtr';
      ptrGrp.strokeWidth = 2;
      ptrGrp.strokeColor = 'white';
      let innerCross = new paper.CompoundPath({
        children: [
          new paper.Path.Line(e.point.add({x: 0, y: 1}), e.point.add({x: 0, y: 3})),
          new paper.Path.Line(e.point.add({x: 0, y: -1}), e.point.add({x: 0, y: -3})),
          new paper.Path.Line(e.point.add({y: 0, x: 1}), e.point.add({y: 0, x: 3})),
          new paper.Path.Line(e.point.add({y: 0, x: -1}), e.point.add({y: 0, x: -3}))
        ],
        strokeColor: 'white',
        strokeWidth: 2
      });
      ptrGrp.addChild(innerCross);
      let outerCross = new paper.CompoundPath({
        children: [
          new paper.Path.Line(e.point.add({x: 0, y: 3}), e.point.add({x: 0, y: 6})),
          new paper.Path.Line(e.point.add({x: 0, y: -3}), e.point.add({x: 0, y: -6})),
          new paper.Path.Line(e.point.add({y: 0, x: 3}), e.point.add({y: 0, x: 6})),
          new paper.Path.Line(e.point.add({y: 0, x: -3}), e.point.add({y: 0, x: -6}))
        ],
        strokeColor: 'black',
        strokeWidth: 2
      });
      ptrGrp.addChild(outerCross);
      cl.addChild(ptrGrp);
      view.setPopover(
        {
          visible:true,
          position: {
            x:pt.x,
            y:pt.y,
          },
          data:[data]
        }
      );

      e.stopPropagation();
    };

    return fGroup;
  }

  /**
   * This needs to be extended by the actual glyph but
   * formats the actual drawn glyph
   *
   * @param data
   * @param config
   * @param view
   * @returns object
   */

  drawFeature(data,config,view){
    if(data && config && view) {
      let topLeft = new paper.Point(0, 0);
      let rectSize = new paper.Size(1, 1);
      return new paper.Path.Rectangle(new paper.Rectangle(topLeft, rectSize));
    }
  }
}