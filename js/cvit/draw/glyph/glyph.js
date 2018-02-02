/**
 * @file Main entry point for glyph subclasses.
 * @author awilkey
 * @module draw/glyph
 *
 */


define(["require", "jquery", "glyph/utilities"],
  function (require, $, utility) {

    return /** @alias module:draw/glyph */ {

      /**
       * @description
       * Uses the jQuery promise system to try to draw a glyph based on the
       * glyph/subglyph of the chosen data object. This does so by requiring the requested
       * glyph type on demand, which, while asynchronus in nature, minimizes the page load time
       * by only requesting/loading the files for the glyphs actually used.
       *
       * @param {object} data - Features to draw
       * @param {object} config - Configuration object meeting the cvitconfig.json schema
       * @param {object} view - Configuration information specific to current feature
       * @param {paper.group} backbone - A paper group that contains the chromosome backbone of the cvit drawing (optional)
       *
       * @return {promise} A jQuery promise, so that the glyphs can be drawn in an ansync form.
       */

      drawGlyph: function (data, config, view, backbone) {
        var thisC = this;
        var groupName = view.viewName;
        var deferred = new $.Deferred();
        var myGlyph = "glyph/" + config[groupName].glyph + "/" + config[groupName].shape;
        $.when({
          key: config[groupName].glyph,
          groupName: groupName,
          view: view
        }).then(function (viewSettings) {
          var myView = viewSettings.view;
          myView.key = viewSettings.key;
          myView.groupName = viewSettings.groupName;
          require([myGlyph], function (myGlyph) {
            deferred.resolve(thisC.prepareGlyph(data, config, viewSettings, backbone, myGlyph)).done(paper.view.draw());
          });
        });
        paper.view.draw();
        return deferred.promise();
      },

      /**
       * @description Set up common view elements across the glyphs
       *
       * @param {object} data -Features to draw
       * @param {object} config - configuration object meeting the cvitconfig.json schema
       * @param {object} viewSettings - [Object] Configuration information specific to current feature
       * @param {paper.group} backbone - [paperGroup] A paper group that contains the chromosome backbone of the cvit drawing (optional)
       * @param {object} glyph -  An object consisting of a location to find the desired glyph/sub-glyph pair
       *
       */

      prepareGlyph: function (data, config, viewSettings, backbone, glyph) {
        var thisC = this;
        var locations = data.features;
        var glyphGroup = new paper.Group();
        var view = viewSettings.view;
        view.key = viewSettings.key;
        view.groupName = viewSettings.groupName;
        console.log("CViTjs: Drawing " + view.groupName);
        glyphGroup.name = view.groupName;
        view.config = view.key === view.groupName ? config[view.key] : thisC.mergeConfig(config[view.key], config[view.groupName]);
        view.zoom = view.yScale;
        view.pileup = typeof(view.config.pileup_gap) !== "undefined" ? parseInt(view.config.pileup_gap) : 0;
        view.context = thisC;
        view.centWidth = view.chromWidth + (2 * parseInt(config.centromere.centromere_overhang));
        locations.forEach(function (loc) {
          if ((view.config.dataFilter && loc.source === view.config.dataFilter) || !view.config.dataFilter) {
            thisC.placeGlyph(loc, view, backbone, glyph, glyphGroup);
          }
        });
        utility.generateViewControl(view.groupName, backbone);
      },

      /**
       * @description Place the current feature on the backbone
       *
       * @param {object} data - Feature to draw
       * @param {object} view - Configuration information specific to current feature
       * @param {paper.group} backbone - A paper group that contains the chromosome backbone of the cvit drawing (optional)
       * @param {object} glyph - An object consisting of a location to find the desired glyph/subglyph pair
       * @param {paper.group} glyphGroup - A paper group to contain the current feature set
       *
       */

      placeGlyph: function (data, view, backbone, glyph, glyphGroup) {
        glyph.draw(data, backbone, view, glyphGroup);
      },

      /**
       * @description Place the current feature on the backbone
       *
       * @param {object} baseConfig - Default configuration file
       * @param {object} editedConfig - Configuration information specific to current feature
       *
       * @return {object} edited configuration with missing configuration options supplied by the base file
       *
       */

      mergeConfig: function (baseConfig, editedConfig) {
        $.each(baseConfig, function (key, value) {
          if (!editedConfig[key]) {
            editedConfig[key] = value;
          }
        });
        return editedConfig;
      }
    };
  });