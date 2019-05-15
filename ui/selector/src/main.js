/**
 * @file
 * Main entry point into CViTjs, done this way to allow pre-processing of _viewData before cvit is mounted
 * to the DOM than quickly entering react UI environment, also gives space to add more sources of configuration
 * and _viewData.
 * @author awilkey
 *
 */
import '../css/selector.css';
import '../node_modules/skeleton.css/skeleton.css';
import Select from './genotypeSelector';

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
    let select = new Select();

    /** example loading post-creation data */
    /*

    const postLoadHandler = () => {
      //_cvit.appendData('data/test5/data2.gff');
      document.removeEventListener('baseDataLoaded',postLoadHandler);
    };
    **/
    document.removeEventListener(evtName, loadedHandler);
  };
  document.addEventListener(evtName, loadedHandler);
};

main();
