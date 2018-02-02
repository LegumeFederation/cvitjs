/**
 * @file paper mouse tool to erase clicked on user added drawing.
 * @author awilkey
 * @module tools/draw/eraser
 *
 */


define(["bootstrap"],
  function () {
    return /** @alias module:tools/draw/eraser */{

      /**
       * @description Builds paper tool to erase path created by other drawing tools.
       *
       */

      addEraser: function () {
        var eraser = new paper.Tool();
        var hitOptions = {
          segments: true,
          stroke: true,
          fill: true,
          tolerance: 5
        };
        eraser.onMouseDown = function (event) {
          var hitTest = paper.project.hitTest(event.point, hitOptions);
          if (hitTest.item.isErasable) {
            hitTest.item.remove();
          }
        };

      }
    };
  }
);