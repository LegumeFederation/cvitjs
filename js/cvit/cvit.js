/**
 * @file
 * A Javascript version of CViT. genotypeSelector.js is the primary module from which most of the work
 * is actually done. Calls for loading initial configuration and data, sets up the canvas
 * for display, then transfers data to request glyphs to be drawn. Note that once paperjs is required
 * in one module, it is added to global scope and should not be required in any other module, at risk of
 * broken functionality.
 * @author awilkey
 * @module cvit
 *
 */


// note here that domReady! means that genotypeSelector.js won't be called until after the
// dom is ready to be manipulated.

define(["jquery", "paper", "cvit/file/file", "cvit/menu/menus", "draw/general", "draw/glyph/glyph", "text!../../cvit.conf", "tools/zoom/zoom", "mousewheel", "domReady!"],
  function ($, paper, file, menu, general, glyph, cvitConf, zoom) {

    return /** @alias: module:cvit */ {

      /**
       * @description
       * Init CViTjs data, configuration and canvas.
       * @see main.blast_ui.js
       *
       * @param {string} [dataset] - dataset id of a default dataset
       * @param {object} [addData] - parsed gff of additional data to add post load
       *
       * @return {object} backbone - paperjs representation  of CViTjs layout. Can be used
       * to append additional data after base data has been loaded.
       *
       */

      init: function (dataset, addData) {
        // Good Practice to store this context in a variable, to use later.
        var thisC = this;
        // Change this if you want to set your main configuration file somewhere else.
        var viewConf;
        var defaultData;
        this.conf = {};
        this.data = {};
        this.viewInfo = {};
        // try to load main configuration information.

        var gConf = file.parse.conf(cvitConf, false);
        var locations;
        try {
          locations = thisC.getSettings(gConf, dataset);
        } catch (err) {
          console.error("CViTjs: Unable to load configuration information", err);
        }
        thisC.dataset = locations[1];
        locations = locations[0];
        viewConf = locations.conf;
        defaultData = locations.defaultData;

        console.log("CViTjs: Initializing Canvas");
        // Add canvas element to page
        try {
          var canvas = "<canvas id=\"cvit-canvas\" style=\"background-color:#6f6f6f;\"  resize>";
          var overlay = $("<div id=\"overlay\" class=\"hover_div\" style=\"position:absolute; display:block;\">");
          var cHeight = 500;
          var cWidth = 1000;
          if (gConf["data." + thisC.dataset].width !== undefined) {
            cWidth = parseInt(gConf["data." + thisC.dataset].width);
          } else if (gConf.general.width !== undefined) {
            cWidth = parseInt(gConf.general.width);
          }
          if (gConf["data." + thisC.dataset].height !== undefined) {
            cHeight = parseInt(gConf["data." + thisC.dataset].height);
          } else if (gConf.general.height !== undefined) {
            cHeight = parseInt(gConf.general.height);
          }
          $(canvas).css("position", "absolute");
          $("#cvit-div").css("position", "relative").append(overlay).append(canvas);
          $("#cvit-canvas").width(cWidth).height(cHeight).css("background-color", "white");
          paper.setup("cvit-canvas");
        } catch (err) {
          console.error("CViTjs: Was not able to find canvas.", err);
        }
        // cleans up paths based on the require baseURL found in require-config.js
        // used for when your url root isn't the same as your CViT root (embedded in page)
        var cvitBase = require.toUrl("").split("/");
        cvitBase.splice(cvitBase.length - 3, 3);
        cvitBase = cvitBase.length > 0 ? cvitBase.join("\/") + "/" : "";
        viewConf = cvitBase + viewConf;
        defaultData = cvitBase + defaultData;
        // read view configuration and baseGff (ASYNC)
        // .then(success,failure)
        var readConfig = file.getFile(viewConf, true).then(
          function (result) {
            console.log("CViTjs: Successfully loaded configuration.");
            thisC.conf = result;
          },
          function (err) {
            console.error("CViTjs: Unable to load configuration", err);
          });
        var readChromosome = file.getFile(defaultData).then(
          function (result) {
            console.log("CViTjs: Successfully loaded backbone data.");
            // integrate additional data in with the base data if supplied
            if (addData !== undefined) {
              for (var key in addData) {
                if (result[key]) {
                  addData[key].features.forEach(function (data) {
                    result[key].features.push(data);
                  });
                } else {
                  result[key] = addData[key];
                }
              }
            }
            thisC.data = result;
          },
          function (err) {
            console.error("CViTjs: Unable to load backbone data.", err);
          });
        var backbone;
        backbone = $.when(readChromosome, readConfig).then(
          function () {
            if (thisC.data.chromosome === undefined || thisC.data.chromosome === null) {
              throw new Error("CViTjs: Error: No chromosome data loaded.");
            }
            // set glyphs for the data sections in the form glyph:display.
            thisC.view.setGlyphs.call(thisC);
            console.log("CViTjs: Drawing requested view.");
            var chrom = thisC.data.chromosome;
            var bounds = thisC.view.getBounds(chrom);
            chrom.min = bounds.min;
            chrom.minSeq = bounds.chrMin;
            chrom.max = bounds.max;
            chrom.maxSeq = bounds.chrMax;
            thisC.viewInfo.xOffset = parseInt(thisC.conf.general.image_padding);
            thisC.viewInfo.yOffset = parseInt(thisC.conf.general.chrom_padding_top) >= thisC.viewInfo.xOffset ? parseInt(thisC.conf.general.chrom_padding_top) : thisC.viewInfo.xOffset;
            thisC.viewInfo.yScale = thisC.view.setZoom(thisC.data.chromosome.min, thisC.data.chromosome.max, thisC.viewInfo.yOffset);
            thisC.viewInfo.chromWidth = parseInt(thisC.conf.general.chrom_width);
            thisC.viewInfo.xMin = thisC.data.chromosome.min;
            thisC.data.zoom = thisC.view.setZoom(thisC.data.chromosome.min, thisC.data.chromosome.max);
            //actually draw the darn glyohs
            var cvitView = new paper.Group();
            cvitView.name = "backbone";
            var group = general.drawGlyph(thisC.data, thisC.conf, thisC.viewInfo).then(function (group) {
              paper.view.draw();
              group.name = "view";
              cvitView.addChild(group);
              menu.build(thisC.conf, thisC.viewInfo, group);
              paper.view.draw();
              for (var confGroup in thisC.conf) {
                if (thisC.conf.hasOwnProperty(confGroup)) {
                  thisC.viewInfo.viewName = confGroup;
                  var dataLoc = thisC.conf[confGroup].dataLoc;
                  if (thisC.data[dataLoc]) {
                    glyph.drawGlyph(thisC.data[dataLoc], thisC.conf, thisC.viewInfo, group).then(
                      function () {
                        //      paper.view.draw();
                      },
                      function (err) {
                        console.error("CViTjs: Unable to draw glyph.", err);
                      }
                    );
                  }
                }
              }
              paper.view.draw();
              return group;
            });

            //Enable zoom and pan controls
            zoom.enableZoom(paper.view.bounds);
            return group;
          },

          function (err) {
            console.error("CViTjs: Error with generating view.", err);
          });
        return backbone;
      },

      /**
       * @description
       * Setup functions for getting the boundaries required to manage the canvas.
       * @namespace
       */

      view: {

        /**
         * @description
         * Read over data to draw and set the maximum Y positions based on
         * the maximum of the provided backbone
         *
         * @param  {Object} chromosomeData - Backbone data
         */

        getBounds: function (chromosomeData) {
          var min = 0;
          var max = 0;
          var chrMin = chromosomeData.features[0].seqName;
          var chrMax = chromosomeData.features[0].seqName;
          chromosomeData.features.forEach(function (data) {
            if (data.start < min) {
              min = data.start;
              chrMin = data.seqName;
            }
            if (data.end > max) {
              max = data.end;
              chrMax = data.seqName;
            }
          });
          // Set min and max of the chromosome
          return {min: min, chrMin: chrMin, max: max, chrMax: chrMax};
        },

        /**
         * @description
         * Read over the data and set the glyph for each of feature groupings
         *
         */

        setGlyphs: function () {
          var thisC = this;
          $.each(thisC.conf, function (key) {

            if (key === "general") {
              thisC.conf[key].glyph = "chromosome";
              thisC.conf[key].shape = "chromosome";
            }
            if (thisC.conf[key].glyph === undefined) {
              thisC.conf[key].glyph = key;
            }

            if (thisC.conf[key].shape === undefined) {
              thisC.conf[key].shape = thisC.conf[key].glyph;
            }

            if (thisC.conf[key].feature) {
              var dataLoc = thisC.conf[key].feature.match(/(.*):(.*)/);
              thisC.conf[key].dataFilter = dataLoc[1];
              thisC.conf[key].dataLoc = dataLoc[2];
            } else {
              thisC.conf[key].dataLoc = key;
            }

          });
        },

        /**
         * @description
         * Set the y-scale factor for drawing on the canvas based on the actual
         * canvas dimensions and the vertical padding.
         * @param {Number} chromosomeMin - Minimum position on target chromosome
         * @param {Number} chromosomeMax - Maximum position on target chromosome
         * @param {Number} [yOff=50] - px margin between top of canvas and minimum point / bottom and maximum
         * @return {Number} The y-scale zoom factor
         *
         */

        setZoom: function (chromosomeMin, chromosomeMax, yOff) {
          yOff = yOff ? yOff : 50;
          return ($("#cvit-canvas").height() - (2 * yOff)) / (chromosomeMax - chromosomeMin);
        }
      },

      /**
       * @description
       * Read through the main configuration file and find the location of the
       * configuration file and data for the current URL's query string.
       *
       * @param {object} mainConf - Parsed cvit.conf ini file
       * @param {String} [dataset] - selected dataset to display
       *
       * @return {Array.<{conf: String, defaultData: String}>} settings
       *
       */

      getSettings: function (mainConf, dataset) {
        var query = window.location.search;
        var data = query.match(/data=(\w+)/);
        var confSettings;
        var confKey;
        if (dataset) {
          confSettings = mainConf["data." + dataset];
          confKey = dataset;
        } else if (!!data) {
          confSettings = mainConf["data." + data[1]];
          confKey = data[1];
        } else if ("general" in mainConf && "data_default" in mainConf.general) {
          var default_data = mainConf.general.data_default;
          confSettings = mainConf["data." + default_data];
          confKey = default_data;
        }
        if (confSettings !== undefined) {
          return [confSettings, confKey];
        } else {
          throw "Data not found";
        }
      }
    };
  }
);