(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8qyr":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),c=a.n(r),s=a("/MKj"),o=(a("TSYQ"),a("mVOW")),i=a.n(o),d=a("MXX2"),n=[{title:"6\u6708\u5238\xb7\u70ed\u95e8\u4f1a\u5458\u6708\u5361\u591a\u9009\u4e00",retitle:"\u76ce\u53f8\u767d\u91d1\u89c6\u542c\u5e74\u5361",time:"2020-07-30",state:"used",name:"\u817e\u8baf\u89c6\u9891\u4f1a\u5458VIP\u6708\u5361",account:"88874777839847564",paytime:"2020-07-30",codeNo:"888747778398475641",cardNo:"888747778398475641"},{title:"6\u6708\u5238\xb7\u70ed\u95e8\u4f1a\u5458\u6708\u5361\u591a\u9009\u4e00",retitle:"\u76ce\u53f8\u767d\u91d1\u89c6\u542c\u5e74\u5361",time:"2020-07-30",state:"notime",name:"\u817e\u8baf\u89c6\u9891\u4f1a\u5458VIP\u6708\u5361",account:"88874777839847564",paytime:"2020-07-30",codeNo:"888747778398475641",cardNo:"888747778398475641"}],l=e=>{var t=e.user,a=e.card,s=e.dispatch,o=t||{},l=o.userId,m=a||{},u=m.historyCards,p=void 0===u?[]:u;return Object(r["useEffect"])(()=>{l&&s({type:"card/getHistoryCard",payload:{pageNo:1,pageSize:100,isHistoryFlag:!0}})},[s,l]),console.log(p,"historyCards--"),c.a.createElement("div",{className:i.a.history},c.a.createElement("div",{className:i.a.title},"\u5386\u53f2\u5361\u5238"),n.map((e,t,a)=>{return c.a.createElement(d["a"],{key:"".concat(t.toString()),state:e.state,data:e})}))};t["default"]=Object(s["c"])(e=>({card:e.card,user:e.user}))(l)}}]);