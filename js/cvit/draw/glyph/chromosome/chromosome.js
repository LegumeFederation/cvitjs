/**
 * @file draws a "chromosome" backbone that serves as a reference for drawing other features.
 * called chromosome, but can in practice be anything with a length.
 * @author awilkey
 * @module draw/glyph/chromosome
 */


define(["jquery", "glyph/utilities"],
  function ($, utility) {

    return /** @alias module:draw/glyph/chromosome */ {

      /**
       * @description Simple console log to make sure glyph works
       *
       */

      test: function () {
        console.log("Test of centromere glyph");
      },

      /**
       * @description Sets up a group of backbone glyphs to add features to later.
       *
       * @param {object} data - The backbones to draw.
       * @param {object} config - The parsed configuration file for this feature.
       * @param {object} view - Object that contains configuration information.
       *
       */

      draw: function (data, config, view) {
        var thisC = this;
        console.log("CViTjs: Drawing chromosome backbone.");
        var cGroup = new paper.Group();
        //var view = {};
        var chromosomes = data.chromosome.features;
        view.config = config.general;
        cGroup.name = "chromosomeBackbone";
        //view.zoom = data.zoom;
        //view.xoffset = Math.floor( ( $( '#cvit-canvas' ).width() - 200 ) / chromosomes.length );
        //view.yoffset = 50;
        view.rulerWidth = paper.project.layers[1].children.text.maxOff;
        var minSep = parseInt(config.chrom_spacing);
        if (config.fixed_chrom_spacing === 1) {
          view.xSep = minSep;
        } else {
          view.xSep = ($("#cvit-canvas").width() - (2 * view.rulerWidth) - (chromosomes.length * view.chromWidth)) / (chromosomes.length + 1);
          view.sSep = view.xSep > minSep ? view.xSep : minSep;
        }
        chromosomes.forEach(function (chromosome) {
          cGroup.addChild(thisC.placeChromosome(chromosome, cGroup, view));
        });
        return cGroup;
      },

      /**
       * @description Adds an individual chromosome backbone to the group
       *
       * @param {object} chromosome - The target backbone to draw.
       * @param {object} group - The group that the backbone is to be added to.
       * @param {object} view - Object that contains configuration information.
       *
       */

      placeChromosome: function (chromosome, group, view) {
        var chr = new paper.Group();
        var xPos = group.strokeBounds.x + group.strokeBounds.width;
        var yPos = view.yOffset + parseInt(view.config.chrom_font_size);
        if (xPos === 0) {
          xPos = view.rulerWidth + view.xSep;
        } else {
          xPos = parseInt(view.config.fixed_chrom_spacing) === 0 ? xPos + view.xSep : xPos + parseInt(view.config.chrom_spacing);
        }
        //if (xPos < view.xOffset) xPos = view.xSep+ view.rulerWidth + (parseInt(view.config.image_padding));
        //if ( xPos < parseInt( view.config.image_padding ) ) xPos += view.rulerWidth +parseInt( view.config.image_padding );
        var startOffset = (chromosome.start - view.xMin) * view.yScale;

        var point = new paper.Point(xPos, yPos + startOffset);

        var size = new paper.Size(view.chromWidth, (chromosome.end - chromosome.start) * view.yScale);
        var rectangle = new paper.Rectangle(point, size);
        var r = new paper.Path.Rectangle(rectangle);
        chr.name = chromosome.seqName;
        r.info = chromosome.attribute;
        r.thisColor = "black";
        r.fillColor = utility.formatColor(view.config.chrom_color);
        if (parseInt(view.config.chrom_border) === 1) {
          r.strokeWidth = 2;
          r.strokeColor = utility.formatColor(view.config.chrom_border_color);
        }

        r.name = chr.name;
        chr.addChild(r);

        point.x = xPos + view.chromWidth / 2;
        point.y = yPos - view.chromWidth;

        var label = new paper.PointText(point);
        label.justification = "center";
        label.content = chr.name;
        label.fontSize = parseInt(view.config.chrom_font_size);
        label.fillColor = utility.formatColor(view.config.chrom_label_color);
        label.name = chr.name + "Label";
        return chr;
      }
    };
  }
);