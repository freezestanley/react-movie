(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"3Sad":function(a,e,n){"use strict";n.r(e),n.d(e,"default",function(){return f});var t=n("p0pE"),c=n.n(t),o=n("qIgq"),l=n.n(o),u=n("q1tI"),i=n.n(u),r=n("3a4m"),p=n.n(r),s=n("h/fk"),d=n("uJMD"),b=n("fmEU"),k=n("ox7y"),y=n("YllW"),w=n.n(y);function f(){var a=d["b"].get("out_trade_no"),e=d["b"].get("paylink"),n=Object(u["useReducer"])((a,e)=>c()({},a,e),{isOk:!1,delay:2e3,count:0}),t=l()(n,2),o=t[0],r=t[1],y=()=>{p.a.replace("/orderdetail?id=".concat(a))};Object(s["a"])(()=>{r({count:o.count+1}),o.count>5&&r({delay:null}),Object(b["f"])(a).then(a=>{a&&(2===a.status?(r({isOk:!0}),y()):r({isOk:!1}))})},o.isOk?null:o.delay);var f=()=>{var n=Object(k["b"])({outTradeNo:a,payLink:e});window.location.href=n};return i.a.createElement("div",{className:w.a.wxpay},i.a.createElement("button",{onClick:y},"\u5df2\u5b8c\u6210\u652f\u4ed8"),i.a.createElement("button",{className:w.a.payAgain,onClick:f},"\u652f\u4ed8\u9047\u5230\u95ee\u9898\uff0c\u91cd\u65b0\u652f\u4ed8"),i.a.createElement("button",{onClick:()=>p.a.push("/")},"\u8fd4\u56de\u9996\u9875"))}},YllW:function(a,e,n){a.exports={wxpay:"wxpay___1fd0F",payAgain:"payAgain___6Fqbq"}}}]);