(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{685:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_checkbox",(function(){return Checkbox}));var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(109),_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(7),__webpack_require__(47)),_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(752),Checkbox=function(){function Checkbox(hostRef){var _this=this;Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.l)(this,hostRef),this.inputId="ion-cb-"+checkboxIds++,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=function(){_this.setFocus(),_this.checked=!_this.checked,_this.indeterminate=!1},this.onFocus=function(){_this.ionFocus.emit()},this.onBlur=function(){_this.ionBlur.emit()},this.ionChange=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionChange",7),this.ionFocus=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionFocus",7),this.ionBlur=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionBlur",7),this.ionStyle=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionStyle",7)}return Checkbox.prototype.componentWillLoad=function(){this.emitStyle()},Checkbox.prototype.checkedChanged=function(isChecked){this.ionChange.emit({checked:isChecked,value:this.value}),this.emitStyle()},Checkbox.prototype.disabledChanged=function(){this.emitStyle()},Checkbox.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},Checkbox.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},Checkbox.prototype.render=function(){var _a,_this=this,_b=this,inputId=_b.inputId,indeterminate=_b.indeterminate,disabled=_b.disabled,checked=_b.checked,value=_b.value,color=_b.color,el=_b.el,labelId=inputId+"-lbl",mode=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.e)(this),label=Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__.f)(el);label&&(label.id=labelId),Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__.a)(!0,el,this.name,checked?value:"",disabled);var path=indeterminate?Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.i)("path",{d:"M6 12L18 12"}):Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.i)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===mode&&(path=indeterminate?Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.i)("path",{d:"M2 12H22"}):Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.i)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.a,{onClick:this.onClick,role:"checkbox","aria-disabled":disabled?"true":null,"aria-checked":""+checked,"aria-labelledby":labelId,class:Object.assign(Object.assign({},Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.a)(color)),(_a={},_a[mode]=!0,_a["in-item"]=Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.c)("ion-item",el),_a["checkbox-checked"]=checked,_a["checkbox-disabled"]=disabled,_a["checkbox-indeterminate"]=indeterminate,_a.interactive=!0,_a))},Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.i)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},path),Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(btnEl){return _this.buttonEl=btnEl}}))},Object.defineProperty(Checkbox.prototype,"el",{get:function(){return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(Checkbox,"watchers",{get:function(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(Checkbox,"style",{get:function(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:1;opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.23);--background:var(--ion-item-background,var(--ion-background-color,#fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:16px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:16px;margin-inline-end:16px}}"},enumerable:!0,configurable:!0}),Checkbox}(),checkboxIds=0},752:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),hostContext=function(selector,el){return null!==el.closest(selector)},createColorClasses=function(color){var _a;return"string"==typeof color&&color.length>0?((_a={"ion-color":!0})["ion-color-"+color]=!0,_a):void 0},getClassMap=function(classes){var map={};return function(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter((function(c){return null!=c})).map((function(c){return c.trim()})).filter((function(c){return""!==c})):[]}(classes).forEach((function(c){return map[c]=!0})),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(url,ev,direction){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var router;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(_a){return null!=url&&"#"!==url[0]&&!SCHEME.test(url)&&(router=document.querySelector("ion-router"))?(null!=ev&&ev.preventDefault(),[2,router.push(url,direction)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=54.c7e4a3e6207709547a95.bundle.js.map