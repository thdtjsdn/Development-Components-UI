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

//*/
//Browser에서 요청하는 /js/ 경로의 소스 파일들을 공통레파지토리에서 가져와 내려주는 기능;
//화면소스 개발모드에서만 사용한다.;
//Release 모드에서는 필요없음;
global.apis.server_http.globalServer__setMode__Dev__FileResCommonPath();
//*/

//----------------------------------------------------------------------------------------------------;

//*/
(function(){
	var _ = global._$TATIC_VALUE_SERVER_HTTP_EVTS_REQUEST;

	//Custom URI Example - http://localhost:port/a;
	_[ "/a" ] = function( req, res ){
		console.log( 1 );
		SUtilHttpServerResponse.responseWrite_200_JSON( res, {} );
	};

	/*/
	_[ "/js/index.js" ]
		= _[ "/js/index_dev_mongodb.js" ]
		= function( req, res ){ global.apis.response.sendStream_200_File_NCallback( req, res, global._$TATIC_CONST_SERVER_HTTP_TARGET_PATH ); };
	//*/

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