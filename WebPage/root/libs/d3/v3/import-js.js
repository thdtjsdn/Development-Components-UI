/**
 * @function
 * @return {Object} window.d3
 *
 * @example
 * <code>
	var d3 = window.apis.util.importJS__Reuse( window.apis.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/d3/v3/import-js.js" );
 * </code>
 */
(function(){
	window.TtwLog.log( "- [ S ] - Import D3 " );
	window.TtwLog.log( "- [ E ] - Import D3 " );

	// return window.apis.util.importJS__Reuse( window.apis.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/d3/v3/3.5.17/d3.js" );
	window.apis.util.importJS__Reuse( window.apis.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/d3/v3/3.5.17/d3.min.js" );
	// debugger;

	return window.d3;
});