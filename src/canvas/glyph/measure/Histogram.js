import Range from '../range/Range';
import {calculateDistance,offsetSign,transformValue} from '../../Utilities';

/**
 * @file Glyph for drawing a histogram bin, a feature with length and depth
 * placed beside the chromosome.
 * @author awilkey
 * @module draw/glyph/distance
 *
 */

export default class Histogram extends Range{
  constructor(data, config, view){
    super(data, config, view);
    let range = this.group.children[1];
    let mc = view.measureConfig;
    let max = mc.max;
    let min = mc.min;
    let val = config.value_type === 'value_attr' ? data.attribute.value : data.score;
    if(config.value_distribution !== 'linear') val = transformValue(val,config.value_distribution, config.value_base);
    if( val < min) val = min;
    if( val > max) val = max;
    let offset = calculateDistance(val,{start:config.offset, stop:config.offset+config.max_distance},{start:min,stop:max},config.invert_value);
    offset = config.offsetDir ? offset : - offset;
    range.bounds.width = offset;

    /** if labelOffset and offset are same direction, shift label) */
    if(offsetSign(config.label_offset) === config.offsetDir){
      this.group.children[0].translate(offset , 0);
    }
  }
}
