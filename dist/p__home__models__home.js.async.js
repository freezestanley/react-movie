(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"msn/":function(e,t,r){"use strict";r.r(t);var a=r("Ico4"),n=r.n(a),s=r("mK77"),u=r.n(s),c=r("k9Yu");t["default"]={namespace:"home",state:{},reducers:{setState(e,t){var r=t.payload;return u()({},e,r)}},effects:{login(e,t){return n.a.mark(function r(){var a,s,u;return n.a.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return a=e.payload,t.put,s=t.call,r.next=4,s(c["f"],a);case 4:return u=r.sent,r.abrupt("return",u);case 6:case"end":return r.stop()}},r)})()}},subscriptions:{setup(e){var t=e.dispatch,r=e.history;return r.listen(e=>{var r=e.pathname,a=e.query;"/users"===r&&t({type:"fetch",payload:a})})}}}}}]);