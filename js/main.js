// Load cvit as a module and run. This ensures single point of entry.
// TODO: Use require text module to start by reading in configuration text
// file first

require(["cvit/cvit"],function(cvit){
		console.log("CViTjs: Starting CViTJS");
		// cvit.init(dataset) to have the provided dataset
		//override defaults or URI string
	 
		cvit.init();
	});
