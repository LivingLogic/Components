(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{668:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_action_sheet_controller",(function(){return ActionSheetController})),__webpack_require__.d(__webpack_exports__,"ion_alert_controller",(function(){return AlertController})),__webpack_require__.d(__webpack_exports__,"ion_anchor",(function(){return Anchor})),__webpack_require__.d(__webpack_exports__,"ion_loading_controller",(function(){return LoadingController})),__webpack_require__.d(__webpack_exports__,"ion_modal_controller",(function(){return ModalController})),__webpack_require__.d(__webpack_exports__,"ion_picker_controller",(function(){return PickerController})),__webpack_require__.d(__webpack_exports__,"ion_popover_controller",(function(){return PopoverController})),__webpack_require__.d(__webpack_exports__,"ion_toast_controller",(function(){return ToastController}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(109),_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(7),__webpack_require__(55)),_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(752),ActionSheetController=function(){function class_1(hostRef){Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.l)(this,hostRef)}return class_1.prototype.create=function(options){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.i)("ion-action-sheet",options)},class_1.prototype.dismiss=function(data,role,id){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.k)(document,data,role,"ion-action-sheet",id)},class_1.prototype.getTop=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(_a){return[2,Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.l)(document,"ion-action-sheet")]}))}))},class_1}(),AlertController=function(){function class_2(hostRef){Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.l)(this,hostRef)}return class_2.prototype.create=function(options){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.i)("ion-alert",options)},class_2.prototype.dismiss=function(data,role,id){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.k)(document,data,role,"ion-alert",id)},class_2.prototype.getTop=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(_a){return[2,Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.l)(document,"ion-alert")]}))}))},class_2}(),Anchor=function(){function Anchor(hostRef){var _this=this;Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.l)(this,hostRef),this.routerDirection="forward",this.onClick=function(ev){Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__.d)(_this.href,ev,_this.routerDirection)}}return Anchor.prototype.componentDidLoad=function(){console.warn("[DEPRECATED][ion-anchor] The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.")},Anchor.prototype.render=function(){var _a,mode=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.e)(this),attrs={href:this.href,rel:this.rel};return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.i)(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.color)),(_a={},_a[mode]=!0,_a["ion-activatable"]=!0,_a))},Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.i)("a",Object.assign({},attrs),Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.i)("slot",null)))},Object.defineProperty(Anchor,"style",{get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},enumerable:!0,configurable:!0}),Anchor}(),LoadingController=function(){function class_3(hostRef){Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.l)(this,hostRef)}return class_3.prototype.create=function(options){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.i)("ion-loading",options)},class_3.prototype.dismiss=function(data,role,id){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.k)(document,data,role,"ion-loading",id)},class_3.prototype.getTop=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(_a){return[2,Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.l)(document,"ion-loading")]}))}))},class_3}(),ModalController=function(){function class_4(hostRef){Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.l)(this,hostRef)}return class_4.prototype.create=function(options){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.i)("ion-modal",options)},class_4.prototype.dismiss=function(data,role,id){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.k)(document,data,role,"ion-modal",id)},class_4.prototype.getTop=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(_a){return[2,Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.l)(document,"ion-modal")]}))}))},class_4}(),PickerController=function(){function class_5(hostRef){Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.l)(this,hostRef)}return class_5.prototype.create=function(options){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.i)("ion-picker",options)},class_5.prototype.dismiss=function(data,role,id){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.k)(document,data,role,"ion-picker",id)},class_5.prototype.getTop=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(_a){return[2,Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.l)(document,"ion-picker")]}))}))},class_5}(),PopoverController=function(){function class_6(hostRef){Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.l)(this,hostRef)}return class_6.prototype.create=function(options){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.i)("ion-popover",options)},class_6.prototype.dismiss=function(data,role,id){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.k)(document,data,role,"ion-popover",id)},class_6.prototype.getTop=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(_a){return[2,Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.l)(document,"ion-popover")]}))}))},class_6}(),ToastController=function(){function class_7(hostRef){Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.l)(this,hostRef)}return class_7.prototype.create=function(options){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.i)("ion-toast",options)},class_7.prototype.dismiss=function(data,role,id){return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.k)(document,data,role,"ion-toast",id)},class_7.prototype.getTop=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(_a){return[2,Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__.l)(document,"ion-toast")]}))}))},class_7}()},752:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),hostContext=function(selector,el){return null!==el.closest(selector)},createColorClasses=function(color){var _a;return"string"==typeof color&&color.length>0?((_a={"ion-color":!0})["ion-color-"+color]=!0,_a):void 0},getClassMap=function(classes){var map={};return function(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter((function(c){return null!=c})).map((function(c){return c.trim()})).filter((function(c){return""!==c})):[]}(classes).forEach((function(c){return map[c]=!0})),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(url,ev,direction){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var router;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(_a){return null!=url&&"#"!==url[0]&&!SCHEME.test(url)&&(router=document.querySelector("ion-router"))?(null!=ev&&ev.preventDefault(),[2,router.push(url,direction)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=43.b51f01cd59879ff3cd07.bundle.js.map