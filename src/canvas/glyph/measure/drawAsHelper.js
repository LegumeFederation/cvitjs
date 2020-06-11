import Border from '../border/Border';
import Centromere from '../centromere/Centromere';
import Chromosome from '../chromosome/Chromosome';
import Marker from '../marker/Marker';
import Range from '../range/Range';
import Position from '../position';

export default function getDrawFeature(glyph,subglyph=glyph){
  let drawAs;
  /* disable pileup to speed up */

  switch (glyph) {
    case 'border':
      drawAs =  new Border();
      break;
    case 'centromere' :
      drawAs =  new Centromere();
      break;
    case 'chromosome':
      drawAs = new Chromosome();
      break;
    case 'marker':
      drawAs = new Marker();
      break;
    case 'position':
      drawAs = new Position(null,null,null,subglyph);
      break;
    case 'range':
      drawAs = new Range();
  }

  if (drawAs){
    return drawAs.drawFeature;
  }

  return null;
}