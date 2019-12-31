/**
 * @function
 * @return {Object} window.d3
 *
 * @example
 * <code>
	var d3 = window.b2link.util.importJS__Reuse( window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/d3/v5/import-js.js" );
 * </code>
 */
(function(){
	window.TtwLog.log( "- [ S ] - Import D3 " );
	window.TtwLog.log( "- [ E ] - Import D3 " );

	// return window.b2link.util.importJS__Reuse( window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/d3/v5/5.1.0/d3.js" );
	return window.b2link.util.importJS__Reuse( window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/d3/v5/5.1.0/d3.min.js" );
});