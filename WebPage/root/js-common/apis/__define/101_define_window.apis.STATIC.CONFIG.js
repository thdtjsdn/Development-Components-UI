//----------------------------------------------------------------------------------------------------;
//var fileNm = "js-common/b2link/__define/101_define_window.apis.STATIC.CONFIG.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

var _ = "";

//--------------------------------------------------[ S ] - window.apis.STATIC.CONFIG;

//--------------------------------------------------;

//	;

//--------------------------------------------------;

window.apis.STATIC.CONFIG = window.apis.STATIC.CONFIG || {};

//--------------------------------------------------;

//	;

//--------------------------------------------------;

window.TtwLog.timeStamp( "--------------------------------------------------[ S ] - window.apis.STATIC.CONFIG.URL" );

window.apis.STATIC.CONFIG.URL = window.apis.STATIC.CONFIG.URL || {};

//window.apis.STATIC.CONFIG.URL.PROXY = "./ttwP/";
window.apis.STATIC.CONFIG.URL.PROXY = "";
try{ if( require( "os" ) ) window.apis.STATIC.CONFIG.URL.PROXY = ""; }catch( er ){}


window.apis.STATIC.CONFIG.URL.SERVER = "http://localhost:49320/";
window.apis.STATIC.CONFIG.URL.SCODE = "development-components-ui";//시스템 개별 정의;
window.apis.STATIC.CONFIG.URL.SCODE = "SYS0015";//시스템 개별 정의;

//--------------------------------------------------;

//	URL - UI;

//--------------------------------------------------;

//window.apis.STATIC.CONFIG.URL.UI.LOCALE = "cn";
window.apis.STATIC.CONFIG.URL.UI.LOCALE = "kr";
//window.apis.STATIC.CONFIG.URL.UI.LOCALE = "us";

//--------------------------------------------------;

//	URL - UI - CSS;

//--------------------------------------------------;

window.apis.STATIC.CONFIG.URL.UI.CSS = "";
//window.apis.STATIC.CONFIG.URL.UI.CSS = ".bootstrap";
//window.apis.STATIC.CONFIG.URL.UI.CSS = ".bootstrap-jui";
//window.apis.STATIC.CONFIG.URL.UI.CSS = ".jui";
//window.apis.STATIC.CONFIG.URL.UI.CSS = ".semanticui";

//--------------------------------------------------;

window.TtwLog.timeStamp( "--------------------------------------------------[ E ] - window.apis.STATIC.CONFIG.URL" );

//--------------------------------------------------[ E ] - window.apis.STATIC.CONFIG;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;