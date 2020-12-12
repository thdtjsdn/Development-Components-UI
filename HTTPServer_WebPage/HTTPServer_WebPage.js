//require( "../../TtwPlatform-00000--NodeJS/Common-WebServer-000-0.js" );
require( "../../TtwPlatform-00000--NodeJS/Common-WebServer-000-1.js" );
//require( "../../TtwPlatform-00000--NodeJS/Common-WebServer-001-0.js" );
//require( "../../TtwPlatform-00000--NodeJS/Common-WebServer-001-1.js" );
//----------------------------------------------------------------------------------------------------;
var fileNm = "HTTPServer_WebPage.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - COMMON AREA - TtwPlatform-00000--NodeJS Repository;
//	 - 공통으로 사용하는 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

//Create Console;
require( "../../TtwPlatform-00000--NodeJS/Create-Console-Developers.js" );

//global.REQUIRES.mongodb;
//require( "../../TtwPlatform-00000--NodeJS/global.REQUIRES.mongodb.js" );

//----------------------------------------------------------------------------------------------------;

//	REQUIRE - LOCAL AREA;
//	- Application 종속적인 소스 조각 및 라이브러리

//----------------------------------------------------------------------------------------------------;

require( "./_$TATIC_CONST.js" );
require( "./_$TATIC_NODE_MODULES.js" );

//require( global.process.cwd() + "/libs/mongodb/mongodb_schema_validator.js" );

require( "D:/thdtjsdn/TtwJS_NodeJS/NodeJS/libs/Ttw/NodeJS/Lib_Ttw_TtwPackage_NodeJS__Macro.js" );
require( "D:/thdtjsdn/TtwJS_NodeJS/NodeJS/libs/Ttw/NodeJS/Lib_Ttw_TtwPackage_NodeJS__MacroAPI.js" );

//----------------------------------------------------------------------------------------------------;

//	HTTPServer - Define - CONST;

//----------------------------------------------------------------------------------------------------;

/**
 * HTTPService를 할 대상 root Path
 * @property {String}
 */
global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH = global.process.cwd() + "/../WebPage/root/";
global._$TATIC_CONST_SERVER_HTTP_HOST = null;
global._$TATIC_CONST_SERVER_HTTP_PORT = 49323;

global._$TATIC_CONST_SERVER_HTTP_MIME_TYPES = {
	"" : "text/plain"
	//, bmp : "image/bmp"
	, css : "text/css"
	, csv : "text/csv"
	//, dbjs : "application/javascript"//오픈 금지;
	, gif : "image/gif"
	, html : "text/html"
	//, less : "text/css"//오픈 금지;
	, list : "text/plain"
	, jpeg : "image/jpeg"
	, jpg : "image/jpeg"
	, js : "application/javascript"
	, json : "text/json"
	, png : "image/png"

	, "server-120-ip" : "application/javascript"
	, "server-122-ip" : "application/javascript"
	, "server-123-ip" : "application/javascript"

	, tcss : "text/csv"//;
	//, tjs : "application/javascript"//오픈 금지;
	, thtml : "text/html"//오픈 금지;
	, txt : "text/plain"
	, xml : "text/xml"
	//, xlsx : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

	, svg : "image/svg+xml"

	//Compress;
	//, apk : "application/vnd.android.package-archive"
	//, zip : "application/zip"

	//Font;
	, eot : "application/vnd.ms-fontobject"
	, ttf : "application/x-font-ttf"
	, woff : "application/x-font-woff"
	, woff2 : "application/x-font-woff"

	//Special Image;
	//, hdr : "image/vnd.radiance"

	//Sound;
	, mp3 : "audio/x-mpeg-3"
};

global.apis.fs.autoLoad_JSs([ [ "JavaScript Import", "./js/", { router : 1, router_external : 1, router_internal : 1 } ] ]);

//----------------------------------------------------------------------------------------------------;

//	HTTPServer - Router;

//----------------------------------------------------------------------------------------------------;

/*/
//Browser에서 요청하는 /js/ 경로의 소스 파일들을 공통레파지토리에서 가져와 내려주는 기능;
//화면소스 개발모드에서만 사용한다.;
//Release 모드에서는 필요없음;
global.apis.server_http.globalServer__setMode__Dev__FileResCommonPath();
//*/

