/**
 * @file Glyph for drawing the centromere, a region with length placed over target backbone.
 * @author awilkey
 * @module draw/glyph/centromere
 *
 */


define(["jquery", "glyph/utilities"],
  function ($, utility) {

    return /** @alias module:draw/glyph/centromere */ {
      /**
       * @description Simple console log to make sure glyph works
       *
       */
      test: function () {
        console.log("Test of centromere glyph");
      },

      /**
       * @description Draws a centromere glyph on the given feature.
       *
       * @param {object} centromere - The centromere to draw.
       * @param {paper.group} group - Paper group that holds the backbomes.
       * @param {object} view - object that contains configuration information.
       * @param {paper.group} glyphGroup - Paper group that will hold the centromere.
       */

      draw: function (centromere, group, view, glyphGroup) {
        var target = centromere.seqName;
        var targetGroup = group.children[target];
        var gName = glyphGroup.name;
        if (targetGroup) {
          if (targetGroup.children[gName] === undefined) {
            var g = new paper.Group();
            g.name = gName;
            var labelGroup = new paper.Group();
            labelGroup.name = gName + "-label";
            targetGroup.addChild(g);
            g.addChild(labelGroup);
          }
          var featureGroup = targetGroup.children[gName];
          var featureWidth = view.centWidth;
          var yLoc = ((centromere.start) * view.yScale) + targetGroup.children[target].bounds.top;
          var chrCenter = targetGroup.children[target].position.x;
          var xLoc = (chrCenter);
          var point = new paper.Point(xLoc, yLoc);
          var size = new paper.Size(featureWidth, (centromere.end - centromere.start) * view.yScale);
          var rectangle = new paper.Rectangle(point, size);
          var r = new paper.Path.Rectangle(rectangle);
          r.position.x = chrCenter;
          r.info = centromere.attribute;
          centromere.name = r.info.name ? r.info.name : "";
          r.thisColor = "black";
          var fillColor = r.info.color ? r.info.color : view.config.color;
          r.fillColor = utility.formatColor(fillColor);
          r.onMouseDown = function () {
            utility.attachPopover(r, position);
          };
          if (parseInt(view.config.draw_label) === 1) {
            point.y = r.position.y;
            var label = utility.generateLabel(r, view, targetGroup.children[target]);
            featureGroup.children[gName + "-label"].addChild(label);
            label.bringToFront();
          }
          featureGroup.addChild(r);
          r.sendToBack();
        }
      }
    };
  }
  );