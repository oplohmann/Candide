/*! Thrive Architect - 2021-09-01
* http://www.thrivethemes.com/
* Copyright (c) 2021 Thrive Themes */

"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(s){var f,u,l,v,h,o={".js":[],".json":[],".css":[],".html":[]},n="function"==typeof require?require:null;return v=function(t){var e=new Error("Could not find module '"+t+"'");return e.code="MODULE_NOT_FOUND",e},h=function(t,e,c){var a,l;if("function"==typeof t[e+c])return e+c;for(a=0;l=o[c][a];++a)if("function"==typeof t[e+l])return e+l;return null},f=function(t,e,c,a,l,o){var i,r,s,n,d,p;for("."!==(i=(c=c.split("/")).pop())&&".."!==i||(c.push(i),i="");null!=(r=c.shift());)if(r&&"."!==r&&(".."===r?(t=e.pop(),o=o.slice(0,o.lastIndexOf("/"))):(e.push(t),t=t[r],o+="/"+r),!t))throw v(a);if(i&&"function"!=typeof t[i]&&((p=(p=(p=(p=h(t,i,".js"))||h(t,i,".json"))||h(t,i,".css"))||h(t,i,".html"))?i=p:2!==l&&"object"===_typeof(t[i])&&(e.push(t),t=t[i],o+="/"+i,i="")),!i)return 1!==l&&t[":mainpath:"]?f(t,e,t[":mainpath:"],a,1,o):f(t,e,"index",a,2,o);if(!(d=t[i]))throw v(a);return d.hasOwnProperty("module")?d.module.exports:(s={},d.module=n={exports:s,id:o+"/"+i},d.call(s,s,n,u(t,e,o)),n.exports)},l=function(t,e,c,a){var l,o=c,i=c.charAt(0),r=0;if("/"===i){if(o=o.slice(1),!(t=s["/"])){if(n)return n(c);throw v(c)}a="/",e=[]}else if("."!==i){if(l=o.split("/",1)[0],!(t=s[l])){if(n)return n(c);throw v(c)}a=l,e=[],(o=o.slice(l.length+1))||(r=(o=t[":mainpath:"])?1:(o="index",2))}return f(t,e,o,c,r,a)},(u=function(e,c,a){return function(t){return l(e,[].concat(c),t,a)}})(s,[],"")}({workspace:{editor:{js:{frontend:{modules:{"acf-dynamic-elements.js":function(t,e,c){void 0===TCB_Front.js_modules["acf-dynamic-elements"]&&TCB_Front.setModuleLoadedStatus("acf-dynamic-elements",!1),function(i,r){if(!TCB_Front.isModuleLoaded("acf-dynamic-elements")){var d={init:function(){var t=!!tve_frontend_options.is_editor_page;i("[data-tar-shortcode-attr]").each(function(){var t=this.getAttribute("data-tar-shortcode-attr");try{var e=JSON.parse(t);for(var c in e)this.setAttribute(e[c].prop,e[c].value);this.removeAttribute("data-tar-shortcode-attr")}catch(t){}}),d.updateStarRating(t),d.updateProgressBar(t),d.updateFillCounter(t),d.countdownTimer(t),d.hidePlaceholderElements(t),d.updateAnimations(t),d.updateVideos(t),d.lazyLoadPlaceholders(t),d.hideEmptyLinks(t)},updateStarRating:function(t){i(".tcb-custom-field-source.thrv-rating").each(function(){var t=i(this);t.html(d.getStarHtml(t))})},getStarHtml:function(t){t=t[0];for(var e=parseFloat(t.dataset.max),c=parseFloat(t.dataset.value)>e?e:d.getClosestRating(t.dataset.value,e),a=t.dataset.style,l="",o=this.templates[a].viewbox||"-6 -6 70 70",i=Math.floor(c),r=Math.round(c-i),s=1;s<=e;s++){var n="full";i<s&&s<=i+r?n="half":i+r<s&&(n="empty"),l+='<svg viewBox="'+o+'" class="">'+d.templates[a][n]+"</svg>"}return l},getClosestRating:function(t,e){var c=0;t=parseFloat(t);for(var a=0;a<=e&&a<=t;a+=.5)c=a;return c},templates:{style1:{empty:'<path class="sr-background" fill="transparent" d="M46.976,57.227c-0.422,0-0.834-0.104-1.228-0.312l-13.167-6.921c-0.663-0.349-1.409-0.533-2.158-0.533s-1.495,0.185-2.158,0.533L15.1,56.915c-0.393,0.208-0.807,0.312-1.229,0.312c-0.765,0-1.524-0.358-2.03-0.958c-0.501-0.595-0.703-1.353-0.569-2.134l2.515-14.661c0.258-1.505-0.241-3.039-1.334-4.105L1.8,24.985c-0.736-0.717-0.985-1.728-0.668-2.704c0.318-0.977,1.114-1.649,2.13-1.796l14.72-2.139c1.512-0.22,2.817-1.168,3.493-2.537L28.059,2.47C28.513,1.55,29.396,1,30.423,1c1.027,0,1.911,0.55,2.365,1.471l6.584,13.339c0.676,1.369,1.98,2.317,3.492,2.537l14.721,2.139c1.016,0.147,1.813,0.819,2.129,1.795c0.317,0.977,0.068,1.988-0.668,2.705L48.394,35.369c-1.092,1.065-1.59,2.6-1.334,4.105l2.516,14.661c0.134,0.781-0.068,1.539-0.569,2.134C48.5,56.869,47.743,57.227,46.976,57.227"/><path class="sr-outline" fill="#fbb040" d="M30.424,2c0.307,0,1.063,0.089,1.471,0.913l6.582,13.339c0.82,1.664,2.408,2.817,4.246,3.084l14.719,2.139c0.91,0.132,1.229,0.824,1.324,1.115c0.094,0.291,0.242,1.038-0.416,1.679L47.697,34.652c-1.328,1.295-1.934,3.16-1.621,4.99l2.516,14.662c0.105,0.622-0.131,1.061-0.35,1.318c-0.318,0.378-0.791,0.604-1.264,0.604c-0.26,0-0.518-0.066-0.764-0.197l-13.166-6.922c-0.807-0.422-1.715-0.646-2.625-0.646s-1.816,0.225-2.623,0.646l-13.166,6.922c-0.248,0.131-0.504,0.197-0.764,0.197c-0.473,0-0.947-0.226-1.266-0.604c-0.217-0.258-0.455-0.696-0.348-1.318l2.516-14.662c0.313-1.83-0.293-3.695-1.623-4.99L2.498,24.269c-0.656-0.641-0.508-1.388-0.414-1.679c0.096-0.291,0.414-0.983,1.322-1.115l14.721-2.139c1.838-0.267,3.424-1.42,4.246-3.084l6.582-13.339C29.363,2.089,30.117,2,30.424,2 M30.424,0c-1.297,0-2.594,0.676-3.262,2.027l-6.584,13.339c-0.529,1.074-1.553,1.819-2.738,1.99l-14.721,2.14c-2.984,0.434-4.176,4.101-2.016,6.205l10.65,10.383c0.859,0.836,1.25,2.04,1.047,3.221l-2.514,14.66c-0.404,2.352,1.465,4.262,3.584,4.262c0.561,0,1.137-0.134,1.695-0.426l13.166-6.923c0.529-0.278,1.111-0.417,1.691-0.417c0.582,0,1.164,0.139,1.693,0.417l13.166,6.923c0.559,0.293,1.135,0.426,1.695,0.426c2.119,0,3.986-1.91,3.584-4.262l-2.516-14.66c-0.201-1.181,0.189-2.385,1.047-3.221l10.652-10.383c2.158-2.104,0.967-5.771-2.016-6.205l-14.723-2.14c-1.184-0.171-2.209-0.916-2.738-1.99L33.688,2.027C33.02,0.676,31.723,0,30.424,0"/>',half:'<path class="sr-background" fill="transparent" d="M46.976,57.227c-0.422,0-0.834-0.104-1.228-0.312l-13.167-6.921c-0.663-0.349-1.409-0.533-2.158-0.533s-1.495,0.185-2.158,0.533L15.1,56.915c-0.393,0.208-0.807,0.312-1.229,0.312c-0.765,0-1.524-0.358-2.03-0.958c-0.501-0.595-0.703-1.353-0.569-2.134l2.515-14.661c0.258-1.505-0.241-3.039-1.334-4.105L1.8,24.985c-0.736-0.717-0.985-1.728-0.668-2.704c0.318-0.977,1.114-1.649,2.13-1.796l14.72-2.139c1.512-0.22,2.817-1.168,3.493-2.537L28.059,2.47C28.513,1.55,29.396,1,30.423,1c1.027,0,1.911,0.55,2.365,1.471l6.584,13.339c0.676,1.369,1.98,2.317,3.492,2.537l14.721,2.139c1.016,0.147,1.813,0.819,2.129,1.795c0.317,0.977,0.068,1.988-0.668,2.705L48.394,35.369c-1.092,1.065-1.59,2.6-1.334,4.105l2.516,14.661c0.134,0.781-0.068,1.539-0.569,2.134C48.5,56.869,47.743,57.227,46.976,57.227"/><path class="sr-fill" fill="#F0C419" d="M28.731,50.878l-13.166,6.923c-2.67,1.402-5.789-0.863-5.279-3.836l2.517-14.66c0.201-1.181-0.188-2.385-1.047-3.221L1.104,25.701c-2.16-2.104-0.968-5.771,2.016-6.205l14.721-2.139c1.186-0.172,2.209-0.917,2.74-1.991l6.582-13.339C27.829,0.676,29.126,0,30.423,0l0.002,50.461C29.843,50.46,29.261,50.6,28.731,50.878"/><path class="sr-outline" fill="#FBB040" d="M30.423,2c0.307,0,1.063,0.089,1.471,0.913l6.582,13.339c0.822,1.664,2.408,2.817,4.246,3.084l14.721,2.139c0.908,0.132,1.228,0.824,1.322,1.115c0.094,0.291,0.242,1.038-0.414,1.679L47.698,34.652c-1.33,1.295-1.936,3.16-1.623,4.99l2.517,14.662c0.106,0.622-0.131,1.061-0.349,1.318c-0.319,0.378-0.793,0.604-1.266,0.604c-0.26,0-0.516-0.066-0.764-0.197l-13.166-6.922c-0.807-0.422-1.713-0.646-2.625-0.646c-0.908,0-1.816,0.225-2.623,0.646l-13.166,6.922c-0.248,0.131-0.504,0.197-0.764,0.197c-0.473,0-0.947-0.226-1.264-0.604c-0.22-0.258-0.455-0.696-0.351-1.318l2.517-14.662c0.313-1.83-0.293-3.695-1.621-4.99L2.499,24.269c-0.658-0.641-0.51-1.388-0.416-1.679c0.096-0.291,0.414-0.983,1.322-1.115l14.721-2.139c1.838-0.267,3.424-1.42,4.246-3.084l6.582-13.339C29.362,2.089,30.118,2,30.423,2 M30.423,0c-1.297,0-2.594,0.676-3.262,2.027l-6.582,13.339c-0.531,1.074-1.555,1.819-2.74,1.99l-14.721,2.14c-2.984,0.434-4.174,4.101-2.016,6.205l10.651,10.383c0.856,0.836,1.248,2.04,1.045,3.221l-2.515,14.66c-0.403,2.352,1.466,4.262,3.584,4.262c0.562,0,1.138-0.134,1.695-0.426l13.166-6.923c0.529-0.278,1.109-0.417,1.691-0.417s1.164,0.139,1.693,0.417l13.166,6.923c0.559,0.293,1.135,0.426,1.694,0.426c2.119,0,3.988-1.91,3.584-4.262l-2.514-14.66c-0.203-1.181,0.188-2.385,1.045-3.221l10.651-10.383c2.16-2.104,0.97-5.771-2.016-6.205l-14.721-2.14c-1.186-0.171-2.211-0.916-2.738-1.99L33.683,2.027C33.019,0.676,31.722,0,30.423,0"/>',full:'<path class="sr-fill" fill="#F0C419" d="M46.976,57.227c-0.422,0-0.834-0.104-1.228-0.312l-13.167-6.921c-0.663-0.349-1.409-0.533-2.158-0.533s-1.495,0.185-2.158,0.533L15.1,56.915c-0.393,0.208-0.807,0.312-1.229,0.312c-0.765,0-1.524-0.358-2.03-0.958c-0.501-0.595-0.703-1.353-0.569-2.134l2.515-14.661c0.258-1.505-0.241-3.039-1.334-4.105L1.8,24.985c-0.736-0.717-0.985-1.728-0.668-2.704c0.318-0.977,1.114-1.649,2.13-1.796l14.72-2.139c1.512-0.22,2.817-1.168,3.493-2.537L28.059,2.47C28.513,1.55,29.396,1,30.423,1c1.027,0,1.911,0.55,2.365,1.471l6.584,13.339c0.676,1.369,1.98,2.317,3.492,2.537l14.721,2.139c1.016,0.147,1.813,0.819,2.129,1.795c0.317,0.977,0.068,1.988-0.668,2.705L48.394,35.369c-1.092,1.065-1.59,2.6-1.334,4.105l2.516,14.661c0.134,0.781-0.068,1.539-0.569,2.134C48.5,56.869,47.743,57.227,46.976,57.227"/><path class="sr-outline" fill="#FBB040" d="M30.423,2c0.306,0,1.063,0.089,1.469,0.913l6.584,13.339c0.821,1.664,2.407,2.817,4.244,3.084l14.721,2.139c0.91,0.132,1.228,0.824,1.322,1.115c0.096,0.291,0.243,1.038-0.414,1.679L47.697,34.652c-1.329,1.295-1.936,3.161-1.621,4.991l2.515,14.661c0.106,0.623-0.131,1.061-0.349,1.319c-0.318,0.378-0.791,0.604-1.266,0.604c-0.259,0-0.515-0.067-0.763-0.197l-13.166-6.922c-0.806-0.423-1.713-0.647-2.624-0.647c-0.911,0-1.818,0.224-2.624,0.647L14.633,56.03c-0.248,0.13-0.504,0.197-0.763,0.197c-0.474,0-0.948-0.226-1.266-0.604c-0.218-0.258-0.454-0.696-0.348-1.319l2.515-14.661c0.314-1.83-0.292-3.696-1.621-4.991L2.5,24.269c-0.659-0.641-0.51-1.388-0.415-1.679c0.095-0.291,0.413-0.983,1.322-1.115l14.721-2.139c1.837-0.267,3.423-1.42,4.245-3.084l6.583-13.339C29.361,2.089,30.118,2,30.423,2 M30.423,0c-1.297,0-2.595,0.676-3.262,2.027l-6.584,13.339c-0.53,1.074-1.554,1.819-2.739,1.99l-14.72,2.14c-2.984,0.434-4.175,4.101-2.016,6.205l10.652,10.383c0.857,0.836,1.248,2.04,1.045,3.221l-2.514,14.66c-0.403,2.351,1.465,4.262,3.585,4.262c0.559,0,1.136-0.134,1.694-0.426l13.166-6.923c0.53-0.278,1.111-0.417,1.693-0.417s1.163,0.139,1.693,0.417l13.166,6.923c0.558,0.293,1.135,0.426,1.693,0.426c2.121,0,3.988-1.911,3.586-4.262l-2.515-14.66c-0.202-1.181,0.188-2.385,1.045-3.221l10.652-10.383c2.159-2.104,0.968-5.771-2.017-6.205l-14.72-2.14c-1.185-0.171-2.21-0.916-2.739-1.99L33.687,2.027C33.019,0.676,31.72,0,30.423,0"/>'},style2:{viewbox:"-4 -4 60 60",empty:'<path class="sr-outline" fill="#D3DADF" d="M27.999,2.318l5.307,15.909c0.52,1.562,1.977,2.621,3.623,2.633l16.77,0.13l-13.49,9.962c-1.324,0.979-1.881,2.691-1.385,4.261l5.059,15.988L30.239,41.45c-0.658-0.471-1.432-0.719-2.24-0.719s-1.584,0.248-2.24,0.719l-13.643,9.751l5.059-15.988c0.496-1.569-0.061-3.282-1.385-4.261L2.3,20.99l16.77-0.13c1.646-0.012,3.104-1.071,3.623-2.633L27.999,2.318 M27.999,0c-0.738,0-1.477,0.422-1.758,1.266l-5.445,16.328c-0.25,0.751-0.951,1.26-1.742,1.266L1.843,18.993c-1.781,0.015-2.52,2.285-1.086,3.343l13.846,10.226c0.637,0.469,0.904,1.293,0.666,2.047l-5.193,16.412c-0.41,1.295,0.619,2.418,1.773,2.418c0.357,0,0.727-0.107,1.07-0.353l14.004-10.009c0.32-0.23,0.699-0.346,1.076-0.346s0.756,0.115,1.076,0.346l14.004,10.009c0.344,0.245,0.713,0.353,1.07,0.353c1.154,0,2.182-1.125,1.773-2.418l-5.193-16.412c-0.238-0.754,0.029-1.578,0.666-2.047l13.846-10.226c1.434-1.058,0.695-3.328-1.086-3.343L36.944,18.86c-0.791-0.006-1.492-0.515-1.742-1.266L29.757,1.266C29.476,0.422,28.737,0,27.999,0"/><path class="sr-background" fill="transparent" d="M17.178,35.213L12.12,51.202l13.644-9.752c0.656-0.47,1.432-0.719,2.239-0.719\tc0.809,0,1.583,0.249,2.24,0.719l13.644,9.752l-5.059-15.988c-0.497-1.57,0.06-3.282,1.384-4.262l13.49-9.961L36.933,20.86\tc-1.647-0.012-3.104-1.07-3.624-2.633L28.002,2.318l-5.306,15.909c-0.521,1.563-1.977,2.621-3.624,2.633L2.304,20.991l13.489,9.961\tC17.119,31.931,17.675,33.643,17.178,35.213z"/>',half:'<path class="sr-outline" fill="#D3DADF" d="M27.999,2.318l5.307,15.909c0.52,1.562,1.977,2.621,3.623,2.633l16.77,0.13l-13.49,9.962c-1.324,0.979-1.881,2.691-1.385,4.261l5.059,15.988L30.239,41.45c-0.658-0.471-1.432-0.719-2.24-0.719s-1.584,0.248-2.24,0.719l-13.643,9.751l5.059-15.988c0.496-1.569-0.061-3.282-1.385-4.261L2.3,20.99l16.77-0.13c1.646-0.012,3.104-1.071,3.623-2.633L27.999,2.318 M27.999,0c-0.738,0-1.477,0.422-1.758,1.266l-5.445,16.328c-0.25,0.751-0.951,1.26-1.742,1.266L1.843,18.993c-1.781,0.015-2.52,2.285-1.086,3.343l13.846,10.226c0.637,0.469,0.904,1.293,0.666,2.047l-5.193,16.412c-0.41,1.295,0.619,2.418,1.773,2.418c0.357,0,0.727-0.107,1.07-0.353l14.004-10.009c0.32-0.23,0.699-0.346,1.076-0.346s0.756,0.115,1.076,0.346l14.004,10.009c0.344,0.245,0.713,0.353,1.07,0.353c1.154,0,2.182-1.125,1.773-2.418l-5.193-16.412c-0.238-0.754,0.029-1.578,0.666-2.047l13.846-10.226c1.434-1.058,0.695-3.328-1.086-3.343L36.944,18.86c-0.791-0.006-1.492-0.515-1.742-1.266L29.757,1.266C29.476,0.422,28.737,0,27.999,0"/><path class="sr-background" fill="transparent" d="M17.178,35.213L12.12,51.202l13.644-9.752c0.656-0.47,1.432-0.719,2.239-0.719\tc0.809,0,1.583,0.249,2.24,0.719l13.644,9.752l-5.059-15.988c-0.497-1.57,0.06-3.282,1.384-4.262l13.49-9.961L36.933,20.86\tc-1.647-0.012-3.104-1.07-3.624-2.633L28.002,2.318l-5.306,15.909c-0.521,1.563-1.977,2.621-3.624,2.633L2.304,20.991l13.489,9.961\tC17.119,31.931,17.675,33.643,17.178,35.213z"/><path class="sr-fill" fill="#EFC319" d="M26.242,1.265l-5.445,16.329c-0.251,0.751-0.951,1.26-1.743,1.266L1.841,18.993c-1.78,0.015-2.518,2.285-1.086,3.343l13.846,10.225c0.638,0.471,0.905,1.293,0.666,2.049l-5.191,16.41c-0.537,1.697,1.395,3.102,2.844,2.066l14.002-10.009c0.32-0.229,0.694-0.343,1.069-0.345V0C27.255,0.003,26.522,0.424,26.242,1.265z"/>',full:'<path class="sr-fill" fill="#EFC319" d="M26.921,43.078L12.919,53.086c-1.449,1.035-3.381-0.369-2.844-2.066l5.191-16.41c0.239-0.756-0.028-1.578-0.666-2.049L0.755,22.336c-1.432-1.058-0.694-3.328,1.086-3.343l17.212-0.133c0.792-0.006,1.492-0.515,1.743-1.266l5.445-16.329c0.563-1.688,2.95-1.688,3.514,0l5.446,16.329c0.251,0.751,0.95,1.26,1.742,1.266l17.212,0.133c1.78,0.015,2.518,2.285,1.087,3.343L41.396,32.561c-0.638,0.471-0.904,1.293-0.666,2.049l5.191,16.41c0.538,1.697-1.396,3.102-2.843,2.066L29.076,43.078C28.431,42.617,27.566,42.617,26.921,43.078"/>'},style3:{viewbox:"-6 -6 80 80",empty:'<path class="def-shadow" fill="#B9C1C5" d="M14.874,40.174c0.101-0.583-0.094-1.178-0.518-1.591L0.544,25.12\tc-0.121-0.118-0.214-0.248-0.293-0.382c-0.308,0.541-0.339,1.225,0,1.798c-0.308,0.54-0.339,1.224,0,1.797\tc-0.38,0.667-0.344,1.559,0.293,2.18l13.696,13.35L14.874,40.174z"/><path class="def-shadow" fill="#B9C1C5" d="M50.038,61.079l-17.071-8.976c-0.524-0.275-1.149-0.275-1.674,0l-17.071,8.976\tc-0.98,0.514-2.079,0.027-2.478-0.858l-0.13,0.76c-0.065,0.378-0.008,0.73,0.13,1.038l-0.13,0.76\tc-0.065,0.377-0.008,0.73,0.13,1.037l-0.13,0.76c-0.252,1.469,1.289,2.589,2.608,1.896l17.071-8.976\tc0.524-0.275,1.149-0.275,1.674,0l17.071,8.976c1.318,0.693,2.86-0.427,2.608-1.896l-0.13-0.76c0.138-0.307,0.195-0.659,0.13-1.037\tl-0.13-0.761c0.138-0.307,0.195-0.659,0.13-1.037l-0.13-0.761C52.116,61.106,51.017,61.593,50.038,61.079z"/><path class="def-shadow" fill="#B9C1C5" d="M64.008,24.738c-0.079,0.134-0.172,0.264-0.293,0.382L49.903,38.583\tc-0.424,0.413-0.617,1.008-0.517,1.591l0.632,3.688l13.696-13.349c0.637-0.621,0.673-1.513,0.293-2.18\tc0.339-0.573,0.308-1.257,0-1.797C64.347,25.962,64.316,25.278,64.008,24.738z"/><path class="sr-background" fill="#D3DADF" d="M49.386,40.174c-0.101-0.583,0.093-1.178,0.517-1.591L63.714,25.12\tc0.121-0.118,0.214-0.248,0.293-0.382c0.622-1.05,0.017-2.495-1.29-2.684L43.63,19.28c-0.586-0.085-1.092-0.453-1.354-0.983\tL33.742,1.001c-0.66-1.335-2.564-1.335-3.224,0l-8.537,17.296c-0.261,0.53-0.767,0.898-1.354,0.983L1.542,22.054\tc-1.308,0.189-1.912,1.634-1.291,2.684c0.079,0.134,0.173,0.265,0.293,0.382l13.812,13.463c0.424,0.413,0.618,1.008,0.518,1.591\tl-0.633,3.688l-2.628,15.321c-0.065,0.378-0.008,0.73,0.13,1.038c0.399,0.885,1.498,1.372,2.478,0.858l17.071-8.976\tc0.524-0.275,1.149-0.275,1.674,0l17.071,8.976c0.979,0.514,2.079,0.027,2.478-0.858c0.138-0.307,0.195-0.659,0.13-1.037\tl-2.627-15.322L49.386,40.174z"/>',half:'<path class="sr-outline" fill="#F2A261" d="M31.163,55.698C31.425,55.561,32,55.492,32,55.492v-1.797c0,0-0.575,0.069-0.837,0.207\tC31.425,53.764,32,53.694,32,53.694v-1.797c0,0-0.51,0.069-0.772,0.207l-17.04,8.975c-0.979,0.515-2.062,0.028-2.461-0.857\tl-0.123,0.76c-0.065,0.378-0.003,0.73,0.135,1.038l-0.128,0.76c-0.065,0.377-0.007,0.73,0.131,1.037l-0.13,0.76\tc-0.252,1.469,1.289,2.589,2.607,1.896l17.073-8.976c0.262-0.138,0.485-0.206,0.772-0.206l-0.065,0v-1.797\tC32,55.492,31.425,55.561,31.163,55.698z"/><path class="sr-outline" fill="#F2A261" d="M14.874,40.174c0.1-0.583-0.094-1.178-0.519-1.591L0.545,25.12\tc-0.121-0.118-0.214-0.248-0.294-0.382c-0.308,0.541-0.339,1.225,0,1.798c-0.308,0.54-0.339,1.224,0,1.797\tc-0.38,0.667-0.344,1.559,0.294,2.18l13.696,13.351L14.874,40.174z"/><path class="def-shadow" fill="#B9C1C5" d="M64.008,24.737c-0.08,0.135-0.173,0.265-0.294,0.383L49.903,38.583\tc-0.425,0.413-0.617,1.008-0.518,1.591l0.632,3.688l13.696-13.35c0.638-0.621,0.674-1.513,0.294-2.18\tc0.34-0.573,0.308-1.257,0-1.797C64.348,25.962,64.316,25.278,64.008,24.737z"/><path class="def-shadow" fill="#B9C1C5" d="M50.038,61.079l-17.137-8.976C32.639,51.966,32,51.897,32,51.897v1.797c0,0-0.575,0.069-0.837,0.207\tC31.425,53.764,32,53.695,32,53.695v1.797c0,0-0.575,0.068-0.837,0.206C31.425,55.561,32,55.492,32,55.492v1.797\tc0,0,0.639,0.069,0.901,0.207l17.105,8.976c1.317,0.693,2.875-0.427,2.624-1.896l-0.123-0.76c0.138-0.307,0.2-0.659,0.135-1.037\tl-0.128-0.761c0.138-0.307,0.196-0.659,0.131-1.037l-0.13-0.761C52.115,61.106,51.017,61.593,50.038,61.079z"/><path class="sr-background" fill="#D3DADF" d="M49.386,40.174c-0.1-0.583,0.093-1.178,0.518-1.591L63.714,25.12\tc0.121-0.118,0.215-0.248,0.294-0.383c0.622-1.05,0.017-2.494-1.291-2.684L43.631,19.28c-0.586-0.085-1.092-0.453-1.354-0.983\tL33.742,1.001c-0.413-0.834-1.376-1.147-2.153-0.938C31.744,0.021,32,0,32,0v51.896c0,0-0.51,0.069-0.772,0.207\tc0.262-0.138,0.583-0.207,0.87-0.207s0.59,0.069,0.852,0.207l17.08,8.976c0.979,0.514,2.082,0.027,2.481-0.858\tc0.138-0.307,0.197-0.659,0.132-1.037l-2.626-15.321L49.386,40.174z"/><path class="sr-fill" fill="#EFC319" d="M14.221,61.078l17.007-8.975C31.49,51.966,32,51.896,32,51.896V0c0,0-0.256,0.021-0.411,0.063\tc-0.466,0.125-0.856,0.438-1.104,0.938l-8.521,17.296c-0.261,0.53-0.758,0.898-1.344,0.983L1.538,22.054\tc-1.308,0.189-1.911,1.634-1.289,2.684c0.08,0.134,0.174,0.265,0.295,0.382l13.811,13.463c0.425,0.413,0.618,1.008,0.519,1.591\tl-0.632,3.689l-2.628,15.32c-0.065,0.378-0.008,0.73,0.13,1.038C12.143,61.106,13.242,61.593,14.221,61.078z"/>',full:'<path class="sr-outline" fill="#F2A261" d="M14.874,40.174c0.1-0.583-0.094-1.178-0.518-1.591L0.544,25.12\tc-0.121-0.118-0.214-0.248-0.294-0.382c-0.308,0.541-0.339,1.225,0,1.798c-0.308,0.54-0.339,1.224,0,1.797\tc-0.38,0.667-0.344,1.559,0.293,2.18l13.696,13.35L14.874,40.174z"/><path class="sr-outline" fill="#F2A261" d="M50.037,61.078l-17.071-8.975c-0.524-0.275-1.149-0.275-1.674,0L14.22,61.078\tc-0.979,0.515-2.079,0.028-2.478-0.857l-0.13,0.76c-0.065,0.378-0.008,0.73,0.13,1.037l-0.13,0.761\tc-0.065,0.377-0.008,0.73,0.13,1.037l-0.13,0.76c-0.252,1.469,1.289,2.589,2.608,1.896l17.072-8.976\tc0.524-0.275,1.149-0.275,1.674,0l17.071,8.976c1.318,0.693,2.86-0.427,2.608-1.896l-0.13-0.76c0.138-0.307,0.195-0.659,0.13-1.037\tl-0.13-0.761c0.138-0.307,0.195-0.659,0.13-1.037l-0.13-0.761C52.116,61.106,51.016,61.593,50.037,61.078z"/><path class="sr-outline" fill="#F2A261" d="M64.008,24.738c-0.08,0.134-0.173,0.264-0.294,0.382L49.902,38.583\tc-0.424,0.413-0.617,1.008-0.517,1.591l0.632,3.688l13.696-13.349c0.637-0.621,0.674-1.513,0.293-2.18\tc0.339-0.573,0.308-1.257,0-1.797C64.347,25.962,64.315,25.278,64.008,24.738z"/><path class="sr-fill" fill="#EFC319" d="M49.386,40.174c-0.101-0.583,0.093-1.178,0.517-1.591L63.714,25.12\tc0.121-0.118,0.214-0.248,0.294-0.382c0.621-1.05,0.017-2.495-1.29-2.684L43.631,19.28c-0.586-0.085-1.093-0.453-1.354-0.983\tL33.741,1.001c-0.66-1.335-2.564-1.335-3.224,0L21.98,18.297c-0.261,0.53-0.767,0.898-1.353,0.983L1.542,22.054\tc-1.308,0.189-1.913,1.634-1.291,2.684c0.08,0.134,0.173,0.264,0.294,0.382l13.811,13.463c0.424,0.413,0.618,1.008,0.518,1.591\tl-0.633,3.689l-2.628,15.321c-0.065,0.378-0.008,0.73,0.13,1.038c0.399,0.885,1.498,1.372,2.478,0.857l17.072-8.975\tc0.524-0.275,1.149-0.275,1.674,0l17.071,8.975c0.979,0.515,2.079,0.028,2.478-0.857c0.138-0.307,0.195-0.659,0.13-1.037\tl-2.627-15.322L49.386,40.174z"/>'},style4:{viewbox:"-6 -6 68 68",empty:'<path class="sr-background" fill="#D3DADF" d="M29.322,0C13.127,0,0,13.129,0,29.323c0,16.195,13.127,29.323,29.322,29.323s29.324-13.128,29.324-29.323C58.646,13.129,45.518,0,29.322,0 M46.717,26.696l-7.082,6.902c-0.346,0.337-0.504,0.822-0.422,1.298l1.672,9.747c0.205,1.199-1.051,2.111-2.127,1.546l-8.754-4.602c-0.426-0.225-0.936-0.225-1.363,0l-8.754,4.602c-1.074,0.565-2.334-0.347-2.127-1.546l1.672-9.747c0.08-0.476-0.076-0.961-0.422-1.298l-7.082-6.902c-0.869-0.849-0.391-2.326,0.813-2.501l9.787-1.422c0.477-0.069,0.891-0.369,1.104-0.802l4.377-8.868c0.537-1.09,2.092-1.09,2.629,0l4.377,8.868c0.215,0.433,0.627,0.732,1.104,0.802l9.787,1.422C47.107,24.37,47.586,25.848,46.717,26.696"/>',half:'<path class="sr-background" fill="#D3DADF" d="M29.322,0C13.127,0,0,13.129,0,29.323c0,16.195,13.127,29.323,29.322,29.323s29.324-13.128,29.324-29.323C58.646,13.129,45.518,0,29.322,0 M46.717,26.696l-7.082,6.902c-0.346,0.337-0.504,0.822-0.422,1.298l1.672,9.747c0.205,1.199-1.051,2.111-2.127,1.546l-8.754-4.602c-0.426-0.225-0.936-0.225-1.363,0l-8.754,4.602c-1.074,0.565-2.334-0.347-2.127-1.546l1.672-9.747c0.08-0.476-0.076-0.961-0.422-1.298l-7.082-6.902c-0.869-0.849-0.391-2.326,0.813-2.501l9.787-1.422c0.477-0.069,0.891-0.369,1.104-0.802l4.377-8.868c0.537-1.09,2.092-1.09,2.629,0l4.377,8.868c0.215,0.433,0.627,0.732,1.104,0.802l9.787,1.422C47.107,24.37,47.586,25.848,46.717,26.696"/><path class="sr-fill" fill="#EFC319" d="M29.324,41.419c-0.236,0-0.469,0.056-0.684,0.169l-8.754,4.602c-1.074,0.565-2.332-0.348-2.127-1.546l1.672-9.747c0.082-0.476-0.076-0.961-0.422-1.298l-7.082-6.902c-0.869-0.849-0.389-2.326,0.814-2.501l9.785-1.423c0.479-0.068,0.891-0.368,1.104-0.801l4.377-8.868c0.27-0.545,0.791-0.817,1.314-0.817L29.324,0C13.129,0,0,13.129,0,29.323c0,16.195,13.129,29.323,29.324,29.323V41.419z"/>',full:'<path class="sr-fill" fill="#EFC319" d="M29.322,0C13.128,0,0,13.129,0,29.323c0,16.195,13.128,29.323,29.322,29.323c16.195,0,29.324-13.128,29.324-29.323C58.646,13.129,45.517,0,29.322,0 M46.717,26.696l-7.082,6.902c-0.345,0.337-0.503,0.822-0.421,1.298l1.671,9.747c0.206,1.199-1.051,2.111-2.127,1.546l-8.753-4.602c-0.427-0.225-0.938-0.225-1.365,0l-8.753,4.602c-1.075,0.565-2.333-0.347-2.127-1.546l1.672-9.747c0.081-0.476-0.076-0.961-0.422-1.298l-7.082-6.902c-0.87-0.849-0.39-2.326,0.813-2.501l9.787-1.422c0.477-0.069,0.89-0.369,1.104-0.802l4.376-8.868c0.538-1.09,2.092-1.09,2.629,0l4.377,8.868c0.214,0.433,0.626,0.732,1.104,0.802l9.786,1.422C47.107,24.37,47.587,25.848,46.717,26.696"/>'}},updateProgressBar:function(e){i(".tcb-custom-field-source .tve_progress_bar_fill_wrapper").each(function(){var t=i(this);e&&!t.attr("data-post-list")?(t.css({width:""}),t.head_css({width:t.attr("data-fill")+"%"})):t.css({width:t.attr("data-fill")+"%"})})},updateFillCounter:function(c){i(".tcb-custom-field-source .tve_fill_counter_n").each(function(){var t=i(this),e=t.find(".tve_fill_text");d.applyFill(t,t[0].dataset.fill,c),e.find(".tve-fill-text-dynamic").length&&e.html('<div class="tve-fill-text-dynamic" '.concat(c?' contenteditable="false"':"",">").concat(t[0].dataset.fill,"%</div>"))})},applyFill:function(t,e,c){var a=Number(e),l=t.find(".tve_fill_counter_circle circle").attr("r"),o=Math.PI*(2*l);t.attr("data-fill",a),a<0&&(a=0),100<a&&(a=100);var i=a/100*o;c&&!t.attr("data-post-list")?(t.css({"stroke-dasharray":""}),t.head_css({"stroke-dasharray":i+" "+o})):t.css({"stroke-dasharray":i+" "+o})},countdownTimer:function(e){i(".tcb-custom-field-source.thrv_countdown_timer").each(function(){e&&TVE.Components.countdown_old.compute_time_until(i(this),this.dataset.date,this.dataset.hour,this.dataset.min,!1)}),i(".tcb-custom-field-source.tve-countdown").each(function(){var t=i(this);e?TVE.Components.countdown.updateElement(t):this.classList.contains("expired")&&(t.removeClass("expired").removeData("tcb.countdown"),new TCB_Front.Countdown(t,!1))})},hidePlaceholderElements:function(t){if(!t){var c=i(".tcb-custom-field-source");i(".dynamic-source").filter("[data-c-f-hidden=1]").closest(".tcb-video-background-parent").hide(),c.filter("[data-c-f-hidden=1]").hide(),[".tve_progress_bar_fill_wrapper",".tve_fill_counter_n","iframe"].forEach(function(t){c.find(t).filter("[data-c-f-hidden=1]").hide()}),i.each({".tcb-responsive-video":".thrv_responsive_video",audio:".thrv_audio",img:".tve_image_caption"},function(e,t){c.filter(t).each(function(){var t=i(this);0===t.find(e).length&&t.hide()})})}},updateAnimationElement:function(t,e){var c=i(t);c.find(e).attr("data-tcb-events",c.attr("data-tcb-events")),c.attr("data-tcb-events",""),tve_frontend_options.is_editor_page||TCB_Front.event_triggers(c)},updateAnimations:function(t){var c=i(".tcb-custom-field-source"),e=i(".tcb-dynamic-field-source"),a=this;i.each({".thrv_responsive_video":".tcb-responsive-video",".thrv_audio":"audio",".tve_image_caption":"img"},function(t,e){c.filter(t).each(function(){a.updateAnimationElement(this,e)})}),e.each(function(){a.updateAnimationElement(this,"img")})},updateVideos:function(o){i(".tcb-custom-field-source.thrv_responsive_video").each(function(t,e){var c=i(e),a=c.find(".tcb-responsive-video"),l=a.attr("data-c-f-id");c.attr("data-type")!==a.attr("data-provider")&&(!c.attr("data-placeholder-el")&&"0"!==a.attr("data-id")||c.attr("data-placeholder-el")&&"Placeholder"!==a.attr("data-title"))&&(c.attr("data-url",a.attr("data-src")),c.attr("data-type",a.attr("data-provider")),o?(TVE.Components.responsivevideo.controls.responsive_video.activeElement=c,TVE.PostList.utils.isInsidePostList(c)?(TVE.page_message(TVE.t.invalidVideo,!0),c.attr("data-url",""),c.attr("data-type","external"),TVE.Components.responsivevideo.controls.ExternalFields.elements.responsivevideo.customFieldInput(c,"",null,!0)):(TVE.Components.responsivevideo.controls.ExternalFields.elements.responsivevideo.customFieldInput(c,l,null,!0),c.find(".tcb-responsive-video").attr("data-c-f-id",l)),c.find(".tcb-responsive-video").attr("data-c-f-id",l)):("vimeo"!==c.attr("data-type")||c.attr("data-url").includes(a.attr("data-code"))||d.frontendVideoFunctions(c,c.attr("data-url")?c.attr("data-url"):""),a.closest("article").length&&(c.attr("data-url",""),c.attr("data-type","external"),c[0].innerHTML='<div class="tve_responsive_video_container" style="padding-bottom: 56.25%;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="tcb-video-float-container">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="video_overlay"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<video style="width: 100%;" class="tcb-responsive-video" controlslist="nodownload" data-c-f-id="'.concat(a.attr("data-c-f-id"),'" data-title="Placeholder" data-id="">\n\t\t\t\t\t\t\t\t\t\t\t\t\t           \t\t\t<source src="" type="video/mp4">\n\t\t\t\t\t\t\t\t\t\t\t\t\t           \t\t</video>\n\t\t\t\t\t\t\t\t\t\t\t\t                </div>\n\t\t\t\t\t\t\t\t\t\t\t\t             <div>')))),a=c.find(".tcb-responsive-video"),"vooplayer"===c.attr("data-type")&&"vooplayer"!==a.attr("data-provider")&&c.find(".tve_responsive_video_container").html(a),"vooplayer"===c.attr("data-type")&&r.changeVooOnPlay(c)})},videoRegex:function(t,e){var c=!1,a=!1;switch(e){case"youtube":(c=!!t.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|(youtube-nocookie|youtube)\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/)&&RegExp.$1)||(c=!!t.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|(youtube-nocookie|youtube)\.com\/(?:embed\/|list\/|playlist\?list=|playlist\?.+&list=))((\w|-){34})(?:\S+)?$/)&&RegExp.$1,a=!0);break;case"vimeo":c=t.match(/(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/)?RegExp.$4:!!t.match(new RegExp("https?://(.+)?player.vimeo.com/video/(.+?)\\?"))&&RegExp.$2;break;case"wistia":c=t.match(new RegExp("https?://(.+)?(wistia.com|wi.st)/(medias|embed)/(.+)"))?RegExp.$4:!!t.match(new RegExp("https?://(.+)?fast.wistia.net/embed/(.+?)/(.+)"))&&RegExp.$3;break;case"vooplayer":c=!!t.match(new RegExp("https?://(.+).(cdn.(vooplayer|spotlightr).com)/(publish|watch)/(.+)"))&&RegExp.$5}return{url:t,id:c,isPlaylist:a}},queryString:function(t,e){var c,a="?";switch(e){case"youtube":a+=(c=["rel="+(t.attr("data-rel")||"1"),"modestbranding="+(t.attr("data-modestbranding")||"0"),"controls="+(t.attr("data-controls")||"1"),"showinfo="+(t.attr("data-showinfo")||"1"),"fs="+(t.attr("data-fs")||"1"),"wmode=transparent"]).join("&");break;case"wistia":c=["chromeless=false","controlsVisibleOnLoad="+("0"!==t.attr("data-onload-controls")),"playbar="+("0"!==t.attr("data-play-bar")),"fullscreenButton="+("0"!==t.attr("data-fs")),"playerColor="+(t.attr("data-video-color")||"fff"),"videoFoam=true"],"popover"===t.attr("data-embed_type")?(c.push("popover=true popoverAnimateThumbnail=true"),a+=c.join(" ")):a+=c.join("&");break;case"vimeo":a+=(c=["portrait="+(t.attr("data-modestbranding")||"1"),"title="+(t.attr("data-showinfo")||"1"),"color="+(t.attr("data-video-color")||"fff"),"byline="+(t.attr("data-byline")||"1"),"autopause=0"]).join("&");break;case"external":case"custom":a="",void 0!==t.attr("data-controls")&&"1"!==t.attr("data-controls")||(a+=' controls="controls" '),void 0!==t.attr("data-loop")&&"1"===t.attr("data-loop")&&(a+=" loop "),void 0!==t.attr("data-no-download")&&"1"===t.attr("data-no-download")&&(a+=' controlsList="nodownload" ');break;case"vooplayer":default:a=""}return a},getEmbedCode:function(t,e,c,a){var l=t.id&&l?l:a.find(".tcb-responsive-video").attr("data-code");switch(c){case"external":return'<video  style="width: 100%;" playsinline class="tcb-responsive-video" data-title="ACF Video" data-id="123" '.concat(e," >")+'<source src="'.concat(t.url,'" type="<#= attachment.mime #>">')+"</video>";case"youtube":var o="1"===a.attr("data-no-cookie")?"youtube-nocookie":"youtube";return t.isPlaylist?'<iframe title="Responsive Video" class="tcb-responsive-video" data-code="'.concat(l,'" data-provider="').concat(c,'" src="https://www.youtube.com/embed?listType=playlist&list=').concat(l+e,'" data-src="https://www.').concat(o,".com/embed?listType=playlist&list=").concat(l+e,'" frameborder="0" allowfullscreen></iframe>'):'<iframe title="Responsive Video" class="tcb-responsive-video" data-code="'.concat(l,'" data-provider="').concat(c,'" src="https://www.youtube.com/embed/').concat(l+e,'" data-src="https://www.').concat(o,".com/embed/").concat(l+e,'" frameborder="0" allowfullscreen></iframe>');case"vimeo":return'<iframe title="Responsive Video" class="tcb-responsive-video" data-code="'.concat(l,'" data-provider="').concat(c,'" src="https://player.vimeo.com/video/').concat(l+e,'" data-src="https://player.vimeo.com/video/').concat(l+e,'" frameborder="0" allowfullscreen></iframe>');case"wistia":return'<iframe title="Responsive Video" class="tcb-responsive-video" data-code="'.concat(l,'" data-provider="').concat(c,'" src="https://fast.wistia.net/embed/iframe/').concat(l+e,'" data-src="https://fast.wistia.net/embed/iframe/').concat(l+e,'" frameborder="0" allowfullscreen></iframe>');case"vooplayer":return'<iframe title="Responsive Video" allow="autoplay" data-code="'.concat(l,'" data-provider="').concat(c,'" class="tcb-responsive-video video-player-container vooplayer" data-playerId="').concat(l,'" url-params="" allowtransparency="true"  name="vooplayerframe" frameborder="0" allowfullscreen="true" scrolling="no" src="" style="max-width: 100%; position:relative; opacity: 1; min-width: 100%; height:100% !important; width: auto; top: auto;"> </iframe>')}},clearVideoEl:function(t){t.removeClass("tcb-elem-placeholder"),t.find(".tve_responsive_video_container").removeAttr("style"),t.find(".tcb-inline-placeholder-action, .tve_responsive_video-no_video, iframe, video, script, .wistia_embed, .voo-id.video-skin-player").remove()},frontendVideoFunctions:function(t,e){var c,a=t.attr("data-type");c=d.videoRegex(e,a);var l=d.getEmbedCode(c,d.queryString(t,a),a,t),o=t.find("[data-c-f-id]").attr("data-c-f-id"),i=t.find(".tve_responsive_video_container"),r=t.find(".tcb-video-float-container");d.clearVideoEl(t),l?(i.append(l),0<r.length&&0===r.find("iframe, video").length&&r.prepend(t.find("iframe, video")[0]),"function"==typeof window.initVooPlayer&&window.initVooPlayer(),t.find(".tcb-responsive-video").attr("data-c-f-id",o)):i.append('<div class="tve_responsive_video-no_video"><div class="thrv_wrapper thrv_icon tcb-icon-display"><svg id="tcb-icon" viewBox="0 0 32 32" data-id="icon-video-player"><path d="M21.224 18.053l-8-4c-0.155-0.077-0.339-0.070-0.486 0.022s-0.237 0.252-0.237 0.425v8c0 0.173 0.090 0.334 0.237 0.425 0.080 0.050 0.171 0.075 0.263 0.075 0.077 0 0.153-0.018 0.224-0.053l8-4c0.169-0.085 0.276-0.258 0.276-0.447s-0.107-0.362-0.276-0.447zM13.5 21.691v-6.382l6.382 3.191-6.382 3.191z"></path><path d="M30 2.5h-28c-1.105 0-2 0.895-2 2v23c0 1.105 0.895 2 2 2h28c1.105 0 2-0.895 2-2v-23c0-1.105-0.895-2-2-2zM31 4.5v4h-4.164l1.34-5h1.825c0.551 0 1 0.449 1 1zM10.64 3.5l-1.339 5h-4.475l1.339-5h4.475zM11.675 3.5h4.465l-1.339 5h-4.465l1.339-5zM17.175 3.5h4.465l-1.34 5h-4.465l1.34-5zM22.675 3.5h4.465l-1.34 5h-4.465l1.34-5zM2 3.5h3.13l-1.339 5h-2.79v-4c0-0.551 0.449-1 1-1zM30 28.5h-28c-0.551 0-1-0.449-1-1v-18h30v18c0 0.551-0.449 1-1 1z"></path></svg></div></div>')},lazyLoadPlaceholders:function(t){t&&i(".tcb-custom-field-source.thrv_responsive_video[data-placeholder-el], .tcb-custom-field-source.thrv_audio[data-placeholder-el] ").each(function(t,e){TVE.PostList.utils.getPlaceholderForElementType(TVE._type(TVE.inner_$(e)),e.dataset.placeholderEl)})},hideEmptyLinks:function(t){t||(i('.thrv_text_element a[data-shortcode-id^="acf_"]').each(function(t,e){var c=i(e);c.attr("href")||c.hide()}),i(".thrv-button").each(function(t,e){var c=i(e),a=c.find('a[data-shortcode-id^="acf_"]');a.attr("href")||(c.hide(),a.hide())}))}};i(window).on("tcb_after_dom_ready",function(){return d.init()}),window.TCB_Front.dynamicElements=d,TCB_Front.setModuleLoadedStatus("acf-dynamic-elements",!0)}}(ThriveGlobal.$j,TCB_Front)}}}}}}})("workspace/editor/js/frontend/modules/acf-dynamic-elements");