/*/
//Browser에서 요청하는 /js/ 경로의 소스 파일들을 공통레파지토리에서 가져와 내려주는 기능;
//화면소스 개발모드에서만 사용한다.;
//Release 모드에서는 필요없음;
global.apis.server_http.globalServer__setMode__Dev__FileResCommonPath();
/*/
(function(){
	var _CWD = global.process.cwd() + "/";
	var _CWD_ROOT = _CWD + "../WebPage/root";

	var _0 = SUtilHttpServer.__evt_request__APIAndFilePath = SUtilHttpServer.evt_request__APIAndFilePath;
	var _1 = global.process.cwd() + "/../../TtwPlatform-00000--JS/WebPage/root/";
	//var _2 = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;

	SUtilHttpServer.evt_request__APIAndFilePath = function( req, res ){

		//----------;
		//req.url = SUtilHttpServer.getURIFromURL( req.url );
		//req.url = global.decodeURIComponent( req.url );
		var uri;
		debugger;
		///try{ uri = global.decodeURIComponent( SUtilHttpServer.getURIFromURL( req.url ) ); }
		try{ uri = global.decodeURIComponent( req.url ); }
		catch(er){
			try{ uri = global.decodeURIComponent( req.url ); }
			catch( er ){ uri = req.url; }
		}
		req.url = uri;
		//----------;

		if( ( -1 == uri.indexOf( "/img/" ) )
			&& ( -1 == uri.indexOf( "음성 기록 통계" ) )
			&& ( -1 == req.client.remoteAddress.indexOf( "1.235.228.84" ) )
		)
		{
			//global.console.log( Date.now() + " - " + req.client.remoteAddress + " - " + uri );
		}

		//IP 차단;
		/*/
		if( -1 != req.client.remoteAddress.indexOf() )
		{
			global.apis.response.send_404( req, res );
			return;
		}
		//*/

		if( ( uri.length - 5 ) == uri.lastIndexOf( ".html" ) )
		{
			var PATH = _CWD_ROOT + uri;
			global.REQUIRE.fs.exists( PATH, function( b ){
				if( b )
				{
					var fStr = SUtilFsReadStream.getFile( PATH ).toString();

					if( -1 != fStr.indexOf( "<!=SYS0320." ) ) fStr = fStrreplace( /\<\!\=SYS0320\.HOST\=\!\>/gi, global.apis.url.getServerURL_WebServer_SCODE( "SYS0320" ) );

					global.apis.response.send_200_HTML( req, res, fStr );
					return;
				}
				else
				{
					global.apis.response.send_404( req, res );
					return;
				}
			});

			return;
		}

		else if( -1 != uri.lastIndexOf( ".js" ) && ( uri.length - 3 ) == uri.lastIndexOf( ".js" ) )
		{
			var PATH = _CWD_ROOT + uri;
			global.REQUIRE.fs.exists( PATH, function( b ){
				if( b )
				{
					var fStr = SUtilFsReadStream.getFile( PATH ).toString();

					//if( -1 != fStr.indexOf( "<!=SYS0320." ) ) fStr = fStrreplace( /\<\!\=SYS0320\.HOST\=\!\>/gi, global.apis.url.getServerURL_WebServer_SCODE( "SYS0320" ) );

					global.apis.response.send_200_HTML( req, res, fStr );
					return;
				}
				else
				{
					global.apis.response.send_404( req, res );
					return;
				}
			});

			return;
		}

		//else if( _2[ uri ] ) _0( req, res );

		else if( 0 == uri.indexOf( "/js/" ) )
		{
			//공통 모듈 파일을 가져와서 내려주기;
			//global.apis.response.sendStream_200_File_NCallback( req, res, _1 );
			global.apis.response.sendStream_200_File_URI_NCallback( req, res, _1, uri );
			return;
		}

		else if( -1 != uri.lastIndexOf( ".json" ) && ( uri.length - 5 ) == uri.lastIndexOf( ".json" ) )
		{
			var PATH = _CWD_ROOT + uri;
			global.REQUIRE.fs.exists( PATH, function( b ){
				if( b )
				{
					var fStr = SUtilFsReadStream.getFile( PATH ).toString();

					//if( -1 != fStr.indexOf( "<!=SYS0320." ) ) fStr = fStrreplace( /\<\!\=SYS0320\.HOST\=\!\>/gi, global.apis.url.getServerURL_WebServer_SCODE( "SYS0320" ) );

					global.apis.response.send_200_String( req, res, fStr );
					return;
				}
				else
				{
					global.apis.response.send_404( req, res );
					return;
				}
			});

			return;
		}

		_0( req, res );
	};
})();
//*/

