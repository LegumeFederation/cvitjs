/**
 * @file Glyph for drawing markers, a feature with position but no set size
 * @author awilkey
 * @module draw/glyph/marker
 *
 */


define(["jquery", "glyph/utilities"],
  function ($, utility) {

    return /** @alias module:draw/glyph/marker */ {
      /**
       *  @description Console log to make sure glyph works
       *
       */
      test: function () {
        console.log("Test of marker glyph");
      },

      /**
       * @description Draws the marker on a given backbone.
       *
       * @param {object} marker - The marker to draw.
       * @param {paper.group} group - Paper group that holds the backbones.
       * @param {object} view - object that contains configuration information.
       * @param {paper.group} glyphGroup - Paper group that will hold the positions.
       */
      draw: function (marker, group, view, glyphGroup) {
        var target = marker.seqName;
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
          var yLoc = ((marker.start) * view.yScale) + targetGroup.children[target].bounds.top;
          var xOffset = parseInt(view.config.offset);
          var chrEdge = 1 / xOffset > 0 ? targetGroup.children[target].strokeBounds.right : targetGroup.children[target].strokeBounds.left - featureWidth;
          var xLoc = (chrEdge + xOffset);
          var point = new paper.Point(xLoc, yLoc);
          var r = new paper.Path.Line(point, new paper.Point(point.x + featureWidth, point.y));

          r.strokeWidth = 2;
          marker.name = marker.attribute.name ? marker.attribute.name : "";
          r.info = marker.attribute;
          r.thisColor = "black";
          var strokeColor = r.info.color ? r.info.color : view.config.color;
          r.strokeColor = utility.formatColor(strokeColor);
          r.onMouseDown = function () {
            utility.attachPopover(r, marker);
          };
          // As per perl CViT marker doesn't accept pileup control
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