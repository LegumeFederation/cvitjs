import Rect from './Rect';

export default function Position(data,config,view,subglyph){
  switch (subglyph) {
    case 'rect':
      return new Rect(data,config,view);

    default:
      console.log('g-s not supp yet', glyph, subglyph);
     // return;
      //throw new Error(glyph + ':' + subglyph + ' is not a valid glyph combination.');
  }
}