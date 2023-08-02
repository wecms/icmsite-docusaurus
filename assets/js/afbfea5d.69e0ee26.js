"use strict";(self.webpackChunkicmsite_docusaurus=self.webpackChunkicmsite_docusaurus||[]).push([[911],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||p;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<p;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const p={},o="Cheatsheet",l={unversionedId:"yuanzhong/cheatsheet",id:"yuanzhong/cheatsheet",title:"Cheatsheet",description:"app-energy-go",source:"@site/docs/yuanzhong/cheatsheet.md",sourceDirName:"yuanzhong",slug:"/yuanzhong/cheatsheet",permalink:"/docs/yuanzhong/cheatsheet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/yuanzhong/cheatsheet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"YZ",permalink:"/docs/yuanzhong/"}},i={},c=[{value:"app-energy-go",id:"app-energy-go",level:2},{value:"Windows \u7ec8\u7aef Terminal",id:"windows-\u7ec8\u7aef-terminal",level:3},{value:"\u542f\u52a8Nginx\u548cPHP-FPM",id:"\u542f\u52a8nginx\u548cphp-fpm",level:3},{value:"\u542f\u52a8app-energy-go",id:"\u542f\u52a8app-energy-go",level:3},{value:"api\u548crpc\u751f\u6210",id:"api\u548crpc\u751f\u6210",level:3},{value:"\u751f\u6210\u6a21\u578b\u3000Model",id:"\u751f\u6210\u6a21\u578bmodel",level:3},{value:"\u7f16\u8bd1\u6253\u5305\u548cDocker Image Push",id:"\u7f16\u8bd1\u6253\u5305\u548cdocker-image-push",level:3}],s={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cheatsheet"},"Cheatsheet"),(0,a.kt)("h2",{id:"app-energy-go"},"app-energy-go"),(0,a.kt)("p",null,"\u9879\u76ee: app-energy-go"),(0,a.kt)("p",null,"\u76ee\u5f55\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"\\\\wsl$\\Ubuntu-20.04\\srv\\app-energy-go")),(0,a.kt)("h3",{id:"windows-\u7ec8\u7aef-terminal"},"Windows \u7ec8\u7aef Terminal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cmd"},'wt -p "APP-Farm+System"; split-pane -V  -p "APP-Farm+System"; new-tab -p "Service-Acl+Auth"; split-pane -V  -p "Service-Acl+Auth" ; new-tab -p "Service-Broadcast+Device"; split-pane -V  -p "Service-Broadcast+Device"; new-tab -p "Service-DeviceReciever+Group"; split-pane -V  -p "Service-DeviceReciever+Group"; new-tab -p "Service-Notice+Report"; split-pane -V  -p "Service-Notice+Report"; new-tab -p "Service-Trigger+Weather"; split-pane -V  -p "Service-Trigger+Weather"; new-tab -p "Service-Simdata+common"; split-pane -V  -p "Service-Simdata+common"; new-tab  -p "Ubuntu-20.04" --title Ubuntu-20.04\n\n\nwt -p "Usercenter"; split-pane -V  -p "Usercenter"; new-tab -p "Sms"; split-pane -V  -p "Sms" ;  new-tab -p "Device"; split-pane -V  -p "Device" ; new-tab -p "GoGroup"; split-pane -V  -p "GoGroup"; new-tab -p "GoTrigger"; split-pane -V  -p "GoTrigger";new-tab -p "GoStats"; split-pane -V  -p "GoStats";new-tab -p "GoCtrl"; split-pane -V  -p "GoCtrl"; new-tab -p "Ubuntu-20.04"; split-pane -V  -p "Ubuntu-20.04" --title Ubuntu-20.04\n')),(0,a.kt)("h3",{id:"\u542f\u52a8nginx\u548cphp-fpm"},"\u542f\u52a8Nginx\u548cPHP-FPM"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/srv/http# service nginx start\n\n/srv/http# service php7.4-fpm start\n")),(0,a.kt)("h3",{id:"\u542f\u52a8app-energy-go"},"\u542f\u52a8app-energy-go"),(0,a.kt)("p",null,"Go-Zero"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cd rpc && air\n$ cd api && air\n")),(0,a.kt)("h3",{id:"api\u548crpc\u751f\u6210"},"api\u548crpc\u751f\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# service/device/api \u76ee\u5f55\u4e0b\u6267\u884c\ngoctl api go -api *.api -dir ./  --style=goZero  // \u540e\u671f\u53ef\u4ee5\u8003\u8651\u53ef\u4ee5\u52a0 --home ./tpl\n\n# service/device/rpc/pb \u76ee\u5f55\u4e0b\u6267\u884c\ngoctl rpc protoc *.proto --go_out=../ --go-grpc_out=../  --zrpc_out=../ --style=goZero  // \u540e\u671f\u53ef\u4ee5\u8003\u8651\u52a0 --home ./tpl\n")),(0,a.kt)("h3",{id:"\u751f\u6210\u6a21\u578bmodel"},"\u751f\u6210\u6a21\u578b\u3000Model"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'goctl14 model mysql ddl -src="./service/device/model/groups.sql" -dir="./service/device/model" -style=goZero -c --home=.goctl\n')),(0,a.kt)("p",null,"\u8fd9\u91cc\u6709\u51e0\u4e2a\u5173\u952e\u53c2\u6570"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"goctl\u7248\u672c\u662f14"),(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"app-energy-go")," \u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c"),(0,a.kt)("li",{parentName:"ol"},"\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"-c")," \u5e26\u7f13\u5b58"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"--home=.goctl")," \u751f\u6210\u6a21\u677f\u76ee\u5f55")),(0,a.kt)("h3",{id:"\u7f16\u8bd1\u6253\u5305\u548cdocker-image-push"},"\u7f16\u8bd1\u6253\u5305\u548cDocker Image Push"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd /srv/app-energy-go\n\n$ make push-latest name=usercenter-rpc # \u53ea\u63a8\u9001\n\n$ make push app=device/api name=device-api # \u7f16\u8bd1\u5e76\u63a8\u9001\n\n$ make push app=device/rpc name=device-rpc # \u7f16\u8bd1\u5e76\u63a8\u9001\n")),(0,a.kt)("p",null,"\u9047\u5230\u95ee\u9898\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'=> ERROR [builder 1/9] FROM docker.io/library/golang:alpine@sha256:7839c9f01b5502d7cb5198b2c  132.1s\n...\n > [builder 1/9] FROM docker.io/library/golang:alpine@sha256:7839c9f01b5502d7cb5198b2c032857023424470b3e31ae46a8261ffca72912a:\n------\nfailed commit on ref "layer-sha256:31e352740f534f9ad170f75378a84fe453d6156e40700b882d737a8f4a6988a3"\n')),(0,a.kt)("p",null,"\u95eeAI\u8bf4\uff1a"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u63d0\u793a\u662f\u5728\u4f7f\u7528 Docker \u6784\u5efa\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u8fd9\u4e2a\u9519\u8bef\u6307\u793a\u5728\u6784\u5efa\u8fc7\u7a0b\u7684\u7b2c\u4e00\u4e2a\u6b65\u9aa4\u4e2d\uff0c\u4ece docker.io/library/golang \u955c\u50cf\u83b7\u53d6\u5931\u8d25\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u53ef\u80fd\u6709\u4ee5\u4e0b\u51e0\u4e2a\u539f\u56e0\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7f51\u7edc\u8fde\u63a5\u95ee\u9898\uff1a\u6784\u5efa\u8fc7\u7a0b\u65e0\u6cd5\u8fde\u63a5\u5230 docker.io \u670d\u52a1\u5668\u6765\u83b7\u53d6\u6240\u9700\u7684\u955c\u50cf\u3002\u8bf7\u786e\u4fdd\u4f60\u7684\u7f51\u7edc\u8fde\u63a5\u6b63\u5e38\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u65b0\u8fd0\u884c\u6784\u5efa\u547d\u4ee4\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u955c\u50cf\u4e0d\u5b58\u5728\uff1adocker.io/library/golang \u955c\u50cf\u53ef\u80fd\u4e0d\u5b58\u5728\u6216\u88ab\u79fb\u9664\u3002\u4f60\u53ef\u4ee5\u5728 Docker Hub \u6216\u5176\u4ed6\u955c\u50cf\u4ed3\u5e93\u4e2d\u9a8c\u8bc1\u8be5\u955c\u50cf\u662f\u5426\u53ef\u7528\u3002"))),(0,a.kt)("p",null,". \u8bbf\u95ee\u6743\u9650\u95ee\u9898\uff1a\u4f60\u53ef\u80fd\u6ca1\u6709\u8db3\u591f\u7684\u6743\u9650\u6765\u8bbf\u95ee docker.io/library/golang \u955c\u50cf\u3002\u68c0\u67e5\u4f60\u7684 Docker \u914d\u7f6e\uff0c\u786e\u4fdd\u4f60\u6709\u9002\u5f53\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,a.kt)("p",null,"\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u65b9\u6cd5\u53ef\u80fd\u5305\u62ec\uff1a"),(0,a.kt)("p",null,"\u786e\u4fdd\u4f60\u7684\u7f51\u7edc\u8fde\u63a5\u6b63\u5e38\uff0c\u80fd\u591f\u8bbf\u95ee docker.io\u3002"),(0,a.kt)("p",null,"\u9a8c\u8bc1 docker.io/library/golang \u955c\u50cf\u662f\u5426\u5b58\u5728\u548c\u53ef\u7528\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49\u7684\u955c\u50cf\u6e90\uff0c\u786e\u4fdd\u914d\u7f6e\u6b63\u786e\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u95ee\u9898\u4ecd\u7136\u5b58\u5728\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528\u5176\u4ed6\u53ef\u7528\u7684\u955c\u50cf\u6e90\u6216\u672c\u5730\u955c\u50cf\u3002"),(0,a.kt)("p",null,"\u6211\u7684\u662f\u7f51\u7edc\u8fde\u63a5\u95ee\u9898\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ping docker.io")," \u4e0d\u901a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"vim /etc/hosts\n\n34.205.13.154   registry-1.docker.io\n")),(0,a.kt)("p",null,"\u4fdd\u5b58\uff0c\u89e3\u51b3\u4e86\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/ws0316/p/12066454.html"},"Docker\u62c9\u53d6\u955c\u50cf\u65f6\u9519\u8bef\u89e3\u51b3\u529e\u6cd5 - WaterStream - \u535a\u5ba2\u56ed")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://ipw.cn/dns/"},"\u57df\u540d\u89e3\u6790\u67e5\u8be2 | DNS\u67e5\u8be2 | IPv6\u89e3\u6790 | \u5728\u7ebfdig | IP\u67e5\u8be2(ipw.cn)"))))}d.isMDXComponent=!0}}]);