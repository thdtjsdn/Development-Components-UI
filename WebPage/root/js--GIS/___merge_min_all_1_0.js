window.gis=window.gis||{};window.gis.map_apple=window.gis.map_apple||{};window.gis.map_daum=window.gis.map_daum||{};window.gis.map_google=window.gis.map_google||{};window.gis.map_kt=window.gis.map_kt||{};window.gis.map_leaflet=window.gis.map_leaflet||{};window.gis.map_microsoft=window.gis.map_microsoft||{};window.gis.map_nhn=window.gis.map_nhn||{};window.gis.map_openlayers=window.gis.map_openlayers||{};window.gis.map_sk=window.gis.map_sk||{};window.gis.projection_proj4=window.gis.projection_proj4||{};window.gis.map_leaflet.initialize_Map__Tile__Google=function(t){if(window.TtwLog.timeStamp("---- [ S ] - window.gis.map_leaflet.initialize_Map__Tile__Google():{Object}----------"),t=t||{},!t.hasOwnProperty("id"))return void window.b2link._ui.message.error("HTML's id는 필수");t.hasOwnProperty("bStreet")||t.hasOwnProperty("bHybrid")||t.hasOwnProperty("bSatellite")||t.hasOwnProperty("bSatellite_Hybrid")||t.hasOwnProperty("bTerrain")||(t.bStreet=!0);var i=ttw.gis.initialize_Map__Tile__Google(t),o=i.map,e={};return e.attribution=ttw.gis.addControl_Attribution({map:o,position:"bottomright",prefix:"B2LiNK"}),e.scaleLine=ttw.gis.addControl_ScaleLine({map:o,position:"bottomleft",maxWidth:100,metric:!0,imperial:!0,updateWhenIdle:!1}),e.zoom=ttw.gis.addControl_Zoom({map:o,position:"topright",zoomInText:"+",zoomOutText:"-",zoomInTitle:"확대",zoomOutTitle:"축소"}),i.controls=e,window.TtwLog.timeStamp("---- [ E ] - window.gis.map_leaflet.initialize_Map__Tile__Google():{Object}----------"),i};window.ui_gis=window.ui_gis||{};window.ui_gis.map_apple=window.ui_gis.map_apple||{};window.ui_gis.map_daum=window.ui_gis.map_daum||{};window.ui_gis.map_google=window.ui_gis.map_google||{};window.ui_gis.map_kt=window.ui_gis.map_kt||{};window.ui_gis.map_leaflet=window.ui_gis.map_leaflet||{};window.ui_gis.map_microsoft=window.ui_gis.map_microsoft||{};window.ui_gis.map_nhn=window.ui_gis.map_nhn||{};window.ui_gis.map_openlayers=window.ui_gis.map_openlayers||{};window.ui_gis.map_sk=window.ui_gis.map_sk||{};window.ui_gis.projection_proj4=window.ui_gis.projection_proj4||{};window.ui_gis.zzzzzzzzzz=window.ui_gis.zzzzzzzzzz||{};window.ui_gis.map_apple.basic=function(){window.TtwLog.timeStamp("---- [ S ] - window.ui_gis.map_apple.basic():{Array}----------");var i=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),a={url:i+"/ui/gis/map/apple/",nm:"basic",css_url:i+"/css_ui/",css_front_nm:"div-gis-map-apple-basic",key:"gis-map$apple-basic"},e=window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(a,arguments[0]);e[0],e[1];return window.TtwLog.timeStamp("---- [ E ] - window.ui_gis.map_apple.basic():{Array}----------"),e};window.ui_gis.map_daum.basic=function(){window.TtwLog.timeStamp("---- [ S ] - window.ui_gis.map_daum.basic():{Array}----------");var i=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),a={url:i+"/ui/gis/map/daum/",nm:"basic",css_url:i+"/css_ui/",css_front_nm:"div-gis-map-daum-basic",key:"gis-map$daum-basic"},s=window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(a,arguments[0]);s[0],s[1];return window.TtwLog.timeStamp("---- [ E ] - window.ui_gis.map_daum.basic():{Array}----------"),s};window.ui_gis.map_google.basic=function(){window.TtwLog.timeStamp("---- [ S ] - window.ui_gis.map_google.basic():{Array}----------");var i=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),o={url:i+"/ui/gis/map/google/",nm:"basic",css_url:i+"/css_ui/",css_front_nm:"div-gis-map-google-basic",key:"gis-map$google-basic"},g=window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(o,arguments[0]);g[0],g[1];return window.TtwLog.timeStamp("---- [ E ] - window.ui_gis.map_google.basic():{Array}----------"),g};window.ui_gis.map_kt.basic=function(){window.TtwLog.timeStamp("---- [ S ] - window.ui_gis.map_kt.basic():{Array}----------");var i=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),a={url:i+"/ui/gis/map/kt/",nm:"basic",css_url:i+"/css_ui/",css_front_nm:"div-gis-map-kt-basic",key:"gis-map$kt-basic"},s=window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(a,arguments[0]);s[0],s[1];return window.TtwLog.timeStamp("---- [ E ] - window.ui_gis.map_kt.basic():{Array}----------"),s};window.ui_gis.map_leaflet.basic=function(){window.TtwLog.timeStamp("---- [ S ] - window.ui_gis.map_leaflet.basic():{Array}----------");var i=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),e={url:i+"/ui/gis/map_leaflet/",nm:"basic",css_url:i+"/css_ui/",css_front_nm:"div-gis-map_leaflet-",key:"gis-map$leaflet-basic"},a=window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(e,arguments[0]);a[0],a[1];return window.TtwLog.timeStamp("---- [ E ] - window.ui_gis.map_leaflet.basic():{Array}----------"),a};window.ui_gis.map_leaflet.google=function(){window.TtwLog.timeStamp("---- [ S ] - window.ui_gis.map_leaflet.google():{Array}----------");var e=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),i={url:e+"/ui/gis/map_leaflet/google/",nm:"basic",css_url:e+"/css_ui/",css_front_nm:"div-gis-map_leaflet-google-",key:"gis-map$leaflet-google-basic"},a=window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(i,arguments[0]);a[0],a[1];return window.TtwLog.timeStamp("---- [ E ] - window.ui_gis.map_leaflet.google():{Array}----------"),a},window.ui_gis.map_leaflet.google.basic=function(){window.TtwLog.timeStamp("---- [ S ] - window.ui_gis.map_leaflet.google.basic():{Array}----------");var e=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),i={url:e+"/ui/gis/map_leaflet/google/",nm:"basic",css_url:e+"/css_ui/",css_front_nm:"div-gis-map_leaflet-google-",key:"gis-map$leaflet-google-basic"},a=window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(i,arguments[0]);a[0],a[1];return window.TtwLog.timeStamp("---- [ E ] - window.ui_gis.map_leaflet.google.basic():{Array}----------"),a};window.ui_gis.map_microsoft.basic=function(){window.TtwLog.timeStamp("---- [ S ] - window.ui_gis.map_microsoft.basic():{Array}----------");var i=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),s={url:i+"/ui/gis/map/microsoft/",nm:"basic",css_url:i+"/css_ui/",css_front_nm:"div-gis-map-microsoft-basic",key:"gis-map$microsoft-basic"},r=window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(s,arguments[0]);r[0],r[1];return window.TtwLog.timeStamp("---- [ E ] - window.ui_gis.map_microsoft.basic():{Array}----------"),r};window.ui_gis.map_nhn.basic=function(){window.TtwLog.timeStamp("---- [ S ] - window.ui_gis.map_nhn.basic():{Array}----------");var i=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),n={url:i+"/ui/gis/map/nhn/",nm:"basic",css_url:i+"/css_ui/",css_front_nm:"div-gis-map-nhn-basic",key:"gis-map$nhn-basic"},a=window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(n,arguments[0]);a[0],a[1];return window.TtwLog.timeStamp("---- [ E ] - window.ui_gis.map_nhn.basic():{Array}----------"),a};window.ui_gis.map_openlayers.basic=function(){window.TtwLog.timeStamp("---- [ S ] - window.ui_gis.map_openlayers.basic():{Array}----------");var i=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),a={url:i+"/ui/gis/map/openlayers/",nm:"basic",css_url:i+"/css_ui/",css_front_nm:"div-gis-map-openlayers-basic",key:"gis-map$openlayers-basic"},e=window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(a,arguments[0]);e[0],e[1];return window.TtwLog.timeStamp("---- [ E ] - window.ui_gis.map_openlayers.basic():{Array}----------"),e};window.ui_gis.map_sk.basic=function(){window.TtwLog.timeStamp("---- [ S ] - window.ui_gis.map_sk.basic():{Array}----------");var i=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),s={url:i+"/ui/gis/map/sk/",nm:"basic",css_url:i+"/css_ui/",css_front_nm:"div-gis-map-sk-basic",key:"gis-map$sk-basic"},a=window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(s,arguments[0]);a[0],a[1];return window.TtwLog.timeStamp("---- [ E ] - window.ui_gis.map_sk.basic():{Array}----------"),a};window.ui_gis.projection_proj4.basic=function(){window.TtwLog.timeStamp("---- [ S ] - window.ui_gis.projection_proj4.basic():{Array}----------");var i=window.b2link.url.getServerURLByServers("SYS0015_WebServer"),r={url:i+"/ui/gis/projection/proj4/",nm:"basic",css_url:i+"/css_ui/",css_front_nm:"div-gis-projection-proj4-",key:"gis-projection$proj4-basic"},o=window.b2link.ui.add_HTML_JS_CSS__CheckStaticUI(r,arguments[0]);o[0],o[1];return window.TtwLog.timeStamp("---- [ E ] - window.ui_gis.projection_proj4.basic():{Array}----------"),o};window.zzzzzzzzzz=window.zzzzzzzzzz||{};