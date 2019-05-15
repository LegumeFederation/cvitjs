import rbush from 'rbush';

export function parseGff(text,seqNames=[]){
  let parsed = {};
  let gffLine = {};

  // Break up gff by line, then test if line is not a comment (starts with #)
  // if it is, do nothing, otherwise break up current line by tabs and
  // read into parsef File object. forEach is used for readability, can be
  // replaced by a for loop for performance.
  let gff = text.split('\n');
  gff.forEach((element) => {
      if (element.match(/^[^#]/)) {
        element = element.split('\t');
        console.log(element);
        gffLine = {
          seqName: element[0],
          source: element[1],
          feature: element[2],
          start: parseInt(element[3]),
          end: parseInt(element[4]),
          score: Number(element[5]) || '.',
          strand: element[6],
          frame: element[7],
          // Break attribute tags into their own sub objects
          // so can be accessed as parsedFile[index].attribute.attributetype
          // this makes it easier to test if an attribute exists later
          // this function is self-invoking
          attribute: (
            function () {
              let attributes = element[8].split(';');
              let parsedAttributes = {};
              attributes.forEach((attribute) => {
                  attribute = attribute.split('=');
                  attribute[0] = attribute[0].toLowerCase();
                  parsedAttributes[attribute[0]] = isNaN(attribute[1]-0) ? attribute[1] : attribute[1]-0; //parses a number as a number
                });
              return parsedAttributes;
            }())
        };
        /** attempt to match with existing sequences if data already loaded */
        let seqName = gffLine.seqName;
        if(seqNames.length > 0){
          seqNames.some(seq => {
            let re = new RegExp('.*'+seq).test(seqName);
            if(re){
              seqName = seq;
              gffLine.seqName = seq;
              return true;
            }
            return false;
          });
        }

        /**
         * Add the feature to the object of it's underlying
         * feature category (gff column 3)
         */

        if (parsed[gffLine.feature] === undefined) {
          parsed[gffLine.feature] = {features:[]};
        }
        if (parsed[gffLine.feature][seqName] === undefined) {
          parsed[gffLine.feature][seqName] = {
            features: [],
            itree: rbush(),
            maxScore:{
              value: null,
              scoreCol: null
            },
            minScore:{
              value: null,
              scoreCol: null
            }
          };
        }
        parsed[gffLine.feature].features.push(gffLine);
        let sn = parsed[gffLine.feature][seqName];
        sn.features.push(gffLine);

        /** preprocess for drawing as measure -0 to cast to number if possible */
        sn.itree.insert({minX:gffLine.start,maxX:gffLine.end,minY:0,maxY:0,data:gffLine});
        let value = isNaN(gffLine.attribute.value-0) ? null : gffLine.attribute.value-0;
        let scoreCol = isNaN(gffLine.score-0) ? null : gffLine.score-0;
        let max = sn.maxScore;
        let min = sn.minScore;
        sn.maxScore = {
          value: value === null && max.value === null ? null : value > max.value ? value : max.value,
          scoreCol: scoreCol === null && max.scoreCol === null ? null : scoreCol > max.scoreCol ? scoreCol : max.scoreCol
        };
        sn.minScore = {
          value: value === null && min.value === null ? null : value < min.value || min.value === null ? value : min.value,
          scoreCol: scoreCol === null && min.scoreCol === null ? null : scoreCol < min.scoreCol || min.scoreCol === null ? scoreCol : min.scoreCol
        };
      }
    });
  return parsed;
}