(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"2hfb":function(e,t,a){e.exports={loginPage:"loginPage___sQ4k-"}},gqXj:function(e,t,a){"use strict";a.r(t);var n=a("Ico4"),c=a.n(n),M=a("UWy3"),o=a.n(M),i=a("mK77"),s=a.n(i),j=a("cO38"),N=a.n(j),r=a("ZZRV"),D=a.n(r),u=a("Y2Ur"),I=a("HaGd"),d=a("tE8r"),g=a("svyS"),l=a("iczh"),y=a.n(l),O=a("Sr5h"),p=a.n(O),L=a("h/fk"),h=e=>{var t=e.className,a=e.onSend,n=e.duration,c=void 0===n?30:n,M=Object(r["useState"])(c),o=N()(M,2),i=o[0],s=o[1],j=Object(r["useState"])(1e3),u=N()(j,1),I=u[0],g=Object(r["useState"])(!1),l=N()(g,2),O=l[0],p=l[1],h=Object(r["useState"])("\u83b7\u53d6\u9a8c\u8bc1\u7801"),w=N()(h,2),z=w[0],A=w[1],T=Object(r["useState"])(!1),f=N()(T,2),S=f[0],E=f[1];Object(L["a"])(()=>{A("".concat(i-1,"s")),s(i-1),E(!0),1===i&&(p(!1),E(!1),A("\u91cd\u65b0\u53d1\u9001"))},O?I:null);var m=()=>{a&&a().then(e=>{e&&(A("".concat(c,"s")),E(!0),p(!0),s(c))})};return D.a.createElement(d["a"],{className:y()(t,"send-code"),size:"sm",disabled:S},S?z:D.a.createElement("span",{onClick:m},z))},w=a("uJMD"),z=a("2hfb"),A=a.n(z);function T(e){var t=e.location.query.sourcePage,n=void 0===t?"":t,M=e.user.userId,i=Object(r["useReducer"])((e,t)=>s()({},e,t),{isRegistered:!0,disabled:!0,phone:"",verificationCode:""}),j=N()(i,2),g=j[0],l=j[1];Object(r["useEffect"])(()=>{e.dispatch({type:"global/setState",payload:{isUpdateProductInfo:!1}})},[]),Object(r["useEffect"])(()=>{g.phone&&g.verificationCode?l({disabled:!1}):l({disabled:!0})},[g.phone,g.verificationCode]);var O=(t,a)=>{l({[a]:t}),"phone"===a&&(11===t.length?e.dispatch({type:"user/checkRegistered",payload:t}).then(e=>{e||l({isRegistered:!1})}):l({isRegistered:!0}))},L=function(){var t=o()(c.a.mark(function t(){return c.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(Object(w["h"])(g.phone)){t.next=2;break}return t.abrupt("return");case 2:return e.dispatch({type:"user/sendCode",payload:g.phone}),t.abrupt("return",!0);case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),z=()=>{if(g.phone){if(Object(w["h"])(g.phone))if(g.verificationCode){var t=w["c"].get("openId"),a={userName:g.phone,verifyCode:g.verificationCode};t&&(a.openId=t),e.dispatch({type:"user/login",payload:a}).then(t=>{t&&e.dispatch({type:"user/getUserInfo",hasToast:!1})})}else u["a"].show("\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801")}else u["a"].show("\u8bf7\u8f93\u5165\u624b\u673a\u53f7")};return Object(r["useEffect"])(()=>{if(M)if(n){var e=window.decodeURIComponent(n);e=-1!==e.indexOf("?")?"".concat(e,"&ref=login"):"".concat(e,"?ref=login"),p.a.push(e)}else p.a.push("/")},[M]),D.a.createElement("div",{className:y()(A.a.loginPage)},D.a.createElement("div",{className:"phone-control"},D.a.createElement(I["a"],{type:"tel",value:g.phone,className:"phone",placeholder:"\u8bf7\u8f93\u5165\u624b\u673a\u53f7",maxLength:11,onChange:e=>O(e,"phone")}),g.phone&&D.a.createElement("img",{className:"phone-clear",src:a("wiAJ"),onClick:()=>l({phone:""}),alt:""})),D.a.createElement("div",{className:"code-control"},D.a.createElement(I["a"],{type:"tel",className:"code",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onChange:e=>O(e,"verificationCode"),maxLength:6}),D.a.createElement(h,{duration:60,onSend:L})),!g.isRegistered&&D.a.createElement("p",{className:"login-tip"},"\u672a\u6ce8\u518c\u7684\u624b\u673a\u53f7\uff0c\u9a8c\u8bc1\u901a\u8fc7\u540e\u5c06\u81ea\u52a8\u6ce8\u518c"),D.a.createElement(d["a"],{block:!0,className:"login-btn",disabled:g.disabled,onClick:z},e.loading?"\u767b\u5f55\u4e2d...":"\u767b\u5f55"))}t["default"]=Object(g["c"])(e=>({loading:e.loading.effects["user/login"],user:e.user}))(T)},wiAJ:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIHdpZHRoPSIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMTAuMDAwMDYgMGMtNS41MjI4NDA2NCAwLTEwLjAwMDAwMDA0IDQuNDc3MTU5MzktMTAuMDAwMDAwMDQgMTAgMCA1LjUyMjg0MDYgNC40NzcxNTk0IDEwIDEwLjAwMDAwMDA0IDEwIDUuNTIyODQwNiAwIDEwLTQuNDc3MTU5NCAxMC0xMCAwLTUuNTIyODQwNjEtNC40NzcxNTk0LTEwLTEwLTEwem00LjYzNDA0MDUgMTIuODY2NTk0Yy40ODgyNzI0LjQ4ODI3MjQuNDg4MjcyNCAxLjI3OTI5NDEgMCAxLjc2NzU4NjUtLjI0NDE0NjIuMjQ0MTQ2Mi0uNTYzOTY0Ny4zNjYyMDkyLS44ODM3ODMyLjM2NjIwOTJzLS42Mzk2NTctLjEyMjA2MzEtLjg4Mzc4MzItLjM2NjIwOTJsLTIuODY2MjE5My0yLjg2NjIxNDMtMi44NjYyMDkyOSAyLjg2NjE5NDNjLS4yNDQxNDYxOS4yNDQxNDYyLS41NjM5NjQ3MS4zNjYyMjkyLS44ODM3ODMyMS4zNjYyMjkyLS4zMTk4MTg0OSAwLS42Mzk2NTcwMS0uMTIyMDgzLS44ODM3ODMyMi0uMzY2MjI5Mi0uNDg4MjcyMzgtLjQ4ODI3MjQtLjQ4ODI3MjM4LTEuMjc5Mjk0MSAwLTEuNzY3NTg2NGwyLjg2NjIxNDI4LTIuODY2MjA2OC0yLjg2NjIzNDI2LTIuODY2MjAxODNjLS40ODgyNzIzOC0uNDg4MjcyMzgtLjQ4ODI3MjM4LTEuMjc5Mjk0MDQgMC0xLjc2NzU4NjQxLjQ4ODI3MjM4LS40ODgyOTIzNiAxLjI3OTI5NDA0LS40ODgyNzIzOCAxLjc2NzU4NjQxIDBsMi44NjYyMDkyOSAyLjg2NjIxNDI4IDIuODY2MjE5My0yLjg2NjIxNDI4Yy40ODgyNzI0LS40ODgyNzIzOCAxLjI3OTI5NC0uNDg4MjcyMzggMS43Njc1ODY0IDAgLjQ4ODI5MjQuNDg4MjcyMzkuNDg4MjcyNCAxLjI3OTI5NDA1IDAgMS43Njc1ODY0MWwtMi44NjYyMzQzIDIuODY2MjE0MzN6IiBvcGFjaXR5PSIuMDgiLz48L3N2Zz4="}}]);