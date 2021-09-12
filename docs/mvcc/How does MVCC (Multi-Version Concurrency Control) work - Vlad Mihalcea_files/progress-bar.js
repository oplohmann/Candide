/*! Thrive Architect - 2021-09-01
* http://www.thrivethemes.com/
* Copyright (c) 2021 Thrive Themes */

"use strict";function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(l){var u,f,a,v,b,n={".js":[],".json":[],".css":[],".html":[]},d="function"==typeof require?require:null;return v=function(e){var t=new Error("Could not find module '"+e+"'");return t.code="MODULE_NOT_FOUND",t},b=function(e,t,r){var o,a;if("function"==typeof e[t+r])return t+r;for(o=0;a=n[r][o];++o)if("function"==typeof e[t+a])return t+a;return null},u=function(e,t,r,o,a,n){var s,i,l,d,c,p;for("."!==(s=(r=r.split("/")).pop())&&".."!==s||(r.push(s),s="");null!=(i=r.shift());)if(i&&"."!==i&&(".."===i?(e=t.pop(),n=n.slice(0,n.lastIndexOf("/"))):(t.push(e),e=e[i],n+="/"+i),!e))throw v(o);if(s&&"function"!=typeof e[s]&&((p=(p=(p=(p=b(e,s,".js"))||b(e,s,".json"))||b(e,s,".css"))||b(e,s,".html"))?s=p:2!==a&&"object"===_typeof(e[s])&&(t.push(e),e=e[s],n+="/"+s,s="")),!s)return 1!==a&&e[":mainpath:"]?u(e,t,e[":mainpath:"],o,1,n):u(e,t,"index",o,2,n);if(!(c=e[s]))throw v(o);return c.hasOwnProperty("module")?c.module.exports:(l={},c.module=d={exports:l,id:n+"/"+s},c.call(l,l,d,f(e,t,n)),d.exports)},a=function(e,t,r,o){var a,n=r,s=r.charAt(0),i=0;if("/"===s){if(n=n.slice(1),!(e=l["/"])){if(d)return d(r);throw v(r)}o="/",t=[]}else if("."!==s){if(a=n.split("/",1)[0],!(e=l[a])){if(d)return d(r);throw v(r)}o=a,t=[],(n=n.slice(a.length+1))||(i=(n=e[":mainpath:"])?1:(n="index",2))}return u(e,t,n,r,i,o)},(f=function(t,r,o){return function(e){return a(t,[].concat(r),e,o)}})(l,[],"")}({workspace:{editor:{js:{frontend:{modules:{"progress-bar.js":function(e,t,r){void 0===TCB_Front.js_modules["progress-bar"]&&TCB_Front.setModuleLoadedStatus("progress-bar",!1),function(n,v){if(!TCB_Front.isModuleLoaded("progress-bar")){n(window).on("tcb_after_dom_ready",function(){return o.init(n("body"))});var o={},s=function(e){if(!e)return 0;var t=e.offsetWidth,r=getComputedStyle(e);return t+=parseInt(r.marginLeft)+parseInt(r.marginRight)},a=function(e,t){var r=1<arguments.length&&void 0!==t&&t,o=v.inlineCssVariable(e,"--nodes-completed".concat(r?"-dual":"")),a=parseInt(o),n=o-a,s=e.querySelectorAll(".tve-progress-line--fill".concat(r?"-dual":""));Array.prototype.forEach.call(s,function(e){v.inlineCssVariable(e,_defineProperty({},"--progress".concat(r?"-dual":""),"0%"))});for(var i=0;i<a;i++)s[i]&&v.inlineCssVariable(s[i],_defineProperty({},"--progress".concat(r?"-dual":""),"100%"));if(n&&s[a]&&v.inlineCssVariable(s[a],_defineProperty({},"--progress".concat(r?"-dual":""),"50%")),tve_frontend_options.is_editor_page&&e.classList.contains("thrv_data_element_start")&&(e.classList.remove("thrv_data_element_start"),setTimeout(function(){e.classList.add("thrv_data_element_start")},100)),!r){for(var l=e.querySelectorAll(".tve-progress-node"),d=e.querySelectorAll(".tve-progress-icon"),c=e.querySelectorAll(".tve-progress-label-wrapper--nodes .tve-progress-label"),p=0;p<=l.length;p++)l[p]&&(l[p].classList.remove("tve-state-expanded"),d[p].classList.remove("tve-state-expanded"),c[p].classList.remove("tve-state-expanded"));if(a)for(var u=0;u<=a;u++)l[u]&&(l[u].classList.add("tve-state-expanded"),d[u].classList.add("tve-state-expanded"),c[u].classList.add("tve-state-expanded"));n&&l[a]&&(l[a].classList.add("tve-state-expanded"),d[a].classList.add("tve-state-expanded"),c[a].classList.add("tve-state-expanded"))}},i=function(e,t,r){var o,a=1<arguments.length&&void 0!==t&&t,n=2<arguments.length&&void 0!==r&&r,s=e.getAttribute("data".concat(a?"-dual":"","-field")),i=e.getAttribute("data".concat(a?"-dual":"","-fd")),l=e.getAttribute("data".concat(a?"-dual":"","-value")),d=e.getAttribute("data".concat(a?"-dual":"","-dv")),c=e.querySelectorAll(".tve-progress-label-wrapper--nodes .tve-progress-label").length,p=e.getAttribute("data".concat(a?"-dual":"","-value-shortcode"));if(!a||!["apprentice"].includes(e.dataset.field)){if("request_data"===s){switch(i){case"query":o=v.queryString.get(l);break;case"post":o=tve_frontend_options.post_request_data?tve_frontend_options.post_request_data[l]:0;break;case"cookie":o=v.getCookie(l)}o=o||d}else if("apprentice"===s){try{var u=tve_frontend_options.is_editor_page?{total:n?c:4,completed:n?c/2:2}:JSON.parse(p),f=Number(u.is_current_completed)?u.completed:u.completed+1;if(n)o=u.completed,v.inlineCssVariable(e,{"--nodes-completed-dual":Math.min(f,c)});else{if(!u.total)return void e.remove();o=u.completed/u.total*100,v.inlineCssVariable(e,{"--progress-dual":"".concat(Math.min(f/u.total*100,100),"%")})}}catch(e){}o=o||d}else o=p;o=Number(o),o=isNaN(o)?0:Math.min(o,n?c:100),v.inlineCssVariable(e,_defineProperty({},n?"--nodes-completed".concat(a?"-dual":""):"--progress".concat(a?"-dual":""),"".concat(o).concat(n?"":"%")))}},t=function(e){return(0<arguments.length&&void 0!==e?e:v.$body).find(".tve-progress-bar-wrapper").addBack(".tve-progress-bar-wrapper")};o.handleLabelPosition=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:v.$body;t(e).each(function(e,t){if("nodes"===t.dataset.type)for(var r=t.querySelectorAll(".tve-progress-label-wrapper--nodes .tve-progress-label"),o=t.querySelectorAll(".tve-progress-node"),a=0;a<o.length;a++)r[a].style.setProperty("left","".concat(o[a].offsetLeft+Math.ceil(o[a].offsetWidth/2)-s(r[a])/2,"px")),tve_frontend_options.is_editor_page||r[a].style.setProperty("visibility","visible")})},o.fillNodes=function(e){e.each(function(e,t){a(t),t.classList.contains("with-dual-progress")&&a(t,!0)}),o.toggleLabels(e)},o.handleDynamicValues=function(e){e.hasClass("tve-progress-bar-wrapper")||(e=e.find(".tve-progress-bar-wrapper")),e.filter("[data-field],[data-dual-field]").each(function(e,t){var r=t.classList.contains("with-dual-progress"),o="nodes"===t.dataset.type;i(t,!1,o),r&&i(t,!0,o),o&&(a(t),r&&a(t,!0)),t.dataset.field&&!tve_frontend_options.is_editor_page&&function(e,t){var r="block",o=parseFloat(v.inlineCssVariable(e,t?"--nodes-completed":"--progress"));t&&e.querySelectorAll(".tve-progress-node").length===o&&(o=100);(0===o&&parseInt(e.dataset.hideEmpty)||100===o&&parseInt(e.dataset.hideFull))&&(r="none"),e.style.setProperty("display",r,"important")}(t,o)})},o.toggleLabels=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:v.$body;t(e).each(function(e,t){var r=n(t),o=r.find(".tve-progress-label-wrapper--nodes .tve-progress-label");if("current"===TCB_Front.getMediaAttr(r,"data-label-display")){var a=parseInt(v.inlineCssVariable(r,"--nodes-completed"));o.css("visibility","hidden"),o.eq(a).css("visibility","visible")}else o.css("visibility","visible")})},o.init=function(e){function r(e){var t=0<arguments.length&&void 0!==e?e:v.$body;o.handleLabelPosition(t),o.toggleLabels()}o.handleDynamicValues(t(e)),r(),v.addResizeCallback(function(){r()}),v.$document.on("switchstate",function(e,t){r(t)})},window.TCB_Front.progressBar=o,TCB_Front.setModuleLoadedStatus("progress-bar",!0)}}(ThriveGlobal.$j,TCB_Front)}}}}}}})("workspace/editor/js/frontend/modules/progress-bar");