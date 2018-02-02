/**
 * @file Sets up canvas when drawing backbone and rulers.
 * @author awilkey
 * @module draw
 *
 */


define(["require", "jquery", "draw/rulers/rulers"],
  function (require, $, rulers) {

    return /** @alias module:draw */{

      /**
       * @description
       * Uses the jQuery promise system to try to draw a glyph based on the
       * glyph/sub-glyph of the chosen data object. This does so by requiring the requested
       * glyph type on demand, which, while asynchronous in nature, minimizes the page load time
       * by only requesting/loading the files for the glyphs actually used.
       *
       * @param {object} data - Feature to draw
       * @param {object} config - Configuration object meeting the cvit config.json schema
       * @param {object} view - CViT view
       *
       * @return {promise} A jQuery promise, so that the glyphs can be drawn in an ansync form.
       */

      drawGlyph: function (data, config, view) {
        // Set and draw border
        var background = new paper.Path.Rectangle({
          point: [0, 0],
          size: [paper.view.size.width, paper.view.size.height],
          selected: true
        });
        background.fillColor = "white";

        if (config.general.border_width > 0) {
          background.strokeColor = new paper.Color(config.general.border_color);
          background.strokeWidth = config.general.border_width;
        }

        // Set and place title
        if (config.general.title) {
          console.log("CViTjs: Setting title");
          var cvitTitle = config.general.title.split(/<[\/i]+>/);
          var titleLoc;
          var titleSize = parseInt(config.general.title_font_size);
          var titleX;
          var titleY;
          if (config.general.title_location) {
            var titlePos = config.general.title_location.match(/\((.*),(.*)\)/);
            titleX = parseInt(titlePos[1]);
            titleY = parseInt(titlePos[2]) + titleSize;
          } else {
            titleX = parseInt(config.general.image_padding) + parseInt(config.general.border_width);
            titleY = titleX + titleSize;
            var heightAllow = parseInt(config.general.title_height);
            if (heightAllow > titleY) {
              titleY = heightAllow;
            }
          }
          titleLoc = new paper.Point(titleX, titleY);
          console.log("Title lengtht: " + cvitTitle.length);
          for (var i = 0; i < cvitTitle.length; i++) {
            var title = new paper.PointText(titleLoc);
            title.content = cvitTitle[i];
            title.fontSize = titleSize;
            title.fontWeight = (i % 2) === 1 ? "Italic" : "normal";
            //console.log( 'tc: ' + config.general.title_color );
            title.fillColor = new paper.Color(config.general.title_color);
            titleLoc.x += title.strokeBounds.width;
          }
          //title.name = 'cvitTitle';
        }
        console.log("CViTjs: Setting rulers");
        rulers.draw(data.chromosome, config, view);

        var rFSize = parseInt(config.general.ruler_font_size);
        view.xOffset += parseInt(config.general.tick_line_width) + (data.chromosome.max.toString().length * rFSize);
        var deferred = new $.Deferred();
        var myGlyph = "glyph/" + config.general.glyph + "/" + config.general.shape;
        require([myGlyph], function (myGlyph) {
          deferred.resolve(myGlyph.draw(data, config, view)).done(function () {
            background.sendToBack();
            paper.view.draw();
          });
        });
        return deferred.promise();
      }
    };
  }
);