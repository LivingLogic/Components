(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{744:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_toggle",(function(){return Toggle}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(109),_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(7),__webpack_require__(47)),_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(752),_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(756),Toggle=function(){function class_1(hostRef){var _this=this;Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.l)(this,hostRef),this.inputId="ion-tg-"+toggleIds++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=function(){_this.lastDrag+300<Date.now()&&(_this.checked=!_this.checked)},this.onFocus=function(){_this.ionFocus.emit()},this.onBlur=function(){_this.ionBlur.emit()},this.ionChange=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionChange",7),this.ionFocus=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionFocus",7),this.ionBlur=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionBlur",7),this.ionStyle=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionStyle",7)}return class_1.prototype.checkedChanged=function(isChecked){this.ionChange.emit({checked:isChecked,value:this.value})},class_1.prototype.disabledChanged=function(){this.emitStyle(),this.gesture&&this.gesture.setDisabled(this.disabled)},class_1.prototype.connectedCallback=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){var _a,_this=this;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(_b){switch(_b.label){case 0:return _a=this,[4,Promise.resolve().then(__webpack_require__.bind(null,195))];case 1:return _a.gesture=_b.sent().createGesture({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:function(){return _this.onStart()},onMove:function(ev){return _this.onMove(ev)},onEnd:function(ev){return _this.onEnd(ev)}}),this.disabledChanged(),[2]}}))}))},class_1.prototype.disconnectedCallback=function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},class_1.prototype.componentWillLoad=function(){this.emitStyle()},class_1.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},class_1.prototype.onStart=function(){this.activated=!0,this.setFocus()},class_1.prototype.onMove=function(detail){shouldToggle(document,this.checked,detail.deltaX,-10)&&(this.checked=!this.checked,Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_5__.d)())},class_1.prototype.onEnd=function(ev){this.activated=!1,this.lastDrag=Date.now(),ev.event.preventDefault(),ev.event.stopImmediatePropagation()},class_1.prototype.getValue=function(){return this.value||""},class_1.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},class_1.prototype.render=function(){var _a,_this=this,_b=this,inputId=_b.inputId,disabled=_b.disabled,checked=_b.checked,activated=_b.activated,color=_b.color,el=_b.el,mode=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.e)(this),labelId=inputId+"-lbl",label=Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__.f)(el),value=this.getValue();return label&&(label.id=labelId),Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__.a)(!0,el,this.name,checked?value:"",disabled),Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.i)(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.a,{onClick:this.onClick,role:"checkbox","aria-disabled":disabled?"true":null,"aria-checked":""+checked,"aria-labelledby":labelId,class:Object.assign(Object.assign({},Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__.a)(color)),(_a={},_a[mode]=!0,_a["in-item"]=Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__.c)("ion-item",el),_a["toggle-activated"]=activated,_a["toggle-checked"]=checked,_a["toggle-disabled"]=disabled,_a.interactive=!0,_a))},Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.i)("div",{class:"toggle-icon"},Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.i)("div",{class:"toggle-inner"})),Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:disabled,ref:function(btnEl){return _this.buttonEl=btnEl}}))},Object.defineProperty(class_1.prototype,"el",{get:function(){return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(class_1,"watchers",{get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(class_1,"style",{get:function(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.3);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--handle-background:#fff;--handle-background-checked:var(--ion-color-primary,#3880ff);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:36px;height:14px;contain:strict}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb),.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{border-radius:14px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .16s;transition:background-color .16s;background:var(--background);pointer-events:none}.toggle-inner{left:0;top:-3px;border-radius:50%;position:absolute;width:20px;height:20px;-webkit-transition-duration:.16s;transition-duration:.16s;-webkit-transition-property:background-color,-webkit-transform;transition-property:background-color,-webkit-transform;transition-property:transform,background-color;transition-property:transform,background-color,-webkit-transform;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);background:var(--handle-background);-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);will-change:transform,background-color;contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:0}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(16px,0,0);transform:translate3d(16px,0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(-1 * 16px),0,0);transform:translate3d(calc(-1 * 16px),0,0)}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"},enumerable:!0,configurable:!0}),class_1}(),shouldToggle=function(doc,checked,deltaX,margin){var isRTL="rtl"===doc.dir;return checked?!isRTL&&margin>deltaX||isRTL&&-margin<deltaX:!isRTL&&-margin<deltaX||isRTL&&margin>deltaX},toggleIds=0},752:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),hostContext=function(selector,el){return null!==el.closest(selector)},createColorClasses=function(color){var _a;return"string"==typeof color&&color.length>0?((_a={"ion-color":!0})["ion-color-"+color]=!0,_a):void 0},getClassMap=function(classes){var map={};return function(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter((function(c){return null!=c})).map((function(c){return c.trim()})).filter((function(c){return""!==c})):[]}(classes).forEach((function(c){return map[c]=!0})),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(url,ev,direction){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var router;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(_a){return null!=url&&"#"!==url[0]&&!SCHEME.test(url)&&(router=document.querySelector("ion-router"))?(null!=ev&&ev.preventDefault(),[2,router.push(url,direction)]):[2,!1]}))}))}},756:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return hapticSelectionStart})),__webpack_require__.d(__webpack_exports__,"b",(function(){return hapticSelectionChanged})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hapticSelectionEnd})),__webpack_require__.d(__webpack_exports__,"d",(function(){return hapticSelection}));var hapticSelection=function(){var engine=window.TapticEngine;engine&&engine.selection()},hapticSelectionStart=function(){var engine=window.TapticEngine;engine&&engine.gestureSelectionStart()},hapticSelectionChanged=function(){var engine=window.TapticEngine;engine&&engine.gestureSelectionChanged()},hapticSelectionEnd=function(){var engine=window.TapticEngine;engine&&engine.gestureSelectionEnd()}}}]);
//# sourceMappingURL=23.b51f01cd59879ff3cd07.bundle.js.map