(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{663:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"create",(function(){return create}));var CSS_VALUE_REGEX=/(^-?\d*\.?\d*)(.*)/,TRANSFORM_PROPS={translateX:1,translateY:1,translateZ:1,scale:1,scaleX:1,scaleY:1,scaleZ:1,rotate:1,rotateX:1,rotateY:1,rotateZ:1,skewX:1,skewY:1,perspective:1},win="undefined"!=typeof window?window:{},raf=win.requestAnimationFrame?win.requestAnimationFrame.bind(win):function(f){return f(Date.now())},Animator=function(){function Animator(){this._hasDur=!1,this._hasTweenEffect=!1,this._isAsync=!1,this._isReverse=!1,this._destroyed=!1,this.hasChildren=!1,this.isPlaying=!1,this.hasCompleted=!1}return Animator.prototype.addElement=function(el){if(null!=el)if(el.length>0)for(var i=0;i<el.length;i++)this._addEl(el[i]);else this._addEl(el);return this},Animator.prototype._addEl=function(el){1===el.nodeType&&(this._elements=this._elements||[]).push(el)},Animator.prototype.add=function(childAnimation){return childAnimation.parent=this,this.hasChildren=!0,(this._childAnimations=this._childAnimations||[]).push(childAnimation),this},Animator.prototype.getDuration=function(opts){return opts&&void 0!==opts.duration?opts.duration:void 0!==this._duration?this._duration:this.parent?this.parent.getDuration():0},Animator.prototype.isRoot=function(){return!this.parent},Animator.prototype.duration=function(milliseconds){return this._duration=milliseconds,this},Animator.prototype.getEasing=function(){return this._isReverse&&void 0!==this._reversedEasingName?this._reversedEasingName:void 0!==this._easingName?this._easingName:this.parent&&this.parent.getEasing()||null},Animator.prototype.easing=function(name){return this._easingName=name,this},Animator.prototype.easingReverse=function(name){return this._reversedEasingName=name,this},Animator.prototype.from=function(prop,val){return this._addProp("from",prop,val),this},Animator.prototype.to=function(prop,val,clearProperyAfterTransition){void 0===clearProperyAfterTransition&&(clearProperyAfterTransition=!1);var fx=this._addProp("to",prop,val);return clearProperyAfterTransition&&this.afterClearStyles(fx.trans?["transform","-webkit-transform"]:[prop]),this},Animator.prototype.fromTo=function(prop,fromVal,toVal,clearProperyAfterTransition){return this.from(prop,fromVal).to(prop,toVal,clearProperyAfterTransition)},Animator.prototype._getProp=function(name){if(this._fxProperties)return this._fxProperties.find((function(prop){return prop.effectName===name}))},Animator.prototype._addProp=function(state,prop,val){var fxProp=this._getProp(prop);if(!fxProp){var shouldTrans=1===TRANSFORM_PROPS[prop];fxProp={effectName:prop,trans:shouldTrans,wc:shouldTrans?"transform":prop},(this._fxProperties=this._fxProperties||[]).push(fxProp)}var fxState={val:val,num:0,effectUnit:""};if(fxProp[state]=fxState,"string"==typeof val&&val.indexOf(" ")<0){var r=val.match(CSS_VALUE_REGEX);if(r){var num=parseFloat(r[1]);isNaN(num)||(fxState.num=num),fxState.effectUnit=r[0]!==r[2]?r[2]:""}}else"number"==typeof val&&(fxState.num=val);return fxProp},Animator.prototype.beforeAddClass=function(className){return(this._beforeAddClasses=this._beforeAddClasses||[]).push(className),this},Animator.prototype.beforeRemoveClass=function(className){return(this._beforeRemoveClasses=this._beforeRemoveClasses||[]).push(className),this},Animator.prototype.beforeStyles=function(styles){return this._beforeStyles=styles,this},Animator.prototype.beforeClearStyles=function(propertyNames){this._beforeStyles=this._beforeStyles||{};for(var _i=0,propertyNames_1=propertyNames;_i<propertyNames_1.length;_i++){var prop=propertyNames_1[_i];this._beforeStyles[prop]=""}return this},Animator.prototype.beforeAddRead=function(domReadFn){return(this._readCallbacks=this._readCallbacks||[]).push(domReadFn),this},Animator.prototype.beforeAddWrite=function(domWriteFn){return(this._writeCallbacks=this._writeCallbacks||[]).push(domWriteFn),this},Animator.prototype.afterAddClass=function(className){return(this._afterAddClasses=this._afterAddClasses||[]).push(className),this},Animator.prototype.afterRemoveClass=function(className){return(this._afterRemoveClasses=this._afterRemoveClasses||[]).push(className),this},Animator.prototype.afterStyles=function(styles){return this._afterStyles=styles,this},Animator.prototype.afterClearStyles=function(propertyNames){this._afterStyles=this._afterStyles||{};for(var _i=0,propertyNames_2=propertyNames;_i<propertyNames_2.length;_i++){var prop=propertyNames_2[_i];this._afterStyles[prop]=""}return this},Animator.prototype.play=function(opts){var _this=this;this._destroyed||(this._isAsync=this._hasDuration(opts),this._clearAsync(),this._playInit(opts),raf((function(){raf((function(){_this._playDomInspect(opts)}))})))},Animator.prototype.playAsync=function(opts){var _this=this;return new Promise((function(resolve){return _this.onFinish(resolve,{oneTimeCallback:!0,clearExistingCallbacks:!0}),_this.play(opts),_this}))},Animator.prototype.playSync=function(){if(!this._destroyed){var opts={duration:0};this._isAsync=!1,this._clearAsync(),this._playInit(opts),this._playDomInspect(opts)}},Animator.prototype._playInit=function(opts){this._hasTweenEffect=!1,this.isPlaying=!0,this.hasCompleted=!1,this._hasDur=this.getDuration(opts)>32;var children=this._childAnimations;if(children)for(var _i=0,children_1=children;_i<children_1.length;_i++){children_1[_i]._playInit(opts)}this._hasDur&&(this._progress(0),this._willChange(!0))},Animator.prototype._playDomInspect=function(opts){var _this=this;this._beforeAnimation();var dur=this.getDuration(opts);this._isAsync&&this._asyncEnd(dur,!0),this._playProgress(opts),this._isAsync&&!this._destroyed&&raf((function(){_this._playToStep(1)}))},Animator.prototype._playProgress=function(opts){var children=this._childAnimations;if(children)for(var _i=0,children_2=children;_i<children_2.length;_i++){children_2[_i]._playProgress(opts)}this._hasDur?this._setTrans(this.getDuration(opts),!1):(this._progress(1),this._setAfterStyles(),this._didFinish(!0))},Animator.prototype._playToStep=function(stepValue){if(!this._destroyed){var children=this._childAnimations;if(children)for(var _i=0,children_3=children;_i<children_3.length;_i++){children_3[_i]._playToStep(stepValue)}this._hasDur&&this._progress(stepValue)}},Animator.prototype._asyncEnd=function(dur,shouldComplete){var self=this;self._unregisterTrnsEnd=function(el,callback){var unRegTrans,opts={passive:!0},unregister=function(){unRegTrans&&unRegTrans()},onTransitionEnd=function(ev){el===ev.target&&(unregister(),callback(ev))};return el&&(el.addEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.addEventListener("transitionend",onTransitionEnd,opts),unRegTrans=function(){el.removeEventListener("webkitTransitionEnd",onTransitionEnd,opts),el.removeEventListener("transitionend",onTransitionEnd,opts)}),unregister}(self._transEl(),(function(){self._clearAsync(),self._playEnd(),self._didFinishAll(shouldComplete,!0,!1)})),self._timerId=setTimeout((function(){self._timerId=void 0,self._clearAsync(),self._playEnd(shouldComplete?1:0),self._didFinishAll(shouldComplete,!0,!1)}),dur+400)},Animator.prototype._playEnd=function(stepValue){var children=this._childAnimations;if(children)for(var _i=0,children_4=children;_i<children_4.length;_i++){children_4[_i]._playEnd(stepValue)}this._hasDur&&(void 0!==stepValue&&(this._setTrans(0,!0),this._progress(stepValue)),this._setAfterStyles(),this._willChange(!1))},Animator.prototype._hasDuration=function(opts){if(this.getDuration(opts)>32)return!0;var children=this._childAnimations;if(children)for(var _i=0,children_5=children;_i<children_5.length;_i++){if(children_5[_i]._hasDuration(opts))return!0}return!1},Animator.prototype._hasDomReads=function(){if(this._readCallbacks&&this._readCallbacks.length>0)return!0;var children=this._childAnimations;if(children)for(var _i=0,children_6=children;_i<children_6.length;_i++){if(children_6[_i]._hasDomReads())return!0}return!1},Animator.prototype.stop=function(stepValue){void 0===stepValue&&(stepValue=1),this._clearAsync(),this._hasDur=!0,this._playEnd(stepValue)},Animator.prototype._clearAsync=function(){this._unregisterTrnsEnd&&this._unregisterTrnsEnd(),this._timerId&&clearTimeout(this._timerId),this._timerId=this._unregisterTrnsEnd=void 0},Animator.prototype._progress=function(stepValue){var val,elements=this._elements,effects=this._fxProperties;if(elements&&0!==elements.length&&effects&&!this._destroyed){this._isReverse&&(stepValue=1-stepValue);var fx,i=0,j=0,finalTransform="";for(i=0;i<effects.length;i++)if((fx=effects[i]).from&&fx.to){var fromNum=fx.from.num,toNum=fx.to.num,tweenEffect=fromNum!==toNum;if(tweenEffect&&(this._hasTweenEffect=!0),0===stepValue)val=fx.from.val;else if(1===stepValue)val=fx.to.val;else if(tweenEffect){val=(toNum-fromNum)*stepValue+fromNum+fx.to.effectUnit}if(null!==val){var prop=fx.effectName;if(fx.trans)finalTransform+=prop+"("+val+") ";else for(j=0;j<elements.length;j++)elements[j].style.setProperty(prop,val)}}if(finalTransform.length>0)for((!this._isReverse&&1!==stepValue||this._isReverse&&0!==stepValue)&&(finalTransform+="translateZ(0px)"),i=0;i<elements.length;i++)elements[i].style.setProperty("transform",finalTransform),elements[i].style.setProperty("-webkit-transform",finalTransform)}},Animator.prototype._setTrans=function(dur,forcedLinearEasing){var elements=this._elements;if(elements&&0!==elements.length&&this._fxProperties)for(var easing=forcedLinearEasing?"linear":this.getEasing(),durString=dur+"ms",_i=0,elements_1=elements;_i<elements_1.length;_i++){var style=elements_1[_i].style;dur>0?(style.transitionDuration=durString,null!==easing&&(style.transitionTimingFunction=easing)):style.transitionDuration="0"}},Animator.prototype._beforeAnimation=function(){this._fireBeforeReadFunc(),this._fireBeforeWriteFunc(),this._setBeforeStyles()},Animator.prototype._setBeforeStyles=function(){var children=this._childAnimations;if(children)for(var _i=0,children_7=children;_i<children_7.length;_i++){children_7[_i]._setBeforeStyles()}var elements=this._elements;if(elements&&0!==elements.length&&!this._isReverse)for(var addClasses=this._beforeAddClasses,removeClasses=this._beforeRemoveClasses,_a=0,elements_2=elements;_a<elements_2.length;_a++){var el=elements_2[_a],elementClassList=el.classList;if(addClasses)for(var _b=0,addClasses_1=addClasses;_b<addClasses_1.length;_b++){var c=addClasses_1[_b];elementClassList.add(c)}if(removeClasses)for(var _c=0,removeClasses_1=removeClasses;_c<removeClasses_1.length;_c++){c=removeClasses_1[_c];elementClassList.remove(c)}if(this._beforeStyles)for(var _d=0,_e=Object.entries(this._beforeStyles);_d<_e.length;_d++){var _f=_e[_d],key=_f[0],value=_f[1];el.style.setProperty(key,value)}}},Animator.prototype._fireBeforeReadFunc=function(){var children=this._childAnimations;if(children)for(var _i=0,children_8=children;_i<children_8.length;_i++){children_8[_i]._fireBeforeReadFunc()}var readFunctions=this._readCallbacks;if(readFunctions)for(var _a=0,readFunctions_1=readFunctions;_a<readFunctions_1.length;_a++){(0,readFunctions_1[_a])()}},Animator.prototype._fireBeforeWriteFunc=function(){var children=this._childAnimations;if(children)for(var _i=0,children_9=children;_i<children_9.length;_i++){children_9[_i]._fireBeforeWriteFunc()}var writeFunctions=this._writeCallbacks;if(writeFunctions)for(var _a=0,writeFunctions_1=writeFunctions;_a<writeFunctions_1.length;_a++){(0,writeFunctions_1[_a])()}},Animator.prototype._setAfterStyles=function(){var elements=this._elements;if(elements)for(var _i=0,elements_3=elements;_i<elements_3.length;_i++){var el=elements_3[_i],elementClassList=el.classList;if(el.style.transitionDuration=el.style.transitionTimingFunction="",this._isReverse){var beforeAddClasses=this._beforeAddClasses;if(beforeAddClasses)for(var _a=0,beforeAddClasses_1=beforeAddClasses;_a<beforeAddClasses_1.length;_a++){var c=beforeAddClasses_1[_a];elementClassList.remove(c)}var beforeRemoveClasses=this._beforeRemoveClasses;if(beforeRemoveClasses)for(var _b=0,beforeRemoveClasses_1=beforeRemoveClasses;_b<beforeRemoveClasses_1.length;_b++){c=beforeRemoveClasses_1[_b];elementClassList.add(c)}var beforeStyles=this._beforeStyles;if(beforeStyles)for(var _c=0,_d=Object.keys(beforeStyles);_c<_d.length;_c++){var propName=_d[_c];el.style.removeProperty(propName)}}else{var afterAddClasses=this._afterAddClasses;if(afterAddClasses)for(var _e=0,afterAddClasses_1=afterAddClasses;_e<afterAddClasses_1.length;_e++){c=afterAddClasses_1[_e];elementClassList.add(c)}var afterRemoveClasses=this._afterRemoveClasses;if(afterRemoveClasses)for(var _f=0,afterRemoveClasses_1=afterRemoveClasses;_f<afterRemoveClasses_1.length;_f++){c=afterRemoveClasses_1[_f];elementClassList.remove(c)}var afterStyles=this._afterStyles;if(afterStyles)for(var _g=0,_h=Object.entries(afterStyles);_g<_h.length;_g++){var _j=_h[_g],key=_j[0],value=_j[1];el.style.setProperty(key,value)}}}},Animator.prototype._willChange=function(addWillChange){var wc,willChange,effects=this._fxProperties;if(addWillChange&&effects){wc=[];for(var _i=0,effects_1=effects;_i<effects_1.length;_i++){var propWC=effects_1[_i].wc;"webkitTransform"===propWC?wc.push("transform","-webkit-transform"):void 0!==propWC&&wc.push(propWC)}willChange=wc.join(",")}else willChange="";var elements=this._elements;if(elements)for(var _a=0,elements_4=elements;_a<elements_4.length;_a++){elements_4[_a].style.setProperty("will-change",willChange)}},Animator.prototype.progressStart=function(){this._clearAsync(),this._beforeAnimation(),this._progressStart()},Animator.prototype._progressStart=function(){var children=this._childAnimations;if(children)for(var _i=0,children_10=children;_i<children_10.length;_i++){children_10[_i]._progressStart()}this._setTrans(0,!0),this._willChange(!0)},Animator.prototype.progressStep=function(stepValue){stepValue=Math.min(1,Math.max(0,stepValue));var children=this._childAnimations;if(children)for(var _i=0,children_11=children;_i<children_11.length;_i++){children_11[_i].progressStep(stepValue)}this._progress(stepValue)},Animator.prototype.progressEnd=function(shouldComplete,currentStepValue,dur){var _this=this;void 0===dur&&(dur=-1),this._isReverse&&(currentStepValue=1-currentStepValue);var stepValue=shouldComplete?1:0,diff=Math.abs(currentStepValue-stepValue);dur<0?dur=this._duration||0:diff<.05&&(dur=0),this._isAsync=dur>30,this._progressEnd(shouldComplete,stepValue,dur,this._isAsync),this._isAsync&&(this._asyncEnd(dur,shouldComplete),this._destroyed||raf((function(){_this._playToStep(stepValue)})))},Animator.prototype._progressEnd=function(shouldComplete,stepValue,dur,isAsync){var children=this._childAnimations;if(children)for(var _i=0,children_12=children;_i<children_12.length;_i++){children_12[_i]._progressEnd(shouldComplete,stepValue,dur,isAsync)}isAsync?(this.isPlaying=!0,this.hasCompleted=!1,this._hasDur=!0,this._willChange(!0),this._setTrans(dur,!1)):(this._progress(stepValue),this._willChange(!1),this._setAfterStyles(),this._didFinish(shouldComplete))},Animator.prototype.onFinish=function(callback,opts){return opts&&opts.clearExistingCallbacks&&(this._onFinishCallbacks=this._onFinishOneTimeCallbacks=void 0),opts&&opts.oneTimeCallback?(this._onFinishOneTimeCallbacks=this._onFinishOneTimeCallbacks||[],this._onFinishOneTimeCallbacks.push(callback)):(this._onFinishCallbacks=this._onFinishCallbacks||[],this._onFinishCallbacks.push(callback)),this},Animator.prototype._didFinishAll=function(hasCompleted,finishAsyncAnimations,finishNoDurationAnimations){var children=this._childAnimations;if(children)for(var _i=0,children_13=children;_i<children_13.length;_i++){children_13[_i]._didFinishAll(hasCompleted,finishAsyncAnimations,finishNoDurationAnimations)}(finishAsyncAnimations&&this._isAsync||finishNoDurationAnimations&&!this._isAsync)&&this._didFinish(hasCompleted)},Animator.prototype._didFinish=function(hasCompleted){if(this.isPlaying=!1,this.hasCompleted=hasCompleted,this._onFinishCallbacks)for(var _i=0,_a=this._onFinishCallbacks;_i<_a.length;_i++){(0,_a[_i])(this)}if(this._onFinishOneTimeCallbacks){for(var _b=0,_c=this._onFinishOneTimeCallbacks;_b<_c.length;_b++){(0,_c[_b])(this)}this._onFinishOneTimeCallbacks.length=0}},Animator.prototype.reverse=function(shouldReverse){void 0===shouldReverse&&(shouldReverse=!0);var children=this._childAnimations;if(children)for(var _i=0,children_14=children;_i<children_14.length;_i++){children_14[_i].reverse(shouldReverse)}return this._isReverse=!!shouldReverse,this},Animator.prototype.destroy=function(){this._didFinish(!1),this._destroyed=!0;var children=this._childAnimations;if(children)for(var _i=0,children_15=children;_i<children_15.length;_i++){children_15[_i].destroy()}this._clearAsync(),this._elements&&(this._elements.length=0),this._readCallbacks&&(this._readCallbacks.length=0),this._writeCallbacks&&(this._writeCallbacks.length=0),this.parent=void 0,this._childAnimations&&(this._childAnimations.length=0),this._onFinishCallbacks&&(this._onFinishCallbacks.length=0),this._onFinishOneTimeCallbacks&&(this._onFinishOneTimeCallbacks.length=0)},Animator.prototype._transEl=function(){var children=this._childAnimations;if(children)for(var _i=0,children_16=children;_i<children_16.length;_i++){var targetEl=children_16[_i]._transEl();if(targetEl)return targetEl}return this._hasTweenEffect&&this._hasDur&&void 0!==this._elements&&this._elements.length>0?this._elements[0]:null},Animator}(),create=function(animationBuilder,baseEl,opts){return animationBuilder?animationBuilder(Animator,baseEl,opts):Promise.resolve(new Animator)}}}]);
//# sourceMappingURL=3.c7e4a3e6207709547a95.bundle.js.map