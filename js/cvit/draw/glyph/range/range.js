/*
 * file: range.js
 *
 * purpose: Glyph for drawing ranges, a feature with length placed beside
 *   the chromosome.
 *
 * main methods:
 *  draw:   Draw the requested range
 *  test:   Simple console test to make sure glyph is being accessed properly
 *
 */


define( [ 'jquery', 'glyph/utilities' ],
  function( $, utility ) {

    return {
      /** Simple console log to make sure glyph works */
      test: function() {
        console.log( "Test of range glyph" );
      },

      /**
       * Draws the glyph of a given feature.
       *
       * @param {object} range - The range to draw.
       * @param {paper.group} group - Paper group that holds the backbomes.
       * @param {object} view - object that contains configuration information.
       * @param {paper.group} glyphGroup - Paper group that will hold the range.
       */

      draw: function( range, group, view, glyphGroup ) {
        var target = range.seqName;
        var targetGroup = group.children[ target ];
        var gGroup = glyphGroup.name;
        if ( targetGroup ) {
          if ( targetGroup.children[ gGroup ] === undefined ) {
            var g = new paper.Group();
            g.name = gGroup;
            var labelGroup = new paper.Group();
            labelGroup.name = gGroup + '-label';
            targetGroup.addChild( g );
            g.addChild( labelGroup );
          }
          var featureGroup = targetGroup.children[ gGroup ];
          var featureWidth = parseInt( view.config.width );
          var yLoc = ( ( range.start ) * view.yScale ) + targetGroup.children[ target ].bounds.top;
          var xOffset = parseInt( view.config.offset );
          var chrEdge = 1 / xOffset > 0 ? targetGroup.children[ target ].strokeBounds.right : targetGroup.children[ target ].strokeBounds.left - featureWidth;
          var xLoc = ( chrEdge + xOffset );
          var point = new paper.Point( xLoc, yLoc );
          var size = new paper.Size( featureWidth, ( range.end - range.start ) * view.zoom );
          var rectangle = new paper.Rectangle( point, size );
          var r = new paper.Path.Rectangle( rectangle );
          if ( parseInt( view.config.enable_pileup ) === 1 ) {
            utility.testCollision( r, featureGroup, view );
          }
          range.name = range.attribute.name ? range.attribute.name : '';
          r.info = range.attribute;
          r.thisColor = 'black';
          var fillColor = r.info.color ? r.info.color : view.config.color;
          r.fillColor = utility.formatColor( fillColor );
          r.onMouseDown = function( event ) {
            utility.attachPopover( r, range );
          };
          if ( parseInt( view.config.draw_label ) === 1 ) {
            point.y = r.position.y;
            var label = utility.generateLabel( r, view, targetGroup.children[ target ] );
            featureGroup.children[ gGroup + '-label' ].addChild( label );
            label.bringToFront();
          }
          featureGroup.addChild( r );
          r.sendToBack();
        }
      }
    };
  } );
