export function haploConfig(compare,side,minValue,maxValue,filters){
  return {
    feature : compare.value,
    glyph: 'measure',
    display: 'histogram',
    count_classes: 0,
    class_offset: 0,
    class_space : 1,
    enable_pileup: 0,
    generate_bins: 0,
    offset: side ? 0 : -0,
    width: 3,
    bin_min: maxValue -1 > 0 ? maxValue - 1 : 0 ,
    bin_max: maxValue > 0 ?  maxValue : 1,
    bin_size: 500000,
    by_class: 1,
    class_filter: filters.map( filter => filter.value),
    draw_label: 0,
    max_distance: 5,
    border: 1,
    border_width: 0,
  };
}