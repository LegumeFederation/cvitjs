import Histogram from './Histogram';

export default function Measure(data,config,view,subglyph){
  switch (subglyph) {
    case 'histogram':
      return new Histogram(data,config,view);

    default:
      console.log(`${subglyph} is not supported yet`);
  }
}