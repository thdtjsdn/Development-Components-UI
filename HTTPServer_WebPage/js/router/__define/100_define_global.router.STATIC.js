//----------------------------------------------------------------------------------------------------;
//var fileNm = "js/router/__define/100_define_global.router.STATIC.js";
//if( console ) console.log( "[ S ] - " + fileNm + "----------" );
//----------------------------------------------------------------------------------------------------;

//----------------------------------------------------------------------------------------------------[ S ] - global.router.STATIC;

global.router.STATIC = global.router.STATIC || {};

//--------------------------------------------------[ S ] - global.router.STATIC.REQUEST_COUNT;
global.router.STATIC.REQUEST_COUNT = global.router.STATIC.REQUEST_COUNT || {};

var _ = global.router.STATIC.REQUEST_COUNT;
	_.__n = 0;

var _M = function( n ){ _.__n = _.__n - n; };
	_.M1 = function(){ _M( 1 ); };
	_.M2 = function(){ _M( 2 ); };
	_.M3 = function(){ _M( 3 ); };
	_.M4 = function(){ _M( 4 ); };
	_.M5 = function(){ _M( 5 ); };
var _P = function( n ){ _.__n = _.__n + n; };
	_.P1 = function(){ _P( 1 ); };
	_.P2 = function(){ _P( 2 ); };
	_.P3 = function(){ _P( 3 ); };
	_.P4 = function(){ _P( 4 ); };
	_.P5 = function(){ _P( 5 ); };

//setInterval( function(){ console.log( "global.router.STATIC.REQUEST_COUNT : " + _.__n ); }, 1000 );
//setInterval( function(){ console.log( "REQUEST_STANDBY_COUNT : " + _.__n ); }, 1000 );
//--------------------------------------------------[ E ] - global.router.STATIC.REQUEST_COUNT;

//----------------------------------------------------------------------------------------------------[ E ] - global.router.STATIC;

//----------------------------------------------------------------------------------------------------;
//if( console ) console.log( "[ E ] - " + fileNm + "----------" );
//---------------------------------------------------------------------------------------------------;