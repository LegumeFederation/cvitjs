# Configuration Files

## Table of Contents
+ [About](#about)
+ [Cvit.conf](#cvitconf)
+ [Data.conf](#dataconf)
    + [[General]](#general)
    

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
| chrom_label_color | gray50 | Color of chromosome labels |

In addition the following options have been added from the legacy format:

| Option | Default | Description |
| ---- | ---- | ---- | 
| chrom_padding_top | 50 | pixels between start of smallest chromosome and top of canvas |
| chrom_padding_bottom | 50 | pixles between stop of talles chromosome and bottom of canvas |
| chrom_border_size | 2 | width of chromosome border |

### Ruler configuration 
; The ruler is a guide down either side of image showing units
;   0=none, 1=both, L=left side only, R=right side only
; TYPE: enum|VALUES: 0,1,L,R|DEFAULT: 1
display_ruler = L
; 1=ruler units run greatest to smallest, 0=normal order
; TYPE: boolean|DEFAULT: 0
reverse_ruler   = 0
; Ruler units (e.g. "cM, "kb")
; TYPE: string
ruler_units   = kb
; Minimum value on ruler, if > min chrom value, will be adjusted
; TYPE: integer|DEFAULT: 0
ruler_min     = 0
; Maximum value on ruler, if < max chrom value, will be adjusted
; TYPE: integer|DEFAULT: 0
ruler_max     = 0
; Color to use for the ruler(s)
; TYPE: color|DEFAULT: gray60
ruler_color = gray40
; Which built-in font to use (ruler_font_face overrides this setting)
;  0=gdLargeFont, 1=gdMediumBoldFont, 2=gdSmallFont, 3=gdTinyFont
; TYPE: enum|VALUES: (0,1,2,3)|DEFAULT: 1
ruler_font      = 1
; Font face to use for ruler, ignored if empty
; TYPE: font
ruler_font_face = 
; Ruler font size in points, used only in conjuction with font_face
; TYPE: integer
ruler_font_size = 8

; Width of ruler tick marks in pixels
; TYPE: integer|DEFAULT: 8
tick_line_width      = 8        
; Ruler tick mark units in original chromosome units
; TYPE: integer|DEFAULT: 10000
tick_interval        = 10000000     
; Number of minor divisions per major tick (1 for none)
; TYPE: integer|DEFAULT: 2
minor_tick_divisions = 2

; Use these colors in this order when displaying sequences of different classes.
;  For example, different gene families, BACs in different phases.
; See rgb.txt for possible colors
; TYPE: classcolors
class_colors = red, green, blue, orange, purple, turquoise, OliveDrab, honeydew, chocolate, tomato, aquamarine, MediumSlateBlue, azure, LawnGreen, SkyBlue, chartreuse, LightYellow, maroon, yellow, FloralWhite, cyan, salmon

; Assign colors to classes like this: <class-name> = <color>
[classes]
NBS_TIR = red
NBS_CC = blue


;#################
; A centromere is a specialized feature; displayed over top the chromosome bar.
;  A centromere is identified by the word "centromere" in the 3rd column of the
;  GFF file.
[centromere]
; Centromere rectangle or line extends this far on either side of the 
;   chromosome bar
; TYPE: integer|DEFAULT: 2
centromere_overhang = 1
; Color to use when drawing the centromere
; TYPE: color|DEFAULT: gray30
color               = gray40
; Whether or not to use transparency
; TYPE: boolean|DEFAULT: 0
transparent         = 1
; 1 = draw centromere label, 0 = don't
; TYPE: boolean|DEFAULT: 0
draw_label          = 0
; Which built-in font to use for centromere labels (font_face overrides this
;   setting) 0=gdLargeFont, 1=gdMediumBoldFont, 2=gdSmallFont, 3=gdTinyFont
; TYPE: enum|VALUES: 0,1,2,3|DEFAULT: 2
font               = 2
; Font face to use for centromere label
; TYPE: font
font_face          = vera/Vera.ttf
; Start labels this many pixels right of region bar (negative value to move
;   label to the left)
; TYPE: integer
font_size          = 8
; Start labels this many pixels right of region bar (negative value to move
;   label to the left)
; TYPE: integer
label_offset       = 4
; Color to use for labels
; TYPE: color|DEFAULT: gray30
label_color         = gray30


;#################
; Positions are displayed as dots or rectangles beside the chromosome bar.
; Positions that are too close to be stacked are "piled up" in a line.
; A sequence feature is designated a position if its section sets glyph=position
;   or if the start and end coordinates are equivalent.
[position]
; Color to use when drawing positions, can be overridden with the 
;  color= attribute in the GFF file
; TYPE: color|DEFAULT: red
color        = maroon
; Whether or not to use transparency
; TYPE: boolean|DEFAULT: 0
transparent   = 1
; Shape to indicate a position
; TYPE: enum|VALUES: circle,rect,doublecircle|DEFAULT: circle
shape        = rect
; Width of the shape
; TYPE: integer|DEFAULT: 5
width        = 1
; Offset shape this many pixels from chromosome bar
; TYPE: integer
offset       = 0
; Whether or not to "pileup" overlaping glyphs
; TYPE: boolean|DEFAULT: 1
enable_pileup = 1
; The space between adjacent, piled-up positions
; TYPE: integer|DEFAULT: 0
pileup_gap   = 0
; 1 = draw position label, 0 = don't
; TYPE: boolean|DEFAULT: 1
draw_label   = 0
; Which built-in font to use for position labels (font_face overrides this
;   setting) 0=gdLargeFont, 1=gdMediumBoldFont, 2=gdSmallFont, 3=gdTinyFont
; TYPE: enum|VALUES: 0,1,2,3|DEFAULT: 2
font         = 3
; Font face to use for labeling positions (overrides 'font' setting)
; TYPE: font
font_face    = 
; Font size in points, used only in conjunction with font_face
; TYPE: integer
font_size    = 8
; Start labels this many pixels right of region bar (negative value to move
;   label to the left)
; TYPE: integer
label_offset = 4
; Color to use for labels
; TYPE: color|DEFAULT: black
label_color   = black


;#################
; Ranges are displayed as bars alongside the chromosome bar or as borders 
;   draw within the chromosome bar.
; A sequence feature is designated a range if its section sets glyph=range or
;   if the start and end coordinates differ
[range]
; Color for drawing ranges; can be overridden with the color= 
;   attribute in GFF file.
; TYPE: color|DEFAULT: green
color            = green
; Whether or not to use transparency
; TYPE: boolean|DEFAULT: 0
transparent      = 0
; Draw range bars this thick
; TYPE: integer|DEFAULT: 6
width            = 6
; Draw range bars this much to the right of the corresponding chromosome
;  (negative value to move bar to the left)
; TYPE: integer
offset           = 3
; Whether or not to "pileup" overlaping glyphs
; TYPE: boolean|DEFAULT: 1
enable_pileup    = 1
; Space between adjacent, piled-up ranges
; TYPE: integer|DEFAULT: 0
pileup_gap       = 2
; 1 = draw range label, 0 = don't
; TYPE: boolean|DEFAULT: 1
draw_label       = 0
; Which built-in font to use for range labels (font_face overrides this setting)
;   0=gdLargeFont, 1=gdMediumBoldFont, 2=gdSmallFont, 3=gdTinyFont
; TYPE: enum|VALUES: 0,1,2,3|DEFAULT: 1
font             = 1
; Font face to use for labeling ranges (overrides 'font' setting)
; TYPE: font
font_face        = 
; Font size in points, used only in conjunction with font_face
; TYPE: integer
font_size        = 6
; Start labels this many pixels right of region bar (negative value to move
;   label to the left)
; TYPE: integer
label_offset     = 5
; Color to use for labels
; TYPE: color|DEFAULT: black
label_color      = black


;#################
; A border is displayed directly over the chromosome.
; A sequence feature is designated a range if its section sets glyph=border.
[border]
; Color for drawing borders; can be over-ridden with the color= 
;   attribute in GFF file.
; TYPE: color|DEFAULT: red
color         = red
; 1=fill in area between borders, 0=don't
; TYPE: boolean|DEFAULT: 0
fill          = 1
; Whether or not to use transparency
; TYPE: boolean|DEFAULT: 0
transparent   = 0
; 1 = show labels, 0 = don't
; TYPE: boolean|DEFAULT: 1
draw_label    = 1
; Built-in font to use for border labels (font_face overrides this setting)
;   0=gdLargeFont, 1=gdMediumBoldFont, 2=gdSmallFont, 3=gdTinyFont
; TYPE: enum|VALUES: 0,1,2,3|DEFAULT: 1
font          = 1
; Font face to use for labeling borders (overrides 'font' setting)
; TYPE: font
font_face     = 
; Font size in points, used only in conjunction with font_face
; TYPE: integer
font_size     = 6
; Start labels this many pixels right of chromosome (negative value to move
;   label to the left)
; TYPE: integer
label_offset  = 5
; Color to use for labels
; TYPE: color|DEFAULT: black
label_color   = black


;#################
; Markers are displayed as lines to the right of the chromosome.
; A sequence feature is designated a marker if its section sets glyph=marker
[marker]
; Color for drawing markers; can be over-ridden with the color= 
;   attribute in GFF file.
; TYPE: color|DEFAULT: red
color        = turquoise
; Whether or not to use transparency
; TYPE: boolean|DEFAULT: 0
transparent  = 0
; Draw marker this much to the right of the corresponding chromosome
;  (negative value to move bar to the left)
; TYPE: integer
offset      = 2
; 1=draw marker labels, 0=don't
; TYPE: boolean|DEFAULT: 1
draw_label   = 1 
; Built-in font to use for labeling markers (font_face overrides this setting)
;   0=gdLargeFont, 1=gdMediumBoldFont, 2=gdSmallFont, 3=gdTinyFont
; TYPE: enum|VALUES: 0,1,2,3|DEFAULT: 1
font         = 1
; Font face to use for labeling markers (overrides 'font' setting)
; TYPE: font
font_face    = 
; Font size in points, used only in conjunction with font_face
; TYPE: integer
font_size    = 6
; Start label this far from the right of the marker
; TYPE: integer
label_offset = 8
; Color to use for labels
; TYPE: color|DEFAULT: black
label_color  = black


;#################
; Measures are heat or histogram values with start and end coordinates in GFF.
; Value is indicated by score (6th) column in GFF or in value= attribute in 9th 
;   column of GFF.
; If value_type = score_col, the value is assumed to be an e-value or p-value,
;   which will need modification because of the non-linear distribution
[measure]
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
