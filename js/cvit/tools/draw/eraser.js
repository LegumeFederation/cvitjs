/*
 * file: eraser.js
 *
 *
 * purpose: paper mouse tool to erase clicked on user added drawing.
 * 
 * main methods:
 *  addEraser:  initializes eraser and adds to paper.tools array
 *
 */


define( [ 'jquery', 'bootstrap' ],
  function( $ ) {
    return {
      //** builds menu stack */
      addEraser: function() {
        var eraser = new paper.Tool();
        var hitOptions = {
          segments: true,
          stroke: true,
          fill: true,
          tolerance: 5
        };
        eraser.onMouseDown = function( event ) {
          var hitTest = paper.project.hitTest( event.point, hitOptions );
          if ( hitTest.item.isErasable ) {
            hitTest.item.remove();
          }
        };


      }
    };
  } );