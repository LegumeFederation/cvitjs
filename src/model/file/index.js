import {parseGff} from './ParseGff';
import {parseIni} from './ParseIni';

export function parseFile(location,format) {
  return fetch(location)
    .then(response =>{
      if(response.status !== 200){
        throw new Error(location+' was not found.');
      } else if(format === 'json') {
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
          return parseGff(responseText);
        case 'json':
          return responseText;
        default:
          throw new Error(format + ' is not a supported file format.');
      }
    })
    .catch(e => console.error(e));
}

