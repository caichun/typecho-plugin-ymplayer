!function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p="/assets/",e(0)}([function(t,e,r){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var n=r(5),l=i(n);new l["default"]},function(t,e,r){function i(t,e){for(var r=0;r<t.length;r++){var i=t[r],n=h[i.id];if(n){n.refs++;for(var l=0;l<n.parts.length;l++)n.parts[l](i.parts[l]);for(;l<i.parts.length;l++)n.parts.push(p(i.parts[l],e))}else{for(var o=[],l=0;l<i.parts.length;l++)o.push(p(i.parts[l],e));h[i.id]={id:i.id,refs:1,parts:o}}}}function n(t){for(var e=[],r={},i=0;i<t.length;i++){var n=t[i],l=n[0],o=n[1],s=n[2],a=n[3],p={css:o,media:s,sourceMap:a};r[l]?r[l].parts.push(p):e.push(r[l]={id:l,parts:[p]})}return e}function l(t,e){var r=m(),i=b[b.length-1];if("top"===t.insertAt)i?i.nextSibling?r.insertBefore(e,i.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),b.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",l(t,e),e}function a(t){var e=document.createElement("link");return e.rel="stylesheet",l(t,e),e}function p(t,e){var r,i,n;if(e.singleton){var l=v++;r=f||(f=s(e)),i=y.bind(null,r,l,!1),n=y.bind(null,r,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=a(e),i=u.bind(null,r),n=function(){o(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(e),i=c.bind(null,r),n=function(){o(r)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else n()}}function y(t,e,r,i){var n=r?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,n);else{var l=document.createTextNode(n),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(l,o[e]):t.appendChild(l)}}function c(t,e){var r=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function u(t,e){var r=e.css,i=e.sourceMap;i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var n=new Blob([r],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(n),l&&URL.revokeObjectURL(l)}var h={},d=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},g=d(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),f=null,v=0,b=[];t.exports=function(t,e){if("object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=g()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var r=n(t);return i(r,e),function(t){for(var l=[],o=0;o<r.length;o++){var s=r[o],a=h[s.id];a.refs--,l.push(a)}if(t){var p=n(t);i(p,e)}for(var o=0;o<l.length;o++){var a=l[o];if(0===a.refs){for(var y=0;y<a.parts.length;y++)a.parts[y]();delete h[a.id]}}}};var x=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e,r){var i=r(3);"string"==typeof i&&(i=[[t.id,i,""]]);r(1)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,r){e=t.exports=r(4)(),e.push([t.id,"ymplayer{width:100%;height:60px;display:block;color:#fff;background:#34bdcf;margin-top:55px;position:relative;transition:all .3s ease-in-out;-ms-transition:.3s all ease-in-out;-moz-transition:.3s all ease-in-out;-webkit-transition:all .3s ease-in-out}ymplayer,ymplayer *{box-sizing:border-box}ymplayer svg{width:20px;height:20px;margin:0 10px;cursor:pointer}ymplayer svg,ymplayer svg path{transition:all .2s;-ms-transition:.2s all;-moz-transition:.2s all;-webkit-transition:all .2s}ymplayer svg path{fill:#fff}ymplayer song lyric,ymplayer song translation{display:none}ymplayer.yp-boxActived{margin-top:0;height:400px}ymplayer .yp-circle{width:10px;height:10px;position:absolute;top:-3px;right:-3px;background:#ceffff;border:2px solid #fff;border-radius:360px;cursor:pointer;transition:all .3s;-ms-transition:.3s all;-moz-transition:.3s all;-webkit-transition:all .3s}ymplayer .yp-circle:hover{width:13px;height:13px;top:-5px}ymplayer .yp-progressBar{width:100%;height:4px;position:absolute;top:-4px;cursor:pointer;background:#81e0f2}ymplayer .yp-progressBar .yp-progressBar__outside{width:100%;height:100%}ymplayer .yp-progressBar .yp-progressBar__inner{position:relative;width:0;height:100%;background-color:#b3e5fc;transition:all .3s ease-in-out;-ms-transition:.3s all ease-in-out;-moz-transition:.3s all ease-in-out;-webkit-transition:all .3s ease-in-out}ymplayer .yp-progressBar .yp-lyricBalloon{width:auto;height:35px;font-size:14px;background:#000;opacity:.7;min-width:100px;padding:0 15px;line-height:35px;text-align:center;position:absolute;top:-50px}ymplayer .yp-progressBar .yp-lyricBalloon[empty=true],ymplayer .yp-progressBar .yp-lyricBalloon[inactive=yes]{display:none}ymplayer .yp-progressBar .yp-lyricBalloon p{margin:0}ymplayer .yp-progressBar .yp-lyricBalloon .yp-tail{width:0;height:0;position:absolute;bottom:-10px;right:calc(50% - 4px);border-width:4px 0 4px 13px;border-style:solid;border-color:transparent transparent transparent #000;transform:rotate(90deg);-ms-transform:rotate(90deg);-moz-transform:rotate(90deg);-webkit-transform:rotate(90deg)}ymplayer[drag=progressDragging] .yp-progressBar__inner{transition:all 0s;-ms-transition:0s all;-moz-transition:0s all;-webkit-transition:all 0s}ymplayer .yp-controller{width:100%;height:60px}ymplayer .yp-controller .yp-singleInfo{width:60%;padding:5px;display:inline-block;float:left}ymplayer .yp-controller .yp-singleInfo .yp-albumImg{width:50px;height:50px;display:inline-block;float:left;background-size:cover;background-position:50%;transition:all .3s;-ms-transition:.3s all;-moz-transition:.3s all;-webkit-transition:all .3s}ymplayer .yp-controller .yp-singleInfo .yp-singleDetail{display:inline-block;margin-left:10px}ymplayer .yp-controller .yp-singleInfo .yp-singleDetail .yp-singleArtist,ymplayer .yp-controller .yp-singleInfo .yp-singleDetail .yp-singleTitle{margin:0 0 5px}ymplayer .yp-controller .yp-singleInfo .yp-singleDetail .yp-singleTitle{font-size:18px}ymplayer .yp-controller .yp-singleInfo .yp-singleDetail .yp-singleArtist{font-size:12px}ymplayer .yp-controller .yp-toggler{width:40%;height:60px;display:inline-flex;line-height:70px;position:relative}ymplayer .yp-controller .yp-toggler .yp-volumeBar{width:calc(100% - 180px);height:3px;background:#fff;display:inline-block;margin:auto;cursor:pointer}ymplayer .yp-controller .yp-toggler .yp-volumeBar .yp-volumeBar__inner{width:100%;height:100%;position:relative;background:#b3e5fc;transition:all .2s;-ms-transition:.2s all;-moz-transition:.2s all;-webkit-transition:all .2s}ymplayer .yp-extendBox{width:100%;height:0;overflow:hidden;transition:all .3s ease-in-out;-ms-transition:.3s all ease-in-out;-moz-transition:.3s all ease-in-out;-webkit-transition:all .3s ease-in-out}ymplayer .yp-extendBox .yp-lyricBox,ymplayer .yp-extendBox .yp-playList{width:50%;height:100%;display:inline-block}ymplayer .yp-extendBox .yp-lyricBox{float:left;position:relative;overflow:hidden;border-right:1px solid rgba(51,51,51,.05)}ymplayer .yp-extendBox .yp-lyricBox .yp-currentLyric{font-size:20px;font-weight:700}ymplayer .yp-extendBox .yp-playList{overflow:auto}ymplayer .yp-extendBox .yp-playList single{width:100%;height:35px;line-height:35px;display:block;font-size:14px;padding:0 10px;position:relative;cursor:pointer;transition:all .2s;-ms-transition:.2s all;-moz-transition:.2s all;-webkit-transition:all .2s}ymplayer .yp-extendBox .yp-playList single:hover{background:rgba(51,51,51,.1)}ymplayer .yp-extendBox .yp-playList single .yp-listNumber{color:#dedede}ymplayer .yp-extendBox .yp-playList single .yp-listTitle{margin-left:10px}ymplayer .yp-extendBox .yp-playList single .yp-listArtist{position:absolute;right:10px}ymplayer .yp-extendBox .yp-playList .yp-currentSingle{background:rgba(51,51,51,.1);border-left:4px solid #2196f3}ymplayer .yp-extendBox .yp-lyricContainer{width:100%;height:100%;padding:0 10px;transition:all .8s ease-in-out;-ms-transition:.8s ease-in-out all;-moz-transition:.8s ease-in-out all;-webkit-transition:all .8s ease-in-out}ymplayer .yp-extendBox .yp-lyricContainer lyric{display:block;width:100%;margin:0 0 10px;padding:10px 0 0;text-align:center}ymplayer .yp-extendBox .yp-lyricContainer lyric p{display:inline-block;margin:0}ymplayer .yp-extendBox .yp-lyricContainer .yp-translation{font-size:13px}ymplayer .yp-extendBox .yp-lrcFixer{width:40px;height:60px;position:absolute;display:inline-block;top:calc(50% - 30px);left:0;opacity:1;padding:8px 0;background:rgba(51,51,51,.1);transition:all .2s;-ms-transition:.2s all;-moz-transition:.2s all;-webkit-transition:all .2s}ymplayer .yp-extendBox .yp-lrcFixer[disabled=disabled]{opacity:0}ymplayer[box=active] .yp-extendBox{width:100%;height:340px;border-top:1px solid rgba(51,51,51,.05)}ymplayer.yp-responsive__500px .yp-lyricBox,ymplayer.yp-responsive__500px .yp-playList,ymplayer.yp-responsive__640px .yp-lyricBox,ymplayer.yp-responsive__640px .yp-playList{width:100%;display:inline;float:left}ymplayer.yp-responsive__500px[box=active] .yp-playList,ymplayer.yp-responsive__640px[box=active] .yp-playList{position:absolute;left:100%}ymplayer.yp-responsive__500px[box=active] .yp-extendBox,ymplayer.yp-responsive__640px[box=active] .yp-extendBox{width:100%;position:relative;overflow:auto}ymplayer.yp-responsive__640px .yp-singleInfo,ymplayer.yp-responsive__640px .yp-toggler{width:50%}ymplayer.yp-responsive__500px .yp-singleInfo{display:none}ymplayer.yp-responsive__500px .yp-toggler{width:100%}ymplayer:full-screen{height:100%;position:fixed;top:0;left:0;margin-top:5px}ymplayer:-webkit-full-screen{height:100%;position:fixed;top:0;left:0;margin-top:5px}ymplayer:-moz-full-screen{height:100%;position:fixed;top:0;left:0;margin-top:5px}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},n=0;n<this.length;n++){var l=this[n][0];"number"==typeof l&&(i[l]=!0)}for(n=0;n<e.length;n++){var o=e[n];"number"==typeof o[0]&&i[o[0]]||(r&&!o[2]?o[2]=r:r&&(o[2]="("+o[2]+") and ("+r+")"),t.push(o))}},t}},function(t,e,r){/**
     * YMPlayer: Just a simple and diligent HTML5 audio player made with love.
     *
     * @package  ymplayer
     * @author   kirainmoe
     * @version  4.0
     * @link     https://github.com/kirainmoe/ymplayer
     * @license  MIT
     */
"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},l=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}();r(2);var o=function(){function t(){i(this,t),this.icons={pause:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 192v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45zm-896 0v1408q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h512q26 0 45 19t19 45z"/></svg>',play:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1576 927l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z"/></svg>',stop:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1664 192v1408q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>',loop:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"/></svg>',list:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M256 1312v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm1536 768v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm-1536-1152v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm1536 768v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1344q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1344q13 0 22.5 9.5t9.5 22.5z"/></svg>',lyric:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1596 476q14 14 28 36h-472v-472q22 14 36 28zm-476 164h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544q0 40 28 68t68 28zm160 736v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23zm0-256v-64q0-14-9-23t-23-9h-704q-14 0-23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23-9t9-23z"/></svg>',volume:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1088 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45zm384 544q0 76-42.5 141.5t-112.5 93.5q-10 5-25 5-26 0-45-18.5t-19-45.5q0-21 12-35.5t29-25 34-23 29-35.5 12-57-12-57-29-35.5-34-23-29-25-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5 70 27 112.5 93t42.5 142z"/></svg>',mute:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1280 352v1088q0 26-19 45t-45 19-45-19l-333-333h-262q-26 0-45-19t-19-45v-384q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19 19 45z"/></svg>',angleUp:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg>',angleDown:'<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/></svg>'},this.balloonState=!0,window.YMPlayer=this,window.addEventListener("load",this.init.bind(this))}return l(t,[{key:"init",value:function(){if(!document.querySelectorAll)throw"YMPlayer requires Internet Explorer 9 or higher version.";var t=document.querySelectorAll("ymplayer, .ymplayer");if(0!=t.length)for(var e in t)t[e]instanceof HTMLElement&&this.serialize(t[e]);return this}},{key:"serialize",value:function(t){var e=this;if(!document.createElement("audio").play)return t.innerHTML='<div class="yp-upgradeBrowser">It seems that your browser does not support HTML 5 Audio.</div>',!1;if(!t.querySelector("audio")){t.setAttribute("box","inactive"),t.oncontextmenu=function(t){return t.preventDefault()},this.resizer(t),window.addEventListener("resize",function(){return e.resizer(t)});for(var r=void 0,i=t.querySelectorAll("song"),n=[],l=this,o=0;o<i.length;o++){var s=this.make("single",{index:o,src:i[o].attributes.src.value,title:i[o].attributes.title.value,artist:i[o].attributes.artist.value,cover:i[o].attributes.cover.value},[this.make("span","class=yp-listNumber",String(o+1)),this.make("span","class=yp-listTitle",i[o].attributes.title.value),this.make("span","class=yp-listArtist",i[o].attributes.artist.value)],{click:function(r){return e.change(t,r.srcElement||r.target,!0)}});n.push(s),0===o&&(s.classList.add("yp-currentSingle"),r=s)}var a=this.make("div","class=yp-progressBar",[this.make("div","class=yp-progressBar__outside",this.make("div","class=yp-progressBar__inner",[this.make("span","class=yp-circle|for=progressBar",null,{mousedown:function(){t.setAttribute("drag","progressDragging"),l.mouseEvent=document.body.onmousemove,document.body.onmousemove=function(e){var r=this;l.changeProgress(t,e),this.onmouseup=function(){return r.onmousemove=l.mouseEvent}}}}),this.make("div","class=yp-lyricBalloon|inactive=yes|empty=true",'<p></p><span class="yp-tail"></span>',{click:function(t){t.preventDefault(),t.stopPropagation()}})]),{click:function(e){t.setAttribute("drag","progress"),l.changeProgress(t,e)}})]),p=this.make("div","class=yp-controller",[this.make("div","class=yp-singleInfo",[this.make("div",{className:"yp-albumImg",style:"background-image: url();"}),this.make("div","class=yp-singleDetail",[this.make("p","class=yp-singleTitle",null),this.make("p","class=yp-singleArtist",null)])]),this.make("div","class=yp-toggler",[this.make("i","class=yp-button__play",this.icons.play,{click:function(){return e.togglePlay(t)}}),this.make("i","class=yp-button__stop",this.icons.stop,{click:function(){return e.stop(t)}}),this.make("i","class=yp-button__loop",this.icons.loop,{click:function(){return e.toggleLoop(t)}}),this.make("i","class=yp-button__list",this.icons.list,{click:function(){return e.toggleBox(t)}}),this.make("div","class=yp-volumeBar",[this.make("div","class=yp-volumeBar__inner",[this.make("span","class=yp-circle")])],{click:function(e){l.changeVolume(t,e)}})])]),y=this.make("div","class=yp-extendBox",[this.make("div","class=yp-lyricBox",[this.make("div","class=yp-lyricContainer"),this.make("div","class=yp-lrcFixer|disabled=disabled",[this.make("span","class=yp-fixButton__slower|title=将歌词延后 0.5s",this.icons.angleUp,{click:function(r){e.parentNode.getAttribute("disabled")||(r.preventDefault(),r.stopPropagation(),t.setAttribute("current-lrc-timeoffset",Number(t.getAttribute("current-lrc-timeoffset"))-.5),l.syncLyric(t))}}),this.make("span","class=yp-fixButton__faster|title=将歌词提前 0.5s",this.icons.angleDown,{click:function(r){e.parentNode.getAttribute("disabled")||(r.preventDefault(),r.stopPropagation(),t.setAttribute("current-lrc-timeoffset",Number(t.getAttribute("current-lrc-timeoffset"))+.5),l.syncLyric(t))}})])],{click:function(){return l.toggleFixer(t)}}),this.make("div","class=yp-playList",n)]),c=this.make("audio","preload=no",null,{play:function(){return t.setAttribute("playing","playing")},pause:function(){return t.removeAttribute("playing")},error:function(){var e=t.querySelector(".yp-currentSingle");if(e){var r=e.nextSibling;r&&l.change(t,r,!0)}},ended:function(){t.removeAttribute("playing");var e=t.querySelector(".yp-currentSingle");"true"==t.getAttribute("loop")?l.change(t,e,!0):e.nextSibling?l.change(t,e.nextSibling,!0):""},volumechange:function(){return t.querySelector(".yp-volumeBar__inner").style.width=String(100*e.volume)+"%"},timeupdate:function(){var e=this.currentTime/this.duration,r=t.querySelector(".yp-progressBar__inner");r.style.width=String(100*e)+"%",l.syncLyric(t,this.currentTime)}}),u=this.make("div","class=yp-container",[a,p,y,c],{mousedown:function(e){return 2==e.button&&l.requestFullscreen(t)}});return t.appendChild(u),r&&this.change(t,r,!1),this}}},{key:"togglePlay",value:function(t){var e=t.querySelector("audio"),r=t.querySelector(".yp-button__play");return e.paused!==!1?(r.innerHTML=this.icons.pause,e.play(),"inactive"==t.getAttribute("box")&&t.querySelector(".yp-lyricBalloon").setAttribute("inactive","no"),this.balloonState?this.changeBalloonPosition(t):""):(r.innerHTML=this.icons.play,e.pause(),t.querySelector(".yp-lyricBalloon").setAttribute("inactive","yes")),this}},{key:"stop",value:function(t){var e=t.querySelector("audio"),r=t.querySelector(".yp-lyricBalloon");return t.setAttribute("playing","stoped"),t.querySelector(".yp-button__play").innerHTML=this.icons.play,e.pause(),e.currentTime=0,r.setAttribute("inactive","yes"),r.setAttribute("empty","true"),this}},{key:"toggleLoop",value:function(t){var e=t.getAttribute("loop"),r=t.querySelector(".yp-button__loop > svg > path");return"true"==e?(t.setAttribute("loop","false"),r.style.fill="#FFF"):(t.setAttribute("loop","true"),r.style.fill="#B3E5FC"),this}},{key:"syncLyric",value:function(t,e){if(t.getAttribute("current-lrc")){var r=void 0==e?t.querySelector("audio").currentTime:e,i=t.querySelectorAll(".yp-lyricContainer > lyric"),n=void 0;r+=Number(t.getAttribute("current-lrc-timeoffset"));for(var l=0;l<i.length-1;l++){var o=Number(i[l].getAttribute("timeline")),s=Number(i[l+1].getAttribute("timeline"));l<=0&&r<o?n=-1:l==i.length-2&&r>s?n=l+1:r<s&&r>=o&&(n=l)}void 0===n&&(n=-1),t.setAttribute("current-lrc",n);for(var a=t.querySelectorAll(".yp-currentLyric"),p=t.querySelector(".yp-lyricBox"),y=t.querySelector(".yp-lyricContainer"),c=0;c<a.length;c++)a[c].classList.remove("yp-currentLyric");if(n<0)y.setAttribute("style","transform: translateY(0px)");else{if(i[n].classList.add("yp-currentLyric"),n!=-1){var u=i[n].querySelector(".yp-lyricContent"),h=t.querySelector(".yp-lyricBalloon > p"),d=i[n].getElementsByTagName("p")[0];u&&(u=u.innerHTML),"undefined"!=typeof d&&(h.parentNode.style.width=d.offsetWidth+"px",this.balloonState?this.changeBalloonPosition(t):""),h.innerHTML=u,null==u?h.parentNode.setAttribute("empty","true"):h.parentNode.hasAttribute("empty")&&h.parentNode.removeAttribute("empty")}var g=i[n].offsetTop-Math.abs(p.offsetHeight-i[n].offsetHeight)/2;g<0&&(g=0),y.setAttribute("style","transform: translateY("+String(-g)+"px)")}return this}}},{key:"toggleFixer",value:function(t){if(t.hasAttribute("current-lrc")){var e=t.querySelector(".yp-lrcFixer");e.getAttribute("disabled")?e.removeAttribute("disabled"):e.setAttribute("disabled","disabled")}return this}},{key:"changeBalloonPosition",value:function(t){var e=this.getRect(t.querySelector('.yp-circle[for="progressBar"]')).left-this.getRect(t).left+8,r=t.querySelector(".yp-lyricBalloon");return r.style.left=String(Math.round(e)-r.offsetWidth/2)+"px",this}},{key:"changeProgress",value:function(t,e){var r=t.querySelector("audio"),i=t.querySelector(".yp-progressBar"),n=this.getRect(i);return isNaN(r.duration)||(r.currentTime=r.duration*(e.clientX-n.left)/i.offsetWidth),this}},{key:"changeVolume",value:function(t,e){var r=t.querySelector("audio"),i=t.querySelector(".yp-volumeBar"),n=this.getRect(i),l=(e.clientX-n.left)/i.offsetWidth;return r.volume=l,i.querySelector(".yp-volumeBar__inner").style.width=100*l+"%",this}},{key:"parseLrc",value:function(t,e){t.removeAttribute("current-lrc"),t.removeAttribute("current-lrc-timeoffset");var r=t.getElementsByClassName("yp-lyricContainer"),i=t.querySelectorAll("song")[e].querySelector("lyric"),n=[];if(r[0].innerHTML="",i)var l=i.innerHTML.replace(/\\n/g,"\n").replace(/\\r/g,"\r");else r[0].innerHTML='<div class="yp-nolyric" style="text-align: center;"><p>没有找到这首歌的歌词 OvO 请欣赏。</p></div>',r[0].style.transform="translateY(0px)";if(!l)return!1;for(var o=String(l).split("\n"),s=0;s<o.length;s++){var a=o[s].replace(/(^\s*)|(\s*$)/g,"");if(a){var p=[],y=/^(\[\d+:\d+(.\d+)?\])(.*)/g.exec(a);if(!y)break;p.push(y[1]),a=y[y.length-1].replace(/(^\s*)|(\s*$)/g,"");for(var c=0;c<p.length;c++){var u=/^\[(\d{1,2}):(\d|[0-5]\d)(\.(\d+))?\]$/g.exec(p[c]);u&&n.push({timestamp:60*Number(u[1])+Number(u[2])+(u[4]?Number("0."+u[4]):0),text:a})}}}n.sort(function(t,e){return t.timestamp>e.timestamp?1:-1});var h=t.querySelectorAll("song")[e].querySelectorAll("translation"),d=[],g=!1;if(h.length>0){h=h[0].innerHTML.replace(/\\n/g,"\n").replace(/\\r/g,"\r").split("\n"),g=!0;for(var m=0;m<h.length;m++)d.push(h[m])}if(n.length>0){for(var f=0;f<n.length;f++){var v=this.make("lyric",{timeline:n[f].timestamp},n[f].text?'<p><span class="yp-lyricContent">'+n[f].text+"</span>"+(g?'<br><span class="yp-translation">'+d[f]:"</span>")+"</p>":"");r[0].appendChild(v)}t.setAttribute("current-lrc",-1),t.setAttribute("current-lrc-timeoffset",0)}return this}},{key:"toggleBox",value:function(t){var e=t.getAttribute("box");return"active"==e?(t.setAttribute("box","inactive"),t.classList.remove("yp-boxActived"),this.balloonState?t.querySelector(".yp-lyricBalloon").setAttribute("inactive","no"):""):(t.setAttribute("box","active"),t.classList.add("yp-boxActived"),t.querySelector(".yp-lyricBalloon").setAttribute("inactive","yes")),this}},{key:"resizer",value:function(t){var e=t.offsetWidth;if(e<=640){this.balloonState=!1;var r=t.querySelector(".yp-lyricBalloon");r&&r.setAttribute("inactive","yes"),e<=500?t.classList.add("yp-responsive__500px"):t.classList.add("yp-responsive__640px")}else this.balloonState=!0,t.classList.toggle("yp-responsive__640px",!1),t.classList.toggle("yp-responsive__500px",!1);return this}},{key:"change",value:function(t,e,r){var i=t.querySelector("audio");return t.removeAttribute("playing"),t.querySelector(".yp-singleTitle").innerHTML=e.getAttribute("title"),t.querySelector(".yp-singleArtist").innerHTML=e.getAttribute("artist"),t.querySelector(".yp-albumImg").setAttribute("style","background-image: url("+e.getAttribute("cover")+");"),t.querySelectorAll("single.yp-currentSingle")[0].classList.remove("yp-currentSingle"),e.classList.add("yp-currentSingle"),i.setAttribute("src",e.getAttribute("src")),this.parseLrc(t,e.getAttribute("index")),r&&this.stop(t).togglePlay(t),this}},{key:"getRect",value:function(t){var e=t.getBoundingClientRect(),r=document.documentElement.clientTop,i=document.documentElement.clientLeft;return{top:e.top-r,bottom:e.bottom-r,left:e.left-i,right:e.right-i}}},{key:"inRect",value:function(t,e,r){return e>=t.left&&e<=t.right&&r>=t.top&&r<=t.bottom}},{key:"requestFullscreen",value:function(t){function e(){return!!document.fullscreenElement||(!!document.webkitFullscreenElement||!!document.mozFullscreenElement)}var r=t.querySelector(".yp-extendBox");if(e())document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozExitFullscreen?document.mozExitFullscreen():"",t.setAttribute("box","inactive"),t.classList.toggle("yp-boxActived",!1),r.setAttribute("style","");else{var i=t.requestFFullscreenElementullscreen?t.requestFullscreen()||!0:t.webkitRequestFullscreen?t.webkitRequestFullscreen()||!0:!!t.mozRequestFullscreen&&(t.mozRequestFullscreen()||!0);if(!i)throw"Microsoft 家的 Internet Explorer 暂时不支持（以后也不会支持） HTML5 fullscreen API.";t.setAttribute("box","active");var n=window.screen.availHeight-60+"px";r.setAttribute("style","height:"+n)}return this}},{key:"make",value:function(t,e,r,i){var l=document.createElement(t);if(e&&null!=e)switch("undefined"==typeof e?"undefined":n(e)){case"string":var o=e.split("|");o.forEach(function(t){var e=t.split("=");l.setAttribute(e[0],e[1])});break;case"object":for(var s in e){if("className"==s)var a="class";else var a=s;l.setAttribute(a,e[s])}}if(r&&null!=r)switch("undefined"==typeof r?"undefined":n(r)){case"object":r instanceof HTMLElement?l.appendChild(r):r instanceof Array?r.forEach(function(t){l.appendChild(t)}):"";break;case"string":l.innerHTML=r}if(i&&null!=i)for(var p in i)l.addEventListener(p,i[p]);if(e&&e.stringify){var y=document.createElement("div");return y.appendChild(l),y.innerHTML}return l}},{key:"render",value:function(t,e){var r=this,i=[];t.forEach(function(t){var e=t.title,n=t.artist,l=t.cover,o=t.src,s=t.lyric,a=t.translation?t.translation:void 0,p=[r.make("lyric",null,s)];void 0==a?"":p.push(r.make("translation",null,a));var y=r.make("song",{title:e,artist:n,cover:l,src:o},p);i.push(y)});var n=this.make("ymplayer",null,i);return e.appendChild(n),this.serialize(n),this}}]),t}();e["default"]=o}]);
//# sourceMappingURL=ymplayer.js.map