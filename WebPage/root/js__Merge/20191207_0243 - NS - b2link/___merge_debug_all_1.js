
//require( "../../Development-NodeJS_Modules/Common-WebServer-root-000-0.js" );
//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link

window.b2link = window.b2link || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.STATIC;

window.b2link.STATIC = window.b2link.STATIC || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.STATIC;

//----------------------------------------------------------------------------------------------------;
//
//---------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

var _ = "";

//--------------------------------------------------[ S ] - window.b2link.STATIC.CONFIG;

//--------------------------------------------------;

//	;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG = window.b2link.STATIC.CONFIG || {};

//--------------------------------------------------;

//	;

//--------------------------------------------------;

window.TtwLog.timeStamp( "--------------------------------------------------[ S ] - window.b2link.STATIC.CONFIG.URL" );

window.b2link.STATIC.CONFIG.URL = window.b2link.STATIC.CONFIG.URL || {};

//window.b2link.STATIC.CONFIG.URL.PROXY = "./ttwP/";
window.b2link.STATIC.CONFIG.URL.PROXY = "";
try{ if( require( "os" ) ) window.b2link.STATIC.CONFIG.URL.PROXY = ""; }catch( er ){}


window.b2link.STATIC.CONFIG.URL.SERVER = "http://localhost:49320/";
window.b2link.STATIC.CONFIG.URL.SCODE = "";//시스템별 개별 정의;

//--------------------------------------------------;

//	URL - IMG;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.IMG = window.b2link.STATIC.CONFIG.URL.IMG || {};
window.b2link.STATIC.CONFIG.URL.IMG.BASE = "./img/";

//--------------------------------------------------;

//	URL - UI;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.UI = window.b2link.STATIC.CONFIG.URL.UI || {};
window.b2link.STATIC.CONFIG.URL.UI.BASE = "./ui/";

//window.b2link.STATIC.CONFIG.URL.UI.LOCALE = "cn";
window.b2link.STATIC.CONFIG.URL.UI.LOCALE = "kr";
//window.b2link.STATIC.CONFIG.URL.UI.LOCALE = "us";

_ = window.b2link.STATIC.CONFIG.URL.UI.BASE;

window.b2link.STATIC.CONFIG.URL.UI.B2LINK = _ + "b2link/";

window.b2link.STATIC.CONFIG.URL.UI.B2LINK_API = _ + "b2link_api/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_MEMBER = _ + "b2link_member/";
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_SESSION = _ + "b2link_session/";

//B2LiNK-SessionServer-Dev;
window.b2link.STATIC.CONFIG.URL.UI.B2LINK_AUTHORITY = _ + "b2link_authority/";

//All Project;
window.b2link.STATIC.CONFIG.URL.UI.test = _ + "test/";

//--------------------------------------------------;

//	URL - UI - CSS;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.UI.CSS = "";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".bootstrap";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".bootstrap-jui";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".jui";
//window.b2link.STATIC.CONFIG.URL.UI.CSS = ".semanticui";

//--------------------------------------------------;

//	URL - MONGODB;

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.MONGODB = window.b2link.STATIC.CONFIG.URL.MONGODB || {};

//--------------------------------------------------;

window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER = window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER || {};
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER_COMMON = window.b2link.STATIC.CONFIG.URL.SERVER + "member/";
_ = window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER_COMMON;
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.BASIC = _ + "member_basic/";
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.PUBLIC = _ + "member_public/";
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.SESSION = _ + "member_session/";
window.b2link.STATIC.CONFIG.URL.MONGODB.MEMBER.SESSION_LOG = _ + "member_session_log/";

//--------------------------------------------------;

window.TtwLog.timeStamp( "--------------------------------------------------[ E ] - window.b2link.STATIC.CONFIG.URL" );

//--------------------------------------------------[ E ] - window.b2link.STATIC.CONFIG;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------[ S ] - window.b2link.STATIC.CONST;

window.b2link.STATIC.CONST = window.b2link.STATIC.CONST || {};

//------------------------------window.b2link.STATIC.CONST.SCODES;
(function(){
	window.b2link.STATIC.CONST.SCODES = window.b2link.STATIC.CONST.SCODES || {};

	var _ = window.b2link.STATIC.CONST.SCODES;
		_.__defineGetter__( "SYS0010"	, function(){ return "SYS0010"; } );
		_.__defineGetter__( "SYS0020"	, function(){ return "SYS0020"; } );
		_.__defineGetter__( "SYS0030"	, function(){ return "SYS0030"; } );
		_.__defineGetter__( "SYS0040"	, function(){ return "SYS0040"; } );
		_.__defineGetter__( "SYS0050"	, function(){ return "SYS0050"; } );
		_.__defineGetter__( "SYS0060"	, function(){ return "SYS0060"; } );
		_.__defineGetter__( "SYS0070"	, function(){ return "SYS0070"; } );
		_.__defineGetter__( "SYS0080"	, function(){ return "SYS0080"; } );

		_.__defineGetter__( "SESSION_SERVER"						, function(){ return "SYS0010"; } );
		_.__defineGetter__( "B2KER"									, function(){ return "SYS0020"; } );
		_.__defineGetter__( "BRAND_PORTAL"							, function(){ return "SYS0030"; } );
		_.__defineGetter__( "FILE_SERVER"							, function(){ return "SYS0040"; } );
		_.__defineGetter__( "WEB_HOOK_SERVER"						, function(){ return "SYS0050"; } );
		_.__defineGetter__( "WEB_SOCKET_MESSAGE_SERVER"				, function(){ return "SYS0060"; } );
		_.__defineGetter__( "EXCEL_SERVER"							, function(){ return "SYS0070"; } );
		_.__defineGetter__( "WEB_SOCKET_APP_COMMUNICATION_SERVER"	, function(){ return "SYS0080"; } );
})();
//------------------------------window.b2link.STATIC.CONST.SCODES;

//----------------------------------------------------------------------------------------------------;

//*///공통 소스에서 구동됨;
window.TtwLog.timeStamp( "--------------------------------------------------[ S ] - window.b2link.STATIC.CONST.ROOT_DIV" );
window.b2link.STATIC.CONST.ROOT_DIV = window.b2link.STATIC.CONST.ROOT_DIV || {};
var _ = window.b2link.STATIC.CONST.ROOT_DIV;
	_.ID_BACKGROUND = "div_0__Background";
	_.ID_APPLICATION = "div_0__Application";
	_.ID_UI_COMPONENT_FIXED = "div_0__UI_Component_Fixed";
	_.ID_UI_COMPONENT_PANEL = "div_0__UI_Component_Panel";
	_.ID_TOP = "div_0__Top";
	_.ID_TOP_MODAL = "div_0__Top_modal";

	_.EL_BACKGROUND = window.document.getElementById( "div_0__Background" );
	_.EL_APPLICATION = window.document.getElementById( "div_0__Application" );
	_.EL_UI_COMPONENT_FIXED = window.document.getElementById( "div_0__UI_Component_Fixed" );
	_.EL_UI_COMPONENT_PANEL = window.document.getElementById( "div_0__UI_Component_Panel" );
	_.EL_TOP = window.document.getElementById( "div_0__Top" );
	_.EL_TOP_MODAL = window.document.getElementById( "div_0__Top_modal" );
window.TtwLog.timeStamp( "--------------------------------------------------[ E ] - window.b2link.STATIC.CONST.ROOT_DIV" );
//*/

//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------[ E ] - window.b2link.STATIC.CONST;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

//*///공통 소스에서 구동됨;
var _ = window.b2link.STATIC.CONST.ROOT_DIV;
window.addEventListener( "resize", function( e ){
	_.EL_APPLICATION.style.width = _.EL_BACKGROUND.style.width = _.EL_TOP.style.width = _.EL_TOP_MODAL.style.width = _.EL_UI_COMPONENT_FIXED.style.width =
	_.EL_UI_COMPONENT_PANEL.style.width = window.document.body.clientWidth + "px";
	_.EL_APPLICATION.style.height = _.EL_BACKGROUND.style.height = _.EL_TOP.style.height = _.EL_TOP_MODAL.style.height = _.EL_UI_COMPONENT_FIXED.style.height =
	_.EL_UI_COMPONENT_PANEL.style.height = window.document.body.clientHeight + "px";
}, false, 0, true );
//*/

/*/
var _ = window.b2link.STATIC.CONST.ROOT_DIV;
window.addEventListener( "resize", function( e ){
	console.debug( "EL_APPLICATION : " + _.EL_APPLICATION.clientWidth + " * " + _.EL_APPLICATION.clientHeight );
	console.debug( "EL_BACKGROUND : " + _.EL_BACKGROUND.clientWidth + " * " + _.EL_BACKGROUND.clientHeight );
	console.debug( "EL_TOP : " + _.EL_TOP.clientWidth + " * " + _.EL_TOP.clientHeight );
	console.debug( "EL_TOP_MODAL : " + _.EL_TOP_MODAL.clientWidth + " * " + _.EL_TOP_MODAL.clientHeight );
	console.debug( "EL_UI_COMPONENT_FIXED : " + _.EL_UI_COMPONENT_FIXED.clientWidth + " * " + _.EL_UI_COMPONENT_FIXED.clientHeight );
	console.debug( "EL_UI_COMPONENT_PANEL : " + _.EL_UI_COMPONENT_PANEL.clientWidth + " * " + _.EL_UI_COMPONENT_PANEL.clientHeight );
}, false, 0, true );
//*/

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.STATIC.REGEXP;

window.b2link.STATIC.REGEXP = window.b2link.STATIC.REGEXP || {};

//----------------------------------------------------------------------------------------------------window.b2link.STATIC.REGEXP.MATCH;

window.b2link.STATIC.REGEXP.MATCH = window.b2link.STATIC.REGEXP.MATCH || {};

/**
 * @property {RegExp}
 */
window.b2link.STATIC.REGEXP.MATCH.URI_HTTP0 = /^http[s]*:\/\//;


//수정하기 - 20170525 - 송선우 - Node 기본 유틸로 있을껄요?;
/**
 * @property {ReqExp}
 * @example
 * <code>
	var pattern = window.b2link.STATIC.REGEXP.MATCH.URL;
	var url = "http://localhost:8080/public/index.js?title=index&page=1";
	var arr = url.match( pattern );
	console.log( arr[ 0 ] );//http://localhost:8080/public/index.js
	console.log( arr[ 1 ] );//http://
	console.log( arr[ 2 ] );//localhost:8080/
	console.log( arr[ 3 ] );//public/index.js
 * </code>
 */
window.b2link.STATIC.REGEXP.MATCH.URL = /(http[s]?:\/\/)?([^\/\s]+\/)([^?#]*)/;

//----------------------------------------------------------------------------------------------------window.b2link.STATIC.REGEXP.REPLACE;

window.b2link.STATIC.REGEXP.REPLACE = window.b2link.STATIC.REGEXP.REPLACE || {};

/**
 * @property {RegExp}
 * @D:\Github_B2LiNK\B2LiNK-B2Ker-Dev\WebPage\root\ui_template\b2link_settlement\common\edit_info_tax_bill.js
 */
//window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA0 = /(\d)(?=(\d{3} )+\.)/g;

/**
 * @property {RegExp}
 * @see window.b2link.util.getMoney
 */
window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA1 = /\B(?=(\d{3})+(?!\d))/g;

/**
 * @property {RegExp}
 * @see window.b2link.util.convertCommaSeparatedNumberToFloat
 */
window.b2link.STATIC.REGEXP.REPLACE.MONEY_COMMA2 = /[^\d]+/g;

/**
 * @property {RegExp}
 * @see window.b2ker.util.getStringChangePriceToComma
 */
window.b2link.STATIC.REGEXP.REPLACE.PRICE_COMMA = /("price":[0-9.-]+)/g;

//--------------------------------------------------;

/**
 * Emoji 검색
 * @property {RegExp}
 */
//window.b2link.STATIC.REGEXP.REPLACE.FULL_EMOJI = /(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F/g;
window.b2link.STATIC.REGEXP.REPLACE.FULL_EMOJI = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
//--------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.STATIC.REGEXP;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//--------------------------------------------------[ S ] - window.b2link.STATIC.UI;

window.b2link.STATIC.UI = window.b2link.STATIC.UI || {};

window.b2link.STATIC.UI.__div = window.document.createElement( "div" );

//--------------------------------------------------;

/**
 * @function
 * @param {String} key
 * @param {Object} [ {HTMLElement}, {Object}, .. ]
 */
window.b2link.STATIC.UI.__add = function( key, o )
{
	if( window.b2link.STATIC.UI[ key ] )
	{
		var s = "window.b2link.STATIC.UI." + key + " already exists";
			console.error( s );
			//alert( s );
			//throw new Error( s );
	}
	else window.b2link.STATIC.UI[ key ] = o;
};

//--------------------------------------------------;

/**
 * @function
 */
window.b2link.STATIC.UI.__all_setPosition__TestMenu = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__all_setPosition__TestMenu():void----------" );
	var t = window.b2link.STATIC.UI;
	var io;
	for( var s in t )
	{
		io = t[ s ];
		if( io[ 1 ] && s != "test_Menu" )
		{
			console.log( io );
			var s = io[ 0 ].style;
			s.left = "250px";
			s.top = "45px";
			s.bottom = "initial";
			s.right = "initial";
			//s.right = "20px";
		}
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__all_setPosition__TestMenu():void----------" );
};

/**
 * @function
 */
window.b2link.STATIC.UI.__all_setPosition_Center_FromParent = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__all_setPosition_Center_FromParent():void----------" );
	var t = window.b2link.STATIC.UI;
	var io;
	for( var s in t )
	{
		io = t[ s ];
		//console.log( io );
		if( io[ 1 ] && s != "test_Menu" )
			window.b2link.element.setPosition_Center_FromParent( io[ 0 ] );
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__all_setPosition_Center_FromParent():void----------" );
};

/**
 * @function
 */
window.b2link.STATIC.UI.__all_setPosition_CenterMiddle_FromParent__NMinus = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__all_setPosition_CenterMiddle_FromParent__NMinus():void----------" );
	var t = window.b2link.STATIC.UI;
	var io;
	for( var s in t ){
		io = t[ s ];
		//console.log( io );
		if( io[ 1 ] && s != "test_Menu" )
			window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus( io[ 0 ] );
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__all_setPosition_CenterMiddle_FromParent__NMinus():void----------" );
};

/**
 * @function
 */
window.b2link.STATIC.UI.__all_setPosition_Center_FromWindow = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__all_setPosition_Center_FromWindow():void----------" );
	var t = window.b2link.STATIC.UI;
	var io;
	for( var s in t )
	{
		io = t[ s ];
		//console.log( io );
		if( io[ 1 ] && s != "test_Menu" )
			window.b2link.element.setPosition_Center_FromWindow( io[ 0 ] );
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__all_setPosition_Center_FromWindow():void----------" );
};

/**
 * @function
 */
window.b2link.STATIC.UI.__allHide = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__allHide():void----------" );
	var t = window.b2link.STATIC.UI;
	var io;
	for( var s in t )
	{
		io = t[ s ];
		//console.log( io );
		if( io[ 1 ] && s != "test_Menu" )
		{
			//console.log( io );
			try
			{
				io[ 1 ].hide();
			}
			catch( er )
			{
				console.error( s + " window.b2link.STATIC.UI.__allHide Error : " + er );
			}
		}
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__allHide():void----------" );
};

/**
 * @function
 */
window.b2link.STATIC.UI.__allShow = function()
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__allShow():void----------" );
	var t = window.b2link.STATIC.UI;
	for( var s in t )
	{
		io = t[ s ];
		if( io[ 1 ] )
		{
			//console.log( io );
			try
			{
				io[ 1 ].show();
				//io[ 1 ].req_Data();
			}
			catch( er )
			{
				console.error( s + " window.b2link.STATIC.UI.__allShow Error : " + er );
			}
		}
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__allShow():void----------" );
};

//--------------------------------------------------;

/**
 * @function
 * @param {String} key
 * @return {Boolean}
 */
window.b2link.STATIC.UI.__checkKey = function( key )
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__checkKey():{Boolean}----------" );
	if( window.b2link.STATIC.UI[ key ] ) return 1;
	return 0;
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__checkKey():{Boolean}----------" );
};

//--------------------------------------------------;

/**
 * @function
 */
window.b2link.STATIC.UI.__list = function(){ this.__status(); };

/**
 * @function
 * @param {String} key
 */
window.b2link.STATIC.UI.__show = function( key )
{
	window.TtwLog.log( "----- [ S ] - window.b2link.STATIC.UI.__show():void----------" );
	var t = window.b2link.STATIC.UI[ key ][ 1 ];
	try
	{
		t.show();
		//t.req_Data();
	}
	catch( e )
	{
		window.b2link_ui.message.error( "Error : " + e );
	}
	window.TtwLog.log( "----- [ E ] - window.b2link.STATIC.UI.__show():void----------" );
};

//--------------------------------------------------;

/**
 * @function
 * @param {String} key
 * @return {*}
 */
window.b2link.STATIC.UI.__getObj = function( key ){ return window.b2link.STATIC.UI[ key ]; };

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------;

//--------------------------------------------------[ E ] - window.b2link.STATIC.UI;

//----------------------------------------------------------------------------------------------------;

//	LOGIC;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.array;

window.b2link.array = window.b2link.array || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.array;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.array_collection;

window.b2link.array_collection = window.b2link.array_collection || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.array_collection;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.array_collection;

//window.b2link.array_collection = window.b2link.array_collection || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.array_collection;


//----------------------------------------------------------------------------------------------------window.b2link.array_collection.g***;

/**
 * JSON Array에서 key, value가 동일한 값을 찾아 해당 JSON Object를 반환
 * @function
 * @param {Array} a JsonArray
 * @param {String} key
 * @param {String} value
 * @return {Object}
 */
window.b2link.array_collection.getObjFromJsonArrayByKeyAndValue = function( a, key, value )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.array_collection.getObjFromJsonArrayByKeyAndValue():{Object}----------" );
	var i=0, iLen=a.length;
	var o = null;
	for( ; i<iLen; ++i )
	{
		o = a[ i ];
		if( o[ key ] == value )
		{
			break;
		}
	}

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.array_collection.getObjFromJsonArrayByKeyAndValue():{Object}----------return o;" );
	return o;
};

//----------------------------------------------------------------------------------------------------window.b2link.array_collection.g***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.common;

window.b2link.common = window.b2link.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.common;


//----------------------------------------------------------------------------------------------------window.b2link.common.c***;

/**
 * Interval을 제거한다.
 * @function
 * @param {Number} n
 */
window.b2link.common.clearInterval=function(n){clearInterval(n)};

/**
 * Interval을 제거한다.
 * 대상 HTMLElement에서 window.b2link.event.INTERVAL_END Event를 Dispatch 한다.
 * @function
 * @param {Number} n
 * @param {HTMLElement} t
 */
window.b2link.common.clearInterval_dispatchEvent=function(n,e){clearTimeout(n),e&&window.b2link.event.dispatchCustomEvent(e,window.b2link.event.INTERVAL_END,n)};

/**
 * Timeout을 제거한다.
 * @function
 * @param {Number} n
 */
window.b2link.common.clearTimeout=function(o){clearTimeout(o)};

/**
 * Timeout을 제거한다.
 * 대상 HTMLElement에서 window.b2link.event.TIMEOUT_END Event를 Dispatch 한다.
 * @function
 * @param {Number} n
 * @param {HTMLElement} t
 */
window.b2link.common.clearTimeout_dispatchEvent=function(n,i){clearTimeout(n),i&&window.b2link.event.dispatchCustomEvent(i,window.b2link.event.TIMEOUT_END,n)};

//----------------------------------------------------------------------------------------------------window.b2link.common.c***;

/**
 * "window.ui_member.public.forgotPassword" 같은 문자열 API를 호출하다.
 * "window.ui_member.public.forgotPassword"은 무조건 {Function} 이여아한다.
 * @function
 * @param {String} api "window.ui_member.public.forgotPassword"와 같은 api 명
 * @param {Array|String} function( a, b ){}  에서 파라메터를 배열로 [ a, b ]로 만들어서 넘긴다. 또는 JSONArray 형태로 "[ a의 값, b의 값 ]" 형태로 넘긴다.
 * @return {*}
 */
window.b2link.common.execStringAPI=function(n,r){if(0==n.indexOf("window.")&&(n=n.replace("window.","")),r)try{"string"==typeof r&&(r=JSON.parse(r))}catch(o){return window.TtwLog.error("window.b2link.common.execStringAPI Error : "+o),null}else r=null;for(var i=n.split("."),e=window,w=0,t=i.length;t>w;++w)e=e[i[w]];return e.apply(window,r)};

//----------------------------------------------------------------------------------------------------window.b2link.common.s***;

/**
 * Interval을 구동한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @return {Number}
 */
window.b2link.common.setInterval=function(n,t){return setInterval(n,t)};

/**
 * Interval을 구동한다.
 * 대상 HTMLElement에서 window.b2link.event.INTERVAL_START Event를 Dispatch 한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @param {HTMLElement} t
 * @return {Number}
 */
window.b2link.common.setInterval_dispatchEvent=function(n,t,e){var i=setInterval(n,t);return e&&window.b2link.event.dispatchCustomEvent(e,window.b2link.event.INTERVAL_START,i),i};

/**
 * Timeout를 구동한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @return {Number}
 */
window.b2link.common.setTimeout=function(n,o){return setTimeout(n,o)};

/**
 * Timeout를 구동한다.
 * 대상 HTMLElement에서 window.b2link.event.TIMEOUT_START Event를 Dispatch 한다.
 * @function
 * @param {Function} fn
 * @param {Number} time
 * @param {HTMLElement} t targetElement
 */
window.b2link.common.setTimeout_dispatchEvent=function(n,t,e){var i=setTimeout(n,t);return e&&window.b2link.event.dispatchCustomEvent(e,window.b2link.event.TIMEOUT_START,i),i};

//----------------------------------------------------------------------------------------------------window.b2link.common.s***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.console;

window.b2link.console = window.b2link.console || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.console;


//----------------------------------------------------------------------------------------------------window.b2link.console.g***;

/**
 * Browser Memory 정보를 반환한다.
 * @function
 * @return {MemoryInfo}
 */
window.b2link.console.getMemory=function(){return console.memory};

//----------------------------------------------------------------------------------------------------window.b2link.console.g***;


//----------------------------------------------------------------------------------------------------window.b2link.console.n***;

/**
 * Log를 Name과 {*}로 발생시킨다.
 * Name으로 Console 창에 경계선을 그어준다.
 * @function
 * @param {String} name
 * @param {*} t
 */
window.b2link.console.nameAndObject=function(n,o){window.TtwLog.timeStamp("---- [ S ] - window.b2link.console.nameAndObject():void----------"),window.TtwLog.timeStamp("---- [ E ] - window.b2link.console.nameAndObject():void----------")};

//----------------------------------------------------------------------------------------------------window.b2link.console.n***;


//----------------------------------------------------------------------------------------------------window.b2link.console.o***;

/**
 * 사용금지 - 2017.01.05
 * @function
 * @param {Object} t
 */
//window.b2link.console.objInfo=function(o){window.TtwLog.timeStamp("---- [ S ] - window.b2link.console.objInfo():void----------"),o.__status(),window.TtwLog.timeStamp("---- [ E ] - window.b2link.console.objInfo():void----------")};

/**
 * @function
 * @param {HTMLElement} t
 */
window.b2link.console.objStyle_BottomLeftRightTop=function(o){window.TtwLog.timeStamp("---- [ S ] - window.b2link.console.objStyle_BottomLeftRightTop():void----------");o.style;window.TtwLog.timeStamp("---- [ E ] - window.b2link.console.objStyle_BottomLeftRightTop():void----------")};

/**
 * @function
 * @param {HTMLElement} t
 */
window.b2link.console.objStyle_LeftTopRightBottom=function(o){window.TtwLog.timeStamp("---- [ S ] - window.b2link.console.objStyle_LeftTopRightBottom():void----------");o.style;window.TtwLog.timeStamp("---- [ E ] - window.b2link.console.objStyle_LeftTopRightBottom():void----------")};

//----------------------------------------------------------------------------------------------------window.b2link.console.o***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.css;

window.b2link.css = window.b2link.css || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.css;

/**
 * @function
 * @param {String} version "1.0.0", "2.0.0"
 * @param {String} id identifier "#element's id", ".class Name" CSS 식별자
 */
window.b2link.css.appendResetCSS=function(e,n){var i=window.b2link.url.getServerURL_WebServer_SCODE("SYS0015"),t=i+"/libs/ResetCSS/"+e+"/"+e+".tcss",S=window.b2link.xhr.reqSync_String(t),l=SUtilTemplateHTML.createHTML("<style>"+S+"</style>");window.document.head.appendChild(l)};

/**
 * @function
 * @param {String} version "1.0.0", "2.0.0"
 * @param {String} id identifier "#element's id", ".class Name" CSS 식별자
 */
window.b2link.css.appendResetCSS_Important=function(e,n){var t=window.b2link.url.getServerURL_WebServer_SCODE("SYS0015"),i=t+"/libs/ResetCSS/"+e+"/"+e+"-important.tcss",r=window.b2link.xhr.reqSync_String(i),S=SUtilTemplateHTML.createHTML("<style>"+r+"</style>");window.document.head.appendChild(S)};

/**
 * @function
 * @param {String} version "1.0.0", "2.0.0"
 * @param {String} id identifier "#element's id", ".class Name" CSS 식별자
 * @return {String}
 */
window.b2link.css.getResetCSS=function(e,r){var n=window.b2link.url.getServerURL_WebServer_SCODE("SYS0015"),S=n+"/libs/ResetCSS/"+e+"/"+e+".tcss",i=window.b2link.xhr.reqSync_String(S);return i.replace(/\<\!\=IDENTIFIER\=\!\>/gi,r)};

/**
 * @function
 * @param {String} version "1.0.0", "2.0.0"
 * @param {String} id identifier "#element's id", ".class Name" CSS 식별자
 * @return {String}
 */
window.b2link.css.getResetCSS_Important=function(e,r){var n=window.b2link.url.getServerURL_WebServer_SCODE("SYS0015"),t=n+"/libs/ResetCSS/"+e+"/"+e+"-important.tcss",i=window.b2link.xhr.reqSync_String(t);return i.replace(/\<\!\=IDENTIFIER\=\!\>/gi,r)};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.dataTransfer;

window.b2link.dataTransfer = window.b2link.dataTransfer || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.dataTransfer;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.date;

window.b2link.date = window.b2link.date || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.date;


//----------------------------------------------------------------------------------------------------window,b2link.date.g***;

/**
 * 함수를 호출한 시점에서 new Date()로 Data 객체를 생성한 후 [ year, month, day, hours, minutes, seconds ]를 생성해서 return 한다.
 * @function
 * @return {Array} [ year, month, day, hour, minute, seconds ]
 */
window.b2link.date.getArrayDateFromNewDate=function(){var e=new Date,t=[e.getFullYear(),e.getMonth()+1,e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds()];return e=null,t};

/**
 * [ year, month, day, hour, minute, seconds ] 형태의 Date 배열을 "-"를 통해 year-month-day-hour-minute-seconds 형태의 문자열로 만들어서 Return 한다.
 * @function
 * @param {Array} a [ year, month, day, hour, minute, seconds ]
 * @return {String} year-month-day-hour-minute-seconds
 */
window.b2link.date.getDateStringFromArrayDate_Dash=function(n){return n.join("-")};

/**
 * @function
 * @return {Object} {"y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50}
 */
window.b2link.date.getObjectDateFromNewDate=function(){var e=new Date,t={y:e.getFullYear(),m:e.getMonth()+1,d:e.getDate(),ho:e.getHours(),mi:e.getMinutes(),se:e.getSeconds()};return e=null,t};

//----------------------------------------------------------------------------------------------------window,b2link.date.g***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.date;

//window.b2link.date = window.b2link.date || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.date;


//----------------------------------------------------------------------------------------------------window,b2link.date.d***;

/**
 * Calculator Date difference
 *
 * @function
 * @param {Object} from {"y" : 2017, "m" : 2,  "d" : 4}
 * @param {Object} to {"y" : 2017, "m" : 2,  "d" : 4}
 * @return {String|Number}
 * @author James
 */
window.b2link.date.dateDifference_object = function( date_obj1, date_obj2 )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateDifference_object():{String}----------" );

	if( date_obj1 === null || date_obj2 === null ) return "";

	if( typeof date_obj1 !== "object" || typeof date_obj2 !== "object" ) return "";

	if( !date_obj1.hasOwnProperty( "y" ) ||
		!date_obj1.hasOwnProperty( "m" ) ||
		!date_obj1.hasOwnProperty( "d" ) )
	{
		return "";
	}

	if( !date_obj1.hasOwnProperty( "y" ) ||
		!date_obj1.hasOwnProperty( "m" ) ||
		!date_obj1.hasOwnProperty( "d" ) )
	{
		return "";
	}

	var d1 = new Date( date_obj1.y, date_obj1.m, date_obj1.d );
	var d2 = new Date( date_obj2.y, date_obj2.m, date_obj2.d );

	var diff_day = d2 - d1;
	var d_time = 1000 * 60 * 60 * 24;

	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateDifference_object():{String}----------return parseInt( diff_day / d_time );" );
	return parseInt( diff_day / d_time );
};

/**
 * String format
 * @function
 * @param {Date} Date
 * @return {Array|Object|String}
 * @author  cpark
 *
 * TODO : Add Parameter to format date
 * ex ) YY/MM/DD HH:MM:SS
 *
 * When d is string type, It only excepts format in "yyyy-mm-dd"
 */
window.b2link.date.dateFormatter = function( d, format )
{
	window.cparkLog.timeStamp( "---- [ S ] - window.b2link.date.dateFormatter():{Array|Object|String}----------" );

	var addZero = window.b2link.date.dateFormatter._addZero;

	if( typeof d === "string" ) d = new Date( d );

	var year = d.getFullYear();
	var month = addZero( d.getMonth() + 1 );
	var day = addZero( d.getDate() );
	var hours = addZero( d.getHours() );
	var minutes = addZero( d.getMinutes() );
	var seconds = addZero( d.getSeconds() );
	var milliSeconds = d.getMilliseconds();

	var formattedDate = null;

	//if( !format ) formattedDate = `${year}-${month}-${day}`;
	if( !format ) formattedDate = year + "-" + month + "-" + day;
	else if( format.toLowerCase() == "array" )
	{
		formattedDate = [];
		formattedDate.push( parseInt( year ) );
		formattedDate.push( parseInt( month ) );
		formattedDate.push( parseInt( day ) );
		formattedDate.push( parseInt( hours ) );
		formattedDate.push( parseInt( minutes ) );
		formattedDate.push( parseInt( milliSeconds ) );
	}
	else if( format.toLowerCase() == "object" )
	{
		formattedDate = {
			y : parseInt( year ), m : parseInt( month ), d : parseInt( day )
			, ho : parseInt( hours ), se : parseInt( minutes ), mi : parseInt( milliSeconds )
		};
	}
	//else if( format.toLowerCase() == "string" ) formattedDate = `${year}-${month}-${day}`;
	//else formattedDate = `${year}-${month}-${day}`;
	else if( format.toLowerCase() == "string" ) formattedDate = year + "-" + month + "-" + day;
	else formattedDate = formattedDate = year + "-" + month + "-" + day;

	window.cparkLog.timeStamp( "---- [ E ] - window.b2link.date.dateFormatter():{Array|Object|String}----------return formattedDate;" );
	return formattedDate;
};
window.b2link.date.dateFormatter._addZero = function( n ){ if( n < 10 ) n = "0" + n; return n; };

/**
 * String format
 * @function
 * @param {Array} Date Array [ 2017, 2, 10 ]
 * @return {String} {yyyy-mm-dd} / {yyyy-mm-dd hh:mi:ss}
 * @author James
 */
window.b2link.date.dateFormatFromDateArray = function( d )
{
	//window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateFormatFromDateArray():{String}----------" );

	if( !Array.isArray( d ) ) return "";

	if( d.length < 3 ) return "";

	var addZero = function( n )
	{
		if( n < 10 ) n = "0" + n;
		return n;
	};

	var year = d[ 0 ];
	var month = addZero( d[ 1 ] );
	var day = addZero( d[ 2 ] );

	//var formattedDate = `${year}-${month}-${day}`;
	var formattedDate = year + "-" + month + "-" + day;

	//window.JamesLog.timeStamp( "---- [ E ] - window.b2link.date.dateFormatFromDateArray():{String}----------return formattedDate;" );
	return formattedDate;
};

/**
 * String format
 * @function
 * @param {Object} Date object { y : 2017, m : 2, d: 3, ho : 3, mi : 4, se : 12}
 * @return {String} {yyyy-mm-dd} / {yyyy-mm-dd hh:mi:ss}
 * @author James
 */
window.b2link.date.dateFormatFromDateObject = function( d )
{
	//window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateFormatFromDateObject():{String}----------" );

	if( d === null ) return "";

	if( typeof d !== "object" ) return "";

	if( !d.hasOwnProperty( "y" ) ) return "";

	var addZero = function( n )
	{
		if( n < 10 )
			n = "0" + n;
		return n;
	};

	var year = d.y;
	var month = addZero( d.m );
	var day = addZero( d.d );

	//var formattedDate = `${year}-${month}-${day}`;
	var formattedDate = year + "-" + month + "-" + day;

	//window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateFormatFromDateObject():{String}----------return formattedDate;" );
	return formattedDate;
};

//----------------------------------------------------------------------------------------------------window,b2link.date.d***;


//----------------------------------------------------------------------------------------------------window,b2link.date.g***;

/**
 * @function
 * @param {String} "2017-01-04"
 * @return {Object} {"y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50}
 */
window.b2link.date.getObjectDateFromDateString_Dash = function( dateString )
{
	////////window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.getObjectDateFromDateString_Dash():{Object}----------" );

	if( !dateString ) return null;

	var date_arr = dateString.split( "-" );

	if( date_arr.length < 3 ) return null;

	var r = { y : parseInt( date_arr[ 0 ] ), m : parseInt( date_arr[ 1 ] ), d : parseInt( date_arr[ 2 ] ), ho : 0, mi : 0, se : 0 };

	date_arr = null;

	////////window.JamesLog.timeStamp( "---- [ E ] - window.b2link.date.getObjectDateFromDateString_Dash():{Object}----------" );
	return r;
};

/**
 * String format
 * @function
 * @param {Date} DateBefore, DateAfter
 * @return {Number}
 * @author  cpark
 *
 * Date format should in Date() object type.
 * ex) '-' or '.' can be used in Date String
 *	 The order of date type is not concerned. (2018.01.01 equals 01.01.2018)
 * var timeDifference = window.b2link.util.getTimeDifferenceInMills(new Date("2018-12-12"), new Date("2020-01-01"));
 */
window.b2link.date.getTimeDifferenceInMills = function( date1, date2 )
{
	window.cparkLog.timeStamp( "---- [ S ] - window.b2link.date.getTimeDifferenceInMills():{Number}----------" );

	var dm1 = date1.getTime();
	var dm2 = date2.getTime();

	window.cparkLog.timeStamp( "---- [ E ] - window.b2link.date.getTimeDifferenceInMills():{Number}----------return dm2 - dm1;" );
	return dm2 - dm1;
};

//----------------------------------------------------------------------------------------------------window,b2link.date.g***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.debug;

window.b2link.debug = window.b2link.debug || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.debug;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.dom;

window.b2link.dom = window.b2link.dom || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.dom;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.element;

window.b2link.element = window.b2link.element || {};

//--------------------------------------------------window.b2link.element.a***;

/**
 * target HTMLElement를 removeChild할 시에 scrollTop를 기억한다.
 * target HTMLElement를 appendChild할 시에 기억해놓은 scrollTop를 적용한다.
 * 사용이 끝난 HTMLElement는 window.b2link.element.removeEvent_RestoreScrollTopByDomNodeInserted로 이벤트를 제거 해준다.
 * @function
 * @param {HTMLElement} domNodeElement HTMLElement
 * @param {HTMLElement} evtElement HTMLElement
 */
window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted=function(e,o){e.__targetElement__RestoreScrollTopByDomNodeInserted__domNodeElement=e,e.__targetElement__RestoreScrollTopByDomNodeInserted__evtElement=o,e.removeEventListener("DOMNodeInserted",window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeInserted,!1),e.removeEventListener("DOMNodeRemoved",window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeRemoved,!1),e.addEventListener("DOMNodeInserted",window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeInserted,!1,0,!0),e.addEventListener("DOMNodeRemoved",window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeRemoved,!1,0,!0)},window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeInserted=function(e){var o=e.currentTarget.__targetElement__RestoreScrollTopByDomNodeInserted__evtElement;o.scrollTop=o.__scrollTop},window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeRemoved=function(e){var o=e.currentTarget.__targetElement__RestoreScrollTopByDomNodeInserted__evtElement;o.scrollTop?o.__scrollTop=o.scrollTop:!o.scrollTop&&o.__scrollTop&&(o.scrollTop=o.__scrollTop)};

/**
 * parentElement에 element 객체를 추가한다.
 * parentElement._appendChild 함수가 존재하면 사용하고 없으면 window.b2link.element.appendChild를 사용한다.
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 */
window.b2link.element._appendChild=function(e,n){try{if(!e._appendChild)return void window.b2link.element.appendChild(e,n);e._appendChild(n);window.b2link.element.getID_Or_ClassName}catch(i){window.b2link_ui.message.error("window.b2link.element._appendChild Error : "+i)}};

/**
 * parentElement에 element 객체를 추가한다.
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 */
window.b2link.element.appendChild=function(e,n){try{e.appendChild(n);var i=window.b2link.element.getID_Or_ClassName;window.TtwLog.timeStamp(i(e)+"에 "+i(n)+"를 추가 함")}catch(d){window.b2link_ui.message.error("window.b2link.element.appendChild Error : "+d)}};

/**
 * parentElement에 element 객체를 추가한다.
 * 추가한 객체를 parentElement의 정 한가운데에 배치한다.
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 * @param {Number} time 1000이 1초 default 300
 */
window.b2link.element.appendChild_SetPositionCenterMiddle=function(e,n,i){if(e==window.b2link.ui_modal.modal_content)return void window.b2link_ui.message.error("Modal에서는 이 API를 사용할수 없다.");try{window.b2link.element.appendChild_SetPositionCenterMiddle._timeout0=i?i:window.b2link.element.appendChild_SetPositionCenterMiddle._timeout0,window.b2link.element.appendChild(e,n),window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus(n);var t=function(){window.TtwLog.warn(t._count++),window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus(n),n.offsetLeft>=0&&n.offsetTop>=0||t()};t._count=0,setTimeout(t,window.b2link.element.appendChild_SetPositionCenterMiddle._timeout0)}catch(o){window.b2link_ui.message.error("window.b2link.element.appendChild_SetPositionCenterMiddle Error : "+o)}},window.b2link.element.appendChild_SetPositionCenterMiddle._timeout0=50,window.b2link.element.appendChild_SetPositionCenterMiddle._evt=function(e){var n=e.target,i=function(){window.TtwLog.warn(i._count++),window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus(n),n.offsetLeft>0&&n.offsetTop>0||i()};i._count=0,setTimeout(i,window.b2link.element.appendChild_SetPositionCenterMiddle._timeout0)},window.b2link.element.appendChild_SetPositionCenterMiddle._evt._count=0;

//--------------------------------------------------window.b2link.element.a***;


//--------------------------------------------------window.b2link.element.c***;

/**
 * Element.value 값을 ""으로 초기화 한다.
 * @function
 * @param {Object} t HTMLElement들이 존재하는 Object
 * @param {*} defaultValue ""
 * @return {Object}
 */
window.b2link.element.clearElementsValue=function(e,a){a=a||"";var t;try{for(var l in e)if(t=e[l],t.tagName)window.TtwLog.timeStamp("className0 : "+t.className),t.value="";else for(var n in t)window.TtwLog.timeStamp("className1 : "+t[n].className),t[n].value=""}catch(i){window.b2link_ui.message.error("window.b2link.element.clearElementsValue Error : "+i)}return e};

//--------------------------------------------------window.b2link.element.c***;


//--------------------------------------------------window.b2link.element.d***;

/**
 * window.b2link.element.dispose
 * element에 js 객체가 존재 할 시에 t.js.dispose() 호출하여 element와 js객체를 제거한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.b2link.element.dispose=function(e){e.js?e.js.dispose():(window.b2link.element.removeChildFromParentElement(e),e.innerHTML="",e=null)};

/**
 * window.b2link.element.disposeAllChildren
 * element의 children[ i ]에 js 객체가 존재 할 시에 t.children[ i ].js.dispose() 호출하여 element와 js객체를 제거한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 */
(function(){var _f1=window.b2link.element.dispose;window.b2link.element.disposeAllChildren=function(e){for(var l,n=window.b2link.element.disposeAllChildren,i=e.children,d=0,o=i.length;o>d;++d)l=i[0],l.children.length&&n(l),_f1(l)};})();

//--------------------------------------------------window.b2link.element.d***;


//--------------------------------------------------window.b2link.element.g***;

/**
 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 0번째 객체를 반환한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {String} className
 */
window.b2link.element.getElementByClassName=function(e,n){return e.getElementsByClassName(n)[0]};

/**
 * targetElement의 ChildNodes중 입력한 className과 같은 자식 객체를 검색하여 모든 객체를 반환한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {String} className
 * @return {Array}
 */
window.b2link.element.getElementsByClassName=function(e,n){return e.getElementsByClassName(n)};

/**
 * target Object 구조 그대로 HTMLElement Reference를 HTMLElement value로 만들어서 리턴한다.
 * @function
 * @param {Object} t HTMLElement들이 존재하는 Object
 * @return {Object}
 */
window.b2link.element.getElementsValue=function(e){var t,n={};try{for(var a in e)if(t=e[a],t.tagName)window.TtwLog.timeStamp("className0 : "+t.className),n[a]=t.value;else{n[a]={};for(var l in t)window.TtwLog.timeStamp("className1 : "+t[l].className),n[a][l]=t[l].value}}catch(i){window.b2link_ui.message.error("window.b2link.element.getElementsValue Error : "+i)}return n};

/**
 * Element에 id가 존재할 시 id를 돌려주고 id가 없을시 classList[ 0 ]를 돌려준다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @return {String}
 */
window.b2link.element.getID_Or_ClassList0=function(i){return i.id&&""!=i.id?i.id:""==i.classList[0]?i.tagName:i.classList[0]};

/**
 * Element에 id가 존재할 시 id를 돌려주고 id가 없을시 className를 돌려준다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @return {String}
 */
window.b2link.element.getID_Or_ClassName=function(e){return e.id&&""!=e.id?e.id:""==e.className?e.tagName:e.className};

//--------------------------------------------------window.b2link.element.g***;


//--------------------------------------------------window.b2link.element.h***;

/**
 * 대상 Element를 숨긴다.
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.b2link.element.hide=function(n){n.style.display="none"};

//--------------------------------------------------window.b2link.element.h***;


//--------------------------------------------------window.b2link.element.i***;

/**
 * element에 Data를 "list_item_value" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array|Object|*} data
 */
window.b2link.element.injectValueForListItem=function(e,i){e.list_item_value=i};

/**
 * data.$idx = idx를 반영한다.
 * element에 Data를 "list_item_value" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array|Object|*} data
 * @param {uint} idx
 */
window.b2link.element.injectValueForListItemAndIDX=function(e,i,n){i.$idx=n,e.list_item_value=i};

/**
 * element에 children 객체에 주어진 Array Data[ i ]를 "list_item_value" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array} data
 */
!function(){var e=window.b2link.element.injectValueForListItem;window.b2link.element.injectValueForListItems=function(n,t){var l;if(n.children[0]&&"STYLE"==n.children[0].tagName){l=[];for(var i=n.children,r=0,a=i.length;a>r;++r)"STYLE"!=i[r].tagName&&l.push(i[r])}else l=n.children;for(var r=0,a=l.length>t.length?t.length:l.length;a>r;++r)e(l[r],t[r])}}();

/**
 * $data에 $idx property를 생성해서 데이터의 index 값을 주입한다.
 * element에 children 객체에 주어진 Array Data[ i ]를 "list_item_value" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array} data
 */
!function(){var e=window.b2link.element.injectValueForListItem;window.b2link.element.injectValueForListItemsAndIDX=function(n,t){var i;if(n.children[0]&&"STYLE"==n.children[0].tagName){i=[];for(var l=n.children,r=0,a=l.length;a>r;++r)"STYLE"!=l[r].tagName&&i.push(l[r])}else i=n.children;for(var r=0,a=i.length>t.length?t.length:i.length;a>r;++r)t[r].$idx=r,e(i[r],t[r])},window.b2link.element.injectValueForListItemsAndID=window.b2link.element.injectValueForListItemsAndIDX}();

//--------------------------------------------------window.b2link.element.i***;


//--------------------------------------------------window.b2link.element.m***;

/**
 * 대상 Element를 마우스 인식 못하게 만든다.
 *
 * @function
 * @param {HTMLElement} t
 * @return {HTMLElement}
 */
window.b2link.element.mouseDisable=SUtilDisObj.mouseDisable;

/**
 * 대상 Element를 마우스 인식 못하게 만든다.
 *
 * @function
 * @param {String} id htmlElementID
 * @return {HTMLElement}
 */
window.b2link.element.mouseDisable__ID=SUtilDisObj.mouseDisable__ID;

/**
 * 대상 Element를 마우스 인식 하게 만든다.
 *
 * @function
 * @param {HTMLElement} t
 * @return {HTMLElement}
 */
window.b2link.element.mouseEnable=SUtilDisObj.mouseEnable;

/**
 * 대상 Element를 마우스 인식 하게 만든다.
 *
 * @function
 * @param {String} id htmlElementID
 * @return {HTMLElement}
 */
window.b2link.element.mouseEnable__ID=SUtilDisObj.mouseEnable__ID;

//--------------------------------------------------window.b2link.element.m***;

//--------------------------------------------------window.b2link.element.r***;

/**
 * 대상 Element의 모든 자식 객체를 제거한다.
 * @function
 * @param {HTMLElement} p parent HTMLElement
 */
window.b2link.element.removeAllChildren=function(e){try{for(var r=window.b2link.element.removeChild,n=e.children,l=0,o=n.length;o>l;++l)r(e,n[0])}catch(i){window.TtwLog.error("window.b2link.element.removeAllChildren Error : "+i)}};

/**
 * parentElement에서 childElement를 제거한다.
 * 제거 로그를 id, class를 기반으로 출력한다.
 *
 * @function
 * @param {HTMLElement} p parent HTMLElement
 * @param {HTMLElement} c element HTMLElement
 */
window.b2link.element.removeChild=function(e,n){try{e.removeChild(n);window.b2link.element.getID_Or_ClassName}catch(w){window.TtwLog.warn("warn : "+w)}};

/**
 * 해당 Element의 parentElement에서 제거 후 반환한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @return {HTMLElement}
 */
window.b2link.element.removeChildFromParentElement=function(e){try{return e.parentElement.removeChild(e)}catch(r){window.TtwLog.error("window.b2link.element.removeChildFromParentElement Error : "+r)}};

/**
 * window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted로 추가한 이벤트를 제거한다.
 * @param {HTMLElement} domNodeElement
 */
window.b2link.element.removeEvent_RestoreScrollTopByDomNodeInserted=function(e){var o;o=e?e:e.__targetElement__RestoreScrollTopByDomNodeInserted__domNodeElement,o||window.b2link_ui.error.message("window.b2link.element.removeEvent_RestoreScrollTopByDomNodeInserted Error : 이벤트를 제거할 대상 객체가 존재하지 않음"),o.removeEventListener("DOMNodeInserted",window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeInserted,!1),o.removeEventListener("DOMNodeRemoved",window.b2link.element.addEvent_RestoreScrollTopByDomNodeInserted._evt_DOMNodeRemoved,!1)};

/**
 * t HTMLElement를 el HTMLElement와 교체한다.
 * @function
 * @param {HTMLElement} t
 * @param {HTMLElement} el
 * @return {HTMLElement} el HTMLElement를 반환한다.
 */
window.b2link.element.replaceElement=function(e,n){try{e.parentElement.replaceChild(n,e);var t=window.b2link.element.getID_Or_ClassName;return window.TtwLog.timeStamp(t(e)+"를 "+t(n)+"로 교체 함"),n}catch(r){window.TtwLog.error("window.b2link.element.replaceElement Error : "+r)}};

/**
 * t HTMLElement를 html 문자열로 생성한 HTMLElement와 교체한다.
 * @function
 * @param {HTMLElement} t
 * @param {String} html
 * @return {HTMLElement} html로 생성된 HTMLElement를 반환한다.
 */
window.b2link.element.replaceElement__HTML=function(e,n){try{return window.b2link.element.replaceElement(e,window.b2link.html.createHTMLElement(n))}catch(l){window.TtwLog.error("window.b2link.element.replaceElement__HTML Error : "+l)}};

/**
 * t HTMLElement를 URL로 불러온 html 문자열로 생성한 HTMLElement와 교체한다.
 * @function
 * @param {HTMLElement} t
 * @param {String} htmlURL
 * @return {HTMLElement} html로 생성된 HTMLElement를 반환한다.
 */
window.b2link.element.replaceElement__HTML_URL=function(e,n){try{return window.b2link.element.replaceElement__HTML(e,window.b2link.xhr.reqSync_String(n))}catch(r){window.TtwLog.error("window.b2link.element.replaceElement__HTML_URL Error : "+r)}};

/**
 * target HTMLElement를 removeChild할 시에 scrollTop를 기억한다.
 * target HTMLElement를 appendChild할 시에 기억해놓은 scrollTop를 적용한다.
 * 1회성이다.
 * 1번 복원하고 이벤트는 자동으로 제거된다.
 * @function
 * @param {HTMLElement} domNodeElement HTMLElement
 * @param {HTMLElement} evtElement HTMLElement
 */
window.b2link.element.restoreScrollTopByDomNodeInserted=function(e,o){var l=function(n){e.removeEventListener("DOMNodeInserted",l,!1),e.removeEventListener("DOMNodeRemoved",r,!1),o.scrollTop=o.__scrollTop},r=function(e){o.scrollTop?o.__scrollTop=o.scrollTop:!o.scrollTop&&o.__scrollTop&&(o.scrollTop=o.__scrollTop)};e.addEventListener("DOMNodeInserted",l,!1,0,!0),e.addEventListener("DOMNodeRemoved",r,!1,0,!0)};

//--------------------------------------------------window.b2link.element.r***;

//--------------------------------------------------window.b2link.element.s***;

/**
 * TBody의 모든 tr의 모든 th의 className을 변경한다.
 * @function
 * @param {HTMLElement} tbody HTMLElement
 */
window.b2link.element.setClassName__tbody_tr_td=function(e,n){for(var l=e.children,t=0,r=l.length;r>t;++t)for(var a=l[t].children,d=0,i=a.length;i>d;++d)a[d].className=n};

/**
 * THead의 모든 tr의 모든 th의 className을 변경한다.
 * @function
 * @param {HTMLElement} thead HTMLElement
 */
window.b2link.element.setClassName__thead_tr_th=function(e,t){for(var n=e.children,l=0,_=n.length;_>l;++l)for(var s=n[l].children,a=0,i=s.length;i>a;++a)s[a].className=t},window.b2link.element.setClassName__tbody_tr_th=function(e,t){window.b2link_ui.message.error("window.b2link.element.setClassName__tbody_tr_th -> window.b2link.element.setClassName__thead_tr_th로 교체바람"),window.b2link.element.setClassName__thead_tr_th(e,t)};

/**
 * 대상 HTMLElement의 left를 부모 HTMLElement 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * top, bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Object} boolList
 * <code>
	{
		left : 0 or 1
		, top : 0 or 1
		, bottom : 0 or 1
		, right : 0 or 1
	}
 * </code>
 */
window.b2link.element.setPosition_Center_FromParent=function(t,o){var e=t.parentElement.clientWidth,i=t.clientWidth,n=i/2,a=e/2,r=t.style;r.left=a-n+"px",o?(o.top&&(r.top="auto"),o.bottom&&(r.bottom="auto"),o.right&&(r.right="auto")):(r.top="auto",r.bottom="auto",r.right="auto")};

/**
 * 대상 HTMLElement의 left를 Window 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * top, bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Object} boolList
 * <code>
	{
		left : 0 or 1
		, top : 0 or 1
		, bottom : 0 or 1
		, right : 0 or 1
	}
 * </code>
 */
 window.b2link.element.setPosition_Center_FromWindow=function(t,o){var e=t.parentElement.clientWidth,i=(t.parentElement.clientHeight,t.clientWidth),n=(t.clientHeight,i/2),l=e/2,a=t.style;a.left=l-n+"px",o?(o.top&&(a.top="auto"),o.bottom&&(a.bottom="auto"),o.right&&(a.right="auto")):(a.top="auto",a.bottom="auto",a.right="auto")};

 /**
 * 대상 HTMLElement의 left를 Body 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 Body 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromBody=function(t){var e=window.document.body,i=e.clientWidth,o=e.clientHeight,n=t.clientWidth,d=t.clientHeight,l=n/2,c=d/2,h=i/2,m=o/2,r=t.style;r.left=h-l+"px",r.top=m-c+"px",r.bottom="auto",r.right="auto"};

/**
 * 대상 HTMLElement의 left를 Body 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 Body 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * 이동 해야할 위치가 -일 경우는 left 또는 top은 "auto"가 된다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
//window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus=function(t){var e=window.document.body,i=e.clientWidth,o=e.clientHeight,n=t.clientWidth,l=t.clientHeight,d=n/2,u=l/2,a=i/2,c=o/2,h=t.style,r=a-d;r>0?h.left=r+"px":h.left="auto";var m=c-u;m>0?h.top=m+"px":h.top="auto",h.bottom="auto",h.right="auto"};
window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus=function(t){var e=window.document.body,i=e.clientWidth,n=e.clientHeight,o=t.clientWidth,l=t.clientHeight,d=o/2,c=l/2,u=i/2,a=n/2,h=t.style,p=u-d;p>0?h.left=p+"px":h.left="auto";var r=a-c;r>0?h.top=r+"px":h.top="auto"};

window.b2link.element.setPosition_CenterMiddle_FromBody__NMinus_HS=function(t,e,o){var i=window.document.body,n=i.clientWidth,d=i.clientHeight,l=e,u=o,_=l/2,a=u/2,c=n/2,p=d/2,r=t.style,s=c-_;s>0?r.left=s+"px":r.left="auto";var w=p-a;w>0?r.top=w+"px":r.top="auto"};

/**
 * 대상 HTMLElement의 left를 부모 HTMLElement 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 부모 HTMLElement 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromParent=function(t){var e=t.parentElement.clientWidth,n=t.parentElement.clientHeight,i=t.clientWidth,l=t.clientHeight,o=i/2,r=l/2,a=e/2,c=n/2,d=t.style;d.left=a-o+"px",d.top=c-r+"px",d.bottom="auto",d.right="auto"};

/**
 * 대상 HTMLElement의 left를 부모 HTMLElement 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 부모 HTMLElement 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * 이동 해야할 위치가 -일 경우는 left 또는 top은 "auto"가 된다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
//window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus=function(t){var e=t.parentElement.clientWidth,n=t.parentElement.clientHeight,i=t.clientWidth,o=t.clientHeight,l=i/2,a=o/2,r=e/2,p=n/2,u=t.style,c=r-l;c>0?u.left=c+"px":u.left="auto";var d=p-a;d>0?u.top=d+"px":u.top="auto",u.bottom="auto",u.right="auto"};
window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus=function(t,e){var o=t.parentElement.clientWidth,i=t.parentElement.clientHeight,n=t.clientWidth,l=t.clientHeight,a=n/2,r=l/2,p=o/2,u=i/2,h=t.style,m=p-a;m>0?h.left=m+"px":h.left="auto";var c=u-r;c>0?h.top=c+"px":h.top="auto",e&&(e.top&&(h.top="auto"),e.bottom&&(h.bottom="auto"),e.right&&(h.right="auto"))};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

/**
 * 대상 HTMLElement의 left를 Window 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 Window 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromWindow=function(t){var e=t.parentElement.clientWidth,i=t.parentElement.clientHeight,n=t.clientWidth,l=t.clientHeight,o=n/2,d=l/2,r=e/2,a=i/2,c=t.style;c.left=r-o+"px",c.top=a-d+"px",c.bottom="auto",c.right="auto"};

/**
 * 대상 HTMLElement의 left를 Window 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 Window 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * 이동 해야할 위치가 -일 경우는 left 또는 top은 "auto"가 된다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromWindow__NMinus=function(t){var e=window.screen.width,i=window.screen.height,o=t.clientWidth,n=t.clientHeight,d=o/2,l=n/2,w=e/2,r=i/2,a=t.style,h=w-d;h>0?a.left=h+"px":a.left="auto";var s=r-l;s>0?a.top=s+"px":a.top="auto",a.bottom="auto",a.right="auto"};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} left
 * @param {Number} bottom
 */
window.b2link.element.setPosition_LeftBottom=function(t,o,e){var i=t.style;i.bottom=e+"px",i.left=o+"px",i.right="",i.top="",window.b2link.console.objStyle_LeftTopRightBottom(t)};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} left
 * @param {Number} top
 */
window.b2link.element.setPosition_LeftTop=function(t,o,e){var i=t.style;i.bottom="",i.left=o+"px",i.right="",i.top=e+"px",window.b2link.console.objStyle_LeftTopRightBottom(t)};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} right
 * @param {Number} bottom
 */
window.b2link.element.setPosition_RightBottom=function(t,o,i){var e=t.style;e.bottom=i+"px",e.left="",e.right=o+"px",e.top="",window.b2link.console.objStyle_LeftTopRightBottom(t)};

/**
 * @function
 * @param {HTMLElement} t HTML Element
 * @param {Number} right
 * @param {Number} top
 */
window.b2link.element.setPosition_RightTop=function(t,o,i){var e=t.style;e.bottom="",e.left="",e.right=o+"px",e.top=i+"px",window.b2link.console.objStyle_LeftTopRightBottom(t)};

/**
 * 대상 Element를 화면에 보여준다.
 * p(parentElement)를 넣으면 appendChild 한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {HTMLElement} p HTMLElement
 */
window.b2link.element.show=function(e,n){e.style.display="",0==e.style.opacity&&(e.style.opacity=1),n?n.appendChild(e):e.parentElement&&e.parentElement.appendChild(e)};

/**
 * 대상 Element를 화면에 보여준다.
 * @function
 * @param {HTMLElement} t HTMLElement
 */
window.b2link.element.switchShowHide=function(i){var l=i.style;i.hasOwnProperty("__originalDisplay")||(i.__originalDisplay=l.display);try{i.__originalDisplay==l.display?l.display="none":l.display=i.__originalDisplay}catch(n){window.TtwLog.error("window.b2link.element.switchShowHide Error : "+n)}};

//--------------------------------------------------window.b2link.element.s***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.element;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.element;

//window.b2link.element = window.b2link.element || {};


//--------------------------------------------------window.b2link.element.a***;
//--------------------------------------------------window.b2link.element.a***;


//--------------------------------------------------window.b2link.element.c***;
//--------------------------------------------------window.b2link.element.c***;


//--------------------------------------------------window.b2link.element.g***;

/**
 * targetElement의 모든 form elements들을 반환한다.
 * @function
 * @param {Object} t
 * @param {HTMLElement} el HTMLElement
 * @return {Object}
 */
(function(){
	window.b2link.element.getFormElements = function( t, el )
	{
		//window.AlexLog.timeStamp( "---- [ S ] - window.b2link.element.getFormElements():{Object}----------" );

		var t0 = window.b2link.element.getFormElements;
		var f0 = t0._f0;
		var f1 = t0._f1;

		t = t ? t : {};
		var a = t0._a0;

		var io;
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i )
		{
			io = a[ i ];

			f0( t, el.getElementsByTagName( io ) );
		};

		f1( t, el );

		//window.AlexLog.timeStamp( "---- [ E ] - window.b2link.element.getFormElements():{Object}----------" );

		return t;
	};

	var _ = window.b2link.element.getFormElements;
		_._a0 = [ "SELECT", "TEXTAREA", "BUTTON", "DATALIST", "KEYGEN", "OUTPUT" ];
		_._f0 = function( t, a )
		{
			var io;
			var i=0, iLen=a.length;
			for( ; i<iLen; ++i )
			{
				io = a [ i ];
				t[ io.classList[ 0 ] ] = io;
			}
		};

		_._f1 = function( t, el )
		{
			var a = el.getElementsByTagName( "INPUT" );

			var io;
			var i=0, iLen=a.length;
			for( ; i<iLen; ++i )
			{
				io = a [ i ];
				if( io.type == "radio" )
				{
					if( !t[ io.classList[ 0 ] ] )
					{
						t[ io.classList[ 0 ] ] = [];
						t[ io.classList[ 0 ] ].value = null;
					}

					t[ io.classList[ 0 ] ].push( io );

					if( io.checked )
					{
						t[ io.classList[ 0 ] ].value = io.value;
					}
				}
				else
				{
					t[ io.classList[ 0 ] ] = io;
				}
			}
		};
})();

/**
 * targetElement의 value를 반환한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @return {Object} {}
 */
(function(){
	window.b2link.element.getValueOfElement = function( t )
	{
		//window.AlexLog.timeStamp( "---- [ S ] - window.b2link.element.getValueOfElement():{Array}----------" );

		var key = null;
		try
		{
			key = ( t.tagName == "INPUT" ) ? "_fn_" + t.type : "_fn_" + t.tagName.toLowerCase();
		}
		catch( e )
		{
			key = ( t[ 0 ].tagName == "INPUT" ) ? "_fn_" + t[ 0 ].type : "_fn_" + t[ 0 ].tagName.toLowerCase();
		}
		var r = window.b2link.element.getValueOfElement[ key ]( t );

		//window.AlexLog.timeStamp( "---- [ S ] - window.b2link.element.getValueOfElement():{Array}----------" );

		return r;
	};

	var _ = window.b2link.element.getValueOfElement;
		_[ "_fn_button"  ] = function( t ){ return t.value; };
		_[ "_fn_color"   ] = function( t ){ return t.value; };
		_[ "_fn_email"   ] = function( t ){ return t.value; };
		_[ "_fn_file"    ] = function( t ){ return t.value; };
		_[ "_fn_hidden"  ] = function( t ){ return t.value; };
		_[ "_fn_image"   ] = function( t ){ return t.value; };
		_[ "_fn_month"   ] = function( t ){ return t.value; };
		_[ "_fn_number"  ] = function( t ){ return t.value; };
		_[ "_fn_password"] = function( t ){ return t.value; };
		_[ "_fn_range"   ] = function( t ){ return t.value; };
		_[ "_fn_reset"   ] = function( t ){ return t.value; };
		_[ "_fn_search"  ] = function( t ){ return t.value; };
		_[ "_fn_submit"  ] = function( t ){ return t.value; };
		_[ "_fn_tel"     ] = function( t ){ return t.value; };
		_[ "_fn_text"    ] = function( t ){ return t.value; };
		_[ "_fn_time"    ] = function( t ){ return t.value; };
		_[ "_fn_url"     ] = function( t ){ return t.value; };
		_[ "_fn_week"    ] = function( t ){ return t.value; };
		_[ "_fn_date"    ] = function( t ){ return t.value; };
		_[ "_fn_datetime"] = function( t ){ return t.value; };
		_[ "_fn_datetime-local" ] = function( t ){ return t.value; };

		_[ "_fn_checkbox" ] = function( t ){ return t.checked; };

		_[ "_fn_radio" ] = function( t ){
			if( t.length > 0 )
			{
				var i=0, iLen=t.length;
				var v = null;
				for( ; i<iLen; ++i )
				{
					if( t[ i ].checked )
					{
						v = t[ i ].value;
						break;
					}
				}
			}
			else
			{
				v = t.value;
			}
			return v;
		};

		_[ "_fn_textarea" ] = function( t ){ return t.value; };
		_[ "_fn_select"   ] = function( t ){ return t.value; };
		_[ "_fn_button"   ] = function( t ){ return t.value; };
		_[ "_fn_datalist" ] = function( t ){ return t.value; };
		_[ "_fn_output"   ] = function( t ){ return t.value; };
		_[ "_fn_keygen"   ] = function( t ){ return t.value; };
})();

//--------------------------------------------------window.b2link.element.g***;


//--------------------------------------------------window.b2link.element.s***;

/**
 * targetElement의 value를 set 한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {String} value
 */
(function(){
	window.b2link.element.setValueOfElement = function( t, value )
	{
		//window.AlexLog.timeStamp( "---- [ S ] - window.b2link.element.setValueOfElement():void----------" );

		var key = ( t.tagName == "INPUT" ) ? "_fn_" + t.type : "_fn_" + t.tagName.toLowerCase();
		var r = window.b2link.element.setValueOfElement[ key ]( t, value );

		//window.AlexLog.timeStamp( "---- [ E ] - window.b2link.element.setValueOfElement():void----------" );
	};

	var _ = window.b2link.element.setValueOfElement;
		_[ "_fn_button"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_color"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_email"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_file"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_hidden"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_image"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_month"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_number"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_password" ] = function( t, value ){ t.value = value; };
		_[ "_fn_range"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_reset"    ] = function( t, value ){ t.value = value; };
		_[ "_fn_search"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_submit"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_tel"      ] = function( t, value ){ t.value = value; };
		_[ "_fn_text"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_time"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_url"      ] = function( t, value ){ t.value = value; };
		_[ "_fn_week"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_date"     ] = function( t, value ){ t.value = value; };
		_[ "_fn_datetime" ] = function( t, value ){ t.value = value; };
		_[ "_fn_datetime-local" ] = function( t, value ){ t.value = value; };

		_[ "_fn_checkbox" ] = function( t, value ){ t.checked = Boolean(value); };

		_[ "_fn_radio" ] = function( a, value ){
			var i=0, iLen=a.length;

			if( !Boolean(value) ){ a.value = null; }

			for( ; i<iLen; ++i )
			{
				if( a[i].value == value ){
					a[i].checked = true;
					a.value = value;
				}
				else
				{
					a[i].checked = false;
				}
			}
		};

		_[ "_fn_textarea" ] = function( t, value ){ t.value = value; };
		_[ "_fn_select"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_datalist" ] = function( t, value ){ t.value = value; };
		_[ "_fn_output"   ] = function( t, value ){ t.value = value; };
		_[ "_fn_keygen"   ] = function( t, value ){ t.value = value; };
})();

//--------------------------------------------------window.b2link.element.s***;


//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.element;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_div;

window.b2link.el_div = window.b2link.el_div || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_div;


//----------------------------------------------------------------------------------------------------window.b2link.el_div.c***;

/**
 * 받은 데이터를 div.children 들의 innerText에 반영한다.
 * 데이터[ i ]의 아이템들을 children[ i ].list_item_value에 inject 한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_div.change_child=function(n,e){for(var i,l=window.b2link.element.injectValueForListItemAndIDX,d=n.children,o=0,t=d.length>e.length?e.length:d.length;t>o;++o)if(i=d[o],dio=e[o],l(i,dio,o),dio){var r="";for(var h in dio)r+=dio[h];i.innerText=r}else i.innerText=""};

//----------------------------------------------------------------------------------------------------window.b2link.el_div.c***;


//----------------------------------------------------------------------------------------------------window.b2link.el_div.p***;

/**
 * div.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML에 + 한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_div.push_child=function(r,i){try{r.innerHTML+=SUtilString.applyBraceStrFromArray(r.__originalInnerHTML,i)}catch(n){window.TtwLog.error("window.b2link.el_div.push_child Error : "+n)}};

//----------------------------------------------------------------------------------------------------window.b2link.el_div.p***;


//----------------------------------------------------------------------------------------------------window.b2link.el_div.u***;

/**
 * div.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML 앞으로 + 한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_div.unshift_child=function(i,n){try{i.innerHTML=SUtilString.applyBraceStrFromArray(i.__originalInnerHTML,n)+i.innerHTML}catch(r){window.TtwLog.error("window.b2link.el_div.unshift_child Error : "+r)}};

//----------------------------------------------------------------------------------------------------window.b2link.el_div.u***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_input;

window.b2link.el_input = window.b2link.el_input || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_input;


//----------------------------------------------------------------------------------------------------window.b2link.el_input.g***;



//----------------------------------------------------------------------------------------------------window.b2link.el_input.g***;


//----------------------------------------------------------------------------------------------------window.b2link.el_input.s***;



//----------------------------------------------------------------------------------------------------window.b2link.el_input.s***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_input;

//window.b2link.el_input = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_input;


//----------------------------------------------------------------------------------------------------window.b2link.el_input.g***;

/**
 * @function
 * @param {HTMLElement} t el_div
 * @param {String} className
 * @return {Object}
 */
window.b2link.el_input.getInputRadioDataFromClassName = function( t, className )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.el_input.getInputRadioDataFromClassName():{Object}----------" );

	var a = t.getElementsByClassName( "className" );
	var radio = null;

	var i=0, iLen=a.length;
	var radio = null;
	var o = null;
	for( ; i<iLen; ++i )
	{
		o = a[ i ];
		if( o.tagName == "INPUT" && o.checked )
		{
			radio = o;
			break;
		}
	}

	var d = null;

	if( radio )
	{
		d = {};
		d.checked = true;
		d.title = o.title ? o.title : "";
		d.value = o.value ? o.value : "";
		d.value = o.className ? o.className : "";
	}

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.el_input.getInputRadioDataFromClassName():{Object}----------return d;" );
	return d;
};

(function(){
	/**
	 * @function
	 * @param {HTMLElement} t INPUT
	 * @return {Object} {}
	 */
	window.b2link.el_input.getInputValueFromInputType = function( t )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_input.getInputValueFromInputType():{Object}----------" );

		/*/
		try
		{
			var r = window.b2link.el_input.getInputValueFromInputType[ "_fn_" + t.type ]( t );
		}
		catch( er )
		{
			console.error( "window.b2link.el_input.getInputValueFromInputType Error : " + er );
		}
		/*/
		var r = window.b2link.el_input.getInputValueFromInputType[ "_fn_" + t.type ]( t );
		//*/

		window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_input.getInputValueFromInputType():{Object}----------return r;" );
		return r;
	};
	var _ = window.b2link.el_input.getInputValueFromInputType;
		_._fn_button = function( t ){ return t.value; };
		_._fn_checkbox = function( t ){ return t.checked; };
		_._fn_color = function( t ){ return t.value; };
		_._fn_date = function( t ){ return t.value; };
		_[ "datetime-local" ] = function( t ){ return t.value; };
		_._fn_email = function( t ){ return t.value; };
		_._fn_file = function( t ){ return t.value; };
		_._fn_hidden = function( t ){ return t.value; };
		_._fn_image = function( t ){ return t.value; };
		_._fn_month = function( t ){ return t.value; };
		_._fn_number = function( t ){ return t.value; };
		_._fn_password = function( t ){ return t.value; };
		_._fn_radio = function( t ){ return t.value; };
		_._fn_range = function( t ){ return t.value; };
		_._fn_reset = function( t ){ return t.value; };
		_._fn_search = function( t ){ return t.value; };
		_._fn_submit = function( t ){ return t.value; };
		_._fn_tel = function( t ){ return t.value; };
		_._fn_text = function( t ){ return t.value; };
		_._fn_time = function( t ){ return t.value; };
		_._fn_url = function( t ){ return t.value; };
		_._fn_week = function( t ){ return t.value; };
})();

//----------------------------------------------------------------------------------------------------window.b2link.el_input.g***;


//----------------------------------------------------------------------------------------------------window.b2link.el_input.s***;

/**
 * @function
 * @param {HTMLElement} t el_div
 * @param {Array} d data Object Array
 * @param {String} className
 * @param {String} valueName data Object 안에서 라디오 버튼의 value로 사용할 Property name
 * @param {String} textName data Object 안에서 라디오 버튼에 대한 text로 사용할 Property name
 */
window.b2link.el_input.setInputRadioFromDataObject = function( t, d, className, valueName, textName )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.el_input.setInputRadioFromDataObject():void----------" );

	var f = window.b2link.element.getElementByClassName;

	var o = f( t, className );
	if( o )
	{
		var p = o.parentElement;
			p.innerHTML = "";

		var tempObj = null;
		var tempStr = null;

		var i=0, iLen=d.length;
		for( ; i<iLen; ++i )
		{
			tempObj = document.createElement( "input" );
			tempObj.type = o.type;
			tempObj.className = o.className;
			tempObj.name = o.name;
			tempObj.value = d[ i ][ valueName ];
			tempObj.title = d[ i ][ textName ];

			if( o.required ) tempObj.required = o.required;

			tempObj.item_value = d[ i ];

			tempStr = document.createElement( "span" );
			tempStr.innerText = d[ i ][ textName ];

			p.appendChild( tempObj );
			p.appendChild( tempStr );
		}
	}
	else
	{
		window.Rh2Log.error( "---- [ E ] - window.b2link.el_input.setInputRadioFromDataObject() ----------" );
		window.Rh2Log.error( "className : " + className + "인 element 존재하지 않음" );
	}

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.el_input.setInputRadioFromDataObject():void----------" );
};

/**
 * @function
 * @param {HTMLElement} t el_div
 * @param {Object} d
 */
window.b2link.el_input.setInputValueAttributeFromClassNameDataObject = function( t, d )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.el_input.setInputValueAttributeFromClassNameDataObject():void----------" );

	var f = window.b2link.element.getElementByClassName;

	for( var p in d )
		if( f( t, p ) && f( t, p ).value != undefined ) f( t, p ).setAttribute( "value", d[ p ] );

	window.JamesLog.timeStamp( "---- [ E ] - window.b2link.el_input.setInputValueAttributeFromClassNameDataObject():void----------" );
};

/**
 * @function
 * @param {HTMLElement} t el_div
 * @param {Object} d
 */
window.b2link.el_input.setInputValueFromClassNameDataObject = function( t, d )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.el_input.setInputValueFromClassNameDataObject():void----------" );

	var f = window.b2link.element.getElementByClassName;

	for( var p in d )
		if( f( t, p ) && f( t, p ).value != undefined ) f( t, p ).value = d[ p ];

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.el_input.setInputValueFromClassNameDataObject():void----------" );
};

/**
 * @function
 * @param {Object} t INPUT
 * @param {HTMLElement} el INPUT
 */
window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName = function( t, el )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName():void----------" );

	/*/
	try
	{
		var r = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName[ "_fn_" + el.type ]( t );
	}
	catch( er )
	{
		console.error( "window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName Error : " + er );
	}
	/*/

	var r = window.b2link.el_input.getInputValueFromInputType[ "_fn_" + el.type ]( t );
	//*/

	t[ el.className ] = r;

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName():void----------" );
};

//----------------------------------------------------------------------------------------------------window.b2link.el_input.s***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_list;

window.b2link.el_list = window.b2link.el_list || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_list;


//----------------------------------------------------------------------------------------------------window.b2link.el_list.g***;

/**
 * List 형태 Element의 Children에서 첫번째 자식 Element가 가지고 있는 'list_item_value'에서 '_id' Property를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {uint}
 */
window.b2link.el_list.getIndex_First=function(i){return parseInt(window.b2link.el_list.getItem_First(i).list_item_value._id)};

/**
 * List 형태 Element의 Children에서 마지막 자식 Element가 가지고 있는 'list_item_value'에서 '_id' Property를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {uint}
 */
window.b2link.el_list.getIndex_Last=function(t){return parseInt(window.b2link.el_list.getItem_Last(t).list_item_value._id)};

/**
 * List 형태 Element의 Children에서 첫번째 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {HTMLElement} li, tr, ...
 */
window.b2link.el_list.getItem_First=function(i){return i.children[0]};

/**
 * List 형태 Element의 Children에서 마지막 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {HTMLElement} li, tr, ...
 */
window.b2link.el_list.getItem_Last=function(n){return n.children[n.children.length-1]};

/**
 * List 형태 Element의 Children에서 첫번째 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {Object}
 */
window.b2link.el_list.getItemData_First=function(t){return t.children[0].list_item_value};

/**
 * List 형태 Element의 Children에서 마지막 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @return {Object}
 */
window.b2link.el_list.getItemData_Last=function(t){return t.children[t.children.length-1].list_item_value};

/**
 * List 형태 Element의 Children에서 마지막 자식 Element를 가져온다.
 * @function
 * @param {HTMLElement} el ul, tbody, ...
 * @param {Object} d
 * <code>
 * {
 *	"maxCount" : NaN
 *	, "limit" : NaN
 * }
 * </code>
 * @return {Object}
 */
window.b2link.el_list.getItemData_Last__maxCount_Limit=function(t,i){return t.children[i.maxCount%i.limit-1].list_item_value};

//----------------------------------------------------------------------------------------------------window.b2link.el_list.g***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_select;

window.b2link.el_select = window.b2link.el_select || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_select;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_select;

window.b2link.el_select = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_select;


//----------------------------------------------------------------------------------------------------window.b2link.el_select.p;

/**
 * <select> Element의 children을 갱신한다.
 * <select></select> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <option value="1">송선우0</option>, <option value="2">송선우1</??> 형태로 갱신한다.
 *
 * @function
 * @param {HTMLElement} selector
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @param {Object} options { key : {String}, value : {String}, add_select_text_yn : {Boolean}, select_text : {String}}
 * <code>
	{
		"key"  : option 의 value 에 바인딩 될 값.
		, "value" : option의 innerHTML 에 바인딩 될 값.
		, "add_select_text_yn" : 추가로 select 에 첫 행을 넣을 지 여부.
		, "select_text" : 추가로 slelect 의 첫 행에 넣을 문자열.
	}
 * </code>
 *
 * @return {HTMLElement}
 */
window.b2link.el_select.push_children = function( selector, a , options )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.el_selector.push_children():{HTMLElement}----------" );

	if( 0 == a.length )
	{
		selector.innerHTML = "";
		return selector;
	}

	var key = "";
	var value = "";
	var add_select_text_yn = 0;
	var select_text = "";

	if( options.hasOwnProperty( "key" ) ) key = options.key;
	if( options.hasOwnProperty( "value" ) ) value = options.value;
	if( options.hasOwnProperty( "add_select_text_yn" ) ) add_select_text_yn = options.add_select_text_yn;
	if( options.hasOwnProperty( "select_text" ) ) select_text = options.select_text;

	if( !key || !value )
	{
		window.b2link_ui.message.error( "window.b2link.el_select.push_children( selector, a , key, value, add_select_text_yn, select_text )" );
		window.b2link_ui.message.error( "key 혹은 value 가 null 입니다." );
		return;
	}

	if( !select_text ) select_text = "-- Select --";

	if( add_select_text_yn )
	{
		var opt = document.createElement( "option" );
			opt.value = "";
			opt.innerHTML = select_text;
		selector.appendChild( opt );
	}

	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		var opt = document.createElement( "option" );
		var obj = a[ i ];
		opt.value = obj[ key ];
		opt.innerHTML = obj[ value ];
		selector.appendChild( opt );
		obj = null;
	}

	window.JamesLog.timeStamp( "---- [ E ] - window.b2link.el_selector.push_children():{HTMLElement}----------return selector;" );
	return selector;
};

//----------------------------------------------------------------------------------------------------window.b2link.el_select.p;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_style;

window.b2link.el_style = window.b2link.el_style || {};


//--------------------------------------------------window.b2link.el_style.a***;

/**
 *
 * @function
 * @param {HTMLElement} el
 * @param {String} cssText
 * @return {HTMLElement}
 */
window.b2link.el_style.addCSSText=function(e,t){return SUtilTemplateHTML.addCSSText(t,e)};

/**
 *
 * @function
 * @param {HTMLElement} el
 * @param {String} cssText
 * @param {String} name
 * @return {HTMLElement}
 */
window.b2link.el_style.addCSSText_name=function(e,n,t){return SUtilTemplateHTML.addCSSText_name(n,e,t)};

//--------------------------------------------------window.b2link.el_style.a***;


//--------------------------------------------------window.b2link.el_style.c***;

/**
 * @function
 * @param {HTMLElement} el
 * @param {String} className
 */
window.b2link.el_style.changeClassName=function(a,e){window.TtwLog.timeStamp(a.className+"을 "+e+"으로 변경"),a.className=e};

//--------------------------------------------------window.b2link.el_style.c***;


//--------------------------------------------------window.b2link.el_style.r***;

/**
 *
 * @function
 * @param {HTMLElement} el
 */
window.b2link.el_style.removeAllStyleElements=function(e){SUtilTemplateHTML.removeAllStyleElements(e)};

/**
 *
 * @function
 * @param {HTMLElement} el
 */
window.b2link.el_style.removeAllStyleElements__style_dynamic=function(e){SUtilTemplateHTML.removeAllStyleElements__style_dynamic(e)};

/**
 *
 * @function
 * @param {HTMLElement} el
 * @param {String} element's name
 */
window.b2link.el_style.removeAllStyleElements_name=function(e,l){SUtilTemplateHTML.removeAllStyleElements_name(e,l)};

/**
 *
 * @function
 * @param {HTMLElement} el
 * @param {String} element's name
 * @return {HTMLElement}
 */
window.b2link.el_style.removeStyleElement=function(e,l){return SUtilTemplateHTML.removeStyleElement(e,l)};

//--------------------------------------------------window.b2link.el_style.r***;


//--------------------------------------------------window.b2link.el_style.s***;

/**
 *
 * @function
 * @param {HTMLElement} target
 * @param {String} className
 * @param {Object} styles
 * <code>
 * {
 * 		"display" : "none"
 * 		, "position" : "absolute"
 * 		, ...
 * }
 * </code>
 */
window.b2link.el_style.setStyleElement_byClassName=function(l,e,n){for(var t=l.getElementsByClassName(e),s=0,a=t.length,y=null,i=null;a>s;++s){y=t[s];for(i in n)y.style[i]=n[i]}};

//--------------------------------------------------window.b2link.el_style.s***;


//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_style;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_style_table;

window.b2link.el_style_table = window.b2link.el_style_table || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_style_table;


//----------------------------------------------------------------------------------------------------window.b2link.el_style_table.h***;

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * @param {uint} cellIndex
 * @example
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_style_table.hideColumn( table, 3 );
	window.b2link.el_style_table.hideColumn( table, 4 );
	window.b2link.el_style_table.hideColumn( table, 5 );

	window.b2link.el_style_table.showColumn( table, 3 );
	window.b2link.el_style_table.showColumn( table, 4 );
	window.b2link.el_style_table.showColumn( table, 5 );

	window.b2link.el_style_table.showAllColumns( table );
 * </code>
 */
!function(){var n="th:nth-of-type( <!=n=!> ),td:nth-of-type( <!=n=!> ){display: none;}";window.b2link.el_style_table.hideColumn=function(e,t){return window.b2link.el_style.addCSSText_name(e,n.replace(/\<\!\=n\=\!\>/gi,t),"table-hideColumn"+t)}}();

//----------------------------------------------------------------------------------------------------window.b2link.el_style_table.h***;


//----------------------------------------------------------------------------------------------------window.b2link.el_style_table.s***;

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_style_table.hideColumn( table, 3 );
	window.b2link.el_style_table.hideColumn( table, 4 );
	window.b2link.el_style_table.hideColumn( table, 5 );

	window.b2link.el_style_table.showColumn( table, 3 );
	window.b2link.el_style_table.showColumn( table, 4 );
	window.b2link.el_style_table.showColumn( table, 5 );

	window.b2link.el_style_table.showAllColumns( table );
 * </code>
 */
window.b2link.el_style_table.showAllColumns=function(l){window.b2link.el_style.removeAllStyleElements_name(l,"table-hideColumn")};

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * @param {uint} cellIndex
 * @example
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_style_table.hideColumn( table, 3 );
	window.b2link.el_style_table.hideColumn( table, 4 );
	window.b2link.el_style_table.hideColumn( table, 5 );

	window.b2link.el_style_table.showColumn( table, 3 );
	window.b2link.el_style_table.showColumn( table, 4 );
	window.b2link.el_style_table.showColumn( table, 5 );

	window.b2link.el_style_table.showAllColumns( table );
 * </code>
 */
window.b2link.el_style_table.showColumn=function(e,l){return window.b2link.el_style.removeStyleElement(e,"table-hideColumn"+l)};

//----------------------------------------------------------------------------------------------------window.b2link.el_style_table.s***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_table;

window.b2link.el_table = window.b2link.el_table || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_table;


//----------------------------------------------------------------------------------------------------window.b2link.el_table.h***;

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * @param {uint} cellIndex
 * @example
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_table.hideColumn( table, 3 );
	window.b2link.el_table.hideColumn( table, 4 );
	window.b2link.el_table.hideColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showColumn( table, 3 );
	window.b2link.el_table.showColumn( table, 4 );
	window.b2link.el_table.showColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showAllColumns( table );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );
 * </code>
 */
window.b2link.el_table.hideColumn=function(e,n){var l=table.tHead,i=l.children[l.children.length-1];i.__hideColumns||(i.__hideColumns="");var d=","+n;-1==i.__hideColumns.indexOf(d)&&(i.__hideColumns+=","+n);var _=i.children;_[n].style.display="none";for(var h,o=table.tBodies[0],_=o.children,s=0,a=_.length;a>s;++s)h=_[s],h.__hideColumns||(h.__hideColumns=""),-1==h.__hideColumns.indexOf(d)&&(h.__hideColumns+=","+n),h.children[n].style.display="none"};

//----------------------------------------------------------------------------------------------------window.b2link.el_table.h***;


//----------------------------------------------------------------------------------------------------window.b2link.el_table.s***;

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_table.hideColumn( table, 3 );
	window.b2link.el_table.hideColumn( table, 4 );
	window.b2link.el_table.hideColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showColumn( table, 3 );
	window.b2link.el_table.showColumn( table, 4 );
	window.b2link.el_table.showColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showAllColumns( table );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );
 * </code>
 */
window.b2link.el_table.showAllColumns=function(l){for(var e=table.tHead,n=e.children[e.children.length-1],i=n.children,d=n.__hideColumns.split(","),h=1,t=d.length;t>h;++h)i[d[h]].style.display="";n.__hideColumns="";var s,o=table.tBodies[0],i=o.children;for(h=0,t=i.length;t>h;++h){for(var s=i[h],r=s.children,a=s.__hideColumns.split(","),_=1,c=a.length;c>_;++_)r[a[_]].style.display="";s.__hideColumns=""}};

/**
 *
 * @function
 * @param {HTMLElement} el_table
 * @param {uint} cellIndex
 * @example
 * <code>
	var o = window.b2link_ui_member.member_basic.getAllList();
	var el = o[ 0 ];
	var table = el.getElementsByClassName( "table__member_basic_allList" )[ 0 ];
	window.b2link.el_table.hideColumn( table, 3 );
	window.b2link.el_table.hideColumn( table, 4 );
	window.b2link.el_table.hideColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showColumn( table, 3 );
	window.b2link.el_table.showColumn( table, 4 );
	window.b2link.el_table.showColumn( table, 5 );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );

	window.b2link.el_table.showAllColumns( table );
	console.log( table.tHead.children[ 0 ].__hideColumns );
	console.log( table.tBodies[ 0 ].children[ 0 ].__hideColumns );
 * </code>
 */
window.b2link.el_table.showColumn=function(e,l){var n=table.tHead,i=n.children[n.children.length-1];i.__hideColumns=i.__hideColumns.replace(","+l,"");var d=i.children;d[l].style.display="";for(var h,a=table.tBodies[0],d=a.children,r=0,o=d.length;o>r;++r)h=d[r],h.__hideColumns=h.__hideColumns.replace(","+l,""),h.children[l].style.display=""};

//----------------------------------------------------------------------------------------------------window.b2link.el_table.s***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_tbody;

window.b2link.el_tbody = window.b2link.el_tbody || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_tbody;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.c;



//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.c;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.g;

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "TR"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLTableRowElement} tr
 */
window.b2link.el_tbody.getTBodyFromMouseClickEventTarget=function(e){return"TBODY"==e.tagName?e:window.b2link.el_tbody.getTBodyFromMouseClickEventTarget(e.parentElement)};

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "TR"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLTableRowElement} tr
 */
window.b2link.el_tbody.getTBodyFromTR=function(e){return"TBODY"==e.tagName?e:window.b2link.el_tbody.getTBodyFromTR(e.parentElement)};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {HTMLElement} td
 */
window.b2link.el_tbody.getTD__FirstTRFirstTD=function(i){return i.children[0].children[0]};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {HTMLElement} td
 */
window.b2link.el_tbody.getTD__LastTRFirstTD=function(n){return n.children[n.children.length-1].children[0]};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerHTML
 */
window.b2link.el_tbody.getTD_innerHTML__FirstTRFirstTD=function(i){return window.b2link.el_tbody.getTD__FirstTRFirstTD(i).innerHTML};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerHTML
 */
window.b2link.el_tbody.getTD_innerHTML__LastTRFirstTD=function(n){return window.b2link.el_tbody.getTD__LastTRFirstTD(n).innerHTML};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerText
 */
window.b2link.el_tbody.getTD_innerText__FirstTRFirstTD=function(t){return window.b2link.el_tbody.getTD__FirstTRFirstTD(t).innerText};

/**
 * @function
 * @param {HTMLElement} tbody
 * @return {String} td.innerText
 */
window.b2link.el_tbody.getTD_innerText__LastTRFirstTD=function(t){return window.b2link.el_tbody.getTD__LastTRFirstTD(t).innerText};

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "LI"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLLIElement} li
 */
window.b2link.el_tbody.getTDFromMouseClickEventTarget=function(e){return"TD"==e.tagName?e:window.b2link.el_tbody.getTDFromMouseClickEventTarget(e.parentElement)};

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "TR"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLTableRowElement} tr
 */
window.b2link.el_tbody.getTRFromMouseClickEventTarget=function(e){return"TR"==e.tagName?e:window.b2link.el_tbody.getTRFromMouseClickEventTarget(e.parentElement)};

//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.g;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.p;

/**
 * tbody.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML에 + 한다.
 * @function
 * @param {HTMLElement} tbody
 * @param {Object} d [ {}, {}, ... ]
 */
window.b2link.el_tbody.push_child=function(r,i){try{r.innerHTML+=SUtilString.applyBraceStrFromArray(r.__originalInnerHTML,i)}catch(n){window.TtwLog.error("window.b2link.el_tbody.push_child Error : "+n)}};

//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.p;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.u;

/**
 * tbody.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML 앞으로 + 한다.
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_tbody.unshift_child=function(n,r){try{n.innerHTML=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r)+n.innerHTML}catch(i){window.TtwLog.error("window.b2link.el_tbody.unshift_child Error : "+i)}};

//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.u;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_tbody;

//window.b2link.el_tbody = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_tbody;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.c;

/**
 * 받은 데이터를 tbody.tr.td 들의 innerText에 반영한다.
 * 데이터[ i ]의 아이템들을 trs[ i ].list_item_value에 inject 한다.
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_tbody.change_child = function( tbody, d )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.change_child():void----------" );

	var f = window.b2link.element.injectValueForListItemAndIDX;
	var a0 = tbody.children;//trs;
	var io;//tr;
	//var i=0, iLen=a0.length;
	//수정 - 20160110 - 송선우;
	var i=0, iLen=( a0.length > d.length ) ? d.length : a0.length;
	for( ; i<iLen; ++i )
	{
		io = a0[ i ]//tr;
		var a1 = io.children;//tds;
		var j=0, jLen=a1.length;

		dio = d[ i ];
		f( io, dio, i );
		if( dio )
			for( ; j<jLen; ++j ) a1[ j ].innerText = dio[ tbody.__list_reuse_key[ j ] ];
		else
			for( ; j<jLen; ++j ) a1[ j ].innerText = "";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.change_child():void----------" );
};

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 * @param {int} idx children index ex) 0
 * @param {String} thtml '<img src="http://localhost:49321/img/flag_country/cd_us3/{{cd_us3}}.png"/>'
 */
window.b2link.el_tbody.change_child_htmlOption = function( tbody, d, idx, thtml )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.change_child_htmlOption():void----------" );

	var a = tbody.children;//trs;
	var io;//tr;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//tr;
		var b = io.children;//tds;
		var j=0, jLen=b.length;

		var dio = d[ i ];
		if( dio )
		{
			for( ; j<jLen; ++j ) b[ j ].innerText = dio[ tbody.__list_reuse_key[ j ] ];
			var key = tbody.__list_reuse_key[ idx ];
				//console.log( "key : " + key );
			b[ idx ].innerHTML = thtml.replace( "{{" + key + "}}", dio[ key ] );
		}
		else for( ; j<jLen; ++j ) b[ j ].innerText = "";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.change_child_htmlOption():void----------" );
};

/**
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} d [ {}, {}, ... ]
 * @param {Array} options [{ idx : 0, thtml : "" }, { idx : 0, thtml : "" }, ...]
 */
window.b2link.el_tbody.change_child_htmlOptions = function( tbody, d, options )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.change_child_htmlOptions():void----------" );

	var a = tbody.children;
	var io;//tr;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//tr;
		var b = io.children;
		var j=0, jLen=b.length;

		var dio = d[ i ];
		if( dio )
		{
			for( ; j<jLen; ++j ) b[ j ].innerText = dio[ tbody.__list_reuse_key[ j ] ];
			var k=0, kLen=options.length;
			for( ; k<kLen; ++k )
			{
				var option = options[ k ];
				var key = tbody.__list_reuse_key[ option.idx ];
				b[ option.idx ].innerHTML = option.thtml.replace( "{{" + key + "}}", dio[ key ] );
			}
		}
		else for( ; j<jLen; ++j ) b[ j ].innerText = "";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.change_child_htmlOptions():void----------" );
};

//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.c;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.g;

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getIndices_FromTBody_CheckBoxSelected = function( t )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getIndices_FromTBody_CheckBoxSelected():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( i );
	}

	//console.log( r );
	window.JamesLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getIndices_FromTBody_CheckBoxSelected():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getInputFromTBody_CheckBoxSelected = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getInputFromTBody_CheckBoxSelected():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( ioCheckBox );
	}

	//console.log( r );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getInputFromTBody_CheckBoxSelected():{Array}----------return r;" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getInputValue_IntFromTBody_CheckBoxSelected = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getInputValue_IntFromTBody_CheckBoxSelected():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];

		/*/
		if( ioCheckBox.checked ) r.push( parseInt( ioCheckBox.value ) );
		/*/
		//수정 - 20161218 - 정재명;
		if( ioCheckBox.checked ) r.push( parseInt( i ) );
		//*/
	}

	console.log( r );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getInputValue_IntFromTBody_CheckBoxSelected():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getInputValueFromTBody_CheckBoxSelected = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getInputValueFromTBody_CheckBoxSelected():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( ioCheckBox.value );
	}

	console.log( r );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getInputValueFromTBody_CheckBoxSelected():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tr
 * @return {Object} {}
 */
window.b2link.el_tbody.getInputValueFromTR = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getInputValueFromTR():{Object}----------" );

	var f = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName;

	var r = {};
	var a = t.getElementsByTagName( "INPUT" );
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];//HTMLInputElement;
		f( r, io );
	}

	console.log( r );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getInputValueFromTR():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t tbody
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.el_tbody.getTDFromTBody_CheckBoxSelected = function( t )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_tbody.getTDFromTBody_CheckBoxSelected():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var ioCheckBox;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		ioCheckBox = io.children[ 0 ].children[ 0 ];
		if( ioCheckBox.checked ) r.push( io.children[ 0 ] );
	}

	console.log( r );
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_tbody.getTDFromTBody_CheckBoxSelected():{Array}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.g;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.p;
//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.p;


//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.u;
//----------------------------------------------------------------------------------------------------window.b2link.el_tbody.u;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_ul;

window.b2link.el_ul = window.b2link.el_ul || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_ul;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.g;

/**
 * Event.target Element에서 부터 부모 Element로 이동하며 tagName이 "LI"인 Element를 찾는다.
 * @function
 * @param {HTMLElement} t mouse click event.target
 * @return {HTMLLIElement} li
 */
window.b2link.el_ul.getLIFromMouseClickEventTarget=function(e){return"LI"==e.tagName?e:window.b2link.el_ul.getLIFromMouseClickEventTarget(e.parentElement)};

//----------------------------------------------------------------------------------------------------window.b2link.el_ul.g;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.p;

/**
 * ul.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML에 + 한다.
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_ul.push_child=function(r,i){try{var l=window.b2link.html.createHTMLElement_LI(SUtilString.applyBraceStrFromArray(r.__originalInnerHTML,i));r.appendChild(l)}catch(n){window.TtwLog.error("window.b2link.el_ul.push_child Error : "+n)}};

//----------------------------------------------------------------------------------------------------window.b2link.el_ul.p;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.u;

/**
 * ul.__originalInnerHTML을 가지고 d의 데이터로 치환 후 innerHTML 앞으로 + 한다.
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_ul.unshift_child=function(n,r){try{n.innerHTML=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r)+n.innerHTML}catch(i){window.TtwLog.error("window.b2link.el_ul.unshift_child Error : "+i)}};

//----------------------------------------------------------------------------------------------------window.b2link.el_ul.u;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.el_ul;

//window.b2link.el_ul = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.el_ul;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.c;

/**
 * 받은 데이터를 ul.li 들의 innerText에 반영한다.
 * 데이터[ i ]의 아이템들을 lis[ i ].list_item_value에 inject 한다.
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 */
window.b2link.el_ul.change_child = function( ul, d )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_ul.change_child():void----------" );

	var f = window.b2link.element.injectValueForListItemAndIDX;
	var a = ul.children;//lis;
	var io;//li;
	//var i=0, iLen=a.length;
	//수정 - 20160110 - 송선우;
	var i=0, iLen=( a.length > d.length ) ? d.length : a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//li;
		dio = d[ i ];
		f( io, dio, i );
		if( dio )
		{
			var txt = "";
			for( var p in dio ) txt += dio[ p ];
			io.innerText = txt;
		}
		else io.innerText = "";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_ul.change_child():void----------" );
};

/**
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 * @param {int} key data key ex) "cd_us3"
 * @param {String} thtml '<img src="http://localhost:49321/img/flag_country/cd_us3/{{cd_us3}}.png"/>'
 */
window.b2link.el_ul.change_child_htmlOption = function( ul, d, key, thtml )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_ul.change_child_htmlOption():void----------" );

	var a = ul.children;//lis;
	var io;//li;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//li;
		var dio = d[ i ];
		if( dio )
		{
			var txt = "";
			for( var p in dio ){ if( p != "_id" ) txt += dio[ p ]; }
			io.innerText = txt;
			io.innerHTML = thtml.replace( "{{" + key + "}}", dio[ key ] );
		}
		else io.innerText = "";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_ul.change_child_htmlOption():void----------" );
};

/**
 * @function
 * @param {HTMLElement} ul
 * @param {Array} d [ {}, {}, ... ]
 * @param {Array} options [{ ket : "", thtml : "" }, { key : "", thtml : "" }, ...]
 * @param {String} thtml '<img src="http://localhost:49321/img/flag_country/cd_us3/{{cd_us3}}.png"/>'
 */
window.b2link.el_ul.change_child_htmlOptions = function( ul, d, options )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.el_ul.change_child_htmlOptions():void----------" );

	var a = ul.children;//lis;
	var io;//li;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ]//li;
		var dio = d[ i ];
		if( dio )
		{
			var k=0, kLen=options.length;
			for( ; k<kLen; ++k )
			{
				var txt = "";
				var option = options[ k ];
				for( var p in dio ){ if( p != "_id" ) txt += dio[ p ]; }
				io.innerText = txt;
				io.innerHTML = option.thtml.replace( "{{" + option.key + "}}", dio[ option.key ] );
			}
		}
		else io.innerText = "";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.el_ul.change_child_htmlOptions():void----------" );
};

//----------------------------------------------------------------------------------------------------window.b2link.el_ul.c;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.g;
//----------------------------------------------------------------------------------------------------window.b2link.el_ul.g;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.p;
//----------------------------------------------------------------------------------------------------window.b2link.el_ul.p;


//----------------------------------------------------------------------------------------------------window.b2link.el_ul.u;
//----------------------------------------------------------------------------------------------------window.b2link.el_ul.u;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.event;

window.b2link.event = window.b2link.event || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.event;


//----------------------------------------------------------------------------------------------------window.b2link.event.a***;

/**
 * addEventListener 대신 사용하기 위한 용도
 * 무조건 동일 EventListener를 한번 removeEventListener을 실행 후 addEventListener을 한다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @param {Function} fn
 */
window.b2link.event.addEventBeforeRemove=function(e,n,t){e.removeEventListener(n,t,!1),e.addEventListener(n,t,!1,0,!0)};

//----------------------------------------------------------------------------------------------------window.b2link.event.a***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__A***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.APPENDED_CHILD} evtDetail
 */
//window.b2link.event.dispatchCE__APPENDED_CHILD=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.APPENDED_CHILD,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__A***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__C***;

/**
 * STATIC Locale 설정이 변경 되었을때 발생하는 이벤트
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CHANGED_LOCALE} evtDetail
 */
window.b2link.event.dispatchCE__CHANGED_LOCALE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CHANGED_LOCALE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_CUSTOM_ELEMENT} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_CUSTOM_ELEMENT=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_CUSTOM_ELEMENT,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_EL} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_IMPORT_HTML_EL} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_IMPORT_HTML_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_IMPORT_HTML_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_IMPORT_HTML_JS} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_IMPORT_HTML_JS=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_IMPORT_HTML_JS,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATED_INCLUDE_HTML_EL} evtDetail
 */
window.b2link.event.dispatchCE__CREATED_INCLUDE_HTML_EL=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATED_INCLUDE_HTML_EL,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.CREATION_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__CREATION_COMPLETE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.CREATION_COMPLETE,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__C***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__D***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.DATA_LOAD_COMPLETE} evtDetail
 */
window.b2link.event.dispatchCE__DATA_LOAD_COMPLETE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.DATA_LOAD_COMPLETE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.DATA_WRITE_CANCEL} evtDetail
 */
//window.b2link.event.dispatchCE__DATA_WRITE_CANCEL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.DATA_WRITE_CANCEL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.DATA_WRITE_COMPLETE} evtDetail
 */
//window.b2link.event.dispatchCE__DATA_WRITE_COMPLETE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.DATA_WRITE_COMPLETE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.DISPOSED_EL} evtDetail
 */
window.b2link.event.dispatchCE__DISPOSED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.DISPOSED_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.DISPOSED_JS} evtDetail
 */
window.b2link.event.dispatchCE__DISPOSED_JS=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.DISPOSED_JS,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__D***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__F***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PRIVATE_MULTI_COMPLETE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_DELETE_PRIVATE_MULTI_COMPLETE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PRIVATE_MULTI_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PRIVATE_MULTI_FAILUE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_DELETE_PRIVATE_MULTI_FAILUE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PRIVATE_MULTI_FAILUE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PRIVATE_SINGLE_COMPLETE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_DELETE_PRIVATE_SINGLE_COMPLETE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PRIVATE_SINGLE_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PRIVATE_SINGLE_FAILUE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_DELETE_PRIVATE_SINGLE_FAILUE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PRIVATE_SINGLE_FAILUE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PUBLIC_MULTI_COMPLETE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_DELETE_PUBLIC_MULTI_COMPLETE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PUBLIC_MULTI_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PUBLIC_MULTI_FAILUE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_DELETE_PUBLIC_MULTI_FAILUE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_DELETE_PUBLIC_MULTI_FAILUE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PUBLIC_SINGLE_COMPLETE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_DELETE_PUBLIC_SINGLE_COMPLETE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PUBLIC_SINGLE_COMPLETE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_DELETE_PUBLIC_SINGLE_FAILUE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_DELETE_PUBLIC_SINGLE_FAILUE=function(E,n){window.b2link.event.dispatchCustomEvent(E,window.b2link.event.FILE_DELETE_PUBLIC_SINGLE_FAILUE,n)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PRIVATE_MULTI_COMPLETE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_UPLOAD_PRIVATE_MULTI_COMPLETE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PRIVATE_MULTI_COMPLETE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PRIVATE_MULTI_FAILUE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_UPLOAD_PRIVATE_MULTI_FAILUE=function(n,_){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PRIVATE_MULTI_FAILUE,_)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PRIVATE_SINGLE_FAILUE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_UPLOAD_PRIVATE_SINGLE_FAILUE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PRIVATE_SINGLE_FAILUE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PUBLIC_MULTI_COMPLETE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_UPLOAD_PUBLIC_MULTI_COMPLETE=function(n,L){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PUBLIC_MULTI_COMPLETE,L)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PUBLIC_MULTI_FAILUE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_UPLOAD_PUBLIC_MULTI_FAILUE=function(n,L){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PUBLIC_MULTI_FAILUE,L)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.FILE_UPLOAD_PUBLIC_SINGLE_FAILUE} evtDetail
 */
//window.b2link.event.dispatchCE__FILE_UPLOAD_PUBLIC_SINGLE_FAILUE=function(n,L){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.FILE_UPLOAD_PUBLIC_SINGLE_FAILUE,L)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__F***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__G***;

/**
 * 대상 HTMLElement에 걸려있는 EventListener 목록을 보여준다.
 * @function
 * @param {HTMLElement} el
 * @return {Array}
 */
window.b2link.event.getEventListeners=function(e){return window.getEventListeners?window.getEventListeners(e):null};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__G***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__H***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.HIDED_EL} evtDetail
 */
window.b2link.event.dispatchCE__HIDED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.HIDED_EL,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__H***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__I***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.INITIALIZED} evtDetail
 */
window.b2link.event.dispatchCE__INITIALIZED=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.INITIALIZED,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.INITIALIZED_ALL_CHILDREN} evtDetail
 */
window.b2link.event.dispatchCE__INITIALIZED_ALL_CHILDREN=function(n,I){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.INITIALIZED_ALL_CHILDREN,I)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.INTERVAL_END} evtDetail
 */
window.b2link.event.dispatchCE__INTERVAL_END=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.INTERVAL_END,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.INTERVAL_START} evtDetail
 */
window.b2link.event.dispatchCE__INTERVAL_START=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.INTERVAL_START,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__I***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__L***;

/**
 * LIST형 Component에서 Data 변경 시에 발생되는 이벤트
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.LIST_DATA_CHANGED} evtDetail
 */
window.b2link.event.dispatchCE__LIST_DATA_CHANGED=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.LIST_DATA_CHANGED,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.LIST_SELECT_ITEM} evtDetail
 */
window.b2link.event.dispatchCE__LIST_SELECT_ITEM=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.LIST_SELECT_ITEM,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.LIST_SELECTED_ITEM} evtDetail
 */
window.b2link.event.dispatchCE__LIST_SELECTED_ITEM=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.LIST_SELECTED_ITEM,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.LOADED_CHILDREN} evtDetail
 */
window.b2link.event.dispatchCE__LOADED_CHILDREN=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.LOADED_CHILDREN,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__L***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__N***;

/**
 * Navigation 소스가 변경 되었을 시 발생되는 이벤트
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.NAVIGATION_DATA_CHANGED} evtDetail
 */
window.b2link.event.dispatchCE__NAVIGATION_DATA_CHANGED=function(n,A){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.NAVIGATION_DATA_CHANGED,A)};

/**
 * Navigation의 Item을 선택 하였을 시 발생되는 이벤트
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.NAVIGATION_ITEM_SELECTED} evtDetail
 */
window.b2link.event.dispatchCE__NAVIGATION_ITEM_SELECTED=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.NAVIGATION_ITEM_SELECTED,E)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__N***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__R***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.REMOVED_CHILD} evtDetail
 */
window.b2link.event.dispatchCE__REMOVED_CHILD=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.REMOVED_CHILD,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.REQUEST_DATA} evtDetail
 */
window.b2link.event.dispatchCE__REQUEST_DATA=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.REQUEST_DATA,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.RESPONSE_DATA} evtDetail
 */
window.b2link.event.dispatchCE__RESPONSE_DATA=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.RESPONSE_DATA,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.REMOVED_CHILD} evtDetail
 */
window.b2link.event.dispatchCE__RESIZED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.RESIZED_EL,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__R***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__S***;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SEARCH_UI_INPUTED_TEXT} evtDetail
 */
//window.b2link.event.dispatchCE__SEARCH_UI_INPUTED_TEXT=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SEARCH_UI_INPUTED_TEXT,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SEARCH_UI_SELECTED_TYPE} evtDetail
 */
//window.b2link.event.dispatchCE__SEARCH_UI_SELECTED_TYPE=function(n,E){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SEARCH_UI_SELECTED_TYPE,E)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SHOWED_EL} evtDetail
 */
window.b2link.event.dispatchCE__SHOWED_EL=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SHOWED_EL,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SIGN_IN_FAILURE} evtDetail
 */
window.b2link.event.dispatchCE__SIGN_IN_FAILURE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SIGN_IN_FAILURE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SIGN_IN_SUCCESS} evtDetail
 */
window.b2link.event.dispatchCE__SIGN_IN_SUCCESS=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SIGN_IN_SUCCESS,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SIGN_OUT_FAILURE} evtDetail
 */
 window.b2link.event.dispatchCE__SIGN_OUT_FAILURE=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SIGN_OUT_FAILURE,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.SIGN_OUT_SUCCESS} evtDetail
 */
window.b2link.event.dispatchCE__SIGN_OUT_SUCCESS=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.SIGN_OUT_SUCCESS,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__S***;


//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__T***;

/**
 * Table Component에서 Data 변경 시에 발생되는 이벤트
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.TABLE_DATA_CHANGED} evtDetail
 */
window.b2link.event.dispatchCE__TABLE_DATA_CHANGED=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.TABLE_DATA_CHANGED,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.TIMEOUT_END} evtDetail
 */
 window.b2link.event.dispatchCE__TIMEOUT_END=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.TIMEOUT_END,i)};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {HTMLElement} el
 * @param {window.b2link.eventDetail.TIMEOUT_START} evtDetail
 */
 window.b2link.event.dispatchCE__TIMEOUT_START=function(n,i){window.b2link.event.dispatchCustomEvent(n,window.b2link.event.TIMEOUT_START,i)};

//----------------------------------------------------------------------------------------------------window.b2link.event.dispatchCE__T***;


//----------------------------------------------------------------------------------------------------window.b2link.event.d***;

/**
 * CustomEvent를 Dispatch 시킨다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @param {Obejct} evtDetail
 * @example
 * <code>
 * window.document.addEventListener( "asd", function( e ){ console.log( e ); }, false, 0, true );
 * window.b2link.event.dispatchCustomEvent( window.document, "asd", 1 );
 * window.b2link.event.dispatchEvent( window.document, "asd" );
 *
 * window.b2link.event.dispatchCustomEvent( window.document, "asd", { a : 1 } );
 * window.b2link.event.dispatchEvent( window.document, "asd" );
 * </code>
 */
//window.b2link.event.dispatchCustomEvent=function(t,n,o){window.TtwLog.info(t),window.TtwLog.info("evtType : "+n),window.TtwLog.info("evtDetail : "+o),SUtilCustomEvent.dispatchCustomEvent(t,n,o)};
window.b2link.event.dispatchCustomEvent=function(t,n,o){SUtilCustomEvent.dispatchCustomEvent(t,n,o)};

/**
 * Event를 Dispatch 시킨다.
 * @function
 * @param {HTMLElement} el
 * @param {String} evtType
 * @example
 * <code>
 * window.document.addEventListener( "asd", function( e ){ console.log( e ); }, false, 0, true );
 * window.b2link.event.dispatchCustomEvent( window.document, "asd", 1 );
 * window.b2link.event.dispatchEvent( window.document, "asd" );
 *
 * window.b2link.event.dispatchCustomEvent( window.document, "asd", { a : 1 } );
 * window.b2link.event.dispatchEvent( window.document, "asd" );
 * </code>
 */
window.b2link.event.dispatchEvent=function(n,t){window.TtwLog.info(n),window.TtwLog.info("evtType : "+t),SUtilCustomEvent.dispatchEvent(n,t)};

//----------------------------------------------------------------------------------------------------window.b2link.event.d***;


//----------------------------------------------------------------------------------------------------window.b2link.event.g***;

/**
 * 대상 HTMLElement에 걸려있는 EventListener 목록을 보여준다.
 * @function
 * @param {HTMLElement} el
 * @return {Array}
 */
window.b2link.event.getEventListeners=function(e){return window.getEventListeners?window.getEventListeners(e):null};

//----------------------------------------------------------------------------------------------------window.b2link.event.g***;


//----------------------------------------------------------------------------------------------------window.b2link.event.r***;

/**
 * HTMLElement의 Custom Property에 존재하는 키값 EventListener를 removeEventListener 후 Key & Value도 파괴 시키는 함수
 * @function
 * @param {HTMLElement} el HTMLElement
 * @param {String} evtType event type
 * @param {String} key el[ key ]의 Value는 무조건 EventListener에 해당하는 Function 이여야 한다.
 * @example
 * <code>
	var el = window.document.getElementById( "test" );
		el.__evt_mClick = function( e ){ console.log( e.type ); };
	window.b2link.event.removeEvent_TargetAndKey( el, "click", "__evt_mClick" );
 * </code>
 */
window.b2link.event.removeEvent_TargetAndKey=function(e,n,t){e.removeEventListener(n,e[t],!1),e[t]=null,delete e[t]};

//----------------------------------------------------------------------------------------------------window.b2link.event.r***;


//----------------------------------------------------------------------------------------------------window.b2link.event.s***;

/**
 * 이벤트 버블링을 중단 시킨다.
 * @function
 * @param {Event|***Event} e
 */
window.b2link.event.stopEvent = function( e ){ try{ e.stopImmediatePropagation(); e.stopPropagation(); }catch(er){} };
//----------------------------------------------------------------------------------------------------window.b2link.event.s***;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.eventDetail;

window.b2link.eventDetail = window.b2link.eventDetail || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.eventDetail;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.A;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.APPENDED_CHILD=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.A;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.C;

/**
 * STATIC Locale 설정이 변경 되었을때 발생하는 이벤트
 * @function
 * @return null
 */
 window.b2link.eventDetail.CHANGED_LOCALE=function(){return null};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATED_CUSTOM_ELEMENT=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
 window.b2link.eventDetail.CREATED_IMPORT_HTML_EL=function(){return{}};

 /**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATED_IMPORT_HTML_JS=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATED_INCLUDE_HTML_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.CREATION_COMPLETE=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.C;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.D;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
	{
	}
 * </code>
 */
//window.b2link.eventDetail.DATA_WRITE_CANCEL=function(e){return e.firstValue&&e.lastValue&&e.selectedValue||window.TtwLog.error("window.b2link.eventDetail.DATA_WRITE_CANCEL Error : event Values가 부족합니다."),e};
window.b2link.eventDetail.DATA_WRITE_CANCEL=function(n){return n};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
	{
	}
 * </code>
 */
window.b2link.eventDetail.DATA_WRITE_COMPLETE=function(n){return n};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.DISPOSED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.DISPOSED_JS=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.D;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.H;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.HIDED_EL=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.H;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.I;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.INITIALIZED=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.INITIALIZED_ALL_CHILDREN=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.INTERVAL_END=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.INTERVAL_START=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.I;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.L;

/**
 * LIST형 Component에서 Data 변경 시에 발생되는 이벤트
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstItem" : {Object}
 *	, "lastItem" : {Object}
 * }
 * </code>
 */
window.b2link.eventDetail.LIST_DATA_CHANGED=function(e){return e.firstItem&&e.lastItem||window.Rh2Log.error("window.b2link.eventDetail.LIST_DATA_CHANGED Error : event Values가 부족합니다."),e};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.LIST_SELECT_ITEM=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.LIST_SELECTED_ITEM=function(e){if(!e.selectedItem)throw global.TtwLog.error("[ ERROR ] - selectedItem 키값이 존재해야한다."),new Error("[ ERROR ] - selectedItem 키값이 존재해야한다.");return e};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.LOADED_CHILDREN=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.L;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.N;

/**
 * Navigation 소스가 변경 되었을 시 발생되는 이벤트
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstValue" : {*}
 *	, "lastValue" : {*}
 *	, "selectedValue" : {*}
 * }
 * </code>
 */
window.b2link.eventDetail.NAVIGATION_DATA_CHANGED=function(e){return e.firstValue&&e.lastValue&&e.selectedValue||window.TtwLog.error("window.b2link.eventDetail.NAVIGATION_DATA_CHANGED Error : event Values가 부족합니다."),e};

/**
 * Navigation의 Item을 선택 하였을 시 발생되는 이벤트
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstValue" : {*}
 *	, "lastValue" : {*}
 *	, "selectedValue" : {*}
 * }
 * </code>
 */
window.b2link.eventDetail.NAVIGATION_ITEM_SELECTED=function(n){return n};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.N;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.R;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.REMOVED_CHILD=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.REQUEST_DATA=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.RESIZED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.RESPONSE_DATA=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.R;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.S;

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"searchKeyword" : ""
 *	, "searchType" : ""
 * }
 * </code>
 */
window.b2link.eventDetail.SEARCH_UI_INPUTED_TEXT=function(n){return n};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
	{

	}
 * </code>
 */
window.b2link.eventDetail.SEARCH_UI_SELECTED_TYPE = function( d )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.eventDetail.SEARCH_UI_SELECTED_TYPE():void----------" );

	if( !d.selectedItem )
	{
		//*///키값을 강제하는 방법
		global.TtwLog.error( "[ ERROR ] - selectedItem 키값이 존재해야한다." );
		throw new Error( "[ ERROR ] - selectedItem 키값이 존재해야한다." );
		debugger;
		/*/
		//보편적인 방법;
		return { selectedItem : d };
		//*/
	}

	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.eventDetail.SEARCH_UI_SELECTED_TYPE():void----------" );

	return d;
};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SHOWED_EL=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SIGN_IN_FAILURE=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SIGN_IN_SUCCESS=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SIGN_OUT_FAILURE=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.SIGN_OUT_SUCCESS=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.S;


//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.T;

/**
 * Table Component에서 Data 변경 시에 발생되는 이벤트
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {Object} d
 * <code>
 * {
 *	"firstItem" : {Object}
 *	, "lastItem" : {Object}
 * }
 * </code>
 */
window.b2link.eventDetail.TABLE_DATA_CHANGED=function(e){return e.hasOwnProperty("firstItem")&&e.hasOwnProperty("lastItem")||window.TtwLog.error("window.b2link.eventDetail.TABLE_DATA_CHANGED Error : event Values가 부족합니다."),e};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.TIMEOUT_END=function(){return{}};

/**
 * Event 객체로 넘길 data 추가 정의 해야 함.
 * 사용시 문의 및 협의 바람(송선우)
 * @function
 * @param {} ??
 */
window.b2link.eventDetail.TIMEOUT_START=function(){return{}};

//----------------------------------------------------------------------------------------------------window.b2link.eventDetail.T;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.event;

//window.b2link.event = window.b2link.event || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.event;


//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;

(function(){

	var _ = window.b2link.event;

	//영문이든, 숫자든, 사용하게될 이벤트 리스트 정의 하기;

	//----------------------------------------------------------------------------------------------------APPENDED;

	/**
	 * 부모 HTMLElement에 자식 HTMLElement를 appendChild 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	//_.APPENDED_CHILD = "appended_child";

	//----------------------------------------------------------------------------------------------------CHANGED;

	/**
	 * STATIC Locale 설정이 변경 되었을때 발생하는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CHANGED_LOCALE = "changed_locale";

	//----------------------------------------------------------------------------------------------------CREATED;

	/**
	 * CustomElement가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_CUSTOM_ELEMENT = "created_custom_element";

	/**
	 * Element가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_EL = "created_element";

	/**
	 * <import-html>의 실제 HTMLElement가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_IMPORT_HTML_EL = "created_import-html_element";

	/**
	 * <import-html url_js="">의 JS Controller가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_IMPORT_HTML_JS = "created_import-html_js";

	/**
	 * <include-html>의 실제HTMLElement가 완성된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.CREATED_INCLUDE_HTML_EL = "created_include-html_element";

	//----------------------------------------------------------------------------------------------------CREATION;

	/**
	 * Object(어떤 형태이든) 가 최종적으로 완료된 상태일 시 발생되는 이벤트
	 * 내부적인 비동기 처리는 제외
	 * INITIALIZED 보다 후에 발생 됨
	 * @eventType
	 * @property {String}
	 */
	_.CREATION_COMPLETE = "creation_complete";

	//----------------------------------------------------------------------------------------------------DATA;

	/**
	 * DATA 작성을 취소 할 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DATA_LOAD_COMPLETE = "data_load_complete";

	/**
	 * DATA 작성을 취소 할 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	//_.DATA_WRITE_CANCEL = "data_write_cancel";

	/**
	 * DATA 작성이 완료 되었을 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	//_.DATA_WRITE_COMPLETE = "data_write_complete";

	//----------------------------------------------------------------------------------------------------DISPOSED;

	/**
	 * HTMLElement를 제거 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DISPOSED_EL = "disposed_element";

	/**
	 * HTMLElement의 JS Controller를 제거 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.DISPOSED_JS = "disposed_js";

	//----------------------------------------------------------------------------------------------------FILE_DELETE;
	//@see window.b2linkUIClass.fileUploader.Multiple;
	//@see window.b2linkUIClass.fileUploader.Public;

	/**
	 * FILE UPLOADER를 통해 다중 파일 삭제 완료시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	//_.FILE_DELETE_PRIVATE_MULTI_COMPLETE = "file_delete_private_multi_complete";

	/**
	 * FILE UPLOADER를 통해 다중 파일 삭제 실패시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	//_.FILE_DELETE_PRIVATE_MULTI_FAILUE = "file_delete_private_multi_failue";

	/**
	 * FILE UPLOADER를 통해 단일 파일 삭제 완료시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	//_.FILE_DELETE_PRIVATE_SINGLE_COMPLETE = "file_delete_private_single_complete";

	/**
	 * FILE UPLOADER를 통해 단일 파일 삭제 실패시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	//_.FILE_DELETE_PRIVATE_SINGLE_FAILUE = "file_delete_private_single_failue";

	/**
	 * FILE UPLOADER를 통해 다중 파일 삭제 완료시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	//_.FILE_DELETE_PUBLIC_MULTI_COMPLETE = "file_delete_public_multi_complete";

	/**
	 * FILE UPLOADER를 통해 다중 파일 삭제 실패시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	//_.FILE_DELETE_PUBLIC_MULTI_FAILUE = "file_delete_public_multi_failue";

	/**
	 * FILE UPLOADER를 통해 단일 파일 삭제 완료시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	//_.FILE_DELETE_PUBLIC_SINGLE_COMPLETE = "file_delete_public_single_complete";

	/**
	 * FILE UPLOADER를 통해 단일 파일 삭제 실패시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	//_.FILE_DELETE_PUBLIC_SINGLE_FAILUE = "file_delete_public_single_failue";

	//----------------------------------------------------------------------------------------------------FILE_UPLOAD;

	/**
	 * FILE UPLOADER를 통해 다중 파일 업로드 완료시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	//_.FILE_UPLOAD_PRIVATE_MULTI_COMPLETE = "file_upload_private_multi_complete";

	/**
	 * FILE UPLOADER를 통해 다중 파일 업로드 실패시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	//_.FILE_UPLOAD_PRIVATE_MULTI_FAILUE = "file_upload_private_multi_failue";

	/**
	 * FILE UPLOADER를 통해 단일 파일 업로드 완료시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	//_.FILE_UPLOAD_PRIVATE_SINGLE_COMPLETE = "file_upload_private_single_complete";

	/**
	 * FILE UPLOADER를 통해 단일 파일 업로드 실패시 발생되는 이벤트
	 * 외부로 노출되지 않는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Multiple
	 */
	//_.FILE_UPLOAD_PRIVATE_SINGLE_FAILUE = "file_upload_private_single_failue";

	/**
	 * FILE UPLOADER를 통해 다중 파일 업로드 완료시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	//_.FILE_UPLOAD_PUBLIC_MULTI_COMPLETE = "file_upload_public_multi_complete";

	/**
	 * FILE UPLOADER를 통해 다중 파일 업로드 실패시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	//_.FILE_UPLOAD_PUBLIC_MULTI_FAILUE = "file_upload_public_multi_failue";

	/**
	 * FILE UPLOADER를 통해 단일 파일 업로드 완료시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	//_.FILE_UPLOAD_PUBLIC_SINGLE_COMPLETE = "file_upload_public_single_complete";

	/**
	 * FILE UPLOADER를 통해 단일 파일 업로드 실패시 발생되는 이벤트
	 * 외부로 노출되는 파일
	 * @eventType
	 * @property {String}
	 * @see window.b2linkUIClass.fileUploader.Public
	 */
	//_.FILE_UPLOAD_PUBLIC_SINGLE_FAILUE = "file_upload_public_single_failue";

	//----------------------------------------------------------------------------------------------------INTERVAL;

	/**
	 * setInterval 로 구동된 interval을 clearInterval로 제거 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.INTERVAL_END = "interval_end";

	/**
	 * setInterval 이 구동된 후 발생되는 이벤트
	 * 데이터 요청 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.INTERVAL_START = "interval_start";

	//----------------------------------------------------------------------------------------------------INITIALIZED;

	/**
	 * 현재 객체의 초기화가 완료된 후 발생되는 이벤트
	 * CREATION_COMPLETE 보다 먼저 발생 됨
	 * @eventType
	 * @property {String}
	 */
	_.INITIALIZED = "initialized";

	/**
	 * 현재 객체(JS상일시 Target HTMLElement)의 자식 객체의 Initialize가 완료된 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.INITIALIZED_ALL_CHILDREN = "initialized_all_children";

	//----------------------------------------------------------------------------------------------------HIDED;

	/**
	 * Element의 js Controller에서 hide()가 호출되고 완료된뒤 발생되는 이벤트(아직 안하고있음)
	 * @eventType
	 * @property {String}
	 */
	_.HIDED_EL = "hided_element";

	//----------------------------------------------------------------------------------------------------LIST;

	/**
	 * LIST형 Component에서 Data 변경 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.LIST_DATA_CHANGED = "list_data_changed";

	/**
	 * LIST형 Component에서 Item을 Click으로 선택 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.LIST_SELECT_ITEM = "list_select_item";

	/**
	 * LIST형 Component에서 Item을 Double Click으로 선택 완료 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.LIST_SELECTED_ITEM = "list_selected_item";

	//----------------------------------------------------------------------------------------------------NAVIGATION;

	/**
	 * @eventType
	 * @property {String}
	 */
	_.NAVIGATION_DATA_CHANGED = "navigation_data_changed";

	/**
	 * @eventType
	 * @property {String}
	 */
	_.NAVIGATION_ITEM_SELECTED = "navigation_item_selected";

	//----------------------------------------------------------------------------------------------------LOADED;

	/**
	 * Element의 모든 자식객체가 로딩 완료 후 발생되는 이벤트(아직 안하고있음)
	 * @eventType
	 * @property {String}
	 */
	_.LOADED_CHILDREN = "loaded_children";

	//----------------------------------------------------------------------------------------------------REMOVED;

	/**
	 * 부모 HTMLElement에서 자식 HTMLElement를 removeChild 한 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	//_.REMOVED_CHILD = "removed_child";

	//----------------------------------------------------------------------------------------------------RESIZE;

	/**
	 * HTMLElement의 Size를 변경 시킨후 발생시키는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.RESIZED_EL = "resized_element";

	//----------------------------------------------------------------------------------------------------RESPONSE;

	/**
	 * 데이터를 응답 받은 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.RESPONSE_DATA = "response_data";

	//----------------------------------------------------------------------------------------------------REQUEST;

	/**
	 * 데이터 요청 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.REQUEST_DATA = "requese_data";

	//----------------------------------------------------------------------------------------------------SEARCH_UI;

	/**
	 * Search UI 상 INPUT Tag에 Typing를 진행할시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	//_.SEARCH_UI_INPUTED_TEXT = "search_ui_inputed_text";

	/**
	 * Search UI 상 SELECT Tag의 아이템을 선택 했을시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	//_.SEARCH_UI_SELECTED_TYPE = "search_ui_selected_type";

	//----------------------------------------------------------------------------------------------------SHOWED;

	/**
	 * Element의 js Controller에서 show()가 호출되고 완료된뒤 발생되는 이벤트(아직 안하고있음)
	 * @eventType
	 * @property {String}
	 */
	_.SHOWED_EL = "showed_element";

	//----------------------------------------------------------------------------------------------------SIGN;

	/**
	 * sign in이 실패한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_IN_FAILURE = "sign_in_failure";

	/**
	 * sign in이 성공한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_IN_SUCCESS = "sign_in_success";

	/**
	 * sign out이 실패한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_OUT_FAILURE = "sign_out_failure";

	/**
	 * sign out이 성공한뒤 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.SIGN_OUT_SUCCESS = "sign_out_success";

	//----------------------------------------------------------------------------------------------------TABLE;

	/**
	 * Table Component에서 Data 변경 시에 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.TABLE_DATA_CHANGED = "table_data_changed";

	//----------------------------------------------------------------------------------------------------TIMEOUT;

	/**
	 * setTimeout 으로 구동된 timeout을 clearTimeout으로 제거 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.TIMEOUT_END = "timeout_end";

	/**
	 * setTimeout 이 구동된 후 발생되는 이벤트
	 * 데이터 요청 후 발생되는 이벤트
	 * @eventType
	 * @property {String}
	 */
	_.TIMEOUT_START = "timeout_start";

	//----------------------------------------------------------------------------------------------------;

	/**
	 * @function
	 */
	_.__initialize_Events = function()
	{
		window.b2link.log.comment_Dash_100();
		window.TtwLog.timeStamp( "	B2LiNK Events List" );
		window.b2link.log.comment_Dash_100();

		for( var s in _ )
		{
			if( "function" != typeof( _[ s ] ) )
			{
				_[ s ] = "b2link_" + _[ s ];
				window.TtwLog.info( "window.b2link.event." + s + ' - "' + _[ s ] + '"' );
			}
		}
		window.b2link.log.comment_Dash_100();
		delete _[ "__initialize_Events" ];
	};

	//----------------------------------------------------------------------------------------------------;

})();

//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------window.b2link.event.a***;
//----------------------------------------------------------------------------------------------------window.b2link.event.a***;


//----------------------------------------------------------------------------------------------------window.b2link.event.g***;
//----------------------------------------------------------------------------------------------------window.b2link.event.g***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.file;

window.b2link.file = window.b2link.file || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.file;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.fileServer;

window.b2link.fileServer = window.b2link.fileServer || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.fileServer;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.fn;

window.b2link.fn = window.b2link.fn || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.fn;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.focus;

window.b2link.focus = window.b2link.focus || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.focus;


//----------------------------------------------------------------------------------------------------window.b2link.focus.s***;

/**
 * @function
 */
window.b2link.focus.setBodyFocus=function(){window.document.body.focus()};

//----------------------------------------------------------------------------------------------------window.b2link.focus.s***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.history;

window.b2link.history = window.b2link.history || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.history;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html;

window.b2link.html = window.b2link.html || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html;


//----------------------------------------------------------------------------------------------------window.b2link.html.a***;

/**
 * {{nm}} 형태의 문자열을 Object의 value로 치환한다.
 * element의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrace=function(n,r){n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML);var i=SUtilString.applyBraceStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};
window.b2link.html.applyBrace__innerHTML=function(n,r){n.__originalInnerHTML=n.innerHTML;var i=SUtilString.applyBraceStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

/**
 * {{nm}} 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrace_children=function(n,r){for(var i,e=SUtilString.applyBraceStrFromObj__NV_NA,l=n.children,_=0,a=l.length;a>_;++_){i=l[_],i.__originalInnerHTML||(i.__originalInnerHTML=i.innerHTML);var o=e(i.__originalInnerHTML,r);o&&(i.innerHTML=o)}return n};

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * __originalInnerHTML은 무시하고 현재 innerHTML로 갱신한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrace_children__innerHTML=function(r,n){for(var i,e=SUtilString.applyBraceStrFromObj__NV_NA,o=r.children,l=0,_=o.length;_>l;++l){i=o[l],i.__originalInnerHTML=i.innerHTML;try{var a=e(i.__originalInnerHTML,n)}catch(t){window.TtwLog.error("window.b2link.html.applyBrace_children__innerHTML Error : "+t),window.TtwLog.error("io.__originalInnerHTML에 잘못 정의된 property name이 존재해서 발생함")}a&&(i.innerHTML=a)}return r};

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrackets=function(n,r){n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML);var i=SUtilString.applyBracketsStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};
window.b2link.html.applyBrackets__innerHTML=function(n,r){n.__originalInnerHTML=n.innerHTML;var i=SUtilString.applyBracketsStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrackets_children=function(n,r){for(var i,e=SUtilString.applyBracketsStrFromObj__NV_NA,l=n.children,_=0,a=l.length;a>_;++_){i=l[_],i.__originalInnerHTML||(i.__originalInnerHTML=i.innerHTML);var t=e(i.__originalInnerHTML,r);t&&(i.innerHTML=t)}return n};

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * __originalInnerHTML은 무시하고 현재 innerHTML로 갱신한다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyBrackets_children__innerHTML=function(r,n){for(var i,e=SUtilString.applyBracketsStrFromObj__NV_NA,o=r.children,t=0,l=o.length;l>t;++t){i=o[t],i.__originalInnerHTML=i.innerHTML;try{var _=e(i.__originalInnerHTML,n)}catch(a){window.TtwLog.error("window.b2link.html.applyBrackets_children__innerHTML Error : "+a),window.TtwLog.error("io.__originalInnerHTML에 잘못 정의된 property name이 존재해서 발생함")}_&&(i.innerHTML=_)}return r};

/**
 * ((nm)) 형태의 문자열을 Object의 value로 치환한다.
 * element의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyParentheses=function(n,r){n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML);var i=SUtilString.applyParenthesesStrFromObj__NV_NA(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};
window.b2link.html.applyParentheses__innerHTML=function(n,r){n.__originalInnerHTML=n.innerHTML;var e=SUtilString.applyParenthesesStrFromObj__NV_NA(n.__originalInnerHTML,r);return e&&(n.innerHTML=e),n};

/**
 * ((nm)) 형태의 문자열을 Object의 value로 치환한다.
 * element.children의 innerHTML이 갱신된다.
 * @function
 * @param {HTMLElement} el
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {HTMLElement}
 */
window.b2link.html.applyParentheses_children=function(n,r){for(var e,i=SUtilString.applyParenthesesStrFromObj__NV_NA,l=n.children,_=0,a=l.length;a>_;++_){e=l[_],e.__originalInnerHTML||(e.__originalInnerHTML=e.innerHTML);var t=i(e.__originalInnerHTML,r);t&&(e.innerHTML=t)}return n};

//----------------------------------------------------------------------------------------------------window.b2link.html.a***;


//----------------------------------------------------------------------------------------------------window.b2link.html.c***;

/**
 * @function
 * @param {HTMLElement} html
 * @return {HTMLElement}
 */
window.b2link.html.createHTMLElement = SUtilTemplateHTML.createHTML;
window.b2link.html.createHTMLElement_LI = SUtilTemplateHTML.createHTML_LI;
window.b2link.html.createHTMLElement_TBODY = SUtilTemplateHTML.createHTML_TBODY;
window.b2link.html.createHTMLElement_THEAD = SUtilTemplateHTML.createHTML_THEAD;
window.b2link.html.createHTMLElement_TR = SUtilTemplateHTML.createHTML_TR;

window.b2link.html.createHTMLElement__URL=function(n){return window.b2link.html.createHTMLElement(window.b2link.xhr.reqSync_String(n))};
window.b2link.html.createHTMLElement__URL_LI=function(n){return window.b2link.html.createHTMLElement__URL_LI(window.b2link.xhr.reqSync_String(n))};
window.b2link.html.createHTMLElement__URL_TBODY=function(n){return window.b2link.html.createHTMLElement__URL_TBODY(window.b2link.xhr.reqSync_String(n))};
window.b2link.html.createHTMLElement__URL_THEAD=function(n){return window.b2link.html.createHTMLElement__URL_THEAD(window.b2link.xhr.reqSync_String(n))};
window.b2link.html.createHTMLElement__URL_TR=function(n){return window.b2link.html.createHTMLElement__URL_TR(window.b2link.xhr.reqSync_String(n))};

!function(){var n={},e={},t={},_={},i={};
window.b2link.html.createHTMLElement__URL_Cache=function(e){return n[e]||(n[e]=window.b2link.xhr.reqSync_String(e)),window.b2link.html.createHTMLElement(n[e])},
window.b2link.html.createHTMLElement__URL_Cache.clear=function(){n={}},
window.b2link.html.createHTMLElement__URL_Cache_LI=function(e){return n[e]||(n[e]=window.b2link.xhr.reqSync_String(e)),window.b2link.html.createHTMLElement__URL_Cache_LI(t[e])},
window.b2link.html.createHTMLElement__URL_Cache_LI.clear=function(){e={}},
window.b2link.html.createHTMLElement__URL_Cache_TBODY=function(e){return n[e]||(n[e]=window.b2link.xhr.reqSync_String(e)),window.b2link.html.createHTMLElement__URL_Cache_TBODY(_[e])},
window.b2link.html.createHTMLElement__URL_Cache_TBODY.clear=function(){t={}},
window.b2link.html.createHTMLElement__URL_Cache_THEAD=function(t){return n[t]||(n[t]=window.b2link.xhr.reqSync_String(t)),window.b2link.html.createHTMLElement__URL_Cache_THEAD(e[t])},
window.b2link.html.createHTMLElement__URL_Cache_THEAD.clear=function(){_={}},
window.b2link.html.createHTMLElement__URL_Cache_TR=function(e){return n[e]||(n[e]=window.b2link.xhr.reqSync_String(e)),window.b2link.html.createHTMLElement__URL_Cache_TR(i[e])},
window.b2link.html.createHTMLElement__URL_Cache_TR.clear=function(){i={}}}();

//----------------------------------------------------------------------------------------------------window.b2link.html.c***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_div;

window.b2link.html_div = window.b2link.html_div || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_div;


//----------------------------------------------------------------------------------------------------window.b2link.html_div.a***;

/**
 * <div> Element의 children을 갱신한다.
 * <div><??>{{name}}</??></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <??>송선우0</??>, <??>송선우1</??> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_child=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

/**
 * <div> Element의 children을 갱신한다.
 * <div><??>{{name}}</??></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <??>송선우0</??>, <??>송선우1</??> 형태로 갱신한다.
 * {{name0}}, {{name1}} 등의 name0, name1을 보관 후 재사용한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_child__ReUseKeyList=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;n.__list_reuse_key||(n.__list_reuse_key=SUtilString.extraction_applyStr(n.innerHTML));var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

//----------------------------------------------------------------------------------------------------window.b2link.html_div.a***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_div;

//window.b2link.html_div = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_div;


//----------------------------------------------------------------------------------------------------window.b2link.html_div.a***;

/**
 * <div> Element의 children을 갱신한다.
 * <div><input type="text" class="product"></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <div><input type="text" class="product" value="a.product"></div> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_child_set_data_by_classname = function( div, a )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.html_div.apply_child_set_data_by_classname():{HTMLElement}----------" );

	if( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if( 0 == a.length ){ div.innerHTML = ""; return div; }

	var $f3 = window.b2link.element.getElementsByClassName;
	var arr_length = a.length;

	var parentDiv = div.parentNode;
	var div_class_name = div.className;

	var i = $f3( parentDiv, div_class_name ).length;
	for( ; i > 0; i-- ) parentDiv.removeChild( parentDiv.childNodes[ i ] );

	for( var i = 0; i < arr_length; i++ )
	{
		var new_div = document.createElement( "div" );
			new_div.innerHTML = div.__originalInnerHTML;
			new_div.className = div_class_name;

		window.b2link.el_input.setInputValueAttributeFromClassNameDataObject( new_div, a[ i ] );

		new_div.setAttribute( "item_data", JSON.stringify( a[ i ] ) );
		parentDiv.appendChild( new_div );
		new_div = null;
	}

	window.JamesLog.timeStamp( "---- [ E ] - window.b2link.html_div.apply_child_set_data_by_classname():{HTMLElement}----------return div;" );
	return parentDiv;
};

/**
 * <div> Element의 children을 갱신한다.
 * <div><input type="text" class="product"></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <div><input type="text" class="product" value="a.product"></div> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_child_set_data_by_classname_include_other_child = function( div, a , classname )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.html_div.apply_child_set_data_by_classname_include_other_child():{HTMLElement}----------" );

	if( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if( 0 == a.length ){ div.innerHTML = ""; return div; }

	var arr_length = a.length;

	var r = "";

	for( var i = 0; i < arr_length; i++ )
	{
		window.b2link.el_input.setInputValueAttributeFromClassNameDataObject( div, a[ i ] );
		if( a[ i ][ classname ].length > 0 )
		{
			var child = window.b2link.element.getElementByClassName( div, classname );
				child.innerHTML = window.b2link.html_div.apply_child_set_data_by_classname( child, a[ i ][ classname ] ).innerHTML;
		}
		r += div.innerHTML;
		div.innerHTML = div.__originalInnerHTML;
	}

	//console.log( r );
	if( r ) div.innerHTML = r;

	window.JamesLog.timeStamp( "---- [ E ] - window.b2link.html_div.apply_child_set_data_by_classname_include_other_child():{HTMLElement}----------return div;" );
	return div;
};

//----------------------------------------------------------------------------------------------------window.b2link.html_div.a***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_select;

window.b2link.html_select = window.b2link.html_select || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_select;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_table;

window.b2link.html_table = window.b2link.html_table || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_table;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_tbody;

window.b2link.html_tbody = window.b2link.html_tbody || {};

//--------------------------------------------------window.b2link.el_tbody.a***;

/**
 * <tbody> Element의 children을 갱신한다.
 * <tbody><tr><td>{{name}}</td></tr></tbody> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <td>송선우0</td>, <td>송선우1</td> 형태로 갱신한다.
 *
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_tbody.apply_child=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

/**
 * <tbody> Element의 children을 갱신한다.
 * <tbody><tr><td>{{name}}</td></tr></tbody> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <td>송선우0</td>, <td>송선우1</td> 형태로 갱신한다.
 * {{name0}}, {{name1}} 등의 name0, name1을 보관 후 재사용한다.
 *
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_tbody.apply_child__ReUseKeyList=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;n.__list_reuse_key||(n.__list_reuse_key=SUtilString.extraction_applyStr(n.innerHTML));var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

//--------------------------------------------------window.b2link.el_tbody.a***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_tbody;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_thead;

window.b2link.html_thead = window.b2link.html_thead || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_thead;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_thead;

//window.b2link.html_thead = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_thead;


//----------------------------------------------------------------------------------------------------window.b2link.html_thread.c***;

/**
 * @function
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {String}
 */
window.b2link.html_thead.create_child = function( a )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html_thead.create_child():{String}----------" );
	var r = "<tr>";
	var th = '<th style="width: $w">$nm</th>';
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		r += th.replace( "$w", io.w + "px;" ).replace( "$nm", io.nm );
	}
	r += "</tr>";
	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html_thead.create_child():{String}----------" );

	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.html_thread.c***;


//----------------------------------------------------------------------------------------------------window.b2link.html_thread.s***;

/**
 * @function
 * @param {HTMLElement}
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 */
window.b2link.html_thead.set_child = function( element, a )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html_thead.set_child():void----------" );

	element.innerHTML = window.b2link.html.create_thead_child( a );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html_thead.set_child():void----------" );
};

//----------------------------------------------------------------------------------------------------window.b2link.html_thread.s***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.html_ul;

window.b2link.html_ul = window.b2link.html_ul || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.html_ul;


//----------------------------------------------------------------------------------------------------window.b2link.html_ul.a***;

/**
 * <ul> Element의 children을 갱신한다.
 * <ul><li>{{name}}</li></ul> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <li>송선우0</li>, <li>송선우1</li> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} ul
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_ul.apply_child=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

/**
 * <ul> Element의 children을 갱신한다.
 * <ul><li>{{name}}</li></ul> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <li>송선우0</li>, <li>송선우1</li> 형태로 갱신한다.
 * {{name0}}, {{name1}} 등의 name0, name1을 보관 후 재사용한다.
 * @function
 * @param {HTMLElement} ul
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_ul.apply_child__ReUseKeyList=function(n,r){if(n.__originalInnerHTML||(n.__originalInnerHTML=n.innerHTML),0==r.length)return n.innerHTML="",n;n.__list_reuse_key||(n.__list_reuse_key=SUtilString.extraction_applyStr(n.innerHTML));var i=SUtilString.applyBraceStrFromArray(n.__originalInnerHTML,r);return i&&(n.innerHTML=i),n};

//----------------------------------------------------------------------------------------------------window.b2link.html_ul.a***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.location;

window.b2link.location = window.b2link.location || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.location;

/**
 * window.location 에서 Parameter를 추출한다.
 * http://localhost?api=window.ui_member.public.forgotPassword&params=[1,2]
 * @function
 * @return {Object}
 * <code>
	{
		api : ""
		, params : ""//JSONArray 타입의 문자열
	}
 * </code>
 */
//window.b2link.location.get__api_params=function(){var a={api:SUtilLocation.getParameter__Name("api"),params:SUtilLocation.getParameter__Name("params")};return window.__defineGetter__("POPUP-URL-PARAMETER",function(){return a}),a};

/**
 * window.location 에서 Parameter를 추출한다.
 * http://localhost?api=window.ui_member.public.forgotPassword&params=[1,2]
 * @function
 * @return {Object}
 * <code>
	{
		api : ""
		, params : ""//JSONArray 타입의 문자열
		, SCODE : ""//시스템 코드;
	}
 * </code>
 */
window.b2link.location.get__api_params_SCODE=function(){var a={api:SUtilLocation.getParameter__Name("api"),params:SUtilLocation.getParameter__Name("params"),SCODE:SUtilLocation.getParameter__Name("SCODE")};return window.__defineGetter__("POPUP-URL-PARAMETER",function(){return a}),a};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.log;

window.b2link.log = window.b2link.log || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.log;


//----------------------------------------------------------------------------------------------------window.b2link.log.c***;

/**
 * @function
 */
window.b2link.log.comment_Dash_20=function(){window.TtwLog.timeStamp("//--------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_30=function(){window.TtwLog.timeStamp("//------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_40=function(){window.TtwLog.timeStamp("//----------------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_50=function(){window.TtwLog.timeStamp("//--------------------------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_60=function(){window.TtwLog.timeStamp("//------------------------------------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_70=function(){window.TtwLog.timeStamp("//----------------------------------------------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_80=function(){window.TtwLog.timeStamp("//--------------------------------------------------------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_90=function(){window.TtwLog.timeStamp("//------------------------------------------------------------------------------------------;")};

/**
 * @function
 */
window.b2link.log.comment_Dash_100=function(){window.TtwLog.timeStamp("//----------------------------------------------------------------------------------------------------;")};

//----------------------------------------------------------------------------------------------------window.b2link.log.c***;


//----------------------------------------------------------------------------------------------------window.b2link.log.e***;

/**
 * Signin failure시 호출하는 함수
 * 에러 메세지 상자와 콘솔 에러를 발생시킨다.
 * @function
 */
window.b2link.log.error__Signin_failure=function(){window.TtwLog.timeStamp("---- [ S ] - window.b2link.log.error__Signin_failure():void----------"),window.b2link_ui.message.error("Signin failure"),window.TtwLog.timeStamp("---- [ E ] - window.b2link.log.error__Signin_failure():void----------")};

//----------------------------------------------------------------------------------------------------window.b2link.log.e***;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.math;

window.b2link.math = window.b2link.math || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.math;


//----------------------------------------------------------------------------------------------------window.b2link.math.i;



//----------------------------------------------------------------------------------------------------window.b2link.math.i;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.mobile;

window.b2link.mobile = window.b2link.mobile || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.mobile;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.navigator;

window.b2link.navigator = window.b2link.navigator || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.navigator;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.obj;

window.b2link.obj = window.b2link.obj || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.obj;


//----------------------------------------------------------------------------------------------------window.b2link.obj.c***;

/**
 * @function
 * @param {Object} t
 * @param {Object} d
 */
window.b2link.obj.copyReference_Public_Function=function(n,o){for(var i in o)-1==i.indexOf("_")&&"function"==typeof o[i]&&(n.hasOwnProperty(i)||(n[i]=o[i]))};

//----------------------------------------------------------------------------------------------------window.b2link.obj.c***;

//----------------------------------------------------------------------------------------------------window.b2link.obj.g***;

/**
 * @function
 * @param {Object} t
 * @param {String} k
 * @return {Object}
 */
window.b2link.obj.getValueFromKey_dotKeyRef=function(t,k){return SUtilObject.getValueFromKey_dotKeyRef(t,k);};

//----------------------------------------------------------------------------------------------------window.b2link.obj.g***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.open;

window.b2link.open = window.b2link.open || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.open;

//*/
window.b2link.open[ "Dev-JSONEditor" ] = function(){ window.open( "http://222.239.10.122:49323/index-Dev-Doc_JSONEditor.html?json_url=http://222.239.10.120:43320/_mongodb/status/serverStatusMin" ); };
window.b2link.open[ "Dev-SMTEditor" ] = function(){ window.open( "http://222.239.10.122:49323/index-smt_template_list.html" ); };
window.b2link.open[ "Dev-SourceEditor" ] = function(){ window.open( "http://222.239.10.122:49323/index-Dev-SourceEditor.html" ); };

window.b2link.open.SYS0010 = function(){ window.open( "http://222.239.10.122:33333" ); };
window.b2link.open.SYS0020 = function(){ window.open( "http://222.239.10.122:49321" ); };
window.b2link.open.SYS0030 = function(){ window.open( "http://222.239.10.122:45321" ); };
window.b2link.open.SYS0100 = function(){ window.open( "http://222.239.10.122:44321" ); };
//*/

//----------------------------------------------------------------------------------------------------window.b2link.open.n***;

/**
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {String} options
 * @return {Window}
 *
 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>
	var p = window.open( "./index-popup.html", "B2Ker-Popup"
		, "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1"
		//, "outerHeight=100, outerWidth=100, innerHeight=100, innerWidth=100"
		//, "menubar=0, toolbar=0, personalbar=0, directories=0, status=0"
		//, "attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0"
	);

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "height=500, width=800, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800" );

	//alwaysRaised 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, alwaysRaised=yes" );

	//close 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, close=no" );

	//modal 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, modal=yes" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "fullscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1, attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0" );
 * </code>
 */
!function(){window.b2link.open._map={},window.b2link.open.newWindow=function(n,w,o){return window.b2link.open._map[w]=window.open(n,w,o),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+w+" - "+o),window.b2link.open._map[w]}}();

/**
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {String} opt__pos_size
 * @param {String} opt__functionality
 * @param {String} opt__requiring_privileges
 * @return {Window}

 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>
	var p = window.open( "./index-popup.html", "B2Ker-Popup"
		, "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1"
		//, "outerHeight=100, outerWidth=100, innerHeight=100, innerWidth=100"
		//, "menubar=0, toolbar=0, personalbar=0, directories=0, status=0"
		//, "attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0"
	);

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "height=500, width=800, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800" );

	//alwaysRaised 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, alwaysRaised=yes" );

	//close 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, close=no" );

	//modal 안됨;
	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, modal=yes" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "fullscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1" );

	var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1, attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0" );
 * </code>
 */
window.b2link.open.newWindow_opts=function(n,w,o,i,d){var p=o+", "+i+", "+d;return window.b2link.open._map[w]=window.open(n,w,p),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+w+" - "+p),window.b2link.open._map[w]};

/**
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {Number} pw
 * @param {Number} ph
 * @return {Window}
 *
 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>
	window.b2link.open.newWindow__CompactPopup( "http://localhost:33333/index-popup.html?api=window.ui_member.public.forgotPassword()", "SYS0010.member.public.forgotPassword", 505.81, 282.86 );
 * </code>
 */
//!function(){window.b2link.open._map=window.b2link.open._map||{},window.b2link.open.newWindow__CompactPopup=function(n,o,i,w){var e=window.screen.availWidth,a=window.screen.availHeight,t=window.screen.availLeft||window.screenLeft,p=window.screen.availTop||window.screenTop,d=t+e/2-i/2,l=p+a/2-w/2;return window.b2link.open._map[o]=window.open(n,o,"location=no,toolbar=no,scrollbars=no,resizable=no,status=no,top="+l+",left="+d+",width="+i+",height="+w),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+o+" - "+i+" * "+w),window.b2link.open._map[o]}}();
//!function(){window.b2link.open._map=window.b2link.open._map||{},window.b2link.open.newWindow__CompactPopup=function(n,o,e,i){if("object"!=typeof e){if("number"!=typeof e||"number"!=typeof i)return void window.TtwLog.error("[ ERROR ] - 3번째 파라메터가 {}가 아니면 3, 4번째 파라메터는 Number만 들어와야 한다.");e={w:e,h:i}}var w,t,a="location=no,toolbar=no,scrollbars=no,resizable=no,status=no,top=";if(e.bCenter){var l=window.screen.availWidth,p=window.screen.availHeight,r=window.screen.availLeft||window.screenLeft,d=window.screen.availTop||window.screenTop;w=r+l/2-e.w/2,t=d+p/2-e.h/2,a+=t+",left="+w+",width="+e.w+",height="+e.h}else w=window.screen.availLeft+e.l,t=window.screen.availTop+e.t,a+=t+",left="+w+",width="+e.w+",height="+e.h;window.b2link.open._map[o]=window.open(n,o,a),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+o+" - "+e.w+" * "+e.h+" - "+w+", "+t);var b=window.b2link.open._map[o];return b.onbeforeunload=function(){window.b2link.open._map[o]=null,delete window.b2link.open._map[o]},window.b2link.open._map[o]}}();
!function(){window.b2link.open._map=window.b2link.open._map||{},window.b2link.open.newWindow__CompactPopup=function(n,o,i,w){return i.params="location=no,toolbar=no,scrollbars=no,resizable=no,status=no",window.b2link.open.newWindow__RelativeCoords(n,o,i,w)}}();

/**
 * Popup Window를 생성하고 HTML을 주입한다.
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {Object} data
 * <code>
	{
		, w : 500//width;
		, h : 500//height;
		, l : 200//left;
		, t : 200//top;
		, bCenter : false
	}
 * </code>
 * @param {String} HTML
 * @param {Function} func HTML DOM 로딩 완료 후 구동될 JS 함수 소스
 * @return {Window}
 *
 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>

	var html = `<div class="ui segments">
		<div class="ui segment">
			<h5 class="ui header">Basic Line Chart</h5>
		</div>
		<div class="ui segment" style="height: 500px;">
			<div id="echarts" style="height: 100%">
			</div>
		</div>
	</div>`;

	window.b2link.open.newWindow__CompactPopup__HTML( "a.html", "a", { w:500, h:500, l:500, t:300 }, html );

 * </code>
 */
!function(){window.b2link.open._map=window.b2link.open._map||{},window.b2link.open.newWindow__CompactPopup__HTML=function(n,o,e,i,w){var a,t,l="location=no,toolbar=no,scrollbars=no,resizable=no,status=no,top=";if(e.bCenter){var d=window.screen.availWidth,p=window.screen.availHeight,r=window.screen.availLeft||window.screenLeft,c=window.screen.availTop||window.screenTop;a=r+d/2-e.w/2,t=c+p/2-e.h/2,l+=t+",left="+a+",width="+e.w+",height="+e.h}else a=window.screen.availLeft+e.l,t=window.screen.availTop+e.t,l+=t+",left="+a+",width="+e.w+",height="+e.h;window.b2link.open._map[o]=window.open(n,o,l),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+o+" - "+e.w+" * "+e.h+" - "+a+", "+t);var b=window.b2link.open._map[o];return b.onload=function(){b.document.body.innerHTML=i},b.onbeforeunload=function(){window.b2link.open._map[o]=null,delete window.b2link.open._map[o]},window.b2link.open._map[o]}}();

/**
 * Popup Window를 생성하고 HTML과 JS 함수를 주입한다.
 * JS는 HTML DOM이 생성된 후 구동된다.
 * @function
 * @param {String} url
 * @param {String} winName
 * @param {Object} data
 * <code>
	{
		, w : 500//width;
		, h : 500//height;
		, l : 200//left;
		, t : 200//top;
		, bCenter : false
	}
 * </code>
 * @param {String} HTML
 * @param {Function} func HTML DOM 로딩 완료 후 구동될 JS 함수 소스
 * @return {Window}
 *
 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
 * @example
 * <code>

	var html = `<div class="ui segments">
		<div class="ui segment">
			<h5 class="ui header">Basic Line Chart</h5>
		</div>
		<div class="ui segment" style="height: 500px;">
			<div id="echarts" style="height: 100%">
			</div>
		</div>
	</div>`;

	var func = function(){var host = window.opener.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );
		var dom = window.document.getElementById( "echarts" );
		var myChart = window.opener.echarts.init( dom );

		var app = {};
		var option = {
			  xAxis : { type : "category", data : [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ] }
			, yAxis : { type : "value" }
			, series : [ { type : "bar", data : [ 120, 200, 150, 80, 70, 110, 130 ] } ]
		};

		if( option && typeof option === "object" ) myChart.setOption( option, true );
	}

	window.b2link.open.newWindow__CompactPopup__HTML_JS( "a.html", "a", { w:500, h:500, l:500, t:300 }, html, func );


	//or

	//JSON.stringify;
	var data = '[ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun" ]';

	var html = `<div class="ui segments">
		<div class="ui segment">
			<h5 class="ui header">Basic Line Chart</h5>
		</div>
		<div class="ui segment" style="height: 500px;">
			<div id="echarts" style="height: 100%">
			</div>
		</div>
	</div>
	<script id="data" data='<!=DATA=!>'></script>`;

	html = html.replace( "<!=DATA=!>", data );

	var func = function(){
		window.DATA = JSON.parse( window.document.getElementById( "data" ).getAttribute( "data" ) );
		var host = window.opener.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" );
		var dom = window.document.getElementById( "echarts" );
		var myChart = window.opener.echarts.init( dom );

		var app = {};
		var option = {
			  xAxis : { type : "category", data : window.DATA }
			, yAxis : { type : "value" }
			, series : [ { type : "bar", data : [ 120, 200, 150, 80, 70, 110, 130 ] } ]
		};

		if( option && typeof option === "object" ) myChart.setOption( option, true );
	}

	window.b2link.open.newWindow__CompactPopup__HTML_JS( "a.html", "a", { w:500, h:500, l:500, t:300 }, html, func );

 * </code>
 */
!function(){window.b2link.open._map=window.b2link.open._map||{},window.b2link.open.newWindow__CompactPopup__HTML_JS=function(n,e,o,i,w){var t,d,a="location=no,toolbar=no,scrollbars=no,resizable=no,status=no,top=";if(o.bCenter){var l=window.screen.availWidth,r=window.screen.availHeight,p=window.screen.availLeft||window.screenLeft,c=window.screen.availTop||window.screenTop;t=p+l/2-o.w/2,d=c+r/2-o.h/2,a+=d+",left="+t+",width="+o.w+",height="+o.h}else t=window.screen.availLeft+o.l,d=window.screen.availTop+o.t,a+=d+",left="+t+",width="+o.w+",height="+o.h;window.b2link.open._map[e]=window.open(n,e,a),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+e+" - "+o.w+" * "+o.h+" - "+t+", "+d);var s=window.b2link.open._map[e];return s.onload=function(){s.document.body.addEventListener("DOMNodeInserted",function(n){s.document.body.removeEventListener("DOMNodeInserted",arguments.callee),setTimeout(function(){s.eval("("+w.toString()+")();")},1e3)}),s.document.body.innerHTML=i},s.onbeforeunload=function(){window.b2link.open._map[e]=null,delete window.b2link.open._map[e]},window.b2link.open._map[e]}}();

/**
	 * @function
	 * @param {String} url
	 * @param {String} winName
	 * @param {Object} data
	 * <code>
		{
			, w : 500//width;
			, h : 500//height;
			, l : 200//left;
			, t : 200//top;
			, bCenter : false
			, params : ""//Popup Parameters;
		}
	 * </code>
	 * @return {Window}
	 *
	 * @see https://developer.mozilla.org/ko/docs/Web/API/Window/open
	 * @example
	 * <code>

	 	var html = `<div class="ui segments">
			<div class="ui segment">
				<h5 class="ui header">Basic Line Chart</h5>
			</div>
			<div class="ui segment" style="height: 500px;">
				<div id="echarts" style="height: 100%">
				</div>
			</div>
		</div>`;

		window.b2link.open.newWindow__CompactPopup( "a.html", "a", { w:500, h:500, l:500, t:300 } );

		//------------------------------------------------------------------------------------------;

		var p = window.open( "./index-popup.html", "B2Ker-Popup"
			, "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1"
			//, "outerHeight=100, outerWidth=100, innerHeight=100, innerWidth=100"
			//, "menubar=0, toolbar=0, personalbar=0, directories=0, status=0"
			//, "attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0"
		);

		var p = window.open( "./index-popup.html", "B2Ker-Popup", "height=500, width=800, centerscreen=1" );

		var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800" );

		//alwaysRaised 안됨;
		var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, alwaysRaised=yes" );

		//close 안됨;
		var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, close=no" );

		//modal 안됨;
		var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=30, height=500, width=800, modal=yes" );

		var p = window.open( "./index-popup.html", "B2Ker-Popup", "fullscreen=1" );

		var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1" );

		var p = window.open( "./index-popup.html", "B2Ker-Popup", "left=0, top=0, height=500, width=800, screenX=0, screenY=0, centerscreen=1, attention=0, dependent=0, minimizable=0, fullscreen=0, noopener=1, resizable=0, scrollbars=0, dialog=0, modal=1, titlebar=0, alwaysRaised=1, alwaysLowered=0, close=0" );
	 * </code>
	 */
!function(){window.b2link.open._map=window.b2link.open._map||{},window.b2link.open.newWindow__RelativeCoords=function(n,e,o,i){if("object"!=typeof o){if("number"!=typeof o||"number"!=typeof i)return void window.TtwLog.error("[ ERROR ] - 3번째 파라메터가 {}가 아니면 3, 4번째 파라메터는 Number만 들어와야 한다.");o={w:o,h:i}}var w="";w=o.params?o.params+",top=":"top=";var a,t;if(o.bCenter){var d=window.screen.availWidth,p=window.screen.availHeight,r=window.screen.availLeft||window.screenLeft,l=window.screen.availTop||window.screenTop;a=r+d/2-o.w/2,t=l+p/2-o.h/2,w+=t+",left="+a+",width="+o.w+",height="+o.h}else a=window.screen.availLeft+o.l,t=window.screen.availTop+o.t,w+=t+",left="+a+",width="+o.w+",height="+o.h;window.b2link.open._map[e]=window.open(n,e,w),window.TtwLog.timeStamp("새로운 윈도우 생성 - "+e+" - "+o.w+" * "+o.h+" - "+a+", "+t);var f=window.b2link.open._map[e];return f.onbeforeunload=function(){window.b2link.open._map[e]=null,delete window.b2link.open._map[e]},window.b2link.open._map[e]}}();

//----------------------------------------------------------------------------------------------------window.b2link.open.n***;

/**
 * @function
 * @param {String} key Popup 생성시 사용한 명명
 * @return {Window}
 */
window.b2link.open.getWindow = function( key )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.open.getWindow():{Window}----------" );

	var t = window.b2link.open._map[ key ];
	if( !t )
	{
		window.TtwLog.error( key + "에 해당하는 Popup이 없음" );
		return null;
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.open.getWindow():{Window}----------return t;" );
	return t;
}

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.response;

window.b2link.response = window.b2link.response || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.response;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.service;

window.b2link.service = window.b2link.service || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.service;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.session;

window.b2link.session = window.b2link.session || {};

//--------------------------------------------------window.b2link.session.g***;

/**
 * Session 정보 Object를 반환한다.
 * @function
 * @return {Object} { "sid" : "", "Expires" : "", "mid" : "" }
 */
//(function(){var _a=["Expires","sid","mid"];window.b2link.session.getSession=function(){for(var e,i=window.sessionStorage,n={},s=0,t=_a.length;t>s;++s)e=_a[s],n[e]=i.getItem(e),n[e]||delete n[e],""==n[e]&&delete n[e];return n};})();
(function(){var e=["Expires","sid","mid"],n=window.b2link.STATIC.CONFIG.URL;window.b2link.session.getSession=function(){for(var i,o=window.sessionStorage,s={},t=0,d=e.length;d>t;++t)i=e[t],s[i]=o.getItem(i),s[i]||delete s[i],""==s[i]&&delete s[i];return s.SCODE=n.SCODE,s}})();

/**
 * sid 문자열만 반환한다.
 * @function
 * @return {String}
 */
window.b2link.session.getSession__sid=function(){return window.sessionStorage.getItem("sid")};

/**
 * URI용 Session 문자열을 반환한다.
 * @function
 * @return {String} &sid=asdasdasd&Expires=asdasdasd&SCODE=asdasdasd&mid=asdasdasd
 */
//window.b2link.session.getSession__URI=function(){var n="",i=window.b2link.session.getSession();for(var s in i)n+="&"+s+"="+i[s];return n};
window.b2link.session.getSession__URI=function(){var i=window.b2link.session.getSession();return"&sid="+i.sid+"&mid="+i.mid+"&d_ex="+i.Expires+"&SCODE="+i.SCODE};

//--------------------------------------------------window.b2link.session.g***;


//--------------------------------------------------window.b2link.session.r***;

/**
 * @function
 */
!function(){var e=["Expires","sid","mid"];window.b2link.session.removeSession=function(){for(var i=window.sessionStorage,n=0,o=e.length;o>n;++n)i.removeItem(e[n])}}();

//--------------------------------------------------window.b2link.session.r***;


//--------------------------------------------------window.b2link.session.s***;

/**
 * @function
 * @param {Object} d data { "Expires" : "", "sid" : "", "mid" : mid }
 */
window.b2link.session.setSession=function(s){var i=window.sessionStorage;s.sid&&i.setItem("sid",s.sid),s.Expires&&i.setItem("Expires",s.Expires),s.mid&&i.setItem("mid",s.mid)};

/**
 * window.b2link.session.sessionEventListeners.js
 * Session 관련 이벤트 처리
 * 브라우저 창 종료전 이벤트 처리
 * f5 리프레쉬 키 처리
 * @function
 */
!function(){var e=function(e){window.b2link.session.removeSession(),window.service_member.session.destroy_session()},n=function(n){window.removeEventListener("beforeunload",e,!1)},o=function(n){116==n.keyCode&&window.removeEventListener("beforeunload",e,!1),n.ctrlKey&&(82==n.keyCode&&window.removeEventListener("beforeunload",e,!1),116==n.keyCode&&window.removeEventListener("beforeunload",e,!1)),n.metaKey&&(82==n.keyCode&&window.removeEventListener("beforeunload",e,!1),116==n.keyCode&&window.removeEventListener("beforeunload",e,!1))};window.b2link.session.addEvent=function(){window.addEventListener("beforeunload",e,!1,0,!0),window.addEventListener("blur",n,!1,0,!0),window.addEventListener("keydown",o,!1,0,!0)},window.b2link.session.removeEvent=function(){window.removeEventListener("beforeunload",e,!1),window.removeEventListener("blur",n,!1),window.removeEventListener("keydown",o,!1)},window.b2link.session.addEvent()}();

//--------------------------------------------------window.b2link.session.s***;


//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.session;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.string;

window.b2link.string = window.b2link.string || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.string;


//----------------------------------------------------------------------------------------------------window.b2link.string.a***;

/**
 * {{nm}} 형태의 문자열을 Object의 value로 치환한다.
 * @function
 * @param {String} s
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {String}
 */
window.b2link.string.applyBrace = SUtilString.applyBraceStrFromObj__NV_NA;

/**
 * [[nm]] 형태의 문자열을 Object의 value로 치환한다.
 * element의 innerHTML이 갱신된다.
 * @function
 * @param {String} s
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {String}
 */
window.b2link.string.applyBrackets = SUtilString.applyBracketsStrFromObj__NV_NA;

/**
 * ((nm)) 형태의 문자열을 Object의 value로 치환한다.
 * @function
 * @param {String} s
 * @param {Object} o { "nm" : "_id", "w" : 10 }
 * @return {String}
 */
window.b2link.string.applyParentheses = SUtilString.applyParenthesesStrFromObj__NV_NA;

//----------------------------------------------------------------------------------------------------window.b2link.string.a***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.timer;

window.b2link.timer = window.b2link.timer || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.timer;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui;

window.b2link.ui = window.b2link.ui || {};

/**
 * window.b2link_ui***의 함수를 호출 시 appendChild의 대상이 되는 Element
 * window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID와 셋트로 변경 하여야 한다.
 * window.b2ker.ui***의 함수를 호출 시 appendChild의 대상이 되는 Element
 * window.brandportal.ui***의 함수를 호출 시 appendChild의 대상이 되는 Element
 * @Static
 * @property {String}
 */
window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT = window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED;

/**
 * window.b2link_ui***의 함수를 호출 시 appendChild의 대상이 되는 Element's id
 * window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT 셋트로 변경 하여야 한다.
 * @Static
 * @property {String}
 */
window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID = window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_FIXED;

/**
 * @function
 * @param {String} id
 */
window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT = function( id )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT():void----------" );

	window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID = window.b2link.STATIC.CONST.ROOT_DIV.ID_UI_COMPONENT_FIXED = id;
	window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT = window.b2link.STATIC.CONST.ROOT_DIV.EL_UI_COMPONENT_FIXED = window.document.getElementById( id );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT():void----------" );
};

/**
 * 메인 화면 컨테이너에서 각 View 화면 Position, Size를 컨트롤 한다.
 * @function
 * @param {HTMLElement} el
 */
window.b2link.ui.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT = function( el )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT():void----------" );

	//오른쪽 View Container 공간;
	var s = el.style;

		//s.display = "";
		s.position = "absolute";

	if( el.__FULL_SIZE_MODE )
	{
		var le = 0;//left;
		var ri = 0;//right;
		var to = 0;//top;
		var bo = 0;//bottom;

		s.left = le + "px";
		s.right = ri + "px";

		s.top = to + "px";
		//s.bottom = bo + "px";

		var minMaxWidth = window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.clientWidth - le - ri + "px";
		s.minWidth = s.maxWidth = minMaxWidth;
	}
	else
	{
		//s.top = _el_div_content.offsetTop + 1 + "px"; s.bottom = "1px";
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT():void----------" );
};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui;


//----------------------------------------------------------------------------------------------------window.b2link.ui.__a***;

/**
 * @function
 * @param {Object} elCtrl
 * @param {Object} uiOptions
 */
window.b2link.ui.__addUI_Common__UIOptions=function(o,t){var e=o,_=e.__el,i=_.style;t?(0==t.display?e.hide():e.show(),t.hasOwnProperty("left")||t.hasOwnProperty("top")||t.hasOwnProperty("right")||t.hasOwnProperty("bottom")?(i.left=t.left?t.left+"px":"",i.top=t.top?t.top+"px":"",i.right=t.right?t.right+"px":"",i.bottom=t.lbottomeft?t.bottom+"px":""):e.__FULL_SIZE_MODE||window.b2link.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop(_)):(e.show(),0==_.offsetLeft&&0==_.offsetTop&&(e.__FULL_SIZE_MODE||window.b2link.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop(_)))};

/**
 * @function
 * @param {Object} elCtrl
 * @param {Object} uiOptions
 */
//window.b2link.ui.__addUIAndModal_Common__UIOptions=function(d,n){var o=d;n&&0==n.display?o.hide():o.showAndModal()};
window.b2link.ui.__addUIAndModal_Common__UIOptions=function(t,o){var n=t;if(o){if(0==o.display?n.hide():n.showAndModal_Sync(),o.hasOwnProperty("left")||o.hasOwnProperty("top")||o.hasOwnProperty("right")||o.hasOwnProperty("bottom")){var e=n.__el.style;e.left=o.left?o.left+"px":"",e.top=o.top?o.top+"px":"",e.right=o.right?o.right+"px":"",e.bottom=o.lbottomeft?o.bottom+"px":""}}else n.showAndModal_Sync()};

//----------------------------------------------------------------------------------------------------window.b2link.ui.__a***;


//----------------------------------------------------------------------------------------------------window.b2link.ui.__g***;

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_CSS=function(i,n){var e=i+n+".css";return e};

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_HTML=function(i,n){var l=window.b2link.STATIC.CONFIG.URL.UI,t=i+n+l.CSS+".html";return t};

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_JS=function(i,n){var e=i+n+".js";return e};

/**
 * @function
 * @param {String} folderName
 * @param {String} fileName
 */
window.b2link.ui.__getFileNM_THTML=function(i,n){var t=window.b2link.STATIC.CONFIG.URL.UI,l=i+n+t.CSS+".thtml";return l};

//----------------------------------------------------------------------------------------------------window.b2link.ui.__g***;


//----------------------------------------------------------------------------------------------------window.b2link.ui.a***;

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS=function(_){var i=window.b2link.ui.__getFileNM_HTML(_.url,_.nm),n=window.b2link.ui.__getFileNM_JS(_.url,_.nm),l=_.key?_.key:_.nm,d=window.b2link.util.importHTMLJS__And_Add_b2link_STATIC_UI,w=d(l,i,n,window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID);return w[0].__KEY_UI=l,w};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS__CheckStaticUI=function(i,n){var _=window.b2link.ui.staticUIMap_checkObject(i.key);return _?(window.b2link.ui.__addUI_Common__UIOptions(_[1],n),_):(_=window.b2link.ui.add_HTML_JS(i),_&&window.b2link.ui.__addUI_Common__UIOptions(_[1],n),_)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS_CSS=function(_){var i=window.b2link.ui.__getFileNM_HTML(_.url,_.nm),n=window.b2link.ui.__getFileNM_JS(_.url,_.nm),l=window.b2link.ui.__getFileNM_CSS(_.css_url,_.css_front_nm+_.nm),w=_.key?_.key:_.nm,d=window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI,u=d(w,i,n,l,window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID);return u[0].__KEY_UI=w,u};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI=function(i,_){var n=window.b2link.ui.staticUIMap_checkObject(i.key);return n?(window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n):(n=window.b2link.ui.add_HTML_JS_CSS(i),n&&window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_THTML_JS_CSS__CheckStaticUI=function(i,_){var n=window.b2link.ui.staticUIMap_checkObject(i.key);return n?(window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n):(n=window.b2link.ui.add_THTML_JS_CSS(i),n&&window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.add_THTML_JS_CSS__CheckStaticUI=function(i,_){var n=window.b2link.ui.staticUIMap_checkObject(i.key);return n?(window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n):(n=window.b2link.ui.add_THTML_JS_CSS(i),n&&window.b2link.ui.__addUI_Common__UIOptions(n[1],_),n)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.addAndModal_HTML_JS__CheckStaticUI=function(i,n){var d=window.b2link.ui.staticUIMap_checkObject(i.key);return d?(window.b2link.ui.__addUIAndModal_Common__UIOptions(d[1],n),d):(d=window.b2link.ui.add_HTML_JS(i),d&&window.b2link.ui.__addUIAndModal_Common__UIOptions(d[1],n),d)};

/**
 * @function
 * @param {Object} d data
 * <code>
 * {
 *	"nm" : ""
 *	, "url" : ""
 *	, "css_url : ""
 *	, "css_front_nm : ""
 *	, "key" : ""
 * }
 * </code>
 * @param {Object} uiOptions
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui.addAndModal_HTML_JS_CSS__CheckStaticUI=function(i,n){var d=window.b2link.ui.staticUIMap_checkObject(i.key);return d?(window.b2link.ui.__addUIAndModal_Common__UIOptions(d[1],n),d):(d=window.b2link.ui.add_HTML_JS_CSS(i),d&&window.b2link.ui.__addUIAndModal_Common__UIOptions(d[1],n),d)};

//----------------------------------------------------------------------------------------------------window.b2link.ui.a***;


//----------------------------------------------------------------------------------------------------window.b2link.ui.s***;

/**
 * @function
 * @param {String} key
 * @param {Array} t [ HTMLElement, {} ]
 */
window.b2link.ui.staticUIMap_Add=function(i,d){window.b2link.STATIC.UI.__add(i,d)};

/**
 * @function
 * @param {String} key
 * @return {null|Array} [ {HTMLElement}, {} ]
 */
window.b2link.ui.staticUIMap_checkObject=function(n){if(window.b2link.STATIC.UI.__checkKey(n)){window.b2link.STATIC.UI.__show(n);var i=window.b2link.STATIC.UI.__getObj(n);return i}return null};

/**
 * @function
 * @param {String} key
 */
window.b2link.ui.staticUIMap_Remove=function(i){var e=window.b2link.STATIC.UI[i];if(e)e[0].dispose&&e[0].dispose(),e[1].dispose&&e[1].dispose(),delete window.b2link.STATIC.UI[i];else{var s="UI Map에 key - "+i+" 가 존재 하지 않습니다.";window.b2link_ui.message.error(s)}};

//----------------------------------------------------------------------------------------------------window.b2link.ui.s***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui_feature;

window.b2link.ui_feature = window.b2link.ui_feature || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui_feature;


//--------------------------------------------------window.b2link.ui_feature.d***;

/**
 * @function
 * @param {HTMLElement} t
 * @param {Boolean} bAdd false false면 이벤트를 제거만 한다 true시 1회 이벤트 제거후 다시 이벤트를 등록한다.
 * @param {Boolean} bMDownReAppend true시 마우스 다운이 발생하면 대상객체(View 0번째 Element)를 다시 한번 부모객체에 appendChild 한다.
 * @param {Boolean} bMUpReAppend true시 마우스 업이 발생하면 대상객체(View 0번째 Element)를 다시 한번 부모객체에 appendChild 한다.
 */
!function(){var e=function(e){var t=e.target;return"BUTTON"==t.tagName||"I"==t.tagName?1:void 0},t=function(t){if(!e(t)){var o=t.currentTarget,a=o.parentElement,m=a.style;m.__originalLeft=m.left,m.__originalTop=m.top,m.__originalRight=m.right,m.__originalBottom=m.bottom,m.__originalWidth=m.clientWidth,m.__originalHeight=m.clientHeight,m.width=m.__originalWidth+"px",m.height=m.__originalHeight+"px",m.right="",m.bottom="",t.stopImmediatePropagation(),t.stopPropagation(),window.b2link.element._appendChild(a.parentElement,a),i._t0=a,window.removeEventListener("mousemove",i,!1),window.addEventListener("mousemove",i,!1,0,!0),a&&(a.removeEventListener("mouseout",n,!1),a.addEventListener("mouseout",n,!1,0,!0)),a&&(a.removeEventListener("mouseover",r,!1),a.addEventListener("mouseover",r,!1,0,!0))}},o=function(t){if(!e(t)){var o=t.currentTarget,a=o.parentElement,m=m;m.__originalLeft=m.left,m.__originalTop=m.top,m.__originalRight=m.right,m.__originalBottom=m.bottom,m.__originalWidth=m.clientWidth,m.__originalHeight=m.clientHeight,m.width=m.__originalWidth+"px",m.height=m.__originalHeight+"px",m.right="",m.bottom="",t.stopImmediatePropagation(),t.stopPropagation(),window.b2link.element._appendChild(a.parentElement,a),i._t0=a,window.removeEventListener("mousemove",i,!1),window.addEventListener("mousemove",i,!1,0,!0),a&&(a.removeEventListener("mouseout",n,!1),a.addEventListener("mouseout",n,!1,0,!0)),a&&(a.removeEventListener("mouseover",r,!1),a.addEventListener("mouseover",r,!1,0,!0))}},i=function(t){if(!e(t)){var o=i._t0;o.style.left=o.offsetLeft+t.movementX+"px",o.style.top=o.offsetTop+t.movementY+"px",t.stopImmediatePropagation(),t.stopPropagation()}},n=function(t){if(!e(t)){var o=i._t0;n._time0=setTimeout(function(){window.removeEventListener("mousemove",i,!1),o&&o.removeEventListener("mouseout",n,!1)},300),t.stopImmediatePropagation(),t.stopPropagation()}};n._time0=0;var r=function(t){e(t)||(clearTimeout(n._time0),t.stopImmediatePropagation(),t.stopPropagation())},a=function(t){if(!e(t)){var o=i._t0;t.stopImmediatePropagation(),t.stopPropagation(),o&&o.removeEventListener("mouseout",n,!1),o&&o.removeEventListener("mouseover",r,!1),i._t0=null,window.removeEventListener("mousemove",i,!1)}},m=function(t){if(!e(t)){var o=i._t0;t.stopImmediatePropagation(),t.stopPropagation(),window.b2link.element.appendChild(o.parentElement,o),o&&o.removeEventListener("mouseout",n,!1),o&&o.removeEventListener("mouseover",r,!1),i._t0=null,window.removeEventListener("mousemove",i,!1)}};window.b2link.ui_feature.drag=function(e,i,n,r){return e?(e.removeEventListener("mousedown",t,!1),e.removeEventListener("mousedown",o,!1),e.removeEventListener("mouseup",a,!1),void(i&&(n?e.addEventListener("mousedown",o,!1,0,!0):e.addEventListener("mousedown",t,!1,0,!0),r?e.addEventListener("mouseup",m,!1,0,!0):e.addEventListener("mouseup",a,!1,0,!0)))):(window.b2link_ui.message.error("window.b2link.ui_feature.drag 't'가 존재 하지 않습니다. 로직을 다시 확인 하세요."),void window.b2link_ui.message.error("\n	 - TitleBar-***가 없다. 다른 상속 객체를 사용하거나 TitleBar-***를 생성"))}}();

//--------------------------------------------------window.b2link.ui_feature.d***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui_modal;

window.b2link.ui_modal = window.b2link.ui_modal || {};

//--------------------------------------------------;

window.b2link.ui_modal._evt_mClick__modal_bg = function( e )
{
	e.stopImmediatePropagation();
	e.stopPropagation();
	window.b2link.ui_modal.hide();
};

//--------------------------------------------------;

window.b2link.ui_modal.addEvent__mClick__modal_bg=function(){window.b2link.ui_modal.removeEvent__mClick__modal_bg(),window.b2link.ui_modal.modal_bg.addEventListener("click",window.b2link.ui_modal._evt_mClick__modal_bg,!1,0,!0)};
window.b2link.ui_modal.removeEvent__mClick__modal_bg=function(){window.b2link.ui_modal.modal_bg.removeEventListener("click",window.b2link.ui_modal._evt_mClick__modal_bg,!1)};

//--------------------------------------------------;

/**
 * window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT를 기준으로 FullSize View객체를 변경한다.
 * @function
 * @param {HTMLElement} el
 */
window.b2link.ui_modal.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT = function( el )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui_modal.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT():void----------" );

	var s = el.style;
		s.position = "absolute";

	if( el.__FULL_SIZE_MODE )
	{
		var p = window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.parentElement;

		//var le = 10;
		var le = p.offsetLeft + 10;
		var ri = 10;//right;
		var to = 1;//top;
		var bo = 1;//bottom;

		s.left = le + "px";
		s.right = ri + "px";

		s.top = to + "px";
		//s.bottom = bo + "px";

		var minMaxWidth = window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT.clientWidth - 10 - ri + "px";
		s.minWidth = s.maxWidth = minMaxWidth;

		window.b2link.event.dispatchCE__RESIZED_EL( el, null );
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui_modal.setPositionSize__FULL_SIZE_MODE__In_APPEND_CHILD_TARGET_ELEMENT():void----------" );
};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui_modal;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.a***;

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )의 모든 children(자식 Elements)를 removeChild 한다.
 *  - bRemoveAllChildren으로 조절 가능 기본이 true
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )에 HTMLElement를 appendChild 한다.
 * @function
 * @param {HTMLElement} o
 * @param {Boolean} bRemoveAllChildren true
 */
window.b2link.ui_modal.appendChild=function(n,i){0!=i&&(i=!0),i&&window.b2link.ui_modal.removeAllChildren(),window.b2link.element.appendChild(window.b2link.ui_modal.modal_content,n)};

/**
 * Modal Content DIV에 객체를 추가한다.
 * Modal Content DIV에 있던 객체들은 Modal Background Content에 옮긴다.
 * @function
 * @param {HTMLElement} o
 */
window.b2link.ui_modal.appendChild_MoveCurrentChildren=function(n){window.b2link.ui_modal.move_ContentChildrenToBGContent(),window.b2link.ui_modal.appendChild(n,!1)};

/**
 * Modal Background Content DIV에 객체를 추가한다.
 * @function
 * @param {HTMLElement} o
 */
window.b2link.ui_modal.appendChildToBGContent=function(n){window.b2link.element.appendChild(window.b2link.ui_modal.modal_bg_content,n)};

/**
 * 사용안함
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )의 모든 children(자식 Elements)를 removeChild 한다.
 *  - bRemoveAllChildren으로 조절 가능 기본이 true
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )에 HTMLElement를 appendChild 한다.
 * @function
 * @param {HTMLElement} o
 * @param {Boolean} bRemoveAllChildren true
 */
window.b2link.ui_modal.appendSubChild=function(n,i){0!=i&&(i=!0),i&&window.b2link.ui_modal.removeAllChildren(),window.b2link.element.appendChild(window.b2link.ui_modal.modal_content,n)};

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.a***;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.d***;

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )의 모든 children(자식 Elements)를 dispose 한다.
 * @function
 */
window.b2link.ui_modal.disposeAllChildren=function(){window.b2link.element.disposeAllChildren(window.b2link.ui_modal.modal_content)};

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.d***;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.h***;

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 숨긴다.
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.opacity = 0
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.display = "none"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "none"
 * @function
 */
//!function(){window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.hide=function(){window.b2link.ui_modal;window.b2link.ui_modal.hide._f0()},window.b2link.ui_modal.hide._f0=function(){var i=window.b2link.ui_modal;i.modal_bg_content.style.display="none",i.modal_bg.style.display="none",i.modal_content.style.display="none"},window.b2link.ui_modal.hide._timeout0=0}();
!function(){window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.hide=function(){window.b2link.ui_modal;window.b2link.ui_modal.hide._f0()},window.b2link.ui_modal.hide._f0=function(){var i=window.b2link.ui_modal;i.modal_bg_content.style.display="none",i.modal_bg.style.display="none",i.modal_content.style.display="none",window.b2link.ui_modal.addEvent__mClick__modal_bg()},window.b2link.ui_modal.hide._timeout0=0}();

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 숨긴다.
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.display = "none"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.opacity = 0
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "none"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 2 ] ).style.display = "none"
 * hide시 transition 효과를 추가 한다.
 * @function
 */
//!function(){window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.hide_transition=function(){var i=window.b2link.ui_modal;i.modal_bg_content.children.length||(i.modal_bg.style.opacity=0,clearTimeout(window.b2link.ui_modal.hide_transition._timeout0),window.b2link.ui_modal.hide_transition._timeout0=setTimeout(window.b2link.ui_modal.hide_transition._f0,1))},window.b2link.ui_modal.hide_transition._f0=function(){var i=window.b2link.ui_modal;i.modal_bg_content.style.display="none",i.modal_bg.style.display="none",i.modal_content.style.display="none",window.b2link.element.mouseEnable(i.modal_content)},window.b2link.ui_modal.hide_transition._timeout0=0}();
!function(){window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.hide_transition=function(){var i=window.b2link.ui_modal;i.modal_bg_content.children.length||(i.modal_bg.style.opacity=0,clearTimeout(window.b2link.ui_modal.hide_transition._timeout0),window.b2link.ui_modal.hide_transition._timeout0=setTimeout(window.b2link.ui_modal.hide_transition._f0,1))},window.b2link.ui_modal.hide_transition._f0=function(){var i=window.b2link.ui_modal;i.modal_bg_content.style.display="none",i.modal_bg.style.display="none",i.modal_content.style.display="none",window.b2link.ui_modal.addEvent__mClick__modal_bg()},window.b2link.ui_modal.hide_transition._timeout0=0}();

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.h***;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.i***;

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )의 기초 설정을 셋팅한다.
 * Application이 처음 구동 될시 1회 자동으로 실행하고 기능이 사라지는 함수다.
 * - Modal Background Content DIV : 화면에 표시는 되지만, 작동 불가능 상태의 객체
 * - Modal Background DIV : 검은색 반투명 모달 레이어
 * - Modal Content DIV : 작동상태가 될 객체가 추가될 레이어
 * 형태로 구성되어있다.
 * @function
 */
//!function(){var n=window.b2link.ui_modal,i=window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.initialize=function(){if(!n.modal_bg){var o=window.b2link.element.getElementByClassName;n.modal_bg_content=o(i,"modal-background-content"),n.modal_bg=o(i,"modal-background"),n.modal_content=o(i,"modal-content"),window.b2link.element.mouseEnable(n.modal_bg),window.b2link.element.mouseEnable(n.modal_bg),n.modal_bg.addEventListener("click",function(n){n.stopImmediatePropagation(),n.stopPropagation(),window.b2link.ui_modal.hide()},!1,0,!0),window.addEventListener("resize",function(i){n.modal_bg_content.style.maxHeight=n.modal_bg.style.maxHeight=n.modal_content.style.maxHeight=window.document.body.clientHeight+"px"},!1,0,!0)}window.b2link.ui_modal.initialize=function(){}},window.b2link.ui_modal.initialize()}();
//!function(){var n=window.b2link.ui_modal,i=window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.initialize=function(){if(!n.modal_bg){var o=window.b2link.element.getElementByClassName;n.modal_bg_content=o(i,"modal-background-content"),n.modal_bg=o(i,"modal-background"),n.modal_content=o(i,"modal-content"),window.b2link.element.mouseEnable(n.modal_bg),window.b2link.element.mouseEnable(n.modal_bg),n.modal_bg.addEventListener("click",function(n){n.stopImmediatePropagation(),n.stopPropagation(),window.b2link.ui_modal.hide()},!1,0,!0),n.modal_content.addEventListener("click",function(n){"divContainer topModal modal-content"==n.target.className&&(n.stopImmediatePropagation(),n.stopPropagation(),window.b2link.ui_modal.hide())},!1,0,!0),window.addEventListener("resize",function(i){n.modal_bg_content.style.maxHeight=n.modal_bg.style.maxHeight=n.modal_content.style.maxHeight=window.document.body.clientHeight+"px"},!1,0,!0)}window.b2link.ui_modal.initialize=function(){}},window.b2link.ui_modal.initialize()}();
//!function(){var n=window.b2link.ui_modal,i=window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.initialize=function(){if(!n.modal_bg){var o=window.b2link.element.getElementByClassName;n.modal_bg_content=o(i,"modal-background-content"),n.modal_bg=o(i,"modal-background"),n.modal_content=o(i,"modal-content"),window.b2link.element.mouseEnable(n.modal_bg),window.b2link.element.mouseEnable(n.modal_bg),n.modal_bg.addEventListener("click",function(n){n.stopImmediatePropagation(),n.stopPropagation(),window.b2link.ui_modal.hide()},!1,0,!0),n.modal_content.addEventListener("click",function(n){"divContainer topModal modal-content"==n.target.className&&(n.stopImmediatePropagation(),n.stopPropagation(),window.b2link.ui_modal.hide())},!1,0,!0),window.addEventListener("resize",function(i){n.modal_bg_content.style.maxHeight=n.modal_bg.style.maxHeight=n.modal_content.style.maxHeight=window.document.body.clientHeight+"px"},!1,0,!0)}window.b2link.ui_modal.initialize=function(){}};try{window.b2link.ui_modal.initialize()}catch(o){window.TtwLog.error("window.b2link.ui_modal.initialize 실패")}}();
!function(){var n=window.b2link.ui_modal,i=window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.initialize=function(){if(!n.modal_bg){var o=window.b2link.element.getElementByClassName;n.modal_bg_content=o(i,"modal-background-content"),n.modal_bg=o(i,"modal-background"),n.modal_content=o(i,"modal-content"),window.b2link.element.mouseEnable(n.modal_bg),window.b2link.element.mouseEnable(n.modal_bg),window.b2link.ui_modal.addEvent__mClick__modal_bg(),n.modal_content.addEventListener("click",function(n){"divContainer topModal modal-content"==n.target.className&&(n.stopImmediatePropagation(),n.stopPropagation(),window.b2link.ui_modal.hide())},!1,0,!0),window.addEventListener("resize",function(i){n.modal_bg_content.style.maxHeight=n.modal_bg.style.maxHeight=n.modal_content.style.maxHeight=window.document.body.clientHeight+"px"},!1,0,!0)}window.b2link.ui_modal.initialize=function(){}};try{window.b2link.ui_modal.initialize()}catch(o){window.TtwLog.error("window.b2link.ui_modal.initialize 실패")}}();

/**
 * @function
 * @return {Boolean}
 */
!function(){var i=window.b2link.ui_modal;window.b2link.ui_modal.isVisible=function(){var n=i.modal_bg.style;return"none"==n.display?!1:"none"!=n.display?!0:void 0}}();

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.i***;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.m***;

/**
 * Modal Background Content DIV에 있는 모든 객체를 Modal Content로 옮긴다.
 * @function
 */
window.b2link.ui_modal.move_BGContentChildrenToContent=function(){try{for(var n=window.b2link.ui_modal.modal_bg_content,o=window.b2link.ui_modal.appendChild,i=n.children,d=0,l=i.length;l>d;++d)o(i[0],!1);l&&window.b2link.ui_modal.show()}catch(t){window.TtwLog.error("window.b2link.ui_modal.move_BGContentChildrenToContent Error : "+t)}};

/**
 * Modal Background Content DIV에 마지막으로 추가된 객체를 Modal Content DIV에 추가가 된다.
 * @function
 */
window.b2link.ui_modal.move_BGContentLastChildToContent=function(){try{var n=window.b2link.ui_modal.modal_bg_content.children,o=n.length;o&&(window.b2link.ui_modal.show(),window.b2link.ui_modal.appendChild(n[o-1],!1))}catch(i){window.TtwLog.error("window.b2link.ui_modal.move_BGContentLastChildToContent Error : "+i)}};

/**
 * Modal Content DIV에 있는 객체들를 Modal Content DIV에 옮긴다.
 * @function
 */
window.b2link.ui_modal.move_ContentChildrenToBGContent=function(){try{for(var n=window.b2link.ui_modal.modal_content,o=window.b2link.ui_modal.appendChildToBGContent,i=n.children,t=0,d=i.length;d>t;++t)o(i[0])}catch(l){window.TtwLog.error("Error : "+l)}};

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.m***;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.r***;

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )의 모든 children(자식 Elements)를 removeChild 한다.
 * //Children들의 style.opacity를 0으로 만든다.
 * @function
 */
window.b2link.ui_modal.removeAllChildren=function(){try{for(var o=window.b2link.ui_modal.modal_content,i=window.b2link.ui_modal.removeChild,n=o.children,l=0,r=n.length;r>l;++l)i(n[0])}catch(d){window.TtwLog.error("Error : "+d)}};

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )에 HTMLElement를 removeChild 한다.
 * @function
 * @param {HTMLElement} o
 */
window.b2link.ui_modal.removeChild=function(o){try{window.b2link.element.removeChild(window.b2link.ui_modal.modal_content,o)}catch(l){global.TtwLog.error("window.b2link.ui_modal.removeChild Error : "+l),global.TtwLog.error(window.b2link.element.getID_Or_ClassName(o)+"가 Modal Content의 자식 객체가 아니다.")}};

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] )에 HTMLElement를 removeChild 한다.
 * @function
 * @param {HTMLElement} o
 */
window.b2link.ui_modal.removeChild_BGC=function(o){try{window.b2link.element.removeChild(window.b2link.ui_modal.modal_bg_content,o)}catch(l){global.TtwLog.error("window.b2link.ui_modal.removeChild_BGC Error : "+l),global.TtwLog.error(window.b2link.element.getID_Or_ClassName(o)+"가 Modal Background Content의 자식 객체가 아니다.")}};

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.r***;


//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.s***;

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 보인다.
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL ).style.display = "block"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.opacity = 0.5
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.display = "block"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "block"
 * @function
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.list.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
!function(){var o=window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.show=function(){o.style.display="block";var l=window.b2link.ui_modal;l.modal_bg_content.style.display="block",l.modal_bg.style.display="block",l.modal_bg.style.opacity=0,l.modal_content.style.display="block",window.b2link.ui_modal.show._f0()},window.b2link.ui_modal.show._f0=function(){window.b2link.ui_modal.modal_bg.style.opacity=.5,window.getComputedStyle(window.b2link.ui_modal.modal_bg).opacity},window.b2link.ui_modal.show._timeout0=0}();

/**
 * 모달을 띄운다.
 * 사용자 인터렉션으로 모달 종료 불가
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 보인다.
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL ).style.display = "block"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.opacity = 0.5
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.display = "block"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "block"
 * @function
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.list.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
!function(){var o=window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.show_NClose=function(){o.style.display="block";var l=window.b2link.ui_modal;l.modal_bg_content.style.display="block",l.modal_bg.style.display="block",l.modal_bg.style.opacity=0,l.modal_content.style.display="block",window.b2link.ui_modal.removeEvent__mClick__modal_bg(),window.b2link.ui_modal.show_NClose._f0()},window.b2link.ui_modal.show_NClose._f0=function(){window.b2link.ui_modal.modal_bg.style.opacity=.5,window.getComputedStyle(window.b2link.ui_modal.modal_bg).opacity},window.b2link.ui_modal.show_NClose._timeout0=0}();

/**
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL )을 보인다.
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL ).style.display = "block"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 0 ] ).style.opacity = "block"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.opacity = 0.5
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 1 ] ).style.display = "block"
 * Static Modal UI( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP_MODAL.children[ 2 ] ).style.display = "block"
 * show시 transition 효과를 추가 한다.
 * @function
 * @example
 * <code>
	//----------Modal 객체 전환;
	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();
	var modal0Ctrl = modal0[ 1 ];

	var modal1 = window.b2link_ui.selector.partner.partner_person();
	var modal1Ctrl = modal1[ 1 ];

	var modal0 = window.b2link_ui.selector.list.category.category_partner_buyer();

		modal0Ctrl.addEvent_mClick( function( li ){
		console.log( "메롱" );
		console.log( li );
		console.log( li.list_item_value );

		modal1Ctrl.showAndModal();
	});

	//----------다중 Modal 객체;
	var o0 =  window.b2link_ui.selector.table.list_static.country();
	var o1 = window.b2link_ui.selector.list.list_static.country();
	var o0c = o0[ 1 ];
	var o1c = o1[ 1 ];
	o0c.showAndModal( false );
	o1c.showAndModal( false );

	o0c.showAndModal_MoveCurrentChildren();
	o1c.showAndModal_MoveCurrentChildren();
 * </code>
 */
!function(){var i=window.b2link.STATIC.CONST.ROOT_DIV.EL_TOP_MODAL;window.b2link.ui_modal.show_transition=function(){var o=window.b2link.ui_modal;i.style.display="block",o.modal_bg_content.style.display="block",o.modal_bg.style.display="block",o.modal_content.style.display="block",clearTimeout(window.b2link.ui_modal.show_transition._timeout0),window.b2link.ui_modal.show_transition._timeout0=setTimeout(window.b2link.ui_modal.show_transition._f0,1)},window.b2link.ui_modal.show_transition._f0=function(){window.b2link.ui_modal.modal_bg.style.opacity=.5,window.getComputedStyle(window.b2link.ui_modal.modal_bg).opacity},window.b2link.ui_modal.show_transition._timeout0=0}();

//----------------------------------------------------------------------------------------------------window.b2link.ui_modal.s***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui_resource;

window.b2link.ui_resource = window.b2link.ui_resource || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui_resource;


//----------------------------------------------------------------------------------------------------window.b2link.ui_reousrce.a***;

/**
 * ***.local.**.json을 가져온 후 TargetElement.innerHTML의 ((label)) 문자열에 치환 시켜준다.
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyParentheses_LocaleLabel=function(e,n){n.__originalInnerHTML_Locale||(n.__originalInnerHTML_Locale=n.innerHTML),window.b2link.html.applyParentheses(n,window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel(e))};

/**
 * ***.local.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyParentheses_LocaleLabel_Children=function(e,n){n.__originalInnerHTML_Locale||(n.__originalInnerHTML_Locale=n.innerHTML),SUtilString.applyParenthesesStrFromObj__NV_NA__El_Children(n,window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel(e))};

/**
 * ***.locale.**.json을 가져온 후 TargetElement.children[ i ].innerHTML의 ((label)) 문자열에 치환 시켜준다.
 * @function
 * @param {String} url ./ui/...
 * @param {HTMLElement} el
 */
window.b2link.ui_resource.applyParentheses_LocaleLabel_Children__localeToCountryCode=function(e,r){r.__originalInnerHTML_Locale||(r.__originalInnerHTML_Locale=r.innerHTML);try{var i=e.replace("{{locale}}",window.b2link.STATIC.CONFIG.URL.UI.LOCALE),n=window.b2link.xhr.reqSync_JSON(i);SUtilString.applyParenthesesStrFromObj__NV_NA__El_Children(r,n)}catch(l){window.b2link_ui.message.error("window.b2link.ui_resource.applyParentheses_LocaleLabel_Children__localeToCountryCode Error : "+l),window.b2link_ui.message.error(i+" 파일을 만들어야 함."),window.b2link_ui.message.error("./ui_include/li/에서 {{}} 구문 파일 설정 하기."),window.b2link_ui.message.error("./ui_include/tr-th/에서 {{}} 구문 파일 설정 하기."),window.b2link_ui.message.error("./ui_include/tr-td/에서 {{}} 구문 파일 설정 하기.")}};

/**
 * url에서 .js를 .json으로 변경 후 ***.local.**.json 파일을 불러와 JSON 문자열을 Object로 만든 후 Return 한다.
 * @function
 * @param {String} url ./ui/.../.../***.js
 * @return {Object}
 */
//window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel=function(r){r=r.replace(".js",".locale."+window.b2link.STATIC.CONFIG.URL.UI.LOCALE+".json");var n;try{n=window.b2link.xhr.reqSync_JSON(r)}catch(e){window.TtwLog.error("window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel Error : "+e),n=null}return n};
!function(){var r={};window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel=function(n){if(r[n])return r[n];n=n.replace(".js",".locale."+window.b2link.STATIC.CONFIG.URL.UI.LOCALE+".json");var e;try{r[n]=e=window.b2link.xhr.reqSync_JSON(n)}catch(o){window.TtwLog.error("window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel Error : "+o),e=null}return e},window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel._clear=function(){r={}}}();

/**
 * url에서 .js를 .json으로 변경 후 ***. 'type' .local.**.json 파일을 불러와 JSON 문자열을 Object로 만든 후 Return 한다.
 * @function
 * @param {String} url ./ui/.../.../***.js
 * @param {String} type "alert", "confirm", "label", "message", "tooltip"
 * @return {Object}
 */
/*/
window.b2link.ui_resource.reqSync_JSON_Locale=function(e,n){e=e.replace(".js","."+n+".locale."+window.b2link.STATIC.CONFIG.URL.UI.LOCALE+".json");var r;try{r=window.b2link.xhr.reqSync_JSON(e)}catch(o){window.TtwLog.error("window.b2link.ui_resource.reqSync_JSON_Locale "+n+"Error : "+o),r=null}return r};
window.b2link.ui_resource.reqSync_JSON_Locale.alert=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"alert")};
window.b2link.ui_resource.reqSync_JSON_Locale.confirm=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"confirm")};
window.b2link.ui_resource.reqSync_JSON_Locale.label=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"label")};
window.b2link.ui_resource.reqSync_JSON_Locale.message=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"message")};
window.b2link.ui_resource.reqSync_JSON_Locale.tooltip=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"tooltip")};
/*/
!function(){var e={};window.b2link.ui_resource.reqSync_JSON_Locale=function(n,r){if(e[n])return e[n];n=n.replace(".js","."+r+".locale."+window.b2link.STATIC.CONFIG.URL.UI.LOCALE+".json");var o;try{e[n]=o=window.b2link.xhr.reqSync_JSON(n)}catch(i){window.TtwLog.error("window.b2link.ui_resource.reqSync_JSON_Locale "+r+"Error : "+i),o=null}return o}
,window.b2link.ui_resource.reqSync_JSON_Locale._clear=function(){e={}}
,window.b2link.ui_resource.reqSync_JSON_Locale.alert=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"alert")}
,window.b2link.ui_resource.reqSync_JSON_Locale.confirm=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"confirm")}
,window.b2link.ui_resource.reqSync_JSON_Locale.label=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"label")}
,window.b2link.ui_resource.reqSync_JSON_Locale.message=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"message")}
,window.b2link.ui_resource.reqSync_JSON_Locale.tooltip=function(e){return window.b2link.ui_resource.reqSync_JSON_Locale(e,"tooltip")}}();
//*/

//----------------------------------------------------------------------------------------------------window.b2link.ui_reousrce.a***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui_static;

window.b2link.ui_static = window.b2link.ui_static || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui_static;


//----------------------------------------------------------------------------------------------------window.b2link.ui_static.g***;



//----------------------------------------------------------------------------------------------------window.b2link.ui_static.g***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui_static;

//window.b2link.ui_static = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui_static;


//----------------------------------------------------------------------------------------------------window.b2link.ui_static.g***;

/**
 * window.b2link_ui.static.*** 함수를 호출하고 DataInputElements의 값을 초기화 시키는 공통 Interface('clearDataInputElements')를 호출 후 UI 객체를 리턴한다.
 * @function
 * @param {Function} window.b2link_ui.***
 * @return {Array} [ {HTMLElement}, {Object} ]
 */
window.b2link.ui_static.getUI_ClearDataInputElements = function( fn_ui )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui_static.getUI_ClearDataInputElements():{Array}----------" );

	/*/
	var o = fn_ui();//get UI HTMLElement And JS Controller;
	var el = o[ 0 ];//UI HTMLElement;
	var elCtrl = o[ 1 ];//JS Controller;
		elCtrl.clearDataInputElements();
	/*/
	var o = fn_ui();//get UI HTMLElement And JS Controller;
		o[ 1 ].clearDataInputElements();
	//*/

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui_static.getUI_ClearDataInputElements():{Array}----------" );
	return o;
};

//----------------------------------------------------------------------------------------------------window.b2link.ui_static.g***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.ui;

//window.b2link.ui = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.ui;


//----------------------------------------------------------------------------------------------------window.b2link.ui.g***;

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getArray_ClassNameAndValueFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getArray_ClassNameAndValueFromParentElement__Input():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r.push( [ io.className, io.value ] );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getArray_ClassNameAndValueFromParentElement__Input():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getArray_ElementFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getArray_ElementFromParentElement__Input():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r.push( io );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getArray_ElementFromParentElement__Input():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getArray_IDAndValueFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getArray_IDAndValueFromParentElement__Input():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r.push( [ io.id, io.value ] );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getArray_IDAndValueFromParentElement__Input():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Array}
 */
window.b2link.ui.getArray_ValueFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getArray_ValueFromParentElement__Input():{Array}----------" );

	var r = [];
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r.push( io.value );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getArray_ValueFromParentElement__Input():{Array}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Controller = function( t )
{
	window.KaiLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Controller():{Object}----------" );

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		switch (io.tagName){
		case 'INPUT':
		case 'TEXTAREA':
			r[ io.className ] = io.value;
			break;
		default:
			break;
		}
	}

	window.KaiLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Controller():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input():{Object}----------" );

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r[ io.className ] = io.value;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input():{Object}----------" );
	return r;
};

/**
 * targetElement의 ChildElement에 InputElement가 존재하는 경우 className으로 Object를 추출하기 위한 용도
 * targetElement로부터 Depth2 위치에 InputElement가 존재
 * @public
 * @function
 * @param {HTMLElement} t targetElement
 * @return {Object}
 * <code>
 * { "className" : "", "className" : "", "className" : "", ... }
 * </code>
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Depth2 = function( t )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Depth2():{Object}----------" );

	var r = {};
	/*/
	var f = window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input;
	var io;
	var a = t.children;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		var ir = f( io );
		for( var s in ir ) r[ s ] = ir[ s ];
	}
	//*/
	var a0 = t.children;
	var i=0, iLen=a0.length;
	for( ; i<iLen; ++i )
	{
		var a1 = a0[ i ].children;
		var jo;
		var j=0, jLen=a1.length;
		for( ; j<jLen; ++j )
		{
			jo = a1[ j ];
			if( "INPUT" == jo.tagName ) r[ jo.className ] = jo.value;
		}
	}
	//*/

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Depth2():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type():{Object}----------" );

	var of = window.b2link.el_input.setObjectInputValueFromInputTypeAndClassName;
	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) of( r, io );
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_ClassNameAndValueFromParentElement__Input_Type():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object} [ {HTMLElement}, {HTMLElement}, .... ]
 */
window.b2link.ui.getObject_Element_ClassNameFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_Element_ClassNameFromParentElement__Input():{Object}----------" );

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r[ io.className ] = io;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_Element_ClassNameFromParentElement__Input():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_Element_IDFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_Element_IDFromParentElement__Input():{Object}----------" );

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r[ io.id ] = io;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_Element_IDFromParentElement__Input():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {HTMLElement} t
 * @return {Object}
 */
window.b2link.ui.getObject_IDAndValueFromParentElement__Input = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.ui.getObject_IDAndValueFromParentElement__Input():{Object}----------" );

	var r = {};
	var a = t.children;
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		io = a[ i ];
		if( "INPUT" == io.tagName ) r[ io.id ] = io.value;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.ui.getObject_IDAndValueFromParentElement__Input():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.ui.g***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.uri;

window.b2link.uri = window.b2link.uri || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.uri;

/**
 * decodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.b2link.uri.decodeURI=function(i){return n.hasOwnProperty(i)||(n[i]=window.decodeURI(i)),n[i]},window.b2link.uri.decodeURI._clear=function(){n={}}}();

/**
 * decodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.b2link.uri.decodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=window.decodeURIComponent(o)),n[o]},window.b2link.uri.decodeURIComponent._clear=function(){n={}}}();

/**
 * encodeURI
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.b2link.uri.encodeURI=function(i){return n.hasOwnProperty(i)||(n[i]=window.encodeURI(i)),n[i]},window.b2link.uri.encodeURI._clear=function(){n={}}}();

/**
 * encodeURIComponent
 * @function
 * @param {String} s 문자열
 * @return {String}
 */
!function(){var n={};window.b2link.uri.encodeURIComponent=function(o){return n.hasOwnProperty(o)||(n[o]=window.encodeURIComponent(o)),n[o]},window.b2link.uri.encodeURIComponent._clear=function(){n={}}}();

//----------------------------------------------------------------------------------------------------window.b2link.uri.g***;

/**
 * Object를 URI Paramter 형식의 문자열로 바꿔서 Return 한다.
 * @function
 * @param {Object} data { a:1, b:2, ... }
 * @return {String} &a=1&b=2....
 */
window.b2link.uri.getURIFromObject=function(r){var n="";for(var i in r)n+="&"+i+"="+r[i];return n};

/**
 * @function
 * @param {String} s 문자열
 * @return {String}
 * #을 !MzU=!로 변경
 * &을 !Mzg=!로 변경
 * +를 !MTg3!로 변경
 */
//window.b2link.uri.getURIReplaceSharp=function(e){return e.replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!")};
//window.b2link.uri.getURIReplaceSharp=function(e){return e.replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!").replace(/\+/gi,"!MTg3!")};
window.b2link.uri.getURIReplaceSharp=function(e){return e.replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!").replace(/\+/gi,"!MTg3!").replace( /%/gi, "!Mzc=!" )};

/**
 * @function
 * @param {Object} data
 * @return {String}
 * #을 !MzU=!로 변경
 * &을 !Mzg=!로 변경
 * +를 !MTg3!로 변경
 */
//window.b2link.uri.getURIReplaceSharp__JSON=function(e){return JSON.stringify(e).replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!")};
//window.b2link.uri.getURIReplaceSharp__JSON=function(e){return JSON.stringify(e).replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!").replace(/\+/gi,"!MTg3!")};
window.b2link.uri.getURIReplaceSharp__JSON=function(e){return JSON.stringify(e).replace(/#/gi,"!MzU=!").replace(/&/gi,"!Mzg=!").replace(/\+/gi,"!MTg3!").replace( /%/gi, "!Mzc=!" )};

//----------------------------------------------------------------------------------------------------window.b2link.uri.g***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.url;

window.b2link.url = window.b2link.url || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.url;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
window.b2link.url.getServerURL_APIServer_SCODE=function(e){return window.b2link.url.getServerURLByServers(e+"_APIServer")};

/**
 * @function
 * @return {String}
 */
window.b2link.url.getServerURL_APIServer_Self=function(){return window.b2link.url.getServerURLByServers(window.b2link.STATIC.CONFIG.URL.SCODE+"_APIServer")};

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
window.b2link.url.getServerURL_ScrapServer_SCODE=function(r){return window.b2link.url.getServerURLByServers(r+"_ScrapServer")};

/**
 * @function
 * @return {String}
 */
window.b2link.url.getServerURL_ScrapServer_Self=function(){return window.b2link.url.getServerURLByServers(window.b2link.STATIC.CONFIG.URL.SCODE+"_ScrapServer")};

/**
 * @function
 * @param {String} SCODE
 * @return {String}
 */
window.b2link.url.getServerURL_WebServer_SCODE=function(e){return window.b2link.url.getServerURLByServers(e+"_WebServer")};

/**
 * @function
 * @return {String}
 */
window.b2link.url.getServerURL_WebServer_Self=function(){return window.b2link.url.getServerURLByServers(window.b2link.STATIC.CONFIG.URL.SCODE+"_WebServer")};

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.util;

window.b2link.util = window.b2link.util || {};

//--------------------------------------------------window.b2link.util.i***;

/**
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * @function
 * @param {String} cssURL CSS File URL
 */
window.b2link.util.importCSSToHead = SUtilTemplateHTML.addCSS__URLToHead;

/**
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * @function
 * @param {String} cssURL0 CSS File URL
 * @param {String} cssURL1 CSS File URL
 * @param {String} cssURL2 CSS File URL
 * @param {String} cssURLs ....
 * @example
 * <code>
	window.b2link.util.importCSSsToHead( "http://localhost/0.css", "http://localhost/1.css", "http://localhost/2.css" );
 * </code>
 */
window.b2link.util.importCSSsToHead = function(){ var f = window.b2link.util.importCSSToHead; var a = arguments; var i=0, iLen=a.length; for( ; i<iLen; ++i ) f( a[ i ] ); };

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTML=SUtilTemplateHTML.addHTML__URLToElID;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTML__Background = function( url, targetElementID )
{
	//return SUtilTemplateHTML.addHTML__URLToElID( url, "div_0__Background" );
	return SUtilTemplateHTML.addHTML__URLToElID( url, window.b2link.STATIC.CONST.ROOT_DIV.ID_BACKGROUND );
};

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * htmlURL로 불러온 html 문자열을 메모리상에 Cache를 시킨다.
 * 같은 URL을 요청할 시에 다시 Network 통신을 발생시키지 않고 내부에 보관된 문자열로 처리해준다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTML_Cache=SUtilTemplateHTML.addHTML__URLToElID_Cache;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * <code>
	(function( url, $el ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJS=SUtilTemplateHTML.addHTMLJS__URL_Return;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * <code>
	(function( url, $el ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @return {*}
 */
window.b2link.util.importHTMLJS__Background = function( urlHTML, urlJS, targetElementID )
{
	//return SUtilTemplateHTML.addHTMLJS__URL_Return( urlHTML, urlJS, "div_0__Background" );
	return SUtilTemplateHTML.addHTMLJS__URL_Return( urlHTML, urlJS, window.b2link.STATIC.CONST.ROOT_DIV.ID_BACKGROUND );
};

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * <code>
	(function( url, $el ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * window.b2link.STATIC.UI[ key ] = [ HTMLElement, JS Object ]; 형태로 보관한다.
 * @function
 * @param {String} key b2link.STATIC.UI[ ??? ]
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJS__And_Add_b2link_STATIC_UI=function(i,n,_,d){var t=SUtilTemplateHTML.addHTMLJS__URL_Return(n,_,d);return window.b2link.ui.staticUIMap_Add(i,t),t};

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * <code>
	(function( url, $el ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} cssURL CSS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJSCSS=SUtilTemplateHTML.addHTMLJSCSS__URL_Return;

/**
 * *.html을 불러와서 "div_0__Background"( window.b2link.STATIC.CONST.ROOT_DIV.EL_BACKGROUND )에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * <code>
	(function( url, $el ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} cssURL CSS File URL
 * @return {*}
 */
window.b2link.util.importHTMLJSCSS__Background = function( urlHTML, urlJS, urlCSS, targetElementID )
{
	//return SUtilTemplateHTML.addHTMLJSCSS__URL_Return( urlHTML, urlJS, urlCSS, "div_0__Background" );
	return SUtilTemplateHTML.addHTMLJSCSS__URL_Return( urlHTML, urlJS, urlCSS, window.b2link.STATIC.CONST.ROOT_DIV.ID_BACKGROUND );
};

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 htmlElement를 Parameter로 받게 된다.
 * <code>
	(function( url, $el ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * *.css를 불러와서 index.html의 <head>에 삽입 한다.
 * window.b2link.STATIC.UI[ key ] = [ HTMLElement, JS Object ]; 형태로 보관한다.
 * css는 window.b2link.STATIC.UI[ key ]에 보관하지 않는다.
 * @function
 * @param {String} key b2link.STATIC.UI[ ??? ]
 * @param {String} htmlURL HTML File URL
 * @param {String} jsURL JS File URL
 * @param {String} cssURL CSS File URL
 * @param {String} targetElementID
 * @return {*}
 */
window.b2link.util.importHTMLJSCSS__And_Add_b2link_STATIC_UI=function(i,n,_,d,t){var S=SUtilTemplateHTML.addHTMLJSCSS__URL_Return(n,_,d,t);return window.b2link.ui.staticUIMap_Add(i,S),S};

/**
 * HTML URL로 HTML Text를 가져온다.
 * <include-html> 메카니즘을 완성시켜준다.
 *
 * PHP, JSP, ASP, Include 메카니즘 지원 가능. 현재는 미지원
 *
 * @function
 * @param {String} url
 * @return {String} HTML Text
 */
window.b2link.util.importHTMLText = function( url ){ return STtwUtilString.includeHTML_Recursion( window.b2link.xhr.reqSync_String( url ) ) };

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {HTMLElement} targetElement
 * @return {*}
 */
window.b2link.util.importHTMLToEl=SUtilTemplateHTML.addHTML__URLToEl;

/**
 * *.html을 불러와서 targetElement에 appendChild 한다.
 * htmlURL로 불러온 html 문자열을 메모리상에 Cache를 시킨다.
 * 같은 URL을 요청할 시에 다시 Network 통신을 발생시키지 않고 내부에 보관된 문자열로 처리해준다.
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {HTMLElement} targetElement
 * @return {*}
 */
window.b2link.util.importHTMLToEl_Cache=SUtilTemplateHTML.addHTML__URLToEl_Cache;

/**
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 js url을 Parameter로 받게 된다.
 * <code>
	(function( url, parameters ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * @function
 * @param {String} url
 * @param {*} param0
 * @param {*} param1
 * @param {*} param2
 * @param {*} param3
 * @param {*} ...
 * @return {*}
 */
window.b2link.util.importJS=function(t){var i=SUtilTemplateHTML.addJS__URL(t,arguments);return i};

/**
 * *.js를 불러와서 실행시킨다.
 * js를 작성하는 규칙이 존재한다. js상에서는 js url을 Parameter로 받게 된다.
 * <code>
	(function( url, parameters ){
		var _this = {};

		//logic & api;

		var _ = _this;

			//public api...;

			_.a = _a;

		return _;
	});
 * </code>
 *
 * @function
 * @param {String} url
 * @param {*} param0
 * @param {*} param1
 * @param {*} param2
 * @param {*} param3
 * @param {*} ...
 * @return {*}
 */
!function(){var t={};window.b2link.util.importJS__Reuse=function(r){if(t.hasOwnProperty(r))return t[r]?t[r]:null;try{var n=SUtilTemplateHTML.addJS__URL(r,arguments)}catch(e){throw e}return t[r]=n,n}}();

/**
 * *.js 경로를 <SCRIPT> 형태로 <HEAD>에 삽입한다.
 *
 * @function
 * @param {String} url "http://localhost/b.js"
 * @param {String} cbComplete function(){};
 */
window.b2link.util.importJSToHead = SUtilTemplateHTML.addJS__URLToHead;

/**
 * *.js 파일들의 경로를 <SCRIPT> 형태로 <HEAD>에 삽입한다.
 *
 * @function
 * @param {String} url0 "http://localhost/a.js"
 * @param {String} url1 "http://localhost/b.js"
 * @param {String} url2 "http://localhost/c.js"
 * @param {String} url3 ...
 * @param {String} cbComplete function(){}; 완료시점을 알고 싶을 시 마지막 파라메터에 콜백함수를 넣는다. 넣지 않아도 정상 구동됨
 * @example
 * <code>
	window.b2link.util.importJSsToHead(
		"http://localhost/a.js"
		, "http://localhost/b.js"
		, "http://localhost/c.js"
		, function(){ debugger; }
	);
 * </code>
 */
window.b2link.util.importJSsToHead = function()
{
	var f = window.b2link.util.importJSToHead;
	var a = arguments;
	var i=0, iLen=a.length-2;
	for( ; i<iLen; ++i ) f( a[ i ] );
	var last = a[ i + 1 ];
	if( "function" == typeof( last ) ) f( a[ i ], a[ i + 1 ] );
	else
	{
		f( a[ i ] );
		f( a[ i + 1 ] );
	}
};

//--------------------------------------------------window.b2link.util.i***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.util;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.util_string;

window.b2link.util_string = window.b2link.util_string || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.util_string;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.util_string;

//window.b2link.util_string = window.b2link.util_string || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.util_string;


//----------------------------------------------------------------------------------------------------window.b2link.util_string.b***;

/**
 * {{xxx}} 형태의 문자열을 "" 로 변경
 * @function
 * @param {String} s string data
 * @return {String}
 */
window.b2link.util_string.braceStringToEmpty = function( s )
{
	//window.KaiLog.timeStamp( "---- [ S ] - window.b2link.util_string.braceStringToEmpty():{String}----------" );

	if( "string" == typeof s )
		if( -1 < s.search( "{{" ) )
		{
			//window.KaiLog.timeStamp( "---- [ E ] - window.b2link.util_string.braceStringToEmpty():{String}----------return "";" );
			return "";
		}

	//window.KaiLog.timeStamp( "---- [ E ] - window.b2link.util_string.braceStringToEmpty():{String}----------return s;" );
	return s;
};

//----------------------------------------------------------------------------------------------------window.b2link.util_string.b***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.util;

//window.b2link.util = {};

//--------------------------------------------------window.b2link.util.d***;

window.b2link.util.dateDifference_object = function( date_obj1, date_obj2 )
{
	window.b2link_ui.message.error( "window.b2link.util.dateDifference_object -> window.b2link.date.dateDifference_object 교체 바람" );
	return window.b2link.date.dateDifference_object( date_obj1, date_obj2 );
};

window.b2link.util.dateFormatFromDateArray = function( d )
{
	window.b2link_ui.message.error( "window.b2link.util.dateFormatFromDateArray -> window.b2link.date.dateFormatFromDateArray 교체 바람" );
	return window.b2link.date.dateFormatFromDateArray( d );
};

window.b2link.util.dateFormatFromDateObject = function( d )
{
	window.b2link_ui.message.error( "window.b2link.util.dateFormatFromDateObject -> window.b2link.date.dateFormatFromDateObject 교체 바람" );
	return window.b2link.date.dateFormatFromDateObject( d );
};

window.b2link.util.dateGetObjectDateFromDateString_Dash = function( dateString )
{
	window.b2link_ui.message.error( "window.b2link.util.dateGetObjectDateFromDateString_Dash -> window.b2link.date.getObjectDateFromDateString_Dash 교체 바람" );
	return window.b2link.date.getObjectDateFromDateString_Dash( dateString );
};

//--------------------------------------------------window.b2link.util.d***;


//--------------------------------------------------window.b2link.util.f***;

/**
 * String format
 * @function
 * @param {String} htmlURL HTML File URL
 * @param {String} targetElementID
 * @return {*}
 * @author  cpark
 *
 * -- Usage
 * !!! {0} = {#IDX_OF_ARRAY}
 *
 * var str = "http://localhost?key0={0}&key1={1}&key2={2}&key3={0}";
 * var values = [ "val0", 111, "val2"];
 * var str = window.b2link.util.format(str, values);
 *
 * result : http://localhost?key0=val0&key1=111&key2=val2&key3=val0
 */
window.b2link.util.format = function( str, values )
{
	var formatted = str;
	for( var i=0; i<values.length; i++ )
	{
		var regexp = new RegExp( '\\{' + i + '\\}', 'gi' );
		formatted = formatted.replace( regexp, values[ i ] );
	}
	return formatted;
};

//--------------------------------------------------window.b2link.util.f***;


//--------------------------------------------------window.b2link.util.t***;

/**
 * trim
 * @function
 * @param {String} s
 * @return {String}
 * @author cpark
 */
(function(){
	var _reg0 = /(^\s*)|(\s*$)/gi;
	window.b2link.util.trim = function( s ){ return s.replace( _reg0, "" ); };
})();

//--------------------------------------------------window.b2link.util.t***;


//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.util;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_classType;

window.b2link.validation_classType = window.b2link.validation_classType || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_classType;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_classType;

//window.b2link.validation_classType = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_classType;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.a***;

/**
 * Javascript의 자료타입 Array를 Validation 한다.
 * @function
 * @param {array} p
 * @return {Boolean}
 */
window.b2link.validation_classType.array = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.array():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.array():{Boolean}----------" );

	//if( "object" == typeof( p ) )
	if( window.b2link.validation_classType.object( p ) )
		if( p.hasOwnProperty( "length" ) )
			return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.a***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.b***;

/**
 * Javascript의 자료타입 Boolean을 Validation 한다.
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
window.b2link.validation_classType.boolean = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.boolean():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.boolean():{Boolean}----------" );

	if( "boolean" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.b***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.i***;

/**
 * Javascript의 자료타입 int를 Validation 한다.
 * @function
 * @param {uint} p
 * @return {Boolean}
 */
window.b2link.validation_classType.int = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.int():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.int():{Boolean}----------" );

	//if( "number" == typeof( p ) )
	if( window.b2link.validation_classType.number( p ) )
		if( -1 == p.toString.indexOf( "." ) )
			return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.i***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.n***;

/**
 * Javascript의 자료타입 Number를 Validation 한다.
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
window.b2link.validation_classType.number = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.number():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.number():{Boolean}----------" );

	if( "number" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.n***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.o***;

/**
 * Javascript의 자료타입 Object를 Validation 한다.
 * @function
 * @param {Number} p
 * @return {Boolean}
 */
window.b2link.validation_classType.object = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.object():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.object():{Boolean}----------" );

	if( "object" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.o***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.s***;

/**
 * Javascript의 자료타입 String를 Validation 한다.
 * @function
 * @param {String} p
 * @return {Boolean}
 */
window.b2link.validation_classType.string = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.string():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.string():{Boolean}----------" );

	if( "string" == typeof( p ) ) return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.s***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.u***;

/**
 * Javascript의 자료타입 uint를 Validation 한다.
 * @function
 * @param {uint} p
 * @return {Boolean}
 */
window.b2link.validation_classType.uint = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.uint():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.uint():{Boolean}----------" );

	//if( "number" == typeof( p ) )
	if( window.b2link.validation_classType.number( p ) )
		if( -1 < p )
			if( -1 == p.toString.indexOf( "." ) )
				return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_classType.u***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_date;

window.b2link.validation_date = window.b2link.validation_date || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_date;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_input;

window.b2link.validation_input = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_input;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_input;

//window.b2link.validation_input = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_input;


//----------------------------------------------------------------------------------------------------window.b2link.validation_input.e***;

(function(){

	var _regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	/**
	 * @function
	 * @param {String} e_id email_id
	 * @param {String} e_domain email_domain
	 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
	 */
	window.b2link.validation_input.email = function( e_id, e_domain )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.email():{Object}----------" );

		var r = { r : 1, m : "" };

		if( -1 == e_domain.indexOf( "." ) ){ r.r = 0; r.m = "이메일 도메인 구문 오류"; return r; }

		if( !e_id || !e_domain ){ r.r = 0; r.m = "이메일 입력 오류"; return r; }

		var email = e_id + "@" + e_domain;
		if( !email.match( _regExp ) ){ r.r = 0; r.m = "이메일 구문 오류"; return r; }

		//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.email():{Object}----------return r;" );
		return r;
	};
})();

/**
 * 수정하기 - 2017.01.05 - "", inputType가 Text일때만 사용?
 * @function
 * @param {array} p
 * @return {Boolean}
 */
window.b2link.validation_input.empty = function( val )
{
	if( !val )
	{
		return false;
	}
	return true;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_input.e***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_input.i***;

(function(){

	var _regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	/**
	 * @function
	 * @param {String} id
	 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
	 */
	window.b2link.validation_input.id_emailType = function( id )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.id_emailType():{Object}----------" );

		var r = { r : 1, m : "" };

		if( !id.match( _regExp ) ){ r.r = 0; r.m = "아이디 구문 오류"; return r; }

		//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.id_emailType():{Object}----------return r;" );
		return r;
	};
})();

//----------------------------------------------------------------------------------------------------window.b2link.validation_input.i***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_input.n***;

/**
 * @function
 * @param {String} nm_f name_first
 * @param {String} nm_l name_last
 * @param {String} m message first word
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.name = function( nm_f, nm_l, m )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.name():{Object}----------" );

	m = m || "이름";

	var r = { r : 1, m : "" };

	if( !nm_f || !nm_l ){ r.r = 0; r.m = m + " 입력오류"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.name():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.notInputed = function( v, m )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.notInputed():{Object}----------" );

	m = m || "";

	var r = { r : 1, m : "" };

	if( !v ){ r.r = 0; r.m = " 미입력"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.notInputed():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_input.n***;


//----------------------------------------------------------------------------------------------------window.b2link.validation_input.p***;

/**
 * @function
 * @param {String} pw password
 * @param {String} pw_re password confirm
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.password = function( pw, pw_re )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.password():{Object}----------" );

	var r = { r : 1, m : "" };

	if( pw.length < 9 ){ r.r = 0; r.m = "암호 9자 이상 입력해야합니다."; return r; }

	if( !pw || !pw_re ){ r.r = 0; r.m = "암호 미입력"; return r; }

	if( pw != pw_re ){ r.r = 0; r.m = "암호 불일치"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.password():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {String} country
 * @param {String} area
 * @param {String} num0
 * @param {String} num1
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.phone_cell = function( country, area, num0, num1 )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.phone_cell():{Object}----------" );

	var r = { r : 1, m : "" };

	if( !country || !area || !num0 || !num1 ){ r.r = 0; r.m = "휴대전화번호 입력오류"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.phone_cell():{Object}----------" );
	return r;
};

/**
 * @function
 * @param {String} country
 * @param {String} area
 * @param {String} num0
 * @param {String} num1
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.phone_tel = function( country, area, num0, num1 )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.phone_tel():{Object}----------" );

	var r = { r : 1, m : "" };

	if( !country || !area || !num0 || !num1 ){ r.r = 0; r.m = "전화번호 입력오류"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.phone_tel():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_input.p***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_mongodb;

window.b2link.validation_mongodb = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_mongodb;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_mongodb;

//window.b2link.validation_mongodb = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_mongodb;


//----------------------------------------------------------------------------------------------------window.b2link.validation_mongodb._i***;

/**
 * MongoDB의 db.collection._id가 string일 경우 validation 한다.
 * @function
 * @param {String} _id
 * @return {Boolean}
 */
window.b2link.validation_mongodb._id__string = function( _id )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_mongodb._id__string():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_mongodb._id__string():{Boolean}----------" );
	if( window.b2link.validation_classType.string( _id ) )
		return true;
	return false
};

/**
 * MongoDB의 db.collection._id가 uint일 경우 validation 한다.
 * @function
 * @param {uint} _id
 * @return {Boolean}
 */
window.b2link.validation_mongodb._id__uint = function( _id )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_mongodb._id__uint():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_mongodb._id__uint():{Boolean}----------" );
	if( window.b2link.validation_classType.uint( _id ) )
		if( 999999999 > _id )
			return true;
	return false;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_mongodb._i***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_select;

window.b2link.validation_select = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_select;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.validation_select;

//window.b2link.validation_select = {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.validation_select;


//----------------------------------------------------------------------------------------------------window.b2link.validation_select.n***;

/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.notSelected = function( t, m )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_select.notSelected():{Object}----------" );

	m = m || "선택항목 ";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_select.notSelected():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------window.b2link.validation_select.n***;


//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.websocket_browser;

/**
 * 인터넷 브라우저에서만 사용되는 API Package
 * @property {Object}
 */
window.b2link.websocket_browser = window.b2link.websocket_browser || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.websocket_browser;

/**
 * WebSocket을 생성하여 WebSocketServer과 연결한다.
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN
		, "protocol" : null

		, "evt_close" : function( e ){ debugger; arguments; }
		, "evt_error" : function( e ){ debugger; arguments; }
		, "evt_message" : function( e ){ console.log( "Message : " + e.data ); debugger; arguments; }
		, "evt_open" : function( e ){ debugger; arguments; }
	}
 * </code>
 * @return {WebSocket}
 *
 * @example
 * <code>
	window.b2link.websocket_browser.connect__MessageBox_message({
		host : "localhost"
		, port : 42322

		, evt_close : function( e ){ debugger; arguments; }
		, evt_error : function( e ){ debugger; arguments; }
		, evt_message : function( e ){ console.log( "Message : " + e.data ); debugger; arguments; }
		, evt_open : function( e ){ debugger; arguments; }
	});
 * </code>
 */
window.b2link.websocket_browser.connect=function(e){if(!e.host)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connect Error : host 정의 필수");if(!e.port)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connect Error : port 정의 필수");if(!e.evt_message)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connect Error : evt_message 정의 필수");var r=e.evt_message?e.evt_message:function(e){arguments},n=e.evt_open?e.evt_open:function(e){arguments},o=e.evt_error?e.evt_error:function(e){var s=arguments.callee.__webSocket;s.removeEventListener("close",t,!1),s.removeEventListener("error",o,!1),s.removeEventListener("message",r,!1),s.removeEventListener("open",n,!1)},t=e.evt_close?e.evt_close:function(e){var s=arguments.callee.__webSocket;s.removeEventListener("close",t,!1),s.removeEventListener("error",o,!1),s.removeEventListener("message",r,!1),s.removeEventListener("open",n,!1)};try{var s=new window.WebSocket("ws://"+e.host+":"+e.port);t.__webSocket=o.__webSocket=s,s.addEventListener("close",t,!1,0,!0),s.addEventListener("error",o,!1,0,!0),s.addEventListener("message",r,!1,0,!0),s.addEventListener("open",n,!1,0,!0)}catch(i){window.b2link_ui.message.error("window.b2link.websocket_browser.connect Error : "+i)}return s};

/**
 * WebSocket을 생성하여 WebSocketServer과 연결한다.
 * 모든 메세지가 전체 송/수신 되는 기능
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN
		, "protocol" : null
	}
 * </code>
 * @return {WebSocket}
 *
 * @example
 * <code>
	window.WS__TEST = window.b2link.websocket_browser.connect__MessageBox_message({
		host : "localhost"
		, port : 42322
	});
 * </code>
 */
window.b2link.websocket_browser.connect__MessageBox_message=function(e){e.evt_message=function(e){try{var n=JSON.parse(e.data);window.b2link_ui.message[n.type](n.data)}catch(o){var s=e.data;window.b2link_ui.message.message(s)}},e.evt_open=function(e){};var n=window.b2link.websocket_browser.connect(e);return n};
/*///삭제하기 - 20170616 - 송선우 - 테스트 소스;
try{window.WS__TEST||(window.WS__TEST=window.b2link.websocket_browser.connect__MessageBox_message({host:"222.239.10.122",port:42322}))}catch(e){window.TtwLog.error("[ 테스트 코드 ] - 웹소켓 연결에 실패 함.")}
try{window.WS__TEST||(window.WS__TEST=window.b2link.websocket_browser.connect__MessageBox_message({host:"localhost",port:42322}))}catch(e){window.TtwLog.error("[ 테스트 코드 ] - 웹소켓 연결에 실패 함.")}
//*/

/**
 * WebSocket을 생성하여 WebSocketServer과 연결한다.
 * sid(session id)와 mid(member id)를 체크한다.
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN
		, "protocol" : null

		, "evt_close" : function( e ){ debugger; arguments; }
		, "evt_error" : function( e ){ debugger; arguments; }
		, "evt_message" : function( e ){ console.log( "Message : " + e.data ); debugger; arguments; }
		, "evt_open" : function( e ){ debugger; arguments; }
	}
 * </code>
 * @return {WebSocket}
 *
 * @example
 * <code>
	window.b2link.websocket_browser.connect__MessageBox_message({
		host : "localhost"
		, port : 42322

		, evt_close : function( e ){ debugger; arguments; }
		, evt_error : function( e ){ debugger; arguments; }
		, evt_message : function( e ){ console.log( "Message : " + e.data ); debugger; arguments; }
		, evt_open : function( e ){ debugger; arguments; }
	});
 * </code>
 */
window.b2link.websocket_browser.connectAndCheckSession=function(e){if(!e.host)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connectAndCheskSession Error : host 정의 필수");if(!e.port)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connectAndCheskSession Error : port 정의 필수");if(!e.evt_message)return void window.b2link_ui.message.error("window.b2link.websocket_browser.connectAndCheskSession Error : evt_message 정의 필수");var r=e.evt_message?e.evt_message:function(e){arguments},n=e.evt_open?e.evt_open:function(e){arguments},o=e.evt_error?e.evt_error:function(e){var t=arguments.callee.__webSocket;t.removeEventListener("close",s,!1),t.removeEventListener("error",o,!1),t.removeEventListener("message",r,!1),t.removeEventListener("open",n,!1)},s=e.evt_close?e.evt_close:function(e){var t=arguments.callee.__webSocket;t.removeEventListener("close",s,!1),t.removeEventListener("error",o,!1),t.removeEventListener("message",r,!1),t.removeEventListener("open",n,!1)};try{var t=window.b2link.session.getSession();if(!t.mid)return void window.b2link_ui.message.error("WebSocket 연결 실패 - mid가 없다");if(!t.sid)return void window.b2link_ui.message.error("WebSocket 연결 실패 - sid가 없다");var i=new window.WebSocket("ws://"+e.host+":"+e.port+"?sid="+t.sid+"&mid="+t.mid);s.__webSocket=o.__webSocket=i,i.addEventListener("close",s,!1,0,!0),i.addEventListener("error",o,!1,0,!0),i.addEventListener("message",r,!1,0,!0),i.addEventListener("open",n,!1,0,!0)}catch(w){window.b2link_ui.message.error("window.b2link.websocket_browser.connectAndCheskSession Error : "+w)}return i};

/**
 * WebSocket을 생성하여 WebSocketServer과 연결한다.
 * 모든 메세지가 전체 송/수신 되는 기능
 * sid(session id)와 mid(member id)를 체크한다.
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN
		, "protocol" : null
	}
 * </code>
 * @return {WebSocket}
 *
 * @example
 * <code>
	window.WS0 = window.b2link.websocket_browser.connectAndCheckSession__MessageBox_message.js({
		host : "localhost"
		, port : 42322
	});
 * </code>
 */
window.b2link.websocket_browser.connectAndCheckSession__MessageBox_message=function(e){e.evt_message=function(e){try{var n=JSON.parse(e.data);window.b2link_ui.message[n.type](n.data)}catch(s){var a=e.data;window.b2link_ui.message.message(a)}},e.evt_open=function(e){};var n=window.b2link.websocket_browser.connectAndCheckSession(e);return n};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.websocket_client;

/**
 * NodeJS 콘솔 클라이언에서 활용되는 API Package
 * @property {Object}
 */
window.b2link.websocket_client = window.b2link.websocket_client || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.websocket_client;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.websocket_server;

/**
 * NodeJS 콘솔 서버에서 활용되는 API Package
 * @property {Object}
 */
window.b2link.websocket_server = window.b2link.websocket_server || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.websocket_server;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.b2link.xhr;

window.b2link.xhr = window.b2link.xhr || {};

//--------------------------------------------------window.b2link.xhr.r***;

//------------------------------[ S ] - GET - Async;

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 * @function
 * @param {String} url
 * @param {Function} cbFunction
 * <code>
 * {
 *	"cbFunctions" : {
 *		"onabort" : function( e ){}
 *		, "onerror" : function( e ){}
 *		, "onload" : function( e ){}
 *		, "onloadend" : function( e ){}
 *		, "onstart" : function( e ){}
 *		, "onprogress" : function( e ){}
 *		, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *		, "ontimeout" : function( e ){}
 *	}
 * }
 * </code>
 */
!function(){var n=new Date;window.b2link.xhr.req=function(e,t){++n,SUtilXMLHttpReqGet.req(e+"?nCached="+n,t)}}();

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 cbFunction에 string으로 parameter을 전달하여 호출한다.
 * @function
 * @param {String} url
 * @param {Function} cbFunction function( str ){}
 */
!function(){var n=new Date;window.b2link.xhr.req_String=function(t,e){++n,SUtilXMLHttpReqGet.req_String(t+"?nCached="+n,e)}}();

//------------------------------[ E ] - GET - Async;


//------------------------------[ S ] - GET - Sync;

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 JSON으로 받은 데이터를 Object로 Return한다.
 * @function
 * @param {String} url
 * @return {Object}
 */
!function(){var n=new Date;window.b2link.xhr.reqSync=function(e){++n,SUtilXMLHttpReqGet.reqSync(e+"?nCached="+n)}}();

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 JSON으로 받은 데이터를 Object로 Return한다.
 * @function
 * @param {String} url
 * @return {Object}
 */
!function(){var e=new Date;window.b2link.xhr.reqSync_JSON=function(n){++e;var r=JSON.parse(SUtilXMLHttpReqGet.reqSyncReturn(n+"?nCached="+e).responseText.replace(/\/\/.*/gi,""));return r}}();
//!function(){var e=new Date;window.b2link.xhr.reqSync_JSON=function(n){++e,n=-1!=n.indexOf("?")?n+"&nCached="+e:n+"?nCached="+e;var r=JSON.parse(SUtilXMLHttpReqGet.reqSyncReturn(n).responseText.replace(/\/\/.*/gi,""));return r}}();

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 받은 데이터를 String로 Return한다.
 * @function
 * @param {String} url
 * @return {Object}
 */
//!function(){var n=new Date;window.b2link.xhr.reqSync_String=function(e){++n;var t=SUtilXMLHttpReqGet.reqSyncReturn(e+"?nCached="+n).responseText;return t}}();
!function(){var n=new Date;window.b2link.xhr.reqSync_String=function(e){++n;var t=SUtilXMLHttpReqGet.reqSyncReturn(e).responseText;return t}}();

/**
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * Response 시 XMLHttpRequest 객체를 그대로 Return 한다.
 * @function
 * @param {String} url
 * @return {XMLHTTPRequest}
 */
//!function(){var n=new Date;window.b2link.xhr.reqSyncReturn=function(e){++n;var t=SUtilXMLHttpReqGet.reqSyncReturn(e+"?nCached="+n);return t}}();
!function(){var n=new Date;window.b2link.xhr.reqSyncReturn=function(e){++n;var t=SUtilXMLHttpReqGet.reqSyncReturn(e);return t}}();

//------------------------------[ E ] - GET - Sync;


//------------------------------[ S ] - POST - Async;

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 *
 * FormData를 사용하여 전달한다.
 *
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/x-www-form-urlencoded"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_Form(
		"www.google.com"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded", ... }
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_Form(
		"http://posttestserver.com/post.php?dir=example"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_Form=function(r,o,t,i){SUtilXMLHttpReqPost.req__paramsForm(r,t,i)};

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 *
 * FormData를 사용하여 전달한다.
 *
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/x-www-form-urlencoded"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_Form_useAction(
		"www.google.com"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded", ... }
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_Form_useAction(
		"http://posttestserver.com/post.php?dir=example"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_Form_useAction=function(o,t,i,n){SUtilXMLHttpReqPost.req__paramsForm_useAction(o,t,i,n)};

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/json"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_JSON(
		"www.google.com"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/json", ... }
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_JSON(
		"http://posttestserver.com/post.php?dir=example"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/json" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_JSON=function(r,i,n,t){n||(n={});try{n["Content-type"]="application/json",SUtilXMLHttpReqPost.req__paramsStr(r,JSON.stringify(i),n,t)}catch(o){window.b2link_ui.message.error("window.b2link.xhr.req_POST_JSON Error : "+o)}};

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 *
 * FormData를 사용하여 전달한다.
 *
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/x-www-form-urlencoded"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_Obj(
		"www.google.com"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded", ... }
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_Obj(
		"http://posttestserver.com/post.php?dir=example"
		, { "a" : 1, "b" : 2, "c" : 3 }
		, { "Content-type" : "application/x-www-form-urlencoded" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_Obj=function(t,i,n,r){SUtilXMLHttpReqPost.req__paramsObj(t,i,n,r)};

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * XMLHttpRequest 객체를 활용하여 GET 방식으로 Request를 한다.
 * 여러 이벤트 타입의 Callback Function을 설정할 수 있다.
 * @function
 * @param {String} url
 * @param {Object} params
 * @param {Object} requestHeaders
 * <code>
 * {
 *	"Content-type" : "application/x-www-form-urlencoded"
 *	, "Content-length" : "a=1&b=2&c=3".length
 *	, ...
 * }
 * </code>
 * @param {Function} cbFunction
 * <code>
 * {
 *	"onabort" : function( e ){}
 *	, "onerror" : function( e ){}
 *	, "onload" : function( e ){}
 *	, "onloadend" : function( e ){}
 *	, "onstart" : function( e ){}
 *	, "onprogress" : function( e ){}
 *	, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
 *	, "ontimeout" : function( e ){}
 * }
 * </code>
 * @example
 * <code>
	window.b2link.xhr.req_POST_Str(
		"www.google.com"
		, JSON.stringify({ "a" : 1, "b" : 2, "c" : 3 })
		, { "Content-type" : "application/json" }//,...
		, {
			"onabort" : function( e ){}
			, "onerror" : function( e ){}
			, "onload" : function( e ){}
			, "onloadend" : function( e ){}
			, "onstart" : function( e ){}
			, "onprogress" : function( e ){}
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){}
		}
	);

	window.b2link.xhr.req_POST_Str(
		"http://posttestserver.com/post.php?dir=example"
		, JSON.stringify({ "a" : 1, "b" : 2, "c" : 3 })
		, { "Content-type" : "application/json" }//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);

	window.b2link.xhr.req_POST_Str(
		//"http://www.example.org/example.txt"
		"./ttwP/www.example.org/example.txt"
		, null
		, {
			"Content-type" : "text/plain"
		}//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);

	window.b2link.xhr.req_POST_Str(
		"http://html5rocks.com"
		, null
		, {
			"Content-type" : "text/plain"
		}//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);

	window.b2link.xhr.req_POST_Str(
		"www.example2.com"
		, null
		, {
			"Content-type" : "text/plain"
		}//,...
		, {
			"onabort" : function( e ){ console.log( e ) }
			, "onerror" : function( e ){ console.log( e ) }
			, "onload" : function( e ){ console.log( e ) }
			, "onloadend" : function( e ){ console.log( e ) }
			, "onstart" : function( e ){ console.log( e ) }
			, "onprogress" : function( e ){ console.log( e ) }
			, "onreadystatechange" : function( e ){}//or "onreadystatechange" : { "0" : function( e ){}, "1" : function( e ){}, "2" : function( e ){}, "3" : function( e ){}, "4" : function( e ){} }
			, "ontimeout" : function( e ){ console.log( e ) }
		}
	);
 * </code>
 */
window.b2link.xhr.req_POST_Str=function(t,r,i,n){SUtilXMLHttpReqPost.req__paramsStr(t,r,i,n)};

//------------------------------[ E ] - POST - Async;


//------------------------------[ S ] - POST - Sync;
//------------------------------[ E ] - POST - Sync;

//--------------------------------------------------window.b2link.xhr.r***;

//----------------------------------------------------------------------------------------------------[ E ] - window.b2link.xhr;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * Array( 1차원배열 ) 중복 요소 제거
 * @function
 * @param {Array} a [ "감", "사과", "사과" ]
 * @return {Array} r [ "감", "사과" ]
 * @example
 * <code>
	 window.b2link.array.getUnique( [ "감", "사과", "사과" ] );
 * </code>
 */
window.b2link.array.getUnique = function( a )
{
	window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.array.getUnique():{Array}----------" );

	var r = [];
	var temp = {};
	var io;
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		var io = a[ i ];
		if( temp.hasOwnProperty( io ) ) continue;
		r.push( io );
		temp[ io ] = io;
	}

	window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.array.getUnique():{Array}----------return r;" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

(function(){
	/**
	 * ArrayItem 정렬 순서 변경
	 * @function
	 * @param {Object} item0
	 * @param {Object} item1
	 * @return {Number}
	 */
	var _sortByFunc = function( item0, item1 )
	{
		//if( typeof item0 === "undefined" ) return -1;
		//if( typeof item1 === "undefined" ) return 1;

		var key = item0.__proto__.__sortKey__;
		item1.__proto__.__sortKey__ = key;

		var x = item0[ key ];
		var y = item1[ key ];

		return (x < y) ? -1 : ((x > y) ? 1 : 0);
	};

	/**
	 * JSON Array를 입력받은 key의 value 기준으로 오름차순 정렬
	 * @function
	 * @param {Array} a JsonArray
	 * @param {String} key
	 * @param {String} value
	 * @return {Array} a
	 * @example
	 * <code>
		 window.b2link.array_collection.sortJsonArrayByKey_Asc(
			[ { nm : "ccc", val : 3 }, { nm : "aaa", val : 1 }, { nm : "aaa", val : 5 }, { nm : "bbb", val : 2 }, { nm:"asdfasf" }, {nm : "Qwertqtweqt" } ]
			, "nm"
		 );

		 window.b2link.array_collection.sortJsonArrayByKey_Asc(
			[ { nm : "ccc", val : 3 }, { nm : "aaa", val : 5 }, { nm : "aaa", val : 1 }, { nm : "bbb", val : 2 }, { nm:"asdfasf" }, {nm : "Qwertqtweqt" } ]
			, "nm"
		 );
	 * </code>
	 */
	window.b2link.array_collection.sortJsonArrayByKey_Asc = function( a, key )
	{
		window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.array_collection.sortJsonArrayByKey_Asc():{Object}----------" );

		a[ 0 ].__proto__.__sortKey__ = key;

		a.sort( _sortByFunc );

		var i=0, iLen=a.length;
		for( ; i<iLen; ++i ) delete a[ i ].__proto__.__sortKey__;

		window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.array_collection.sortJsonArrayByKey_Asc():{Object}----------return a;" );
		return a;
	};
})();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

(function(){
	/**
	 * ArrayItem 정렬 순서 변경
	 * @function
	 * @param {Object} item0
	 * @param {Object} item1
	 * @return {Number}
	 */
	var _sortByFunc = function( item0, item1 )
	{
		//if( typeof item0 === "undefined" ) return -1;
		//if( typeof item1 === "undefined" ) return 1;

		var key = item0.__proto__.__sortKey__;
		item1.__proto__.__sortKey__ = key;

		var x = item0[ key ];
		var y = item1[ key ];

		return (x < y) ? 1 : ((x > y) ? -1 : 0);
	};

	/**
	 * JSON Array를 입력받은 key의 value 기준으로 내림차순 정렬
	 * @function
	 * @param {Array} a JsonArray
	 * @param {String} key
	 * @param {String} value
	 * @return {Array} a
	 * @example
	 * <code>
		 window.b2link.array_collection.sortJsonArrayByKey_Desc(
			[ { nm : "ccc", val : 3 }, { nm : "aaa", val : 1 }, { nm : "aaa", val : 5 }, { nm : "bbb", val : 2 }, { nm:"asdfasf" }, {nm : "Qwertqtweqt" } ]
			, "nm"
		 );

		 window.b2link.array_collection.sortJsonArrayByKey_Desc(
			[ { nm : "ccc", val : 3 }, { nm : "aaa", val : 5 }, { nm : "aaa", val : 1 }, { nm : "bbb", val : 2 }, { nm:"asdfasf" }, {nm : "Qwertqtweqt" } ]
			, "nm"
		 );
	 * </code>
	 */
	window.b2link.array_collection.sortJsonArrayByKey_Desc = function( a, key )
	{
		window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.array_collection.sortJsonArrayByKey_Desc():{Object}----------" );

		a[ 0 ].__proto__.__sortKey__ = key;

		a.sort( _sortByFunc );

		var i=0, iLen=a.length;
		for( ; i<iLen; ++i ) delete a[ i ].__proto__.__sortKey__;

		window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.array_collection.sortJsonArrayByKey_Desc():{Object}----------return a;" );
		return a;
	};
})();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Timeout를 구동한다.
 * @function
 * @param {HTMLElement} el
 * @param {Number} time
 * @return {Number}
 */
window.b2link.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop = function( el, time )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop():{Number}----------" );
	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.common.setTimeout__setPosition_CenterMiddle_FromParent__NMinus_ScrollTop():{Number}----------" );

	return setTimeout( function(){ window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus_ScrollTop( el ); }, time ? time : 500 );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
window.b2link.console.initialize = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.b2link.console.initialize():void----------" );

	window.TtwLog.timeStamp( "---- [ E ] - window.b2link.console.initialize():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * String format
 * @function
 * @param {Object} Date object { y : 2017, m : 2, d: 3, ho : 3, mi : 4, se : 12}
 * @return {String} {yyyy-mm-dd} / {yyyy-mm-dd hh:mi:ss}
 * @author James
 */
window.b2link.date.dateFormatFromDateObject = function( d )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateFormatFromDateObject():{String}----------" );

	if( d === null ) return "";

	if( typeof d !== "object" ) return "";

	if( !d.hasOwnProperty( "y" ) ) return "";

	var year = d.y;
	var month = window.b2link.date.dateFormatFromDateObject._addZero( d.m );
	var day = window.b2link.date.dateFormatFromDateObject._addZero( d.d );

	//var formattedDate = `${year}-${month}-${day}`;
	var formattedDate = year + "-" + month + "-" + day;

	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.date.dateFormatFromDateObject():{String}----------return formattedDate;" );
	return formattedDate;
};
window.b2link.date.dateFormatFromDateObject._addZero = function( n )
{
	if( n && n < 10 )
		n = "0" + n;
	return n;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * HTMLInputElement Object에서 Element를 Element.value를 추출하여 동일 구조의 Object를 반환한다.
 * @function
 * @param {Object} d { "y" : {HTMLInputElement}, "m" : {HTMLInputElement}, "d" : {HTMLInputElement}, "ho" : {HTMLInputElement}, "mi" : {HTMLInputElement}, "se" : {HTMLInputElement} }
 * @return {Object} { "y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50 }
 */
window.b2link.date.getDateObjectFromInputsObject = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.date.getDateObjectFromInputsObject():{Object}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.date.getDateObjectFromInputsObject():{Object}----------return {}; );
	return {
		y : d.y.value
		, m : d.m.value
		, d : d.d.value
		, ho : d.ho.value
		, mi : d.mi.value
		, se : d.se.value
		//, mil : d.mil.value
	};
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	var _date = new Date();

	/**
	 * Object 타입의 Date를 ISOString 형식의 Date로 바꿔서 반환한다.
	 * @function
	 * @param {Object} d { "y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50 }
	 * @return {String} 2017-01-09T08:18:19.000Z
	 */
	window.b2link.date.getISOStringFromDateObject = function( d )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.date.getISOStringFromDateObject():{String}----------" );

		_date.setYear( d.y );
		_date.setMonth( d.m - 1 );
		_date.setDate( d.d );
		_date.setHours( d.ho );
		_date.setMinutes( d.mi );
		_date.setSeconds( d.se );
		//_date.setMilliseconds( d.mil );

		//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.date.getISOStringFromDateObject():{String}----------return _date.toISOString();" );
		return _date.toISOString();
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Object 타입의 Date를 ISOString 형식의 Date로 바꿔서 반환한다.
 * @function
 * @param {Object} d { "y" : 2017, "m" : 2, "d" : 25, "ho" : 11, "mi" : 20, "se" : 50 }
 * @return {String} 2017-01-09T08:18:19.000Z
 */
window.b2link.date.getISOStringFromDateObject.new = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.date.getISOStringFromDateObject.new():{String}----------" );

	var _date = new Date( d.y + "." + d.m + "." + d.d + " " + d.ho + ":" + d.mi + ":" + d.se );

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.date.getISOStringFromDateObject.new():{String}----------return _date.toISOString();" );
	return _date.toISOString();
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * There is a little time differences in same date between two Date() Object,
 * To compare just dates, Set Hours, Minites, Seconds as 0
 * Check if {{date1}} is past than {{date2}}
 *
 * @function
 * @return {Boolean}
 */
window.b2link.date.isDateFuture = function( date1, date2 )
{
	window.cparkLog.timeStamp( "---- [ S ] - window.b2link.date.isDateFuture():{String}----------" );

	var _d1 = new Date( date1.y, date1.m, date1.d, 0, 0, 0 );
	var _d2 = new Date( date2.y, date2.m, date2.d, 0, 0, 0 );

	var timeDifference = _d1.getTime() - _d2.getTime();
	if( timeDifference >= 0 ) return true;
	else return false;

	window.cparkLog.timeStamp( "---- [ E ] - window.b2link.date.isDateFuture():{String}----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * 모든 item의 자료타입은 같아야 한다.
	 * 0번째 item의 자료 타입이 Object일시에만 Loop를 실행한다.;
	 *
	 * @function
	 * @param {Array} data
	 */
	var _array = function( data )
	{
		if( "object" != data[ 0 ] )
		{
			//모든 item의 자료타입은 같아야 한다.;
			//0번째 item의 자료 타입이 Object일시에만 Loop를 실행한다.;
			return;
		}

		var io;
		var i=0, iLen=data.length;
		for( ; i<iLen; ++i )
		{
			io = data[ i ];
			if( "object" == typeof( io ) )
			{
				_object( io );
			}
		}
	};

	/**
	 *
	 * @function
	 * @param {Object} data
	 */
	var _object = function( data )
	{
		var io;
		for( var s in data )
		{
			io = data[ s ];

			if( "price" == s )
			{
				if( "number" != typeof( io ) )
				{
					//price는 Number여야 한다.;
					debugger;
					//data[ s ] = Number( io );
				}
			}
			else if( 0 == s.indexOf( "quantity" ) )
			{
				if( "number" != typeof( io ) || io < 0 )
				{
					//quantity_***는 uint여야 한다 / 기본값은 0;
					debugger;
					//data[ s ] = 0;
				}
			}

			if( 0 == s.indexOf( "_ids$" ) )
			{
				if( "object" != typeof( io ) || !io )
				{
					//_ids$***는 Object여야 한다.;
					debugger;
				}

				var jo;
				for( var s0 in io )
				{
					jo = io[ s0 ];
					if( "number" != typeof( jo ) || jo < -1 )
					{
						//_ids$***.??는 uint여야 한다 / 기본값은 -1;
						debugger;
						//data[ s ][ s0 ] = parseInt( jo );
					}
				}
			}
			else if( 0 == s.indexOf( "_id$" ) )
			{
				if( "number" != typeof( io ) || io < -1 )
				{
					//_id$***는 uint여야 한다 / 기본값은 -1;
					debugger;
					//data[ s ] = parseInt( io );
				}
			}
			else if( 0 == s.indexOf( "cd$" ) )
			{
				if( "string" != typeof( io ) && !io )
				{
					//cd$***.??는 String이여야 한다;
					debugger;
					//기본 값 셋팅 로직;
				}
			}
			/*/
			else if( 0 == s.indexOf( "nm$" ) )
			{
			}
			//*/
			//20170524 - quantity_ 로 시작하는 구문중에 quantity_predict_release만 Array임 나머지는 uint;
			else if( s != "quantity_predict_release" && 0 == s.indexOf( "quantity_" ) )
			{
				if( "number" != typeof( io ) || io < 0 )
				{
					//quantity_***는 uint여야 한다 / 기본값은 0;
					debugger;
					//data[ s ] = 0;
				}
			}
			else if( 0 == s.indexOf( "total_quantity_" ) )
			{
				if( "number" != typeof( io ) || io < 0 )
				{
					//total_quantity_***는 uint여야 한다 / 기본값은 0;
					debugger;
					//data[ s ] = 0;
				}
			}
		}
	};

	/**
	 * MongoDB의 Query를 실행하기 위한 파라메터 구조체를 체크하는 함수
	 * _id*** 키 값 - uint 체크
	 *  cd*** 키 값 - String 체크
	 *  //nm*** 키 값 - String 체크
	 *
	 * @function
	 * @param {Object} data
	 * @return {boolean}
	 */
	window.b2link.debug._check_mongodb_queryParameter = function( data )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.b2link.debug._check_mongodb_queryParameter():{String}----------" );

		if( data.pop && data.push )
		{
			_array( data );
		}
		else
		{
			_object( data );
		}

		window.TtwLog.timeStamp( "---- [ E ] - window.b2link.debug._check_mongodb_queryParameter():{String}----------" );
	};

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Canvas Element를 새롭게 생성하여 반환한다.
 * @return {HTMLCanvasElement}
 */
window.b2link.element.createElement__Canvas = function()
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.createElement__Canvas():{HTMLCanvasElement}----------" );
	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.createElement__Canvas():{HTMLCanvasElement}----------" );
	return window.document.createElement( "canvas" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Canvas Element를 새롭게 생성하여 반환한다.
 * @return {HTMLDivElement}
 */
window.b2link.element.createElement__DIV = function()
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.createElement__DIV():{HTMLDivElement}----------" );
	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.createElement__DIV():{HTMLDivElement}----------" );
	return window.document.createElement( "div" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * element에 Data를 "list_item_value" instance명으로 주입한다.
 * element에 Data 여러개를 "list_item_values" instance명으로 주입한다.
 * @function
 * @param {HTMLElement} t HTMLElement
 * @param {Array|Object|*} data
 * @param {Array|Object|*} arguments[ 2 ] 이상부터 data와 같은 구조를 가지고 있어야 한다.
 */
window.b2link.element.injectValuesForListItem = function( t, data )
{
	//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.injectValuesForListItem():void----------" );

	t.list_item_value = data;
	t.list_item_values = [];

	var i=1, iLen=agruments.length;
	for( ; i<iLen; ++i ) t.list_item_values.push( arguments[ i ] );

	//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.injectValuesForListItem():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	var _f0 = window.b2link.element.injectValueForListItem;
	var _f1 = window.b2link.element.injectValuesForListItem;

	var _ = {
		   1 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ] );}
		,  2 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ] ); }
		,  3 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ] ); }
		,  4 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ] ); }
		,  5 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ] ); }
		,  6 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ] ); }
		,  7 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ], a7=args[ 7 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ], a7[ i ] ); }
		,  8 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ], a7=args[ 7 ], a8=args[ 8 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ], a7[ i ], a8[ i ] ); }
		,  9 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ], a7=args[ 7 ], a8=args[ 8 ], a9=args[ 9 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ], a7[ i ], a8[ i ], a9[ i ] ); }
		, 10 : function( a, standardLen, args ){ var i=0, iLen=standardLen;var a1=args[ 1 ], a2=args[ 2 ], a3=args[ 3 ], a4=args[ 4 ], a5=args[ 5 ], a6=args[ 6 ], a7=args[ 7 ], a8=args[ 8 ], a9=args[ 9 ], a10=args[ 10 ];
			for( ; i<iLen; ++i ) _f0( a[ i ], a1[ i ], a2[ i ], a3[ i ], a4[ i ], a5[ i ], a6[ i ], a7[ i ], a8[ i ], a9[ i ], a10[ i ] ); }
	};

	/**
	 * element에 children 객체에 주어진 Array Data[ i ]를 "list_item_value" instance명으로 주입한다.
	 * element에 Data 여러개를 "list_item_values" instance명으로 주입한다.
	 * @function
	 * @param {HTMLElement} t HTMLElement
	 * @param {Array} data
	 */
	window.b2link.element.injectValuesForListItems = function( t, data )
	{
		//////////window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.injectValuesForListItems():void----------" );

		var argsLen = arguments.length;
		var dataLen = data.length;

		var i=2, iLen=argsLen;
		for( ; i<iLen; ++i )
			if( dataLen != arguments[ i ].length )
				window.TtwLog.error( "window.b2link.element.injectValuesForListItems Error : 데이터들의 갯수가 일치하지 않음" );

		var a;
		//<Style>가 들어있는 케이스;
		if( t.children[ 0 ] && "STYLE" == t.children[ 0 ].tagName )
		{
			a = [];
			var b = t.children;
			var i=0, iLen=b.length;
			for( ; i<iLen; ++i ) if( "STYLE" != b[ i ].tagName ) a.push( b[ i ] );
		}
		else a = t.children;

		if( a.length != dataLen )
			window.TtwLog.warn( "window.b2link.element.injectValuesForListItems Warn : t의 children 갯수과 data의 갯수가 일치하지 않음." );

		var standardLen = ( a.length > data.length ) ? data.length : a.length;
		_[ argsLen-1 ]( a, standardLen, arguments );

		//////////window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.injectValuesForListItems():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * 대상 HTMLElement의 left를 부모 HTMLElement 와 대상 HTMLElement의 width를 비교하여 중심으로 이동 시킨다.
 * 대상 HTMLElement의 top을 부모 HTMLElement 와 대상 HTMLElement의 height를 비교하여 중심으로 이동 시킨다.
 * bottom, right는 "auto"를 넣는다.
 * 이동 해야할 위치가 -일 경우는 left 또는 top은 "auto"가 된다.
 * @function
 * @param {HTMLElement} t HTML Element
 */
window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus_ScrollTop = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus_ScrollTop():void----------" );

	var pw = t.parentElement.clientWidth;//parent width;
	var ph = t.parentElement.clientHeight;//parent height;

	var dw = t.clientWidth;//div width;
	var dh = t.clientHeight;//div height;

	var hDW = dw / 2;//half div width;
	var hDH = dh / 2;//half div height;

	var hPW = pw / 2;//half parent width;
	var hPH = ph / 2;//half parent height;

	var s = t.style;

	var left = hPW - hDW;
	( left > 0 ) ? s.left = left + "px" : s.left = "auto";
	console.log( "s.left : " + s.left );

	var top = hPH - hDH;
	( top > 0 ) ? s.top = top + t.parentElement.scrollTop + "px" : s.top = "auto";
	console.log( "s.top : " + s.top );

	s.bottom = "auto";
	s.right = "auto";

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus_ScrollTop():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	var _date = new Date();

	/**
	 * 파일 다운로드
	 * @function
	 * @param {String} url
	 */
	window.b2link.file.download = function( url )
	{
		//window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.file.download():void----------" );

		url = url
			+ window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() )
			+ "&nCached=" + ( ++_date );

		window.open( window.b2link.uri.encodeURI( url ) );

		//window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.file.download():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 파일을 삭제 한다.
 * 단일 파일 삭제 or 다중 파일 삭제
 * @function
 * @param {String|Array} url
 */
window.b2link.fileServer.delete = function( url )
{
	window.JaceLog.timeStamp( "---- [ S ] - window.b2link.fileServer.delete():void----------" );

	if( !url ) return false;

	var _fileServerHost = window.b2link.url.getServerURLByServers( "file_server" );

	var _scode = window.b2link.STATIC.CONFIG.URL.SCODE;
	var _server_url = _fileServerHost
		+ "/delete?scode=" + _scode
		+ window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

	if( typeof url === "string" ) url = [ url ];

	window.b2link.xhr.req_POST_Str(
		_server_url
		, JSON.stringify({ scode : _scode,  files : url })
		, { "Content-type" : "application/json" }
		, {
			onabort : function( e ){ console.log( e ); }
			, onerror : function( e ){ console.log( e ); /* TODO : 모달 로딩 닫기 */ return false; }
			, onload : function( e ){ console.log( e ); }
			, onloadend : function( e ){ console.log( e ); /* TODO : 모달 로딩 열기 */ return true; }
			, onstart : function( e ){ console.log( e ); }
			, onprogress : function( e ){ console.log( e ); }
			, onreadystatechange : function( e ){}
			, ontimeout : function( e ){ console.log( e ); /* TODO : 모달 로딩 닫기 */ }
		}
	);

	window.JaceLog.timeStamp( "---- [ E ] - window.b2link.fileServer.delete():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 파일을 다운로드 한다.
 * @function
 * @param {String} url
 */
window.b2link.fileServer.download = function( url )
{
	window.JaceLog.timeStamp( "---- [ S ] - window.b2link.fileServer.download():void----------" );

	if( !url ) return false;

	var _fileServerHost = window.b2link.url.getServerURLByServers( "file_server" );

	var _scode = window.b2link.STATIC.CONFIG.URL.SCODE;

	/*/
	//내부파일 요청 URL 생성;
	if( url.indexOf( _fileServerHost ) === 0 )
		url = url + "?scode=" + _scode + "&download=1" + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

	var fileName = url.split( "/" ).pop();

	//Construct the a element;
	var link = document.createElement( "a" );
	link.download = fileName;
	link.target = "_blank";

	//Construct the uri;
	link.href = url;
	document.body.appendChild( link );
	link.click();

	//Cleanup the DOM;
	document.body.removeChild( link );
	delete link;
	/*/

	//20170818 Rh2 수정 - a 태그 사용할 이유 없음;
	//내부파일 요청 URL 생성;
	if( url.indexOf( _fileServerHost ) === 0 )
	{
		//20170818 Rh2 수정 - download=1 조건 들어가면 파일명에 한글 깨짐;
		//url = url + "?scode=" + _scode + "&download=1" + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
		//url = url + "?scode=" + _scode + "&" + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
		url = url + "?scode=" + _scode;
	}

	window.b2link.file.download( url );
	//*/

	window.JaceLog.timeStamp( "---- [ E ] - window.b2link.fileServer.download():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 여러 파일을 zip 파일로 묶어서 다운로드 한다.
 * @function
 * @param {Array} urls
 * @param {String} zipFileName
 */
window.b2link.fileServer.downloads = function( urls, zipFileName )
{
	window.JaceLog.timeStamp( "---- [ S ] - window.b2link.fileServer.downloads():void----------" );

	if( !urls ) return false;

	if( !Array.isArray )
		Array.isArray = function( arg ){ return Object.prototype.toString.call( arg ) === '[object Array]'; };

	if( !Array.isArray( urls ) )
	{
		console.error("window.b2link.fileServer.downloads --- urls is not object Array.");
		return false;
	}

	var _fileServerHost = window.b2link.url.getServerURLByServers( "file_server" );

	var _scode = window.b2link.STATIC.CONFIG.URL.SCODE;

	var _server_url = _fileServerHost
		+ "/downloads?scode=" + _scode
		+ window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

	window.b2link.xhr.req_POST_Str(
		_server_url
		, JSON.stringify( { files : urls, zipFileName : zipFileName } )
		, { "Content-type" : "application/json" }
		, {
			onabort : function( e ){ console.log( e ); }
			, onerror : function( e ){ console.log( e ); /* TODO : 모달 로딩 닫기 */ return false; }
			, onload : function( e ){ console.log( e ); }
			, onloadend : function( e ){
				//console.log( e );

				//var type = e.target.getResponseHeader( "Content-Type" );
				//var blob = new Blob( [ this.response ], {type : type });

				//var URL = window.URL || window.webkitURL;
				//var downloadUrl = URL.createObjectURL( blob );
				var downloadUrl = _fileServerHost
					+ "/downloads?scode=" + _scode
					+ "&realFileName=" + this.response
					+ "&fileName=" + zipFileName
					+ window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );

				//Construct the a element;
				var link = window.document.createElement( "a" );
					link.download = zipFileName;
					link.target = "_blank";

				//Construct the uri;
				link.href = downloadUrl;
				window.document.body.appendChild( link );
				link.click();

				//Cleanup the DOM;
				window.document.body.removeChild( link );

				//주석 - 20180219_1647 - 송선우 - 잘못된 소스 주석처리;
				//delete link;

				//URL.revokeObjectURL( downloadUrl );
				return true;
			}
			, onstart : function( e ){ console.log( e ); /* TODO : 모달 로딩 열기 */ }
			, onprogress : function( e ){ console.log( e ); }
			, onreadystatechange : function( e ){}
			, ontimeout : function( e ){ console.log( e ); /* TODO : 모달 로딩 닫기 */ }
		}
	);

	window.JaceLog.timeStamp( "---- [ E ] - window.b2link.fileServer.downloads():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * 파일을 열기 한다.
 * @function
 * @param {String} url
 * @return {*}
 */
window.b2link.fileServer.open = function( url )
{
	window.JaceLog.timeStamp( "---- [ S ] - window.b2link.fileServer.open():void----------" );

	if( !url ) return false;

	var _fileServerHost = window.b2link.url.getServerURLByServers( "file_server" );

	var _scode = window.b2link.STATIC.CONFIG.URL.SCODE;

	//내부파일 요청 URL 생성;
	if( url.indexOf( _fileServerHost ) === 0 )
	{
		url += "?scode=" + _scode
			+ window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
	}

	window.open( url );

	window.JaceLog.timeStamp( "---- [ E ] - window.b2link.fileServer.open():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * 이전 페이지로 이동
 * @function
 */
window.b2link.history.back = function()
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.history.back():void----------" );

	if( window.history.back ) window.history.back();
	else window.history.go( -1 );

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.history.back():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * 이후 페이지로 이동
 * @function
 */
window.b2link.history.forward = function()
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.history.forward():void----------" );

	if( window.history.forward ) window.history.forward();
	else window.history.go( 1 );

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.history.forward():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	window._$TATIC_ONPOPSTATE = window._$TATIC_ONPOPSTATE || {
		  SYS0000 : function( e ){}
		, SYS0010 : function( e ){}
		, SYS0020 : function( e ){}
		, SYS0030 : function( e ){}
		, SYS0040 : function( e ){}
		, SYS0050 : function( e ){}
		, SYS0060 : function( e ){}
		, SYS0070 : function( e ){}
		, SYS0080 : function( e ){}
		, SYS0090 : function( e ){}
		, SYS0100 : function( e ){}
		, SYS0110 : function( e ){}
		, SYS0120 : function( e ){}
		, SYS0130 : function( e ){}
		, SYS0140 : function( e ){}
		, SYS0150 : function( e ){}
	};

	/**
	 * State 추가
	 * @function
	 * @param {PopStateEvent} event
	 * @example
	 * <code>
		window.b2link.history.pushState( {a:0}, "asd0", "asd0.html" );
		window.b2link.history.pushState( {a:1}, "asd1", "asd1.html" );
	 * </code>
	 */
	window.b2link.history.onpopstate = function( e )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.history.onpopstate():void----------" );

		if( "popstate" != e.type ){
			window.TtwLog.error( "[ ERROR ] - 잘못된 이벤트로 인하여 호출 됨" );
			return;
		}

		var b = true;
		if( !e.state.SCODE ) b = false;
		if( !e.state.api ) b = false;
		if( !e.state.params ) b = false;

		if( !b )
		{
			window.TtwLog.error( "[ ERROR ] - B2Ker기반의 State Object에는 'SCODE', 'api', 'params' 프로퍼티가 필수 값이다." );
			return;
		}

		window.TtwLog.log( e.state );

		window._$TATIC_ONPOPSTATE[ e.state.SCODE ]( e.state );

		//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.history.onpopstate():void----------" );
	};

	if( !window.onpopstate )
	{
		window.onpopstate = window.b2link.history.onpopstate;

		window.TtwLog.log( "[ MESSAGE ] - window.onpopstate에 window.b2link.history.onpopstate 적용완료" );
		window.TtwLog.log( "[ MESSAGE ] - window._$TATIC_ONPOPSTATE[ 'SCODE' ] 설정이 필요함." );
	}
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * State 추가
 * @function
 * @param {Object} stateObj
	pushState()에 의해 생성된 새로운 히스토리 항을 포함하고 있는 자바스크립트 객체입니다.
	사용자가 새로운 상태로 이동할 때 마다, popstate 이벤트가 발생하고, 이 이벤트의 state 속성은 히스토리의 state객체 사본을 가집니다.
	state 객체는 직렬화할 수 있는 어떤 것도 될 수 있습니다.
	Firefox는 state 객체들을 사용자의 디스크에 저장하며, 그 state 객체들은 사용자가 브라우저를 재시작 하여도 다시 사용할 수 있습니다.
	state 객체의 직렬화 결과 크기는 최대 640k로 제한됩니다.
	만약 사용자가 더 큰 직렬 표현 데이타를 pushState()로 보낸다면, 메소드는 예외를 발생시킵니다.
	만약 사용자가 이 보다 더 큰 공간이 필요하면 sessionStorage나 localStorage를 사용하십시오.
 *
 * <code>
	{
		//시스템 코드;
		SCODE : "SYS0000"

		//window.b2link_ui.***.*** 등의 API;
		, api : ""

		//api에 주입될 Parameter;
		, params : ""
	}
 * </code>
 *
 * @param {String} title
	Firefox 는 현재 이 변수를 무시합니다.
	나중에 사용될 수도 있기 때문에 빈 문자열을 지정해 놓는 것은 안전합니다.
	빈 문자열 대신 이동하고자 하는 state 마다 짧은 명칭을 부여하는 것도 좋습니다.
 *
 * @param {String} url
 	새로운 히스토리 엔트리의 URL을 지정합니다.
	pushState() 호출 이후에는 브라우저가 이 URL을 로딩하지 않는 것을 명심하시기 바랍니다.
	하지만 아마 나중에도 사용될 수 있습니다, 예를 들면, 사용자가 브라우저를 다시 시작했을 때처럼 말이죠.
	새롭게 할당되는 URL은 현재의 URL에 기준하기 때문에, 절대 경로일 필요는 없습니다.
	새로운 URL은 기존의 URL을 기준으로 해석됩니다.
	새로운 URL은 현재 URL에서 유추될 수 없다면 pushState()는 예외를 발생시킵니다.
	이 변수는 선택 사항으로, 명시되지 않는다면, 현재 URL로 지정됩니다.
 *
 * @example
 * <code>
	window.b2link.history.pushState( {a:0}, "asd0", "asd0.html" );
	window.b2link.history.pushState( {a:1}, "asd1", "asd1.html" );

	window.b2link.history.pushState( {SCODE:"SYS0000",api:"window.b2link_ui.member.signin",params:"1"}, "asd0", "asd0/asd/asd" );
	window.b2link.history.pushState( {SCODE:"SYS0000",api:"window.b2link_ui.member.signin",params:"1"}, "asd1", "asd1/asd/asd" );

	window.b2link.history.pushState( {SCODE:"SYS0000",api:"window.b2link_ui.member.signin",params:"1"}, "asd0", "" );
	window.b2link.history.pushState( {SCODE:"SYS0000",api:"window.b2link_ui.member.signin",params:"2"}, "asd1", "" );
 * </code>
 */
window.b2link.history.pushState = function( stateObj, title, url )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.history.pushState():void----------" );

	var b = true;
	if( !stateObj.SCODE ) b = false;
	if( !stateObj.api ) b = false;
	if( !stateObj.params ) b = false;

	if( !b )
	{
		window.TtwLog.error( "[ ERROR ] - B2Ker기반의 State Object에는 'SCODE', 'api', 'params' 프로퍼티가 필수 값이다." );
		return;
	}

	return window.history.pushState( stateObj, title, url );

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.history.pushState():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * State 변경
 * @function
 * @param {Object} stateObj
	pushState()에 의해 생성된 새로운 히스토리 항을 포함하고 있는 자바스크립트 객체입니다.
	사용자가 새로운 상태로 이동할 때 마다, popstate 이벤트가 발생하고, 이 이벤트의 state 속성은 히스토리의 state객체 사본을 가집니다.
	state 객체는 직렬화할 수 있는 어떤 것도 될 수 있습니다.
	Firefox는 state 객체들을 사용자의 디스크에 저장하며, 그 state 객체들은 사용자가 브라우저를 재시작 하여도 다시 사용할 수 있습니다.
	state 객체의 직렬화 결과 크기는 최대 640k로 제한됩니다.
	만약 사용자가 더 큰 직렬 표현 데이타를 pushState()로 보낸다면, 메소드는 예외를 발생시킵니다.
	만약 사용자가 이 보다 더 큰 공간이 필요하면 sessionStorage나 localStorage를 사용하십시오.
 *
 * <code>
	{
		//시스템 코드;
		SCODE : "SYS0000"

		//window.b2link_ui.***.*** 등의 API;
		, api : ""

		//api에 주입될 Parameter;
		, params : ""
	}
 * </code>
 *
 * @param {String} title
	Firefox 는 현재 이 변수를 무시합니다.
	나중에 사용될 수도 있기 때문에 빈 문자열을 지정해 놓는 것은 안전합니다.
	빈 문자열 대신 이동하고자 하는 state 마다 짧은 명칭을 부여하는 것도 좋습니다.
 *
 * @param {String} url
 	새로운 히스토리 엔트리의 URL을 지정합니다.
	pushState() 호출 이후에는 브라우저가 이 URL을 로딩하지 않는 것을 명심하시기 바랍니다.
	하지만 아마 나중에도 사용될 수 있습니다, 예를 들면, 사용자가 브라우저를 다시 시작했을 때처럼 말이죠.
	새롭게 할당되는 URL은 현재의 URL에 기준하기 때문에, 절대 경로일 필요는 없습니다.
	새로운 URL은 기존의 URL을 기준으로 해석됩니다.
	새로운 URL은 현재 URL에서 유추될 수 없다면 pushState()는 예외를 발생시킵니다.
	이 변수는 선택 사항으로, 명시되지 않는다면, 현재 URL로 지정됩니다.
 */
window.b2link.history.replaceState = function( stateObj, title, url )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.history.replaceState():void----------" );

	var b = true;
	if( !stateObj.SCODE ) b = false;
	if( !stateObj.api ) b = false;
	if( !stateObj.params ) b = false;

	if( !b )
	{
		window.TtwLog.error( "[ ERROR ] - B2Ker기반의 State Object에는 'SCODE', 'api', 'params' 프로퍼티가 필수 값이다." );
		return;
	}

	return window.history.replaceState( stateObj, title, url );

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.history.replaceState():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * <div> Element의 tbodyren을 갱신한다.
 * <div><input type="text" class="product"></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <div><input type="text" class="product" value="a.product"></div> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @param {String} classname
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_tbody_set_data_by_classname_include_other_tbody = function( div, a , classname )
{
	window.JamesLog.timeStamp( "---- [ S ] - window.b2link.html_div.apply_tbody_set_data_by_classname_include_other_tbody():{HTMLElement}----------" );

	if( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;

	if( 0 == a.length ){ div.innerHTML = ""; return div; }

	var arr_length = a.length;

	var r = "";

	for( var i = 0; i < arr_length; i++ )
	{
		window.b2link.el_input.setInputValueAttributeFromClassNameDataObject( div, a[ i ] );
		if( a[ i ][ classname ].length > 0 )
		{
			var tbody = window.b2link.element.getElementByClassName( div, "tbody_" + classname );
				tbody.innerHTML = window.b2link.html_tbody.apply_child( tbody, a[ i ][ classname ] ).innerHTML;
		}
		r += div.innerHTML;
		div.innerHTML = div.__originalInnerHTML;
	}

	//console.log( r );
	if( r ) div.innerHTML = r;

	window.JamesLog.timeStamp( "---- [ E ] - window.b2link.html_div.apply_tbody_set_data_by_classname_include_other_tbody():{HTMLElement}----------return div;" );
	return div;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//확인하기 - 20171117 - 송선우 - window.b2link.html_div.apply_child과의 차이점 확인 하기;
/**
 * <div> Element의 children을 갱신한다.
 * <div><??>{{name}}</??></div> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <??>송선우0</??>, <??>송선우1</??> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} div
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_div.apply_repeat = function( div, a )
{
	window.TtwLog.warn( "window.b2link.html_div.apply_repeat -> window.b2link.html_div.apply_child로 교체하기 동일 기능으로 판단됨" );
	return window.b2link.html_div.apply_child( div, a );
}
//window.b2link.html_div.apply_repeat = function( div, arr )
//{
//	window.KaiLog.timeStamp( "---- [ S ] - window.b2link.html_div.apply_repeat():{HTMLElement}----------" );
//
//	if ( !div.__originalInnerHTML ) div.__originalInnerHTML = div.innerHTML;
//
//	if ( 0 === arr.length ) { div.innerHTML = ""; return div; }
//
//	var r = "";
//	//수정 - 20171117 - 송선우;
//	/*/
//	var i=0, iLen=arr.length;
//	for( ; i<iLen; ++i )
//	{
//		r += SUtilString.applyBraceStrFromArray( div.__originalInnerHTML, [ arr[ i ] ] );
//	}
//	/*/
//	r += SUtilString.applyBraceStrFromArray( div.__originalInnerHTML, arr );
//	//*/
//
//	if( r ) div.innerHTML = r;
//
//	window.KaiLog.timeStamp( "---- [ E ] - window.b2link.html_div.apply_repeat():{HTMLElement}----------return div;" );
//	return div;
//};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * <tbody> Element의 children을 갱신한다.
 * <tbody><tr><td>{{name}}</td></tr></tbody> 형태로 작성된 HTML을 참조하여 a(data array) 갯수 만큼 <td>송선우0</td>, <td>송선우1</td> 형태로 갱신한다.
 * @function
 * @param {HTMLElement} tbody
 * @param {Array} a [ { "nm" : "_id", "w" : 10 }, {}, {}, ... ]
 * @return {HTMLElement}
 */
window.b2link.html_tbody.apply_child__multi = function( tbody, a )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.html_tbody.apply_child__multi():{HTMLElement}----------" );

	if( !tbody.__originalInnerHTML ) tbody.__originalInnerHTML = tbody.innerHTML;

	var argsLen = arguments.length;
	var dataLen = a.length;

	if( 0 == dataLen ){ tbody.innerHTML = ""; return tbody; }

	var i=2, iLen=argsLen;
	for( ; i<iLen; ++i )
		if( dataLen != arguments[ i ].length )
		{
			window.TtwLog.error( "window.b2link.html_tbody.apply_child__multi Error : 데이터들의 갯수가 일치하지 않음" );
			return;
		}

	var etcDatas = [];
	var i=2, iLen=argsLen;
	for( ; i<iLen; ++i ) etcDatas.push( arguments[ i ] );

	var f0 = SUtilString.applyBraceStrFromObj;
	var r = "";
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		var ir = f0( tbody.__originalInnerHTML, a[ i ] );
		var jo;
		var j=0, jLen=etcDatas.length;
		for( ; j<jLen; ++j )
		{
			jo = etcDatas[ j ];
			ir = f0( ir, jo[ i ] );
		}

		r += ir;
	}

	//console.log( r );

	if( r ) tbody.innerHTML = r;

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.html_tbody.apply_child__multi():{HTMLElement}----------return tbody;" );
	return tbody;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} n
 * @return {Boolean}
 */
window.b2link.math.isNumber = function( n )
{
	//window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.math.isNumber():{Boolean}----------" );

	if( typeof( n ) == "string" )
	{
		n -= 0;

		if( isNaN( n ) ) return false;
		return true;
	}

	if( typeof( n ) == "number" )
	{
		return true;
	}

	//window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.math.isNumber():{Boolean}----------" );

	return false;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} n
 * @return {Boolean}
 */
window.b2link.math.isUint = function( n )
{
	//window.Rh2Log.timeStamp( "---- [ S ] - window.b2link.math.isUint():{Boolean}----------" );

	if( typeof( n ) == "string" || typeof( n ) == "number" )
	{
		n += "";

		if( isNaN( n ) ) return false;
		else
		{
			if( n.indexOf( "." ) > - 1 ) return false;
			else
			{
				if( n < 0 ) return false;
				return true;
			}
		}
	}

	//window.Rh2Log.timeStamp( "---- [ E ] - window.b2link.math.isUint():{Boolean}----------" );

	return false;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * 모바일 장치의 접속인지 확인한다.
 * @function
 * @return {Boolean}
 */
window.b2link.navigator.isMobile = function()
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.navigator.isMobile():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.navigator.isMobile():{Boolean}----------" );

	return window.navigator.userAgent.match(/(iPhone|iPad|iPod|Android|Windows Phone|IEMobile|BlackBerry|Mobile Safari|Opera Mobi)/) ? true : false;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * 필수 키 값 목록을 가지고 대상 오브젝트의 hasOwnProperty를 통해 존재 여부를 체크한다.
 * @function
 * @param {Object} t 필수 키 값 목록을 가지고 체크할 대상 오브젝트
 * @param {Array} a hasOwnProperty의 대상이될 필수 키값 목록
 * @return {Boolean}
 * @example
 * <code>
 * </code>
 */
window.b2link.obj.check_RequiredValueHasOwnProperty = function( t, a )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.obj.check_RequiredValueHasOwnProperty():{Boolean}----------" );

	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		if( !t.hasOwnProperty( a[ i ] ) )
		{
			debugger;
			//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.obj.check_RequiredValueHasOwnProperty():{Boolean}----------return 0;" );
			return 0;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.obj.check_RequiredValueHasOwnProperty():{Boolean}----------return 1;" );
	return 1;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * d의 자료구조를 t에 복제 한다.
 * @function
 * @param {Object} t
 * @param {Object} d
 * @example
 * <code>
	var o0 = { a : 1, b : { c : { d : 55 }, asd : [ 1,2,3,4,5 ], ggg : [ { d : 5} ] }, bb : false, gg : "" };
	var o1 = {};

	window.b2link.obj.copyStructure( o1, o0 );

	JSON.stringify( o1, null, "\t" );
 * </code>
 */
window.b2link.obj.copyStructure = function( t, d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.obj.copyStructure():void----------" );

	var io;
	for( var s in d )
	{
		io = d[ s ];
		if( "object" == typeof io )
		{
			t[ s ] = {};
			window.b2link.obj.copyStructure( t[ s ], io );
		}
		else t[ s ] = io;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.obj.copyStructure():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){

	/**
	 * SYS0030(BrandPortal) 전용 아마 사용안하는 듯함
	 * 다른곳에서 사용 금지 window.b2link.response.getResultStatus를 사용
	 * Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.
	 * @function
	 * @param {*} result
	 * @return {*}
	 */
	window.b2link.response.getAPIResultStatus = function( result )
	{
		//window.JamesLog.timeStamp( "---- [ S ] - window.b2link.response.getAPIResultStatus():{*}----------" );
		//window.JamesLog.timeStamp( "Input result : " );
		//window.JamesLog.timeStamp( result );

		if( "SYS0030" != window.b2link.STATIC.CONFIG.URL.SCODE )
		{
			window.b2link_ui.message.error( "window.b2link.response.getAPIResultStatus 관련 전달 메세지" );
			window.b2link_ui.message.error( "SYS0030(BrandPortal) 전용 아마 사용안하는 듯함" );
			window.b2link_ui.message.error( "다른곳에서 사용 금지 window.b2link.response.getResultStatus를 사용" );
		}

		try
		{
			if ( result.status === "success" ) {
				return 1;
			} else {
				return 0;
			}

		}
		catch( er )
		{
			window.JamesLog.error( "window.b2link.response.getAPIResultStatus Error : " + er );
		}

		//window.JamesLog.timeStamp( "return result : " );
		//window.JamesLog.timeStamp( result );

		//window.JamesLog.timeStamp( "---- [ E ] - window.b2link.response.getAPIResultStatus():{*}----------return result;" );
		return result;
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){

	var _result_r = {
		0 : 1//OK;
		//, 1 : 1//InternalError - 사용안함;
		, 2 : 0//Bad Value;
		, 3 : 0//OBSOLETE_DuplicateKey;
		, 13 : 0//Unauthorized;
		, 18 : 0//AuthenticationFailed;
		, 24 : 0//LockTimeout;
		, 86 : 0//IndexKeySpecsConflict;

		, "B21001601" : 0//mid가 존재하지 않음;
		, "B21001602" : 0//비밀번호 인증 5회 이상 틀림;
		, "B21001603" : 0//password가 맞지 않음;
		, "B21001604" : 0//승인되지 않은 Authority Code;
	};

	var _fnStore = {
		0 : 0
		, 1 : 1
		, 18 : 0//AuthenticationFailed;
		, "false" : 0
		, "true" : 1

		, "result.r" : function( result ){
			return _result_r[ result.r ];
		}
	};

	/**
	 * Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.
	 * @function
	 * @param {*} result
	 * @return {*}
	 */
	window.b2link.response.getResultStatus = function( result )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.response.getResultStatus():{*}----------" );
		//window.TtwLog.timeStamp( "Input result : " );
		//window.TtwLog.timeStamp( result );

		try
		{
			//----------result - 순수 에러코드 {uint} or {Boolean} 일시;
			if( _fnStore.hasOwnProperty( result ) )
			{
				var r = _fnStore[ result ];
				//window.TtwLog.timeStamp( "return r : " + r );
				//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.response.getResultStatus():{*}----------return r;" );
				return r;
			}


			//----------result가 {Object} 타입 일시;
			//MongoDB 표준 에러 코드를 준수해야한다;
			//{ r : NaN, m : "" };
			if( result.hasOwnProperty( "r" ) )
			{
				if( _fnStore.hasOwnProperty( "result.r" ) )
				{
					var r = _fnStore[ "result.r" ]( result );
					//window.TtwLog.timeStamp( "return r : " + r );
					//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.response.getResultStatus():{*}----------return r;" );
					return r;
				}
			}


			//----------result {Object} 타입 일시 - 일부 코드 파편화로 인한 result.state가 존재 할 시;
			//삭제하기 - 20170514 - 송선우 - 사용되는 모든 소스에서 제거하기;
			//확인하기 - 20171019 - 송선우 - 현재는 B2LiNK-B2Ker-Dev에서 전부 없어진 걸로 판단됨;
			//확인하기 - 20171019 - 송선우 - B2LiNK-BrandPortal-Dev에서는 원래 없는 걸로 판단됨;
			//{ state : NaN, ??? : ?? };
			if( result.hasOwnProperty( "state" ) )
			{
				var r = _fnStore[ result.state ];
				//window.TtwLog.timeStamp( "return r : " + r );
				//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.response.getResultStatus():{*}----------return r;" );
				return r;
			}

			if( "string" == typeof( result ) ) if( -1 != result.indexOf( "404 Not Found" ) ) return 0;

		}
		catch( er )
		{
			window.TtwLog.error( "window.b2link.response.getResultStatus Error : " + er );
		}

		//window.TtwLog.timeStamp( "return result : " );
		//window.TtwLog.timeStamp( result );

		//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.response.getResultStatus():{*}----------return result;" );
		return result;
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;


 //----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){

	var _idx = {};
	var _idxMaxCount = {};

	var _server = {

		//--------------------------------------------------[ S ] - B2LiNK-SessionServer-Dev;
		authority	: [ "http://localhost:30000/", "http://localhost:30000/" ]

		, member	: [ "http://localhost:30000/", "http://localhost:30000/" ]//B2LiNK-SessionServer-Dev;

		, _query_public : [ "http://localhost:30000/", "http://localhost:30000/" ]//B2LiNK-SessionServer-Dev;
		, _instance : [ "http://localhost:30000/", "http://localhost:30000/" ]//B2LiNK-SessionServer-Dev;
		//--------------------------------------------------[ E ] - B2LiNK-SessionServer-Dev;


		//--------------------------------------------------[ S ] - B2LiNK-FileServer-Dev;
		, server_file	: [ "http://localhost:49322/", "http://localhost:49322/" ]
		//--------------------------------------------------[ E ] - B2LiNK-FileServer-Dev;


		//--------------------------------------------------[ S ] - B2LiNK-B2Ker-Dev;
		, administrator	: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, brand			: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, category		: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, company		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		, contract_purchase : [ "http://localhost:49320/", "http://localhost:49320/" ]
		, contract_sale		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		, information	: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, invoice_without_transaction : [ "http://localhost:49320/", "http://localhost:49320/" ]
		, list_static	: [ "http://localhost:49320/", "http://localhost:49320/" ]

		, partner		: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, product		: [ "http://localhost:45320/", "http://localhost:45320/" ]

		, schedule		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		, settlement	: [ "http://localhost:49320/", "http://localhost:49320/" ]
		, stock  		: [ "http://localhost:49320/", "http://localhost:49320/" ]

		, transaction : [ "http://localhost:49320/", "http://localhost:49320/" ]
		, transaction_purchase_order_purchase : [ "http://localhost:49320/", "http://localhost:49320/" ]
		, transaction_purchase_order_sale : [ "http://localhost:49320/", "http://localhost:49320/" ]
		, transaction_purchase_return : [ "http://localhost:49320/", "http://localhost:49320/" ]

		//, transaction_quotation_purchase : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;
		//, transaction_quotation_sale : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;
		//, transaction_quote_purchase : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;
		//, transaction_quote_sale : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;

		, transaction_sale_return : [ "http://localhost:49320/", "http://localhost:49320/" ]

		//, transaction_report_release : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;
		//, transaction_report_wearing : [ "http://localhost:49320/", "http://localhost:49320/" ]//DB 삭제;

		, transaction_stock_release : [ "http://localhost:49320/", "http://localhost:49320/" ]
		, transaction_stock_wearing : [ "http://localhost:49320/", "http://localhost:49320/" ]
		//--------------------------------------------------[ E ] - B2LiNK-B2Ker-Dev;


		//--------------------------------------------------[ S ] - B2LiNK-Brand_Portal-Dev;
		//, _instance : [ "http://localhost:45320/", "http://localhost:45320/" ]
		//, _query_public : [ "http://localhost:45320/", "http://localhost:45320/" ]

		, baidu_index : [ "http://localhost:45320/", "http://localhost:45320/" ]
		, graph : [ "http://localhost:45320/", "http://localhost:45320/" ]
		, graph_data : [ "http://localhost:45320/", "http://localhost:45320/" ]
		, red_post : [ "http://localhost:45320/", "http://localhost:45320/" ]
		//--------------------------------------------------[ E ] - B2LiNK-Brand_Portal-Dev;
	};

	var io, iLen;
	for( var s in _server )
	{
		io = _server[ s ];
		iLen = io.length;
		_idxMaxCount[ s ] = iLen;
		_idx[ s ] = SUtilMath.random( 0, iLen, 0 );
	}

	/**
	 * @function
	 * @param {String} db_nm
	 * @return {String} url
	 */
	window.b2link.url.getServerURLByDB = function( db_nm )
	{
		if( !_server[ db_nm ] ) debugger;//없는 db 이름이 들어옴;

		var r;

		if( _idxMaxCount[ db_nm ] > _idx[ db_nm ] )
		{
			r = _server[ db_nm ][ _idx[ db_nm ] ];
			++_idx[ db_nm ];
		}
		else
		{
			_idx[ db_nm ] = 0;
			r = _server[ db_nm ][ _idx[ db_nm ] ];
		}

		return r;
	};

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//20170906_1501;
//SYS00***_APIServer를 사용하길 권장함;
//
//session_server, b2ker_api_server, brand_portal_api_server, api_server등 삭제 예정임.;
//
//excel_server, file_server등도 시스템 코드로 교체 예정;

(function(){

	var _idx = {};
	var _idxMaxCount = {};

	var _server = {

		//--------------------------------------------------[ S ] - 공용 서버;
		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev;
		SYS0010_APIServer : [ "http://localhost:30000", "http://localhost:30000", "http://localhost:30000" ]//B2LiNK-SessionServer-Dev;
			, session_server : [ "http://localhost:30000", "http://localhost:30000", "http://localhost:30000" ]//B2LiNK-SessionServer-Dev;
		, SYS0010_WebServer : [ "http://localhost:33333", "http://localhost:33333", "http://localhost:33333" ]//B2LiNK-SessionServer-Dev;

		//사용하는 곳 목록;
		//B2LiNK-SessionServer-Dev;
		, SYS0011_APIServer : [ "http://localhost:31000", "http://localhost:31000", "http://localhost:31000" ]//B2LiNK-LogServer-Dev;
		, SYS0011_WebServer : [ "http://localhost:31333", "http://localhost:31333", "http://localhost:31333" ]//B2LiNK-LogServer-Dev;

		//모든 View 서비스에서 사용;
		//, SYS0015_APIServer : [ "http://222.239.10.122:49324", "http://222.239.10.122:49324", "http://222.239.10.122:49324" ]//Development-Components-UI;
		//, SYS0015_WebServer : [ "http://222.239.10.122:49323", "http://222.239.10.122:49323", "http://222.239.10.122:49323" ]//Development-Components-UI;
		//, SYS0015_WebServer : [ "http://222.239.10.123:49323", "http://222.239.10.123:49323", "http://222.239.10.123:49323" ]//Development-Components-UI;
		, SYS0015_WebServer : [ "http://localhost:49323", "http://localhost:49323", "http://localhost:49323" ]//Development-Components-UI;
		//, SYS0015_APIServer : [ "https://resource.b2link.co.kr/router", "https://resource.b2link.co.kr/router", "https://resource.b2link.co.kr/router" ]//Development-Components-UI;
		//, SYS0015_WebServer : [ "https://resource.b2link.co.kr/view", "https://resource.b2link.co.kr/view", "https://resource.b2link.co.kr/view" ]//Development-Components-UI;

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev...;
		, SYS0040_APIServer : [ "http://localhost:49322", "http://localhost:49322" ]
			, file_server : [ "http://localhost:49322", "http://localhost:49322" ]

		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		//, SYS0050_APIServer : [ "http://localhost:47320", "http://localhost:47320" ]
			//, webhook_server : [ "http://localhost:47320", "http://localhost:47320" ]
		, SYS0050_APIServer : [ "https://api.b2link.co.kr/b2ker/webhook/router", "https://api.b2link.co.kr/b2ker/webhook/router" ]
			, webhook_server : [ "https://api.b2link.co.kr/b2ker/webhook/router", "https://api.b2link.co.kr/b2ker/webhook/router" ]
		//, SYS0050_APIServer : [ "https://test.api.b2link.co.kr/b2ker/webhook/router", "https://test.api.b2link.co.kr/b2ker/webhook/router" ]
			//, webhook_server : [ "https://test.api.b2link.co.kr/b2ker/webhook/router", "https://test.api.b2link.co.kr/b2ker/webhook/router" ]

		//사용하는 곳 목록;
		//B2LiNK-WebSocket-MessageServer-Dev, ...;
		//, SYS0060_APIServer : [ "http://localhost:42322", "http://localhost:42322" ]
		//, SYS0060_APIServer : [ "http://222.239.10.120:42322", "http://222.239.10.120:42322" ]
		, SYS0060_APIServer : [ "https://api.b2link.co.kr/b2ker/message/router", "https://api.b2link.co.kr/b2ker/message/router" ]
		//, SYS0060_APIServer : [ "https://test.api.b2link.co.kr/b2ker/message/router", "https://test.api.b2link.co.kr/b2ker/message/router" ]

		//사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, B2LiNK-BrandPortal-Dev, ...;
		, SYS0070_APIServer : [ "http://localhost:48320", "http://localhost:48320" ]
			, excel_server : [ "http://localhost:48320", "http://localhost:48320" ]
		, SYS0070_WebServer : [ "http://localhost:48321", "http://localhost:48321" ]
			, excel_web_server : [ "http://localhost:48321", "http://localhost:48321" ]

		//사용하는 곳 목록;
		//B2LiNK-BrandPortal-Dev, ...;
		, SYS0120_APIServer : [ "http://localhost:49520", "http://localhost:49520" ]
		, SYS0120_WebServer : [ "http://localhost:49521", "http://localhost:49521" ]

		//사용하는 곳 목록;
		//B2LiNK-BrandPortal-Dev, ...;
		, SYS0130_APIServer : [ "http://localhost:44520", "http://localhost:44520" ]
		, SYS0130_WebServer : [ "http://localhost:44521", "http://localhost:44521" ]
		//--------------------------------------------------[ E ] - 공용 서버;


		//--------------------------------------------------[ S ] - 비지니스 시스템 서버;
		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-B2Ker-Dev, ...;
		, SYS0020_APIServer : [ "http://localhost:49320", "http://localhost:49320" ]
			, b2ker_api_server : [ "http://localhost:49320", "http://localhost:49320" ]
		, SYS0020_WebServer : [ "http://localhost:49321", "http://localhost:49321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-BrandPortal-Dev, ...;
		, SYS0030_APIServer : [ "http://localhost:45320", "http://localhost:45320" ]
			, api_server : [ "http://localhost:45320", "http://localhost:45320" ]
		, SYS0030_WebServer : [ "http://localhost:45321", "http://localhost:45321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Dev, ...;
		, SYS0031_APIServer : [ "http://localhost:45420", "http://localhost:45420" ]
			, api_server : [ "http://localhost:45420", "http://localhost:45420" ]
		, SYS0031_WebServer : [ "http://localhost:45421", "http://localhost:45421" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Admin, ...;
		, SYS0034_APIServer : [ "http://localhost:45324", "http://localhost:45324" ]
		, SYS0034_WebServer : [ "http://localhost:45322", "http://localhost:45322" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Tool-SKUMapper, ...;
		, SYS0035_APIServer : [ "http://localhost:45325", "http://localhost:45325" ]
		, SYS0035_WebServer : [ "http://localhost:45326", "http://localhost:45326" ]
		//, SYS0035_APIServer : [ "http://222.239.10.123:45325", "http://222.239.10.123:45325" ]
		//, SYS0035_WebServer : [ "http://222.239.10.123:45326", "http://222.239.10.123:45326" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//...;
		, SYS0037_APIServer : [ "http://localhost:45528", "http://localhost:45528" ]
		, SYS0037_WebServer : [ "http://localhost:45527", "http://localhost:45527" ]
		//, SYS0037_APIServer : [ "http://192.168.1.230:45528", "http://192.168.1.230:45528" ]
		//, SYS0037_WebServer : [ "http://192.168.1.230:45527", "http://192.168.1.230:45527" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-ProductServer-Dev ...;
		, SYS0100_APIServer : [ "http://localhost:44320", "http://localhost:44320" ]
		, SYS0100_WebServer : [ "http://localhost:44321", "http://localhost:44321" ]
		//, SYS0100_APIServer : [ "http://222.239.10.122:44320", "http://222.239.10.122:44320" ]
		//, SYS0100_WebServer : [ "http://222.239.10.122:44321", "http://222.239.10.122:44321" ]
		//, SYS0100_APIServer : [ "http://222.239.10.123:44320", "http://222.239.10.123:44320" ]
		//, SYS0100_WebServer : [ "http://222.239.10.123:44321", "http://222.239.10.123:44321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-B2B-Platform-Admin ...;
		, SYS0210_APIServer : [ "http://localhost:42320", "http://localhost:42320" ]
		, SYS0210_WebServer : [ "http://localhost:42321", "http://localhost:42321" ]
		//, SYS0210_APIServer : [ "http://222.239.10.122:42320", "http://222.239.10.122:42320" ]
		//, SYS0210_WebServer : [ "http://222.239.10.122:42321", "http://222.239.10.122:42321" ]
		//, SYS0210_APIServer : [ "http://222.239.10.123:42320", "http://222.239.10.123:42320" ]
		//, SYS0210_WebServer : [ "http://222.239.10.123:42321", "http://222.239.10.123:42321" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-B2B-Platform-Dev ...;
		, SYS0215_APIServer : [ "http://localhost:42325", "http://localhost:42325" ]
		, SYS0215_WebServer : [ "http://localhost:42326", "http://localhost:42326" ]
		//, SYS0215_APIServer : [ "http://222.239.10.122:42325", "http://222.239.10.122:42325" ]
		//, SYS0215_WebServer : [ "http://222.239.10.122:42326", "http://222.239.10.122:42326" ]
		//, SYS0215_APIServer : [ "http://222.239.10.123:42325", "http://222.239.10.123:42325" ]
		//, SYS0215_WebServer : [ "http://222.239.10.123:42326", "http://222.239.10.123:42326" ]


		//사용하는 곳 목록;
		, SYS0310_APIServer : [ "http://localhost:49780", "http://localhost:49780" ]
		, SYS0310_WebServer : [ "http://localhost:49781", "http://localhost:49781" ]
		//, SYS0310_APIServer : [ "http://dnsproxy.shop:49780", "http://dnsproxy.shop:49780" ]
		//, SYS0310_WebServer : [ "http://dnsproxy.shop:49781", "http://dnsproxy.shop:49781" ]
		//, SYS0310_APIServer : [ "http://222.239.10.122:49780", "http://222.239.10.122:49780" ]
		//, SYS0310_WebServer : [ "http://222.239.10.122:49781", "http://222.239.10.122:49781" ]
		//--------------------------------------------------[ E ] - 비지니스 시스템 서버;


		//--------------------------------------------------[ S ] - Util;
		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Crawler, ...;
		, SYS0032_APIServer : [ "http://localhost:45323", "http://localhost:45323" ]
		//--------------------------------------------------[ E ] - Util;


		//--------------------------------------------------[ S ] - DB Server;
		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-OnSight-Crawler-Storage-MongoDB, ...;
		, SYS0033_APIServer : [ "http://localhost:45520", "http://localhost:45520" ]
		, SYS0033_WebServer : [ "http://localhost:45521", "http://localhost:45521" ]

		//[ 폐기 ] - 사용하는 곳 목록;
		//B2LiNK-China-Crawler-Storage-MongoDB ...;
		, SYS0110_APIServer : [ "http://localhost:43320", "http://localhost:43320" ]
		, SYS0110_WebServer : [ "http://localhost:43321", "http://localhost:43321" ]
		//--------------------------------------------------[ E ] - DB Server;


		//--------------------------------------------------[ S ] - Total.js;
		//Total.js - SuperAdmin - 사용하는 곳 목록;
		, SYS4110_APIServer : [ "http://localhost:40320", "http://localhost:40320" ]
		, SYS4110_WebServer : [ "http://localhost:40320", "http://localhost:40320" ]

		//Total.js - wiki - 사용하는 곳 목록;
		, SYS4111_APIServer : [ "http://localhost:40321", "http://localhost:40321" ]
		, SYS4111_WebServer : [ "http://localhost:40321", "http://localhost:40321" ]

		//Total.js - HelpDesk - 사용하는 곳 목록;
		, SYS4112_APIServer : [ "http://localhost:40322", "http://localhost:40322" ]
		, SYS4112_WebServer : [ "http://localhost:40322", "http://localhost:40322" ]

		//Total.js - Messanger - 사용하는 곳 목록;
		, SYS4113_APIServer : [ "http://localhost:40323", "http://localhost:40323" ]
		, SYS4113_WebServer : [ "http://localhost:40323", "http://localhost:40323" ]

		//Total.js - OpenPlatform - 사용하는 곳 목록;
		, SYS4120_APIServer : [ "http://localhost:40330", "http://localhost:40330" ]
		, SYS4120_WebServer : [ "http://localhost:40330", "http://localhost:40330" ]

		//Total.js - CMS - 사용하는 곳 목록;
		, SYS4130_APIServer : [ "http://localhost:40340", "http://localhost:40340" ]
		, SYS4130_WebServer : [ "http://localhost:40340", "http://localhost:40340" ]

		//Total.js - Eshop - 사용하는 곳 목록;
		, SYS4135_APIServer : [ "http://localhost:40345", "http://localhost:40345" ]
		, SYS4135_WebServer : [ "http://localhost:40345", "http://localhost:40345" ]
		//--------------------------------------------------[ E ] - Total.js;
	};

	var io, iLen;
	for( var s in _server )
	{
		io = _server[ s ];
		iLen = io.length;
		_idxMaxCount[ s ] = iLen;
		_idx[ s ] = SUtilMath.random( 0, iLen, 0 );
	}

	/**
	 * @function
	 * @param {String} nm_server
	 * @return {String} url
	 */
	window.b2link.url.getServerURLByServers = function( nm_server )
	{
		if( !_server[ nm_server ] ) debugger;//없는 서버 이름이 들어옴;

		var r;

		if( _idxMaxCount[ nm_server ] > _idx[ nm_server ] )
		{
			r = _server[ nm_server ][ _idx[ nm_server ] ];
			++_idx[ nm_server ];
		}
		else
		{
			_idx[ nm_server ] = 0;
			r = _server[ nm_server ][ _idx[ nm_server ] ];
		}

		return r;
	};

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * HTML에 존재하는 <script>를 가져와서 로딩한다.
 * @function
 * @param {HTMLElement} t element
 */
window.b2link.util.importJSsFromScriptElement = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.util.importJSsFromScriptElement():void----------" );

	var f0 = window.b2link.util.importJS;
	var a = t.getElementsByTagName( "script" );
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		try{ f0( a[ i ].src ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link.util.importJSsFromScriptElement Error : " + e );
			debugger;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.util.importJSsFromScriptElement():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * HTML에 존재하는 <script>를 가져와서 로딩한다.
 * @function
 * @param {HTMLElement} t element
 */
window.b2link.util.importJSsFromScriptElement__Reuse = function( t )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.util.importJSsFromScriptElement__Reuse():void----------" );

	var f0 = window.b2link.util.importJS__Reuse;
	var a = t.getElementsByTagName( "script" );
	var i=0, iLen=a.length;
	for( ; i<iLen; ++i )
	{
		try{ f0( a[ i ].src ); }
		catch( e )
		{
			window.TtwLog.error( "window.b2link.util.importJSsFromScriptElement__Reuse Error : " + e );
			debugger;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.util.importJSsFromScriptElement__Reuse():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Javascript의 자료타입 int를 Validation 한다.
 * @function
 * @param {uint} p
 * @return {Boolean}
 */
window.b2link.validation_classType.int = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.int():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.int():{Boolean}----------" );

	//if( "number" == typeof( p ) )
	if( window.b2link.validation_classType.number( p ) )
		if( -1 == p.toString().indexOf( "." ) )
			return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Javascript의 자료타입 uint를 Validation 한다.
 * @function
 * @param {uint} p
 * @return {Boolean}
 */
window.b2link.validation_classType.uint = function( p )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_classType.uint():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_classType.uint():{Boolean}----------" );

	//if( "number" == typeof( p ) )
	if( window.b2link.validation_classType.number( p ) )
		if( -1 < p )
			if( -1 == p.toString().indexOf( "." ) )
				return true;
	return false;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Date InputElemehts Object Validation
 * @function
 * @param {Object} { y : 2017, m : 9, d : 10 }
 * @return {Boolean}
 */
window.b2link.validation_date.dateObject__YMD = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_date.dateObject__YMD():{Boolean}----------" );

	var f = window.b2link_ui.message.error ? window.b2link_ui.message.error : window.TtwLog.error;

	if( 2015 < d.y && 2017 < d.y ){ f( "Year is not valid." ); return 0; }
	if( 0 < d.m && 13 > d.m){ f( "Month is not valid." ); return 0; }
	if( 0 < d.d && 31 > d.d ){ f( "Day is not valid." ); return 0; }
	//if( -1 < d.ho && 24 > d.ho ){ f( "Hour is not valid." ); return 0; }
	//if( -1 < d.mi && 60 > d.mi ){ f( "Minute is not valid." ); return 0; }
	//if( -1 < d.se && 60 > d.se ){ f( "Seconds is not valid." ); return 0; }
	//if( -1 < d.mil && 60 > d.mil ){ f( "Miliseconds is not valid." ); return 0; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_date.dateObject__YMD():{Boolean}----------return 1;" );
	return 1;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Date InputElemehts Object Validation
 * @function
 * @param {Object} { y : 2017, m : 9, d : 10, ho : 17, mi : 18, se 19 }
 * @return {Boolean}
 */
window.b2link.validation_date.dateObject__YMDHoMiSe = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_date.dateObject__YMDHoMiSe():{Boolean}----------" );

	var f = window.b2link_ui.message.error ? window.b2link_ui.message.error : window.TtwLog.error;

	if( 2015 > d.y || 2017 < d.y ){ f( "Year is not valid." ); return 0; }
	if( 0 > d.m || 12 < d.m){ f( "Month is not valid." ); return 0; }
	if( 0 > d.d && 31 < d.d ){ f( "Day is not valid." ); return 0; }
	if( 0 > d.ho && 24 < d.ho ){ f( "Hour is not valid." ); return 0; }
	if( 0 > d.mi && 59 < d.mi ){ f( "Minute is not valid." ); return 0; }
	if( 0 > d.se && 59 < d.se ){ f( "Seconds is not valid." ); return 0; }
	//if( 0 > d.mil && 59 > d.mil ){ f( "Miliseconds is not valid." ); return 0; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_date.dateObject__YMDHoMiSe():{Boolean}----------return 1;" );
	return 1;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * MAC Address Validation
 * @function
 * @param {String} d EE-B6-A6-0E-C4-46
 * @return {Boolean}
 */
window.b2link.validation_input.addr_mac = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.addr_mac():{Boolean}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.addr_mac():{Boolean}----------" );

	if( 6 == d.split( "-" ).length ) return 1;
	return 0;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.exchange_rate = function( v, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_input.exchange_rate():{Object}----------" );

	m = m || "환율";

	var r = { r : 1, m : "" };
	var n = parseFloat( v );
	if( isNaN( n ) ){ r.r = 0; r.m = m + " 미입력"; return r; }
	else if( 0 > n ){ r.r = 0; r.m = m + " 오입력"; return r; }

	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_input.exchange_rate():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.id_currency = function( v, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_input.exchange_rate():{Object}----------" );

	m = m || "통화";
	
	var r = { r : 1, m : "" };
	
	if( !v ){ r.r = 0; r.m = m + " 미입력"; return r; }

	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_input.exchange_rate():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.notInputed = function( v, m )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_input.notInputed():{Object}----------" );

	m = m || "";

	var r = { r : 1, m : "" };

	if( !v ){ r.r = 0; r.m = m + " 미입력"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_input.notInputed():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.price = function( v, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_input.price():{Object}----------" );

	m = m || "금액";
	
	var r = { r : 1, m : "" };
	var n = parseFloat( v );
	if( isNaN( n ) ){ r.r = 0; r.m = m + " 미입력"; return r; }

	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_input.price():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} v
 * @param {String} m
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_input.quantity = function( v, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_input.quantity():{Object}----------" );

	m = m || "수량";
	
	var r = { r : 1, m : "" };
	var n = parseInt( v );
	if( isNaN( n ) ){ r.r = 0; r.m = m + " 미입력"; return r; }
	if( 0 > n ){ r.r = 0; r.m = m + "이 음수가 입력됨"; return r; }

	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_input.quantity():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.country = function( t, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_select.country():{Object}----------" );

	m = m || "국가";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_select.country():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.currency = function( t, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_select.currency():{Object}----------" );

	m = m || "통화";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_select.currency():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.delivery_type = function( t, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_select.delivery_type():{Object}----------" );

	m = m || "배송방식";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_select.delivery_type():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.notSelected = function( t, m )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.b2link.validation_select.notSelected():{Object}----------" );

	m = m || "선택항목 ";

	var r = { r : 1, m : "" };

	if( 0 >= t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//window.TtwLog.timeStamp( "---- [ E ] - window.b2link.validation_select.notSelected():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.tax_bill = function( t, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_select.trade_terms():{Object}----------" );

	m = m || "세금계산서 발급여부";

	var r = { r : 1, m : "" };

	if( 0 > t.selectedIndex  ){ r.r = 0; r.m = m + " 미선택"; return r; }
	if( 2 < t.selectedIndex ){ r.r = 0; r.m = m + " - 잘못된 값을 선택"; return r; }
	
	

	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_select.tax_bill():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.trade_disposal = function( t, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_select.trade_terms():{Object}----------" );

	m = m || "지급조건";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_select.trade_disposal():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {HTMLElement} t <select>
 * @return {Object} { r : {Boolean}, m : {String} } r - result, m - message
 */
window.b2link.validation_select.trade_terms = function( t, m )
{
	//window.RayLog.timeStamp( "---- [ S ] - window.b2link.validation_select.trade_terms():{Object}----------" );

	m = m || "거래조건";

	var r = { r : 1, m : "" };

	if( !t.selectedIndex ){ r.r = 0; r.m = m + " 미선택"; return r; }

	//window.RayLog.timeStamp( "---- [ E ] - window.b2link.validation_select.trade_terms():{Object}----------" );
	return r;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {Object} d
 * <code>
	{
		"host" : ""
		, "port" : NaN

		, "protocol" : null

		, "evt_open" : function( ?? ){ console.log( "Open" ); debugger; arguments; }
		, "evt_close" : function( ?? ){ console.log( "Close" ); debugger; arguments; }
		, "evt_error" : function( ?? ){ console.log( "Error" ); debugger; arguments; }
		, "evt_message" : function( message ){ console.log( "Server Message : ", message ); debugger; arguments; }
	}
 * </code>
 * @return {WebSocket} global.REQUIRES.ws
 *
 * @example
 * <code>
	global.ws0 = global.b2link.websocket_client.connect({
		"host" : "localhost"
		, "port" : 42322

		, "protocol" : null

		, "evt_close" : function( code, data ){ console.log( "Close" ); debugger; arguments; }
		, "evt_error" : function(){ console.log( "Error" ); debugger; arguments; }
		, "evt_message" : function( message ){ console.log( "Server Message : ", message ); debugger; arguments; }
		, "evt_open" : function(){ console.log( "Open" ); debugger; arguments; }
	});
 * </code>
 */
global.b2link.websocket_client.connect = function( d )
{
	global.TtwLog.timeStamp( "---- [ S ] - global.b2link.websocket_client.connect():{WebSocket}----------" );

	var t = new global.REQUIRES.ws( "ws://" + d.host + ":" + d.port );//clientWebSocket;

	var _evt_close  = d.evt_close  ? d.evt_close  : function( code, data ){ console.log( "Close" ); debugger; arguments; };
	var _evt_error  = d.evt_error  ? d.evt_error  : function(){ console.log( "Error" ); debugger; arguments; };
	var _evt_message= d.evt_message? d.evt_message: function( message ){ console.log( "Server Message : ", message ); debugger; arguments; };
	var _evt_open   = d.evt_open   ? d.evt_open   : function(){ console.log( "Open" ); debugger; arguments; };

	t.on( "close"  , _evt_close );
	t.on( "error"  , _evt_error );
	t.on( "message", _evt_message );
	t.on( "open"   , _evt_open );

	//Test Code;
	//setInterval( function(){ t.send( "끼룩끼룩 " + SUtilMath.random( 0, 10000 ) + "번째" ); }, 500 );

	global.TtwLog.timeStamp( "---- [ E ] - global.b2link.websocket_client.connect():{WebSocket}----------return t;" );
	return t;
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.service_base;

window.service_base = window.service_base || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_base;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.service_base.common;

window.service_base.common = window.service_base.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_base.common;

//--------------------------------------------------[ S ] - SYNC;
/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 Object로 만들어준다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var n=new Date;window.service_base.common._fn_req=function(e,i){e+=window.b2link.session.getSession__URI(),++n,e+="&nCached="+n,window.service_base.common._fn_res(SUtilXMLHttpReqGet.reqSyncReturn(e,null).responseText,i)}}();

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 locale label 규칙에 의거해서 자동 치환후에 Object로 만들어준다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
!function(){var e=new Date;window.service_base.common._fn_req__locale_label=function(n,l,o){n+=window.b2link.session.getSession__URI(),++e,n+="&nCached="+e,window.service_base.common._fn_res__locale_label(SUtilXMLHttpReqGet.reqSyncReturn(n,null).responseText,l,o)}}();

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열 전달한다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var n=new Date;window.service_base.common._fn_req_for_string_result=function(e,i){e+=window.b2link.session.getSession__URI(),++n,e+="&nCached="+n,window.service_base.common._fn_res_for_string_result(SUtilXMLHttpReqGet.reqSyncReturn(e,null).responseText,i)}}();

/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 locale label 규칙에 의거해서 자동 치환후에 문자열을 전달한다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
!function(){var e=new Date;window.service_base.common._fn_req_for_string_result__locale_label=function(n,_,l){n+=window.b2link.session.getSession__URI(),++e,n+="&nCached="+e,window.service_base.common._fn_res_for_string_result__locale_label(SUtilXMLHttpReqGet.reqSyncReturn(n,null).responseText,_,l)}}();

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * POST 방식의 XMLHTTPRequest 요청
 *
 * @function
 * @param {String} url Server URL
 * @param {Object} params POST 요청시 전송할 Parameters
 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var n=new Date;window.service_base.common._fn_req_POST=function(e,i,s,o){var r=window.b2link.session.getSession();i.Expires=r.Expires,i.mid=r.mid,i.sid=r.sid,++n,e+="nCached="+n,window.service_base.common._fn_res_POST(SUtilXMLHttpReqPost.reqSync__paramsObj(e,i,s).responseText,o)}}();

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * POST 방식의 XMLHTTPRequest 요청
 *
 * @function
 * @param {String} url Server URL
 * @param {ArrayBuffer} params POST 요청시 전송할 Parameters
 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var n=new Date;window.service_base.common._fn_req_POST__ArrayBuffer=function(e,r,_,i){e+=window.b2link.session.getSession__URI(),++n,e+="nCached="+n;var o=SUtilXMLHttpReqPost.reqSyncReturn__paramsStr(e,r,_);window.b2link_service.common._fn_res_POST(o.responseText,i),o=null}}();

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * POST 방식의 XMLHTTPRequest 요청 XMLHTTPRequest 객체를 재사용한다.
 *
 * @function
 * @param {XMLHTTPRequest} xhr
 * @param {String} url Server URL
 * @param {ArrayBuffer} params POST 요청시 전송할 Parameters
 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var e=new Date;window.service_base.common._fn_req_POST__ArrayBuffer__Ref=function(n,_,i,o,r){_+=window.b2link.session.getSession__URI(),++e,_+="nCached="+e,SUtilXMLHttpReqPost.reqSyncReturn__paramsStr__Ref(n,_,i,o),window.b2link_service.common._fn_res_POST(n.responseText,r)}}();

/**
 * 특별히 사용할 용도 외엔 사용 금지 입니다.
 *
 * POST 방식의 XMLHTTPRequest 요청
 *
 * @function
 * @param {String} url Server URL
 * @param {Object} params POST 요청시 전송할 Parameters
 * @param {Object} requestHeaders POST 요청시 작성될 requestHeaders
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var e=new Date;window.service_base.common._fn_req_POST__Str=function(n,i,s,r){var t=window.b2link.session.getSession();i.Expires=t.Expires,i.mid=t.mid,i.sid=t.sid,++e,n+="nCached="+e;var o=STtwUtilXMLHttpReqPost.reqSyncReturn__paramsStr(n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),JSON.stringify(i).replace(/\\"/gi,'"'),{"Content-type":"text/plain"}).responseText;window.service_base.common._fn_res_POST(o,r)}}();
//--------------------------------------------------[ E ] - SYNC;





//--------------------------------------------------[ S ] - ASYNC;
/**
 * Request후 Response시 서버로부터 전달받은 result 문자열을 Object로 만들어준다.
 *
 * @function
 * @param {String} url Server URL
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Function} cbError Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
!function(){var e=new Date;window.service_base.common._fn_reqAsync=function(n,o,i){n+=window.b2link_url_member.member_session.getParam(window.b2link.session.getSession()),++e,n+="&nCached="+e,STtwUtilXMLHttpReqGet.req(n,{onerror:function(e){i&&i(e.target.responseText)},onloadend:function(e){window.service_base.common._fn_res(e.target.responseText,o)}})}}();
//--------------------------------------------------[ E ] - ASYNC;

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Database Name과 Collection Name를 체크한다.
 *
 * @function
 * @param {String} nm_db
 * @param {String} nm_col
 */
window.service_base.common._checkDBColNames = function( nm_db, nm_col )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._checkDBColNames():void----------" );

	if( !nm_db )
	{
		window.b2link_ui.message.error( "nm_db : " + nm_db );
		window.TtwLog.error( "nm_db : " + nm_db );
		debugger;
	}

	if( !nm_col )
	{
		window.b2link_ui.message.error( "nm_col : " + nm_col );
		window.TtwLog.error( "nm_col : " + nm_col );
		debugger;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._checkDBColNames():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 * @param {Object} localeOwner
 */
window.service_base.common._checkSessionAuth__ErrorMessage = function( result, cbFunction, localeOwner )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._checkSessionAuth__ErrorMessage():void----------" );

	window.HykLog.error( "시스템 기능 사용 권한 오류" );
	window.HykLog.error( JSON.stringify( result ) );
	window.HykLog.error( "당신은 위 권한이 없습니다. 필요시 공식적인 절차로 관리자에게 요청 바랍니다." );

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._checkSessionAuth__ErrorMessage():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} req
 * @param {Function} cbFunction function( data ){};
 */
window.service_base.common._fn_authRes = function( result, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._fn_authRes():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_authRes - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	//Response 결과 코드가 18(window.service_base.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
	if( window.service_base.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == r.r )
	{
		window.service_base.common._checkSessionAuth__ErrorMessage( r );
		window.b2link_ui.common._checkSessionAuth__ErrorMessage( r );
		return;
	}
	//--------------------------------------------------;

	try{ cbFunction( r ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_authRes - cbFunction( r ); -  Error : " + e );
		debugger;
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._fn_authRes():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
window.service_base.common._fn_authRes_for_string_result = function( result, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._fn_authRes_for_string_result():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_authRes_for_string_result - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	//Response 결과 코드가 18(window.service_base.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
	if( window.service_base.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == r.r )
	{
		window.service_base.common._checkSessionAuth__ErrorMessage( r );
		window.b2link_ui.common._checkSessionAuth__ErrorMessage( r );
		return;
	}
	//--------------------------------------------------;

	try{ cbFunction( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_authRes_for_string_result - cbFunction( result ); -  Error : " + e );
		debugger;
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._fn_authRes_for_string_result():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
window.service_base.common._fn_authRes_for_string_result__locale_label = function( result, cbFunction, localeOwner )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._fn_authRes_for_string_result__locale_label():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_authRes_for_string_result__locale_label - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	//Response 결과 코드가 18(window.service_base.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
	if( window.service_base.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == r.r )
	{
		window.service_base.common._checkSessionAuth__ErrorMessage( r );
		window.b2link_ui.common._checkSessionAuth__ErrorMessage( r );
		return;
	}
	//--------------------------------------------------;

	var resStr = window.b2link.string.applyParentheses( result, window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel( localeOwner.__url ) );

	if( resStr )
	{
		try{ cbFunction( resStr ); }
		catch( e )
		{
			window.TtwLog.error( "window.service_base.common._fn_authRes_for_string_result__locale_label - cbFunction( resStr ); -  Error : " + e );
			debugger;
		}
	}
	else
	{
		try{ cbFunction( result ); }
		catch( e )
		{
			window.TtwLog.error( "window.service_base.common._fn_authRes_for_string_result__locale_label - cbFunction( result ); -  Error : " + e );
			debugger;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._fn_authRes_for_string_result__locale_label():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제 function( data ){};
 */
window.service_base.common._fn_authRes_POST = function( result, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._fn_authRes_POST():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_authRes_POST - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	//Response 결과 코드가 18(window.service_base.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
	if( window.service_base.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == r.r )
	{
		window.service_base.common._checkSessionAuth__ErrorMessage( r );
		window.b2link_ui.common._checkSessionAuth__ErrorMessage( r );
		return;
	}
	//--------------------------------------------------;

	try{ cbFunction( r ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_authRes_POST - cbFunction( r ); -  Error : " + e );
		debugger;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._fn_authRes_POST():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 * @param {Object} localeOwner
 */
window.service_base.common._fn_authRes__locale_label = function( result, cbFunction, localeOwner )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._fn_authRes__locale_label():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	//--------------------------------------------------;
	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_authRes__locale_label - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	//Response 결과 코드가 18(window.service_base.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED) 권한 인증 실패;
	if( window.service_base.STATIC.CONST.RESPONSE_CODE.AUTHENTICATION_FAILED == r.r )
	{
		window.service_base.common._checkSessionAuth__ErrorMessage( r );
		window.b2link_ui.common._checkSessionAuth__ErrorMessage( r );
		return;
	}
	//--------------------------------------------------;

	var resultString;
	var resultObj;

	try
	{
		resultString = window.b2link.string.applyParentheses(
			result
			, window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel( localeOwner.__url )
		);
	}
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_authRes__locale_label - resultString = window.b2link.string.applyParentheses( -  Error : " + e );
		//debugger;
	}

	try{ resultObj = JSON.parse( resultString ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_authRes__locale_label - resultObj = JSON.parse( resultString ); -  Error : " + e );
		//debugger;
	}

	if( resultObj )
	{
		try{ cbFunction( resultObj ); }
		catch( e )
		{
			window.TtwLog.error( "window.service_base.common._fn_authRes__locale_label - cbFunction( resultObj ); -  Error : " + e );
			debugger;
		}
	}
	else
	{
		try{ cbFunction( JSON.parse( result ) ); }
		catch( e )
		{
			window.TtwLog.error( "window.service_base.common._fn_authRes__locale_label - cbFunction( JSON.parse( result ) ); -  Error : " + e );
			debugger;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._fn_authRes__locale_label():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
window.service_base.common._fn_res = function( result, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._fn_res():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_res - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	try{ cbFunction( r ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_res - cbFunction( r ); -  Error : " + e );
		debugger;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._fn_res():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {String} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
window.service_base.common._fn_res_for_string_result = function( result, cbFunction )
{
	window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._fn_res_for_string_result():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	try{ cbFunction( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_res_for_string_result - cbFunction( result ); -  Error : " + e );
		debugger;
	}

	window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._fn_res_for_string_result():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 * @param {Object} localeOwner 이 함수를 호출한 _this또는 _ 객체(HTMLElement's Controller)를 파라메터로 넣어준다.
 */
window.service_base.common._fn_res_for_string_result__locale_label = function( result, cbFunction, localeOwner )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._fn_res_for_string_result__locale_label():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	var resStr = window.b2link.string.applyParentheses( result, window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel( localeOwner.__url ) );

	if( resStr )
	{
		try{ cbFunction( resStr ); }
		catch( e )
		{
			window.TtwLog.error( "window.service_base.common._fn_res_for_string_result__locale_label - cbFunction( resStr ); -  Error : " + e );
			debugger;
		}
	}
	else
	{
		try{ cbFunction( result ); }
		catch( e )
		{
			window.TtwLog.error( "window.service_base.common._fn_res_for_string_result__locale_label - cbFunction( result ); -  Error : " + e );
			debugger;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._fn_res_for_string_result__locale_label():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction Reponse 시에 호출하게 될 callback 함수//작성 예제function( data ){};
 */
window.service_base.common._fn_res_POST = function( result, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._fn_res_POST():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	try{ var r = JSON.parse( result ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_res_POST - var r = JSON.parse( result ); -  Error : " + e );
		debugger;
	}

	try{ cbFunction( r ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_res_POST - cbFunction( r ); -  Error : " + e );
		debugger;
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._fn_res_POST():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 * @param {Object} localeOwner
 */
window.service_base.common._fn_res__locale_label = function( result, cbFunction, localeOwner )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_base.common._fn_res__locale_label():void----------" );

	//Development-Components-UI Service 의 window.ui_spinner 참조;
	//window.ui_spinner.spinkit.hide();

	var resultString;
	var resultObj;

	try
	{
		resultString = window.b2link.string.applyParentheses(
			result
			, window.b2link.ui_resource.reqSync_JSON_HTMLLocaleLabel( localeOwner.__url )
		);
	}
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_res__locale_label - resultString = window.b2link.string.applyParentheses( -  Error : " + e );
		//debugger;
	}

	try{ resultObj = JSON.parse( resultString ); }
	catch( e )
	{
		window.TtwLog.error( "window.service_base.common._fn_res__locale_label - resultObj = JSON.parse( resultString ); -  Error : " + e );
		//debugger;
	}

	if( resultObj )
	{
		try{ cbFunction( resultObj ); }
		catch( e )
		{
			window.TtwLog.error( "window.service_base.common._fn_res__locale_label - cbFunction( resultObj ); -  Error : " + e );
			debugger;
		}
	}
	else
	{
		try{ cbFunction( JSON.parse( result ) ); }
		catch( e )
		{
			window.TtwLog.error( "window.service_base.common._fn_res__locale_label - cbFunction( JSON.parse( result ) ); -  Error : " + e );
			debugger;
		}
	}

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_base.common._fn_res__locale_label():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.service_common_member

window.service_common_member = window.service_common_member || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_common_member

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.service_common_member.public;

window.service_common_member.public = window.service_common_member.public || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_common_member.public;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	//var _fn_res = function( result, cbFunction ){};

	/**
	 * Signup 요청 함수
	 * @function
	 * @param {Object} d
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_common_member.public.sign_up = function( d, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_common_member.public.sign_up():void----------" );

		window.b2link_service.common._fn_req(
			_t.PROXY
				+ window.b2link.url.getServerURL_APIServer_SCODE( "SYS0012" ) + "/member/public/sign_up?"
				+ window.service_common_member.public.sign_up.params( d )
			, cbFunction
		);

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_common_member.public.sign_up():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Signup 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_common_member.public.sign_up.params = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_common_member.public.sign_up.params():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.service_common_member.public.sign_up.params():{String}----------" );

	return "data=" + JSON.stringify( d );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * Signup 요청 함수
 * @function
 * @param {Object} d
 * @param {Function} cbFunction function( data ){};
 */
window.service_common_member.public.sign_up__checkOverlap = function( d, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_common_member.public.sign_up__checkOverlap():void----------" );

	var _url = window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURL_APIServer_SCODE( "SYS0012" ) + "/member/public/sign_up__checkOverlap?";

	window.b2link_service.common._fn_req( _url + window.service_common_member.public.sign_up__checkOverlap.params( d ), cbFunction );

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_common_member.public.sign_up__checkOverlap():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Signup 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_common_member.public.sign_up__checkOverlap.params = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_common_member.public.sign_up__checkOverlap.params():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.service_common_member.public.sign_up__checkOverlap.params():{String}----------" );

	return "data=" + JSON.stringify( d );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.service_member

window.service_member = window.service_member || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_member

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.service_member.admin;

window.service_member.admin = window.service_member.admin || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_member.admin;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.service_member.common;

window.service_member.common = window.service_member.common || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_member.common;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.service_member.public;

window.service_member.public = window.service_member.public || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_member.public;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.service_member.session;

window.service_member.session = window.service_member.session || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_member.session;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.service_member.update;

window.service_member.update = window.service_member.update || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.service_member.update;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	var _fn_res = function( result, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_in.res():void----------" );
		//window.TtwLog.timeStamp( "typeof result : " + typeof( result ) );
		//window.TtwLog.timeStamp( result );


		//----------[ S ] - 서버의 Response value가 {uint} 타입의 ErrorCode나 {Boolean} 값만 넘어올때의 실패 체크;
		//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
		var r = window.b2link.response.getResultStatus( result );
		if( 0 == r || "destroySession" == r )//0을 false를 의미한다.;
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, result );
			return;
		}
		else if( 1 == r )//1이 나올수가 없다;
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, result );
			return;
		}
		//----------[ E ] - 서버의 Response value가 {uint} 타입의 ErrorCode나 {Boolean} 값만 넘어올때의 실패 체크;


		//----------[ S ] - 서버의 Response value가 {JSONString}이 넘어올때의 실패 체크;
		var rO;//result Object;
		try{ rO = JSON.parse( result ); }
		catch( er )
		{
			window.b2link_ui.message.message( "알수 없는 에러 발생" );
			debugger;
			return;
		}

		//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
		r = window.b2link.response.getResultStatus( rO );
		if( 0 == r || "destroySession" == r )//0 : false;
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, rO );
			return;
		}
		/*/
		else if( 1 == r )//1 : true;
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, rO );
			return;
		}
		//*/
		//----------[ E ] - 서버의 Response value가 {JSONString}이 넘어올때의 실패 체크;


		//window.TtwLog.timeStamp( "typeof r : " + typeof( r ) );
		//Session 정보를 브라우저에 설정한다.;
		window.b2link.session.setSession( r );
		cbFunction( r );

		window.b2link_ui.message.message( "Sign In Success" );
		window.b2link.event.dispatchCE__SIGN_IN_SUCCESS( window, null );

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_in.res():void----------" );
	};

	/**
	 * Signin 요청 함수
	 * @function
	 * @param {Object} d signin data { "mid" : "", "mpw" : "" }
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.common.sign_in = function( d, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_in():void----------" );

		_fn_res(
			SUtilXMLHttpReqGet.reqSyncReturn(
				//window.b2link.url.getServerURLByDB( "member" )
				window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" )
				+ "/member/common/sign_in?"
				//+ "member__SYS0030/common/sign_in?";
				+ window.service_member.common.sign_in.params( d ), null
			).responseText
			, cbFunction
		);

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_in():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Signin 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.common.sign_in.params = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_in.params():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_in.params():{String}----------" );
	return "mid=" + d.mid
		+ "&mpw=" + d.mpw
		//+ "&SCODE=" + window.b2link.STATIC.CONFIG.URL.SCODE
		//+ "&d_ex=" + new Date()
		+ "&date_cache=" + new Date();
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	var _fn_res = function( result, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_in__multi.res():void----------" );
		//window.TtwLog.timeStamp( "typeof result : " + typeof( result ) );
		//window.TtwLog.timeStamp( result );


		//----------[ S ] - 서버의 Response value가 {uint} 타입의 ErrorCode나 {Boolean} 값만 넘어올때의 실패 체크;
		//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
		var r = window.b2link.response.getResultStatus( result );
		if( 0 == r || "destroySession" == r )//0을 false를 의미한다.;
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, result );
			return;
		}
		else if( 1 == r )//1이 나올수가 없다;
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, result );
			return;
		}
		//----------[ E ] - 서버의 Response value가 {uint} 타입의 ErrorCode나 {Boolean} 값만 넘어올때의 실패 체크;


		//----------[ S ] - 서버의 Response value가 {JSONString}이 넘어올때의 실패 체크;
		var rO;//result Object;
		try{ rO = JSON.parse( result ); }
		catch( er )
		{
			window.b2link_ui.message.message( "알수 없는 에러 발생" );
			debugger;
			return;
		}

		//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
		r = window.b2link.response.getResultStatus( rO );
		if( 0 == r || "destroySession" == r )//0 : false;
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, rO );
			return;
		}
		/*/
		else if( 1 == r )//1 : true;
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, rO );
			return;
		}
		//*/
		//----------[ E ] - 서버의 Response value가 {JSONString}이 넘어올때의 실패 체크;


		//window.TtwLog.timeStamp( "typeof r : " + typeof( r ) );
		//Session 정보를 브라우저에 설정한다.;
		window.b2link.session.setSession( r );
		cbFunction( r );

		window.b2link_ui.message.message( "Sign In Success" );
		window.b2link.event.dispatchCE__SIGN_IN_SUCCESS( window, null );

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_in__multi.res():void----------" );
	};

	/**
	 * Signin 요청 함수
	 * @function
	 * @param {Object} d signin data { "mid" : "", "mpw" : "" }
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.common.sign_in__multi = function( d, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_in__multi():void----------" );

		_fn_res(
			SUtilXMLHttpReqGet.reqSyncReturn(
				//window.b2link.url.getServerURLByDB( "member" )
				window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" )
				+ "/member/common/sign_in__multi?"
				//+ "member__SYS0030/common/sign_in__multi?";
				+ window.service_member.common.sign_in.params( d ), null
			).responseText
			, cbFunction
		);

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_in():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	var _fn_res = function( result, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_in__single.res():void----------" );
		//window.TtwLog.timeStamp( "typeof result : " + typeof( result ) );
		//window.TtwLog.timeStamp( result );


		//----------[ S ] - 서버의 Response value가 {uint} 타입의 ErrorCode나 {Boolean} 값만 넘어올때의 실패 체크;
		//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
		var r = window.b2link.response.getResultStatus( result );
		if( 0 == r || "destroySession" == r )//0을 false를 의미한다.;
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, result );
			return;
		}
		else if( 1 == r )//1이 나올수가 없다;
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, result );
			return;
		}
		//----------[ E ] - 서버의 Response value가 {uint} 타입의 ErrorCode나 {Boolean} 값만 넘어올때의 실패 체크;


		//----------[ S ] - 서버의 Response value가 {JSONString}이 넘어올때의 실패 체크;
		var rO;//result Object;
		try{ rO = JSON.parse( result ); }
		catch( er )
		{
			window.b2link_ui.message.message( "알수 없는 에러 발생" );
			debugger;
			return;
		}

		//Request후 Response에서 받아온 결과 데이터의 Boolean Status를 확인하는데 사용한다.;
		r = window.b2link.response.getResultStatus( rO );
		if( 0 == r || "destroySession" == r )//0 : false;
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, rO );
			return;
		}
		/*/
		else if( 1 == r )//1 : true;
		{
			window.b2link.session.removeSession();window.b2link.log.error__Signin_failure();
			window.b2link.event.dispatchCE__SIGN_IN_FAILURE( window, rO );
			return;
		}
		//*/
		//----------[ E ] - 서버의 Response value가 {JSONString}이 넘어올때의 실패 체크;


		//window.TtwLog.timeStamp( "typeof r : " + typeof( r ) );
		//Session 정보를 브라우저에 설정한다.;
		window.b2link.session.setSession( r );
		cbFunction( r );

		window.b2link_ui.message.message( "Sign In Success" );
		window.b2link.event.dispatchCE__SIGN_IN_SUCCESS( window, null );

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_in__single.res():void----------" );
	};

	/**
	 * Signin 요청 함수
	 * @function
	 * @param {Object} d signin data { "mid" : "", "mpw" : "" }
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.common.sign_in__single = function( d, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_in__single():void----------" );

		_fn_res(
			SUtilXMLHttpReqGet.reqSyncReturn(
				//window.b2link.url.getServerURLByDB( "member" )
				window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" )
				+ "/member/common/sign_in__single?"
				//+ "member__SYS0030/common/sign_in__single?";
				+ window.service_member.common.sign_in.params( d ), null
			).responseText
			, cbFunction
		);

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_in__single():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	var _fn_res = function( result, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_out.res():void----------" );
		//window.TtwLog.timeStamp( "typeof result : " + typeof( result ) );
		//window.TtwLog.timeStamp( result );

		var r = window.b2link.response.getResultStatus( result );
		if( 0 == r || "destroySession" == r )
		{
			window.b2link.session.removeSession();
			window.b2link.log.error__Signin_failure();

			window.b2link_ui.message.error( "Signout Failure" );
			window.b2link.event.dispatchCE__SIGN_OUT_FAILURE( window, null );
		}
		else if( 1 == r )
		{
			window.b2link.session.removeSession();
			window.b2link.log.error__Signin_failure();

			window.b2link_ui.message.message( "Signout Success" );
			window.b2link.event.dispatchCE__SIGN_OUT_SUCCESS( window, null );
		}

		cbFunction( r );

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_out.res():void----------" );
	};

	/**
	 * Signout 요청 함수
	 * @function
	 * @param {Object} d signin data { "mid" : "", "mpw" : "" }
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.common.sign_out = function( d, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_out():void----------" );

		_fn_res(
			SUtilXMLHttpReqGet.reqSyncReturn(
				//window.b2link.url.getServerURLByDB( "member" )
				window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" )
				+ "/member/common/sign_out?"
				+ window.service_member.common.sign_out.params( d ), null
			).responseText
			, cbFunction
		);

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_out():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Signout 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.common.sign_out.params = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.common.sign_out.params():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.common.sign_out.params():{String}----------" );
	return "mid=" + d.mid
		//+ "&d_ex=" + new Date()
		+ "&sid=" + d.sid
		+ "&date_cache=" + new Date();
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	var _fn_res = function( result, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.public.forgotMid.res():void----------" );
		//window.TtwLog.timeStamp( "typeof result : " + typeof( result ) );
		//window.TtwLog.timeStamp( result );

		var r = window.b2link.response.getResultStatus( result );
		if( 0 == r )
		{
			window.b2link_ui.message.error( "메일 발송 실패" );
			//window.b2link.event.dispatchCE__?????_FAILURE( window, null );
		}
		else if( 1 == r )
		{
			window.b2link_ui.message.message( "메일 발송 성공" );
			//window.b2link.event.dispatchCE__?????_SUCCESS( window, null );
		}

		cbFunction( r, result );

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.public.forgotMid.res():void----------" );
	};

	/**
	 * Forgot Password 요청 함수
	 * @function
	 * @param {Object} d signin data { "mid" : "", "mpw" : "" }
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.public.forgotMid = function( d, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.public.forgotMid():void----------" );

		_fn_res(
			SUtilXMLHttpReqGet.reqSyncReturn(
				window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" )
				+ "/member/public/forgotMid?"
				+ window.service_member.public.forgotMid.params( d ), null
			).responseText
			, cbFunction
		);

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.public.forgotMid():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Forgot Password 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.public.forgotMid.params = function( d )
{
	//window.HykLog.timeStamp( "---- [ S ] - window.service_member.public.forgotMid.params():{String}----------" );
	//window.HykLog.timeStamp( "---- [ E ] - window.service_member.public.forgotMid.params():{String}----------" );
	return "nm=" + d.nm
		+ "&phone_cell_c=" + d.phone_cell_c
		+ "&phone_cell_a=" + d.phone_cell_a
		+ "&phone_cell_n0=" + d.phone_cell_n0
		+ "&phone_cell_n1=" + d.phone_cell_n1
		+ "&SCODE=" + d.SCODE
		+ "&date_cache=" + new Date();
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	var _fn_res = function( result, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.public.forgotPassword.res():void----------" );
		//window.TtwLog.timeStamp( "typeof result : " + typeof( result ) );
		//window.TtwLog.timeStamp( result );

		var r = window.b2link.response.getResultStatus( result );
		if( 0 == r )
		{
			window.b2link_ui.message.error( "인증 메일 발송 실패" );
			//window.b2link.event.dispatchCE__?????_FAILURE( window, null );
		}
		else if( 1 == r )
		{
			window.b2link_ui.message.message( "인증 메일 발송 성공" );
			//window.b2link.event.dispatchCE__?????_SUCCESS( window, null );
		}

		cbFunction( r );

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.public.forgotPassword.res():void----------" );
	};

	/**
	 * Forgot Password 요청 함수
	 * @function
	 * @param {Object} d signin data { "mid" : "", "mpw" : "" }
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.public.forgotPassword = function( d, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.public.forgotPassword():void----------" );

		_fn_res(
			SUtilXMLHttpReqGet.reqSyncReturn(
				window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" )
				+ "/member/public/forgotPassword?"
				+ window.service_member.public.forgotPassword.params( d ), null
			).responseText
			, cbFunction
		);

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.public.forgotPassword():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Forgot Password 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.public.forgotPassword.params = function( d )
{
	//window.HykLog.timeStamp( "---- [ S ] - window.service_member.public.forgotPassword.params():{String}----------" );
	//window.HykLog.timeStamp( "---- [ E ] - window.service_member.public.forgotPassword.params():{String}----------" );
	return "mid=" + d.mid
		//+ "&d_ex=" + new Date()
		+ "&nm=" + d.nm
		+ "&SCODE=" + d.SCODE
		+ "&date_cache=" + new Date();
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	//var _fn_res = function( result, cbFunction ){};

	/**
	 * Signup 요청 함수
	 * @function
	 * @param {Object} d
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.public.sign_up = function( d, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.public.sign_up():void----------" );

		window.b2link_service.common._fn_req(
			_t.PROXY
				//+ window.b2link.url.getServerURLByDB( "member" ) + "member/public/sign_up?"
				//+ window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" ) + "/member/public/sign_up?"
				//+ window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" ) + "/member/public/sign_up_SYS0010?"
				+ window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" ) + "/member__" + window.b2link.STATIC.CONFIG.URL.SCODE + "/public/sign_up?"
				+ window.service_member.public.sign_up.params( d )
			, cbFunction
		);

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.public.sign_up():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Signup 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.public.sign_up.params = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.public.sign_up.params():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.public.sign_up.params():{String}----------" );

	return "data=" + JSON.stringify( d );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * Signup 요청 함수
 * @function
 * @param {Object} d
 * @param {Function} cbFunction function( data ){};
 */
window.service_member.public.sign_up__checkOverlap = function( d, cbFunction )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.public.sign_up__checkOverlap():void----------" );

	//var _url = window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURLByDB( "member" ) + "member/public/sign_up__checkOverlap?";
	var _url = window.b2link.STATIC.CONFIG.URL.PROXY + window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" ) + "/member/public/sign_up__checkOverlap?";

	window.b2link_service.common._fn_req( _url + window.service_member.public.sign_up__checkOverlap.params( d ), cbFunction );

	//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.public.sign_up__checkOverlap():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Signup 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.public.sign_up__checkOverlap.params = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.public.sign_up__checkOverlap.params():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.public.sign_up__checkOverlap.params():{String}----------" );

	return "data=" + JSON.stringify( d );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	var _date = new Date();
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	//var _fn_res = function( result, cbFunction ){};

	/**
	 * Signup 요청 함수
	 * @function
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.session.destroy_session = function( cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.session.destroy_session():void----------" );

		//var _url = _t.PROXY + window.b2link.url.getServerURLByDB( "member" ) + "member/session/destroy_session?";
		var _url = _t.PROXY + window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" ) + "/member/session/destroy_session?";

		/*/
		window.b2link.session.removeSession();
		//window.b2link_service.common._fn_req( _url + window.service_member.session.destroy_session.params( window.b2link.session.getSession() ), cbFunction );
		window.b2link_service.common._fn_req( _url, cbFunction );
		/*/
		var url = _url + window.b2link_url_member.member_session.getParam( window.b2link.session.getSession() );
		window.b2link.session.removeSession();

		//20161212_1402 - 수정 - 송선우 - Date 생성을 숫자형태로 변경;
		//url += "&date_cache=" + new Date();
		//++_date;
		//url += "&nCached=" + _date;

		//try{ cbFunction( SUtilXMLHttpReqGet.reqSyncReturn( url, null ).responseText ); }
		try
		{
			SUtilXMLHttpReqGet.req( url, {
				onerror : function( e ){}
				, onloadend : function( e ){ cbFunction( e.target.responseText ); }
			});
		}
		catch( e )
		{
			//debugger;
			window.TtwLog.timeStamp( e );
		}
		//*/

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.session.destroy_session():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Destroy Session
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.session.destroy_session.params = function( d )
{
	//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.session.destroy_session.params():{String}----------" );
	//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.session.destroy_session.params():{String}----------" );

	return "&sid=" + d.sid + "&mid=" + d.mid + "&d_ex=" + d.Expires;
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * Change Password 요청 함수
 * @function
 * @param {Object} d
 * <code>
	{
		mid : ""
		, mpw : ""
		, mpw$new : ""
		, mpw$newConfirm : ""
	}
 * </code>
 * @param {Function} cbFunction function( data ){};
 */
window.service_member.update.changePassword = function( d, cbFunction )
{
	//window.TtwLoog.timeStamp( "---- [ S ] - window.service_member.update.changePassword():void----------" );

	if( !window.b2link.session.getSession__sid() ){window.b2link_ui.message.error( "The session ID does not exist." );debugger;return;}

	//var _url = window.b2link.url.getServerURLByDB( "member" ) + "member/update/changePassword?";
	var _url = + window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" ) + "/member/update/changePassword?";

	window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

	//window.TtwLoog.timeStamp( "---- [ E ] - window.service_member.update.changePassword():void----------" );
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	//var _fn_res = function( result, cbFunction ){};

	/**
	 * Signup 요청 함수
	 * @function
	 * @param {Object} d
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.update.get_update_member_info = function( d, cbFunction )
	{
		//window.AlexLog.timeStamp( "---- [ S ] - window.service_member.update.get_update_member_info():void----------" );

		//var _url = _t.PROXY + window.b2link.url.getServerURLByDB( "member" ) + "member/update/get_update_member_info?";
		var _url = _t.PROXY + window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" ) + "/member/update/get_update_member_info?";

		window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

		//window.AlexLog.timeStamp( "---- [ E ] - window.service_member.update.get_update_member_info():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @param {*} result
 * @param {Function} cbFunction function( data ){};
 */
//var _fn_res = function( result, cbFunction ){};

/**
 * update 요청 함수
 * @function
 * @param {Object} d
 * <code>
	{
	}
 * </code>
 * @param {Function} cbFunction function( data ){};
 */
window.service_member.update.update = function( d, cbFunction )
{
	window.AlexLog.timeStamp( "---- [ S ] - window.service_member.update.update():void----------" );

	//var _url = window.b2link.url.getServerURLByDB( "member" ) + "member/update/update?";
	var _url = + window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" ) + "/member/update/update?";

	window.b2link_service.common._fn_req( _url + "&data=" + JSON.stringify( d ), cbFunction );

	window.AlexLog.timeStamp( "---- [ E ] - window.service_member.update.update():void----------" );
};

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

(function(){
	var _t = window.b2link.STATIC.CONFIG.URL;

	/**
	 * @function
	 * @param {*} result
	 * @param {Function} cbFunction function( data ){};
	 */
	var _fn_res = function( result, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.update.updatePassword.res():void----------" );
		//window.TtwLog.timeStamp( "typeof result : " + typeof( result ) );
		//window.TtwLog.timeStamp( result );

		var r = window.b2link.response.getResultStatus( result );
		if( 0 == r )
		{
			window.b2link_ui.message.error( "Update Password Failure" );
			//window.b2link.event.dispatchCE__????_FAILURE( window, null );
		}
		else if( 1 == r )
		{
			window.b2link_ui.message.message( "Update Password Success" );
			//window.b2link.event.dispatchCE__????_SUCCESS( window, null );
		}

		cbFunction( r );

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.update.updatePassword.res():void----------" );
	};

	/**
	 * Update Password 요청 함수
	 * @function
	 * @param {Object} d signin data { "mid" : "", "mpw" : "" }
	 * @param {Function} cbFunction function( data ){};
	 */
	window.service_member.update.updatePassword = function( d, cbFunction )
	{
		//window.TtwLog.timeStamp( "---- [ S ] - window.service_member.update.updatePassword():void----------" );

		_fn_res(
			SUtilXMLHttpReqGet.reqSyncReturn(
				window.b2link.url.getServerURL_APIServer_SCODE( "SYS0010" )
				+ "/member/update/updatePassword?"
				+ window.service_member.update.updatePassword.params( d ), null
			).responseText
			, cbFunction
		);

		//window.TtwLog.timeStamp( "---- [ E ] - window.service_member.update.updatePassword():void----------" );
	};
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * Update Password 요청시 필요한 URL Parameter 생성 함수
 * @function
 * @param {Object} d
 * @return {String}
 */
window.service_member.update.updatePassword.params = function( d )
{
	//window.HykLog.timeStamp( "---- [ S ] - window.service_member.update.updatePassword.params():{String}----------" );
	//window.HykLog.timeStamp( "---- [ E ] - window.service_member.update.updatePassword.params():{String}----------" );
	return "before_mpw=" + d.before_mpw
		//+ "&d_ex=" + new Date()
		+ "&mpw=" + d.mpw
		+ "&_id$member_public=" + d._id$member_public
		+ "&date_cache=" + new Date();
};

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.ui_spinner;

window.ui_spinner = window.ui_spinner || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_spinner;

(function(){
	var _hideList = [];

	/**
	 * @function
	 */
	window.ui_spinner.addHideFunction = function( f ){ _hideList.push( f ); };

	/**
	 * 모든 Spinner API들의 *.hide()를 호출한다.
	 * @function
	 */
	window.ui_spinner.hides = function()
	{
		var a = _hideList;

		var io;
		var i=0, iLen=a.length;
		for( ; i<iLen; ++i )
		{
			io = a[ i ];
			io();
		}
	};
})();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.ui_spinner.div;

window.ui_spinner.div = window.ui_spinner.div || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_spinner.div;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.ui_spinner.img;

window.ui_spinner.img = window.ui_spinner.img || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_spinner.img;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.ui_spinner.spinkit;

window.ui_spinner.spinkit = window.ui_spinner.spinkit || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.ui_spinner.spinkit;

/*/
window.ui_spinner.spinkit.setTime_Hide( 2500 );

var a = [
	"1-rotating-plane"
	, "2-double-bounce"
	, "3-wave"
	, "4-wandering-cubes"
	, "5-pulse"
	, "6-chasing-dots"
	, "7-three-bounce"
	, "8-circle"
	, "9-cube-grid"
	, "10-fading-circle"
	, "11-folding-cube"
];

var p = {
	i : 0
	, iLen : a.length - 1
};

var _fn = function(){

	window.ui_spinner.spinkit.setMode( a[ p.i ] );

	window.ui_spinner.spinkit.show();

	window.ui_spinner.spinkit.hide();

	if( p.i < p.iLen ) ++p.i;
	else p.i = 0;

	setTimeout( _fn, 3000 );
};

setTimeout( _fn, 3000 );

window.ui_spinner.spinkit.hide();
window.ui_spinner.spinkit.show();

window.ui_spinner.spinkit.setMode( "1-rotating-plane" );
window.ui_spinner.spinkit.setMode( "2-double-bounce" );
window.ui_spinner.spinkit.setMode( "3-wave" );
window.ui_spinner.spinkit.setMode( "4-wandering-cubes" );
window.ui_spinner.spinkit.setMode( "5-pulse" );
window.ui_spinner.spinkit.setMode( "6-chasing-dots" );
window.ui_spinner.spinkit.setMode( "7-three-bounce" );
window.ui_spinner.spinkit.setMode( "8-circle" );
window.ui_spinner.spinkit.setMode( "9-cube-grid" );
window.ui_spinner.spinkit.setMode( "10-fading-circle" );
window.ui_spinner.spinkit.setMode( "11-folding-cube" );
//*/
!function(){var i=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),n=window.b2link.xhr.reqSync_String,e=window.b2link.html.createHTMLElement,t=window.ui_spinner.spinkit,o=i+"/ui/Spinner/spinkit/1-rotating-plane.html";t.el=null,t.timeHide=700,t.timeout=-1;

/**
 * CSS3 기반의 Spinner Hide API
 * @singleton
 * @function
 * @param {*} arguments 사용가능한 옵션이 존재한다.
 */
window.ui_spinner.spinkit.hide=function(){var i=window.ui_spinner.spinkit;i.el||(i.el=e(n(o))),window.b2link.common.clearTimeout(i.timeout),i.timeout=window.b2link.common.setTimeout(function(){window.b2link.element.removeChild(window.document.body,i.el),i.el.style.display="none"},i.timeHide)},window.ui_spinner.addHideFunction(window.ui_spinner.spinkit.hide);

/**
 * CSS3 파일 기반의 Spinner Show API
 * @singleton
 * @function
 * @param {*} arguments 사용가능한 옵션이 존재한다.
 */
window.ui_spinner.spinkit.show=function(){var i=window.ui_spinner.spinkit;i.el||(i.el=e(n(o))),window.b2link.common.clearTimeout(i.timeout),i.el.style.display="",window.b2link.element.appendChild(window.document.body,i.el);var t=i.el,l=i.el.children[0];t.style.bottom="0px",t.style.top="0px",window.b2link.element.setPosition_CenterMiddle_FromParent__NMinus(l),t.style.top=l.style.top,t.style.bottom="",l.style.left="0px",l.style.top="0px"};

/**
 * @function
 * @param {HTMLElement} el
 */
window.ui_spinner.spinkit.setElement=function(i){return"DIV"!=i.tagName?void window.b2link_ui.message.error("DIV만 가능"):void(t.el=i)};

/**
 * @function
 * @param {String} mode
 * <code>
	"1-rotating-plane"
	"2-double-bounce"
	"3-wave"
	"4-wandering-cubes"
	"5-pulse"
	"6-chasing-dots"
	"7-three-bounce"
	"8-circle"
	"9-cube-grid"
	"10-fading-circle"
	"11-folding-cube"
 * </code>
 */
window.ui_spinner.spinkit.setMode=function(o){t.el=e(n(i+"/ui/Spinner/spinkit/"+o+".html"))};

/**
 * @function
 * @param {Number} n 1000이 1초
 */
window.ui_spinner.spinkit.setTime_Hide=function(i){t.timeHide=i}
}();

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

window.ui_spinner.div.simple = window.ui_spinner.div.simple || {};

//----------------------------------------------------------------------------------------------------;

(function(){

	var t = window.ui_spinner.div.simple;

		/**
		 * @property {HTMLElement}
		 */
		t.el = null;

		/**
		 * @property {Number}
		 */
		t.time = 700;

		/**
		 * @property {Number}
		 */
		t.timeout = -1;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * GIF 파일 기반의 Spinner Hide API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.div.simple.hide = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.ui_spinner.div.simple.hide():void----------" );

		window.b2link.common.clearTimeout( t.timeout );
		t.timeout = window.b2link.common.setTimeout( function(){
			t.el.style.display = "none";
		}, t.time );

		window.TtwLog.timeStamp( "---- [ E ] - window.ui_spinner.div.simple.hide():void----------" );
	};
	window.ui_spinner.addHideFunction( window.ui_spinner.div.simple.hide );

	/**
	 * GIF 파일 기반의 Spinner Show API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.div.simple.show = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.ui_spinner.div.simple.show():void----------" );

		window.b2link.common.clearTimeout( t.timeout );
		t.el.style.display = "";

		window.TtwLog.timeStamp( "---- [ E ] - window.ui_spinner.div.simple.show():void----------" );
	};

	/**
	 * GIF 파일 기반의 Spinner Show API
	 * @function
	 * @param {HTMLElement} el
	 */
	window.ui_spinner.div.simple.setElement = function( el )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.ui_spinner.div.simple.setElement():void----------" );

		if( "DIV" != el.tagName )
		{
			window.b2link_ui.message.error( "DIV만 가능" );
			return;
		}

		t.el = el;

		window.TtwLog.timeStamp( "---- [ E ] - window.ui_spinner.div.simple.setElement():void----------" );
	};

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

window.ui_spinner.img.simple = window.ui_spinner.img.simple || {};

//----------------------------------------------------------------------------------------------------;

(function(){

	var t = window.ui_spinner.img.simple;

		/**
		 * @property {HTMLElement}
		 */
		t.el = null;

		/**
		 * @property {Number}
		 */
		t.time = 700;

		/**
		 * @property {Number}
		 */
		t.timeout = -1;

	//----------------------------------------------------------------------------------------------------;

	/**
	 * GIF 파일 기반의 Spinner Hide API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.img.simple.hide = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.ui_spinner.img.simple.hide():void----------" );

		window.b2link.common.clearTimeout( t.timeout );
		t.timeout = window.b2link.common.setTimeout( function(){
			t.el.style.display = "none";
		}, t.time );

		window.TtwLog.timeStamp( "---- [ E ] - window.ui_spinner.img.simple.hide():void----------" );
	};
	window.ui_spinner.addHideFunction( window.ui_spinner.img.simple.hide );

	/**
	 * GIF 파일 기반의 Spinner Show API
	 * @singleton
	 * @function
	 * @param {*} arguments 사용가능한 옵션이 존재한다.
	 */
	window.ui_spinner.img.simple.show = function()
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.ui_spinner.img.simple.show():void----------" );

		window.b2link.common.clearTimeout( t.timeout );
		t.el.style.display = "";

		window.TtwLog.timeStamp( "---- [ E ] - window.ui_spinner.img.simple.show():void----------" );
	};

	/**
	 * GIF 파일 기반의 Spinner Show API
	 * @function
	 * @param {HTMLElement} el
	 */
	window.ui_spinner.img.simple.setElement = function( el )
	{
		window.TtwLog.timeStamp( "---- [ S ] - window.ui_spinner.img.simple.setElement():void----------" );

		if( "IMG" != el.tagName )
		{
			window.b2link_ui.message.error( "IMG만 가능" );
			return;
		}

		t.el = el;

		window.TtwLog.timeStamp( "---- [ E ] - window.ui_spinner.img.simple.setElement():void----------" );
	};

})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.zzzzzzzzzz__development__js

window.zzzzzzzzzz__development__js = window.zzzzzzzzzz__development__js || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.zzzzzzzzzz__development__js

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;


//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - window.zzzzzzzzzz__development__js.console;

window.zzzzzzzzzz__development__js.console = window.zzzzzzzzzz__development__js.console || {};

//----------------------------------------------------------------------------------------------------[ E ] - window.zzzzzzzzzz__development__js.console;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------;
//
//
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 */
(function(){
	//--------------------------------------------------[ S ] - Create Console;
	window.HykLog 	= SUtilCommon.create_Console( "김현요" );
	window.NajiLog 	= SUtilCommon.create_Console( "나정훈" );
	window.RayLog 	= SUtilCommon.create_Console( "박종하" );
	window.cparkLog = SUtilCommon.create_Console( "박천수-퇴사" );
	window.Rh2Log 	= SUtilCommon.create_Console( "유선아" );
	//로그 인스턴스 명명 수정하기;
	window.JkLog 	= SUtilCommon.create_Console( "이재경-퇴사" );
	window.JaceLog 	= SUtilCommon.create_Console( "이재현" );//미사용;
	window.JamesLog = SUtilCommon.create_Console( "이호영-퇴사" );
	//window.JkLog 	= SUtilCommon.create_Console( "임선용-퇴사" );
	//window.SaraLog= SUtilCommon.create_Console( "정사라-퇴사" );//미사용;
	window.BenLog 	= SUtilCommon.create_Console( "정병의-퇴사" );
	window.KaiLog 	= SUtilCommon.create_Console( "정재명" );
	window.AlexLog 	= SUtilCommon.create_Console( "한영후-퇴사" );
	window.CSJLog 	= SUtilCommon.create_Console( "최석준" );
	window.TtwLog 	= SUtilCommon.create_Console( "송선우" );
	//--------------------------------------------------[ E ] - Create Console;
})();

//----------------------------------------------------------------------------------------------------;
//
//----------------------------------------------------------------------------------------------------;
