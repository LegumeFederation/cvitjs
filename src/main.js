/**
 * @file
 * Main entry point into CViTjs, done this way to allow pre-processing of _viewData before cvit is mounted
 * to the DOM than quickly entering react UI environment, also gives space to add more sources of configuration
 * and _viewData.
 * @author awilkey
 *
 */
import '../node_modules/skeleton.css/skeleton.css';
import '../css/cvit.css';

import CVIT from './cvit';

const main = () => {
  //if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  //  // support commonjs loading, if it exists.
  //  module.exports = CVIT;
  //}  else {
  //  // otherwise put cmap constructor in window global
  //  window.cvit = CVIT;
  //}
  //emit event when cvit _viewData is properly loaded
  const evtName = 'DOMContentLoaded';
  // add alternative config/gff locations priority order: HTML _viewData attribute > querystring > cvit.conf
  const loadedHandler = () => {
    let dataset = document.getElementById('cvit-app').dataset;
    let dConf = dataset.config ? dataset.config : null;
    let dTag = dataset.tag ? dataset.tag : null;
    let dGff = dataset.gff ? dataset.gff : null;
    if(dGff && dGff[0] === "["){ dGff = JSON.parse(dGff); }
    let croot = dataset.cvitroot ? dataset.cvitroot : '';
    let register = dataset.register ? dataset.register : true;
    let configData = {
      viewConf: dConf,
      viewTag : dTag,
      gff: dGff,
      cvitRoot : croot
    };
    let _cvit = new CVIT(configData);
    if (register) window.cvit = _cvit;

    const postLoadHandler = () => {
      console.log('CViTjs:','Data successfully loaded');
      document.removeEventListener('baseDataLoaded',postLoadHandler);
    };

    /** example loading post-creation data */
    /*

    const postLoadHandler = () => {
      //_cvit.appendData('data/test5/data2.gff');
      document.removeEventListener('baseDataLoaded',postLoadHandler);
    };
    **/
    document.addEventListener('baseDataLoaded', postLoadHandler);

    document.removeEventListener(evtName, loadedHandler);
  };
  document.addEventListener(evtName, loadedHandler);
};

main();
