# Configuration Files

## Table of Contents
+ [About](#about)
+ [Cvit.conf](#cvitconf)
+ [Data.conf](#dataconf)
    + [[general]](#general)
    + [[centromere]](#centromere)
    + [[position]](#position)
    + [[range]](#range)
    + [[border]](#border)
    + [[marker]](#marker)
    + [[measure]](#measure)
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


| Option | Default | Description |
| ---- | ---- | ---- |

; Measure value is in either the score column (6th) of the GFF file or a 
;   value= attribute in the 9th column.
; TYPE: enum|VALUES: score_col,value_attr
value_type        = value_attr
; How to display the measurement for each record
; TYPE: enum|VALUES: histogram/heat/distance|DEFAULT: heat
display           = distance
; How to interpret the measure glyph (heatmap and distance only)
; TYPE: enum|VALUES: range/position/border/marker}DEFAULT: range
draw_as           = position
; Heatmap and distance only: shape (don't use 'circle' if measure has meaningful length)
; TYPE: enum|VALUES: circle,rect|DEFAULT: rect
shape             = rect
; Heatmap and distance only: width of rect or circle
; TYPE: integer|DEFAULT: 2
width             = 1
; Heatmap and distance only: whether or not to "pileup" overlaping glyphs
; TYPE: boolean|DEFAULT: 1
enable_pileup    = 1
; Heatmap and distance only: space between adjacent, piled-up ranges
; TYPE: integer|DEFAULT: 0
pileup_gap       = 0
; Heatmap only: color sche to use for scale
; TYPE: enum|VALUES: redgreen,grayscale|DEFAULT: redgreen
heat_colors       = redgreen
; Histogram only: color of measure glyph
; TYPE: color|DEFAULT: red
color             = red
; Distance only: max distance from chromosome
; TYPE: integer|default: 25
max_distance      = 25
; Whether or not to use transparency
; TYPE: boolean|DEFAULT: 0
transparent       = 1
; Distance from chromosome to draw shape
; TYPE: integer
offset            = 2
; 1=draw marker labels, 0=don't
; TYPE: boolean|DEFAULT: 0
draw_label        = 0
; 1 = fill in borders, 0 = don't
; TYPE: boolean|DEFAULT: 1
fill              = 1
; Built-in font to use for labeling markers (font_face overrides this setting)
;   0=gdLargeFont, 1=gdMediumBoldFont, 2=gdSmallFont, 3=gdTinyFont
; TYPE: enum|VALUES: 0,1,2,3|DEFAULT: 1
font              = 1
; Font face file name to use for labeling measures (overrides 'font' setting)
; TYPE: font
font_face         = vera/Vera.ttf
; Font size in points, used only in conjunction with font_face
; TYPE: integer
font_size         = 6
; Start labels this many pixels right of region bar (negative value to move
;   label to the left)
; TYPE: integer
label_offset      = 5
; Color to use for labels
; TYPE: color|DEFAULT: black
label_color         = black


### [custom]

;##############################################################################
; Characteristics for a custom sequence type can be defined by naming a section
;   by the source and type columns of the GFF. For example, 
; ZmChr1 IBM2_2008_Neighbors locus 882.70 882.70 . . . Name=tb1;color=moss
;   would be identified by IBM2_2008_Neighbors-locus.
; All fields are optional unless marked required.
; NOTE: [measure] fields cannot be overridden here.
; Possible fields:
;   feature   = REQUIRED <source>:<type>
;   glyph     = centromere/position/range/border/marker
;   shape     = circle/rect (only applies if glyph=position)
;   width     = <pixels>
;   overhang  = <pixels> (only applies to centromeres and markers)
;   offset    = <pixels>
;   color     = <color name>
;   fill      = 1/0 (only applies to borders)
;   draw_label = 1/0
;   font      = 0(gdLargeFont)/1(gdMediumBoldFont)/2(gdSmallFont)/3(gdTinyFont)
;   font_face = <truetype font in fonts/ directory>
;   font_size = point size
;   label_offset = 1/0

;[gene]
;feature = phytozomev10:gene
;glyph = position
;offset = 1
;color = orange
;

[snp]
feature = snp
glyph = measure
display = heat
draw_as = range
shape = rect
offset = 5
width = 5
enable_pileup = 0
generate_bins = 1

[other]
feature = snp
glyph = measure
display = histogram
draw_as = range
offset = -0
enable_pileup = 0



### [chromosome]
