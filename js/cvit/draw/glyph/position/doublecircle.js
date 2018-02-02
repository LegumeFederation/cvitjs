/**
 * @file Sub-glyph for drawing positions as a double circle, two side-by-side circles,
 * a feature with length placed beside the chromosome with user-defined size.
 * @author awilkey
 * @module draw/glyph/position/doublecircle
 *
 */


define(["jquery", "glyph/utilities"],
  function ($, utility) {
    return /** @alias module:draw/glyph/position/doublecircle */ {

      /**
       * @description Simple console log to make sure glyph works
       *
       */

      test: function () {
        console.log("Test of position class");
      },

      /**
       * @description Draws a positional double circle.
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
            targetGroup.addChild(g);
            var lGroup = new paper.Group();
            lGroup.name = gName + "-label";
            g.addChild(lGroup);
          }
          var featureGroup = targetGroup.children[gName];
          var featureWidth = parseInt(view.config.width);
          var radius = featureWidth / 2;
          var yLoc = ((position.start) * view.yScale) + targetGroup.children[target].bounds.top;
          var xOffset = parseInt(view.config.offset);
          var chrEdge = 1 / xOffset > 0 ? targetGroup.children[target].strokeBounds.right : targetGroup.children[target].strokeBounds.left - featureWidth;
          var xLoc = (chrEdge + xOffset);
          var point = new paper.Point(xLoc, yLoc);
          var r = new paper.CompoundPath({
            children: [
              new paper.Path.Circle({
                center: new paper.Point(xLoc + (radius / 2), yLoc + radius / 2),
                radius: radius / 2
              }),
              new paper.Path.Circle({
                center: new paper.Point(xLoc + (radius + radius / 2), yLoc + radius / 2),
                radius: radius / 2
              })
            ]
          });

          if (parseInt(view.config.enable_pileup) === 1) {
            utility.testCollision(r, featureGroup, view);
          }
          position.name = position.attribute.name ? position.attribute.name : "";
          r.info = position.attribute;
          var fillColor = position.attribute.color ? position.attribute.color : view.config.color;
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