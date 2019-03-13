/**
 * @file Adds rulers to the canvas.
 * @author awilkey
 */

import paper from 'paper';

/**
 *
 * @param backbone
 * @param config
 * @param view
 */
export default function layoutRulers(backbone, config, view) {
  // Establish layers and core groups

  let baseLayer = paper.project.getActiveLayer();
  if(paper.project.getLayers()['rulersLayer']) paper.project.getLayers['rulersLayer'].remove();
  let rulersLayer = new paper.Layer();
  rulersLayer.name = 'rulersLayer';

  let rulerGroup = new paper.Group();
  rulerGroup.name = 'rulers';
  rulerGroup.minSeq = view.chrMin;
  rulerGroup.maxSeq = view.chrMax;

  let rulerConfig = {};
  rulerConfig.min = view.min;
  rulerConfig.max = view.max;
  rulerConfig.fontSize = parseInt(config.general.ruler_font_size);
  rulerConfig.chromFont = parseInt(config.general.chrom_font_size);
  rulerConfig.yOffset = view.yOffset;
  rulerConfig.xOffset = view.xOffset;
  rulerConfig.scale = view.yScale;
  rulerConfig.color = config.general.ruler_color;
  rulerConfig.width = parseInt(config.general.tick_line_width);
  rulerConfig.interval = parseInt(config.general.tick_interval);
  rulerConfig.division = parseInt(config.general.minor_tick_divisions);

  console.log('CViTjs: Drawing rulers');
  try {
    //Draw right Ruler
    rulerGroup.addChild(_drawRuler(rulerConfig, 'left', 1));
    rulerConfig.xOffset = paper.view.size.width - rulerConfig.xOffset;
    //textGroup.maxOff = textGroup.w;
    //Draw left Ruler
    rulerGroup.addChild(_drawRuler(rulerConfig, 'right', 0));

  } catch (e) {
    console.log(e);
  }

  baseLayer.activate();
}

/**
 * @description Draws the ruler
 *
 * @param rc
 * @param side
 * @param dir
 *
 */
function _drawRuler(rc, side, dir) {
  //Setup ruler's paper groups
  let rGroup = new paper.Group();
  rGroup.name = side+'Ruler';
  let rTextGroup = new paper.Group();
  rTextGroup.name = 'rulerLabels';
  let rTicGroup = new paper.Group();
  rTicGroup.name = 'rulerTics';

  rGroup.addChild(rTextGroup);
  rGroup.addChild(rTicGroup);

  // get actual on-canvas size of label
  let label = new paper.PointText(0, 0);
  label.content = rc.max;
  label.fontSize = rc.fontSize + 'px';
  rc.labelWidth = label.bounds.width + rc.fontSize;
  label.remove();

  //draw backbone line
  let min = rc.min;
  let max = rc.max;
  let rulerFontSize = rc.fontSize;
  let yPos = rc.yOffset.offsetTop + rc.chromFont;
  let xPos = dir === 1 ? rc.xOffset : rc.xOffset + rc.width + rc.labelWidth;
  let point = new paper.Point(xPos, yPos);
  let size = new paper.Point(0, (max + (0 - min)) * rc.scale);
  let r = new paper.Path.Line(point, point.add(size));
  r.name = 'ruler' + side[0].toUpperCase() + side.slice(1);
  r.strokeColor = rc.color;
  r.strokeWidth = 2;
  rGroup.addChild(r);
  rGroup.rulerStart = yPos;

  //Draw base ruler tic
  let ticW = rc.width + 1;
  let ticD = dir === 1 ? xPos - 1 : rc.xOffset + rc.labelWidth;
  let ticO = new paper.Point(ticW, 0);
  let ticP = new paper.Point(ticD, yPos);
  let tic = new paper.Path.Line(ticP, ticP.add(ticO));
  tic.strokeColor = rc.color;
  tic.strokeWidth = 2;
  rTicGroup.addChild(tic);

  //Draw base ruler label
  let labelX = dir === 1 ? ticP.x + ticO.x + rc.fontSize : ticD - rc.fontSize;
  label = new paper.PointText(labelX, ticP.y);
  label.content = min;
  label.fontSize = rulerFontSize + 'px';
  if (dir !== 1) {
    label.position.x -= label.bounds.width;
  }
  rTextGroup.addChild(label);

  // Draw remaining tics and labels
  let ticInt = rc.interval;
  let intDivision = Math.round(ticInt / rc.division);
  for (let i = intDivision; i < max; i = i + intDivision) {
    let mTicP = new paper.Point(ticD, yPos + (i * rc.scale));
    let mTic = new paper.Path.Line(mTicP, mTicP.add(ticO));
    mTic.strokeColor = rc.color;
    mTic.strokeWidth = 2;
    if (i % ticInt === 0) {
      label = new paper.PointText(labelX, mTicP.y);
      label.content = i;
      label.fontSize = rulerFontSize + 'px';
      rTextGroup.w = label.bounds.bottomRight.x;
      if (dir !== 1) {
        label.position.x -= label.bounds.width;
      }
      rTextGroup.addChild(label);
    }
    rTicGroup.addChild(mTic);
  }

  rc.xOffset = dir === 1 ? rc.xOffset + rc.width + rc.labelWidth : r.x;
  return rGroup;
  // rulerGroup.addChild(rGroup);
  // let rect = new paper.Path.Rectangle(rGroup.getHandleBounds());
  // rect.strokeWidth = 2;
  // rect.strokeColor = 'black';
  // rulerGroup.addChild(rect);
}
