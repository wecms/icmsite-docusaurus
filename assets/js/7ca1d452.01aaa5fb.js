"use strict";(self.webpackChunkicmsite_docusaurus=self.webpackChunkicmsite_docusaurus||[]).push([[4152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},c="JavaScript",o={unversionedId:"coding/javascript/README",id:"coding/javascript/README",title:"JavaScript",description:"\u672c\u5730\u8fde\u63a5\u90fd\u662f\u76f8\u5bf9\u4e8e\u6839\u76ee\u5f55\u8bf4\u7684\uff1a",source:"@site/docs/coding/javascript/README.md",sourceDirName:"coding/javascript",slug:"/coding/javascript/",permalink:"/docs/coding/javascript/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/javascript/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Simple Admin",permalink:"/docs/coding/golang/simple-admin"},next:{title:"JavaScript Issue",permalink:"/docs/coding/javascript/issue"}},l={},s=[{value:"\u53ef\u4ee5\u4f7f\u7528 if (variable) \u6765\u5224\u65ad\u4e00\u4e2a\u53d8\u91cf\u662f\u5426\u4e3a\u771f\u503c",id:"\u53ef\u4ee5\u4f7f\u7528-if-variable-\u6765\u5224\u65ad\u4e00\u4e2a\u53d8\u91cf\u662f\u5426\u4e3a\u771f\u503c",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"javascript"},"JavaScript"),(0,a.kt)("p",null,"\u672c\u5730\u8fde\u63a5\u90fd\u662f\u76f8\u5bf9\u4e8e\u6839\u76ee\u5f55\u8bf4\u7684\uff1a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"./javascript/issue"},"Issue")),(0,a.kt)("h2",{id:"\u53ef\u4ee5\u4f7f\u7528-if-variable-\u6765\u5224\u65ad\u4e00\u4e2a\u53d8\u91cf\u662f\u5426\u4e3a\u771f\u503c"},"\u53ef\u4ee5\u4f7f\u7528 if (variable) \u6765\u5224\u65ad\u4e00\u4e2a\u53d8\u91cf\u662f\u5426\u4e3a\u771f\u503c"),(0,a.kt)("p",null,"\u5728 JavaScript \u4e2d\uff0c\u4ee5\u4e0b\u503c\u88ab\u89c6\u4e3a\u5047\u503c\uff08falsy values\uff09: false\u30010\u3001''\uff08\u7a7a\u5b57\u7b26\u4e32\uff09\u3001null\u3001undefined \u548c NaN\u3002\u9664\u4e86\u8fd9\u4e9b\u5047\u503c\u4e4b\u5916\u7684\u6240\u6709\u503c\u90fd\u88ab\u89c6\u4e3a\u771f\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (variable) {\n  // \u53d8\u91cf\u4e0d\u662f undefined \u6216 null \u7684\u5904\u7406\u903b\u8f91\n}\n")))}d.isMDXComponent=!0}}]);