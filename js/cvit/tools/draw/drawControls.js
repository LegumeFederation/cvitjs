/**
 * @file coordinates the creation of all the drawing tools. Default tools:
 * fill color picker, line color picker, eraser, free draw, box highlight)
 * @author awilkey
 * @module tools/draw/drawControls
 *
 */

define(["jquery", "tools/draw/rect", "tools/draw/free", "tools/draw/eraser", "tools/draw/color", "bootstrap"],
  function ($, rect, free, eraser, color) {
    return /** @alias module:tools/draw/drawControls */ {

      /**
       * @description initializes buttons for drawing tools
       * @param {object} toolSelect - btn-group object to attach drawing tools to.
       *
       */

      addDrawButtons: function (toolSelect) {
        // Create base buttons for Drawing controls
        var rectTool = $("<button title=\"Draw Rectangle\" type=\"button\" class=\"btn btn-default\">" +
          "<span class=\"glyphicon glyphicon-edit\"></span>" +
          "</button>");

        var drawTool = $("<button title=\"Free Draw\" type=\"button\" class=\"btn btn-default\">" +
          "<span class=\"glyphicon glyphicon-pencil\"></span>" +
          "</button>");

        var eraserTool = $("<button title=\"Erase Drawing\" type=\"button\" class=\"btn btn-default\">" +
          "<span class=\"glyphicon glyphicon-erase\"></span>" +
          "</button>");

        var colorSel = $("<button title=\"Line Color\" type=\"button\" class=\"btn color-sel btn-default\" " +
          "data-toggle=\"modal\" data-target=\"#color1-select\">" +
          "<span> </span>" +
          "</button>");
        var colorSel2 = $(colorSel).clone(true);
        var tools = [rectTool, drawTool, eraserTool, colorSel, colorSel2];

        $(colorSel).attr("id", "color1");
        $(colorSel2).attr("id", "color2");
        $(colorSel2).attr("data-target", "#color2-select");
        $(colorSel2).attr("title", "Fill Color");
        // Add paper mouse tools
        var toolNumber = parseInt(paper.tools.length);
        rect.addRectDraw();
        free.addFreeDraw();
        eraser.addEraser();
        // Attach button click functionality, tools setup in order of adding to
        $(rectTool).on("click", function () {
          this.focus();
          toolSelect.activeTool = rectTool;
          paper.tools[(toolNumber)].activate();
        });
        $(drawTool).on("click", function () {
          this.focus();
          toolSelect.activeTool = drawTool;
          paper.tools[(toolNumber + 1)].activate();

        });
        $(eraserTool).on("click", function () {
          this.focus();
          toolSelect.activeTool = eraserTool;
          paper.tools[(toolNumber + 2)].activate();
        });
        color.addColorSel("color1", "Line");
        color.addColorSel("color2", "Fill");
        $(colorSel).on("click", function () {
          color.colorPicker("color1", colorSel);
        });
        $(colorSel2).on("click", function () {
          color.colorPicker("color2", colorSel2);
        });

        // Append new tools to the tool select menu
        $(toolSelect).append(tools);
      }
    };
  }
);