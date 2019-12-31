//----------------------------------------------------------------------------------------------------;
var fileNm = "./js__b2link__SYS0015/jq_ui/tree/window.jq_ui.tree.fancytree__default.js";
if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

/**
 * @function
 * @return {Array} [ {HTMLElement}, {HTMLElementController} ]
 *
 * @example
 * <code>
	var els = window.jq_ui.tree.fancytree__default();
	var el = els[ 0 ];
	var ec = els[ 1 ];
 * </code>
 */
window.jq_ui.tree.fancytree__default = function()
{
	window.TtwLog.timeStamp( "---- [ S ] - window.jq_ui.tree.fancytree__default():{Array}----------" );

	var p = {
		//url : window.b2link.url.getServerURL_WebServer_Self() + "/ui/jq_ui/tree/fancytree__default/"
		url : "./ui/jq_ui/tree/fancytree__default/"
		, nm : "fancytree__default"
		, key : "SYS0015$jq_ui$tree$fancytree__default"
	};

	var o = window.smt_ui.addUI__DefaultModalFalse__NCSS( p, arguments[ 0 ] );

	var el = o[ 0 ];
	var elc = o[ 1 ];

	el.style.maxHeight = "100%";
	el.style.maxWidth = "300px";

	//elc.source = SUtilObject.createData__jQuery_Plugin__Fancytree__Sort( [ "b2link", "jq_ui", "smt_ui", "service_", "ui_" ], "title" );
	//elc.source = SUtilObject.createData__jQuery_Plugin__Fancytree__Sort( ["b2link","b2linkExtends","b2linkUIClass","b2link_resource","b2link_service","b2link_service__instance","b2link_ui","b2link_ui__dev","b2link_url","service_base","service_member","service__third_party","uiDev","ui_member","ui_nodejs_os","ui_spinner","ui__third_party","smt_ui","smt_ui_member","service__source","jq_ui"], "title" );
	elc.source = SUtilObject.createData__jQuery_Plugin__Fancytree__Sort( SUtilObject.getKeyList_NWindowDefault(), "title" );

	window.TtwLog.timeStamp( "---- [ E ] - window.jq_ui.tree.fancytree__default():{Array}----------return o;" );
	return o;
};

//----------------------------------------------------------------------------------------------------;
if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;