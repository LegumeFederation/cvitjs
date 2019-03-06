import paper from 'paper';
import rbush from 'rbush';

import glyph from '../../../canvas/glyph';
import layoutRulers from '../../../canvas/rulers/Rulers';
import {formatColor, spreadBackbones} from '../../../canvas/Utilities';

/**
 * Configure paper.project's view to reflect the current cvit model
 * @param data
 * @param config
 * @param view
 */
export default function layoutView(data,config,view){

  /** setup paper base layer's main group */
  let active = paper.project.getActiveLayer();
  active.removeChildren();
  active.cvitComponents = [];
  let baseGroup = new paper.Group();
  baseGroup.name = 'cvitView';

  /** draw Title */
  _setTitle(config);

  /** setup rulers **/
  layoutRulers(data,config,view);
  let rulers = paper.project.getLayers()['rulersLayer'].children['rulers'];

  /** setup view area **/
  view.leftEdge = rulers.children['leftRuler'].getStrokeBounds().right;
  view.rightEdge = rulers.children['rightRuler'].getStrokeBounds().left;
  view.yAdjust = rulers.children['leftRuler'].rulerStart - view.yOffset.offsetTop;
  view.xOffset = 0;

  /** draw backbones **/
  if(data.hasOwnProperty('chromosome')) {
    data.chromosome.features.forEach(chromosome => {
      let chr = glyph({data: chromosome, config: config.general, view: view}, 'chromosome');
      baseGroup.addChild(chr.group);
    });
  }

  /** draw all config groups **/
  for(let key in config){
    //Iterate through data and add to their target chromosomes
    if(key !== 'general' && config.hasOwnProperty(key)) {
      //set glyph/subglyph and the data.<group> that the features can be found in.
      let cGlyph = config[key].glyph ? config[key].glyph : key;
      let cSubglyph = config[key].draw_as ? config[key].draw_as : config[key].shape ? config[key].shape : key;
      let cDataGroup;
      //Set data source if custom
      if(config[key].feature){
        let split = config[key].feature.split(':');
        cDataGroup = split.length > 1 ? [split[1],split[0]] : split;
      } else {
        cDataGroup = [key];
      }

      //Go through each chromosome's backbone in order
      view.chrOrder.forEach(chr => {
        //Draw features if they exist
        if(data[cDataGroup[0]] && data[cDataGroup[0]][chr]){
          let targetChr = baseGroup.children[chr].children[chr];
          view.chrBounds = targetChr.getStrokeBounds();
          let keyGroup = new paper.Group();
          keyGroup.name = key;
          baseGroup.children[chr].addChild(keyGroup);

          //setup pileup
          view.pileup = false;
          if(config[key].hasOwnProperty('enable_pileup') && config[key].enable_pileup > 0) {
            keyGroup.rTree = rbush();
            view.pileup = true;
            view.pileupTree = keyGroup.rTree;
            view.pileupBounds = keyGroup.getStrokeBounds();
          }

          //Add features to be drawn
          data[cDataGroup[0]][chr].features.forEach(data => {
            //filter for feature <source>:<type>
            if(cDataGroup[1]){
              if(data.source !== cDataGroup) return;
            }
            let feature = glyph({data:data,config:config[key],view:view},cGlyph,cSubglyph);
            if(feature && feature.group){
              keyGroup.addChild(feature.group);
              if(view.pileup){
                //update bounds and rTree
                view.pileupBounds = keyGroup.getStrokeBounds();
                keyGroup.rTree.insert({
                  minX: feature.bounds.left,
                  maxX: feature.bounds.right,
                  minY: feature.bounds.top,
                  maxY: feature.bounds.bottom,
                  data: feature
                });
              }
            }
          });
        }
      });

      /** Move backbone groups to prevent overlap */
      spreadBackbones(config,view);
    }
  }

  /** Set background */
  let act = paper.project.getActiveLayer();
  let bg = new paper.Layer();
  bg.name = 'background';
  let vb = paper.project.view.getViewSize();
  let r = paper.Path.Rectangle(0,0,vb.width,vb.height);
  r.fillColor = view.canvas.color;
  bg.sendToBack();
  act.activate();

  //cvitModel.setDrawn();
  paper.view.draw();
  //return components;
}

/**
 * Draw title as a new layer
 *
 * @param config
 * @private
 */

function _setTitle(config){
  let act = paper.project.getActiveLayer();
  let bg = new paper.Layer();
  bg.name = 'cvitTitle';
  let cvitTitle = config.general.title.split(/<[/i]+>/);
  let titleLoc;
  let titleSize = parseInt(config.general.title_font_size);
  let titleX;
  let titleY;
  if (config.general.title_location) {
    let titlePos = config.general.title_location.match(/\((.*),(.*)\)/);
    titleX = parseInt(titlePos[1]);
    titleY = parseInt(titlePos[2]) + titleSize;
  } else {
    titleX = parseInt(config.general.image_padding) + parseInt(config.general.border_width);
    titleY = titleX + titleSize;
    let heightAllow = parseInt(config.general.title_height);
    if (heightAllow > titleY) {
      titleY = heightAllow;
    }
  }
  titleLoc = new paper.Point(titleX, titleY);
  for (let i = 0; i < cvitTitle.length; i++) {
    let title = new paper.PointText(titleLoc);
    title.content = cvitTitle[i];
    title.fontSize = titleSize;
    title.fontWeight = (i % 2) === 1 ? 'Italic' : 'normal';
    title.fillColor = formatColor(config.general.title_color);
    titleLoc.x += title.getStrokeBounds().width;
  }
  act.activate();
}


