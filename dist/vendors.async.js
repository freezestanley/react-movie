(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{Bhv6:function(t,e,n){"use strict";var i=n("17x9"),r=n.n(i),o=n("q1tI"),s=n.n(o),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function u(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l="undefined"!==typeof window?n("yLV6"):void 0,p={children:!0,direction:!0,options:!0,recognizeWith:!0,vertical:!0},f={action:"tap press",onDoubleTap:"doubletap",onPan:"pan",onPanCancel:"pancancel",onPanEnd:"panend",onPanStart:"panstart",onPinch:"pinch",onPinchCancel:"pinchcancel",onPinchEnd:"pinchend",onPinchIn:"pinchin",onPinchOut:"pinchout",onPinchStart:"pinchstart",onPress:"press",onPressUp:"pressup",onRotate:"rotate",onRotateCancel:"rotatecancel",onRotateEnd:"rotateend",onRotateMove:"rotatemove",onRotateStart:"rotatestart",onSwipe:"swipe",onSwipeRight:"swiperight",onSwipeLeft:"swipeleft",onSwipeUp:"swipeup",onSwipeDown:"swipedown",onTap:"tap"};function v(t,e){e.hasOwnProperty("vertical")&&console.warn("vertical is deprecated, please use `direction` instead");var n=e.direction;if(n||e.hasOwnProperty("vertical")){var i=n||(e.vertical?"DIRECTION_ALL":"DIRECTION_HORIZONTAL");t.get("pan").set({direction:l[i]}),t.get("swipe").set({direction:l[i]})}e.options&&Object.keys(e.options).forEach(function(n){if("recognizers"===n)Object.keys(e.options.recognizers).forEach(function(n){var i=t.get(n);i.set(e.options.recognizers[n]),e.options.recognizers[n].requireFailure&&i.requireFailure(e.options.recognizers[n].requireFailure)},this);else{var i=n,r={};r[i]=e.options[n],t.set(r)}},this),e.recognizeWith&&Object.keys(e.recognizeWith).forEach(function(n){var i=t.get(n);i.recognizeWith(e.recognizeWith[n])},this),Object.keys(e).forEach(function(n){var i=f[n];i&&(t.off(i),t.on(i,e[n]))})}Object.keys(f).forEach(function(t){p[t]=!0});var d=function(t){function e(){return h(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return u(e,t),a(e,[{key:"componentDidMount",value:function(){this.hammer=new l(this.domElement),v(this.hammer,this.props)}},{key:"componentDidUpdate",value:function(){this.hammer&&v(this.hammer,this.props)}},{key:"componentWillUnmount",value:function(){this.hammer&&(this.hammer.stop(),this.hammer.destroy()),this.hammer=null}},{key:"render",value:function(){var t={};Object.keys(this.props).forEach(function(e){p[e]||(t[e]=this.props[e])},this);var e=this;return t.ref=function(t){e.props.ref&&e.props.ref(t),e.domElement=t},s.a.cloneElement(s.a.Children.only(this.props.children),t)}}]),e}(s.a.Component);d.displayName="Hammer",d.propTypes={className:r.a.string},e["a"]=d},K7k0:function(t,e,n){},prtM:function(t,e,n){},tyWD:function(t,e,n){},yLV6:function(t,e,n){var i;(function(r,o,s,a){"use strict";var h,c=["","webkit","Moz","MS","ms","o"],u=o.createElement("div"),l="function",p=Math.round,f=Math.abs,v=Date.now;function d(t,e,n){return setTimeout(b(t,n),e)}function m(t,e,n){return!!Array.isArray(t)&&(g(t,n[e],n),!0)}function g(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a){i=0;while(i<t.length)e.call(n,t[i],i,t),i++}else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function y(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=r.console&&(r.console.warn||r.console.log);return o&&o.call(r.console,i,n),t.apply(this,arguments)}}h="function"!==typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var T=y(function(t,e,n){var i=Object.keys(e),r=0;while(r<i.length)(!n||n&&t[i[r]]===a)&&(t[i[r]]=e[i[r]]),r++;return t},"extend","Use `assign`."),E=y(function(t,e){return T(t,e,!0)},"merge","Use `assign`.");function w(t,e,n){var i,r=e.prototype;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&h(i,n)}function b(t,e){return function(){return t.apply(e,arguments)}}function P(t,e){return typeof t==l?t.apply(e&&e[0]||a,e):t}function I(t,e){return t===a?e:t}function O(t,e,n){g(A(e),function(e){t.addEventListener(e,n,!1)})}function _(t,e,n){g(A(e),function(e){t.removeEventListener(e,n,!1)})}function S(t,e){while(t){if(t==e)return!0;t=t.parentNode}return!1}function C(t,e){return t.indexOf(e)>-1}function A(t){return t.trim().split(/\s+/g)}function D(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);var i=0;while(i<t.length){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function R(t){return Array.prototype.slice.call(t,0)}function z(t,e,n){var i=[],r=[],o=0;while(o<t.length){var s=e?t[o][e]:t[o];D(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function x(t,e){var n,i,r=e[0].toUpperCase()+e.slice(1),o=0;while(o<c.length){if(n=c[o],i=n?n+r:e,i in t)return i;o++}return a}var M=1;function N(){return M++}function k(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}var X=/mobile|tablet|ip(ad|hone|od)|android/i,Y="ontouchstart"in r,W=x(r,"PointerEvent")!==a,F=Y&&X.test(navigator.userAgent),j="touch",q="pen",L="mouse",H="kinect",U=25,V=1,G=2,Z=4,B=8,J=1,K=2,$=4,Q=8,tt=16,et=K|$,nt=Q|tt,it=et|nt,rt=["x","y"],ot=["clientX","clientY"];function st(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){P(t.options.enable,[t])&&n.handler(e)},this.init()}function at(t){var e,n=t.options.inputClass;return e=n||(W?Ct:F?kt:Y?Ft:Pt),new e(t,ht)}function ht(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=e&V&&i-r===0,s=e&(Z|B)&&i-r===0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,ct(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function ct(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=pt(e)),r>1&&!n.firstMultiple?n.firstMultiple=pt(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,a=s?s.center:o.center,h=e.center=ft(i);e.timeStamp=v(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=gt(a,h),e.distance=mt(a,h),ut(n,e),e.offsetDirection=dt(e.deltaX,e.deltaY);var c=vt(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=f(c.x)>f(c.y)?c.x:c.y,e.scale=s?Tt(s.pointers,i):1,e.rotation=s?yt(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,lt(n,e);var u=t.element;S(e.srcEvent.target,u)&&(u=e.srcEvent.target),e.target=u}function ut(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};e.eventType!==V&&o.eventType!==Z||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function lt(t,e){var n,i,r,o,s=t.lastInterval||e,h=e.timeStamp-s.timeStamp;if(e.eventType!=B&&(h>U||s.velocity===a)){var c=e.deltaX-s.deltaX,u=e.deltaY-s.deltaY,l=vt(h,c,u);i=l.x,r=l.y,n=f(l.x)>f(l.y)?l.x:l.y,o=dt(c,u),t.lastInterval=e}else n=s.velocity,i=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=o}function pt(t){var e=[],n=0;while(n<t.pointers.length)e[n]={clientX:p(t.pointers[n].clientX),clientY:p(t.pointers[n].clientY)},n++;return{timeStamp:v(),pointers:e,center:ft(e),deltaX:t.deltaX,deltaY:t.deltaY}}function ft(t){var e=t.length;if(1===e)return{x:p(t[0].clientX),y:p(t[0].clientY)};var n=0,i=0,r=0;while(r<e)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:p(n/e),y:p(i/e)}}function vt(t,e,n){return{x:e/t||0,y:n/t||0}}function dt(t,e){return t===e?J:f(t)>=f(e)?t<0?K:$:e<0?Q:tt}function mt(t,e,n){n||(n=rt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function gt(t,e,n){n||(n=rt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function yt(t,e){return gt(e[1],e[0],ot)+gt(t[1],t[0],ot)}function Tt(t,e){return mt(e[0],e[1],ot)/mt(t[0],t[1],ot)}st.prototype={handler:function(){},init:function(){this.evEl&&O(this.element,this.evEl,this.domHandler),this.evTarget&&O(this.target,this.evTarget,this.domHandler),this.evWin&&O(k(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&_(this.element,this.evEl,this.domHandler),this.evTarget&&_(this.target,this.evTarget,this.domHandler),this.evWin&&_(k(this.element),this.evWin,this.domHandler)}};var Et={mousedown:V,mousemove:G,mouseup:Z},wt="mousedown",bt="mousemove mouseup";function Pt(){this.evEl=wt,this.evWin=bt,this.pressed=!1,st.apply(this,arguments)}w(Pt,st,{handler:function(t){var e=Et[t.type];e&V&&0===t.button&&(this.pressed=!0),e&G&&1!==t.which&&(e=Z),this.pressed&&(e&Z&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:L,srcEvent:t}))}});var It={pointerdown:V,pointermove:G,pointerup:Z,pointercancel:B,pointerout:B},Ot={2:j,3:q,4:L,5:H},_t="pointerdown",St="pointermove pointerup pointercancel";function Ct(){this.evEl=_t,this.evWin=St,st.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}r.MSPointerEvent&&!r.PointerEvent&&(_t="MSPointerDown",St="MSPointerMove MSPointerUp MSPointerCancel"),w(Ct,st,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=It[i],o=Ot[t.pointerType]||t.pointerType,s=o==j,a=D(e,t.pointerId,"pointerId");r&V&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):r&(Z|B)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(a,1))}});var At={touchstart:V,touchmove:G,touchend:Z,touchcancel:B},Dt="touchstart",Rt="touchstart touchmove touchend touchcancel";function zt(){this.evTarget=Dt,this.evWin=Rt,this.started=!1,st.apply(this,arguments)}function xt(t,e){var n=R(t.touches),i=R(t.changedTouches);return e&(Z|B)&&(n=z(n.concat(i),"identifier",!0)),[n,i]}w(zt,st,{handler:function(t){var e=At[t.type];if(e===V&&(this.started=!0),this.started){var n=xt.call(this,t,e);e&(Z|B)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:j,srcEvent:t})}}});var Mt={touchstart:V,touchmove:G,touchend:Z,touchcancel:B},Nt="touchstart touchmove touchend touchcancel";function kt(){this.evTarget=Nt,this.targetIds={},st.apply(this,arguments)}function Xt(t,e){var n=R(t.touches),i=this.targetIds;if(e&(V|G)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,o,s=R(t.changedTouches),a=[],h=this.target;if(o=n.filter(function(t){return S(t.target,h)}),e===V){r=0;while(r<o.length)i[o[r].identifier]=!0,r++}r=0;while(r<s.length)i[s[r].identifier]&&a.push(s[r]),e&(Z|B)&&delete i[s[r].identifier],r++;return a.length?[z(o.concat(a),"identifier",!0),a]:void 0}w(kt,st,{handler:function(t){var e=Mt[t.type],n=Xt.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:j,srcEvent:t})}});var Yt=2500,Wt=25;function Ft(){st.apply(this,arguments);var t=b(this.handler,this);this.touch=new kt(this.manager,t),this.mouse=new Pt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function jt(t,e){t&V?(this.primaryTouch=e.changedPointers[0].identifier,qt.call(this,e)):t&(Z|B)&&qt.call(this,e)}function qt(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,r=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(r,Yt)}}function Lt(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],o=Math.abs(e-r.x),s=Math.abs(n-r.y);if(o<=Wt&&s<=Wt)return!0}return!1}w(Ft,st,{handler:function(t,e,n){var i=n.pointerType==j,r=n.pointerType==L;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)jt.call(this,e,n);else if(r&&Lt.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ht=x(u.style,"touchAction"),Ut=Ht!==a,Vt="compute",Gt="auto",Zt="manipulation",Bt="none",Jt="pan-x",Kt="pan-y",$t=ee();function Qt(t,e){this.manager=t,this.set(e)}function te(t){if(C(t,Bt))return Bt;var e=C(t,Jt),n=C(t,Kt);return e&&n?Bt:e||n?e?Jt:Kt:C(t,Zt)?Zt:Gt}function ee(){if(!Ut)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||r.CSS.supports("touch-action",n)}),t}Qt.prototype={set:function(t){t==Vt&&(t=this.compute()),Ut&&this.manager.element.style&&$t[t]&&(this.manager.element.style[Ht]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return g(this.manager.recognizers,function(e){P(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),te(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,r=C(i,Bt)&&!$t[Bt],o=C(i,Kt)&&!$t[Kt],s=C(i,Jt)&&!$t[Jt];if(r){var a=1===t.pointers.length,h=t.distance<2,c=t.deltaTime<250;if(a&&h&&c)return}if(!s||!o)return r||o&&n&et||s&&n&nt?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ne=1,ie=2,re=4,oe=8,se=oe,ae=16,he=32;function ce(t){this.options=h({},this.defaults,t||{}),this.id=N(),this.manager=null,this.options.enable=I(this.options.enable,!0),this.state=ne,this.simultaneous={},this.requireFail=[]}function ue(t){return t&ae?"cancel":t&oe?"end":t&re?"move":t&ie?"start":""}function le(t){return t==tt?"down":t==Q?"up":t==K?"left":t==$?"right":""}function pe(t,e){var n=e.manager;return n?n.get(t):t}function fe(){ce.apply(this,arguments)}function ve(){fe.apply(this,arguments),this.pX=null,this.pY=null}function de(){fe.apply(this,arguments)}function me(){ce.apply(this,arguments),this._timer=null,this._input=null}function ge(){fe.apply(this,arguments)}function ye(){fe.apply(this,arguments)}function Te(){ce.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Ee(t,e){return e=e||{},e.recognizers=I(e.recognizers,Ee.defaults.preset),new Pe(t,e)}ce.prototype={defaults:{},set:function(t){return h(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(m(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=pe(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return m(t,"dropRecognizeWith",this)?this:(t=pe(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(m(t,"requireFailure",this))return this;var e=this.requireFail;return t=pe(t,this),-1===D(e,t)&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(m(t,"dropRequireFailure",this))return this;t=pe(t,this);var e=D(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function i(n){e.manager.emit(n,t)}n<oe&&i(e.options.event+ue(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=oe&&i(e.options.event+ue(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=he},canEmit:function(){var t=0;while(t<this.requireFail.length){if(!(this.requireFail[t].state&(he|ne)))return!1;t++}return!0},recognize:function(t){var e=h({},t);if(!P(this.options.enable,[this,e]))return this.reset(),void(this.state=he);this.state&(se|ae|he)&&(this.state=ne),this.state=this.process(e),this.state&(ie|re|oe|ae)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},w(fe,ce,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(ie|re),r=this.attrTest(t);return i&&(n&B||!r)?e|ae:i||r?n&Z?e|oe:e&ie?e|re:ie:he}}),w(ve,fe,{defaults:{event:"pan",threshold:10,pointers:1,direction:it},getTouchAction:function(){var t=this.options.direction,e=[];return t&et&&e.push(Kt),t&nt&&e.push(Jt),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(e.direction&et?(r=0===o?J:o<0?K:$,n=o!=this.pX,i=Math.abs(t.deltaX)):(r=0===s?J:s<0?Q:tt,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return fe.prototype.attrTest.call(this,t)&&(this.state&ie||!(this.state&ie)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=le(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),w(de,fe,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Bt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ie)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),w(me,ce,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Gt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(Z|B)&&!r)this.reset();else if(t.eventType&V)this.reset(),this._timer=d(function(){this.state=se,this.tryEmit()},e.time,this);else if(t.eventType&Z)return se;return he},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===se&&(t&&t.eventType&Z?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=v(),this.manager.emit(this.options.event,this._input)))}}),w(ge,fe,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Bt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ie)}}),w(ye,fe,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:et|nt,pointers:1},getTouchAction:function(){return ve.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(et|nt)?e=t.overallVelocity:n&et?e=t.overallVelocityX:n&nt&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&f(e)>this.options.velocity&&t.eventType&Z},emit:function(t){var e=le(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),w(Te,ce,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Zt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&V&&0===this.count)return this.failTimeout();if(i&&r&&n){if(t.eventType!=Z)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||mt(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,s&&o?this.count+=1:this.count=1,this._input=t;var a=this.count%e.taps;if(0===a)return this.hasRequireFailures()?(this._timer=d(function(){this.state=se,this.tryEmit()},e.interval,this),ie):se}return he},failTimeout:function(){return this._timer=d(function(){this.state=he},this.options.interval,this),he},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==se&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Ee.VERSION="2.0.7",Ee.defaults={domEvents:!1,touchAction:Vt,enable:!0,inputTarget:null,inputClass:null,preset:[[ge,{enable:!1}],[de,{enable:!1},["rotate"]],[ye,{direction:et}],[ve,{direction:et},["swipe"]],[Te],[Te,{event:"doubletap",taps:2},["tap"]],[me]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var we=1,be=2;function Pe(t,e){this.options=h({},Ee.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=at(this),this.touchAction=new Qt(this,this.options.touchAction),Ie(this,!0),g(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function Ie(t,e){var n,i=t.element;i.style&&(g(t.options.cssProps,function(r,o){n=x(i.style,o),e?(t.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=t.oldCssProps[n]||""}),e||(t.oldCssProps={}))}function Oe(t,e){var n=o.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}Pe.prototype={set:function(t){return h(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?be:we},recognize:function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&se)&&(r=e.curRecognizer=null);var o=0;while(o<i.length)n=i[o],e.stopped===be||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(ie|re|oe)&&(r=e.curRecognizer=n),o++}},get:function(t){if(t instanceof ce)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(m(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(m(t,"remove",this))return this;if(t=this.get(t),t){var e=this.recognizers,n=D(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return g(A(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return g(A(t),function(t){e?n[t]&&n[t].splice(D(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&Oe(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};var i=0;while(i<n.length)n[i](e),i++}},destroy:function(){this.element&&Ie(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(Ee,{INPUT_START:V,INPUT_MOVE:G,INPUT_END:Z,INPUT_CANCEL:B,STATE_POSSIBLE:ne,STATE_BEGAN:ie,STATE_CHANGED:re,STATE_ENDED:oe,STATE_RECOGNIZED:se,STATE_CANCELLED:ae,STATE_FAILED:he,DIRECTION_NONE:J,DIRECTION_LEFT:K,DIRECTION_RIGHT:$,DIRECTION_UP:Q,DIRECTION_DOWN:tt,DIRECTION_HORIZONTAL:et,DIRECTION_VERTICAL:nt,DIRECTION_ALL:it,Manager:Pe,Input:st,TouchAction:Qt,TouchInput:kt,MouseInput:Pt,PointerEventInput:Ct,TouchMouseInput:Ft,SingleTouchInput:zt,Recognizer:ce,AttrRecognizer:fe,Tap:Te,Pan:ve,Swipe:ye,Pinch:de,Rotate:ge,Press:me,on:O,off:_,each:g,merge:E,extend:T,assign:h,inherit:w,bindFn:b,prefixed:x});var _e="undefined"!==typeof r?r:"undefined"!==typeof self?self:{};_e.Hammer=Ee,i=function(){return Ee}.call(e,n,e,t),i===a||(t.exports=i)})(window,document)}}]);