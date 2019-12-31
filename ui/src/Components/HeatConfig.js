export function heatConfig(compare, side, minValue, maxValue,filters){
  return {
      feature: compare.value,
      glyph: 'measure',
      display: 'heat',
      draw_as: 'range',
      invert_value: 0,
      min: 0,
      max: 0,
      width: 10,
      offset:  side ? 0 : -0,
      bin_size: 500000,
      bin_min: minValue,
      bin_max: maxValue,
      by_class: 1,
      class_filter: filters.map( filter => filter.value),
      class_offset: 2,
      class_heat : ['#fff'],
      draw_label: 0,
      max_distance: 5,
      border: 0,
      value_base: 10,
      generate_bins: 0,
      count_classes: 0,
      transparent: 0,
      transparent_percent: 0.0
  };
}