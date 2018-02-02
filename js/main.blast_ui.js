/**
 * @file
 * A module that serves as a main entry point into cvit.js so it may
 * be used nicely in conjunction with require.js, with expectation of data
 * being passed from Drupal via Drupal.settings, in conjunction with
 * <pre><code>
 *  drupal_add_js($base.'require/require.js',array('group'=>'JS_LIBRARY','type'=>'file'));
 *  drupal_add_js($base.'require/blast_ui-config.js',array('group'=>'JS_THEME'));
 * </code></pre>
 * with $base being the path to cvitjs/js/lib as it is accessible to Drupal
 * (or require/require-config.js, with deps: ["../main.blast_ui"]).
 * @author awilkey
 *
 */
// TODO: Use require text module to start by reading in configuration text

require(["cvit/cvit", "cvit/file/file", "draw/glyph/glyph"], function (cvit, file, glyph) {
  console.log("CViTjs: Starting CViTJS");
  // cvit.init(dataset) to have the provided dataset
  //override defaults or URI string
  // cvit.init returns the backbone group of the async
  // drawing operations, allowing you to manually draw
  // files after completion
  console.log(Drupal.settings.blast_ui);

  cvit.init(Drupal.settings.blast_ui.dataset).then(function (group) {

    file.getFile(Drupal.settings.blast_ui.gff).then(
      function (result) {
        data = result;
        // the following code compares expected chromosome names to the
        // name provided by the BLAST gff, and strips off extra identifiers
        // makes the assumption that the BLAST provided information is longer
        // then the chromosome names used for the backbone
        var labLen = cvit.data.chromosome.maxSeq.split(".").length;
        var blastData = data[cvit.conf.blast.dataLoc];
        blastData.features.forEach(function (element) {
          var rework = element.seqName.split(".");
          var len = rework.length;
          element.seqName = rework.slice(len - labLen).join(".");
        });
        paper.view.draw();
        paper.project.layers[0].children[0].remove();
        glyph.drawGlyph(blastData, cvit.conf, cvit.viewInfo, group).then(
          function () {
            paper.view.draw();
          },
          function (err) {
            console.error("CViTjs: Unable to draw blast hits.", err);
          });
      },
      function (err) {
        console.error("CViTjs: Unable to load blast gff", err);
      });
  });
});
