#src/Components

`/HelpTopics` contains the components that render the text for the help documentation modal.
Change these files to customise the help window.

`DefaultConfiguration` contains default display options for gcvit's various components.

+ `rulerDisplayDefault` sets the default ruler display direction. *default: LHS*
+ `rulerIntervalDefault` sets the default distance between major divisions. *default: 5000000*
+ `binSizeDefault` sets the number of bases in a bin. *default: 500000*
+ `titleDefault` sets the default title on the CViT canvas. *default: blank*
+ `colorDefault` sets the default color for a genotype track. *default:#19741A*
+ `imageTitleDefault` sets the default title for a downloaded image. *default: gcvit+date*

`*Modal.js` files render modal overlay windows.

`*Config.js` files set the default options for track types.

`*Form.js` are top level form elements.

All remaining files are for the various unique form elements and layouts.
