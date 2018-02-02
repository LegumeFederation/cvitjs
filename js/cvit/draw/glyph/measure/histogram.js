/**
 * @file Placeholder for future development
 * @author awilkey
 * @module draw/glyph/measure/histogram
 *
 */

define(["jquery", "glyph/utilities"],
  function ($, utility) {

    return /** @alias module:draw/glyph/measure/histogram */ {
      /**
       * @description Simple console log to make sure glyph works
       *
       */

      test: function () {
        console.log("Test of range glyph");
      },

      /**
       * @description Draws the given feature as a histogram glyph.
       *
       * @param {object} hist - The item to draw.
       * @param {paper.group} group - Paper group that holds the backbones.
       * @param {object} view - object that contains configuration information.
       * @param {paper.group} glyphGroup - Paper group that will hold the range.
       */

      draw: function (hist, group, view, glyphGroup) {
      }
    };
  }
);