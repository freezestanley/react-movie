(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{"/UWx":function(e,a,t){e.exports={header:"header___1ts3Q",title:"title___eEriJ"}},"0Eg9":function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),c=t("/MKj"),i=t("6gWw"),s=t("OS56"),l=t.n(s),m=t("TSYQ"),o=t.n(m),_=t("WjUc"),d=t("POFP"),u=t.n(d);class p extends r["Component"]{constructor(){super(...arguments),this.refresh=(()=>{this.props.dispatch({type:"productDetail/getEventList",payload:{}})})}componentDidMount(){}render(){var e={className:"center",centerMode:!0,infinite:!0,centerPadding:"10px",slidesToShow:2,speed:500,rows:1},a=this.props.data;return n.a.createElement("div",{className:o()(u.a["timelimit-slider"],a.length<3?u.a["less-fix"]:"")},n.a.createElement(l.a,e,(a||[]).map(e=>{return n.a.createElement("div",{key:e.id,className:u.a["slider-item-box"]},n.a.createElement(_["a"],{data:e}))})))}}var E=t("E+oP"),v=t.n(E),f=t("k4Da"),N=t.n(f),g=t("ijCd"),h=t.n(g),b=t("/UWx"),x=t.n(b),y=()=>{return n.a.createElement("div",{className:x.a["header"]},n.a.createElement("div",{className:x.a["title"]},"\u76ce\u53f8\u4f1a\u5458\u767d\u91d1\u5361\u72ec\u5bb6\u6743\u76ca"))},w=t("qIgq"),j=t.n(w),A=t("bKel"),k=t.n(A),D=t("ox7y"),P=t("uJMD"),F=t("bDqC"),M=t.n(F),O=Object(c["c"])(e=>({user:e.user}))(k()(e=>{e.info;var a=e.dispatch,t=e.user,c=e.history,i=j()(t.membershipList,1),s=i[0],l=void 0===s?{}:s,m=t.isVIP,o=t.userId,_=t.userInfo,d=()=>{if(o){var e={payAmount:l.lowerPrice,payType:1};Object(D["b"])({dispatch:a,type:"order/createMemberOrder",formData:e,callback(){}})}else{var t=window.encodeURIComponent("".concat(window.location.pathname).concat(window.location.search));c.push({pathname:"/login",query:{sourcePage:t}})}};return n.a.createElement("div",{className:M.a["card"]},n.a.createElement("div",{className:M.a["card-inner"]},n.a.createElement("div",{className:M.a["name"]},"\u76ce\u53f8\u4f1a\u5458\u767d\u91d1\u5361"),n.a.createElement("div",{className:M.a["desc"]},"\u5168\u573a\u5546\u54c1\u4f1a\u5458\u4ef75\u6298\u8d77"),m?n.a.createElement("div",{className:M.a["expireTime"]},Object(P["e"])(_.membershipExpiredTime,"YYYY-MM-DD"),"\u5230\u671f"):n.a.createElement(r["Fragment"],null,n.a.createElement("div",{className:M.a["price"]},n.a.createElement("div",{className:M.a["price-current"]},n.a.createElement("span",{className:M.a["price-current-value"]},l.lowerPrice||9.9),n.a.createElement("span",{className:M.a["price-current-unit"]},"\u5143/\u5e74")),n.a.createElement("span",{className:M.a["price-original"]},"\u539f\u4ef7",l.originalPrice||99,"\u5143/\u5e74")),n.a.createElement("div",{className:M.a["join"],onClick:d},"\u7acb\u5373\u5f00\u901a"))))})),C=t("KfAj"),I=t.n(C),q="https://za-www-prd.oss-cn-hzfinance.aliyuncs.com/576bd8ad-cb4e-443a-8abc-56a0968fdd5f%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91.png",T=[{icon:q,name:"\u4f1a\u5458\u6298\u6263"},{icon:q,name:"\u4e13\u4eab\u79d2\u6740"},{icon:q,name:"\u5065\u5eb7\u6743\u76ca"},{icon:q,name:"\u4e13\u5c5e\u5ba2\u670d"}],z=()=>{return n.a.createElement("div",{className:I.a["features"]},T.map(e=>{var a=e.icon,t=e.name;return n.a.createElement("div",{key:t,className:I.a["feature"]},n.a.createElement("img",{className:I.a["feature-icon"],src:a}),n.a.createElement("div",{className:I.a["feature-name"]},t))}))},L=t("OPxc"),U=t.n(L),J=e=>{var a=e.info;return n.a.createElement(r["Fragment"],null,n.a.createElement("div",{className:U.a["main"]},n.a.createElement(y,null),n.a.createElement(O,{info:a})),n.a.createElement("div",{className:U.a["features"]},n.a.createElement(z,null)),n.a.createElement("div",{className:U.a["attention"]},"\u4f1a\u5458\u5e73\u53f0\u7528\u6237\u987b\u77e5 >"))},Y=t("UbMB"),B=t.n(Y),G=t("t3e3"),W=t.n(G),K=B.a.bind(W.a),Q=e=>{var a=e.title,t=e.children,r=e.className;return n.a.createElement("div",{className:K("section",r)},n.a.createElement("div",{className:W.a["header"]},n.a.createElement("div",{className:W.a["title"]},a)),n.a.createElement("div",{className:W.a["body"]},t))},V=t("76M/"),R=t.n(V),S=k()(Object(c["c"])(e=>({user:e.user}))(e=>{var a=e.name,t=e.user,r=(e.logo,e.price),c=e.id,i=e.history,s=()=>{var e=t.userId;e?i.push({pathname:"/topup",query:{id:c}}):i.push({pathname:"/login",query:{sourcePage:Object(P["g"])()}})};return n.a.createElement("div",{className:R.a["product"],onClick:s},n.a.createElement("div",{className:R.a["name"]},a,n.a.createElement("span",{className:R.a["tag"]},"\u4f1a\u5458\u4e13\u4eab")),n.a.createElement("div",{className:R.a["price"]},n.a.createElement("div",{className:R.a["price-current"]},n.a.createElement("span",{className:R.a["price-current-value"]},"\uffe5"),n.a.createElement("span",{className:R.a["price-current-unit"]},"0")),n.a.createElement("div",{className:R.a["price-original"]},"\uffe5",r)))})),Z=t("JZI3"),X=t.n(Z),H=new Array(2).fill().map((e,a)=>{return{id:30,logo:"https://za-www-prd.oss-cn-hzfinance.aliyuncs.com/576bd8ad-cb4e-443a-8abc-56a0968fdd5f%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91.png",name:"\u6cf0\u5eb7\u62dc\u535a\u53e3\u8154\u5341\u9879\u68c0\u67e5\u5361",price:388}}),$=()=>{return n.a.createElement("div",{className:X.a["product-list"]},H.map((e,a)=>{return n.a.createElement("div",{key:a,className:X.a["product-item"]},n.a.createElement(S,e))}))},ee=t("jehZ"),ae=t.n(ee),te=t("3WF5"),re=t.n(te),ne=t("n+GL"),ce=t.n(ne),ie=e=>{e.id;var a=e.logo,t=e.name,r=e.desc,c=e.onClick;return n.a.createElement("div",{className:ce.a["product"],onClick:c},n.a.createElement("img",{className:ce.a["logo"],src:a}),n.a.createElement("div",{className:ce.a["name"]},t),n.a.createElement("div",{className:ce.a["desc"]},r))},se=t("tD4h"),le=t.n(se),me=k()(e=>{var a=e.list,t=e.history,r=e=>{t.push({pathname:"/topup",query:{id:e}})};return n.a.createElement("div",null,n.a.createElement("div",{className:le.a["product-list"]},re()(a,(e,a)=>{var t={id:e.id,name:e.abbr,logo:e.image,desc:e.bottomCornerMark};return n.a.createElement("div",{key:a,className:le.a["product-item"]},n.a.createElement(ie,ae()({},t,{onClick:r.bind(void 0,t.id)})))})))}),oe=t("qgFL"),_e=t.n(oe),de="https://za-www-prd.oss-cn-hzfinance.aliyuncs.com/576bd8ad-cb4e-443a-8abc-56a0968fdd5f%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91.png",ue=[{icon:de,name:"\u4f1a\u5458\u65e5"},{icon:de,name:"0\u5143\u8d2d"},{icon:de,name:"\u822a\u7a7a\u6743\u76ca"},{icon:de,name:"\u9152\u5e97\u6743\u76ca"}],pe=()=>{return n.a.createElement("div",{className:_e.a["right-list"]},ue.map(e=>{var a=e.icon,t=e.name;return n.a.createElement("div",{className:_e.a["right-item"]},n.a.createElement("img",{className:_e.a["icon"],src:a}),n.a.createElement("div",{className:_e.a["name"]},t))}))},Ee=t("92a0"),ve=t.n(Ee);a["default"]=Object(c["c"])(e=>({productDetail:e.productDetail,products:e.products.list}))(e=>{var a=e.dispatch,t=e.productDetail,c=e.products,s=N()(t.eventList,e=>"Y"===e.onlyForVip),l=N()(c,e=>h()([12,16,56,18,17,4,54,25],e.id));return Object(r["useEffect"])(()=>{a({type:"productDetail/getEventList",payload:{}}),a({type:"products/getProducts",payload:{status:2}})},[a]),n.a.createElement("div",{className:ve.a["page"]},n.a.createElement("div",{className:ve.a["baseinfo"]},n.a.createElement(J,null)),n.a.createElement(Q,{title:"\u5065\u5eb7\u6743\u76ca0\u5143\u8d2d",className:ve.a["zerobuy"]},n.a.createElement($,null)),n.a.createElement(Q,{title:"\u4f1a\u5458\u4e13\u4eab\u6298\u6263",className:ve.a["discount"]},n.a.createElement(me,{list:l})),n.a.createElement(Q,{title:"\u4f1a\u5458\u4e13\u4eab\u79d2\u6740",className:ve.a["seckill"]},!v()(s)&&n.a.createElement(p,{data:s,dispatch:a})),n.a.createElement(Q,{title:"\u66f4\u591a\u7279\u6743\u6b63\u5728\u4e0a\u7ebf\u4e2d",className:ve.a["rights"]},n.a.createElement(pe,null)),n.a.createElement(Q,{title:"\u70ed\u95e8\u63a8\u8350",className:ve.a["recommend"]},n.a.createElement(i["a"],null)))})},"76M/":function(e,a,t){e.exports={product:"product___snasc",name:"name___3tkOD",tag:"tag___3eWL-","price-current":"price-current___2SAQO","price-current-value":"price-current-value___Gkeej","price-current-unit":"price-current-unit___VAVmZ","price-original":"price-original___3DfmU"}},"92a0":function(e,a,t){e.exports={page:"page___28R7q",baseinfo:"baseinfo___1gCaU",zerobuy:"zerobuy___asua_",discount:"discount___A8iwU",seckill:"seckill___bFtxb",rights:"rights___gGmpM",recommend:"recommend___2UfTz"}},JZI3:function(e,a,t){e.exports={"product-list":"product-list___3DidF","product-item":"product-item___3RB_M"}},KfAj:function(e,a,t){e.exports={features:"features___3D3qY",feature:"feature___2uJPv","feature-icon":"feature-icon___vTVGT","feature-name":"feature-name___2arUK"}},OPxc:function(e,a,t){e.exports={main:"main___2vw-1","main-header":"main-header___135Bt","main-title":"main-title___2UBua",features:"features___1fBGt",attention:"attention___1WvSI"}},POFP:function(e,a,t){e.exports={"title-box":"title-box___3cFX1","color-text":"color-text___2X41K","over-text":"over-text___3nv51","timelimit-slider":"timelimit-slider___3E8sQ","less-fix":"less-fix___1pYEV",daojishi:"daojishi___2a7MF"}},bDqC:function(e,a,t){e.exports={card:"card___2rde2","card-inner":"card-inner___4rVEs",name:"name___R2IaM",desc:"desc____cAoQ",price:"price___1eT3m","price-current":"price-current___3Pk4c","price-current-value":"price-current-value___1_dA6","price-current-unit":"price-current-unit___1eJFo","price-original":"price-original___1GiuK",join:"join___3vPAp",expireTime:"expireTime___1eIdC"}},"n+GL":function(e,a,t){e.exports={product:"product___RH4DC",logo:"logo___3ak8g",name:"name___3gYPI",desc:"desc___sCGMJ"}},qgFL:function(e,a,t){e.exports={"right-list":"right-list___1ID59",icon:"icon___2cs2s",name:"name___3LNTj"}},t3e3:function(e,a,t){e.exports={header:"header___8ahdl",title:"title___2j8Qz",body:"body___3LfQa"}},tD4h:function(e,a,t){e.exports={"product-list":"product-list___2lW5j","product-item":"product-item___3OIp5","more-products":"more-products___3g-7r",more:"more___1_PN5"}}}]);