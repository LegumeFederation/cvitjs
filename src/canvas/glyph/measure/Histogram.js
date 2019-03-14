import paper from 'paper';
import Range from '../range/Range'
import {calculateDistance, sign} from '../../Utilities';

/**
 * @file Glyph for drawing ranges, a feature with length placed beside
 *   the chromosome.
 * @author awilkey
 * @module draw/glyph/range
 *
 */

export default class Histogram extends Range{
  constructor(data, config, view){
    super(data, config, view);
    let range = this.group.children[1];
    let mc = view.measureConfig;
    let val = config.value_type === 'value_attr' ? data.attribute.value : data.score;
    let offset = calculateDistance(val,{start:config.offset, stop:config.max_distance},{start:mc.min,stop:mc.max});
    if(sign(config.offset)){
      range.bounds.width = offset;
    } else {
      range.bounds.width = -offset;
    }
  }
}
