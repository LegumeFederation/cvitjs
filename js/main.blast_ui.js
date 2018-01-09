// Load cvit as a module and run. This ensures single point of entry.
// TODO: Use require text module to start by reading in configuration text
// file first

require(["cvit/cvit","cvit/file/file","draw/glyph/glyph"],function(cvit,file,glyph){
    console.log("CViTjs: Starting CViTJS");
    // cvit.init(dataset) to have the provided dataset
    //override defaults or URI string
    // cvit.init returns the backbone group of the async
    // drawing operations, allowing you to manually draw 
    // files after completion  
    console.log(Drupal.settings.blast_ui);
    
    cvit.init(Drupal.settings.blast_ui.dataset).then( function(group){

    var test = file.getFile(Drupal.settings.blast_ui.gff).then(
      function( result ) {
    	data = result;
    	// the following code compares expected chromosome names to the
    	// name provided by the BLAST gff, and strips off extra identifiers
    	// makes the asumption that the BLAST provided information is longer
    	// then the chromosome names used for the backbone
    	var labLen = cvit.data.chromosome.maxSeq.split('.').length;
    	var blastData = data[cvit.conf.blast.dataLoc];
    	blastData.features.forEach(function(element){
    	    var rework = element.seqName.split('.');
    	    var len = rework.length;
    	    element.seqName= rework.slice(len-labLen).join('.');
    	});
    	paper.view.draw();
    	paper.project.layers[0].children[0].remove();
    	var draw = glyph.drawGlyph(blastData, cvit.conf, cvit.viewInfo, group).then(
          function(){
    	     paper.view.draw();
    	  },
    	  function(errorMessage){
    	    console.log(errorMessage);
    	  });
      }, 
      function(errorMessage) {
        console.log(errorMessage);
      });
    });
});
