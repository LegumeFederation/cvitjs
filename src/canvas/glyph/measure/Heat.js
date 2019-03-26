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
    this.drawFeature = getDrawFeature(config.draw_as,config.shape);
    let mc = view.measureConfig;
    let val = config.value_type === 'value_attr' ? data.attribute.value : data.score;
    let fc;
    let colorArray = config.heat_colors;
    if(colorArray === 'redgreen') colorArray = ['#FF0000','#00FF00'];
    if(colorArray === 'greyscale') colorArray = ['#000000','#ffffff'];
    if( val <= mc.min) {
      fc = formatColor(colorArray[0]);
    } else if( val >= mc.max){
      fc = formatColor(colorArray[colorArray.length-1]);
    } else {
      fc = calculateColor(colorArray, mc.min, mc.max, val);
    }
    if(config.transparent) fc.alpha = 1- config.transparent_percent;
    this.group = this.formatGlyph(data, config, view);
    config.draw_as === 'marker' ? this.group.children[1].strokeColor = fc : this.group.children[1].fillColor = fc;
  }
}
