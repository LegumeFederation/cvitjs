/*
 * file: glyph.js
 *
 * purpose: Gatekeeper for glyph subclasses.
 *
 * main methods:
 *	drawGlyph :		Require then the requested glyph.
 *	prepareGlyph :		Do common calculations for glyphs
 *	placeGlyph :	 	Call the subglyph logic to draw the glyph
 *	setXLoc :		Sets up xposition based on current backbone
 *.
 */


define( [ 'require', 'jquery', 'glyph/utilities' ],
  function( require, $, utility ) {

    return {
      /**
       * Uses the jQuery promise system to try to draw a glyph based on the
       * glyph/subglyph of the chosen data object. This does so by requiring the requested
       * glyph type on demand, which, while asynchronus in nature, minimizes the page load time
       * by only requesting/loading the files for the glyphs actually used.
       *
       * @param data [Object] Features to draw
       * @param config [Object] Configuration object meeting the cvitconfig.json schema
       * @param track [String] a string array f the format [{glyph},{subglyph}].
       * @param view [Object] Configuration information specific to current feature
       * @param backbone [paperGroup] A paper group that contains the chromosome backbone of the cvit drawing (optional)
       *
       * @return [promise] A jQuery promise, so that the glyphs can be drawn in an ansync form. 
       */
      drawGlyph: function( data, config, view, backbone ) {
        var thisC = this;
        var groupName = view.viewName;
        var deferred = new $.Deferred();
        var myGlyph = 'glyph/' + config[ groupName ].glyph + '/' + config[ groupName ].shape;
        var req = myGlyph;
        var key = config[ groupName ].glyph;
        $.when( {
          key: config[ groupName ].glyph,
          groupName: groupName,
          view: view
        } ).then( function( viewSettings ) {
          var myView = viewSettings.view;
          myView.key = viewSettings.key;
          myView.groupName = viewSettings.groupName;
          require( [ myGlyph ], function( myGlyph ) {
            deferred.resolve( thisC.prepareGlyph( data, config, viewSettings, backbone, myGlyph ) ).done( paper.view.draw() );
          } );
        } );
        paper.view.draw();
        return deferred.promise();
      },
      /**
       * Set up common view elements across the glyphs
       *
       * @param data [Object] Features to draw
       * @param config [Object] Configuration object meeting the cvitconfig.json schema
       * @param view [Object] Configuration information specific to current feature
       * @param backbone [paperGroup] A paper group that contains the chromosome backbone of the cvit drawing (optional)
       * @param glyph [object] An object consisting of a location to find the desired glyph/subglyph pair 
       *
       */
      prepareGlyph: function( data, config, viewSettings, backbone, glyph ) {
        var thisC = this;
        var locations = data.features;
        var glyphGroup = new paper.Group();
        var view = viewSettings.view;
        view.key = viewSettings.key;
        view.groupName = viewSettings.groupName;
        console.log( "CViTjs: Drawing " + view.groupName );
        glyphGroup.name = view.groupName;
        view.config = view.key === view.groupName ? config[ view.key ] : thisC.mergeConfig( config[ view.key ], config[ view.groupName ] );
        view.zoom = view.yScale;
        view.pileup = typeof( view.config.pileup_gap ) != "undefined" ? parseInt( view.config.pileup_gap ) : 0;
        view.context = thisC;
        view.centWidth = view.chromWidth + ( 2 * parseInt( config.centromere.centromere_overhang ) );
        locations.forEach( function( loc ) {
          if ( ( view.config.dataFilter && loc.source === view.config.dataFilter ) || !view.config.dataFilter ) {
            thisC.placeGlyph( loc, view, backbone, glyph, glyphGroup );
          }
        } );
        utility.generateViewControl( view.groupName, backbone );
      },
      /**
       * Place the current feature on the backbone
       *
       * @param data [Object] Feature to draw
       * @param view [Object] Configuration information specific to current feature
       * @param backbone [paperGroup] A paper group that contains the chromosome backbone of the cvit drawing (optional)
       * @param glyph [object] An object consisting of a location to find the desired glyph/subglyph pair 
       * @param glyphGroup [paperGroup] A paper group to contain the current feature set 
       *
       */
      placeGlyph: function( data, view, backbone, glyph, glyphGroup ) {
        glyph.draw( data, backbone, view, glyphGroup );
      },

      mergeConfig: function( baseConfig, editedConfig ) {
        $.each( baseConfig, function( key, value ) {
          if ( !editedConfig[ key ] ) {
            editedConfig[ key ] = value;
          }
        } );
        return editedConfig;
      }
    };
  } );