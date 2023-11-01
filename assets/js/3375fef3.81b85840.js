"use strict";(self.webpackChunkicmsite_docusaurus=self.webpackChunkicmsite_docusaurus||[]).push([[8499],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),p=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return o.createElement(i.Provider,{value:r},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),u=n,m=d["".concat(i,".").concat(u)]||d[u]||k[u]||a;return t?o.createElement(m,l(l({ref:r},s),{},{components:t})):o.createElement(m,l({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=u;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7563:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const a={},l="Docker",c={unversionedId:"tools/docker",id:"tools/docker",title:"Docker",description:"Docker \u955c\u50cf\u52a0\u901f\u5668",source:"@site/docs/tools/docker.md",sourceDirName:"tools",slug:"/tools/docker",permalink:"/docs/tools/docker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools/docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b9d\u5854\u9762\u677f",permalink:"/docs/tools/bt"},next:{title:"Git",permalink:"/docs/tools/git"}},i={},p=[{value:"Docker \u955c\u50cf\u52a0\u901f\u5668",id:"docker-\u955c\u50cf\u52a0\u901f\u5668",level:2},{value:"\u914d\u7f6eDocker\u8fd0\u884c\u65f6\u955c\u50cf\u52a0\u901f\u5668",id:"\u914d\u7f6edocker\u8fd0\u884c\u65f6\u955c\u50cf\u52a0\u901f\u5668",level:3},{value:"\u9047\u5230\u9519\u8bef",id:"\u9047\u5230\u9519\u8bef",level:3},{value:"Portainer Docker Install phpRedisAdmin",id:"portainer-docker-install-phpredisadmin",level:2},{value:"Docker\u548cDocker-compose\u5b89\u88c5",id:"docker\u548cdocker-compose\u5b89\u88c5",level:2},{value:"Portainer\u5b89\u88c5",id:"portainer\u5b89\u88c5",level:2}],s={toc:p},d="wrapper";function k(e){let{components:r,...a}=e;return(0,n.kt)(d,(0,o.Z)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"docker"},"Docker"),(0,n.kt)("h2",{id:"docker-\u955c\u50cf\u52a0\u901f\u5668"},"Docker \u955c\u50cf\u52a0\u901f\u5668"),(0,n.kt)("p",null,"Docker Hub \u955c\u50cf\u7f13\u5b58"),(0,n.kt)("p",null,"\u56fd\u5185\u4ece Docker Hub \u62c9\u53d6\u955c\u50cf\u6709\u65f6\u4f1a\u9047\u5230\u56f0\u96be\uff0c\u6b64\u65f6\u53ef\u4ee5\u914d\u7f6e\u955c\u50cf\u52a0\u901f\u5668\u3002\u56fd\u5185\u5f88\u591a\u4e91\u670d\u52a1\u5546\u90fd\u63d0\u4f9b\u4e86\u56fd\u5185\u52a0\u901f\u5668\u670d\u52a1\uff0c"),(0,n.kt)("p",null,"\u6ce8\u610f\u4e0d\u540c\u7cfb\u7edf\u4e0b\u64cd\u4f5c\u6b65\u9aa4\u4e0d\u540c\u3002"),(0,n.kt)("h3",{id:"\u914d\u7f6edocker\u8fd0\u884c\u65f6\u955c\u50cf\u52a0\u901f\u5668"},"\u914d\u7f6eDocker\u8fd0\u884c\u65f6\u955c\u50cf\u52a0\u901f\u5668"),(0,n.kt)("p",null,"\u5728\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0b\uff0c\u914d\u7f6e\u52a0\u901f\u5668\u7684\u65b9\u5f0f\u7565\u6709\u4e0d\u540c"),(0,n.kt)("p",null,"Windows 10 WSL\u7528\u6237\uff1a"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u4f7f\u7528 Windows 10 \u7684\u7528\u6237\uff0c\u5728\u4efb\u52a1\u680f\u6258\u76d8 Docker \u56fe\u6807\u5185\u53f3\u952e\u83dc\u5355\u9009\u62e9 Settings\uff0c\u6253\u5f00\u914d\u7f6e\u7a97\u53e3\u540e\u5728\u5de6\u4fa7\u5bfc\u822a\u83dc\u5355\u9009\u62e9 Docker Engine\uff0c\u5728\u53f3\u4fa7\u50cf\u4e0b\u8fb9\u4e00\u6837\u7f16\u8f91 json \u6587\u4ef6\uff0c\u4e4b\u540e\u70b9\u51fb Apply & Restart \u4fdd\u5b58\u540e Docker \u5c31\u4f1a\u91cd\u542f\u5e76\u5e94\u7528\u914d\u7f6e\u7684\u955c\u50cf\u5730\u5740\u4e86\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docker-practice.github.io/zh-cn/install/mirror.html"},"\u955c\u50cf\u52a0\u901f\u5668 \xb7 Docker -- \u4ece\u5165\u95e8\u5230\u5b9e\u8df5")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://mirrors.ustc.edu.cn/help/dockerhub.html"},"Docker Hub \u6e90\u4f7f\u7528\u5e2e\u52a9 \u2014 USTC Mirror Help \u6587\u6863")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://help.aliyun.com/zh/acr/user-guide/accelerate-the-pulls-of-docker-official-images"},"\u5982\u4f55\u83b7\u53d6\u548c\u914d\u7f6e\u955c\u50cf\u52a0\u901f\u5668_\u5bb9\u5668\u955c\u50cf\u670d\u52a1 ACR-\u963f\u91cc\u4e91\u5e2e\u52a9\u4e2d\u5fc3")),(0,n.kt)("h3",{id:"\u9047\u5230\u9519\u8bef"},"\u9047\u5230\u9519\u8bef"),(0,n.kt)("p",null,"Go-Zero\u4f7f\u7528Docker\u6253\u5305\u65f6\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"resolve image config for docker.io/docker/dockerfile"),"\u5f88\u957f\u65f6\u95f4\u6216\u8005\u62a5\u9519\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," => ERROR resolve image config for docker.io/docker/dockerfile:1                                                                                                                                         5176.5s\n------\n > resolve image config for docker.io/docker/dockerfile:1:\n")),(0,n.kt)("h2",{id:"portainer-docker-install-phpredisadmin"},"Portainer Docker Install phpRedisAdmin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"erikdubbelboer/phpredisadmin")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/erikdubbelboer/phpRedisAdmin"},"erikdubbelboer/phpRedisAdmin: Simple web interface to manage Redis databases.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"name: phpredisadmin"),(0,n.kt)("li",{parentName:"ul"},"Image: erikdubbelboer/phpredisadmin"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6dfb\u52a0\u73af\u5883\u53d8\u91cfEnvironment variables ",(0,n.kt)("inlineCode",{parentName:"p"},"REDIS_1_HOST")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Manual network port publishing(publish a new network port): 2080:80"),(0,n.kt)("li",{parentName:"ul"},"Advanced container settings: network\u9009\u62e9redis\u76f8\u540c\u7684\u7f51\u7edc\uff0cEnv\u6dfb\u52a0\u4e00\u4e2a\u73af\u5883\u53d8\u91cfREDIS_1_HOST\u503c\u586b\u5199Redis\u7684\u7f51\u7edcIP\u5730\u5740")))),(0,n.kt)("p",null,"\u6dfb\u52a0\u6210\u529f\u540e\uff0c\u5373\u53ef\u901a\u8fc7http://REDIS_1_HOST:2080/\u8bbf\u95ee\u3002  REDIS_1_HOST\u66ff\u6362\u6210\u4f60\u7684\u5730\u5740\u3002"),(0,n.kt)("h2",{id:"docker\u548cdocker-compose\u5b89\u88c5"},"Docker\u548cDocker-compose\u5b89\u88c5"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"docker \u5b89\u88c5")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"docker-compose \u5feb\u901f\u5b89\u88c5")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl -# -L "https://github.com/docker/compose/releases/download/v2.17.1/docker-compose-linux-x86_64" -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\n\n# \u6216\u8005\u8fd9\u6837\u4e0b\u8f7d\ncurl -# -L https://github.com/docker/compose/releases/download/v2.17.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose\n##################################################################################################### 100.0%\nroot@DESKTOP-7J9I6QH:/usr/local/bin# ls -ahl\ntotal 52M\ndrwxr-xr-x  2 root root 4.0K Oct 31 10:04 .\ndrwxr-xr-x 10 root root 4.0K May  2 05:34 ..\n-rwxr-xr-x  1 root root  52M Oct 31 10:04 docker-compose\n\nchmod +x /usr/local/bin/docker-compose\n')),(0,n.kt)("p",null,"\u6587\u4ef6\u5927\u5c0f52M\u5de6\u53f3\uff0c\u8fd9\u6837\u4e0b\u8f7d\u5b8c\u6574\u4e86\u3002"),(0,n.kt)("h2",{id:"portainer\u5b89\u88c5"},"Portainer\u5b89\u88c5"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'version: "3"\nservices:\n  portainer:\n    image: portainer/portainer-ce\n    hostname: local-portainer\n    container_name: local-portainer\n    ports:\n      - "9000:9000"  #\u907f\u514d\u4e0e\u672c\u673a\u5df2\u6709portainer\u51b2\u7a81\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n      - ./data:/data\n    restart: always\n')),(0,n.kt)("p",null,"\u8fd9\u6837\u5b89\u88c5\u5b8c\u6210\u5168\u9ed8\u8ba4\u8df3\u8f6c\u5230\u9875\u9762\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"docker-portainer-environment-wizard-1.jpg",src:t(7685).Z,width:"1305",height:"770"})),(0,n.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u51fa\u73b0\u4e0a\u8ff0\u9875\u9762\uff0c\u800c\u662fPortainer Environment Wizard  \u6ca1\u6709Get Started\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"docker-portainer-environment-wizard-2.jpg",src:t(3654).Z,width:"1436",height:"972"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"volumes:\n   - /var/run/user/1000/docker.sock:/var/run/docker.sock # \u8fd9\u91cc\u5199\u9519\u9ed8\u8ba4sock\u5730\u5740\u4e86\n")))}k.isMDXComponent=!0},7685:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/docker-portainer-environment-wizard-1-cb6938e724541049fcfb13c32922541f.jpg"},3654:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/docker-portainer-environment-wizard-2-6eed91bc9e3e961d882e4627ababb58a.jpg"}}]);