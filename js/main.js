/**
 * @file
 * Main entry point into CViTjs so it may be used nicely in conjunction with require.js
 * use in conjunction with
 * <pre><code>&lt;script data-main=&quot;js/lib/require/require-config&quot; src=&quot;js/lib/require/require.js&quot;&gt;&lt;/script&gt;</code></pre>
 * in your html , or use as the target of deps: ["../main"])in require-config.js
 * @author awilkey
 *
 */

require(["jquery", "cvit/cvit", "cvit/file/file"], function ($, cvit, file) {
    console.log("CViTjs: Starting CViTJS");
    // cvit.init(dataset) to have the provided dataset
    //override defaults or URI string
    var passedData = document.getElementById("cvit-div");
    var dataset = passedData.dataset.backbone ? passedData.dataset.backbone : undefined;

    var gff = passedData.dataset.gff ? file.getFile(passedData.dataset.gff) : undefined;

    $.when(gff).then(function (additionalData) {
        // do any additional data parsing here to make the additional gff
        // data acceptable to match with your backbone.

        // Initialize the cvit view
        cvit.init(dataset, additionalData);
      },
      function (err) {
        console.log(err);
        document.getElementById("cvit-div").innerHTML = err.message;
      });
  },
  function (err) {
    console.log(err);
    document.getElementById("cvit-div").innerHTML = err.message;
  }
);
