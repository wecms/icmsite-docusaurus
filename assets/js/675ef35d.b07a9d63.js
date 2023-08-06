"use strict";(self.webpackChunkicmsite_docusaurus=self.webpackChunkicmsite_docusaurus||[]).push([[3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(c,".").concat(m)]||p[m]||h[m]||s;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const s={},i="Git",a={unversionedId:"tools/git",id:"tools/git",title:"Git",description:"Github",source:"@site/docs/tools/git.md",sourceDirName:"tools",slug:"/tools/git",permalink:"/docs/tools/git",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools/git.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b9d\u5854\u9762\u677f",permalink:"/docs/tools/bt"},next:{title:"MobaXterm",permalink:"/docs/tools/mobaXterm"}},c={},u=[{value:"Github",id:"github",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],l={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git"},"Git"),(0,o.kt)("h2",{id:"github"},"Github"),(0,o.kt)("p",null,"\u4e0d\u77e5\u9053\u4ec0\u4e48\u539f\u56e0\uff0c\u5bb6\u91cc\u7535\u8111Github\u514b\u9686\u6211\u7684\u4ed3\u5e93\u65f6\u62a5\u9519\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ git clone git@github.com:wecms/icmsite-docusaurus.git\nCloning into 'icmsite-docusaurus'...\nWarning: the ECDSA host key for 'github.com' differs from the key for the IP address '140.82.114.4'\nOffending key for IP in /c/Users/ICMS/.ssh/known_hosts:6\nMatching host key in /c/Users/ICMS/.ssh/known_hosts:7\nAre you sure you want to continue connecting (yes/no)? yes\ngit@github.com: Permission denied (publickey).\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ssh-keygen -t rsa -C "icms@foxmail.com"\n')),(0,o.kt)("p",null,"\u91cd\u65b0\u751f\u6210\u53c8\u63d0\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ssh -T git@github.com\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\nSomeone could be eavesdropping on you right now (man-in-the-middle attack)!\nIt is also possible that a host key has just been changed.\nThe fingerprint for the RSA key sent by the remote host is\nSHA256:uNiVztksCsDhcc0u9e8BujQXVUpKZIDTMczCvj3tD2s.\nPlease contact your system administrator.\nAdd correct host key in /c/Users/ICMS/.ssh/known_hosts to get rid of this messag                                                                                                                                                                                               e.\nOffending RSA key in /c/Users/ICMS/.ssh/known_hosts:1\nRSA host key for github.com has changed and you have requested strict checking.\nHost key verification failed.\n")),(0,o.kt)("p",null,"\u95eeAI\u8bf4\uff0c\u8fd9\u53ef\u80fd\u8868\u793a\u4e3b\u673a\u5bc6\u94a5\uff08host key\uff09\u53d1\u751f\u4e86\u53d8\u5316\u3002\u8fd9\u901a\u5e38\u53d1\u751f\u5728\u4f60\u4e4b\u524d\u8fde\u63a5\u8fc7\u8be5\u4e3b\u673a\uff0c\u4f46\u73b0\u5728\u5b83\u7684\u5bc6\u94a5\u53d1\u751f\u4e86\u66f4\u6539\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4e4b\u524d\u8fde\u63a5\u8fc7\u8be5\u4e3b\u673a\uff0c\u5e76\u4e14\u4f60\u4fe1\u4efb\u8be5\u4e3b\u673a\u7684\u8eab\u4efd\u9a8c\u8bc1\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u66f4\u65b0\u4f60\u672c\u5730SSH\u5bc6\u94a5\u7f13\u5b58\u4e2d\u7684\u4e3b\u673a\u5bc6\u94a5\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u5220\u9664\u65e7\u7684\u4e3b\u673a\u5bc6\u94a5\u7f13\u5b58\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh-keygen -R github.com\n")),(0,o.kt)("p",null,"\u8fd9\u5c06\u5220\u9664\u5df2\u77e5\u4e3b\u673a\u5bc6\u94a5\u7f13\u5b58\u4e2d\u7684GitHub\u4e3b\u673a\u5bc6\u94a5\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u4e4b\u524d\u6ca1\u6709\u8fde\u63a5\u8fc7\u8be5\u4e3b\u673a\uff0c\u6216\u8005\u4f60\u4e0d\u786e\u5b9a\u662f\u5426\u5e94\u8be5\u4fe1\u4efb\u65b0\u7684\u4e3b\u673a\u5bc6\u94a5\uff0c\u53ef\u4ee5\u624b\u52a8\u9a8c\u8bc1\u4e3b\u673a\u5bc6\u94a5\u7684\u6307\u7eb9\u3002\u6253\u5f00\u7ec8\u7aef\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssh-keyscan github.com\n")),(0,o.kt)("p",null,"\u8fd9\u5c06\u8fd4\u56deGitHub\u4e3b\u673a\u7684\u516c\u94a5\u6307\u7eb9\u3002\u6bd4\u8f83\u8fd9\u4e2a\u6307\u7eb9\u4e0eGitHub\u5b98\u65b9\u6587\u6863\u6216\u5176\u4ed6\u53ef\u4fe1\u6765\u6e90\u4e2d\u7684\u6307\u7eb9\u662f\u5426\u5339\u914d\u3002\u5982\u679c\u5339\u914d\uff0c\u5219\u53ef\u4ee5\u9009\u62e9\u63a5\u53d7\u8be5\u5bc6\u94a5\u5e76\u7ee7\u7eed\u514b\u9686\u64cd\u4f5c\u3002\u5982\u679c\u4e0d\u5339\u914d\uff0c\u53ef\u80fd\u5b58\u5728\u5b89\u5168\u98ce\u9669\uff0c\u5e94\u8be5\u8c28\u614e\u7ee7\u7eed\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u6211\u6267\u884c\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-keygen -R github.com"),"\u4ee5\u540e\uff0c\u6b63\u5e38\u4e86\u3002"),(0,o.kt)("p",null,"\u633d\u56de\u65e7\u7684\u5bc6\u94a5\u4e5f\u6b63\u5e38\u4e86\u3002"),(0,o.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/196664911"},"Xshell\u7684\u4e0b\u8f7d\u4e0e\u4f7f\u7528 - \u77e5\u4e4e")))}h.isMDXComponent=!0}}]);