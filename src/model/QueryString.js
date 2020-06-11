/**
 * @file
 * Singleton class for manipulating cvit through the query string.
 */

import qs from 'qs';

class QueryString {
  constructor(){
    this._data = [qs.parse(location.search,{ ignoreQueryPrefix: true, encode:false, strictNullHandling:true })] || [{}];
  }

  get data(){
    return this._data[0];
  }

  get tag(){
    return this._data[0].data || 'general';
  }

  get config(){
   return this._data[0].config || null;
  }

  get gff(){
    let gff = this._data[0].gff || null;
    if(typeof gff === 'string') gff = [gff];
    return gff;
  }
}

const instance = new QueryString();
Object.freeze(instance);

export default instance;
