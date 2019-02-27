export function parseGff(text){
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
        gffLine = {
          seqName: element[0],
          source: element[1],
          feature: element[2],
          start: parseInt(element[3]),
          end: parseInt(element[4]),
          score: parseFloat(element[5]) || '.',
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
                  parsedAttributes[attribute[0]] = attribute[1];
                });
              return parsedAttributes;
            }())
        };
        if (parsed[gffLine.feature] === undefined) {
          parsed[gffLine.feature] = {features:[]};
        }
        if (parsed[gffLine.feature][gffLine.seqName] === undefined) {
          parsed[gffLine.feature][gffLine.seqName] = {features:[]};
        }
        parsed[gffLine.feature].features.push(gffLine);
        parsed[gffLine.feature][gffLine.seqName].features.push(gffLine);
      }
    });
  return parsed;
}