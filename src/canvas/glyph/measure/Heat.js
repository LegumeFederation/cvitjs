import paper from 'paper';
import Glyph from '../Glyph';
import getDrawFeature from './drawAsHelper';
import {calculateColor,formatColor} from '../../Utilities';

/**
 * @file Glyph for drawing a histogram bin, a feature with length and depth
 * placed beside the chromosome.
 * @author awilkey
 * @module draw/glyph/distance
 *
 */

export default class Heat extends Glyph{
  constructor(data, config, view){
    super();
    this.drawFeature = getDrawFeature({data,config,view},config.draw_as,config.shape);
    let mc = view.measureConfig;
    let val = config.value_type === 'value_attr' ? data.attribute.value : data.score;
    let fc;
    let colorArray = config.heat_colors;
    if(colorArray === 'redgreen') colorArray = ['red','green'];
    if(colorArray === 'greyscale') colorArray = ['black','white'];
    if( val <= mc.min) {
      //val = mc.min;
      fc = formatColor(colorArray[0]);
    } else if( val >= mc.max){
      fc = formatColor(colorArray[colorArray.length-1]);
    } else {
      fc = calculateColor(colorArray, mc.min, mc.max, val);
    }
    this.group = this.formatGlyph(data, config, view);
    this.group.fillColor = fc;
    config.draw_as === 'marker' ? this.group.strokeColor = fc : this.group.fillColor = fc;
  }
}
