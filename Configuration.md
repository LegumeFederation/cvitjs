# Configuration Files

## Table of Contents
+ [About](#about)
+ [Cvit.conf](#cvitconf)
    + [[general]](#general-configuration)
    + [[data.\<tag>]](#datatag-configuration)
+ [Data.conf](#dataconf)
    + [[general]](#general)
    + [[centromere]](#centromere)
    + [[position]](#position)
    + [[range]](#range)
    + [[border]](#border)
    + [[marker]](#marker)
    + [[measure]](#measure)
        + [Generating values](#generating-bins)
    + [[custom]](#custom)

## About

CViT requires a minimum of three files to function:
+ `cvit.conf` - a general configuration file that points to the other views, and configures some values not easy to deal with in CSS.
+ `data.conf` - a specific configuration file for your particular dataset, may be empty.
+ `data.gff` - a gff file with at least one feature where `column3 = 'chromosome'`, this provides the information to draw.


CViTjs configuration files follow an `.ini` file format of :
```
[section]
key = value
key2 = [value1,value2]
; This is a comment
# This is also a comment
```

In general the values are read as straight strings or numbers, but some may be able to take arrays. In this case, it has been noted below.


An effort has been made to maintain compatability of data configuration and gff files with the legacy perl version of cvit,
and existing users should be able to generate similar images to the original without needing to make any changes.

## Cvit.conf
A `cvit.conf` is ** required ** by CViTjs to know what it is that it is drawing. 
The most basic form this file takes is:

```
[general]
data_default = view1

[data.view1]
conf = data/view1.conf

```

### [general] configuration

The general section can set the following options:

| Option | Default |  Description |
| ---- | ---- | ---- |
| data_default| none | Which tag to default to if one isn't specified |
| height | 600 | Height in px of main canvas |
| width | 80% | Width of canvas, as CViTjs tries to automatically size, it is advised not to edit this option unless needed |
| canvasColor | white | Fill color of canvas background |
| displayControls | full | 'full','zoom', 'none' - show draw and navigation menu |

### [data.\<tag>] configuration

In additon to the ability to override any of the options in `[general]`, each data set has the following options:

| Option | Default |  Description |
| ---- | ---- | ---- |
| conf | none | The configuration file for drawing the view |
| defaultData | none |  [Array] The data file(s) to use for drawing the view. |


As files are fetched, they may not be requried to reside on the local server, as long as the hosting server allows access.

## Data.conf
Another ini file, this one configures the look of drawn cmap images. A `key = value` pair isn't needed
if you are planning on using the defaults, which means this file can be quite small.

In general, the following conventions are used:

| Data type | options |
| ---- | ---- |
| (boolean) | 0 or 1 |
| (color) | HTML color word, hexvalue or 'gray00 - gray100' for quick gray percentage |
| fontDefault | ''Raleway,HelveticaNeue,Helvetica Neue,Helvetica,Arial,sans-serif' |

Sizes are generally in pixels, fontDefault is listed here to avoid cluttering the tables.

### [general]

The general section describes how to draw the base items of CViT, title, ruler, and any data that has the type column (3rd) as `chromosome`
this is the only section that requires the third colum to be set as a specific value, and it is suggested in more 
complicated CViT uses to use one gff file for these backbone values and use a second gff with all your other data. 

#### Title and general configuration
 
| Option | Default | Description |
| ---- | ---- | ---- |
| title | none |  Label for image. |
| title_height | 20 | Space allowance for title in pixels, can ignore if font face and size set |
| title_font_face | fontDefault | Font face to use for title, ignored if empty |
| title_font_size | 10 |Title font size in points, used only in conjunction with font_face |
| title_color | black | Title font color |
| title_location | none | Title location as x,y coords, ignored if missing |
| image_padding | 10 | preferred distance between image and ruler in px |
| border_color | black | Color of the border around the image |

#### Chromosome configuration
A "chromosome" can be any sort of contiguous sequence: chromosome, arm, contig, BAC, et cetera.

| Option | Default | Description |
| ---- | ---- | ---- |
| chrom_width | 10 |  Width of chromosome in px |
| fixed_chrom_spacing | 1 | (boolean) if 0, automatically attempt to fit all chromosomes in view window, otherwise use fixed values |
| chrom_spacing | 90 | Number of pixles between chromosomes |
| chrom_color | gray50 | (color) Fill color for the chromosome bar |
| chrom_border_color | black | Border color for the chromosome bar |
| chrom_font_face | fontDefault | Fontface to use for labels |
| chrom_font_size | 10 | Font size for chromosome labels in points. |
| chrom_label_color | gray50 | (color) Color of chromosome labels |

In addition the following options have been added from the legacy format:

| Option | Default | Description |
| ---- | ---- | ---- | 
| chrom_padding_top | 50 | pixels between start of smallest chromosome and top of canvas |
| chrom_padding_bottom | 50 | pixles between stop of talles chromosome and bottom of canvas |
| chrom_border_size | 2 | width of chromosome border |

#### Ruler configuration 

| Option | Default | Description |
| ---- | ---- | ---- | 
| display_ruler | 1 | The ruler is a guide down either side of image showing units 0=none, 1=both, L=left side only, R=right side only |
| reverse_ruler | 0 | (boolean) 1 = ruler units run greatest to smallest |
| ruler_units | none |  Ruler units (e.g. "cM, "kb") |
| ruler_min | 0 | minimum value on ruler, if > min chrom value, will be adjusted |
| ruler_max | 0 | Maximum value on ruler, if < max chrom value, will be adjusted |
| ruler_color | gray60 | (color) Color to use for the rulers and labels |
| ruler_font_face | fontDefault | Font face to use for ruler labels |
| ruler_font_size | 6 | Ruler font size in points, used only in conjuction with font_face |
| tick_line_width | 8 | length of ruler tick marks |
| tick_interval | 50000 | Ruler tick mark units in original chromosome units |
| minor_tick_divisions | 2 |  Number of minor divisions per major tick (1 for none) |

`class_colors` and `[classes]` have yet to be implemented.
```
; Use these colors in this order when displaying sequences of different classes.
;  For example, different gene families, BACs in different phases.
; TYPE: colors
class_colors = red, green, blue, orange, purple, turquoise, OliveDrab, honeydew, chocolate, tomato, aquamarine, MediumSlateBlue, azure, LawnGreen, SkyBlue, chartreuse, LightYellow, maroon, yellow, FloralWhite, cyan, salmon

; Assign colors to classes like this: <class-name> = <color>
[classes]
NBS_TIR = red
NBS_CC = blue
```

### [centromere]
 A centromere is a specialized feature; displayed over top the chromosome bar.
 A centromere is identified by the word "centromere" in the 3rd column of the
 GFF file.

| Option | Default | Description |
| ---- | ---- | ---- |
| centromere_overhang| 2 | Centromere rectangle or line extends this far on either side of the chromosome |
| color | gray30 | (color) Color to use when drawing the centromere |
| transparent | 0 | (boolean) Whether or not to use transparency |
| draw_label | 0 | (boolean) 1 = draw centromere label |
| font_face | fontDefault |  Font face to use for centromere label |
| font_size | 6 | Size of label in pt |
| label_offset | 0 | Start labels this many pixels right of glyph (negative for left) |
| label_color | gray30 |  Color to use for labels|

The following options have been added from the legacy format:

| Option | Default | Description |
| ---- | ---- | ---- |
| border | 0 | (boolean) Draw a border around the feature.|
| border_width | 2 | Width of a drawn border in px |
| border_color | black | color of drawn border |
| transparent_percent | 0.6 | Percent transparency from 0-1 |

### [position]

Positions are displayed as dots or rectangles beside the chromosome bar.
Positions that are too close to be stacked are "piled up" in a line.
A sequence feature is designated a position if its section sets glyph=position.


| Option | Default | Description |
| ---- | ---- | ---- |
| color | red | (color) Color to use when drawing positions |
| transparent | 0 | (boolean)  add transparency to glyph |
| shape | circle | shape to draw glyph, cvit by default supports 'circle', 'rect', 'doublecircle' |
| width | 5 | width of glyph in px |
| offset | 0 | number of px to offset glyph from backbone, -0 or less draws on the left |
| enable_pileup | 1 | (boolean) Offset glyph if it would occupy the same space as another of this type.
| pileup_gap | 0 | Number of px past edge of overlapped glyph to draw |
| draw_label | 1 | (boolean) 1 = draw centromere label |dd
| font_face | fontDefault |  Font face to use for centromere label |
| font_size | 6 | Size of label in pt |
| label_offset | 0 | Start labels this many pixels right of glyph (negative for left) |
| label_color | gray30 |  Color to use for labels|

The following options have been added from the legacy format:

| Option | Default | Description |
| ---- | ---- | ---- |
| border | 0 | (boolean) Draw a border around the feature.|
| border_width | 2 | Width of a drawn border in px |
| border_color | black | color of drawn border |
| transparent_percent | 0.6 | Percent transparency from 0-1 |

### [range]
Ranges are displayed as bars alongside the chromosome bar or as borders draw within the chromosome bar.
A sequence feature is designated a range if its section sets glyph=range or

| Option | Default | Description |
| ---- | ---- | ---- |
| color | red | (color) Color to use when drawing positions |
| transparent | 0 | (boolean)  add transparency to glyph |
| width | 5 | width of glyph in px |
| offset | 0 | number of px to offset glyph from backbone, -0 or less draws on the left |
| enable_pileup | 1 | (boolean) Offset glyph if it would occupy the same space as another of this type.
| pileup_gap | 0 | Number of px past edge of overlapped glyph to draw |
| draw_label | 1 | (boolean) 1 = draw centromere label |
| font_face | fontDefault |  Font face to use for centromere label |
| font_size | 6 | Size of label in pt |
| label_offset | 0 | Start labels this many pixels right of glyph (negative for left) |
| label_color | gray30 |  Color to use for labels|

The following options have been added from the legacy format:

| Option | Default | Description |
| ---- | ---- | ---- |
| border | 0 | (boolean) Draw a border around the feature.|
| border_width | 2 | Width of a drawn border in px |
| border_color | black | color of drawn border |
| transparent_percent | 0.6 | Percent transparency from 0-1 |

### [border]

A border is displayed directly over the chromosome.
A sequence feature is designated a range if its section sets glyph=border.
Unlike centromeres, borders are drawn to fit the backbone.

| Option | Default | Description |
| ---- | ---- | ---- |
| color | red | (color) Color to use when drawing the border |
| fill | 0 | (boolean) Fill the border with color |
| transparent | 0 | (boolean)  add transparency to glyph |
| draw_label | 1 | (boolean) 1 = draw centromere label |
| font_face | fontDefault |  Font face to use for centromere label |
| font_size | 6 | Size of label in pt |
| label_offset | 0 | Start labels this many pixels right of glyph (negative for left) |
| label_color | gray30 |  Color to use for labels|

The following options have been added from the legacy format:

| Option | Default | Description |
| ---- | ---- | ---- |
| border_width | 2 | Width of a drawn border in px |
| fill_color | color | color to use when filling border |
| transparent_percent | 0.6 | Percent transparency from 0-1 |


; 1=fill in area between borders, 0=don't

### [marker]
Markers are like positions without pileup, treated as a simple line. A sequence feature is designated a marker if its section sets glyph=marker

| Option | Default | Description |
| ---- | ---- | ---- |
| color | red | (color) Color to use when drawing positions |
| transparent | 0 | (boolean)  add transparency to glyph |
| offset | 0 | number of px to offset glyph from backbone, -0 or less draws on the left |
| draw_label | 1 | (boolean) 1 = draw centromere label |dd
| font_face | fontDefault |  Font face to use for centromere label |
| font_size | 6 | Size of label in pt |
| label_offset | 0 | Start labels this many pixels right of glyph (negative for left) |
| label_color | gray30 |  Color to use for labels|

The following options have been added from the legacy format:

| Option | Default | Description |
| ---- | ---- | ---- |
| width | 5 | width of glyph in px |
| stroke_width | 2 | Width of a drawn stroke in px |
| transparent_percent | 0.6 | Percent transparency from 0-1 |



### [measure]
Measures are any form of glyph where a value is important to how the glyph is drawn.
Value is indicated by score (6th) column in GFF or in value= attribute in attribute (9th) column.


Currently, measure supports the following three display options:

| Option | Available Glyphs | Description |
| ---- | ---- | ---- |
| heat | All | Changes the Glyph's color based on value's % of maximum-minimum range |
| distance | All | Moves Glyph away from backbone based on value's % of maximum-minimum range |
| histogram | range | Draws range box to take up full space based on value. |

Not all options below are available for all display types, these options will be noted. When configuring a distance,
all the options for the glyph chosen by `draw_as` are also available, and the options defined for that glyph style will 
be used unless overwritten here.
 
Measures are configured as follows  :

| Option | Use With | Default | Description |
| ---- | ---- | ---- | ---- |
| value_type | all | value_attr |  'score_col' - use column 6, 'value_attr' - use colum 9 "value" attribute |
| display | all | heat | Which of the display options above to use. |
| draw_as | heat,distance | range | How to draw the glyph. May use centromere, position, range, border or marker |
| enable_pileup | all | 0 | (boolean) Move glyph if it overlaps with others, suggest leaving off for histograms |
| heat_colors | heat | redgreen | (array)(colors) Array of two or more colors to use for generating the heat intensity. In addition to an array `redgreen` is an alias for [red,green] and `grayscale` is an alias for [black,white] |
| max_distance | distance,histogram | 25 | maximum aditional offset in pixels |
| min | all | 0 | minimum value, will be overridden if actual min is smaller. |
| max | all | 9 | maximum value, will be overridden if actual max is larger. |

The following options have been added from the legacy format:

| Option | Use With | Default | Description |
| ---- | ---- | ---- | ---- |
| generate_bins | all | 0 | (boolean) Generate bins and use count as value. |
| bin_size | all | 0 | If `generate_bins` size of each bin in backbone units |
| bin_count | all | 0 | If `generate_bins` number of bins per backbone. |
| bin_min | all | 0 | Set a hard minimum, will not be overridden |
| bin_max | all | 0 | If not zero, set a hard maximum |

#### Generating bins

If `genrate_bins = 1` is defined in a measure configuration, instead of using provided values, CViT will attempt to 
use the provided data to generate values to draw the measure with, it does this based on the state of `bin_size` and `bin_count`.
In all cases, the value is based on the count of the number of features within a bin. Also, the bin_size used is slightly
dynamic, as the value is tweaked slightly to prevent counting bins outside either end of the backbone.

##### `generate_bins = 1` and both `bin_count` and `bin_size` are `0`

CViT goes over each backbone and generates bins based on rice's rule 
```
Ceil( 2*n^(1/3) )

```
where n is the number of features on that backbone.

This is used to determine a bin_size for each backbone, with the smallest bin_size being kept for drawing the resulting measure.


##### `generate_bins = 1` and `bin_size > 0`


The provided `bin_size` is used.


##### `generate_bins = 1` and `bin_count > 0`

`bin_size` is calculated per backbone based on fitting the provided number of bins.

##### `generate_bins = 1` and both `bin_count` and `bin_size` are `>0`

Is treated the same as `bin_size > 0`

### [custom]

Characteristics for a custom sequence type can be defined by naming a section
by the source and type columns of the GFF. For example,
``` 
ZmChr1 IBM2_2008_Neighbors locus 882.70 882.70 . . . Name=tb1;color=moss
```
would be identified by IBM2_2008_Neighbors:locus.

Custom fields are initialised by having any text in the header portion of the ini file `[ header ]`  that isn't one of 
the already discussed reserved keywords (general,centromere,position,border,range,marker)

After defing a custom feature, it inherits the configuration of the parent `glyph = type`, all of which can be overridden
in this section.

The following two options are required to be defined for a custom glyph

| Option | Description |
| ---- | ---- |
| feature | Either <source>:<type> or now just <type>, uses col2:col3 or col3 to determine features to draw |
| glyph | Which of the above glyphs to draw the feature as. |

