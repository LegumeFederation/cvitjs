import Border from './border/Border';
import Centromere from './centromere/Centromere';
import Chromosome from './chromosome/Chromosome';
import Marker from './marker/Marker';
import Range from './range/Range';
import Position from './position';

export default function glyph({data,config,view},glyph,subglyph=glyph){
  switch (glyph) {
    case 'border':
      return new Border(data,config,view);
    case 'centromere' :
      return new Centromere(data,config,view);

    case 'chromosome':
      return new Chromosome(data,config,view);

    case 'marker':
      return new Marker(data,config,view);

    case 'position':
      return new Position(data,config,view,subglyph);

    case 'range':
      return new Range(data,config,view);

    default:
      console.log(glyph+':'+subglyph+' is not supported');
     // return;
      //throw new Error(glyph + ':' + subglyph + ' is not a valid glyph combination.');
  }
}