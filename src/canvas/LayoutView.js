import paper from 'paper';
import rbush from 'rbush';

import glyph from './glyph';
import layoutRulers from './rulers/Rulers';
import {formatColor, offsetSign, spreadBackbones, zoomCanvas} from './Utilities';

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
  let labelGroup = new paper.Group();
  labelGroup.name = 'cvitLabels';


  /** draw Title */
  _setTitle(config);

  /** setup rulers **/
  layoutRulers(data,config,view);
  let rulers = paper.project.getLayers()['rulersLayer'].children['rulers'];

  /** setup view area **/
  view.leftEdge = rulers.children['leftRuler'] ? rulers.children['leftRuler'].getStrokeBounds().right : 0;
  view.rightEdge = rulers.children['rightRuler'] ? rulers.children['rightRuler'].getStrokeBounds().left : view.canvas.width;
  let rulerTop = rulers.children['leftRuler'] ? rulers.children['leftRuler'].rulerStart :
    rulers.children['rightRuler'] ? rulers.children['rightRuler'].rulerStart : view.yOffset.offsetTop;
  view.yAdjust = rulerTop - view.yOffset.offsetTop;
  view.xOffset = 0;

  /** draw backbones **/
  if(data.hasOwnProperty('chromosome')) {
    data.chromosome.features.forEach(chromosome => {
      let chr = glyph({data: chromosome, config: config.general, view: view}, 'chromosome');
      baseGroup.addChild(chr.group);
      labelGroup.addChild(chr.labelGroup);
      if(chromosome.seqName === view.chrMin){ //add a baseline at view.min to make ruler movement easier.
        let yVal = view.yOffset.offsetTop + view.yAdjust;
        let from = new paper.Point(view.leftEdge,yVal);
        let to = new paper.Point(view.rightEdge,yVal);
        let baseline = new paper.Path.Line(from,to);
        baseline.name = 'baseline';
        baseline.strokeWidth = 0;
        labelGroup.addChild(baseline);
      }
    });
  }

 /** draw an invisible baseline */
