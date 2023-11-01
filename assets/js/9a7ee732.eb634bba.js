"use strict";(self.webpackChunkicmsite_docusaurus=self.webpackChunkicmsite_docusaurus||[]).push([[6373],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(r),h=l,m=u["".concat(c,".").concat(h)]||u[h]||f[h]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:l,a[1]=s;for(var i=2;i<o;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(7462),l=(r(7294),r(3905));const o={},a="Xshell",s={unversionedId:"tools/xshell",id:"tools/xshell",title:"Xshell",description:"Xshell \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u5b89\u5168\u7ec8\u7aef\u6a21\u62df\u8f6f\u4ef6\uff0c\u5b83\u652f\u6301SSH1, SSH2, \u4ee5\u53caMicrosoft Windows \u5e73\u53f0\u7684TELNET \u534f\u8bae\u3002",source:"@site/docs/tools/xshell.md",sourceDirName:"tools",slug:"/tools/xshell",permalink:"/docs/tools/xshell",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools/xshell.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WSL2",permalink:"/docs/tools/wsl2"},next:{title:"YZ",permalink:"/docs/yuanzhong/"}},c={},i=[{value:"\u5bb6\u5ead\u548c\u5b66\u6821\u7528\u6237\u7684\u514d\u8d39\u8bb8\u53ef\u8bc1",id:"\u5bb6\u5ead\u548c\u5b66\u6821\u7528\u6237\u7684\u514d\u8d39\u8bb8\u53ef\u8bc1",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],p={toc:i},u="wrapper";function f(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"xshell"},"Xshell"),(0,l.kt)("p",null,"Xshell \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u5b89\u5168\u7ec8\u7aef\u6a21\u62df\u8f6f\u4ef6\uff0c\u5b83\u652f\u6301SSH1, SSH2, \u4ee5\u53caMicrosoft Windows \u5e73\u53f0\u7684TELNET \u534f\u8bae\u3002"),(0,l.kt)("p",null,"Xshell \u901a\u8fc7\u4e92\u8054\u7f51\u5230\u8fdc\u7a0b\u4e3b\u673a\u7684\u5b89\u5168\u8fde\u63a5\u4ee5\u53ca\u5b83\u521b\u65b0\u6027\u7684\u8bbe\u8ba1\u548c\u7279\u8272\u5e2e\u52a9\u7528\u6237\u5728\u590d\u6742\u7684\u7f51\u7edc\u73af\u5883\u4e2d\u4eab\u53d7\u4ed6\u4eec\u7684\u5de5\u4f5c\u3002"),(0,l.kt)("p",null,"Xshell\u53ef\u4ee5\u5728Windows\u754c\u9762\u4e0b\u7528\u6765\u8bbf\u95ee\u8fdc\u7aef\u4e0d\u540c\u7cfb\u7edf\u4e0b\u7684\u670d\u52a1\u5668\uff0c\u4ece\u800c\u6bd4\u8f83\u597d\u7684\u8fbe\u5230\u8fdc\u7a0b\u63a7\u5236\u7ec8\u7aef\u7684\u76ee\u7684\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u5176\u8fd8\u6709\u4e30\u5bcc\u7684\u5916\u89c2\u914d\u8272\u65b9\u6848\u4ee5\u53ca\u6837\u5f0f\u9009\u62e9\u3002"),(0,l.kt)("p",null,"\u5b98\u7f51\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.xshell.com/zh/xshell/"},"XSHELL - NetSarang Website")),(0,l.kt)("h2",{id:"\u5bb6\u5ead\u548c\u5b66\u6821\u7528\u6237\u7684\u514d\u8d39\u8bb8\u53ef\u8bc1"},"\u5bb6\u5ead\u548c\u5b66\u6821\u7528\u6237\u7684\u514d\u8d39\u8bb8\u53ef\u8bc1"),(0,l.kt)("p",null,"\u7f51\u4e0a\u6563\u5e03\u7740\u8bb8\u591a\u5047\u5192\u7684 Xshell \u7248\u672c\u3002\u8fd9\u4e9b\u53ef\u80fd\u662f\u4f2a\u9020\u7684\u6076\u610f\u8f6f\u4ef6\u5305\u3002\u786e\u4fdd\u53ea\u4ece\u6211\u4eec\u7684\u5b98\u65b9\u7f51\u7ad9 (",(0,l.kt)("a",{parentName:"p",href:"http://www.xshell.com"},"www.xshell.com"),") \u4e0b\u8f7d"),(0,l.kt)("p",null,"NetSarang Computer,Inc.\u4ee5\u8fc7\u53bb10\u5e74\u514d\u8d39\u63d0\u4f9b\u5f3a\u5927\u7684SSH\u548cSFTP/FTP\u5ba2\u6237\u7aef\u800c\u81ea\u8c6a\u3002\u6211\u4eec\u7684\u514d\u8d39\u8bb8\u53ef\u8bc1\u4e0d\u4ec5\u662f\u514d\u8d39\u7684\u4ef7\u683c\uff0c\u800c\u4e14\u6ca1\u6709\u5e7f\u544a\u6216\u5176\u4ed6\u5265\u524a\u7528\u6237\u7684\u65b9\u5f0f\u3002\u6211\u4eec\u8ba4\u4e3a\uff0c\u6765\u81ea\u5404\u79cd\u80cc\u666f\u548c\u73af\u5883\u7684\u7528\u6237\u90fd\u5e94\u8be5\u80fd\u591f\u8bbf\u95ee\u529f\u80fd\u5f3a\u5927\u3001\u529f\u80fd\u4e30\u5bcc\u7684SSH\u548cSFTP/FTP\u5ba2\u6237\u673a\u3002\u65e0\u8bba\u662f\u5b66\u4e60\u3001\u6559\u5b66\uff0c\u8fd8\u662f\u4ec5\u4ec5\u662f\u4f5c\u4e3a\u4e00\u79cd\u7231\u597d\u7684\u8865\u5145\u3002"),(0,l.kt)("p",null,"\u66f4\u65b0\uff1a\u4ece 2022/02/16 \u5f00\u59cb\uff0c\u6211\u4eec\u7684\u514d\u8d39\u8bb8\u53ef\u8bc1\u7684\u6807\u7b7e\u9650\u5236\u5df2\u88ab\u5220\u9664\u3002\u6240\u6709\u514d\u8d39\u7528\u6237\u73b0\u5728\u90fd\u53ef\u4ee5\u901a\u8fc7\u4e0b\u8f7d\u4e0b\u9762\u7684\u6700\u65b0\u7248\u672c\u6765\u8bbf\u95ee\u65e0\u9650\u7684\u6807\u7b7e\u3002\u5f53\u524d\u7528\u6237\u5fc5\u987b\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u5e76\u5728\u73b0\u6709\u5b89\u88c5\u4e0a\u8fdb\u884c\u5b89\u88c5\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.xshell.com/zh/free-for-home-school/"},"\u5bb6\u5ead/\u5b66\u6821\u514d\u8d39 - NetSarang Website")),(0,l.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/196664911"},"Xshell\u7684\u4e0b\u8f7d\u4e0e\u4f7f\u7528 - \u77e5\u4e4e")))}f.isMDXComponent=!0}}]);