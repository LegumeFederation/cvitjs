import Histogram from './Histogram';

export default function Measure(data,config,view,subglyph){
  switch (subglyph) {
    case 'histogram':
      return new Histogram(data,config,view);

    default:
      console.log('g-s not supp yet', glyph, subglyph);
     // return;
      //throw new Error(glyph + ':' + subglyph + ' is not a valid glyph combination.');
  }
}