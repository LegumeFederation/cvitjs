/**
 * @file View of the help modal.
 * @author awilkey
 * @module menu/modals/helpModal
 *
 */

define(["jquery", "hopscotch"],
  function ($, hopscotch) {

    return /** @alias module:menu/modals/helpModal */ {

      /**
       * @description
       * Populate the help Modal Window
       *
       */

      populate: function () {
        var btnMod = this;
        var helpModal = $("#help-modal");
        helpModal.find(".modal-title").text("About CViTjs");
        helpModal.find(".modal-body").html("<p class=\"lead\">Information and tour.</p>" +
          "<h4>About</h4><div class=\"container modal-container\"><div>" +
          "<strong>CViTjs</strong> - Chromosome Viewing Tool." +
          "</br>Enabling quick visualizations of features on " +
          "linkage groups, pseudochromosomes or cytogenic maps. Intended for whole-genome views of data." +
          "</br> Development supported by the USDA-ARS, Corn Insects and Crop Genomics Research Unit.</div></div>" +
          "<h4>Tour</h4><div class=\"container modal-container\"><div>" +
          "<button type=\"button\" id=\"tour-btn\" class=\"btn btn-info btn-block\" data-dismiss=\"modal\"> Start Tour of CViTjs Features!</button></div></div>" +
          "<h4>Additional Help</h4><div class=\"container modal-container\"><div>" +
          "Additional help and source may be found <a href=\"https://github.com/awilkey/cvitjs\">here</a></div> </div>"
        );
        $("#tour-btn").on("click", function () {
          btnMod.beginTour();
        });
        $(".form-control").css("width", "auto");
      },

      /**
       * @description
       * Tour of CViTjs Functionality uses linkedin-hopscotch
       * for ease of configuration
       *
       */

      beginTour: function () {

        var tour = {
          id: "cvit-hopscotch",
          steps: [{
            title: "Welcome",
            content: "This is a short tour of CViTjs.",
            target: "cvit-canvas",
            placement: "bottom",
            xOffset: "center"
          },
            {
              title: "The CViT Canvas",
              content: "The canvas is where features are drawn on backbones. A Feature may have a detail menu, accessed by clicking on it.",
              target: "cvit-canvas",
              placement: "bottom",
              xOffset: "center"
            },
            {
              title: "Zoom Controls",
              content: "The mouse may be moved to change the view. Click and drag to pan, and use the wheel to zoom. In addition, the +/- Buttons will also change the zoom. The middle reset button will restore the view to the starting position.",
              target: "zoom-ctrl",
              placement: "right",
              onNext: function () {
                var gmd = $(".glyphicon-menu-down");
                if (gmd.length) {
                  gmd.toggleClass("glyphicon-menu-down glyphicon-menu-up");
                  $("#view-group").collapse("show");
                }

              }
            },
            {
              title: "Feature Controls",
              content: "Here you can change which features are displayed on the backbones. Show buttons toggle feature groups on and off.",
              target: "viewButton",
              placement: "bottom",
              xOffset: "center"
            },
            {
              title: "Export",
              content: "CViTjs can export the current view to either png or svg format.",
              target: "btn-export",
              placement: "bottom",
              xOffset: "center"
            },
            {
              title: "Add Data",
              content: "Display your own gff3 files against the current set of backbones.",
              target: "btn-upload",
              placement: "bottom",
              xOffset: "center"
            },
            {
              title: "Help",
              content: "Revisit the tour at any time. In addition, Help provides links to the more in-depth CViT Guide",
              target: "btn-help",
              placement: "bottom",
              xOffset: "center"
            },
            {
              title: "Thank You",
              content: "This concludes the tour. If during your use of CViT you encounter any bugs, please report them to the github repository.",
              target: "cvit-canvas",
              placement: "bottom",
              xOffset: "center"
            }
          ]
        };
        hopscotch.configure({
          showPrevButton: true
        });
        hopscotch.startTour(tour);
      }
    };
  }
);