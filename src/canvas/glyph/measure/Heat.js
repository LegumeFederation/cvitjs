import Glyph from '../Glyph';
import getDrawFeature from './drawAsHelper';
import {calculateColor,formatColor} from '../../Utilities';
import transformValue from './transformValue';

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
    this.drawFeature = getDrawFeature(config.draw_as,config.shape);
    let mc = view.measureConfig;
    let max = config.value_distribution === 'linear' ? mc.max : transformValue(mc.max,config.value_distribution,config.value_base);
    let min = config.value_distribution === 'linear' ? mc.min : transformValue(mc.min,config.value_distribution,config.value_base);
    let val = config.value_type === 'value_attr' ? data.attribute.value : data.score;
    if(config.value_distribution !== 'linear') val = transformValue(val,config.value_distribution, config.value_base);
    let fc;
    let colorArray = config.heat_colors;
    let invert = config.invert_value;
    if(colorArray === 'redgreen') colorArray = ['#FF0000','#00FF00'];
    if(colorArray === 'greyscale') colorArray = ['#000000','#ffffff'];
    if( val <= min) {
      fc = invert ? formatColor(colorArray[colorArray.length-1]) : formatColor(colorArray[0]);
    } else if( val >= max){
      fc = invert ? formatColor(colorArray[0]) : formatColor(colorArray[colorArray.length-1]);
    } else {
      fc = calculateColor(colorArray, min, max, val, invert);
    }
    if(config.transparent) fc.alpha = 1- config.transparent_percent;
    this.group = this.formatGlyph(data, config, view);
    config.draw_as === 'marker' ? this.group.children[1].strokeColor = fc : this.group.children[1].fillColor = fc;
  }
}
