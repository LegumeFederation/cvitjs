export function histConfig(compare,side,minValue,maxValue,filters,count){
return {
  feature: compare.value,
  glyph: 'measure',
  display: 'histogram',
  count_classes: 0,
  enable_pileup: 0,
  generate_bins: 0,
  offset: side ? 0 : -0,
  width: 3,
  bin_min: minValue,
  bin_max: maxValue,
  bin_size: 500000,
  by_class: 1,
  class_offset : 0,
  class_filter: filters.map( filter => filter.value),
  draw_label: 0,
  max_distance: count*25,
  border: 1,
  border_width :0,
};
}