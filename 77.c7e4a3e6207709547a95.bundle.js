(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{739:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_textarea",(function(){return Textarea}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(109),_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(7),__webpack_require__(47)),_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(752),Textarea=function(){function class_1(hostRef){var _this=this;Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.l)(this,hostRef),this.inputId="ion-input-"+textareaIds++,this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="none",this.autofocus=!1,this.clearOnEdit=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.autoGrow=!1,this.value="",this.onInput=function(ev){_this.nativeInput&&(_this.value=_this.nativeInput.value),_this.emitStyle(),_this.ionInput.emit(ev)},this.onFocus=function(){_this.hasFocus=!0,_this.focusChange(),_this.ionFocus.emit()},this.onBlur=function(){_this.hasFocus=!1,_this.focusChange(),_this.ionBlur.emit()},this.onKeyDown=function(){_this.checkClearOnEdit()},this.ionChange=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionChange",7),this.ionInput=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionInput",7),this.ionStyle=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionStyle",7),this.ionBlur=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionBlur",7),this.ionFocus=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.d)(this,"ionFocus",7)}return class_1.prototype.debounceChanged=function(){this.ionChange=Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__.d)(this.ionChange,this.debounce)},class_1.prototype.disabledChanged=function(){this.emitStyle()},class_1.prototype.valueChanged=function(){var nativeInput=this.nativeInput,value=this.getValue();nativeInput&&nativeInput.value!==value&&(nativeInput.value=value),this.runAutoGrow(),this.emitStyle(),this.ionChange.emit({value:value})},class_1.prototype.connectedCallback=function(){this.emitStyle(),this.debounceChanged(),this.el.dispatchEvent(new CustomEvent("ionInputDidLoad",{detail:this.el}))},class_1.prototype.disconnectedCallback=function(){document.dispatchEvent(new CustomEvent("ionInputDidUnload",{detail:this.el}))},class_1.prototype.componentDidLoad=function(){this.runAutoGrow()},class_1.prototype.runAutoGrow=function(){var nativeInput=this.nativeInput;nativeInput&&this.autoGrow&&Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.g)((function(){nativeInput.style.height="inherit",nativeInput.style.height=nativeInput.scrollHeight+"px"}))},class_1.prototype.setFocus=function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(this,void 0,void 0,(function(){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(_a){return this.nativeInput&&this.nativeInput.focus(),[2]}))}))},class_1.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)},class_1.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,textarea:!0,input:!0,"interactive-disabled":this.disabled,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus})},class_1.prototype.checkClearOnEdit=function(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&(this.value=""),this.didBlurAfterEdit=!1)},class_1.prototype.focusChange=function(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0),this.emitStyle()},class_1.prototype.hasValue=function(){return""!==this.getValue()},class_1.prototype.getValue=function(){return this.value||""},class_1.prototype.render=function(){var _a,_this=this,mode=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.e)(this),value=this.getValue(),labelId=this.inputId+"-lbl",label=Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_3__.f)(this.el);return label&&(label.id=labelId),Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.i)(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.a,{"aria-disabled":this.disabled?"true":null,class:Object.assign(Object.assign({},Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__.a)(this.color)),(_a={},_a[mode]=!0,_a))},Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.i)("textarea",{class:"native-textarea",ref:function(el){return _this.nativeInput=el},autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown},value))},Object.defineProperty(class_1.prototype,"el",{get:function(){return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_1__.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(class_1,"watchers",{get:function(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(class_1,"style",{get:function(){return".sc-ion-textarea-ios-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);white-space:pre-wrap;z-index:2}.ion-color.sc-ion-textarea-ios-h{background:initial;color:var(--ion-color-base)}ion-item.sc-ion-textarea-ios-h, ion-item .sc-ion-textarea-ios-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-textarea-ios-h{--padding-start:0}.native-textarea.sc-ion-textarea-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-textarea.sc-ion-textarea-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:.4}.cloned-input.sc-ion-textarea-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl] .sc-ion-textarea-ios-h .cloned-input.sc-ion-textarea-ios, [dir=rtl].sc-ion-textarea-ios .cloned-input.sc-ion-textarea-ios{left:unset;right:unset;right:0}.sc-ion-textarea-ios-h{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-floating.sc-ion-textarea-ios-h, .item-label-floating .sc-ion-textarea-ios-h, .item-label-stacked.sc-ion-textarea-ios-h, .item-label-stacked .sc-ion-textarea-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}"},enumerable:!0,configurable:!0}),class_1}(),textareaIds=0},752:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),hostContext=function(selector,el){return null!==el.closest(selector)},createColorClasses=function(color){var _a;return"string"==typeof color&&color.length>0?((_a={"ion-color":!0})["ion-color-"+color]=!0,_a):void 0},getClassMap=function(classes){var map={};return function(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter((function(c){return null!=c})).map((function(c){return c.trim()})).filter((function(c){return""!==c})):[]}(classes).forEach((function(c){return map[c]=!0})),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(url,ev,direction){return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.a)(void 0,void 0,void 0,(function(){var router;return Object(tslib__WEBPACK_IMPORTED_MODULE_0__.c)(this,(function(_a){return null!=url&&"#"!==url[0]&&!SCHEME.test(url)&&(router=document.querySelector("ion-router"))?(null!=ev&&ev.preventDefault(),[2,router.push(url,direction)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=77.c7e4a3e6207709547a95.bundle.js.map