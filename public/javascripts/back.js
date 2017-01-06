/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * Created by admin on 2016/12/31.
	 */


	    $(function(){
	        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
	        $(function () {
	            $(window).scroll(function(){
	                if ($(window).scrollTop()>100){
	                    $("#back-to-top").fadeIn(1500);
	                }
	                else
	                {
	                    $("#back-to-top").fadeOut(1500);
	                }
	            });

	            //当点击跳转链接后，回到页面顶部位置

	            $("#back-to-top").click(function(){
	                $('body,html').animate({scrollTop:0},1000);
	                return false;
	            });
	        });
	    });


/***/ }
/******/ ]);