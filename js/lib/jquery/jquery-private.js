/*
 * jquery-private: This module sets noConflict, allowing AMD override of the 
 * jquery $
 *
 */

define(['jquery'], function (jq) {
		console.log('stuff');
		return jq.noConflict( true );
});
