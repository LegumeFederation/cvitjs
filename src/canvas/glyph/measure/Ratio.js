import StackedBar from './StackedBar';

/**
 * @file Glyph for drawing a histogram bin, a feature with length and depth
 * placed beside the chromosome.
 * @author awilkey
 * @module draw/glyph/distance
 *
 */

export default class Ratio extends StackedBar{
  constructor(data, config, view){
    view.measureConfig.max = data.attribute.value;
    super(data,config,view);
  }
}

