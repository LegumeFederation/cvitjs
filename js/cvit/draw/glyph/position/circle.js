/**
 * @file Sub-glyph for drawing positions as a circle, a feature with length placed beside the chromosome
 *      with user-defined size.
 * @author awilkey
 * @module draw/glyph/position/circle
 *
 */


define(["jquery", "glyph/utilities"],
  function ($, utility) {
    return /** @alias module:draw/glyph/position/circle */ {

      /**
       * @description Simple console log to make sure glyph works
       *
       */

      test: function () {
        console.log("Test of position class");
      },

      /**
       * @description Draws a positional circle.
       *
       * @param {object} position - The position to draw.
       * @param {paper.group} group - Paper group that holds the backbones.
       * @param {object} view - object that contains configuration information.
       * @param {paper.group} glyphGroup - Paper group that will hold the positions.
       *
       */

      draw: function (position, group, view, glyphGroup) {
        var target = position.seqName;
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
          var featureWidth = parseInt(view.config.width);
          var yLoc = ((position.start) * view.yScale) + targetGroup.children[target].bounds.top;
          var xOffset = parseInt(view.config.offset);
          var chrEdge = 1 / xOffset > 0 ? targetGroup.children[target].strokeBounds.right : targetGroup.children[target].strokeBounds.left - featureWidth;
          var xLoc = (chrEdge + xOffset);
          var point = new paper.Point(xLoc, yLoc);
          var radius = parseInt(view.config.width) / 2;
          var r = new paper.Path.Circle(point.add(radius), radius);

          position.name = position.attribute.name ? position.attribute.name : "";
          r.info = position.attribute;
          r.thisColor = "black";
          var fillColor = r.info.color ? r.info.color : view.config.color;
          r.fillColor = utility.formatColor(fillColor);
          r.onMouseDown = function () {
            utility.attachPopover(r, position);
          };
          if (parseInt(view.config.enable_pileup) === 1) {
            utility.testCollision(r, featureGroup, view);
          }
          if (parseInt(view.config.draw_label) === 1) {
            point.y = r.position.y;
            var label = utility.generateLabel(r, view, targetGroup.children[target]);
            featureGroup.children[gName + "-label"].addChild(label);
            label.bringToFront();
          }
          console.log(targetGroup);
          featureGroup.addChild(r);
          r.sendToBack();
        }
      }
    };
  }
);