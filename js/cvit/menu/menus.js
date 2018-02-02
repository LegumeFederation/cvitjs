/**
 * @file Add controls for all the menus with modals (export, add data, help)
 * @author awilkey
 * @module menu
 *
 */

define(["jquery", "tools/tools", "tools/zoom/zoom", "cvit/menu/modals/exportmodal",
    "cvit/menu/modals/uploadmodal", "cvit/menu/modals/helpmodal", "bootstrap"
  ],
  function ($, tools, zoom, exportMod, uploadMod, helpMod) {
    return /** @alias module:menu */ {
      /**
       * @description Create menu button stack
       *
       * @param {object} conf - Configuration file
       * @param {object} view - Canvas View
       * @param {object} group - Backbone group
       *
       */

       /* TODO: Make configurable from conf file
        */

      build: function (conf, view, group) {
        var thisC = this;
        thisC.setFeatures(conf, view, group);
        //thisC.conf = conf;
        //thisC.view = view;
        //thisC.group = group;
        thisC.addZoomControl();
        thisC.addOptionsMenu();
        thisC.addViewMenu();
      },

      /**
       * @description
       * Add a button ovelay to cvit camvas for the zoom controls (in out reset)
       * call the function from zoom here in case of later additions to menu.
       *
       */

      addZoomControl: function () {
        zoom.addZoomControl();
        tools.addToolsControl();
      },

      /**
       * @description
       * Add a menu for Cvitjs. This menu appears as a "hamburger" icon and
       * hosts the "Export to image", "View your data" and "Help" menus.
       * Each menu pops up as its own modal dialog from accessing the
       * corresponding menu option.
       *
       */

      addOptionsMenu: function () {
        var thisc = this;
        //var leftedge = paper.view.bounds.width;
        var menuButton = $("<button type=\"button\" id=\"menubutton\" class=\"btn btn-default\" data-toggle=\"collapse\" data-target=\"#menu-group\"></button>");
        $(menuButton).append("<span class=\"glyphicon glyphicon-menu-hamburger\" aria-label=\"menu\" aria-hidden=\"true\"></span>");
        $(menuButton).css("position", "absolute");

        // place options menu "hamburger" depending on if there is a title div
        var rightOffset = paper.view.bounds.width;
        var titleDiv = $("#title-div");
        if (titleDiv.length) {
          titleDiv.css("position", "relative");
          titleDiv.append(menuButton);
          $(menuButton).css("top", "5%");
        } else {
          $("#overlay").append(menuButton);
          $(menuButton).css("top", "10px");
          rightOffset -= 10;
        }
        rightOffset -= parseInt(menuButton.css("width"));
        $(menuButton).css("left", rightOffset + "px");

        var mg = $("<div class=\"collapse\" id=\"menu-group\" >");
        var menuGroup = $("<div class=\"btn-group btn-group-justified\">");
        $(menuGroup).css("width", paper.view.bounds.width);

        var mExport = $("<div class=\"btn-group\"><button type=\"button\" class=\"btn btn-default\"" +
          " id=\"btn-export\" data-toggle=\"modal\" data-target = \"#export-modal\">" +
          "<span class=\"glyphicon glyphicon-picture\" aria-hidden=\"true\"/> Export View to Image</button></div>"
        );
        var mUpload = $("<div class=\"btn-group\"><button type=\"button\" class=\"btn btn-default\"" +
          " id=\"btn-upload\" data-toggle=\"modal\" data-target=\"#upload-modal\">" +
          "<span class=\"glyphicon glyphicon-open\" aria-hidden=\"true\"/>Add My Data</button></div>"
        );
        var mHelp = $("<div class=\"btn-group\"><button type=\"button\" class=\"btn btn-default\"" +
          " id=\"btn-help\" data-toggle=\"modal\" data-target=\"#help-modal\">? Help</button></div>"
        );

        $(mExport).on("click", function () {
          var exportModal = thisc.makeModal("export-modal");
          $("#cvit-div").append(exportModal);
          exportMod.populate();
        });

        $(mUpload).on("click", function () {
          var uploadModal = thisc.makeModal("upload-modal");
          $("#cvit-div").append(uploadModal);
          uploadMod.populate(thisc);
        });

        $(mHelp).on("click", function () {
          var helpModal = thisc.makeModal("help-modal");
          $("#cvit-div").append(helpModal);
          helpMod.populate();
        });

        $(menuGroup).append(mExport);
        $(menuGroup).append(mUpload);
        $(menuGroup).append(mHelp);

        $(mg).append(menuGroup);
        $("#cvit-div").prepend(mg);
      },

      /**
       * @description
       * Adds a menu to allow user to toggle off and on the display of feature
       * groups. By default, every group starts as displayed.
       *
       */

      addViewMenu: function () {
        var viewGroup = $("<div class=\"btn-group btn-group-justified\" role=\"group\">");
        var menuButton = $("<div class=\"btn-group\">" +
          "<button type=\"button\" id=\"viewButton\" class=\"btn btn-default\"" +
          " data-toggle=\"collapse\" data-target=\"#view-group\">" +
          "<span id=\"bob\" class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"/>" +
          " View Options <span class=\"glyphicon glyphicon-menu-down\" aria-hidden=\"true\"/> </button></div>");

        $(menuButton).on("click", function () {
          var gmd = $(".glyphicon-menu-down");
          if (gmd.length) {
            gmd.toggleClass("glyphicon-menu-down glyphicon-menu-up");
          } else {
            $(".glyphicon-menu-up").toggleClass("glyphicon-menu-down glyphicon-menu-up");
          }
        });

        $(viewGroup).css("width", paper.view.bounds.width);
        $(viewGroup).append(menuButton);

        var vg = $("<div class=\"collapse\" id=\"view-group\" ><div class=\"scrollable-menu\" role=\"menu\" style=\"height:auto; max-height:216px; overflow-y:scroll;\">" +
          "<hr /><ul id=\"view-list\" style=\"list-style: none;\"></ul></div></div>");
        $(vg).css("width", paper.view.bounds.width);

        $("#cvit-div").append(viewGroup).append(vg);
      },

      //** Generic modal window, to be decorated later */
      makeModal: function (id) {
        return $("<div id=\"" + id + "\" class=\"modal fade\" role=\"dialog\"><div class=\"modal-dialog menu-modal\">" +
          "<div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\"" +
          " data-dismiss=\"modal\">&times;</button><h4 class=\"modal-title\"></h4></div>" +
          "<div class=\"modal-body\"></div><div class=\"modal-footer\"><button type=\"button\"" +
          " class=\"btn btn-default\" data-dismiss=\"modal\">Close</button></div></div></div></div>"
        );

      },

      /**
       * @description
       * Set the menu's group/configuration/view features
       *
       * @param conf
       * @param view
       * @param group
       *
       */

      setFeatures: function (conf, view, group) {
        this.conf = conf;
        this.view = view;
        this.group = group;
      }
    };
  }
);