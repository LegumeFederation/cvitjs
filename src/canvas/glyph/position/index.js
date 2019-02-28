import Rect from './Rect';
import Doublecircle from './Doublecircle';
import Circle from './Circle';

export default function Position(data,config,view,subglyph){
  switch (subglyph) {
    case 'rect':
      return new Rect(data,config,view);
    case 'doublecircle':
      return new Doublecircle(data,config,view);
    case 'circle':
      return new Circle(data,config,view);

    default:
      console.log('g-s not supp yet', glyph, subglyph);
     // return;
      //throw new Error(glyph + ':' + subglyph + ' is not a valid glyph combination.');
  }
}