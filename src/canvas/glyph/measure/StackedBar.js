import {calculateDistance} from '../../Utilities';
import Glyph from '../Glyph';
import getDrawFeature from './drawAsHelper';

/**
 * @file Glyph for drawing a histogram bin, a feature with length and depth
 * placed beside the chromosome.
 * @author awilkey
 * @module draw/glyph/distance
 *
 */

export default class StackedBar extends Glyph{
  constructor(data, config, view){
    super();
    this.drawFeature = getDrawFeature('range');
    let mc = view.measureConfig;
    let lastOffset = 0;
    this.group = this.formatGlyph(data,config,view);
    this.group.children[1].remove();
    for (let key in view.colorClasses) {
      if (view.colorClasses.hasOwnProperty(key) &&
        (data.attribute.hasOwnProperty(key) || data.attribute.hasOwnProperty(key.toLowerCase()))
      ) {
        let val = data.attribute[key] || data.attribute[key.toLowerCase()];
        let offset = calculateDistance(val,
          {start:config.offset, stop:config.offset+config.max_distance},
          {start:mc.min,stop:mc.max});
        offset = config.offsetDir ? offset: - offset;
        config.color = view.colorClasses[key];
        let bar = this.formatGlyph(data,config,view);
        bar.bounds.width = offset;
        bar.translate(lastOffset,0);
        this.group.insertChild(1,bar);
        lastOffset += offset;
      }
    }
  }
}

