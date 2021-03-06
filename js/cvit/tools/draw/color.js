/**
 * @file Color selection tool
 * @author awilkey
 * @module tools/draw/color
 *
 */


define(["jquery", "bootstrap"],
  function ($) {
    return /** @alias module:tools/draw/color */{

      /**
       * @description Creates base color select modal
       *
       * @param {string} id - id of color selector
       * @param {string} use - "Line" or "Fill" color
       *
       */

      addColorSel: function (id, use) {
        var modId = id + "-select";
        var colorModal = $("<div id=\"" + modId + "\" class=\"modal fade\" role=\"dialog\"><div class=\"modal-dialog\">" +
          "<div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close mod-dis\"" +
          " data-dismiss=\"modal\">&times;</button><h4 class=\"modal-title\"></h4></div>" +
          "<div class=\"modal-body\"></div><div class=\"modal-footer\"><button type=\"button\" " +
          "id=\"pick-low\" class=\"btn btn-default mod-dis\" data-dismiss=\"modal\">Close</button></div></div></div></div>"
        );
        $("#cvit-div").append(colorModal);
        $("#" + modId + " .modal-title").text("Choose " + use + " Color");
        $("#" + modId + " .modal-body").html("<div><canvas id='" + modId + "-canvas' width='500' height='200'></canvas></div>");
        //	return colorModal;
      },

      /**
       * @description HVSA (Hue Value Saturation Alpha) color picker gui, but not an actual paper Tool
       *
       * @param {string} id - id of color selector
       * @param {object} button - button object that controls this instance of the color picker
       *
       */

      colorPicker: function (id, button) {
        // disable tool in new window and save base view for later;
        var toolIndex = paper.tool._index;
        paper.tool = undefined;
        var modId = id + "-select";
        $("#" + modId + " .modal-body").html("<div><canvas id='" + modId + "-canvas' width='500' height='200'></canvas></div>");
        var baseScope = paper.project;
        if (paper.projects[1]) {
          paper.projects[1].remove();
        }
        paper.setup(modId + "-canvas");
        paper.project.canvas = modId;

        // setup hue and brightness selection box
        var topLeft = new paper.Point(10, 10);
        var bottomRight = new paper.Point(240, 120);
        var topRight = new paper.Point(240, 10);
        var leftOffset = [20, 0];
        var rightOffset = [40, 0];
        new paper.Path.Rectangle({
          topLeft: topLeft,
          bottomRight: bottomRight,
          fillColor: {
            gradient: {
              stops: ["#F00", "#FF0", "#0F0", "#0FF", "#00F", "#F0F", "#F00"]
            },
            origin: topLeft,
            destination: topRight
          },
          strokeColor: "black",
          strokeWidth: 1
        });

        var pGra = new paper.Path.Rectangle({
          topLeft: topLeft,
          bottomRight: bottomRight,
          fillColor: {
            gradient: {
              stops: [new paper.Color(0, 0, 0, 0), new paper.Color(0, 0, 0, 1)]
            },
            origin: topRight,
            destination: bottomRight
          }
        });

        // Setup saturation preview box
        topLeft = topRight.add(leftOffset);
        bottomRight = bottomRight.add(rightOffset);
        topRight = topRight.add(rightOffset);
        var sRad = new paper.Path.Rectangle({
          topLeft: topLeft,
          bottomRight: bottomRight,
          fillColor: "black",
          strokeColor: "black",
          strokeWidth: 1
        });
        var sGra = sRad.clone();
        sGra.fillColor = {
          gradient: {
            stops: [new paper.Color(1, 1, 1, 0), new paper.Color(1, 1, 1, 1)]
          },
          origin: topRight,
          destination: bottomRight
        };

        // Setup alpha preview box
        topLeft = topRight.add(leftOffset);
        bottomRight = bottomRight.add(rightOffset);
        topRight = topRight.add(rightOffset);
        var aGra = new paper.Path.Rectangle({
          topLeft: topLeft,
          bottomRight: bottomRight,
          fillColor: {
            gradient: {
              stops: [new paper.Color(1, 1, 1, 1), new paper.Color(1, 1, 1, 0)]
            },
            origin: topRight,
            destination: bottomRight
          },
          strokeColor: "black",
          strokeWidth: 1
        });

        // setup preview window of selected color as fill with target to see
        // alpha level
        var colBox = new paper.Path.Rectangle({
          topLeft: [10, 140],
          bottomRight: bottomRight.add([0, 60]),
          fillColor: "white",
          strokeColor: "black",
          strokeWidth: 1

        });
        new paper.CompoundPath({
          children: [
            new paper.Path.Circle({
              center: colBox.position,
              radius: 20
            }),
            new paper.Path.Circle({
              center: colBox.position,
              radius: 10
            })
          ],
          fillColor: "black"
        });

        var colPrev = new paper.Path.Rectangle({
          topLeft: [10, 140],
          bottomRight: bottomRight.add([0, 60]),
          fillColor: "black",
          strokeColor: "black",
          strokeWidth: 1

        });

        // setup colorbox pointer for hue and brightness selection
        var pointer = new paper.CompoundPath({
          children: [
            new paper.Path.Line({
              from: [25, 20],
              to: [25, 30]
            }),
            new paper.Path.Line({
              from: [20, 25],
              to: [30, 25]
            })
          ],
          strokeColor: "black"
        });
        pointer.strokeColor = new paper.Color(0.6);
        pointer.position = pGra.bounds.bottomRight;

        // Setup sliders for saturation and alpha sliders
        var q = new paper.Point(10, 10);
        var w = new paper.Size(25, 10);
        var sSlide = new paper.Path.Rectangle(q, w);
        sSlide.fillColor = new paper.Color(0.6);
        sSlide.strokeColor = "black";
        sSlide.strokeWidth = 1;
        sSlide.position = sGra.position;
        sSlide.position.y = sGra.bounds.topLeft.y;
        var aSlide = sSlide.clone();
        aSlide.position = aGra.position;
        aSlide.position.y = aGra.bounds.topLeft.y;
        paper.view.draw();

        // utility function to calculat HSB value based on pointer and slider
        // positions and change previews
        function changeColor() {
          var h = ((pointer.position.x - pGra.topLeft.x) / pGra.bounds.width) * 360;
          var b = 1 - ((pointer.position.y - pGra.topLeft.y) / pGra.bounds.height);
          var s = 1 - (sSlide.position.y - sGra.bounds.topLeft.y) / sGra.bounds.height;
          var a = 1 - (aSlide.position.y - aGra.bounds.topLeft.y) / aGra.bounds.height;
          sRad.fillColor.hue = h;
          sRad.fillColor.brightness = b;
          sRad.fillColor.saturation = 1;

          var sG1 = new paper.Color(sRad.fillColor);
          sG1.saturation = 1;
          var sG2 = new paper.Color(sG1);
          sG2.saturation = 0;
          sGra.fillColor.gradient.stops = [sG1, sG2];
          var aG1 = new paper.Color(sG1);
          aG1.saturation = s;
          var aG2 = new paper.Color(aG1);
          aG2.alpha = 0;
          aGra.fillColor.gradient.stops = [aG1, aG2];
          var prev = new paper.Color(aG1);
          prev.alpha = a;
          colPrev.fillColor = prev;
          paper.view.draw();
          console.log(button);
          $(button).css("background", colPrev.fillColor.toCSS());

        }

        // Setup what happens when you hide the modal
        $("#" + modId).on("hidden.bs.modal", function () {
          paper.tools[toolIndex].activate();
          baseScope.activate();
          console.log(id);
          baseScope[modId] = [pointer.position, sSlide.position, aSlide.position];
          baseScope[id] = colPrev.fillColor;
        });

        // recover pointer position from previous selection
        if (baseScope[modId]) {
          pointer.position = baseScope[modId][0];
          sSlide.position = baseScope[modId][1];
          aSlide.position = baseScope[modId][2];
          changeColor();
        }
        changeColor();

        // Mouse controls for pointers
        pGra.onMouseDown = function (event) {
          pointer.position = event.point;
          changeColor();
        };

        pGra.onMouseDrag = function (event) {
          pointer.position = event.point;
          changeColor();
        };

        // Mouse control for sliders
        sGra.onMouseDown = function (event) {
          if (sGra.bounds.topLeft.y <= event.point.y &&
            event.point.y <= sGra.bounds.bottomLeft.y) {
            sSlide.position.y = event.point.y;
          }
          changeColor();
        };

        sGra.onMouseDrag = function (event) {
          if (sGra.bounds.topLeft.y <= event.point.y &&
            event.point.y <= sGra.bounds.bottomLeft.y) {
            sSlide.position.y = event.point.y;
          }
          changeColor();
        };

        sSlide.onMouseDown = sGra.onMouseDown;
        sSlide.onMouseDrag = sGra.onMouseDrag;

        aGra.onMouseDown = function (event) {
          if (aGra.bounds.topLeft.y <= event.point.y &&
            event.point.y <= aGra.bounds.bottomLeft.y) {
            aSlide.position.y = event.point.y;
          }
          changeColor();
        };
        aGra.onMouseDrag = function (event) {
          if (aGra.bounds.topLeft.y <= event.point.y &&
            event.point.y <= aGra.bounds.bottomLeft.y) {
            aSlide.position.y = event.point.y;
          }
          changeColor();
        };

        aSlide.onMouseDown = aGra.onMouseDown;
        aSlide.onMouseDrag = aGra.onMouseDrag;
      }
    };
  }
);