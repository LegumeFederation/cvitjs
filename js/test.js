/*
 * file: cvit.js
 *
 * purpose: A Javascript version of CViT.
 *
 * main methods:
 *   makeImage(divname, gff)      = create a new CViTjs image inside a <div> and
 *                                  draw features described by gff array.
 *   drawGffFeatures(gff)         = draw a new set off features on an existing
 *                                  image.
 *   readGff(raw)                 = parse file into GFF records.
 *   removeGffFeatures(gff)       = remove the features described by gff array.
 *   removeClassCss(classname, cssclassname)
 *                                = remove css class for a class of glyphs.
 *   restoreClassStyle(classname, attr)
 *                                = restore default style for a class of glyphs.
 *   setClassCss(classname, cssclassname)
 *                                = assign a css class to a class of glyphs.
 *   setClassStyle(classname, attr, value)
 *                                = change a style setting on a class of glyphs.
 *
 */

// note here that domReady! means that cvit.js won't be called until after the
// dom is ready to be manipulated.
(function($){console.log("BOOM");
        try {
          var canvas = '<canvas id="cvit-canvas" style="background-color:#6f6f6f;"  resize>';
          var overlay = $( '<div id="overlay" class="hover_div" style="position:absolute; display:block;">' );
          $( canvas ).css( 'position', 'absolute' );
          $( '#cvit-div' ).css( 'position', 'relative' );
          $( '#cvit-div' ).append( overlay );
          $( '#cvit-div' ).append( canvas );
          $( '#cvit-canvas' ).width( 1000 );
          $( '#cvit-canvas' ).height( 500 );
          $( '#cvit-canvas' ).css( "background-color", "white" );
          paper.setup( 'cvit-canvas' );
        } catch ( err ) {
          console.log( 'CViTjs: Error: Was not able to find canvas.' );
        }
	return;
}(jQuery));
