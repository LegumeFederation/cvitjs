/**
 * Meta glyph to draw a collection of glyphs broken up by categories in [classes]
 * @param data
 * @param config
 * @param view
 * @param glyph
 * @param subglyph
 * @returns {Ratio|Ratio|Ratio|Heat|Heat|Heat|Distance|Distance|Distance|StackedBar|StackedBar|StackedBar|Histogram|Histogram|Histogram}
 * @constructor
 */

import paper from 'paper';
import Border from '../border/Border';
import Centromere from '../centromere/Centromere';
import Marker from '../marker/Marker';
import Position from '../position/';
import Range from '../range/Range';
import Measure from '../measure';

export default class ClassGroup {
    constructor(data,config,view, glyph, subglyph) {
        this.group = new paper.Group();
        let feature = {};
        let activeClasses = config['class_filter'].length > 0 ? config['class_filter'] : Object.keys(view.colorClasses);
        let baseValue = data.attribute.value;
        let baseClass = data.attribute.class;
        let lastOffset = 0;
        activeClasses.forEach(ac => {
            if(view.colorClasses.hasOwnProperty(ac) && (data.attribute.hasOwnProperty(ac) || data.attribute.hasOwnProperty(ac.toLowerCase())) ){
                data.attribute.class = ac;
                data.attribute.value = data.attribute[ac] || data.attribute[ac.toLowerCase()];
                switch (glyph) {
                    case 'border':
                        feature = new Border(data, config, view);
                        break;
                    case 'centromere' :
                        feature = new Centromere(data, config, view);
                        break;
                    case 'marker':
                        feature = new Marker(data, config, view);
                        break;
                    case 'position':
                        feature = new Position(data, config, view, subglyph);
                        break;
                    case 'range':
                        feature = new Range(data, config, view);
                        break;
                    case 'measure':
                        if(config['class_heat'].length > 0){ //update heat colors if requested.
                            config['heat_colors'] = config['class_heat'].concat([view.colorClasses[ac]]);
                        }
                        feature = new Measure(data, config, view, subglyph);
                        break;
                    default:
                        console.log(`${glyph}:${subglyph} is not supported`);
                }
                this.group.addChild(feature.group);
                feature.group.translate(lastOffset,0);
                let offset = 0;
                if(config['class_space']){
                    offset = config.hasOwnProperty('max_distance') ?
                        config['max_distance'] :
                        config.hasOwnProperty['width'] ?
                            config.width : config['stoke_width'];
                } else {
                    offset = feature.group.bounds.width;
                }
                offset = config.offsetDir ? offset + config.class_offset: -offset-config.class_offset;
                lastOffset += offset;
            }
        });

        if(!baseClass){
            delete data.attribute.class;
        } else {
            data.attribute.class = baseClass;
        }
        if(!baseValue){
            delete data.attribute.value;
        } else {
            data.attribute.value = baseValue;
        }
    }
    get children() {
        return this.group.children;
    }

    get bounds(){
        return this.group.getStrokeBounds();
    }
}
