/**
 * @file
 * Main entry point into CViTjs, done this way to allow pre-processing of _viewData before cvit is mounted
 * to the DOM than quickly entering react UI environment, also gives space to add more sources of configuration
 * and _viewData.
 * @author awilkey
 *
 */
import '../node_modules/skeleton.css/skeleton.css';

import CVIT from './cvit';

const main = () => {
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    // support commonjs loading, if it exists.
    module.exports = CVIT;
  }
  else {
    // otherwise put cmap constructor in window global
    window.cvit = CVIT;
  }
  //emit event when cvit _viewData is properly loaded
  const evtName = 'DOMContentLoaded';
  // add alternative config/gff locations priority order: HTML _viewData attribute > querystring > cvit.conf
  const loadedHandler = () => {
    let dataset = document.getElementById('cvit-app').dataset;
    let dConf = dataset.conf ? JSON.parse(dataset.config) : null;
    let dGff = dataset.gff ? JSON.parse(dataset.gff) : null;
    let configData = {
      viewConf : dConf,
      gff : dGff
    };
    let _cvit = new CVIT(configData);
    document.removeEventListener(evtName, loadedHandler);
  };
  document.addEventListener(evtName, loadedHandler);
};

main();
//console.log("CViTjs: Starting CViTJS");
// cvit.init(dataset) to have the provided dataset
//override defaults or URI string
//var passedData = document.getElementById("cvit-div");
//var dataset = passedData.dataset.backbone ? passedData.dataset.backbone : undefined;
//var gff = passedData.dataset.gff ? file.getFile(passedData.dataset.gff) : undefined;
//
//$.when(gff).then(function (additionalData) {
// // do any additional _viewData parsing here to make the additional gff
// // _viewData acceptable to match with your backbone.
//
// // Initialize the cvit view
//  cvit.init(dataset, additionalData);
//},
//  function (err) {
//  console.log(err);
//  document.getElementById("cvit-div").innerHTML = err.message;
//});
//},
//function (err) {
//  console.log(err);
//  document.getElementById("cvit-div").innerHTML = err.message;
//}
//);
