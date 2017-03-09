// Configuration for requirejs, not for CViTjs. You can find configuration
// for CViTjs in js/cvit

require.config({
	
	// Enter main.js as single point of entry for the program.
	
	deps: ["../main"],
	
	// Set baseURL to library path, as recomended by requirejs
	
	baseUrl: 'js/lib',
    
    // Set error handling if failed to load a module

    catchError: true,

	// Set basic paths to commonly used modules here, makes life easier
	// when defining them later in other parts of the program
	// text: require plugin that allows loading of text files as dependencies
	// domReady : require plugin that simplifies waiting for the dom to be ready
	// jquery : The ubiquitous JavaScript DOM library
	// paper : A JavaScript Canvas Library, lets us do all the drawing
	// d3 : A JavaScript library usually used for graphs, here for data manipulation
	
	paths: {
		text : 'require/text',
		json: 'require/json',
		domReady : 'require/domReady',
		jquery : 'jquery/jquery-1.12.3.min',
		mousewheel : 'jquery-mousewheel/jquery.mousewheel.min',
		paper: 'paper/paper-core.min',
                hopscotch: 'hopscotch/js/hopscotch.min',
                bootstrap: 'bootstrap_embed/',
		cvit: '../cvit',
		tools:'../cvit/tools/',
		draw: '../cvit/draw',
		glyph: '../cvit/draw/glyph'
//		teth:'https://github.com/HubSpot/tether/blob/master/dist/js/tether.min'
	},

	// bootstrap requires jquery to work, shim makes certain jquery is loaded before.	
	shim : {
        "bootstrap" : { "deps" :"jquery" }
    },
	// Remove jquery from global scope. jquery will now only be available if 
	// defined by the AMD Scope. This allows for more flexibility
	// in the long run, and better modulartity
	map: {
		'*' :{ 'jquery' : 'require/jquery-private'},
		'*':{'bootstrap': 'bootstrap/js/bootstrap.min'},
		'require/jquery-private' :{ 'jquery' : "jquery"}
	}
});
