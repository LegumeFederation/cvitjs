// Load cvit as a module and run. This ensures single point of entry.
// TODO: Use require text module to start by reading in configuration text
// file first

require( [ "jquery", "cvit/cvit", "cvit/file/file" ], function( $, cvit, file ) {
    console.log( "CViTjs: Starting CViTJS" );
    // cvit.init(dataset) to have the provided dataset
    //override defaults or URI string
    var passedData = document.getElementById( 'cvit-div' );
    var dataset = passedData.dataset.backbone ? passedData.dataset.dataset : undefined;

    var gff = passedData.dataset.gff ? file.getFile( passedData.dataset.gff ) : undefined;

    $.when( gff ).then( function( additionalData ) {
        // do any additional data parsing here to make the additional gff
        // data acceptable to match with your backbone.

        // Initialize the cvit view
        cvit.init( dataset, additionalData );
      },
      function( err ) {
        console.log( err );
        document.getElementById( 'cvit-div' ).innerHTML = err.message;
      } );
  },
  function( err ) {
    console.log( err );
    document.getElementById( 'cvit-div' ).innerHTML = err.message;
  } );
