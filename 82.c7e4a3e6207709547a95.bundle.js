(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{680:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_backdrop",(function(){return Backdrop}));var _core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(109),_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(7),__webpack_require__(47)),_index_624eea58_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(194),Backdrop=function(){function Backdrop(hostRef){Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.l)(this,hostRef),this.lastClick=-1e4,this.blocker=_index_624eea58_js__WEBPACK_IMPORTED_MODULE_3__.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0,this.ionBackdropTap=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"ionBackdropTap",7)}return Backdrop.prototype.connectedCallback=function(){this.stopPropagation&&this.blocker.block()},Backdrop.prototype.disconnectedCallback=function(){this.blocker.unblock()},Backdrop.prototype.onTouchStart=function(ev){this.lastClick=Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__.i)(ev),this.emitTap(ev)},Backdrop.prototype.onMouseDown=function(ev){this.lastClick<Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__.i)(ev)-2500&&this.emitTap(ev)},Backdrop.prototype.emitTap=function(ev){this.stopPropagation&&(ev.preventDefault(),ev.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},Backdrop.prototype.render=function(){var _a,mode=Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.e)(this);return Object(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_ca0488fc_js__WEBPACK_IMPORTED_MODULE_0__.a,{tabindex:"-1",class:(_a={},_a[mode]=!0,_a["backdrop-hide"]=!this.visible,_a["backdrop-no-tappable"]=!this.tappable,_a)})},Object.defineProperty(Backdrop,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}"},enumerable:!0,configurable:!0}),Backdrop}()}}]);
//# sourceMappingURL=82.c7e4a3e6207709547a95.bundle.js.map