/**
 * @function
 * @return {undefined}
 *
 * @example
 * <code>
	window.apis.util.importJS__Reuse( window.apis.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/jQuery_Plugin/splitter.js/import-js.js" );
 * </code>
 */
(function(){
	window.TtwLog.log( "- [ S ] - Import templates jQuery_Plugin - splitter.js 1.5.1" );

	//----------------------------------------------------------------------------------------------------;

	//CSS;
	SUtilTemplateHTML.addCSS__URLToHead( window.apis.url.getServerURL_WebServer_SCODE( "SYS0015" ) + "/libs/jQuery_Plugin/splitter.js/1.5.1/splitter.css" );

	//JS;
	/**
	 * The splitter() plugin implements a two-pane resizable splitter window.
	 * The selected elements in the jQuery object are converted to a splitter;
	 * each selected element should have two child elements, used for the panes of the splitter.
	 * The plugin adds a third child element for the splitbar.
	 *
	 * @example $('#MySplitter').splitter();
	 * @desc Create a vertical splitter with default settings
	 *
	 * @example $('#MySplitter').splitter({type: 'h', accessKey: 'M'});
	 * @desc Create a horizontal splitter resizable via Alt+Shift+M
	 */
	!function(e){e.fn.splitter=function(i){return i=i||{},this.each(function(){function t(i){p.outline&&(a=a||x.clone(!1).insertAfter(h)),c.css("-webkit-user-select","none"),x.addClass(p.activeClass),h._posSplit=h[0][p.pxSplit]-i[p.eventPos],e(window.document).bind("mousemove",s).bind("mouseup",o)}function s(e){var i=h._posSplit+e[p.eventPos];p.outline?(i=Math.max(0,Math.min(i,l._DA-x._DA)),x.css(p.origin,i)):n(i)}function o(i){x.removeClass(p.activeClass);var t=h._posSplit+i[p.eventPos];p.outline&&(a.remove(),a=null,n(t)),c.css("-webkit-user-select","text"),e(window.document).unbind("mousemove",s).unbind("mouseup",o)}function n(e){e=Math.max(h._min,l._DA-u._max,Math.min(e,h._max,l._DA-x._DA-u._min)),x._DA=x[0][p.pxSplit],x.css(p.origin,e).css(p.fixed,l._DF),h.css(p.origin,0).css(p.split,e).css(p.fixed,"100%"),u.css(p.origin,e+x._DA).css(p.split,l._DA-x._DA-e).css(p.fixed,"100%"),c.trigger("resize")}function r(e,i){for(var t=0,s=1;s<arguments.length;s++)t+=Math.max(parseInt(e.css(arguments[s]))||0,0);return t}var a,d=(i.splitHorizontal?"h":i.splitVertical?"v":i.type)||"v",p=e.extend({activeClass:"active",pxPerKey:8,tabIndex:0,accessKey:""},{v:{keyLeft:39,keyRight:37,cursor:"e-resize",splitbarClass:"vertical-split-bar",outlineClass:"voutline",type:"v",eventPos:"pageX",origin:"left",split:"width",pxSplit:"offsetWidth",side1:"Left",side2:"Right",fixed:"height",pxFixed:"offsetHeight",side3:"Top",side4:"Bottom"},h:{keyTop:40,keyBottom:38,cursor:"n-resize",splitbarClass:"horizontal-split-bar",outlineClass:"houtline",type:"h",eventPos:"pageY",origin:"top",split:"height",pxSplit:"offsetHeight",side1:"Top",side2:"Bottom",fixed:"width",pxFixed:"offsetWidth",side3:"Left",side4:"Right"}}[d],i),l=e(this).css({position:"relative"}),c=e(">*",l[0]).css({position:"absolute","-moz-outline-style":"none"}),h=e(c[0]),u=e(c[1]),_=e('<a href="javascript:void(0)"></a>').attr({accessKey:p.accessKey,tabIndex:p.tabIndex,title:p.splitbarClass}).bind("keydown",function(e){var i=e.which||e.keyCode,t=i==p["key"+p.side1]?1:i==p["key"+p.side2]?-1:0;t&&n(h[0][p.pxSplit]+t*p.pxPerKey,!1)}).bind("blur",function(){x.removeClass(p.activeClass)}),x=e(c[2]||"<div></div>").insertAfter(h).css("z-index","100").append(_).attr({"class":p.splitbarClass,unselectable:"on"}).css({position:"absolute","user-select":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none",padding:"0px"}).bind("mousedown",t);/^(auto|default|)$/.test(x.css("cursor"))&&x.css("cursor",p.cursor),x._DA=x[0][p.pxSplit],l._PBF=e.boxModel?r(l,"border"+p.side3+"Width","border"+p.side4+"Width"):0,l._PBA=e.boxModel?r(l,"border"+p.side1+"Width","border"+p.side2+"Width"):0,h._pane=p.side1,u._pane=p.side2,e.each([h,u],function(){this._min=p["min"+this._pane]||r(this,"min-"+p.split),this._max=p["max"+this._pane]||r(this,"max-"+p.split)||9999,this._init=p["size"+this._pane]===!0?parseInt(e.curCSS(this[0],p.split)):p["size"+this._pane]});var m=h._init;if(isNaN(u._init)||(m=l[0][p.pxSplit]-l._PBA-u._init-x._DA),p.cookie){e.cookie||alert("jQuery.splitter():jQuery cookie plugin required");var f=parseInt(e.cookie(p.cookie));isNaN(f)||(m=f),e(window).bind("unload",function(){var i=String(x.css(p.origin));e.cookie(p.cookie,i,{expires:p.cookieExpires||365,path:p.cookiePath||window.document.location.pathname})})}isNaN(m)&&(m=Math.round((l[0][p.pxSplit]-l._PBA-x._DA)/2)),p.anchorToWindow?(l._hadjust=r(l,"borderTopWidth","borderBottomWidth","marginBottom"),l._hmin=Math.max(r(l,"minHeight"),20),e(window).bind("resize",function(){var i=l.offset().top,t=e(window).height();l.css("height",Math.max(t-i-l._hadjust,l._hmin)+"px"),l.trigger("resize")}).trigger("resize")):p.resizeToWidth&&e(window).bind("resize",function(){l.trigger("resize")}),l.bind("resize",function(e,i){e.target==this&&(l._DF=l[0][p.pxFixed]-l._PBF,l._DA=l[0][p.pxSplit]-l._PBA,l._DF<=0||l._DA<=0||n(isNaN(i)?p.sizeRight||p.sizeBottom?l._DA-u[0][p.pxSplit]-x._DA:h[0][p.pxSplit]:i))}).trigger("resize",[m])})}}(window.jQuery);

	//----------------------------------------------------------------------------------------------------;

	window.TtwLog.log( "- [ E ] - Import templates jQuery_Plugin - splitter.js 1.5.1" );
	return;
})();