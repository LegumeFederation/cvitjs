import Glyph from '../Glyph';
import getDrawFeature from './drawAsHelper';
import {calculateDistance} from '../../Utilities';
import transformValue from './transformValue';

/**
 * @file Glyph for drawing a histogram bin, a feature with length and depth
 * placed beside the chromosome.
 * @author awilkey
 * @module draw/glyph/distance
 *
 */

export default class Distance extends Glyph{
  constructor(data, config, view){
    super();
    this.drawFeature = getDrawFeature(config.draw_as,config.shape);
    let mc = view.measureConfig;
    this.group = this.formatGlyph(data, config, view);
    let max = config.value_distribution === 'linear' ? mc.max : transformValue(mc.max,config.value_distribution,config.value_base);
    let min = config.value_distribution === 'linear' ? mc.min : transformValue(mc.min,config.value_distribution,config.value_base);
    let val = config.value_type === 'value_attr' ? data.attribute.value : data.score;
    if(config.value_distribution !== 'linear') val = transformValue(val,config.value_distribution, config.value_base);
    if( val < min) val = min;
    if( val > max) val = max;
    let offset = calculateDistance(val,{start:config.offset, stop:config.offset+config.max_distance},{start:min,stop:max},config.invert_value);
    this.group.translate(config.offsetDir ? offset : -offset , 0);

  }
}
