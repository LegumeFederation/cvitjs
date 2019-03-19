import Glyph from '../Glyph';
import getDrawFeature from './drawAsHelper';

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
    if( val < mc.min) val = mc.min;
    if( val > mc.max) val = mc.max;
//    let color = calculateDistance(val,{start:config.offset, stop:config.offset+config.max_distance},{start:mc.min,stop:mc.max});
//    range.bounds.width = config.offsetDir ? offset : -offset;
//
    this.group = this.formatGlyph(data, config, view);
  }
}
