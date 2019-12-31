//----------------------------------------------------------------------------------------------------;
var fileNm = "./js__b2link__SYS0015/smt_ui/apiExplorer/window.smt_ui.apiExplorer.APIExplorer.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 *
 * @example
 * <code>
	var els = window.smt_ui.apiExplorer.APIExplorer();
	var el = els[ 0 ];
	var ec = els[ 1 ];
 * </code>
 */
window.smt_ui.apiExplorer.APIExplorer = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.apiExplorer.APIExplorer():{Array}----------" );

	var id = window.b2link.ui.APPEND_CHILD_TARGET_ELEMENT_ID;

	window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( window.b2link.STATIC.CONST.ROOT_DIV.ID_TOP );

	var p = {
		//url : window.b2link.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/ui/smt_ui/APIExplorer/"
		url : "http://localhost:49323/ui/smt_ui/APIExplorer/"
		//url : "./ui/smt_ui/APIExplorer/"
		, nm : "APIExplorer"
		, key : "SYS0015$smt_ui$apiExplorer$APIExplorer"
	};

	var o = window.smt_ui.addUI__DefaultModalFalse__NCSS( p, arguments[ 0 ] );

	window.b2link.ui.set_APPEND_CHILD_TARGET_ELEMENT( id );

	window.addEventListener( "keyup", function( e ){ if( 120 == e.keyCode ) window.b2link.element.switchShowHide( o[ 0 ] ); }, false, 0, true );

	window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.apiExplorer.APIExplorer():{Array}----------return o;" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;