/*! Thrive Architect - 2021-09-01
* http://www.thrivethemes.com/
* Copyright (c) 2021 Thrive Themes */

"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(n,!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(s){var f,h,a,v,p,i={".js":[],".json":[],".css":[],".html":[]},l="function"==typeof require?require:null;return v=function(t){var e=new Error("Could not find module '"+t+"'");return e.code="MODULE_NOT_FOUND",e},p=function(t,e,n){var o,a;if("function"==typeof t[e+n])return e+n;for(o=0;a=i[n][o];++o)if("function"==typeof t[e+a])return e+a;return null},f=function(t,e,n,o,a,i){var r,c,s,l,d,u;for("."!==(r=(n=n.split("/")).pop())&&".."!==r||(n.push(r),r="");null!=(c=n.shift());)if(c&&"."!==c&&(".."===c?(t=e.pop(),i=i.slice(0,i.lastIndexOf("/"))):(e.push(t),t=t[c],i+="/"+c),!t))throw v(o);if(r&&"function"!=typeof t[r]&&((u=(u=(u=(u=p(t,r,".js"))||p(t,r,".json"))||p(t,r,".css"))||p(t,r,".html"))?r=u:2!==a&&"object"===_typeof(t[r])&&(e.push(t),t=t[r],i+="/"+r,r="")),!r)return 1!==a&&t[":mainpath:"]?f(t,e,t[":mainpath:"],o,1,i):f(t,e,"index",o,2,i);if(!(d=t[r]))throw v(o);return d.hasOwnProperty("module")?d.module.exports:(s={},d.module=l={exports:s,id:i+"/"+r},d.call(s,s,l,h(t,e,i)),l.exports)},a=function(t,e,n,o){var a,i=n,r=n.charAt(0),c=0;if("/"===r){if(i=i.slice(1),!(t=s["/"])){if(l)return l(n);throw v(n)}o="/",e=[]}else if("."!==r){if(a=i.split("/",1)[0],!(t=s[a])){if(l)return l(n);throw v(n)}o=a,e=[],(i=i.slice(a.length+1))||(c=(i=t[":mainpath:"])?1:(i="index",2))}return f(t,e,i,n,c,o)},(h=function(e,n,o){return function(t){return a(e,[].concat(n),t,o)}})(s,[],"")}({workspace:{editor:{js:{frontend:{modules:{"toc.js":function(t,e,n){void 0===TCB_Front.js_modules.toc&&TCB_Front.setModuleLoadedStatus("toc",!1),function(y,_){if(!TCB_Front.isModuleLoaded("toc")){n("../util/jquery-plugins/toc"),window.addEventListener("load",function(){t.initToc(_.$body,!!tve_frontend_options.is_editor_page)}),y(window).on("tcb_after_dom_ready",function(){t.initToc(_.$body,!!tve_frontend_options.is_editor_page),y(".tve-toc-expandable").each(function(t,e){var n=y(e),o=_.getMediaAttr(n,"data-state-default");n.data("tcbTocDone")||(n.find(".tve-toc-title").tocToggle("expanded"===o?"show":"hide"),n.data("tcbTocDone",!0))}),function(){var t=y(TCB_Front.Utils.isEditorPage()?"#tve_editor":"body");t.off("click.tvetoc").on("click.tvetoc",".tve-toc-expandable .tve-toc-title, .tve-toc-expandable .tve-toc-title *",function(t){var e=y(this).closest(".tve-toc-title");TCB_Front.Utils.isEditorPage()&&!e.hasClass("tve-prevent-content-edit")||(e.tocToggle(e.hasClass("tve-state-expanded")?"show":"hide"),t.preventDefault(),t.stopPropagation())}),t.on("click",".thrv_contents_table a",function(t){var e=this;try{var n=y(this.getAttribute("href"));if(n.length)return y("html, body").animate({scrollTop:n.offset().top-130},200),setTimeout(function(){location.href=e.getAttribute("href")},200),!1}catch(t){console.warn("ToC exception",t)}})}()});var t={},w=!1,o=y(),e=!1,j=(new Date).getTime();y.fn.tableOfContents=function(){var p=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},m={target:"#tve_editor.tar-main-content",columns:1,headers:"h1,h2,h3",distribute:"",itemCallback:jQuery.noop,hideEmpty:!0,numbering:"none",emptyText:window.tve_frontend_options&&tve_frontend_options.translations?tve_frontend_options.translations.no_headings:"No headings found",itemsFilter:function(t){return t}},g=!1,b={level0:0,level1:0,level2:0};return this.each(function(){var e=this,t=y(this);if(t.is(".thrv_contents_table,.tve-toc")){var n=t.closest(".thrv_gutenberg_block,.thrv_symbol");if(!(g=t.hasClass("thrv_contents_table"))){b={level0:0,level1:0,level2:0};["headingStyle","bulletStyle","numberStyle","numberSuffix"].forEach(function(t){p[t]={};try{p[t]=JSON.parse(e.dataset[t])}catch(t){}})}var o=t.find(".tve_ct_content").empty(),s=_objectSpread({},m,{},this.dataset,{},p);s.distribute=1===parseInt(s.distribute)||"true"===s.distribute||!0===s.distribute,s.columns=Number(_.getMediaAttr(t,"data-columns")||1);var a,i=s.headers.split(",").map(function(t){return t.toUpperCase()}),l=i.shift(),d=y(s.target);if(d.length||(d=n.length?n.parent():y("#tve_editor")),a=d.find(s.headers),a=s.itemsFilter(a),w&&t.hasClass("tve-dynamic-toc")||(a=a.filter(":visible")),(a=a.filter(':not([data-hide="true"], .tve-toc *, .thrv-login-element *)')).length){for(;l&&i.length&&0===a.filter(l).length;)l=i.shift();var u=a.length/s.columns;s.distribute||(u=a.filter(l).length/s.columns);var f=new Array(s.columns).fill("",0,s.columns),h=0,v=-1;a.each(function(){var t=y(this),e=t.attr("data-alt-text")||t.text();s.distribute?v++:this.tagName===l&&v++,(1+h)*u<=v&&h++;var n=this.id&&1<d.find('[id="'.concat(this.id,'"]')).length,o=0<t.closest(".tve-content-list,.tvo-testimonials-display ").length,a=n||o&&!w&&!this.classList.contains("tve-id-regenerated"),i=this.id&&!a?this.id:this.id="t-"+j++,r=s.headers.split(",").indexOf(this.tagName.toLowerCase()),c=function(t,e,n,o,a){var i;if(g)i='<div class="tve_ct_level'.concat(n,'"><a href="#').concat(e,'" rel="nofollow">').concat(o,"</a></div>");else{var r="",c="",s="",l=t.numbering.includes("bullet"),d=t.numbering.includes("advance");if("none"!==t.numbering){if(l)0!==n&&!d||(s="toc-bullet-".concat(n));else if(0===n||d){b["level".concat(n)]+=1;for(var u=b["level".concat(n+1)]=0;u<n+1;u++)r+="".concat(b["level".concat(u)]).concat(u===n?"":".")}l&&s?c=s?'<div class="thrv_wrapper tve-toc-bullet tve-toc-bullet'.concat(n,' tve_no_icons tve-jump-scroll" data-target="#').concat(e,'" jump-animation="smooth" data-icon-target="').concat(s,'" data-element-name="Icon Level ').concat(n+1,'" data-css="').concat(t.bulletStyle[n]||"",'"><svg class="tcb-icon"><use xlink:href="#').concat(s,'"/></svg></div>'):"":r&&(c='<div class="thrv_wrapper tve-toc-number tve-toc-number'.concat(n,' tve_no_icons tve-jump-scroll" data-target="#').concat(e,'" jump-animation="smooth" data-element-name="Number Level ').concat(n+1,'" data-level="').concat(n,'" data-css="').concat(t.numberStyle[n]||"",'"><span class="tve-toc-disabled">').concat(r).concat(t.numberSuffix[n]||"","</span></div>"))}i='<div class="thrv_wrapper tve-toc-heading tve-toc-heading-level'.concat(n,' tve_no_icons" data-tag="').concat(a,'" data-css="').concat(t.headingStyle[n]||"",'" data-element-name="Heading Level ').concat(n+1,'">').concat(c,'<a href="#').concat(e,'" class="tve-toc-anchor tve-jump-scroll" jump-animation="smooth">').concat(o,"</a></div>")}return i}(s,i,r,e,this.tagName);a&&o&&!w&&this.classList.add("tve-id-regenerated"),s.itemCallback(t,r,s),f[h]+=c});var r="";if(!g){var c=t.children(".tve-toc-divider");r=c.length?c.html():'<div class="thrv_wrapper thrv-divider tve-vert-divider" data-style="tve_sep-1" data-color-d="rgb(217, 217, 217)" data-thickness-d="1"><hr class="tve_sep tve_sep-1" style=""></div>'}o.html(f.map(function(t){return'<div class="ct_column">'.concat(t,"</div>").concat(r)}).join(""))}else s.hideEmpty&&!_.queryString.get("tve_block_preview")?t.hide():o.html('<div class="tve-empty-toc">'.concat(s.emptyText,"</div>"))}})},t.initToc=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:_.$body;(w=1<arguments.length&&void 0!==arguments[1]&&arguments[1])||(t.length||(t=y("body")),e||(function(t){t.find(".tve-toc:not(.tve-dynamic-toc)").tableOfContents()}(t),function(t){var r=y(".thrv_header.tve-scroll-sticky").outerHeight()||0;t.find(".tve-toc.tve-elem-scroll").each(function(t,e){var n=y(e),i={};n.is(".tve-toc-dynamic:not(.tve-rendered)")||(n.find(".tve-toc-heading .tve-jump-scroll").each(function(t,e){var n=e.getAttribute("href")||e.getAttribute("data-target"),o=y("".concat(n));if(o.length){var a=Math.max(0,o.offset().top-100-r);y(e).data("targetOffset",a),i[a]?i[a].push('[href="'.concat(n,'"]')):i[a]=['[href="'.concat(n,'"]')]}}),n.data("headers",i),o=o.add(n))})}(t),e=!0),_.add_scroll_callback(a),_.$body.off(".tcb-jumplink-done").on("tcb-jumplink-done",function(t,e,n){(n.classList.contains("tve-toc-anchor")||n.classList.contains("tve-toc-number")||n.classList.contains("tve-toc-bullet"))&&setTimeout(function(){a(y(n).data("targetOffset"))},500)}))},window.TCB_Front.toc=t,TCB_Front.setModuleLoadedStatus("toc",!0)}function a(i,t,e){o.each(function(t,e){var n=y(e),o=e.dataset.highlight,a=n.data("headers");Object.keys(a).sort(function(t,e){return t-e}).forEach(function(t){var e=n.find(a[t].join(",")).parent();"heading"===o?t<=i?(n.find(".tve-toc-heading.tve-state-expanded").removeClass("tve-state-expanded"),e.addClass("tve-state-expanded")):e.removeClass("tve-state-expanded"):"section"===o?t<=i?(n.find(".tve-toc-heading.tve-state-expanded").removeClass("tve-state-expanded"),e.is(".tve-toc-heading-level0")||(e.prevUntil(".tve-toc-heading-level0").addClass("tve-state-expanded"),e.prevAll(".tve-toc-heading-level0").first().addClass("tve-state-expanded")),e.addClass("tve-state-expanded")):e.removeClass("tve-state-expanded"):e.toggleClass("tve-state-expanded",t<=i)})}),_.isBottomScroll(i)&&a(i+window.innerHeight)}}(ThriveGlobal.$j,TCB_Front)}},util:{"jquery-plugins":{"toc.js":function(t,e,n){var c,s;c=ThriveGlobal.$j,s=n("./utils"),c.fn.tocToggle=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"show",e=c(this),n=e.closest(".tve-toc"),o=e.siblings(".tve-toc-content"),a=n.attr("data-animation-speed"),i=n.attr("data-animation"),r=s.getAnimationFunctions(i);e.toggleClass("tve-state-expanded","show"!==t),r[t](o,a),n.toggleClass("tve-toc-collapsed","show"!==t)}},"utils.js":function(t,e,n){var o;o=ThriveGlobal.$j,TCB_Front,e.exports=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"handleContent",value:function(t,e){var n=!(1<arguments.length&&void 0!==e)||e;o(window).trigger(n?"tcb_on_content_show":"tcb_on_content_hide"),o(window).trigger("tve_after_content_toggle",[t,n])}},{key:"getAnimationFunctions",value:function(t,o){var e,n;switch(t){case"appear":e=function(t){return t.children(".tve-cb").removeAttr("style"),t.show()},n=function(t){return t.hide()};break;case"fade":e=function(t,e){return t.removeAttr("style").fadeIn(e)},n=function(t,e){return t.fadeOut(e)};break;case"slide-up":e=function(t){return t.children(".tve-cb").removeAttr("style").css({bottom:"100%",opacity:"0"}).animate({bottom:"0",opacity:"1"}).show(),t.show()},n=function(t){return t.children(".tve-cb").css({bottom:"0",opacity:"1"}).animate({bottom:"100%",opacity:"0"}).hide(),t.hide()};break;case"slide-down":e=function(t){return t.children(".tve-cb").removeAttr("style").css({top:"100%",opacity:"0"}).animate({top:"0",opacity:"1"}).show(),t.show()},n=function(t){return t.children(".tve-cb").css({top:"0",opacity:"1"}).animate({top:"100%",opacity:"0"}).hide(),t.hide()};break;case"slide":e=function(t,e){return t.removeAttr("style").slideDown(e)},n=function(t,e){return t.slideUp(e)};break;case"slide-right":e=function(t){return t.children(".tve-cb").removeAttr("style").css({opacity:"0",left:"100%"}).animate({left:"0",opacity:"1"}).show(),t.show()},n=function(t){return t.children(".tve-cb").css({opacity:"1",left:"0"}).animate({left:"100%",opacity:"0"}).hide(),t.hide()};break;case"slide-left":e=function(t){return t.children(".tve-cb").removeAttr("style").css({opacity:"0",right:"100%"}).animate({right:"0",opacity:"1"}).show(),t.show()},n=function(t){return t.children(".tve-cb").css({opacity:"1",right:"100%"}).animate({right:"0",opacity:"0"}).hide(),t.hide()};break;case"smooth-resize":e=function(t){var e=t.children(),n=t.data("contentHeight")||t.height();return e.css({height:o}).animate({height:n},500).promise().done(function(){e.css("height","100%")}),t.show()},n=function(t){return t.data("contentHeight",t.height()),t.hide()};break;case"swing-up":e=function(t){return t.css({transform:"rotateX(-20deg)",opacity:0}).animate({transform:"rotateX(0)",opacity:1},300).promise().done(function(){t.css({transform:"rotateX(0)",opacity:1})}),t.show()},n=function(t){return t.hide()};break;case"slide-fade":e=function(t,e){return t.animate({opacity:"toggle",height:"toggle"},e)},n=function(t,e){return t.animate({opacity:"hide",height:"hide"},e)};break;default:e=function(t){return t.show()},n=function(t){return t.hide()}}return{show:e,hide:n}}}]),t}()}}}}}}}})("workspace/editor/js/frontend/modules/toc");