// Load cvit as a module and run. This ensures single point of entry.
// TODO: Use require text module to start by reading in configuration text
// file first

requirejs.onError = function(err){ throw err};

// Load cvit as a module and run. This ensures single point of entry.
// TODO: Use require text module to start by reading in configuration text
// file first

require(["jquery","cvit/cvit","cvit/file/file"],function($,cvit,file){
    
        console.log("CViTjs: Starting CViTJS");
        // cvit.init(dataset) to have the provided dataset
        //override defaults or URI string
		try {
        //var dataset = passedData.dataset.backbone ? passedData.dataset.backbone : undefined;
		var dataset = Drupa.settings.blast_ui.dataset;
        //var gff = passedData.dataset.gff ? file.getFile(passedData.dataset.gff) : undefined;
        var gff = File.getFile(Drupal.settings.blast_ui.dataset);
		} catch (err){
			console.log(err);
			document.getElementById('cvit-div').innerHTML = err.message;
		}

        $.when(gff).then(function(additionalData){
            // do any additional data parsing here to make the additional gff
            // data acceptable to match with your backbone.
    		data = additionalData;
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
        
			// Initialize the cvit view
		    cvit.init(dataset,data);
        }, 
		function(err){
			console.log(err);
			document.getElementById('cvit-div').innerHTML = err.message;
		});
},function(err){ 
        console.log(err);
        document.getElementById('cvit-div').innerHTML = err.message;
    });
