/*! Thrive Architect - 2021-09-01
* http://www.thrivethemes.com/
* Copyright (c) 2021 Thrive Themes */

"use strict";function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(r,!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _defineProperty(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _get(t,e,r){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var o=_superPropBase(t,e);if(o){var n=Object.getOwnPropertyDescriptor(o,e);return n.get?n.get.call(r):n.value}})(t,e,r||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(c){var h,_,n,p,d,i={".js":[],".json":[],".css":[],".html":[]},u="function"==typeof require?require:null;return p=function(t){var e=new Error("Could not find module '"+t+"'");return e.code="MODULE_NOT_FOUND",e},d=function(t,e,r){var o,n;if("function"==typeof t[e+r])return e+r;for(o=0;n=i[r][o];++o)if("function"==typeof t[e+n])return e+n;return null},h=function(t,e,r,o,n,i){var s,a,c,u,f,l;for("."!==(s=(r=r.split("/")).pop())&&".."!==s||(r.push(s),s="");null!=(a=r.shift());)if(a&&"."!==a&&(".."===a?(t=e.pop(),i=i.slice(0,i.lastIndexOf("/"))):(e.push(t),t=t[a],i+="/"+a),!t))throw p(o);if(s&&"function"!=typeof t[s]&&((l=(l=(l=(l=d(t,s,".js"))||d(t,s,".json"))||d(t,s,".css"))||d(t,s,".html"))?s=l:2!==n&&"object"===_typeof(t[s])&&(e.push(t),t=t[s],i+="/"+s,s="")),!s)return 1!==n&&t[":mainpath:"]?h(t,e,t[":mainpath:"],o,1,i):h(t,e,"index",o,2,i);if(!(f=t[s]))throw p(o);return f.hasOwnProperty("module")?f.module.exports:(c={},f.module=u={exports:c,id:i+"/"+s},f.call(c,c,u,_(t,e,i)),u.exports)},n=function(t,e,r,o){var n,i=r,s=r.charAt(0),a=0;if("/"===s){if(i=i.slice(1),!(t=c["/"])){if(u)return u(r);throw p(r)}o="/",e=[]}else if("."!==s){if(n=i.split("/",1)[0],!(t=c[n])){if(u)return u(r);throw p(r)}o=n,e=[],(i=i.slice(n.length+1))||(a=(i=t[":mainpath:"])?1:(i="index",2))}return h(t,e,i,r,a,o)},(_=function(e,r,o){return function(t){return n(e,[].concat(r),t,o)}})(c,[],"")}({workspace:{editor:{js:{frontend:{modules:{"login.js":function(t,e,r){void 0===TCB_Front.js_modules.login&&TCB_Front.setModuleLoadedStatus("login",!1),function(n){if(!TCB_Front.isModuleLoaded("login")){n(window).on("tcb_after_dom_ready",function(){TCB_Front.Utils.isEditorPage()||n(".thrv-login-element").tve_login_element()});TCB_Front.loginCallbacks={redirect:function(t,e){if(e.success&&!0===e.success&&t.redirect_url.length){var r=TCB_Front.Utils.addHttp(t.redirect_url);t.urlParams&&t.urlParams.length&&(r=TCB_Front.Utils.appendFormParamsToURL(r,t.urlParams)),r=TCB_Front.Utils.appendRandomParamToURL(r),(t["login.show_success"]||t.show_success)&&window.location.hostname===function(t){try{return new URL(t).hostname}catch(t){return""}}(r)&&sessionStorage.setItem("tcb_toast_message",t.success_message),TCB_Front.loginKeepLoader=!0,document.location.href=TCB_Front.Utils.addHttp(r)}},refresh:function(t,e){TCB_Front.loginKeepLoader=!0,e.success&&!0===e.success&&t["login.show_success"]&&sessionStorage.setItem("tcb_toast_message",t.success_message),location.reload()},noRedirect:function(t,e){e.success&&!0===e.success&&t["login.show_success"]&&TCB_Front.Utils.toast(t.success_message,!1)},showMessage:function(t,e){e.success&&!0===e.success&&TCB_Front.Utils.toast(t.success_message,!1)}};var o=function(){function o(t){var r=this;_classCallCheck(this,o),this.$wrapper=t,this.data={action:"tve_login_submit"},this._config=TCB_Front.Utils.unserialize(TCB_Front.Base64.decode(this.$wrapper.find('input[name="config"]').val())),this._config.form_type=t.attr("data-type")||"login",this.initStates(),this.switchState(tve_frontend_options.current_user.user_email?"logged_in":this.determineDefaultState()),this.$wrapper.find("[data-state]").on("tcb.change_state",function(t,e){r.switchState(e.state)}),this.$wrapper.fadeIn("slow"),n(window).on("hashchange",function(){var t=r.getStateFromHash();t&&r.switchState(t)});var e=new URL(location.href).searchParams.get("ret");e&&(this._config.submit_action=this._config.post_register_action="redirect",this._config.redirect_url=this._config["post_register_action.redirect_url"]=e)}return _createClass(o,[{key:"hasState",value:function(t){return"both"===this._config.form_type||this._config.form_type===t}},{key:"getStateFromHash",value:function(){if(window.location.hash){var t=window.location.hash.replace("#tcb-","");if(["login","register"].includes(t)&&this.hasState(t))return t}return null}},{key:"determineDefaultState",value:function(){var t=this.$wrapper.attr("data-default-state")||"login";return this.getStateFromHash()||t}},{key:"initStates",value:function(){var r=this;this.states={},this.$wrapper.find("[data-state]").each(function(t,e){return r.states[e.dataset.state]=r.stateFactory(e.dataset.state)})}},{key:"stateFactory",value:function(t){var e,r={form:this.$wrapper.find('[data-state="'.concat(t,'"]')),config:this._config};switch(t){case"login":e=new s(r);break;case"forgot_password":e=new a(r);break;case"register":e=new c(r);break;default:e=new i(r)}return e}},{key:"getAjaxData",value:function(){var t=this.activeState.getAjaxData();return"string"==typeof t?n.param(this.data)+"&"+t:n.extend({},this.data,t)}},{key:"switchState",value:function(t){this.activeState&&this.activeState.resetErrors().clearForm(),this.$wrapper.find(".tcb-login-form-wrapper").removeClass("tve-active-state").addClass("tcb-permanently-hidden"),this.$wrapper.find('[data-state="'+t+'"]').removeClass("tcb-permanently-hidden").addClass("tve-active-state"),this.activeState=this.states[t],requestAnimationFrame(this.activeState.focusFirstInput.bind(this.activeState))}},{key:"bindEvents",value:function(){var e=this;return this.$wrapper.find(".tar-login-submit").off("click").on("click",function(){return e.activeState.getForm().trigger("submit"),!1}),this.$wrapper.find(".tve-dynamic-link:not(.tar-login-submit *)").off("click").on("click",function(t){if(e._onSwitchState(t),"logout"!==t.currentTarget.dataset.shortcodeId)return!1}),this.$wrapper.find("form").off("submit.tar_login_element thrive_submit user_loggedin").on("submit.tar_login_element thrive_submit",function(t){e._onSubmit(t)}).on("user_loggedin",function(t){TCB_Front.$body.addClass("logged-in").find(".tcb-hide-logged-in").remove()}),n.each(this.states,function(t,e){return e.afterInit()}),this}},{key:"_getStateToSwitch",value:function(t){var e=null;switch(t){case"bk_to_login":case"login":e="login";break;case"forgot_password":e="forgot_password";break;case"register":e="register"}return e}},{key:"_onSwitchState",value:function(t){var e=this.$wrapper.find(t.currentTarget);if("thrive_login_form_shortcode"===e.data("dynamic-link")){var r=this._getStateToSwitch(e.data("shortcode-id"));r&&(t.preventDefault(),this.switchState(r))}}},{key:"_onSubmit",value:function(t){if(t.preventDefault(),t.stopPropagation(),!0!==this.validate())return this.error();this.send()}},{key:"validate",value:function(){return this.activeState.validate()}},{key:"error",value:function(){return this.activeState.showErrors()}},{key:"send",value:function(){var e=this.activeState;e.beforeSend(),delete TCB_Front.loginKeepLoader,n.ajax({type:"post",xhrFields:{withCredentials:!0},url:tve_frontend_options.ajaxurl,data:this.getAjaxData()}).fail(function(t){return e.onFail(t)}).done(function(t){return e.onSuccess(t)}).always(function(){TCB_Front.loginKeepLoader||e.removeLoader()})}}]),o}(),i=function(){function e(t){_classCallCheck(this,e),this.$form=t.form,this.config=t.config,this.attributes={},this.action="",this.errors=[],this.init(),this._dataBind()}return _createClass(e,[{key:"getForm",value:function(){return this.$form.find("form").first()}},{key:"init",value:function(){}},{key:"afterInit",value:function(){}},{key:"_dataBind",value:function(){var r=this;Object.keys(this.attributes).forEach(function(t){var e=r.$form.find('input[name="'+t+'"]');"checkbox"===e.attr("type")?e.on("change",function(){r.attributes[t]=e.prop("checked")?1:0}):e.on("input",function(){r.attributes[t]=e.val()})})}},{key:"getAjaxData",value:function(){return n.extend({after_submit:this.config.submit_action},this.attributes,{custom_action:this.action})}},{key:"removeLoader",value:function(){this.loader(!0),this.$form.find("button[type=submit]").hide()}},{key:"onSuccess",value:function(t){}},{key:"onFail",value:function(t){}},{key:"beforeSend",value:function(){this.loader()}},{key:"loader",value:function(t){return!0===(0<arguments.length&&void 0!==t&&t)?this.$form.find(".tcb-form-loader").remove():(n('<div class="tcb-form-loader"><span class="tcb-form-loader-icon thrv-icon-spinner9"></span></div>').appendTo(this.$form).show(),this.$form.find("input,a,button").blur()),this}},{key:"clearForm",value:function(){var e=this;return Object.keys(this.attributes).forEach(function(t){e.attributes[t]="",e.$form.find('input[name="'+t+'"]').val("")}),this}},{key:"resetErrors",value:function(){return this.errors=[],this.$form.find(".tcb-form-error").remove(),this.$form.find(".tcb-form-input-error").removeClass("tcb-form-input-error"),this}},{key:"validate",value:function(){return this.resetErrors(),!0}},{key:"showErrors",value:function(){var r=this;this.$form.find(".tcb-form-error").remove(),Object.keys(this.attributes).forEach(function(t){var e="empty_"+t;r.errors.includes(e)&&"string"==typeof tve_frontend_options.translations[e]&&r.showError(r.$form.find('input[name="'+t+'"]'),tve_frontend_options.translations[e])})}},{key:"showError",value:function(t,e){var r=this;t.is(":radio,:checkbox")&&(t=t.parents(".tve_lg_input_container").first()),t.hasClass("tcb-form-input-error")||(t.addClass("tcb-form-input-error").parent().addClass("tcb-form-input-error").after('<span class="tcb-form-error">'.concat(e,"</span>")),setTimeout(function(){r.resetErrors()},5e3))}},{key:"focusFirstInput",value:function(){TCB_Front.isInViewport(this.$form)&&this.$form.find("input:visible").first().focus()}}]),e}(),s=function(){function o(){return _classCallCheck(this,o),_possibleConstructorReturn(this,_getPrototypeOf(o).apply(this,arguments))}return _inherits(o,i),_createClass(o,[{key:"init",value:function(){var e=this;_get(_getPrototypeOf(o.prototype),"init",this).call(this),this.attributes={username:"",password:"",remember_me:""},this.action="login",this.$form.find(".tcb-remember-me-item").off("click").on("click",function(t){"checkbox"!==t.target.type&&e.$form.find('input[name="remember_me"]:not(.checkbox-update)').click()})}},{key:"onSuccess",value:function(t){_get(_getPrototypeOf(o.prototype),"onSuccess",this).call(this,t);var e=t.errors&&t.errors.length;if(e){var r="";t.errors.forEach(function(t){r+=t+"<br />"}),TCB_Front.Utils.toast(r,!0)}else"function"==typeof TCB_Front.loginCallbacks[this.config.submit_action]?TCB_Front.loginCallbacks[this.config.submit_action](this.config,t):t.external_redirect_url&&TCB_Front.loginCallbacks.redirect(_objectSpread({},this.config,{redirect_url:t.external_redirect_url}),t);e||"noRedirect"!==this.config.submit_action&&"showMessage"!==this.config.submit_action||(this.$form.trigger("tcb.change_state",{state:"logged_in"}),this.getForm().trigger("user_loggedin")),TCB_Front.loginKeepLoader||this.clearForm()}},{key:"validate",value:function(){return this.resetErrors(),this.attributes.username.length||this.errors.push("empty_username"),this.attributes.password.length||this.errors.push("empty_password"),0===this.errors.length}}]),o}(),a=function(){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,i),_createClass(t,[{key:"init",value:function(){_get(_getPrototypeOf(t.prototype),"init",this).call(this),this.attributes={login:""},this.action="recover_password"}},{key:"onSuccess",value:function(e){_get(_getPrototypeOf(t.prototype),"onSuccess",this).call(this,e);var r="";e.errors&&(Array.isArray(e.errors)?r=e.errors.join("<br>"):Object.keys(e.errors).forEach(function(t){r+=(r?"<br>":"")+e.errors[t]})),r?TCB_Front.Utils.toast(r,!0):(this.clearForm(),this.$form.trigger("tcb.change_state",{state:"reset_confirmation"}))}},{key:"validate",value:function(){return this.resetErrors(),this.attributes.login.length||this.errors.push("empty_login"),0===this.errors.length}}]),t}(),c=function(){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,i),_createClass(t,[{key:"init",value:function(){_get(_getPrototypeOf(t.prototype),"init",this).call(this),this.attributes={},this.action="register",this.config.error_messages=tve_frontend_options.translations.registration_err;try{this.config.error_messages=_objectSpread({},this.config.error_messages,{},JSON.parse(this.$form.find(".tve-lg-err-msg").val()))}catch(t){}}},{key:"hasLoginState",value:function(){return"register"!==this.config.form_type}},{key:"getAjaxData",value:function(){var t=this.getForm().serialize()+"&custom_action=".concat(this.action,"&_tcb_id=").concat(this.$form.find(".tcb-registration-form").attr("data-settings-id")||"","&tcb_token=").concat((10*Date.now()).toString(32));return TCB_Front.isModuleLoaded("file-upload")&&(t=this.uploader.appendExtraData(t)),t+="&after_submit="+this.config.post_register_action}},{key:"afterInit",value:function(){var i=this;this.getForm().off("submit.tar_login_element").attr("action","#");var t=this.$form.find(".tcb-registration-form").tve_front_lead_generation({renderError:function(t,e,r){var o,n;switch(t.length||(t=i.$form.find(".tar-login-submit")),r){case"captcha":n=e,t=t.children().first();break;case"upload":t=t.children().first(),n=e;break;case"email":o="invalid_email";break;case"passwordmismatch":o="passwordmismatch";break;default:o=r+"_"+t.attr("name")}n=n||(i.config.error_messages[o]||i.config.error_messages.required_field||"Please check this field"),i.showError(t,n)},clearErrors:function(){i.resetErrors()},showFormLoader:function(){i.loader()},submitHandler:function(t,e){t.preventDefault();var r=i.getForm();return e.token&&r.find(".tve-recaptcha-response").remove().end().append('<input type="hidden" name="g-recaptcha-response" value="'.concat(e.token,'" class="tve-recaptcha-response">')),r.trigger("thrive_submit"),!1}});TCB_Front.isModuleLoaded("file-upload")&&(this.uploader=t.data("tcb-file-upload"))}},{key:"onFail",value:function(t){var e;t.responseJSON&&t.responseJSON.error&&(t.responseJSON.field&&(e=this.getForm().find('[name="'.concat(t.responseJSON.field,'"]')),"email"===t.responseJSON.field&&this.getForm().find('[name*="password"]').val("").trigger("keyup")),e&&e.length||(e=this.getForm().find(".tar-login-submit .tcb-button-link").first()),this.showError(e,t.responseJSON.error),"undefined"!=typeof grecaptcha&&"function"==typeof grecaptcha.reset&&(!tve_dash_front.recaptcha.connection||tve_dash_front.recaptcha.connection&&"v3"!==tve_dash_front.recaptcha.connection.version)&&grecaptcha.reset())}},{key:"onSuccess",value:function(t){switch(TCB_Front.isModuleLoaded("file-upload")&&this.uploader.clear(),this.config.post_register_action){case"refresh":TCB_Front.loginKeepLoader=!0,t.success&&!0===t.success&&this.config["post_register_action.show_success"]&&sessionStorage.setItem("tcb_toast_message",this.config["post_register_action.success_message"]),location.reload();break;case"showMessage":TCB_Front.Utils.toast(this.config["post_register_action.success_message"]);var e="login";t.logged_in&&(TCB_Front.$body.addClass("logged-in"),e="logged_in"),"login"!==e||this.hasLoginState()?this.$form.trigger("tcb.change_state",{state:e}):this.$form.closest(".thrv-login-element").hide();break;default:var r=TCB_Front.loginCallbacks[this.config.post_register_action],o=1===parseInt(this.config["register.send_form_values"])?TCB_Front.Utils.buildFormParams(this.getForm()):[];"function"==typeof r?r.call(TCB_Front.loginCallbacks,{redirect_url:this.config["post_register_action.redirect_url"],submit_action:this.config.post_register_action,success_message:this.config["post_register_action.success_message"],show_success:this.config["post_register_action.show_success"],urlParams:o},t):t.external_redirect_url&&TCB_Front.loginCallbacks.redirect(_objectSpread({},this.config,{redirect_url:t.external_redirect_url,success_message:this.config["post_register_action.success_message"],show_success:this.config["post_register_action.show_success"],urlParams:o}),t)}TCB_Front.loginKeepLoader||(this.getForm()[0].reset(),"undefined"!=typeof grecaptcha&&"function"==typeof grecaptcha.reset&&(!tve_dash_front.recaptcha.connection||tve_dash_front.recaptcha.connection&&"v3"!==tve_dash_front.recaptcha.connection.version)&&grecaptcha.reset(),this.$form.find('input[type="password"]').trigger("keyup"))}}]),t}(),u=!tve_frontend_options.is_editor_page&&tve_frontend_options.current_user&&tve_frontend_options.current_user.id;n.fn.tve_login_element=function(){return this.hasClass("thrv-login-element")?this.each(function(t,e){var r=n(e);u&&r.hasClass("tcb-hide-logged-in")?r.remove():r.data("tcbLoginForm")||r.data("tcbLoginForm",new o(r).bindEvents())}):this},TCB_Front.setModuleLoadedStatus("login",!0)}}(ThriveGlobal.$j)}}}}}}})("workspace/editor/js/frontend/modules/login");