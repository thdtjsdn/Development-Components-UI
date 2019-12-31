/**
 * @function
 * @return {Object} window.particlesJS
 *
 * @example
 * <code>
	var particlesJS = window.apis.util.importJS( "./libs/particles.js/import-js.js" );
 * </code>
 */
(function(){
	window.TtwLog.log( "- [ S ] - Import particles.js " );
	window.TtwLog.log( "- [ E ] - Import particles.js " );

	//return window.apis.util.importJS__Reuse( window.apis.url.getServerURLByServers("SYS0015_WebServer")+"/libs/particles.js/2.0.0/particles.js" );
	return window.apis.util.importJS__Reuse( window.apis.url.getServerURLByServers("SYS0015_WebServer")+"/libs/particles.js/2.0.0/particles.min.js" );
});