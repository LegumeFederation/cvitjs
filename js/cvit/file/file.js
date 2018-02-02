/**
 * @file
 * Controls file I/O and parsing for CViTjs.
 * @author awilkey
 * @requires jQuery
 * @requires json!cvitjs/ConfDefault.json
 * @module file
 */

define(["jquery", "json!cvitjs/ConfDefault.json"],
  function ($, defaultConf) {

    // noinspection JSUnusedGlobalSymbols
    return /** @alias: module:cvit */ {

      /**
       * @description
       * ajax call to get a file from the server. File parsing is done here
       * as well, based on returned file's extension. Currently supported types
       * are .conf (.ini), .gff, and .css
       *
       * @param {string} filePath - Path to the file to GET.
       * @param {boolean} [useDefault] - Override requested configuration with defaults.
       * @return {object} File to be parsed as an object
       */

      getFile: function (filePath, useDefault) {
        var thisC = this;
        return $.ajax({
          method: "GET",
          url: filePath,
          dataType: "text",
          error: function (err) {
            console.error("CViTjs: Unable to open " + filePath, err);
          }
        }).then(function (result) {
          var extention = thisC.getFormat(filePath);
          if (extention) {
            return thisC.parse[extention](result, useDefault);
          } else {
            throw new Error("CViTjs: " + filePath + " is not of a supported file type.");
          }
        }, function () {
          return "failed";
        });
      },

      /**
       * @description
       * Utility function to test the extension on the file that was grabbed from
       * the server. Currently only looks for gff,css, or conf formats.
       *
       * @param {string}  fileName - path-to-file
       * @return {string | number} extension - File extension or 0 if invalid
       */

      getFormat: function (fileName) {
        var match = fileName.match(/.*\.(gff|css|conf)/i);
        // Match will be null if extension is not matched
        // in this case, extension is 0 (not supported) otherwise extension
        // is the lowercase version of the extension
        return match === null ? 0 : match[1].toLowerCase();
      },

      /**
       * @description
       * Collection of file parsing methods. It is done this way
       * so that you can access any given parse as file.parse[fileType] using the
       * [] for of object property access.
       *
       * @namespace
       */

      parse: {
        /**
         * @description
         * Returns an object representation of the pased gff.
         *
         * @param {string}   gffBase -  The raw text return of a gff file
         * @return {Object}  Lines of the gff as objects
         */
        gff: function (gffBase) {
          var parsedFile = {};
          var gffLine = {};

          // Break up gff by line, then test if line is not a comment (starts with #)
          // if it is, do nothing, otherwise break up current line by tabs and
          // read into parsef File object. forEach is used for readability, can be
          // replaced by a for loop for performance.
          var gff = gffBase.split("\n");
          gff.forEach(
            function (element) {
              if (element.match(/^[^#]/)) {
                element = element.split("\t");
                gffLine = {
                  seqName: element[0],
                  source: element[1],
                  feature: element[2],
                  start: parseInt(element[3]),
                  end: parseInt(element[4]),
                  score: parseFloat(element[5]),
                  strand: element[6],
                  frame: element[7],
                  // Break attribute tags into their own sub objects
                  // so can be accessed as parsedFile[index].attribute.attributetype
                  // this makes it easier to test if an attribute exists later
                  // this function is self-invoking
                  attribute: (
                    function () {
                      var attributes = element[8].split(";");
                      var test = {};
                      attributes.forEach(
                        function (attribute) {
                          attribute = attribute.split("=");
                          attribute[0] = attribute[0].toLowerCase();
                          test[attribute[0]] = attribute[1];
                        });
                      return test;
                    }())
                };
                if (parsedFile[gffLine.feature] === undefined) {
                  parsedFile[gffLine.feature] = {};
                  parsedFile[gffLine.feature].features = [];
                }
                parsedFile[gffLine.feature].features.push(gffLine);
              }
            });
          return parsedFile;
        },

        /**
         * @description
         * Returns an object representation of the passed CSV. For now is
         * expecting the csv to be in the format of:
         * name,chromosome,start,end,x1,y1,x2,y2,(optional) notes
         *
         * @param {string}   csvBase - The raw text return of a csv file
         * @return {Object}  Lines of the gff as objects
         */

        csv: function (csvBase) {
          var parsedFile = [];

          // Break up gff by line, then test if line is not a comment (starts with #)
          // if it is, do nothing, otherwise break up current line by tabs and
          // read into parsef File object. forEach is used for readability, can be
          // replaced by a for loop for performance.
          var csv = csvBase.split("\n");
          csv.forEach(
            function (element) {
              if (element.match(/^[^#]/)) {
                element = element.split(",");
                parsedFile.push({
                  seqName: element[0],
                  source: element[1],
                  start: element[2],
                  end: element[3],
                  x1: element[4],
                  y1: element[5],
                  x2: element[6],
                  y2: element[7],
                  // Break attribute tags into their own sub objects
                  // so can be accessed as parsedFile[index].attribute.attributetype
                  // this makes it easier to test if an attribute exists later
                  // this function is self-invoking
                  attribute: (
                    function () {
                      var attributes = element[8].split(";");
                      var test = {};
                      attributes.forEach(
                        function (attribute) {
                          attribute = attribute.split("=");
                          test[attribute[0]] = attribute[1];
                        });
                      return test;
                    }())
                });
              }
            });
          return parsedFile;
        },

        /**
         * @description
         * Returns an object representation of the passed config file.
         *
         * @param {string}  confBase -  The raw text config file
         * @param {boolean} [useDefault] - Use default config instead of custom
         * @return {object}  Lines of the gff as objects
         */

        conf: function (confBase, useDefault) {
          var parsedFile = useDefault ? defaultConf : {};
          var currentConfigKey = "";
          var confItem = {};
          var conf = confBase.split("\n");
          conf.forEach(function (element) {
            if (element.match(/^[^#;]/)) {
              var match = element.match(/\[(.*)]/);
              if (match !== null) {
                currentConfigKey = match[1];
                parsedFile[currentConfigKey] = parsedFile[currentConfigKey] === undefined ? {} : parsedFile[currentConfigKey];
              } else {
                confItem = element.split("=");
                if (confItem[1] && confItem[1].trim() !== "") {
                  parsedFile[currentConfigKey][confItem[0].trim()] = confItem[1].trim();
                }
              }
            }
          });
          return parsedFile;
        }
      }
    };
  }
);