/**
 * @file Helper functions for drawing glyphs.
 * @author awilkey
 * @module draw/glyph/utilities
 *
 */


define(["jquery", "bootstrap"],
  function ($) {

    return /** @alias module:draw/glyph/utilities */ {

      /**
       * @description Simple log test to test if file loaded
       *
       */

      test: function () {
        window.alert("Utility Test");
      },

      /**
       * @description Format color string to color
       *
       * @param {string|number} color - color as a string, gray% or hex triplet
       *
       * @return {paper.color} color formatted for paperjs
       *
       */

      formatColor: function (color) { //TODO: Think about supporting transparency.
        var grey = color.match(/gr[ea]y(.*)/);
        if (grey) {
          color = "grey";
          if (grey[1].length !== 0) {
            color = parseFloat("." + grey[1]);
          }
        }
        if (color[0] === "#") {
          return color;
        } else {
          return new paper.Color(color);
        }
      },
      /**
       * @description Attach popover to feature
       *
       * @param {object} r - bounding rectangle of popover
       * @param {object} feature - canvas feature to attach popover to.
       *
       */

      attachPopover: function (r, feature) {
        var popdiv = $("#popdiv");
        $("popover").remove();
        popdiv.remove();
        var clickDiv = $("<div id=\"popdiv\" style=\"position:absolute;\">&nbsp;</div>");
        $(clickDiv).data("pos", r.bounds);
        $(clickDiv).data("item", r);
        $(clickDiv).css("top", (r.bounds.y - paper.view.center._owner.y) * paper.view.zoom);
        $(clickDiv).css("left", (r.bounds.x - paper.view.center._owner.x) * paper.view.zoom);
        $(clickDiv).css("height", r.bounds.height * paper.view.zoom);
        $(clickDiv).css("width", r.bounds.width * paper.view.zoom);
        $(clickDiv).css("color", "blue");
        $("#overlay").append(clickDiv);
        // This is so large because anything *not* included in initial creation of popover tends to get left
        // behind when moving the view around otherwise. A well documented quirk of bootstrap

        $(clickDiv).popover({
          "html": "true",
          "container": "#cvit-div",
          "title": "About this feature: <button type=\"button\" class=\"close\" ><span class=\"close-span\">&times;</span></button>",
          "id": "pop",
          "placement": "auto right",
          "content": "<div class=\"container\"><h4>Feature Information</h4><table class=\"table table-bordered\" style=\"width:auto;\">" +
          "<thead><tr><th>Name</th><th>" + feature.attribute.id + "</th></tr></thead>" +
          "<tbody><tr><td>Start</td><td>" + feature.start + "</td></tr>" +
          "<tr><td>End</td><td>" + feature.end + "</td></tr>" +
          "<tr><td>Strand</td><td>" + feature.strand + "</td></tr>" +
          "<tr><td>Score</td><td>" + feature.score + "</td></tr>" +
          "<tr><td>Type</td><td>" + feature.type + "</td></tr>" +
          "</tbody></table></div>",
          "toggle": "manual"
        }).popover("show").on("show.bs.popover", function () {
          var close = $("<button type=\"button\" class=\"close\"><span class=\"close-span\">&times;</span></button>");
          $(".popover-title").append(close);
          $(close).click(function () {
            $(".popover").remove();
          });
        });

        $(".popover").on("click", function () {
          $(this).popover("hide");
        });
        popdiv.hide();
        $(".close").click(function () {
          $(".popover").remove();
        });
      },

      /**
       * @description Collision detection. pGap can be negative to move left, positive to move right
       *
       * @param {object} feature - glyph object to test for collision with other objects on the canvas.
       * @param {paper.group} featureGroup - group containing feature
       * @param {object} view - view feature is being placed in
       *
       * */

      testCollision: function (feature, featureGroup, view) {
        var pGap = view.pileup;
        // Set the expected number of hits for the given feature to avoid infinte loop
        var minGroup = typeof(feature.children) !== "undefined" ? feature.children.length : 1;
        var getItem = function () {
          return paper.project.getItems({
            overlapping: feature.strokeBounds,
            class: paper.Path
          });
        };
        var testItem = getItem();
        var fPName = featureGroup.parent.name;
        var baseGroup = featureGroup.parent.parent;
        var layer = paper.project.layers[0];
        var length = baseGroup.children.length;
        var offset = feature.strokeBounds.width + pGap;
        var groupTest = function (i) {
          var group = baseGroup.children[i];
          group.position.x += 2 * offset;
          layer.children[group.name + "Label"].position.x += 2 * offset;
          view.xloc[group.name] += 2 * offset;
        };
        while (testItem.length > minGroup && testItem[0].parent.parent) {
          var testPName = testItem[0].parent.parent.name;
          if (fPName !== testPName) {

            var index = baseGroup.children.indexOf(featureGroup.parent);
            if (pGap > -1) {
              for (var i = index + 1; i < length; i++) {
                groupTest(i);
              }
            } else {
              for (var j = index - 1; j > -1; j--) {
                groupTest(j);
              }

            }
          } else {
            feature.translate(new paper.Point(feature.strokeBounds.width + pGap, 0));
          }
          testItem = getItem();
        }

      },

      /**
       * @description Adds labels to current glyph
       *
       * @param {object} feature - glyph object that you are adding label to
       * @param {object} view - view settings for current canvas
       * @param {object} backBone - backbone object that is the target for the current glyph
       *
       */
      // TODO: Make better, currently is a mess with overlapping labels

      generateLabel: function (feature, view, backBone) {
        var labelOffset = parseInt(view.config.label_offset);
        var label = new paper.PointText(feature.position);
        label.content = feature.info.name !== undefined ? feature.info.name.trim() : "";
        var fill = typeof(view.config.label_color) !== undefined ? view.config.label_color : "black";
        label.fillColor = this.formatColor(fill);
        label.fontSize = parseInt(view.config.font_size);
        label.position.y = feature.position.y;
        if (1 / labelOffset > 0) {
          label.position.x = backBone.strokeBounds.right + labelOffset + (label.strokeBounds.width / 2);
        } else {
          label.position.x = backBone.strokeBounds.left + labelOffset - (label.strokeBounds.width / 2);
        }
        return label;
      },

      /**
       * @description Generate a toggle button to hide/show a given group in the view.
       *
       */
      // TODO: TEST and Fix

      generateViewControl: function (groupName, group) {
        var gName = groupName.replace(/\s+/g, "-").toLowerCase();
        var viewTitle = $("<span>" + groupName + "</span>\"");
        var openButton = $("<button type=\"button\" class=\"btn btn-success view-toggle\" style=\"float:right; margin-right:10px;\">Show</button>").on("click", function () {
          $("#" + gName + "-options .btn-success").toggleClass("btn-danger");
          group.visible = !group.visible;
          paper.view.draw();
        });

        var viewLi = $("<li></li>");
        var viewDiv = $("<div id=\"" + gName + "-options\"></div>");
        viewDiv.append(viewTitle);
        viewDiv.append(openButton);
        viewLi.append(viewDiv);
        viewLi.append("<hr />");
        $("#view-list").append(viewLi);
      }
    };
  }
);