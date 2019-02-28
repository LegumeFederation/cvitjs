import paper from 'paper';
import rbush from 'rbush';

import glyph from '../canvas/glyph';
import layoutRulers from '../canvas/rulers/Rulers';
import Chromosome from '../canvas/glyph/chromosome/Chromosome';

/**
 * Add view to canvas.
 * @param cvitModel
 */
export default function layoutView(data,config,view){
  let components = [];

  /** setup paper base layer's main group */
  let active = paper.project.getActiveLayer();
  active.removeChildren();
  active.cvitComponents = [];
  let baseGroup = new paper.Group();
  baseGroup.name = 'cvitView';

  /** setup rulers **/
  layoutRulers(data,config,view);
  let rulers = paper.project.getLayers()['rulersLayer'].children['rulers'];

  /** setup view area **/
  view.leftEdge = rulers.children['leftRuler'].getStrokeBounds().right;
  view.rightEdge = rulers.children['rightRuler'].getStrokeBounds().left;
  view.yAdjust = rulers.children['leftRuler'].rulerStart - view.yOffset.offsetTop;

  /** setup default spacing between backbones **/
  let offsetPadding = parseInt(config.general.chrom_spacing);
  if(!parseInt(config.general.fixed_chrom_spacing)){
    offsetPadding = ((view.rightEdge-view.leftEdge) - (view.chrOrder.length*config.general.chrom_width))/(view.chrOrder.length+1);
  }
  view.xOffset = view.leftEdge + offsetPadding;

  /** draw backbones **/
  if(data.hasOwnProperty('chromosome')) {
    data.chromosome.features.forEach(chromosome => {
      let chr = glyph({data: chromosome, config: config.general, view: view}, 'chromosome');
      baseGroup.addChild(chr.group);
      view.xOffset = chr.group.getStrokeBounds().right + offsetPadding;
    });
  }

  //draw all config groups
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
          targetChr.addChild(keyGroup);

          //setup pileup
          view.pileup = false;
          if(config[key].enable_pileup && config[key].enable_pileup > 0) {
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
    }
  }
  //cvitModel.setDrawn();
  paper.view.draw();
  //return components;
}

/**
 * @description
 * Setup basic view information and rulers
 * @param cvitModel
 * @private
 */

function _initialLayout(cvitModel) {
  console.log('_initialLayout', cvitModel);
}