// let yVal = (data.chromosome.features[view.chrMin].start - view.min) * view.yScale;
// let from = new paper.Point(view.leftEdge,yVal);
// let to = new paper.Point(view.rightEdge,yVal);
//` let baseline = new paper.Path.Line(from,to);
//` baseline.strokeColor = 'black';
//` labelGroup.addChild(baseline);


  /** draw all config groups **/
  for(let key in config){
    //Iterate through data and add to their target chromosomes
    if(key !== 'general' && config.hasOwnProperty(key)) {
      //set glyph/subglyph and the data.<group> that the features can be found in.
      let cGlyph = config[key].glyph ? config[key].glyph : key;
      let cSubglyph = config[key].display ? config[key].display : config[key].shape ? config[key].shape : key;
      let cDataGroup;
      //Set data source if custom
      if(config[key].feature){
        let split = config[key].feature.split(':');
        cDataGroup = split.length > 1 ? [split[1],split[0]] : split;
      } else {
        cDataGroup = [key];
      }

      /** Preprocessing required for 'measure' style glyphs */
      if(config[key].glyph === 'measure') {
        let mb = {
          min: null,
          max: null,
          valueType: config[key].value_type,
          range: [],
          generateBin: ''
        };

        mb.generateBin = !config[key]['generate_bins'] ? 'pre'
          : config[key]['bin_size'] ? 'size'
            : config[key]['bin_count'] ? 'count' : 'auto';

        if (mb.generateBin === 'size') mb.range[0] = config[key]['bin_size'];
        /** calculation of data groups */
        if (mb.generateBin !== 'pre') {
          mb.valueType = 'value_attr';
          /** calculate range and bin */
          view.chrOrder.forEach(chr => {
            if (data[cDataGroup[0]] && data[cDataGroup[0]][chr]) {
              let itree = data[cDataGroup[0]][chr].itree;
              /** calculate bins, can work with any measure type */
              let ct = itree.all().length;
              let nBins = mb.generateBin === 'count' ? config[key]['bin_count'] : Math.ceil(Math.pow(2 * ct, (1 / 3)));
              let target = data['chromosome'][chr].features[0];
              let range = (target.end - target.start) / nBins;
              // if count add range to array, if auto see if this is the smallest range and if so, replace;
              if (mb.generateBin === 'count') { // count maintains independent range-sizes
                mb.range.push(range);
              } else if (mb.generateBin === 'auto') {
                if(mb.range.length) {
                  mb.range[0] = range < mb.range[0] ? range : mb.range[0];
                } else {
                  mb.range[0] = range;
                }
              }
            }
          });

          /** generate new set of features to populate histogram */
          view.chrOrder.forEach((chr, i) => {
            if (data[cDataGroup[0]] && data[cDataGroup[0]][chr]) {
              let itree = data[cDataGroup[0]][chr].itree;
              let target = data['chromosome'][chr].features[0];
              let viewTarget = data[cDataGroup[0]][chr].features[0];
              let ct = 0;
              let r = mb.generateBin !== 'count' ? mb.range[0] : mb.range[i];
              /** fudge range to not overflow backbone  ceil as you want at least 1 bin per bb*/
              let bin = Math.ceil(Math.abs(target.end - target.start)/r);
              r = Math.abs(target.end - target.start)/bin;
              let pos = target.start;
              let end = target.end;
              let measureFeatures = [];
              /** generate features */
              for(pos; pos <= end && ct < bin; pos+=r) {
                let val = itree.search({minX: pos, maxX: pos + r, minY: 0, maxY: 0}).length;
                measureFeatures.push({
                  seqName: target.seqName,
                  source: viewTarget.source,
                  feature: viewTarget.feature,
                  start: pos,
                  end: pos + r,
                  score: '.',
                  strand: '.',
                  frame: '.',
                  attribute: {
                    name: `bin${ct}`,
                    value: val,
                    note: 'generated by cmap'
                  }
                });
                ct++;

                if( !config[key]['bin_max']) {
                  mb.min = val < mb.min || mb.min === null ? val : mb.min;
                } else {
                  mb.min = config[key]['bin_min'];
                }

                if (!config[key]['bin_max']){
                  mb.max = val > mb.max ? val : mb.max;
                } else {
                  mb.max = config[key]['bin_max'];
                }
              }
              data[cDataGroup[0]][chr].calcFeatures = measureFeatures;
            }
          });

        } else {
          /** calculate min/max */
          view.chrOrder.forEach(chr => {
            if (data[cDataGroup[0]] && data[cDataGroup[0]][chr]) {
              let chrGroup = data[cDataGroup[0]][chr];
              let min = mb.valueType === 'value_attr' ? chrGroup.minScore.value : chrGroup.minScore.scoreCol;
              mb.min = min < mb.min || mb.min === null ? min : mb.min;
              let max = mb.valueType === 'value_attr' ? chrGroup.maxScore.value : chrGroup.maxScore.scoreCol;
              mb.max = max > mb.max ? max : mb.max;
            }
          });
        }
        // Use min/max config option.
        if(mb.max < config[key].max) mb.max = config[key].max;
        if (config[key]['bin_max']) mb.max = config[key]['bin_max'];
        if(mb.min > config[key].min) mb.min = config[key].min;
        if(config[key]['bin_min']) mb.min = config[key]['bin_min'];
        view.measureConfig = mb;
      }

      //Go through each chromosome's backbone in order
      view.chrOrder.forEach(chr => {
        //Check if feature's target backbone exists
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

          //make note of offset direction to make drawing a little faster
          if(config[key].hasOwnProperty('offset')) config[key].offsetDir = offsetSign(config[key].offset);
          let g = data[cDataGroup[0]][chr];
          //set feature group to draw
          let dg = view.hasOwnProperty('measureConfig') && view.measureConfig.generateBin !== 'pre' ?
            g.calcFeatures : g.features;
          //Add features to be drawn
          dg.forEach(data => {
            //filter for feature <source>:<type>
            if(cDataGroup[1]){
              if(data.source !== cDataGroup[1]) return;
            }
            let baseConf = {};

            // allows overriding configuration option from gff.
            for (let att in data.attribute){
              if( data.attribute.hasOwnProperty(att) && config[key].hasOwnProperty(att)){
               baseConf[att] = config[key][att];
               config[key][att] = data.attribute[att];
               if(att === 'display' || att === 'shape' ){
                 baseConf[att].sg = cSubglyph;
                 cSubglyph = data.attribute[att];
               }
              }
            }

            let feature = glyph({data:data,config:config[key],view:view},cGlyph,cSubglyph);

            // reset config
            for(let att in baseConf){
              if( baseConf.hasOwnProperty(att) && config[key].hasOwnProperty(att)){
                config[key][att] = baseConf[att];
                if(att === 'display' || att === 'shape' ) cSubglyph = baseConf.sg;
              }
            }

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
  /** Move backbone groups to prevent overlap */
  spreadBackbones(config,view);

  /** Set background */
  let act = paper.project.getActiveLayer();
  let bg = new paper.Layer();
  bg.name = 'background';
  let vb = paper.project.view.getViewSize();
  let r = paper.Path.Rectangle(0,0,vb.width,vb.height);
  r.fillColor = view.canvas.color;
  bg.sendToBack();
  act.activate();
  zoomCanvas({zoom:1},1);
  const x = baseGroup.position.x;
  const y = baseGroup.position.y;
  paper.view.cvtCenter = new paper.Point(x,y); //store the center-point for resetting the view
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
  let titleSize = config.general.title_font_size;
  let titleX;
  let titleY;
  if (config.general.hasOwnProperty('title_location')) {
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
    title.fontFamily = config.general.title_font_face;
    title.content = cvitTitle[i];
    title.fontSize =  titleSize;
    title.fontWeight = (i % 2) === 1 ? 'Italic' : 'normal';
    title.fillColor = formatColor(config.general.title_font_color);
    titleLoc.x += title.getStrokeBounds().width;
  }
  act.activate();
}


