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
    let ds = window.Drupal.settings;
    let dataset = document.getElementById('cvit-app').dataset;
    let dTag = ds.blast_ui.dataset ? ds.blast_ui.dataset : null;
    let dGff = dataset.gff ? JSON.parse(dataset.gff) : null;
    let dConf = dataset.config ? dataset.config : null;
    let cRoot = ds.blast_ui.cvitroot ? ds.blast_ui.cvitroot : '';
    let configData = {
      viewConf: dConf,
      viewTag : dTag,
      gff: dGff,
      cvitRoot : cRoot
    };

    let _cvit = new CVIT(configData);
    if(dataset.registerGlobal) window.cvit = _cvit;

    const postLoadHandler = () => {
      console.log('CViTjs:','Data successfully loaded using drupal main');
      _cvit.appendData(window.Drupal.settings.blast_ui.gff);
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
