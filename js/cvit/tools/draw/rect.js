/*
 * file: rect.js
 *
 *
 * purpose: create paper tool for drawing a rectangle on the canvas.
 * 
 * main methods:
 *  addRectDraw: create paper tool and add to paper.tools array 
 *
 */


define( [ 'jquery', 'bootstrap' ],
  function( $ ) {
    return {
      //** builds menu stack */
      addRectDraw: function() {
        var rectTool = new paper.Tool();
        if ( !paper.project.color1 ) {
          paper.project.color1 = new paper.Color( 0, 0, 0, 1 );
        }
        if ( !paper.project.color2 ) {
          paper.project.color2 = new paper.Color( 0.7, 0.8, 0.8, 0.4 );
        }

        rectTool.onMouseDown = function( event ) {
          rectTool.box = paper.Path.Rectangle( event.downPoint, event.point );
          rectTool.box.isErasable = true;
        };

        rectTool.onMouseDrag = function( event ) {
          document.body.style.cursor = 'crosshair';
          rectTool.box.remove();
          rectTool.box = paper.Path.Rectangle( event.downPoint, event.point );
          rectTool.box.strokeWidth = 2;
          rectTool.box.strokeColor = paper.project.color1;
          rectTool.box.dashArray = [ 2, 2 ];
          rectTool.box.isErasable = true;
          rectTool.box.fillColor = paper.project.color2;
        };
        rectTool.onMouseUp = function( event ) {
          document.body.style.cursor = 'default';
        };
      }
    };
  } );