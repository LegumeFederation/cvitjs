/*
 * jquery-private: This module sets noConflict, allowing AMD override of the 
 * jquery $
 *
 */

define(['jquery'], function (jq) {
		return jq.noConflict( true );
});
