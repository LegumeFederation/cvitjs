/**
 * @file Placeholder for future development
 * @author awilkey
 * @module draw/glyph/measure/heat
 *
 */

define(["jquery", "glyph/utilities"],
  function ($, utility) {

    return /** @alias module:draw/glyph/measure/heat */ {
      /**
       * @description Simple console log to make sure glyph works
       *
       */

      test: function () {
        console.log("Test of range glyph");
      },

      /**
       * @description Draws the given feature as a heatmap enabled glyph.
       *
       * @param {object} heat - The item to draw.
       * @param {paper.group} group - Paper group that holds the backbones.
       * @param {object} view - object that contains configuration information.
       * @param {paper.group} glyphGroup - Paper group that will hold the range.
       */

      draw: function (heat, group, view, glyphGroup) {
      }
    };
  }
);