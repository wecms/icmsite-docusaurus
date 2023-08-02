"use strict";(self.webpackChunkicmsite_docusaurus=self.webpackChunkicmsite_docusaurus||[]).push([[911],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(7294);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,p=function(e,r){if(null==e)return{};var t,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(p[t]=e[t]);return p}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var c=n.createContext({}),o=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=o(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,p=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=o(t),d=p,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:p,i[1]=l;for(var o=2;o<a;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6451:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var n=t(7462),p=(t(7294),t(3905));const a={},i="Cheatsheet",l={unversionedId:"yuanzhong/cheatsheet",id:"yuanzhong/cheatsheet",title:"Cheatsheet",description:"app-energy-go",source:"@site/docs/yuanzhong/cheatsheet.md",sourceDirName:"yuanzhong",slug:"/yuanzhong/cheatsheet",permalink:"/docs/yuanzhong/cheatsheet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/yuanzhong/cheatsheet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"YZ",permalink:"/docs/yuanzhong/"}},c={},o=[{value:"app-energy-go",id:"app-energy-go",level:2},{value:"Windows \u7ec8\u7aef Terminal",id:"windows-\u7ec8\u7aef-terminal",level:3},{value:"\u542f\u52a8Nginx\u548cPHP-FPM",id:"\u542f\u52a8nginx\u548cphp-fpm",level:3},{value:"\u542f\u52a8\u542f\u52a8\u5fae\u670d\u52a1",id:"\u542f\u52a8\u542f\u52a8\u5fae\u670d\u52a1",level:3},{value:"api\u548crpc\u751f\u6210",id:"api\u548crpc\u751f\u6210",level:3},{value:"\u751f\u6210\u6a21\u578b\u3000Model",id:"\u751f\u6210\u6a21\u578bmodel",level:3},{value:"\u7f16\u8bd1\u6253\u5305\u548cDocker Image Push",id:"\u7f16\u8bd1\u6253\u5305\u548cdocker-image-push",level:3}],s={toc:o},u="wrapper";function h(e){let{components:r,...t}=e;return(0,p.kt)(u,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"cheatsheet"},"Cheatsheet"),(0,p.kt)("h2",{id:"app-energy-go"},"app-energy-go"),(0,p.kt)("p",null,"\u9879\u76ee: app-energy-go"),(0,p.kt)("p",null,"\u76ee\u5f55\uff1a ",(0,p.kt)("inlineCode",{parentName:"p"},"\\\\wsl$\\Ubuntu-20.04\\srv\\app-energy-go")),(0,p.kt)("h3",{id:"windows-\u7ec8\u7aef-terminal"},"Windows \u7ec8\u7aef Terminal"),(0,p.kt)("p",null,"\u6279\u91cf\u6253\u5f00 Hyperf Terminal"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cmd"},'wt -p "APP-Farm+System"; split-pane -V  -p "APP-Farm+System"; new-tab -p "Service-Acl+Auth"; split-pane -V  -p "Service-Acl+Auth" ; new-tab -p "Service-Broadcast+Device"; split-pane -V  -p "Service-Broadcast+Device"; new-tab -p "Service-DeviceReciever+Group"; split-pane -V  -p "Service-DeviceReciever+Group"; new-tab -p "Service-Notice+Report"; split-pane -V  -p "Service-Notice+Report"; new-tab -p "Service-Trigger+Weather"; split-pane -V  -p "Service-Trigger+Weather"; new-tab -p "Service-Simdata+common"; split-pane -V  -p "Service-Simdata+common"; new-tab  -p "Ubuntu-20.04" --title Ubuntu-20.04\n')),(0,p.kt)("p",null,"\u6279\u91cf\u6253\u5f00 Go-Zero Terminal"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cmd"},'wt -p "Usercenter"; split-pane -V  -p "Usercenter"; new-tab -p "Sms"; split-pane -V  -p "Sms" ;  new-tab -p "Device"; split-pane -V  -p "Device" ; new-tab -p "GoGroup"; split-pane -V  -p "GoGroup"; new-tab -p "GoTrigger"; split-pane -V  -p "GoTrigger";new-tab -p "GoStats"; split-pane -V  -p "GoStats";new-tab -p "GoCtrl"; split-pane -V  -p "GoCtrl"; new-tab -p "Ubuntu-20.04"; split-pane -V  -p "Ubuntu-20.04" --title Ubuntu-20.04\n')),(0,p.kt)("h3",{id:"\u542f\u52a8nginx\u548cphp-fpm"},"\u542f\u52a8Nginx\u548cPHP-FPM"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"/srv/http# service nginx start\n\n/srv/http# service php7.4-fpm start\n")),(0,p.kt)("h3",{id:"\u542f\u52a8\u542f\u52a8\u5fae\u670d\u52a1"},"\u542f\u52a8\u542f\u52a8\u5fae\u670d\u52a1"),(0,p.kt)("p",null,"Hyperf"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"cd app-farm && php bin/hyperf.php server:watch\ncd app-system && php bin/hyperf.php server:watch\n\ncd service-acl && php bin/hyperf.php server:watch\ncd service-auth && php bin/hyperf.php server:watch\n\ncd service-broadcast && php bin/hyperf.php server:watch\ncd service-device && php bin/hyperf.php server:watch\n\ncd service-device-reciever && php bin/hyperf.php server:watch\ncd service-group && php bin/hyperf.php server:watch\n\ncd service-notice && php bin/hyperf.php server:watch\ncd service-report && php bin/hyperf.php server:watch\n\ncd service-trigger && php bin/hyperf.php server:watch\ncd service-weather && php bin/hyperf.php server:watch\n \ncd service-simdata && php bin/hyperf.php server:watch\ncd service-common && php bin/hyperf.php server:watch\n")),(0,p.kt)("p",null,"Go-Zero app-energy-go"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"$ cd rpc && air\n$ cd api && air\n")),(0,p.kt)("h3",{id:"api\u548crpc\u751f\u6210"},"api\u548crpc\u751f\u6210"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"# service/device/api \u76ee\u5f55\u4e0b\u6267\u884c\ngoctl api go -api *.api -dir ./  --style=goZero  // \u540e\u671f\u53ef\u4ee5\u8003\u8651\u53ef\u4ee5\u52a0 --home ./tpl\n\n# service/device/rpc/pb \u76ee\u5f55\u4e0b\u6267\u884c\ngoctl rpc protoc *.proto --go_out=../ --go-grpc_out=../  --zrpc_out=../ --style=goZero  // \u540e\u671f\u53ef\u4ee5\u8003\u8651\u52a0 --home ./tpl\n")),(0,p.kt)("h3",{id:"\u751f\u6210\u6a21\u578bmodel"},"\u751f\u6210\u6a21\u578b\u3000Model"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},'goctl14 model mysql ddl -src="./service/device/model/groups.sql" -dir="./service/device/model" -style=goZero -c --home=.goctl\n')),(0,p.kt)("p",null,"\u8fd9\u91cc\u6709\u51e0\u4e2a\u5173\u952e\u53c2\u6570"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"goctl\u7248\u672c\u662f14(\u6700\u65e9\u4f7f\u7528Go-Zero\u65f6\u7528\u7684goctl13\uff0c\u540e\u6765\u5347\u7ea7\u5230\u4e8614)"),(0,p.kt)("li",{parentName:"ol"},"\u5728 ",(0,p.kt)("inlineCode",{parentName:"li"},"app-energy-go")," \u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c"),(0,p.kt)("li",{parentName:"ol"},"\u53c2\u6570 ",(0,p.kt)("inlineCode",{parentName:"li"},"-c")," \u5e26\u7f13\u5b58"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("inlineCode",{parentName:"li"},"--home=.goctl")," \u751f\u6210\u6a21\u677f\u76ee\u5f55")),(0,p.kt)("h3",{id:"\u7f16\u8bd1\u6253\u5305\u548cdocker-image-push"},"\u7f16\u8bd1\u6253\u5305\u548cDocker Image Push"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd /srv/app-energy-go\n\n$ make push-latest name=usercenter-rpc # \u53ea\u63a8\u9001\n\n$ make push app=device/api name=device-api # \u7f16\u8bd1\u5e76\u63a8\u9001\n\n$ make push app=device/rpc name=device-rpc # \u7f16\u8bd1\u5e76\u63a8\u9001\n")),(0,p.kt)("p",null,"\u9047\u5230\u95ee\u9898\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},'=> ERROR [builder 1/9] FROM docker.io/library/golang:alpine@sha256:7839c9f01b5502d7cb5198b2c  132.1s\n...\n > [builder 1/9] FROM docker.io/library/golang:alpine@sha256:7839c9f01b5502d7cb5198b2c032857023424470b3e31ae46a8261ffca72912a:\n------\nfailed commit on ref "layer-sha256:31e352740f534f9ad170f75378a84fe453d6156e40700b882d737a8f4a6988a3"\n')),(0,p.kt)("p",null,"\u95eeAI\u8bf4\uff1a"),(0,p.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u63d0\u793a\u662f\u5728\u4f7f\u7528 Docker \u6784\u5efa\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u8fd9\u4e2a\u9519\u8bef\u6307\u793a\u5728\u6784\u5efa\u8fc7\u7a0b\u7684\u7b2c\u4e00\u4e2a\u6b65\u9aa4\u4e2d\uff0c\u4ece docker.io/library/golang \u955c\u50cf\u83b7\u53d6\u5931\u8d25\u3002"),(0,p.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u53ef\u80fd\u6709\u4ee5\u4e0b\u51e0\u4e2a\u539f\u56e0\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u7f51\u7edc\u8fde\u63a5\u95ee\u9898\uff1a\u6784\u5efa\u8fc7\u7a0b\u65e0\u6cd5\u8fde\u63a5\u5230 docker.io \u670d\u52a1\u5668\u6765\u83b7\u53d6\u6240\u9700\u7684\u955c\u50cf\u3002\u8bf7\u786e\u4fdd\u4f60\u7684\u7f51\u7edc\u8fde\u63a5\u6b63\u5e38\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u91cd\u65b0\u8fd0\u884c\u6784\u5efa\u547d\u4ee4\u3002")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u955c\u50cf\u4e0d\u5b58\u5728\uff1adocker.io/library/golang \u955c\u50cf\u53ef\u80fd\u4e0d\u5b58\u5728\u6216\u88ab\u79fb\u9664\u3002\u4f60\u53ef\u4ee5\u5728 Docker Hub \u6216\u5176\u4ed6\u955c\u50cf\u4ed3\u5e93\u4e2d\u9a8c\u8bc1\u8be5\u955c\u50cf\u662f\u5426\u53ef\u7528\u3002"))),(0,p.kt)("p",null,". \u8bbf\u95ee\u6743\u9650\u95ee\u9898\uff1a\u4f60\u53ef\u80fd\u6ca1\u6709\u8db3\u591f\u7684\u6743\u9650\u6765\u8bbf\u95ee docker.io/library/golang \u955c\u50cf\u3002\u68c0\u67e5\u4f60\u7684 Docker \u914d\u7f6e\uff0c\u786e\u4fdd\u4f60\u6709\u9002\u5f53\u7684\u8bbf\u95ee\u6743\u9650\u3002"),(0,p.kt)("p",null,"\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u65b9\u6cd5\u53ef\u80fd\u5305\u62ec\uff1a"),(0,p.kt)("p",null,"\u786e\u4fdd\u4f60\u7684\u7f51\u7edc\u8fde\u63a5\u6b63\u5e38\uff0c\u80fd\u591f\u8bbf\u95ee docker.io\u3002"),(0,p.kt)("p",null,"\u9a8c\u8bc1 docker.io/library/golang \u955c\u50cf\u662f\u5426\u5b58\u5728\u548c\u53ef\u7528\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u4e86\u81ea\u5b9a\u4e49\u7684\u955c\u50cf\u6e90\uff0c\u786e\u4fdd\u914d\u7f6e\u6b63\u786e\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u95ee\u9898\u4ecd\u7136\u5b58\u5728\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528\u5176\u4ed6\u53ef\u7528\u7684\u955c\u50cf\u6e90\u6216\u672c\u5730\u955c\u50cf\u3002"),(0,p.kt)("p",null,"\u6211\u7684\u662f\u7f51\u7edc\u8fde\u63a5\u95ee\u9898\uff0c",(0,p.kt)("inlineCode",{parentName:"p"},"ping docker.io")," \u4e0d\u901a\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre"},"vim /etc/hosts\n\n34.205.13.154   registry-1.docker.io\n")),(0,p.kt)("p",null,"\u4fdd\u5b58\uff0c\u89e3\u51b3\u4e86\u3002"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/ws0316/p/12066454.html"},"Docker\u62c9\u53d6\u955c\u50cf\u65f6\u9519\u8bef\u89e3\u51b3\u529e\u6cd5 - WaterStream - \u535a\u5ba2\u56ed")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("a",{parentName:"li",href:"https://ipw.cn/dns/"},"\u57df\u540d\u89e3\u6790\u67e5\u8be2 | DNS\u67e5\u8be2 | IPv6\u89e3\u6790 | \u5728\u7ebfdig | IP\u67e5\u8be2(ipw.cn)"))))}h.isMDXComponent=!0}}]);