import Histogram from './Histogram';
import Heat from './Heat.js';

export default function Measure(data,config,view,subglyph){
  switch (subglyph) {
    case 'histogram':
      return new Histogram(data,config,view);
    case 'heat':
      return new Heat(data,config,view);
    default:
      console.log(`${subglyph} is not supported yet`);
  }
}