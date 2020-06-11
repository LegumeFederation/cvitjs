# CViTjs - Chromosome Visualization Tool, the JavaScript edition
![CViTjs](img/cvitjs.png?raw=true)

## Table of Contents
+ [About](#about) 
+ [Setup](#setup) 
+ [Embedding](#embedding)
+ [PHP](#php) 
+ [Roadmap](#roadmap) 
+ [Using CViTjs](#using-cvitjs) 
  + [Definitions and glyph types](#definitions-and-glyph-types)
  + [How to...](#how-to) 
+ [Examples](#examples)

## About

CViTjs is an interactive JavaScript implementation of the original Chromosome 
Visualization Tool (<a href="https://sourceforge.net/projects/cvit/">CViT</a>), 
which was written in Perl. CViTjs displays features on chromosomes, linkage groups, or just 
about any sort of backbone that has length and a two-dimensional, linear coordinate system.

**The tool is currently in beta. Feedback is gratefully accepted.**

Functionality:
+ Data is formatted in <a href="http://gmod.org/wiki/GFF3">GFF3</a>
+ Place various types of features on "backbones" (e.g., centromeres, markers, gene models, regions)
+ Similar to genome browsers, CViTjs has a concept of tracks, sets of features organized in a group.
+ A track can be interactively turned on and off
+ Zooming and panning
+ Annotate an image with the drawing tool
+ Export image to a png or svg.

Features:
+ ES6+ class style code 
+ Software stack: Preact and Paper.js.

[See CViTjs in action](https://awilkey.github.io/cvitjs/?data=test1)

## Setup

CViTjs needs several libraries to work. Before beginning, you should have should have [node](https://nodejs.org/en/)
configured and working on your system. Grab required packages and build the tool using:
```
npm install
npm run build
```
This will grab required libraries and build the tool for inclusion as a webscript. By default, the package javascript
will be exported to `build/cvit.min.js`. Once the tool has been built, you can test it by navigating to the index.html.

If planning on doing development work, or want to run locally, it is recomended to use `npm run watch` instead of build.
This will start a local development server that can be accessed at `localhost:8888` by default.

Once one or more `[data.<tag>]` views are defined in `cvit.conf`, you will be able to begin generating visualisations.
This cvit.conf should be located in the root folder. Sample views are included in the provided file.
```
;Sample cvit.conf file
[general]
data_default = test1

[data.test1]
conf = data/test1/cvit.conf
defaultData = data/test1/data.gff

[data.test2]
conf = data/test2/test2.conf
defaultData = [data/backbone.gff,data/test2/test2.gff]
```
The [general] section and at least one dataset definition are required.

In this example, to display the test1 dataset the URL would be: `your-CViTjs-URL/?data=test1`

For each dataset you will need at least one <a href="http://gmod.org/wiki/GFF3">GFF3</a> file defining the backbones and 
and while not required, it is reccomended that you create a visualisation configuration file, typically named cvit.ini.
 
Almost every aspect of the presentation of the image can be controlled in the configuration file. 
See the [sample file](data/test1/test1.conf) in data/test1/ or [the configuration readme](Configuration.md) for more information.

## Embedding

Instead of keeping CViTjs in its own special page, it may be embedded in other contexts. In the page's head include:
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<script src="build/cvit.min.js"></script>
```

In the body of the page, all that is required is:
```
<div class="container" id="cvit-app" />
```
at the point you want to display the cvit tool. 

Cvit defaults to displaying the view pointed to by the `data_default` configuration under `[general]` in cvit.conf. 
You may use the html `data-` attribute to pass configuration target as:

```
<div class="container" id="cvit-app" data-tag="test2" />
```
Which is the same as:
```
http://cvitpage/?data=test2
```
In terms of priority: `data-tag='tag' > url/?data=tag > cvit.conf `


Similarly, the default gff files can be overridden in both the URL and the HTML. Like their configuration counterpart, 
this may be a single file, or an array of files.
```
<div class="container" id="cvit-app" data-gff="test1.gff" />

-or-

<div class="container" id="cvit-app" data-gff='["backbone.gff","test2.gff"]' />
```

Priority is similar to the tag  option.

Other `data-` tags are:

| Tag | Query Equivalent | Description |
| ---- | ---- | --- |
| data-tag | data=<tag> | select a specific tag |
| data-gff | gff=<file> or gff[]=<file> |(array) one or more gff files to use as base data |
| data-config | config=<file> | configuration file to use for dataset |
| data-cvitroot | not used | path prefix if files aren't in the root folder of the page. |
| data-register | true | register CViT as window.cvit |
## PHP

PHP can launch CViTjs with a calculated set of inputs. To control CViTjs, you may either pass in the desired view and 
gff using the `data-` tags, or you can export the desired information as a globally accessible variable and access it 
directly from `main.js`. See `src/drupalMain.js` for an example of this based on drupal exports.

## Roadmap
Things to do on the way to the 1.0 release:
+ Upload file manager
	+ Basic _viewData validation
	+ Customized glyphs
+ Advanced URI control 
+ Release unit tests

## Using CViTjs

### Definitions and glyph types

| Glyph | Description|
| ---- | ---- |
|chromosome | a "backbone". Could be a psuedomolecule, linkage group, contig, et cetera. |  
|centromere | a glyph type that is drawn on the chromosome, with optional overhang on either side of the chromosome bar.  |
|position | a glyph representing a point without size which is typically used for features that are too small to display at scaled size, for example, a gene.  |
|marker | a particular type of position depicted with a horizontal line. |
|range | a glyph representing a feature with sufficient length to display at scale, for example, centromeres or pericentromeric regions. |  
|measure | a glyph representing a feature with some value, for example, an e-value or expression value. The actual glyph's drawn type depends on the measure-type chosen.  |

### How to...
#### 1. Prepare data


Input data to CViT is in GFF3 (http://www.sequenceontology.org/gff3.shtml).
CViT interpretes files as follows:  

    column 1 (seqid)      chromosome name. If column 3 is 'chromosome' the 
                          record describes the chromosome (name, length, et 
                          cetera), otherwise the record describes a feature on 
                          the named chromosome.  
    column 2 (source)     user defined. Can be used in conjunction with column 3
                          by the options (.ini) file to indicate a special 
                          glyph.  
    column 3 (type)       one of: 'chromosome', 'position', 'range', 'border', 
                          'measure', 'centromere', 'marker' or user defined. 
                          Can be used in conjunction with column 3.
                          by the options (.ini) file to indicate a special 
                          glyph.  
    column 4 (start)      start coordinate of chromosome if column 3 = 
                          'chromosome', start coordinate of feature otherwise.  
    column 5 (end)        end coordinate of chromosome if column 3 = 
                         'chromosome', end coordinate of featuer otherwise.  
    column 6 (score)      if record is of type 'measure' and 'value_type' 
                          parameter in options (.ini) file is set to 
                          'score_col', then this value will be used to generate 
                          a heatmap color or histogram.  
    column 8 (strand)     Unused unless 'show_strands' parameter in options 
                          (.ini) file is set to 1.  
    column 8 (phase)      UNUSED  
    column 9 (attributes) User-defined attributes allowed and ignored by CViT. 
     
These attributes are defined:   
**ID/Name** = name of chromosome or feature  
**color**   = color for feature; overrides all other color
          settings in options (.ini) file  
**value**   = used for type=measure glyphs if 'value_type'
          parameter in options is set to 'value_attr'  

**Important:** The GFF _viewData must contain at least one chromosome. Features must contain the 
name of the chromosome it belongs to in the seqid (1) column of the GFF file
and that name must match the name in the seqid column for the chromosome. Also,
its coordinates must lie within the start and end coordinates of the chromosome.

#### 2. customize drawing options
Almost all aspects of the output images can be controlled via the .conf file. An example
can be found inside data/test1. Note that the drawing configuration file is different
from the main configuration file, cvit.conf. 
**Important note:** as CViTjs is still in beta, some of these options may not yet be
implemented. If an option you need appears to have not been implemented, let us know and
we will make it a priority to implement it.

**_General or overall options_**  

**title**                Label for image.  
**title_height**         Space allowance for title in pixels, ignored if font face   
                         and size are set.  
**title_font**           Use a built-in GD font (0=gdLargeFont, 1=gdMediumBoldFont,
                         2=gdSmallFont, 3=gdTinyFont). If title_font_face is set,
                         this setting is overridden.  
**title_font_face**      Font face to use for title.  
**title_font_size**      Title font size in points.  
**title_color**          Title font color.  
**title_location**       Title location as x,y coords, ignored if missing.  
**image_padding**        Space around chromosome set, in pixels.  
**scale_factor**         How much to scale units (pixels per unit); used to size 
                         image.  
**border_color**         Color of the border around the image.  
**tiny_font_face**       The prefered tiny font when small labels are needed.  
**chrom_width**          How wide in pixels to draw a chromosome  
**fixed_chrom_spacing**  Whether or not to draw chromosomes in fixed locations, or
                         spaced to accomodate features and labels.  
**chrom_spacing**        How far apart to space the chromosomes.  
**chrom_padding_left**   Extra chromosome padding on the left.  
**hrom_padding_right**  Extra chromosome padding on the right.  
**chrom_color**          Fill color for the chromosome bar.  
**chrom_border**         Whether or not to draw a border for the chromosome bar.  
**chrom_border_color**   Border color for the chromosome bar.  
**chrom_font**           Use a built-in GD font (0=gdLargeFont, 1=gdMediumBoldFont,
                         2=gdSmallFont, 3=gdTinyFont). If chrom_font_face is set,
                         this setting is overridden.  
**chrom_font_face**      Font face to use to label chromosomes, ignored if empty.  
**chrom_font_size**      Font size for chromosome labels in points, used only in 
                         conjuction with font_face.  
**chrom_label_color**    Color for chromosome label.  
**show_strands**         1=show both chromosome strands, 0=don't; both strands 
                         will fit inside chrom_width  
**display_ruler**        0=none, 1=both, L=left side only, R=right side only.  
**reverse_ruler**        1=ruler units run greatest to smallest, 0=normal order.  
**ruler_units**          Ruler units (e.g. "cM, "kb"), used to label the ruler.  
**ruler_min**            Minimum value on ruler, if > actual minimum value in the
                         _viewData this will be adjusted accordingly in the code.  
**ruler_max**            Maximum value on ruler, if < actual maximum value in the 
                         _viewData, this will be adjusted accordingly in the code.
**ruler_font**           Which built-in font to use (ruler_font_face overrides this
                         setting).  
**ruler_font_face**      Font face to use for ruler, ignored if empty.  
**ruler_font_size**      Ruler font size in points, used only in conjuction with 
                         font_face.  

**tick_line_width**      Width of ruler tick marks in pixels.  
**tick_interval**        Ruler tick mark units in original chromosome units.  
**minor_tick_divisions** Number of minor divisions per major tick (1 for none).  


**_Glyph options (not all apply to all glyphs)_**

**centromere_overhang**  How much centromere bar should extend beyond chromosome bar;
                         only applies to centromere glyphs.  
**color**                Glyph color. Can be overridend by class= attribute or 
                         color= attribute.  
**border_color**         Color for drawing borders; only applies to borders.  
**transparent**          Whether or not to draw glyph transparently.  
**shape**                Glyph shape (circle, rect, or doublecircle).  
**width**                Width of the shape.  
**offset**               Offset glyph this many pixels from chromosome bar (negative 
                         value moves label to the left).  
**enable_pileup**        If set to 1, CViT will offset features that overlap a
                         previously-drawn feature by shifting them right (or
                         left if on the left side of the chromosome).  
**pileup_gap**           The space between adjacent, piled-up positions.  
**fill**                 1=fill in area between borders, 0=don't; only applies to
                         borders and measures.  
**value_type**           If set to 'score_col', the measure value is taken from the  
                         score column (6) in the GFF file AND IS ASSUMED TO BE AN 
                         E-VALUE. If the value in the score column is not an 
                         e-value, it will be displayed incorrectly. If set to
                         'value_attr', the measure value is in the value= 
                         attribute in the attribute (9) column. Only applies to 
                         measures.  
**display**              If 'heat' display measure as a heat color. If 'histogram'
                         display measure as a histogram. If 'distance', the
                         distance the glyph is draw from the chromosome (right
                         or left side as indicated by offset) is determined by
                         the feature's value. Only applies to measures.  
**draw_as**              Whether to interpret a heat map or distance measure as a
                         range, position, border, or marker.  
**heat_colors**          Colors to use for scale (heat map only): redgreen or 
                         grayscale.  
**min**                  Minimum value for a set of measure glyphs. If > actual 
                         minimum value in the _viewData this will be adjusted 
                         accordingly in the code. Only applies to measures.  
**max**                  Maximum value for a set of measure glyphs. If < actual 
                         maximum value in the _viewData this will be adjusted 
                         accordingly in the code. Only applies to measures.  
**max_distance**         Maximim distance to draw a distance measure.  
**hist_perc**            Percentage of distance between chromosomes to fill with
                         maximum value for a set of histogram measure glyphs.  
**draw_label**           Whether or not to draw label (ID= or Name= attribute)  
**font**                 Use a built-in GD font (0=gdLargeFont, 1=gdMediumBoldFont,
                         2=gdSmallFont, 3=gdTinyFont). If font_face is set,
                         this setting is overridden.
**font_face**            Font face to use for label.  
**font_size**            Font size in points, used only in conjuction with font_face.  
**label_offset**         Start labels this many pixels right of region bar (negative 
                       value moves label to the left).  
**label_color**          Color to use for label.  


Characteristics for a custom sequence type can be defined by naming a section
by the source and type columns of the GFF. For example, the GFF record

     ZmChr1 IBM2_2008_Neighbors locus 882.70 882.70 . . . Name=tb1
     
would be identified by IBM2_2008_Neighbors:locus.

Example:

    [genes]
    feature = IBM2_2008_Neighbors:locus
    glyph = position
    color = green
    offset = -5
    

    

## Examples

![CViTjs](img/examples/cvit.png?raw=true)

CViTjs exports views as png or svg files.

![CViTjs as an embedded tool](img/examples/embedded.png?raw=true)

Embedded tool to display BLAST results. Image is a blastn result agains Cicer arietinum (kabuli, CDC Frontier) - genome using the following sequence:

```
>cicar.Ca_13726

ATGTTTTCTCTCATCATTCTCTCACCAAACTATGCTTCCTCAACTTGGTGTTTGGATGAGCTACAAAAGATTGTTGAGTGTGGAAAGTGTTTTGGTGGTCAAGGTGTTTTTCCAATCTTCTATGGTGTAGATCCTTCTCATGTTAGGCATCAAAGTGGAAGCTTTGCTAAAGCATTTAGAAAACATGAAGAAAACTTTAGAGAAGATAGAGAGAAAGTGCAAAGGTGGAAAGATGCATTAAGAGAAGTTGCTGGTTATTCTGGTTGGGACTCCAAGGATTGGCATGAGGCAAAATTGATAGAAACAATTGTTGAAAACATTCAGAAAAAATTGATTCCTAAATTGAATGTTTGCACAGATAACTTTATTGGAATGGATTCAAAGATAAAAGAAGTAACTTCACTCCTAGGAATGAATTTAAACGATGTTCGCTTCGTAGGCATATGGGGCATGGGTGGAATAGGAAAGACAACTATTGCTCGATTAGTCTACGAAGCGATCAAAGATGAATTCAATATAAGTTGCTTTCTTGCAGACATTAGAGAATCAGTTTCCAAGACAAATGGCTTAGTTAATATCCAAATGGAACTTCTTTCTCATCTTAACATAAGAAGCAATGATTTTTACAATGTTCATGATGGAAAAAAGATATTAGCAAACTCCTTAAGCAACAAAAAGATTCTTCTTGTTCTTGATGATGTGAATGAGTTAAGCCAATTGGAGAGTTTAGCTTGGAAGCAAGAATGGTTTGGTAAAGGAAGTAGAGTTATAATCACAACTAGGGATAAGCACTTATTAATGACACATGGAGTGCATGAAACTTATAAGGCAAAAGGGTTAGTAAAAAATGAAGCACTTAAGCTCTTTTGTTTGAAAGCATTTAAACAAGACCAACCTAAAGAAGAGTATTTGAGTTTGTGTCAAGAAGCGGTTGAATACACAAAAGGACTTCCTTTGGCACTTGAGGTATTAGGTTCACATCTTCATGGAAGAAGTGTTGAGGTTTGGCATAGTGCTTTAGAACAAATAACAAGTGTTCCTCACTCCAAAGTTCAAGATACATTGAAAATAAGCTATGACAGTTTACAATCTATGGAGAAAAATTTGTTTCTAGATATTGCATGTTTCTTCAAAGGAATGGACTTAGATGAAGTAATAGATATGTTAGAAAATTGTGGTGATTATCCTAAAATTGGAATTGACATTTTGGCTGAAAGATCTTTGGTAAGTTTTGATAGGGGAGGAAATAAGTTGTGGATGCATGATTTGCTTCAAGAAATGGGAAGGAATATTGTGTTTCAAGAATATCCAAATGATCCTGGAAAACGCAGTCGATTATGGTCTCAAAAAGACATTGATCAAGTATTGACAAAAAATAAGGGAACTGATAAAATTCAAGGCATAGTTCTGAACTTGGATCAACCGTATGAAGCAAAATGGAACATTGAAGCCTTCTCCAAAATAAGTCACCTAAGGTTACTCAAATTATGTGGCATAAAACTCCCCCTTGGCCTCAACTGCTTCCCTAGTTCACTAAAAGTACTTGACTGGAGAGGATTTCCTTTGAAAACCCTTCCATTCACTAATAATTTGGATGAAATTGTTGACCTCAAATTGCCTCACAGTAAAATAGAACAACTTTGGCATGCAACACAGTTTCTTGAAAATCTGAAATCCATCAACTTGAGCTTTTCCAAGTCTCTAAAGCAATTGCCTGATTTCGTTGGTGTTCCGAATCTTGAATCATTGGTTTTTGAAGGCTGTACAAGCTTAACTGAGATTCATCCCTCCCTTTTAAGCCACAAGAAACTTGTTCAATTGAATTTGAAACACTGCAAAAGGCTCAAAACACTTCCATGCAAAATAGAAACAACTTCATTGAAGAATTTAAGTCTTGCTGGTTGCTCTGAATTCAAACATCTTCCTGAGTTTGATAAAAGCATGAAACATCTATCAAATCTTTCTTTATCAGATACTGCTATAACAAAACTACCATCTTCACTTGGATATCTTGTTTTCCTTAGACTTTTGGATTTAGAAAATTGCAAGAATCTTATTAGTCTTCCAGATACAATAAGTGAATTGAAGTCTCTCATAACTCTGAATGTTTCTGGCTGCTCAAAACTCCATAGCATTCCAGAAGGTTTAAAAGAAATCAACTGTTTGGAGGAACTTCTTGCAAGTGAAACTTCTATTGAAGAACTACCTTCATCTGTTTTTTATCTAGAAAACCTCAAAGTAATATCATTTTCTGGATGCAAAGGACCAGTGACTAAGACAGTGAATTCATTTTTGCTACCATTTACACATTTCTTAAGTAGTCCACAAGATCCTACTAGTTTTAGATTGCCGCATAAATTATCTCTACCTTCTTTGAAGTACTTAAATTTAAGTTACTGCAATCTATCTGAAGAATCAATCCCAAATGATTTTTTCAACTTTTCTTCTTTGATGGTTTTAAATCTCACTGGGAACAATTTTGTTAGTCCACCAAGTAGCATTTCAAAGCTACCAAAACTTGAGTATCTTAGCCTAAACTGGTGTGAAATGCTTCAGAATTTGCCAGAACTTCCCTCAAGTATGAGGACATTGGATGCATGTAATTGTGATTCACTGGAAACTTCTGAATTCAATCTTTCTAGATCATGCAATCTCATTGAATCGCCGATGAGGCAAAGACACTCGCATTTACCTGAAGTTCTGAAGAGCTATTTGGAGGCAGTGCAACTTGGTCTACCTAAAGAAAGATTTGACATGCTTATCACAGGGAGTGAAATTCCATTATGGTTTACACCTTCAAAATATGTTTCAGTTGCAAACATACCAGTCCCTCCTAATTGTCCAAATGATCAATGGGTAGGATTTGCTTTGTGTTTCTTGTTAGTAAGTTTTGCTGATCCACCTGAGTTATGTCATCATGAAGTAAGTTGTTACTTGTTTGGACCTAAGGGTAAGATGTTGATCAGCTCAAGGGATTTACCTCCTTTGGAACCATATTGCCGCCACCTTTATATTCTCTATTTGTCCATTGATGAATGCCGCAAAAGATTCGATAAAGGCGGTGACTGCAGTGAAATTGAGTTTGTCTTGAAAACTTATTGTTGTGATTCATTGAAAGTAGTGAGATGTGGTAGTCGTTTGGTATGTAAACAAGATGTTGAAGATATTTACAGAATTTGTAATTAG
```
<br><br>
