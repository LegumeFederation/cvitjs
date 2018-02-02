/**
 * @file Create a paper tool for drawing a rectangle on the canvas.
 * @author awilkey
 * @module tools/draw/rect
 *
 */


define(["bootstrap"],
  function () {
    return /** @alias module:tools/draw/rect */ {

      /**
       * @description Create paper Tool for drawing a rectangle with dashed border on current canvas.
       * Fill color selector changes fill, line color selector changes line.
       * Defaults to a 40% transparent blue and opaque black respectively.
       *
       */

      addRectDraw: function () {
        var rectTool = new paper.Tool();
        if (!paper.project.color1) {
          paper.project.color1 = new paper.Color(0, 0, 0, 1);
        }
        if (!paper.project.color2) {
          paper.project.color2 = new paper.Color(0.7, 0.8, 0.8, 0.4);
        }

        rectTool.onMouseDown = function (event) {
          rectTool.box = paper.Path.Rectangle(event.downPoint, event.point);
          rectTool.box.isErasable = true;
        };

        rectTool.onMouseDrag = function (event) {
          document.body.style.cursor = "crosshair";
          rectTool.box.remove();
          rectTool.box = paper.Path.Rectangle(event.downPoint, event.point);
          rectTool.box.strokeWidth = 2;
          rectTool.box.strokeColor = paper.project.color1;
          rectTool.box.dashArray = [2, 2];
          rectTool.box.isErasable = true;
          rectTool.box.fillColor = paper.project.color2;
        };

        rectTool.onMouseUp = function () {
          document.body.style.cursor = "default";
        };
      }
    };
  }
);