/*
 * file: free.js
 *
 *
 * purpose: create free drawing tool and add to paper.tools array.
 * 
 * main methods:
 *  addFreeDraw: Add freedrawing tool.
 *
 */


define( [ 'jquery', 'bootstrap' ],
  function( $ ) {
    return {
      //** builds menu stack */
      addFreeDraw: function() {
        var freeTool = new paper.Tool();
        if ( !paper.project.color1 ) {
          paper.project.color1 = new paper.Color( 0, 0, 0, 1 );
        }
        freeTool.onMouseDown = function( event ) {
          var path = new paper.Path();
          path.segments = [ event.point ];
          path.isErasable = true;
          path.strokeColor = paper.project.color1;
          freeTool.path = path;
        };

        freeTool.onMouseDrag = function( event ) {
          freeTool.path.add( event.point );
        };

        freeTool.onMouseUp = function( event ) {
          freeTool.path.simplify( 10 );
        };

      }
    };
  } );