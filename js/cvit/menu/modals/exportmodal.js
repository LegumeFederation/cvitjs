/**
 * @file View of the Export modal window.
 * @author awilkey
 * @module menu/modals/exportModal
 *
 */

define(["jquery"],
  function ($) {

    return /** @alias module:menu/modals/exportModal */ {
      /**
       * @description
       * Populate the Export Modal Window
       *
       */
      populate: function () {
        var exportModal = $("#export-modal");
        exportModal.find(".modal-title").text("Export View to Image");
        exportModal.find(".modal-body").html("<p class=\"lead\">Save your current view as an image.</p>" +
          "<h4>Export As</h4><div class=\"container modal-container\"><div class=\"row\">" +
          "<form role=\"form\" class=\"form-inline\"><div class=\"form-group\">" +
          "<label for=\"format-select\" style=\"padding-right:1em;\">Select format:</label>" +
          "<select class=\"form-control\" id=\"format-select\"><option>png</option>" +
          "<option>svg</option></select></div><div class=\"btn-group\" style=\"padding-left:1em;\">" +
          "<button type=\"button\" class=\"btn btn-primary\" id=\"export-button\">Export</button></div></form></div></div>"
        );
        exportModal.find(".form-control").css("width", "auto");

        $("#export-button").on("click", function () {
          var dl = document.createElement("a");
          // Paper logic to export as svg
          var formatSelect = $("#format-select");
          if (formatSelect.val() === "svg") {
            dl.setAttribute("href", "data:image/svg+xml;utf8," + encodeURIComponent(paper.project.exportSVG({
              asString: true
            })));
            dl.setAttribute("download", "cvit.svg");
            $(document.body).append(dl);
            dl.click();
            $(dl).remove();
          }
          // HTML5 logic to export as png
          if (formatSelect.val() === "png") {
            var image = $("#cvit-canvas")[0].toDataURL("image/png");
            dl.setAttribute("href", image);
            dl.setAttribute("download", "cvit.png");
            $(document.body).append(dl);
            dl.click();
            $(dl).remove();
          }
        });
      }
    };
  }
);