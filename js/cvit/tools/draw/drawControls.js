/*
 * file: toolControls.js
 *
 *
 * purpose: single function to build all the drawing tools.
 * 
 * main methods:
 *  addDrawButtons:  Initialize tools and add buttons to the Tool Select menu.
 *
 */


define( [ 'jquery', 'tools/draw/rect', 'tools/draw/free', 'tools/draw/eraser', 'tools/draw/color', 'bootstrap' ],
  function( $, rect, free, eraser, color ) {
    return {
      //** builds menu stack */
      addDrawButtons: function( toolSelect ) {
        // Create base buttons for Drawing coltrols
        var rectTool = $( '<button title="Draw Rectangle" type="button" class="btn btn-default">' +
          '<span class="glyphicon glyphicon-edit"></span>' +
          '</button>' );

        var drawTool = $( '<button title="Draw Rectangle" type="button" class="btn btn-default">' +
          '<span class="glyphicon glyphicon-pencil"></span>' +
          '</button>' );

        var eraserTool = $( '<button title="Erase Drawing" type="button" class="btn btn-default">' +
          '<span class="glyphicon glyphicon-erase"></span>' +
          '</button>' );

        var colorSel = $( '<button title="Line Color" type="button" class="btn color-sel btn-default" ' +
          'data-toggle="modal" data-target="#color1-select">' +
          '<span> </span>' +
          '</button>' );
        var colorSel2 = $( colorSel ).clone( true );
        $( colorSel ).attr( "id", "color1" );
        $( colorSel2 ).attr( "id", "color2" );
        $( colorSel2 ).attr( "data-target", "#color2-select" );
        $( colorSel2 ).attr( "title", "Fill Color" );
        // Add paper mouse tools
        var toolNumber = parseInt( paper.tools.length );
        rect.addRectDraw();
        free.addFreeDraw();
        eraser.addEraser();
        // Attach button click functionality, tools setup in order of adding to
        $( rectTool ).on( 'click', function( event ) {
          this.focus();
          toolSelect.activeTool = rectTool;
          paper.tools[ ( toolNumber ) ].activate();
        } );
        $( drawTool ).on( 'click', function( event ) {
          this.focus();
          toolSelect.activeTool = drawTool;
          paper.tools[ ( toolNumber + 1 ) ].activate();

        } );
        $( eraserTool ).on( 'click', function( event ) {
          this.focus();
          toolSelect.activeTool = eraserTool;
          paper.tools[ ( toolNumber + 2 ) ].activate();
        } );
        color.addColorSel( "color1", "Line" );
        color.addColorSel( "color2", "Fill" );
        $( colorSel ).on( 'click', function( event ) {
          color.colorPicker( 'color1', colorSel );
        } );
        $( colorSel2 ).on( 'click', function( event ) {
          color.colorPicker( 'color2', colorSel2 );
        } );

        // Append new tools to the tool select menu
        $( toolSelect ).append( rectTool );
        $( toolSelect ).append( drawTool );
        $( toolSelect ).append( eraserTool );
        $( toolSelect ).append( colorSel );
        $( toolSelect ).append( colorSel2 );
      }
    };
  } );