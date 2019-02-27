import Chromosome from './chromosome/Chromosome';
import Marker from './marker/Marker';
import Range from './range/Range';
import Position from './position';

export default function glyph({data,config,view},glyph,subglyph=glyph){
  switch (glyph) {
    case 'chromosome':
      return new Chromosome(data,config,view);

    case 'marker':
      return new Marker(data,config,view);

    case 'range':
      return new Range(data,config,view);

    case 'position':
      return new Position(data,config,view,subglyph);

    default:
      console.log('g-s not supp yet', glyph, subglyph);
     // return;
      //throw new Error(glyph + ':' + subglyph + ' is not a valid glyph combination.');
  }
}