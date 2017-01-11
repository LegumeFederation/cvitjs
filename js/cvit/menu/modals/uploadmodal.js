/*
 * file: uploadmodal.js
 *
 * purpose: View of the upload modal window.
 *
 * main methods:
 *  populate:   Draw the requested glyph.
 *
 */
define( [ 'jquery', 'cvit/file/file', 'draw/glyph/glyph', 'glyph/utilities',
    'bootstrap'
  ],
  function( $, file, glyph, utility ) {

    return {
      /**
       * Draws the glyph of a given feature.
       *
       * @param {object} context - context from parent menu.
       */
      populate: function( thisc ) {
        var upmod = this;
        $( '#upload-modal .modal-title' ).text( "Upload Your Data" );
        // Need to test if local file upload is supported by browser.
        // Will essentially only return false if using IE<8
        if ( window.File && window.FileReader && window.FileList && window.Blob ) {
          var fileTypes = [ 'gff', 'gff3' ];
          $( '#upload-modal .modal-body' ).html( '<div><input type="file" id="files" name="files[]" multiple /><output id="list"></output></div>' );
          $( '#files' ).on( 'change', function( event ) {
            var files = event.target.files;
            var output = [];
            for ( var key in files ) {
              var f = files[ key ];
              var extension = f.name.split( '.' ).pop().toLowerCase();
              if ( fileTypes.indexOf( extension ) < 0 ) {
                continue;
              }

              output.push( '<li><strong>', escape( f.name ), '</strong> - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
                '</li>' );
              var fileReader = new FileReader();
              fileReader.name = files[ key ].name;
              // TODO: Support customizing glyph options.
              $( fileReader ).on( 'load', function( event ) {
                console.log( event );
                var fileContents = event.target;
                var newFeatures = file.parse.gff( event.target.result );
                for ( var fkey in newFeatures ) {
                  console.log( newFeatures );
                  thisc.view.viewName = this.name.slice( 0, this.name.lastIndexOf( '.' ) ) + " " + fkey;
                  //upmod.checkBack(thisc.group,newFeatures[ fkey ].features,this.name);
                  var rangeGet = glyph.drawGlyph( newFeatures[ fkey ], 'range:range', thisc.conf, thisc.view, thisc.group ).then( function() {
                    paper.view.draw();
                  } );
                }
              } );
              thisc.view.viewName = f.name.toLowerCase();
              fileReader.readAsText( f );
            }

            $( '#list' ).html( '<ul>' + output.join( '' ) + '</ul>' );

          } );

        } else {
          $( '#upload-modal .modal-body' ).text( 'Uploading a local file is not currently supported in this browser. See help for supported browser list.' );
        }
      },
      /**
       * Compares targets of uploaded gff with the backbone, alerting user to
       * name mismatch.
       *
       * @param {object} backbone - backbone of the cvit view.
       * @param {object} feature - feature to check provided seqNames against backbone
       *
       */
      checkBack: function( backbone, features, filename ) {
        for ( var i = 0; i < features.length; i++ ) {
          var feature = features[ i ];
          console.log( feature.seqName );
          console.log( backbone._namedChildren[ feature.seqName ] );
          // TODO(?): Add alert window allowing manual renaming
          if ( backbone._namedChildren[ feature.seqName ] === undefined ) {
            $( '#upload-modal .modal-body' ).append( '<div id="upload-warning" class="alert alert-warning">' +
              '<strong>Warning!</strong> One or more sequence names in ' + filename + ' do not match backbone and may not be displayed.</br> Please check your names.</div>' );
            break;
          }
        }
      }

    };
  }
);