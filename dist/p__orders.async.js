(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{CLaS:function(e,a,t){e.exports={myorder:"myorder___2B8mG",pay:"pay___lbZSF",span_1:"span_1___1zfh8",span_2:"span_2___3H80l",paytime:"paytime___3IfYn"}},XbVa:function(e,a,t){e.exports={order:"order___HF7p4",order_up:"order_up___218yw",order_head:"order_head___8E98O",span_1:"span_1___O_syj",pay:"pay___UUHRn",unpaid:"unpaid___1IsBL",chagrefailed:"chagrefailed___eO2GP",paid:"paid___Fh_hE",outtime:"outtime___2UycC",up_p:"up_p___-wQ9J",details:"details___3YU3C",details_p1:"details_p1___3iiui",details_p2:"details_p2___17RBb",details_p3:"details_p3___2YIj3",order_down:"order_down___2YiWg",recharge:"recharge___2mOHS",concat:"concat___1N0cg",check:"check___3vmNj"}},nVzm:function(e,a,t){"use strict";t.r(a);var s=t("Ya3S"),r=t("q1tI"),d=t.n(r),n=t("3a4m"),o=t.n(n),c=t("Wgwc"),i=t.n(c),l=t("XbVa"),p=t.n(l),_=e=>{var a,t,s,r=e.info;return 2==r.productList.length?(t=r.productList[0],s=r.productList[1],a=!0):(t=r.productList[0],a=!1),d.a.createElement("div",{className:p.a.order},d.a.createElement("div",{className:p.a.order_up,onClick:()=>o.a.push("./orderdetail?id=".concat(r.orderId))},d.a.createElement("div",{className:p.a.order_head},d.a.createElement("img",{src:r.productList[0].image,alt:""}),a&&d.a.createElement("img",{src:r.productList[1].image,alt:""}),d.a.createElement("span",{className:p.a.span_1},t.productName,a&&"+".concat(s.productName)),d.a.createElement("div",{className:p.a.pay},1===r.status&&d.a.createElement("span",{className:p.a.unpaid},"\u5f85\u652f\u4ed8 "),3===r.status&&d.a.createElement("span",{className:p.a.chagrefailed},"\u5145\u503c\u5931\u8d25"),2===r.status&&d.a.createElement("span",{className:p.a.paid},"\u5df2\u652f\u4ed8"),4===r.status&&d.a.createElement("span",{className:p.a.outtime},"\u5df2\u5931\u6548"))),d.a.createElement("p",{className:p.a.up_p},"\xa5 ",r.payAmount),d.a.createElement("div",{className:p.a.details},d.a.createElement("p",{className:p.a.details_p1},"\u8ba2\u5355 : ",r.orderId),d.a.createElement("p",{className:p.a.details_p2},"\u65f6\u95f4 : ",i()(r.orderTime).format("YYYY-MM-DD HH:mm:ss")),d.a.createElement("p",{className:p.a.details_p3},"\u89c4\u683c :",t.productItemName," "))),4!==r.status&&d.a.createElement("div",{className:p.a.order_down},d.a.createElement("div",null,1===r.status&&d.a.createElement("span",{className:p.a.recharge},"\u652f\u4ed8"),3===r.staus&&d.a.createElement("span",{className:p.a.concat},"\u8054\u7cfb\u5ba2\u670d"),2===r.status&&d.a.createElement("span",{className:p.a.check,onClick:()=>o.a.push("./orderdetail?id=".concat(r.orderId))},"\u67e5\u770b\u5361\u5bc6"))))},m=t("fmEU"),u=(t("CLaS"),t("/MKj")),h={normal:0,pull:1,drop:2,loading:3,success:4,failure:5},g={normal:0,abort:1,loading:2,success:3,failure:4,complete:5};class f extends r["Component"]{constructor(e){super(e),this.mounted=!0,this.page=1,this.refreshData=(()=>{this.mounted&&(this.setState({page:1}),Object(m["e"])({}).then(e=>{this.setState({refreshing:h.loading}),"0000"===e.code?(this.setState({data:e.data,pageNo:1}),this.appendDa(),this.setState({refreshing:h.success})):this.setState({refreshing:h.success})}))}),this.loadData=(()=>{var e=this.state,a=e.data,t=e.page,s=e.dataSource;this.setState({loading:g.loading}),Object(m["e"])({pageNo:t+1}).then(e=>{var r=g.complete;if(this.setState({loading:r}),"0000"===e.code){if(null==e.data){var n=g.complete;return void this.setState({loading:n})}a.concat(e.data),this.setState({data:a}),e.data.map(e=>{s.push(d.a.createElement(_,{key:e.orderId,info:e}))}),this.setState({page:t+1}),this.setState({dataSource:s});var o=g.success;this.setState({loading:o})}else{var c=g.complete;this.setState({loading:c})}})}),this.appendData=(()=>{Object(m["e"])({}).then(e=>{if("0000"===e.code){this.setState({data:e.data});var a=this.state,t=a.data,s=a.dataSource;if(!t)return;t.map(e=>{s.push(d.a.createElement(_,{key:e.orderId,info:e}))}),this.setState({dataSource:s})}})}),this.appendDa=(()=>{var e=this.state,a=e.data,t=(e.dataSource,[]);a&&(a.map(e=>{t.push(d.a.createElement(_,{key:e.orderId,info:e}))}),this.setState({dataSource:t}))}),this.state={useBodyScroll:!1,refreshing:h.normal,loading:g.normal,dataSource:[],data:[],page:1}}componentDidUpdate(){document.body.style.overflow="hidden"}componentDidMount(){this.appendData()}componentWillUnmount(){this.mounted=!1,document.body.style.overflow="auto"}render(){var e=this.state,a=e.refreshing,t=e.loading,r=e.dataSource,n={position:"relative",overflowY:"auto",maxHeight:1e3};return d.a.createElement(d.a.Fragment,null,d.a.createElement(s["a"],{style:n,refresh:{state:a,handler:this.refreshData},load:{state:t,distance:200,handler:this.loadData}},r))}}a["default"]=Object(u["c"])(e=>({order:e.order}))(f)}}]);