/*
 * file: exportmodal.js
 *
 * purpose: View of the Export modal window.
 *
 * main methods:
 *  populate:  populates the modal.
 *
 */

define( [ 'jquery' ],
  function( $ ) {

    return {
      /**
       *
       * Populate the Export Modal Window
       *
       */
      populate: function() {

        $( '#export-modal .modal-title' ).text( "Export View to Image" );
        $( '#export-modal .modal-body' ).html( '<p class="lead">Save your current view as an image.</p>' +
          '<h4>Export As</h4><div class="container modal-container"><div class="row">' +
          '<form role="form" class="form-inline"><div class="form-group">' +
          '<label for="format-select" style="padding-right:1em;">Select format:</label>' +
          '<select class="form-control" id="format-select"><option>png</option>' +
          '<option>svg</option></select></div><div class="btn-group" style="padding-left:1em;">' +
          '<button type="button" class="btn btn-primary" id="export-button">Export</button></div></form></div></div>'
        );
        $( '#export-modal .form-control' ).css( 'width', 'auto' );

        $( '#export-button' ).on( 'click', function( event ) {
          var dl = document.createElement( 'a' );
          // Paper logic to export as svg
          if ( $( '#format-select' ).val() === 'svg' ) {
            dl.setAttribute( 'href', "data:image/svg+xml;utf8," + encodeURIComponent( paper.project.exportSVG( {
              asString: true
            } ) ) );
            dl.setAttribute( 'download', 'cvit.svg' );
            $( document.body ).append( dl );
            dl.click();
            $( dl ).remove();
          }
          // HTML5 logic to export as png
          if ( $( '#format-select' ).val() === 'png' ) {
            var image = $( '#cvit-canvas' )[ 0 ].toDataURL( 'image/png' );
            dl.setAttribute( 'href', image );
            dl.setAttribute( 'download', 'cvit.png' );
            $( document.body ).append( dl );
            dl.click();
            $( dl ).remove();
          }
        } );
      }
    };
  }
);