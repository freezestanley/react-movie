(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"8Ala":function(A,e,a){},CJ8R:function(A,e,a){"use strict";a.r(e);var t=a("q1tI"),i=a.n(t),n=a("/MKj"),c=a("3a4m"),l=a.n(c),m=a("uQkw"),g=a.n(m),o=(a("8Ala"),A=>{var e=A.title,t=A.icon,n=A.onClick,c=()=>{n&&n()};return i.a.createElement("div",{className:"menu_item",onClick:c},i.a.createElement("img",{src:t,alt:""}),i.a.createElement("span",null,e),i.a.createElement("img",{src:a("Q+b1"),alt:""}))});function I(A){var e=A.user.userInfo;console.log("[9] index.jsx: ",A.user),console.log(A.banner),console.log("[8] index.jsx: ",A);var t=()=>{A.dispatch({type:"user/loginOut"})};return i.a.createElement("div",{className:g.a.myPage},i.a.createElement("div",{className:"me_avatar"},i.a.createElement("div",{className:"me_avatar-img"},i.a.createElement("div",{className:"img"})),A.user.isVIP&&i.a.createElement("div",{className:"me_vip"}),i.a.createElement("p",{className:"me_nickname"},e.nickname)),i.a.createElement("div",{className:"me_container"},i.a.createElement(o,{title:"\u4f1a\u5458\u6743\u76ca",icon:a("mTQj"),onClick:()=>{console.log(1)}}),i.a.createElement(o,{title:"\u4f1a\u5458\u6743\u76ca",icon:a("WFNj"),onClick:()=>{console.log(1)}}),i.a.createElement(o,{title:"\u4f1a\u5458\u6743\u76ca",icon:a("mTQj"),onClick:()=>{console.log(1)}}),i.a.createElement(o,{title:"\u4f1a\u5458\u6743\u76ca",icon:a("WFNj"),onClick:()=>{console.log(1)}})),i.a.createElement("button",{onClick:()=>l.a.push("/login")},"\u767b\u5f55"),i.a.createElement("button",{onClick:t},"\u9000\u51fa"),i.a.createElement("pre",null,JSON.stringify(A.user,null,2)))}e["default"]=Object(n["c"])(A=>A)(I)},"Q+b1":function(A,e){A.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNHB4IiBoZWlnaHQ9IjlweCIgdmlld0JveD0iMCAwIDQgOSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNjEuMiAoODk2NTMpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPui3r+W+hCA0PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIwLjE0Ij4KICAgICAgICA8ZyBpZD0i5oiR55qELeaIkeeahOS8muWRmCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3OS4wMDAwMDAsIC01ODAuMDAwMDAwKSIgc3Ryb2tlPSIjMDAwMDAwIj4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSLot6/lvoQtNCIgcG9pbnRzPSIyNzkgNTgxIDI4MyA1ODQuNSAyNzkgNTg4Ij48L3BvbHlsaW5lPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},WFNj:function(A,e){A.exports="data:image/png;base64,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"},mTQj:function(A,e){A.exports="data:image/png;base64,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"},uQkw:function(A,e,a){A.exports={myPage:"myPage___itC5x"}}}]);