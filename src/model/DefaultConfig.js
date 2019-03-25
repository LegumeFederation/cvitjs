export function defaultConfig(){
  return {
    'general': {
      'title' : '',
      'title_height': 20,
      'title_font': 1,
      'title_font_size': 10,
      'title_font_color':'black',
      'title_font_face' : 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
      'image_padding': 10,
      'border_color': 'black',
      'border_width' : 0,
      'chrom_width': 10,
      'fixed_chrom_spacing': 1,
      'chrom_spacing': 90,
      'chrom_padding_left': 0,
      'chrom_padding_right': 0,
      'chrom_padding_top': 50,
      'chrom_padding_bottom': 50,
      'chrom_color': 'gray50',
      'chrom_border': 1,
      'chrom_border_color': 'gray50',
      'chrom_border_width' : 2,
      'chrom_font': 1,
      'chrom_font_size': 10,
      'chrom_font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
      'chrom_label_color': 'gray50',
      'show_strands': 0,
      'display_ruler':'1',
      'reverse_ruler': 0,
      'ruler_min': 0,
      'ruler_max': 0,
      'ruler_color': 'gray60',
      'ruler_font': 1,
      'ruler_font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
      'ruler_font_size': 6,
      'tick_line_width': 8,
      'tick_interval': 50000,
      'minor_tick_divisions': 2
    },

    'classes' : {
      'uncategorized' : 'black'
    },

    'centromere': {
      'centromere_overhang': 2,
      'color': 'gray30',
      'transparent': 0,
      'transparent_percent' : 0.6,
      'border' : 0,
      'border_width' : 2,
      'border_color' : 'black',
      'draw_label': 0,
      'font_size': 6,
      'label_offset': 0,
      'label_color': 'gray30',
      'font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
    },

    'position': {
      'color': 'gray30',
      'transparent': 0,
      'transparent_percent' : 0.6,
      'shape': 'circle',
      'width': 5,
      'offset': 0,
      'border' : 0,
      'border_width' : 2,
      'border_color' : 'black',
      'enable_pileup': 1,
      'pileup_gap': 0,
      'font_size': 6,
      'label_offset': 0,
      'label_color': 'gray30',
      'font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
    },

    'range': {
      'color': 'green',
      'transparent': 0,
      'transparent_percent' : 0.6,
      'width':  6,
      'offset':  0,
      'border' : 0,
      'border_width' : 2,
      'enable_pileup': 1,
      'pileup_gap': 0,
      'draw_label': 1,
      'font_size': 6,
      'label_offset': 0,
      'label_color': 'black',
      'font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
    },

    'border': {
      'color': 'red',
      'border' : 1,
      'border_width' : 2,
      'fill': 0,
      'fill_color': 'red',
      'transparent': 0,
      'transparent_percent' : 0.6,
      'draw_label': 1,
      'font_size': 6,
      'label_offset': 0,
      'label_color': 'black',
      'font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
    },

    'marker': {
      'color': 'green',
      'transparent': 0,
      'transparent_percent' : 0.6,
      'offset': 0,
      'draw_label': 1,
      'font_size': 6,
      'label_offset': 0,
      'label_color': 'black',
      'stroke_width' : 2,
      'font_face': 'Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif',
    },

    'measure': {
      'value_type': 'value_attr',
      'min': 0,
      'max': 0,
      'display': 'heat',
      'draw_as': 'range',
      'width': 2,
      'enable_pileup': 0,
      'pileup_gap': 0,
      'heat_colors':  'redgreen',
      'color': 'red',
      'max_distance': 25,
      'hist_perc':  0.9,
      'transparent':  0,
      'transparent_percent' : 0.6,
      'border' : 0,
      'border_width' : 2,
      'border_color' : 'black',
      'offset':  0,
      'draw_label': 1,
      'font_size': 6,
      'label_offset': 0,
      'label_color': 'black',
      'generate_bins' : 0,
      'bin_size':0,
      'bin_count':0,
      'bin_min': 0,
      'bin_max' : 0,
      'count_classes' : 0
    }
  };
}