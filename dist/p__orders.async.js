(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{XbVa:function(e,a,t){},cl9U:function(e,a,t){e.exports={orders:"orders___1zUsi"}},nVzm:function(e,a,t){"use strict";t.r(a);var s=t("Ya3S"),r=t("qIgq"),n=t.n(r),c=t("q1tI"),d=t.n(c),o=t("/MKj"),l=t("3a4m"),i=t.n(l),m=t("ox7y"),u=t("Wgwc"),p=t.n(u),h=(t("XbVa"),t("9WDN")),g=t("uTNy"),E=t.n(g),f=Object(o["c"])(e=>e.user)(e=>{var a,t,s,r=e.info,o=e.dispatch,l=Object(c["useState"])(!1),u=n()(l,2),g=u[0],f=u[1];2===r.productList.length?(t=r.productList[0],s=r.productList[1],a=!0):(t=r.productList[0],a=!1);var N=Object(c["useCallback"])(()=>{var e={orderId:r.orderId,payType:1};Object(m["c"])({dispatch:o,type:"order/relaunchPay",formData:e})},[o,r.orderId]);return d.a.createElement("div",{className:"order"},d.a.createElement("div",{className:"order_up",onClick:()=>i.a.push("./orderdetail?id=".concat(r.orderId))},d.a.createElement("div",{className:"order_head"},d.a.createElement("div",{className:"headLeft"},d.a.createElement("img",{src:r.productList[0].image||E.a,alt:""}),a&&!!s.image&&d.a.createElement("img",{src:r.productList[1].image,alt:""}),d.a.createElement("span",{className:"span_1"},t.productName,a&&"+".concat(s.productName))),d.a.createElement("div",{className:"pay"},1===r.status&&d.a.createElement("span",{className:"unpaid"},"\u5f85\u652f\u4ed8 "),3===r.status&&d.a.createElement("span",{className:"chagrefailed"},"\u652f\u4ed8\u5931\u8d25"),2===r.status&&d.a.createElement("span",{className:"paid"},"\u5df2\u652f\u4ed8"),4===r.status&&d.a.createElement("span",{className:"outtime"},"\u5df2\u5931\u6548"),5===r.status&&d.a.createElement("span",{className:"paid"},"\u5df2\u5b8c\u6210"),6===r.status&&d.a.createElement("span",{className:"chagrefailed"},"\u5145\u503c\u5931\u8d25"),7===r.status&&d.a.createElement("span",{className:"outtime"},"\u5df2\u9000\u6b3e"),8===r.status&&d.a.createElement("span",{className:"paid"},"\u90e8\u5206\u9000\u6b3e"),9===r.status&&d.a.createElement("span",{className:"paid"},"\u90e8\u5206\u6210\u529f"),10===r.status&&d.a.createElement("span",{className:"paid"},"\u9000\u6b3e\u4e2d"),11===r.status&&d.a.createElement("span",{className:"chagrefailed"},"\u9000\u6b3e\u5931\u8d25"))),d.a.createElement("div",{className:"details"},d.a.createElement("div",{className:"detailsFirst"},d.a.createElement("p",{className:"details_p1"},"\u8ba2\u5355 : ",r.orderId)," ",d.a.createElement("p",{className:"up_p"},"\xa5 ",r.payAmount)),d.a.createElement("p",{className:"details_p2"},"\u65f6\u95f4 : ",p()(r.orderTime).format("YYYY-MM-DD HH:mm:ss")),t.productItemName&&d.a.createElement("p",{className:"details_p3"},"\u89c4\u683c : ",t.productItemName," "))),4!==r.status&&2!==r.status&&d.a.createElement("div",{className:"order_down  ".concat(5===r.status&&r.rechargeAccount?"order_down_copy":""," ")},d.a.createElement("div",{className:"orderdownup"},1===r.status&&d.a.createElement("span",{className:"recharge",onClick:N},"\u652f\u4ed8"),(3===r.status||6===r.status)&&d.a.createElement("span",{onClick:()=>{f(!0)},className:"concat"},"\u8054\u7cfb\u5ba2\u670d"),!r.rechargeAccount&&5===r.status&&d.a.createElement("span",{className:"check",onClick:()=>i.a.push("./orderdetail?id=".concat(r.orderId))},"\u67e5\u770b\u5361\u5bc6")),d.a.createElement(h["a"],{visible:g,onClose:e=>{f(!1)}})))}),N=t("fmEU"),A=t("cl9U"),y=t.n(A),j={normal:0,pull:1,drop:2,loading:3,success:4,failure:5},D={normal:0,abort:1,loading:2,success:3,failure:4,complete:5};class v extends c["Component"]{constructor(e){super(e),this.mounted=!0,this.refreshData=(()=>{this.mounted&&(this.setState({page:1}),Object(N["j"])({}).then(e=>{this.setState({refreshing:j.loading}),"0000"===e.code?(this.setState({data:e.data,page:1}),this.appendOrder(),this.setState({refreshing:j.success})):this.setState({refreshing:j.success})}))}),this.loadData=(()=>{var e=this.state,a=e.data,t=e.page,s=e.dataSource;this.setState({loading:D.loading}),Object(N["j"])({pageNo:t+1}).then(e=>{var r=D.complete;if(this.setState({loading:r}),"0000"===e.code){if(null==e.data){var n=D.complete;return void this.setState({loading:n})}a.concat(e.data),e.data.map(e=>{s.push(d.a.createElement(f,{key:e.orderId,info:e}))});var c=D.success;this.setState({page:t+1,dataSource:s,loading:c,data:a})}else{var o=D.complete;this.setState({loading:o})}})}),this.appendData=(()=>{Object(N["j"])({}).then(e=>{if("0000"===e.code){this.setState({data:e.data});var a=this.state,t=a.data,s=a.dataSource;if(!t)return;t.map(e=>{s.push(d.a.createElement(f,{key:e.orderId,info:e}))}),this.setState({dataSource:s})}})}),this.appendOrder=(()=>{var e=this.state.data,a=[];e&&(e.map(e=>{a.push(d.a.createElement(f,{key:e.orderId,info:e}))}),this.setState({dataSource:a}))}),this.state={useBodyScroll:!1,refreshing:j.normal,loading:D.normal,dataSource:[],data:[],page:1}}componentDidUpdate(){document.body.style.overflow="hidden"}componentDidMount(){this.appendData()}componentWillUnmount(){this.mounted=!1,document.body.style.overflow="auto"}render(){var e=this.state,a=e.refreshing,t=e.loading,r=e.dataSource,n={position:"relative",overflowY:"auto",height:"100%"};return d.a.createElement(s["a"],{style:n,refresh:{state:a,handler:this.refreshData},load:{state:t,distance:200,handler:this.loadData},className:y.a.orders},r)}}a["default"]=Object(o["c"])(e=>({order:e.order}))(v)},uTNy:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAA4VBMVEUAAAD////////////////////////////////////////////////////////////sWUL/Y0r+1Ub/uB7xgnHxcTn/gEn/nEf8qzP+33T//PL/77n/inf/9NH+12L+11H+00P/+OT/saT/3Gr+2lv/+uj/2NL/6aH/99z+0kH/9fT+9fP96uf/4t3/urD3tqzzl4j/bFXtY03+55f/4Y7+5Yv/3n3/oV/+zjf/xSb74Nv/zsb/8sX/7a71rKD/p5n/nY3+4n/yjH3/qHz0jGH3dGD/0Ev/2Hj/r23/0F//pElr3FbSAAAAD3RSTlMAYMDwEIDg0EAwIJCgsHDXgBKYAAADS0lEQVRo3rSW227iMBRFcUJCuLRb8UNHuQDhFgYkkBDtAOpU7ahq5/L/HzRIqWU7JwlpXNYbWCwOx3tHtOrhMWdgfdB3mNf6Inps4ILgDljP2NzvoJRO38DfZsRM/KzdTO3YqIHttJuqr6JnRF2pZ59Qdy18Eqtb132LBtzW2/YNGnHTrrESFw1xL67Gs9EY26t2MxjB6ruj2TxJktE9CgmjfRAEyygk9hruZcI/SGYF6gcueAjr2D0o/OAKqwl0fo65ZPwdEq8kJzZxl9kjrjFWZre7hfl2IZkkvMI+5Dl+QeIW5V3rzojneZeHizE5XahtutT5FSfI0AScsK98EnRzO6UkE3GZnKLnKb92Cyr34jNBIMccIWMu3pifT8ULqFgk4XTlyywE0VwbPRLxzgK4yL49LG9q2y6QP8k+idHl4OMhBDN+ZggVW02MgwI5uYOViKHem4jK4WiDU/kxBLTZyzo5FHIyOh1c9PP4V7XPNPkTFBbyZ9LR6eCY8DOn0zIkvaGdGc5ERenoMio0LsfT++8oLOhNIMTRfq6tiQamA411up1Ov2n84zn+vB4OB3n+Ot2ma2h0MncPKmnsU+7y8jufEqdQyf5H9qHw7Pt15ZRnKPTJVra+idzfqnshW9mZyXf5vTBIHn0zuf+Yy8sAkqmpfArJ4Cx3IYlN5TEk7lmOa8nRannXk3t6919M5S/6E8DBtS4UjhYWbEzlG72jFlRiM3kMFSsn35jJN5VypLvm8l2KajnWb03lb2tckuN/u3awwiAMBAHUFNKW5qBQhf6DgYQcPXgQ//+beloQpxaT7kAO3avw8JbsTPoOZ3juZuhw+vaPn8MdD3eN5eG2MTzcNHcKLosdD5djjoFf5YDWxuWANizcyKWIgT/kOqeE4zXXcXAnV2gG/pDLPwG/ydrCwA0sXL/juCtafdzCkquB435utXELwYIWLj8uY3RxA2GOHn45jKHmUnyGGAoDtFCKBwjQMPrzpbjH6A9Dy1iGRwgtP8WtYyrB0yhx6/egeEr5eJogKD6IuMeYi8cxI0D3Yek3s752s26/LsG3YjNrBWYhwqxymCUUsT6rofgrqCzrKVuzauLaCu5T1Xy9jwo2zyFc/nOINypItdY9yPUdAAAAAElFTkSuQmCC"}}]);