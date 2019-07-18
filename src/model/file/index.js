import {parseGff} from './ParseGff';
import {parseIni} from './ParseIni';

export function parseFile(location,format,fetchParam, strArray=[]) {
  if(typeof location === 'object'){
    return location;
  }

  return fetch(location,fetchParam)
    .then(response =>{
      const ct = response.headers.get("content-type");
      if(response.status !== 200){
         throw new Error(`Problem loading ${location}: status ${response.status}`)
      } else if(ct === 'application/json') {
        format = 'json';
        return response.json();
      } else {
        return response.text();
      }
    }) //supported file types ini/gff are plaintext blobs
    .then(responseText => {
      switch(format) {
        case 'ini':
          return parseIni(responseText);
        case 'gff':
          return parseGff(responseText,strArray);
        case 'json':
          return responseText;
        default:
          throw new Error(format + ' is not a supported file format.');
      }
    })
    .catch(e => console.error(e));
}

