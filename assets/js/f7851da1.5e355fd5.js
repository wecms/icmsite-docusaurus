"use strict";(self.webpackChunkicmsite_docusaurus=self.webpackChunkicmsite_docusaurus||[]).push([[3556],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3593:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},l="EMQX",c={unversionedId:"tools/mqtt-emqx",id:"tools/mqtt-emqx",title:"EMQX",description:"emqx  \u6570\u636e\u957f\u5ea6\u9650\u5236",source:"@site/docs/tools/mqtt-emqx.md",sourceDirName:"tools",slug:"/tools/mqtt-emqx",permalink:"/docs/tools/mqtt-emqx",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools/mqtt-emqx.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MobaXterm",permalink:"/docs/tools/mobaXterm"},next:{title:"MQTT Explorer",permalink:"/docs/tools/mqtt-explorer"}},i={},s=[{value:"emqx  \u6570\u636e\u957f\u5ea6\u9650\u5236",id:"emqx--\u6570\u636e\u957f\u5ea6\u9650\u5236",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"emqx"},"EMQX"),(0,o.kt)("h2",{id:"emqx--\u6570\u636e\u957f\u5ea6\u9650\u5236"},"emqx  \u6570\u636e\u957f\u5ea6\u9650\u5236"),(0,o.kt)("p",null,"1M"),(0,o.kt)("p",null,"MQTT \u6d88\u606f\t"),(0,o.kt)("p",null,"\u5355\u6761\u6d88\u606f\u5927\u5c0f\t\u9ed8\u8ba4 1024KB\uff0c\u6700\u5927 256MB"),(0,o.kt)("p",null,"mqtt.max_packet_size"),(0,o.kt)("p",null,"\u7c7b\u578b: bytesize"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u503c: 1MB"),(0,o.kt)("p",null,"\u5141\u8bb8\u7684\u6700\u5927 MQTT \u62a5\u6587\u5927\u5c0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.emqx.io/docs/zh/v5.1/configuration/configuration-manual.html#mqtt-%E5%9F%BA%E6%9C%AC%E5%8F%82%E6%95%B0"},"\u914d\u7f6e\u624b\u518c | EMQX 5.1 \u6587\u6863")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.emqx.io/docs/zh/v5/getting-started/restrictions.html#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E6%9C%89%E9%99%90%E5%88%B6"},"\u4f7f\u7528\u9650\u5236 | EMQX 5.1 \u6587\u6863")))}m.isMDXComponent=!0}}]);