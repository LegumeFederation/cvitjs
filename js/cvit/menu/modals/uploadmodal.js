/**
 * @file View of the upload modal window.
 * @author awilkey
 * @module menu/modals/uploadModal
 *
 */
define(["jquery", "cvit/file/file", "draw/glyph/glyph", "glyph/utilities",
    "bootstrap"
  ],
  function ($, file, glyph, utility) {

    return /** @alias module:menu/modals/uploadModal */ {
      /**
       * Draws the glyph of a given feature.
       *
       * @param {object} context - context from parent menu.
       */
      populate: function (context) {
        var uploadModal = $("#upload-modal");
        uploadModal.find(".modal-title").text("Upload Your Data");
        // Need to test if local file upload is supported by browser.
        // Will essentially only return false if using IE<8
        if (window.File && window.FileReader && window.FileList && window.Blob) {
          var fileTypes = ["gff", "gff3"];
          uploadModal.find(".modal-body").html("<div><input type=\"file\" id=\"files\" name=\"files[]\" multiple /><output id=\"list\"></output></div>");
          $("#files").on("change", function (event) {
            var files = event.target.files;
            var output = [];
            for (var key in files) {
              var f = files[key];
              var extension = f.name.split(".").pop().toLowerCase();
              if (fileTypes.indexOf(extension) < 0) {
                continue;
              }

              output.push("<li><strong>", escape(f.name), "</strong> - ",
                f.size, " bytes, last modified: ",
                f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : "n/a",
                "</li>");
              var fileReader = new FileReader();
              fileReader.name = files[key].name;
              // TODO: Support customizing glyph options.
              $(fileReader).on("load", function (event) {
                console.log(event);
                var fileContents = event.target;
                var newFeatures = file.parse.gff(event.target.result);
                for (var fkey in newFeatures) {
                  console.log(newFeatures);
                  context.view.viewName = this.name.slice(0, this.name.lastIndexOf(".")) + " " + fkey;
                  //upmod.checkBack(context.group,newFeatures[ fkey ].features,this.name);
                  glyph.drawGlyph(newFeatures[fkey], "range:range", context.conf, context.view, context.group).then(function () {
                    paper.view.draw();
                  });
                }
              });
              context.view.viewName = f.name.toLowerCase();
              fileReader.readAsText(f);
            }

            $("#list").html("<ul>" + output.join("") + "</ul>");

          });

        } else {
          uploadModal.find(".modal-body").text("Uploading a local file is not currently supported in this browser. See help for supported browser list.");
        }
      },

      /**
       * @description
       * Compares targets of uploaded gff with the backbone, alerting user to
       * name mismatch.
       *
       * @param {object} backbone - backbone of the cvit view.
       * @param {object} features - feature to check provided seqNames against backbone
       * @param {string} filename - name of uploaded file
       *
       */

      checkBack: function (backbone, features, filename) {
        for (var i = 0; i < features.length; i++) {
          var feature = features[i];
          console.log(feature.seqName);
          console.log(backbone._namedChildren[feature.seqName]);
          // TODO(?): Add alert window allowing manual renaming
          if (backbone._namedChildren[feature.seqName] === undefined) {
            $("#upload-modal").find(".modal-body").append("<div id=\"upload-warning\" class=\"alert alert-warning\">" +
              "<strong>Warning!</strong> One or more sequence names in " + filename + " do not match backbone and may not be displayed.</br> Please check your names.</div>");
            break;
          }
        }
      }

    };
  }
);