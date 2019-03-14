export function parseIni(text){
  let parsed = {};
  let currentConfigKey = '';
  let confItem = {};
  let conf = text.split('\n');
  conf.forEach((element) => {
    if (element.match(/^[^#;]/)) { //filter out comment lines # or ;
      let match = element.match(/\[(.*)]/); //catch arrays/new config section
      if (match !== null) {
        //distinguish between [Configheader] key or something = [array]
        if(element.match(/=/)){ //something = array
          confItem = element.split('=');
          confItem[1]= confItem[1].trim().replace(/[[\]]/g, '');
          let confArray = confItem[1].split(',');
          confArray.forEach(item => {
            if (item.trim() !== '') {
              if(parsed[currentConfigKey][confItem[0].trim()]) {
                parsed[currentConfigKey][confItem[0].trim()].push(item.trim());
              } else {
                parsed[currentConfigKey][confItem[0].trim()] = [item.trim()];
              }
            }

          });
        } else { //new key
          currentConfigKey = match[1];
          if(!parsed.hasOwnProperty(currentConfigKey))  parsed[currentConfigKey] = {};
        }
      } else { //something = value
        confItem = element.split('=');
        if (confItem[1] && confItem[1].trim() !== '') {
          let ci = confItem[1].trim();
          if(!isNaN(ci-0)) ci = ci-0;
          parsed[currentConfigKey][confItem[0].trim()] = ci;
        }
      }
    }
  });
  return parsed;
}