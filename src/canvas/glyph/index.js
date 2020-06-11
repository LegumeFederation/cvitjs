import Border from './border/Border';
import Centromere from './centromere/Centromere';
import Chromosome from './chromosome/Chromosome';
import Marker from './marker/Marker';
import Range from './range/Range';
import Position from './position';
import Measure from './measure';
import ClassGroup from "./byclass";

export default function glyph({data,config,view},glyph,subglyph=glyph){
  if(config.by_class){
    return new ClassGroup(data,config,view,glyph,subglyph);
  } else {
    switch (glyph) {
      case 'border':
        return new Border(data, config, view);
      case 'centromere' :
        return new Centromere(data, config, view);
      case 'chromosome':
        return new Chromosome(data, config, view);
      case 'marker':
        return new Marker(data, config, view);
      case 'position':
        return new Position(data, config, view, subglyph);
      case 'range':
        return new Range(data, config, view);
      case 'measure':
        return new Measure(data, config, view, subglyph);
      default:
        console.log(`${glyph}:${subglyph} is not supported`);
    }
  }
}

