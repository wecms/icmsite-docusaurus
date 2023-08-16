"use strict";(self.webpackChunkicmsite_docusaurus=self.webpackChunkicmsite_docusaurus||[]).push([[9623],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=l,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const a={},i="Cheatsheet",o={unversionedId:"linux/cheatsheet",id:"linux/cheatsheet",title:"Cheatsheet",description:"kill \u547d\u4ee4",source:"@site/docs/linux/cheatsheet.md",sourceDirName:"linux",slug:"/linux/cheatsheet",permalink:"/docs/linux/cheatsheet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/cheatsheet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Linux \u547d\u4ee4",permalink:"/docs/linux/"},next:{title:"Issue",permalink:"/docs/linux/issue"}},c={},u=[{value:"kill \u547d\u4ee4",id:"kill-\u547d\u4ee4",level:2}],s={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cheatsheet"},"Cheatsheet"),(0,l.kt)("h2",{id:"kill-\u547d\u4ee4"},"kill \u547d\u4ee4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ netstat -aptn|grep 8008\ntcp6       0      0 :::8008                 :::*                    LISTEN      25896/main\n$ kill 25896\n$ netstat -aptn|grep 8008\n$ \n")),(0,l.kt)("p",null,"Linux killall \u7528\u4e8e\u6740\u6b7b\u4e00\u4e2a\u8fdb\u7a0b\uff0c\u4e0e kill \u4e0d\u540c\u7684\u662f\u5b83\u4f1a\u6740\u6b7b\u6307\u5b9a\u540d\u5b57\u7684\u6240\u6709\u8fdb\u7a0b\u3002"),(0,l.kt)("p",null,"kill \u547d\u4ee4\u6740\u6b7b\u6307\u5b9a\u8fdb\u7a0b PID\uff0c\u9700\u8981\u914d\u5408 ps \u4f7f\u7528\uff0c\u800c killall \u76f4\u63a5\u5bf9\u8fdb\u7a0b\u5bf9\u540d\u5b57\u8fdb\u884c\u64cd\u4f5c\uff0c\u66f4\u52a0\u65b9\u4fbf\u3002"),(0,l.kt)("p",null,"\u5b9e\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ killall -9 php-fpm          //\u7ed3\u675f\u6240\u6709\u7684 php-fpm \u8fdb\u7a0b\n$ killall hello* //\u6279\u91cf\u6740\u6b7b\u8fdb\u7a0b\n$ killall -u harry //\u6740\u6b7b\u7528\u6237 harry \u6240\u8fd0\u884c\u7684\u6240\u6709\u8fdb\u7a0b\n")))}f.isMDXComponent=!0}}]);