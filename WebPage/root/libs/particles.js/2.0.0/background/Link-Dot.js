//window.b2link.util.importJS( window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/particles.js/2.0.0/background/Link-Dot.js" );
//setTimeout( function(){ window.b2link.util.importJS( window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/particles.js/2.0.0/background/Link-Dot.js" ); }, 5000 );
(function(){
	try
	{
		var host = "";

		//구동 차단 목록;
		var a = [
			"/onsight.b2link.co.kr"
		];
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i ) if( -1 != window.location.origin.indexOf( a[ i ] ) ) return;

		if( window.b2link.STATIC.CONFIG.URL.SCODE )
		{
			if( -1 != window.location.origin.indexOf( "/222" ) ) host = window.location.origin;//ip;
			else if( -1 != window.location.origin.indexOf( "/localhost" ) ) host = window.location.origin;//localhost;
			else host = window.location.origin + "/view";//domain;
		}
		/*///Electron;
		else host = window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/";
		/*/
		else return;
		//*/

		//window.b2link.STATIC.CONST.ROOT_DIV.EL_BACKGROUND.insertAdjacentHTML( "beforeBegin"
		window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL.insertAdjacentHTML( "afterend"
			, '<IFRAME style="width: 100%; height: 100%; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden !important; pointer-events: none !important;" src="'
				+ host
				+ '/libs/particles.js/2.0.0/background/Link-Dot.html"></IFRAME>'
		);
	}
	catch( e )
	{
		global.TtwLog.warn( "Particle 구동 실패." );
	}
})();