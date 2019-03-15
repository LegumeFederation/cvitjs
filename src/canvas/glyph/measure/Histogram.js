import Range from '../range/Range';
import {calculateDistance} from '../../Utilities';

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
    let val = config.value_type === 'value_attr' ? data.attribute.value : data.score;
    let offset = calculateDistance(val,{start:config.offset, stop:config.max_distance},{start:mc.min,stop:mc.max});
    range.bounds.width = config.offsetDir ? offset : -offset;
  }
}