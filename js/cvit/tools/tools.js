/**
 * @file Create a drop down menu to allow for tooltip selection.
 * @author awilkey
 * @module tools
 *
 */

define(["jquery", "tools/zoom/zoom", "tools/draw/drawControls", "bootstrap"],
  function ($, zoom, draw) {
    return /** @alias: module:tools */{

      /**
       * @description Builds tooltip item stack and appends to canvas. This includes view zoom and
       * reset buttons, as well as provides a place for interactive behavior.
       *
       */

      addToolsControl: function () {
        // Setup tool control button
        try {
          var menuButton = $("<div title=\"Pointer Tools\" id=\"tool-btn\" class=\"btn-group\">" +
            "<button type=\"button\" class=\"btn btn-xs btn-default\">" +
            "<span class=\"glyphicon glyphicon-wrench\"></span>" +
            "</button>");
          var toolSelect = $("<div id=\"tool-bar\" class=\"btn-group btn-group-xs\"" +
            " role=\"group\" aria-label=\"tools\"></div>");
          toolSelect.hide();

        } catch (err) {
          console.error("CViTjs: Unable to attach tool control button", err);
        }

        // Setup zoom controls
        try {
          var panTool = $("<button title=\"Pan\" type=\"button\" class=\"btn  btn-default\">" +
            "<span class=\"glyphicon glyphicon-move\"></span>" +
            "</button>");
          var boxTool = $("<button title=\"Box Zoom\" type=\"button\" class=\"btn btn-default\">" +
            "<span class=\"glyphicon glyphicon-zoom-in\"></span>" +
            "</button>");
          $(menuButton).on("click", function () {
            $(toolSelect).toggle();
            if (toolSelect.activeTool) {
              toolSelect.activeTool.focus();
            }

          });

          $(panTool).on("click", function () {
            this.focus();
            toolSelect.activeTool = panTool;
            paper.tools[0].activate();
          });

          $(boxTool).on("click", function () {
            this.focus();
            toolSelect.activeTool = boxTool;
            paper.tools[1].activate();
          });

          //Add zoom and draw tools to menu
          $(toolSelect).append(panTool);
          toolSelect.activeTool = panTool;
          $(toolSelect).append(boxTool);
          draw.addDrawButtons(toolSelect);
          //Add the menu to the zoom controls
          $("#zoom-ctrl").after(menuButton);
          $(menuButton).after(toolSelect);
          $("#color1").css("background", paper.project.color1.toCSS());
          $("#color2").css("background", paper.project.color2.toCSS());
        } catch (err) {
          console.error("CViTjs: Unable to attach one or more controls.", err);
        }
      }
    };
  }
);