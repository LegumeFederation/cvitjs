/**
 * @file Create freehand drawing tool and add to paper.tools array.
 * @author awilkey
 * @module tools/draw/free
 *
 */


define(["bootstrap"],
  function () {
    return /** @alias module:tools/draw/free */ {

      /**
       * @description Build paper Tool to draw a freehand line, gets color from line color picker
       * defaulting to black.
       *
       */

      addFreeDraw: function () {
        var freeTool = new paper.Tool();
        if (!paper.project.color1) {
          paper.project.color1 = new paper.Color(0, 0, 0, 1);
        }
        freeTool.onMouseDown = function (event) {
          var path = new paper.Path();
          path.segments = [event.point];
          path.isErasable = true;
          path.strokeColor = paper.project.color1;
          freeTool.path = path;
        };

        freeTool.onMouseDrag = function (event) {
          freeTool.path.add(event.point);
        };

        freeTool.onMouseUp = function () {
          freeTool.path.simplify(10);
        };

      }
    };
  }
);