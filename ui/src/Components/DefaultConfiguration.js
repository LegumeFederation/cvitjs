/**
 * Default values for UI components.
 */


/**
 * Side of drawing to display the ruler
 */
export function rulerDisplayDefault(rulerDisplayOptions) { return rulerDisplayOptions[0]}; //0-LHS,1-RHS,2-Both,3-None


/**
 * Distance in default units between major tick ines in ruler
 */
export const rulerIntervalDefault = 5000000;

/**
 * Size of display "bin" for counts
 */
export const binSizeDefault = 500000;

/**
 * Default title
 */
export const titleDefault  = "";

/**
 * Default feature color
 */
export const colorDefault = '#19741A';

/**
 * Default title for exported image
 */
export const imageTitleDefault = "GCViT" + new Date().toDateString();
