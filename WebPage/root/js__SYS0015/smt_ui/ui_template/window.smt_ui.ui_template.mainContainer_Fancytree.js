//----------------------------------------------------------------------------------------------------;
var fileNm = "./js__b2link__SYS0015/smt_ui/ui_template/window.smt_ui.ui_template.mainContainer_Fancytree.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 *
 * @example
 * <code>
	var els = window.smt_ui.ui_template.mainContainer_Fancytree();
	var el = els[ 0 ];
	var ec = els[ 1 ];
 * </code>
 */
window.smt_ui.ui_template.mainContainer_Fancytree = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.smt_ui.ui_template.mainContainer_Fancytree():{Array}----------" );

	var p = {
		//url : window.b2link.url.getServerURL_WebServer_Self() + "/ui/smt_ui/ui_template/mainContainer/"
		url : "./ui/smt_ui/ui_template/mainContainer/"
		, nm : "mainContainer-Fancytree"
		, key : "SYS0015$smt_ui$ui_template$main_container-Fancytree"
	};

	var o = window.smt_ui.addUI__DefaultModalFalse__NCSS( p, arguments[ 0 ] );

	window.TtwLog.timeStamp( "---- [ E ] - window.smt_ui.ui_template.mainContainer_Fancytree():{Array}----------return o;" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;