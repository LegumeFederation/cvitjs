/**
 * @file Adds rulers to the canvas.
 * @author awilkey
 * @module  draw/rulers
 *
 */


define([],
  function () {

    return /** @alias draw/rulers */ {

      /**
       * @description sets up layers to draw  rulers
       *
       * @param {paper.group} backbone
       * @param {object} config
       * @param {object} view
       */

      draw: function (backbone, config, view) {
        // Establish layers and core groups
        var baseLayer = paper.project.activeLayer;
        new paper.Layer();
        var rulerGroup = new paper.Group();
        rulerGroup.name = "rulers";
        rulerGroup.minSeq = backbone.minSeq;
        rulerGroup.maxSeq = backbone.maxSeq;
        var ticGroup = new paper.Group();
        ticGroup.name = "tics";
        var textGroup = new paper.Group();
        textGroup.name = "text";

        var rulerConfig = {};
        rulerConfig.min = backbone.min;
        rulerConfig.max = backbone.max;
        rulerConfig.fontSize = parseInt(config.general.ruler_font_size);
        rulerConfig.chromFont = parseInt(config.general.chrom_font_size);
        rulerConfig.yOffset = view.yOffset;
        rulerConfig.xOffset = parseInt(config.general.image_padding);
        rulerConfig.scale = view.yScale;
        rulerConfig.color = config.general.ruler_color;
        rulerConfig.width = parseInt(config.general.tick_line_width);
        rulerConfig.interval = parseInt(config.general.tick_interval);
        rulerConfig.division = parseInt(config.general.minor_tick_divisions);

        console.log("CViTjs: Drawing rulers");
        try {
          //Draw right Ruler
          this.drawRuler(rulerConfig, rulerGroup, ticGroup, textGroup, "right", 1);
          rulerConfig.xOffset = paper.view.size.width - rulerConfig.xOffset;
          textGroup.maxOff = textGroup.w;
          this.drawRuler(rulerConfig, rulerGroup, ticGroup, textGroup, "left", 0);
          //Draw left Ruler

        } catch (e) {
          console.log(e);
        }

        baseLayer.activate();
      },

      /**
       * @description Draws the ruler
       *
       * @param rc
       * @param rulerGroup
       * @param ticGroup
       * @param textGroup
       * @param side
       * @param dir
       *
       */
      drawRuler: function (rc, rulerGroup, ticGroup, textGroup, side, dir) {
        var label = new paper.PointText(0, 0);
        label.content = rc.max;
        label.fontSize = rc.fontSize + "px";
        rc.labelWidth = label.bounds.width + rc.fontSize;
        label.remove();
        var min = rc.min;
        var max = rc.max;
        var rulerFontSize = rc.fontSize;
        var yPos = rc.yOffset + rc.chromFont;
        var xPos = dir === 1 ? rc.xOffset : rc.xOffset + rc.width + rc.labelWidth;
        var startOffset = rc.scale;
        var point = new paper.Point(xPos, yPos);
        var size = new paper.Point(0, (max + (0 - min)) * rc.scale);
        var r = new paper.Path.Line(point, point.add(size));
        r.name = "ruler" + side[0].toUpperCase() + side.slice(1);
        r.strokeColor = rc.color;
        r.strokeWidth = 2;
        var rTicGroup = new paper.Group();
        rTicGroup.name = side + "Ticks";
        var rTextGroup = new paper.Group();
        rTextGroup.name = side + "Text";

        // +1/-1 to offset width of ruler backbone to prevent gaps
        var ticW = rc.width + 1;
        var ticD = dir === 1 ? xPos - 1 : rc.xOffset + rc.labelWidth;
        var ticO = new paper.Point(ticW, 0);
        var ticP = new paper.Point(ticD, yPos);
        var tic = new paper.Path.Line(ticP, ticP.add(ticO));
        tic.strokeColor = rc.color;
        tic.strokeWidth = 2;
        rTicGroup.addChild(tic);
        var labelX = dir === 1 ? ticP.x + ticO.x + rc.fontSize : ticD - rc.fontSize;
        label = new paper.PointText(labelX, ticP.y);
        label.content = min;
        label.fontSize = rulerFontSize + "px";
        if (dir !== 1) {
          label.position.x -= label.bounds.width;
        }
        rTextGroup.addChild(label);
        r.position.y = label.position.y + 100;
        var ticInt = rc.interval;
        var intDivision = Math.round(ticInt / rc.division);
        for (var i = intDivision; i < max; i = i + intDivision) {
          var mTicP = new paper.Point(ticD, yPos + (i * rc.scale));
          var mTic = new paper.Path.Line(mTicP, mTicP.add(ticO));
          mTic.strokeColor = rc.color;
          mTic.strokeWidth = 2;
          if (i % ticInt === 0) {
            label = new paper.PointText(labelX, mTicP.y);
            label.content = i;
            label.fontSize = rulerFontSize + "px";
            textGroup.w = label.bounds.bottomRight.x;
            if (dir !== 1) {
              label.position.x -= label.bounds.width;
            }
            rTextGroup.addChild(label);
          }
          rTicGroup.addChild(mTic);
        }
        textGroup.addChild(rTextGroup);
        ticGroup.addChild(rTicGroup);
        rulerGroup.addChild(r);
        rc.xOffset = dir === 1 ? rc.xOffset + rc.width + rc.labelWidth : r.x;

      }

    };
  }
);