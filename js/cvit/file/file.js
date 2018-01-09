/*
 * file: file.js
 *
 * purpose: Controls file I/O and Parsing for CViTjs.
 *
 * main methods:
 *   getFile(filePath,dataStore)    = GETs file from server (ajax) 
 *   getFormat(filePath)			= 
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
 * required libraries:
 *  <script type="text/javascript" src="js/lib/jquery/jquery-1.8.0.min.js"></script>
 *  <script src="js/lib/d3/d3.min.js" charset="utf-8"></script>
 *  <script type="text/javascript" src="js/lib/paper/paper-full.min.js"></script>
 *
 * history:
 *   07/15/2014		awilkey		started draft version
 */

define( [ 'jquery', 'json!cvitjs/ConfDefault.json' ],
  function( $, defaultConf ) {

    return {

      /**
       * ajax call to get a file from the server. File parsing is done here
       * as well, based on returned file's extention. Currently supported types
       * are .conf, .gff, and .css
       *
       * @param {string} filePath	path to the  file to GET.
       * @return {string} File parsed to object
       */
      getFile: function( filePath, useDefault ) {
        var thisC = this;
        return $.ajax( {
          method: "GET",
          url: filePath,
          dataType: "text",
          error: function( err ) {
            console.log( 'CViTjs: Unable to open ' + filePath );
          }
        } ).then( function( result ) {
          var extention = thisC.getFormat( filePath );
          if ( extention ) {
            return thisC.parse[ extention ]( result, useDefault );
          } else {
            throw new Error( "CViTjs: " + filePath + " is not of a supported file type." );
          }
        }, function() {
          return "failed";
        } );
      },

      /**
       * Utility function to test the extention on the file that was grabbed from
       * the server. Currently only looks for gff,css, or conf formats.
       *
       * @param {string} path-to-file
       * @return {string | number} extention or 0 if invalid
       */
      getFormat: function( fileName ) {
        var match = fileName.match( /.*\.(gff|css|conf)/i );
        // Match will be null if extention is not matched
        // in this case, extention is 0 (not supported) otherwise extention
        // is the lowercase version of the extention
        var extention = match === null ? 0 : match[ 1 ].toLowerCase();
        return extention;
      },

      /**
       * Object that contains all the file parsing methods. It is done this way
       * so that you can access any given parse as file.parse[fileType] using the
       * [] for of object property access, avoiding using exec() pointlessly.		 *
       */
      parse: {
        /**
         * Returns an object representation of the pased gff.
         *
         * @param {string}	 gff 	The raw text return of a gff file
         * @return {Object[]}	Lines of the gff as objects
         */
        gff: function( gff ) {
          var parsedFile = {};
          var gffLine = {};
          var seqname;
          var source;
          var feature;
          var start;
          var end;
          var score;
          var strand;
          var frame;
          var attribute;

          // Break up gff by line, then test if line is not a comment (starts with #)
          // if it is, do nothing, otherwise break up current line by tabs and
          // read into parsef File object. forEach is used for readability, can be
          // replaced by a for loop for performance. 
          gff = gff.split( "\n" );
          gff.forEach(
            function( element ) {
              if ( element.match( /^[^#]/ ) ) {
                element = element.split( "\t" );
                gffLine = {
                  seqName: element[ 0 ],
                  source: element[ 1 ],
                  feature: element[ 2 ],
                  start: parseInt( element[ 3 ] ),
                  end: parseInt( element[ 4 ] ),
                  score: parseFloat( element[ 5 ] ),
                  strand: element[ 6 ],
                  frame: element[ 7 ],
                  // Break attribute tags into their own sub objects
                  // so can be accessed as parsedFile[index].attribute.attributetype
                  // this makes it easier to test if an attribute exists later
                  // this function is self-invoking
                  attribute: (
                    function() {
                      var attributes = element[ 8 ].split( ";" );
                      var test = {};
                      attributes.forEach(
                        function( attribute ) {
                          attribute = attribute.split( "=" );
                          attribute[ 0 ] = attribute[ 0 ].toLowerCase();
                          test[ attribute[ 0 ] ] = attribute[ 1 ];
                        } );
                      return test;
                    }() )
                };
                if ( parsedFile[ gffLine.feature ] === undefined ) {
                  parsedFile[ gffLine.feature ] = {};
                  parsedFile[ gffLine.feature ].features = [];
                }
                parsedFile[ gffLine.feature ].features.push( gffLine );
              }
            } );
          return parsedFile;
        },
        /**
         * Returns an object representation of the passed CSV. For now is
         * expecting the csv to be in the format of:
         * name,chromosome,start,end,x1,y1,x2,y2,(optional) notes
         *
         * @param {string}	 csv 	The raw text return of a csv file
         * @return {Object[]}	Lines of the gff as objects
         */
        csv: function( csv ) {
          var parsedFile = [];
          var seqname;
          var source;
          var start;
          var end;
          var x1;
          var y1;
          var x2;
          var y2;
          var attribute;

          // Break up gff by line, then test if line is not a comment (starts with #)
          // if it is, do nothing, otherwise break up current line by tabs and
          // read into parsef File object. forEach is used for readability, can be
          // replaced by a for loop for performance. 
          csv = csv.split( "\n" );
          csv.forEach(
            function( element ) {
              if ( element.match( /^[^#]/ ) ) {
                element = element.split( "," );
                parsedFile.push( {
                  seqName: element[ 0 ],
                  source: element[ 1 ],
                  start: element[ 2 ],
                  end: element[ 3 ],
                  x1: element[ 4 ],
                  y1: element[ 5 ],
                  x2: element[ 6 ],
                  y2: element[ 7 ],
                  // Break attribute tags into their own sub objects
                  // so can be accessed as parsedFile[index].attribute.attributetype
                  // this makes it easier to test if an attribute exists later
                  // this function is self-invoking
                  attribute: (
                    function() {
                      var attributes = element[ 8 ].split( ";" );
                      var test = {};
                      attributes.forEach(
                        function( attribute ) {
                          attribute = attribute.split( "=" );
                          test[ attribute[ 0 ] ] = attribute[ 1 ];
                        } );
                      return test;
                    }() )
                } );
              }
            } );
          return parsedFile;
        },

        /**
         * Returns an object representation of the passed config file.
         * 
         * @param {string}	 conf 	The raw text config file
         * @return {Object[]}	Lines of the gff as objects
         */
        conf: function( conf, useDefault ) {
          var parsedFile = useDefault ? defaultConf : {};
          var currentConfigKey = '';
          var confItem = {};
          conf = conf.split( "\n" );
          conf.forEach( function( element ) {
            if ( element.match( /^[^#;]/ ) ) {
              var match = element.match( /\[(.*)\]/ );
              if ( match !== null ) {
                currentConfigKey = match[ 1 ];
                parsedFile[ currentConfigKey ] = parsedFile[ currentConfigKey ] === undefined ? {} : parsedFile[ currentConfigKey ];
              } else {
                confItem = element.split( '=' );
                if ( confItem[ 1 ] && confItem[ 1 ].trim() !== '' ) {
                  parsedFile[ currentConfigKey ][ confItem[ 0 ].trim() ] = confItem[ 1 ].trim();
                }
              }
            }
          } );
          return parsedFile;
        }
      }
    };
  } );