//----------------------------------------------------------------------------------------------------;

//*/
(function(){
	var _ = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;

	//Custom URI Example - http://localhost:port/a;
	_[ "/a" ] = function( req, res ){
		var q = global.apis.url.getQueryFromURL( req.url );
		console.log( 1 );
		console.info( q.a );
		SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
	};

	/*/
	_[ "/js/index.js" ]
		= _[ "/js/index_dev_mongodb.js" ]
		= function( req, res ){ global.apis.response.sendStream_200_File_NCallback( req, res, global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH ); };
	//*/

	(function(){

		(function(){
			var TEMPLATE = `
				WinActivate, % "[0313] 멀티쾌속주문"
				WinActivate, % "[8080] 주식호가주문플러스"
				;Sleep, 150
				CoordMode, Pixel, Relative
				MouseClick, left, 25, 38, 1, 0
				Sleep, 100
				SendRaw {{종목코드}}
				Sleep, 100
				Send {Enter}`;
			/*/
			;Sleep, 100
			Send {Enter}
			;SendInput, {Text}{{종목코드}}
			;Sleep, 100
			;Send {Enter}
			//*/

			_[ "/setStocksCode" ] = function( req, res ){
				var q = global.apis.url.getQueryFromURL( req.url );
				//console.log( TEMPLATE.replace( "{{종목코드}}", q.code ) );
				SUtilMacroAPI.exec( TEMPLATE.replace( "{{종목코드}}", q.code ) );
				global.apis.response.send_200_String( req, res, "" );
			};

			_[ "/KEY_NumpadAdd" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {NumpadAdd}" ); global.apis.response.send_200_String( req, res, "" ); }
			_[ "/KEY_NumpadDiv" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {NumpadDiv}" ); global.apis.response.send_200_String( req, res, "" ); }
			_[ "/KEY_NumpadMult"] = function( req, res ){ SUtilMacroAPI.exec( "Send, {NumpadMult}" ); global.apis.response.send_200_String( req, res, "" ); }
			_[ "/KEY_NumpadSub" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {NumpadSub}" ); global.apis.response.send_200_String( req, res, "" ); }
			_[ "/KEY_Numpad0" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {Numpad0}" ); global.apis.response.send_200_String( req, res, "" ); }
			_[ "/KEY_Numpad1" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {Numpad1}" ); global.apis.response.send_200_String( req, res, "" ); }
			_[ "/KEY_Numpad2" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {Numpad2}" ); global.apis.response.send_200_String( req, res, "" ); }
			_[ "/KEY_Numpad3" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {Numpad3}" ); global.apis.response.send_200_String( req, res, "" ); }
			_[ "/KEY_Numpad4" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {Numpad4}" ); global.apis.response.send_200_String( req, res, "" ); }
			_[ "/KEY_Numpad5" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {Numpad5}" ); global.apis.response.send_200_String( req, res, "" ); }
			_[ "/KEY_Numpad6" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {Numpad6}" ); global.apis.response.send_200_String( req, res, "" ); }

			_[ "/KEY_F1" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {F1}" ); global.apis.response.send_200_String( req, res, "" ); }
			_[ "/KEY_F2" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {F2}" ); global.apis.response.send_200_String( req, res, "" ); }
			_[ "/KEY_F3" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {F3}" ); global.apis.response.send_200_String( req, res, "" ); }
			_[ "/KEY_F4" ] = function( req, res ){ SUtilMacroAPI.exec( "Send, {F4}" ); global.apis.response.send_200_String( req, res, "" ); }
		})();

		(function(){
			var TEMPLATE = `
				WinActivate, % "박수형, hyunju, 마병환, ."
				CoordMode, Pixel, Relative
				MouseClick, left, 230, 1020, 1, 0
				Sleep, 100
				SendInput {{메세지}}
				Sleep, 100
				Send {Enter}

				Sleep, 100

				WinActivate, % "thdtjsdn-Stocks"
				CoordMode, Pixel, Relative
				MouseClick, left, 230, 1020, 1, 0
				Sleep, 100
				SendInput {{메세지}}
				Sleep, 100
				Send {Enter}`;

			_[ "/setKakaoTalkMessage" ] = function( req, res ){
				var q = global.apis.url.getQueryFromURL( req.url );
				//console.log( TEMPLATE.replace( "{{메세지}}", q.code ) );
				SUtilMacroAPI.exec( TEMPLATE.replace( /\{\{메세지\}\}/gi, q.code ) );
				global.apis.response.send_200_String( req, res, "" );
			};
		})();

		(function(){
			var TEMPLATE = `
				WinActivate, % "김인숙, 송종현(프란치스코), 💎유리송, ."
				CoordMode, Pixel, Relative
				MouseClick, left, 230, 1020, 1, 0
				Sleep, 100
				SendInput {{메세지}}
				Sleep, 100
				Send {Enter}`;

			_[ "/setKakaoTalkMessage_Family" ] = function( req, res ){
				var q = global.apis.url.getQueryFromURL( req.url );
				//console.log( TEMPLATE.replace( "{{메세지}}", q.code ) );
				SUtilMacroAPI.exec( TEMPLATE.replace( /\{\{메세지\}\}/gi, q.code ) );
				global.apis.response.send_200_String( req, res, "" );
			};
		})();

		(function(){
			var TEMPLATE = `
				WinActivate, % "보루리"
				CoordMode, Pixel, Relative
				MouseClick, left, 230, 1020, 1, 0
				Sleep, 100
				SendInput {{메세지}}
				Sleep, 100
				Send {Enter}`;

			_[ "/setKakaoTalkMessage_버들" ] = function( req, res ){
				var q = global.apis.url.getQueryFromURL( req.url );
				//console.log( TEMPLATE.replace( "{{메세지}}", q.code ) );
				SUtilMacroAPI.exec( TEMPLATE.replace( /\{\{메세지\}\}/gi, q.code ) );
				global.apis.response.send_200_String( req, res, "" );
			};
		})();


		var o = {};
		var a = JSON.parse( SUtilFsReadStream.getFile( "D:/GitHub_Ttw--Base/TtwService-Ruaend--StockCharts--IMG/HTTPServer_WebPage/json/list-all.json" ).toString() );
			a.forEach( function( item ){ o[ item.name ] = item.code; });
		_[ "/stock_naver_toron" ] = function( req, res ){
			var q = global.apis.url.getQueryFromURL_Decode( req.url );

			//console.info(q);

			try
			{
				var fStr = SUtilFsReadStream.getFile( "E:/GitHub_Ttw--Stock/Ttw-Electron-Stock--NHN--Data/토론 - 정제 - 글삭제/" + o[ q.name ] + "/" + q.date + ".json" ).toString();
				global.apis.response.send_200_String( req, res, fStr );
			}
			catch( er )
			{
				console.log( er );
				global.apis.response.send_404( req, res );
			}
		};
	})();

	//B2LiNK-B2Labs IP 이외 차단 파일 목록;
	require( "../../TtwPlatform-00000--NodeJS/NotAvailableServiceFiles__IP.js" );
})();
//*/

/*/
(function(){Lib.Ttw.importTll(global.process.cwd()+"/native_modules/oakat.tll");SUtilOpenAPIKakaoTalk.r();var _=global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;_["/notify_kakaotalk"]=function(req,res){var q=global.server.getQueryFromURL(req.url); SUtilOpenAPIKakaoTalk.smmt({text:q.text,button_title:global.REQUIRES.os.hostname()+" "+q.title}); global.apis.response.setHeaders__b2ker(res); SUtilHttpServerResponse.responseWrite_200_True(res);};})();
//*/

//----------------------------------------------------------------------------------------------------;

//	HTTPServer - Initialize;

//----------------------------------------------------------------------------------------------------;

//WebServer용 HTTPServer를 생성한다.;
global.server = global.apis.server_http.newServer__WebServer();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//	JavaScript Import;
// - ./js/ : 공통모듈, TtwPlatform-00000--NodeJS에 존재한다.;
// - ./js__b2link__***/ : 각 개별 레파지토리에 존재한다. API 파일 목록은 필요 요소에 따라 다를수 있다.;

//----------------------------------------------------------------------------------------------------;

//*/
(function(){
	global.apis.fs.autoLoad_JSs([
		[ "JavaScript Import - Dev-Comp-UI", "./js__SYS0015/", { router : 1, router_external : 1, router_internal : 1 } ]
	]);
})();
//*/

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;