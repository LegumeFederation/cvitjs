/**
 * @file Logic for zooming and panning the canvas.
 * @author awilkey
 * @module tools/zoom
 *
 */

define(["jquery", "mousewheel"],
  function ($) {

    return /** @alias module:tools/zoom */ {

      /**
       * @description Add zoom and pan control overlay over the cvit canvas
       *
       */

      addZoomControl: function () {
        var thisC = this;
        var zoomGroup = $("<div id=\"zoom-ctrl\" class=\"btn-group-vertical btn-group-xs\" role=\"group\" aria-label=\"Zoom controls\">");
        $(zoomGroup).css("top", "10px");
        $(zoomGroup).css("left", "10px");
        var zIn = $("<button title=\"Zoom In\" type=\"button\" id=\"zoom-in-btn\" class=\"btn btn-default z-ctrl\" aria-label=\"Zoom in\"></button>");
        $(zIn).append("<span \" class=\"glyphicon glyphicon-plus \" aria-hidden=\"true\"></span>");
        var zOut = $("<button title=\"Zoom Out\" id=\"zoom-out-btn\" type=\"button\" class=\"btn btn-default z-crtl\" aria-label=\"Zoom out\" disabled=\"true\"></button>");
        $(zOut).append("<span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span>");
        var zReset = $("<button title=\"Reset View\" type=\"button\" class=\"btn btn-default\" aria-label=\"Reset zoom\"></button>");
        $(zReset).append("<span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span>");
        thisC.zoomRulers(2, 1);
        thisC.zoomRulers(1, 2);
        // setup click logic for zoom in/out/reset
        var originalCenter = paper.project.layers[0].position;
        var rulerCenter = paper.project.layers[1].position;
        paper.project.layers[0].oc = originalCenter;
        paper.project.layers[0].center = originalCenter;
        paper.project.layers[0].zoom = 1;
        paper.project.layers[1].zoom = 1;
        paper.project.layers[1].layerOffset = paper.project.layers[0].position.y - paper.project.layers[1].position.y;
        $(zIn).on("click", function (event) {
          event.preventDefault();
          var oldZoom = paper.project.activeLayer.zoom;
          var newZoom = thisC.changeZoom(oldZoom, 1, paper.view.center, paper.view.center);
          thisC.zoomRulers(newZoom[0], oldZoom);
          if ($("#popdiv").length) {
            thisC.compensateZoom(newZoom[0]);
          }
          paper.project.layers[0].center = paper.project.layers[0].position;
          paper.view.draw();
        });

        $(zOut).on("click", function (event) {
          event.preventDefault();
          var oldZoom = paper.project.layers[0].zoom;
          var newZoom = thisC.changeZoom(oldZoom, -1, paper.view.center, paper.view.center);
          thisC.zoomRulers(newZoom[0], oldZoom);
          if ($("#popdiv").length) {
            thisC.compensateZoom(newZoom[0]);
          }
          paper.project.layers[0].center = paper.project.layers[0].position;
          paper.view.draw();
        });

        $(zReset).on("click", function (event) {
          event.preventDefault();
          var oldZoom = paper.project.layers[0].zoom;
          if (paper.project.layers[0].zoom !== 1) {
            thisC.zoomRulers(1, oldZoom);
          }
          paper.project.layers[0].position = originalCenter;
          paper.project.layers[1].position = rulerCenter;
          paper.project.layers[0].center = originalCenter;
          paper.view.draw();
          thisC.compensateZoom(1);
          paper.view.draw();
        });

        $(zoomGroup).append(zIn);
        $(zoomGroup).append(zReset);
        $(zoomGroup).append(zOut);

        $("#overlay").append(zoomGroup);
      },

      /**
       * @description Setup mouse zoom and pan paper Tools and events
       *
       * @param {object} startView - The original positioning of the canvas.
       */

      enableZoom: function (startView) {
        var thisC = this;
        this.originalCenter = paper.project.layers[0].position;
        // Attach listener to mousewheel using jquery plugin to watch for scrollwheel zoom
        // delta means that zoom will center around the mouse pointer	
        $("#cvit-canvas").mousewheel(function (event) {
          var mousePos = new paper.Point(event.offsetX, event.offsetY);
          var viewPos = paper.project.layers[0].globalToLocal(mousePos);
          var originalZoom = paper.project.layers[0].zoom;
          var newZoom = thisC.changeZoom(paper.project.layers[0].zoom, event.deltaY, paper.project.layers[0].position, viewPos);
          paper.project.layers[0].zoom = newZoom[0];
          // popdiv is the div that contains the popover that contains feature information
          // need to reposition it as the view changes, as it is an overlay, not part of canvas.
          if ($("#popdiv").length) {
            thisC.compensateZoom(newZoom[0]);
          }
          event.preventDefault();
          thisC.zoomRulers(newZoom[0], originalZoom);
          paper.project.layers[0].center = paper.project.layers[0].center.subtract(newZoom[1]);
          paper.project.layers[0].position = paper.project.layers[0].center;
          paper.view.draw();
        });
        // //initialize paper tool on canvas to watch for "click and drag" style events for panning
        var panTool = new paper.Tool();

        panTool.onMouseDown = function () {
          document.body.style.cursor = "move";
          panTool.path = new paper.Point();
          panTool.path.add(paper.project.layers[0].position);
        };

        panTool.onMouseUp = function () {
          document.body.style.cursor = "default";
          paper.project.layers[0].center = paper.project.layers[0].position;
        };

        panTool.onMouseDrag = function (event) {
          thisC.changePan(event.downPoint, event.point, startView);
          event.preventDefault();
          if ($("#popdiv").length) {
            thisC.compensateZoom(paper.project.layers[0].zoom);
          }
          paper.view.draw();

        };

        //initialize paper tool on canvas for box select.
        var boxTool = new paper.Tool();
        boxTool.onMouseDown = function (event) {
          boxTool.drag = false;
          boxTool.box = paper.Path.Rectangle(event.downPoint, event.point);
        };

        boxTool.onMouseDrag = function (event) {
          document.body.style.cursor = "zoom-in";
          boxTool.box.remove();
          boxTool.box = paper.Path.Rectangle(event.downPoint, event.point);
          boxTool.box.strokeWidth = 1;
          boxTool.box.strokeColor = "lightblue";
          boxTool.box.dashArray = [2, 2];
          boxTool.box.fillColor = new paper.Color(0.8, 0.3);
          boxTool.drag = true;
        };

        boxTool.onMouseUp = function () {
          document.body.style.cursor = "default";
          if (boxTool.drag) {
            var viewSize = paper.project.view.size;
            var boxSize = boxTool.box.handleBounds.size;
            var xScale = viewSize.width / boxSize.width;
            var yScale = viewSize.height / boxSize.height;
            var newScale = xScale <= yScale ? xScale : yScale;
            if (newScale < 70) {
              if (newScale > 8) {
                newScale = 8;
              }
              thisC.zoomRulers(newScale, paper.project.layers[0].zoom);
              thisC.changePan(boxTool.box.position, paper.project.layers[0].position, startView);
              paper.project.layers[0].center = paper.project.layers[0].position;
            }
          }
          boxTool.box.remove();
        };

      },

      /**
       * @description Calculate change in zoom level
       *
       * @param {float} current     - The current zoom level.
       * @param {float} delta       - Which direction the mousewheel scrolled.
       * @param {object} center     - Current centerpoint of the canvas.
       * @param {paper.group} mouse - Point of the mouse on the canvas,
       *            allows for zoom centering on mouse point.
       * @param {float} newScale    - new zoom scale
       *
       * @return {array} New zoom level and how far to offset the centerpoint to
       *                track the mouse pointer if scrollwheel used
       *
       */

      changeZoom: function (current, delta, center, mouse, newScale) {
        var zoomLevel = current;
        if (newScale !== undefined) {
          zoomLevel = newScale;
        }

        var factor = 1.05;
        if (!newScale) {
          if (delta < 0) {
            zoomLevel = current / factor;
          }
          if (delta > 0) {
            zoomLevel = current * factor;
          }
          zoomLevel = zoomLevel < 1 ? 1 : zoomLevel < 8 ? zoomLevel : 8;
        }
        var scale = current / zoomLevel;
        var pos = mouse.subtract(center);
        var offset = mouse.subtract(pos.multiply(scale)).subtract(center);
        return [zoomLevel, offset];
      },

      /**
       * @description Move canvas to follow a click and drag event
       *
       * @param {object} downPoint - Where the mousedown event occured.
       * @param {object} point - Where the mouse event is currently located (drag location)
       * @param {object} startView - Original orientation of the canvas.
       */

      changePan: function (downPoint, point, startView) {

        var deltaX = downPoint.x - point.x;
        var deltaY = downPoint.y - point.y;
        // Calculate boundaries so the pan can't go past the limits of the cavas.
        //var xEdge = paper.view.bounds.x;
        //var yEdge = paper.view.bounds.x;

        //var xBound = xEdge + deltaX;
        //var yBound = yEdge + deltaY;

        var layerC = paper.project.layers[0].position;
        //var xLimit = startView.width - paper.view.bounds.width;
        //var yLimit = startView.height - paper.view.bounds.height;
        var delta = new paper.Point(-deltaX, -deltaY);
        paper.project.layers[0].position = paper.project.layers[0].center.add(delta);
        paper.project.layers[1].position.y -= (layerC.y - paper.project.layers[0].position.y);
      },

      /**
       * @description Move popover due to new zoom
       *
       * @param {float} zoom - The current zoom level.
       *
       */

      compensateZoom: function (zoom) {
        var popdiv = $("#popdiv");
        var divData = popdiv.data("pos");
        var bounds = popdiv.data("item").bounds;
        popdiv.show();
        popdiv.css("top", (divData.y + Math.round(bounds.y - divData.y)));
        popdiv.css("left", (divData.x + Math.round(bounds.x - divData.x)));
        popdiv.css("width", divData.width * zoom);
        popdiv.css("height", divData.height * zoom);
        $(".popover").popover("show");
        popdiv.hide();

      },

      /**
       * @description Change ruler zoom level to match current bounds
       *
       * @param {float} newZoom - The new zoom level.
       * @param {float} oldZoom - The current zoom level.
       *
       */

      zoomRulers: function (newZoom, oldZoom) {
        // enable/disable zoom controls
        if (newZoom <= 1) {
          $("#zoom-out-btn").prop("disabled", true);
          $("#zoom-in-btn").prop("disabled", false);
        } else if (8 <= newZoom) {
          $("#zoom-out-btn").prop("disabled", false);
          $("#zoom-in-btn").prop("disabled", true);
        } else {
          $("#zoom-out-btn").prop("disabled", false);
          $("#zoom-in-btn").prop("disabled", false);
        }

        // Zoom ruler and drawing layer, layer[0] is drawing, [1] is ruler
        var backbone = paper.project.layers[0].children.backbone.children.view;
        var minLoc = paper.project.layers[1].children.rulers.minSeq;
        var maxLoc = paper.project.layers[1].children.rulers.maxSeq;
        var rulerLayer = paper.project.layers[1];
        var textHeight = rulerLayer.children.text.children[0].children[0].bounds.height;
        paper.project.layers[0].scale(newZoom / oldZoom);
        paper.project.layers[1].children.rulers.scale(1, newZoom / oldZoom);
        paper.project.layers[1].children.tics.scale(1, newZoom / oldZoom);
        paper.project.layers[1].children.text.scale(1, newZoom / oldZoom);
        for (var text in paper.project.layers[1].children.text.children.rightText.children) {
          paper.project.layers[1].children.text.children.rightText.children[text].scale(1, oldZoom / newZoom);
          paper.project.layers[1].children.text.children.leftText.children[text].scale(1, oldZoom / newZoom);
        }
        paper.view.draw();
        paper.project.activeLayer.zoom = newZoom;
        var ymin = backbone.children[minLoc].bounds.topLeft.y;
        var ymax = backbone.children[maxLoc].bounds.bottomLeft.y;
        rulerLayer.children.rulers.bounds.topLeft.y = ymin;
        rulerLayer.children.rulers.bounds.bottomLeft.y = ymax;
        /*ymove = quarter of height of label text +1 to offset width of
          backbone border*/
        rulerLayer.children.tics.position.y = ymin;
        rulerLayer.children.tics.position.y -= (rulerLayer.children.tics.strokeBounds.topLeft.y - rulerLayer.children.rulers.strokeBounds.topLeft.y) + 1;
        rulerLayer.children.text.position.y = ymin;
        rulerLayer.children.text.position.y -= (rulerLayer.children.text.strokeBounds.topLeft.y - rulerLayer.children.tics.strokeBounds.topLeft.y) + (textHeight / 4) + 1;

      }
    };
  }
);