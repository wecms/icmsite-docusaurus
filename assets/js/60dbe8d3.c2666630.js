"use strict";(self.webpackChunkicmsite_docusaurus=self.webpackChunkicmsite_docusaurus||[]).push([[9903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=l.createContext({}),p=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),k=o,m=d["".concat(i,".").concat(k)]||d[k]||c[k]||a;return n?l.createElement(m,r(r({ref:t},u),{},{components:n})):l.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var l=n(7462),o=(n(7294),n(3905));const a={},r="New System Dev",s={unversionedId:"computer/new-system-install-and-setting",id:"computer/new-system-install-and-setting",title:"New System Dev",description:"Windows10\u65b0\u7cfb\u7edf\u5f00\u53d1\u73af\u5883\u914d\u7f6e",source:"@site/docs/computer/new-system-install-and-setting.md",sourceDirName:"computer",slug:"/computer/new-system-install-and-setting",permalink:"/docs/computer/new-system-install-and-setting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/computer/new-system-install-and-setting.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7535\u8111\u7ec4\u88c5",permalink:"/docs/computer/computer-assembly"},next:{title:"Database",permalink:"/docs/database/"}},i={},p=[{value:"WSL",id:"wsl",level:2},{value:"\u5b89\u88c5WSL",id:"\u5b89\u88c5wsl",level:2},{value:"\u5b89\u88c5Git",id:"\u5b89\u88c5git",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u5b89\u88c5Go\u5f00\u53d1\u73af\u5883",id:"\u5b89\u88c5go\u5f00\u53d1\u73af\u5883",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:3},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:3},{value:"\u5b89\u88c5air",id:"\u5b89\u88c5air",level:2},{value:"\u5b89\u88c5make",id:"\u5b89\u88c5make",level:2},{value:"\u767b\u5f55\u79c1\u6709\u5316docker\u4ed3\u5e93",id:"\u767b\u5f55\u79c1\u6709\u5316docker\u4ed3\u5e93",level:2},{value:"\u5b89\u88c5Goland",id:"\u5b89\u88c5goland",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u6fc0\u6d3b",id:"\u6fc0\u6d3b",level:3},{value:"\u4e0d\u7528\u8fdc\u7a0b\u5f00\u53d1",id:"\u4e0d\u7528\u8fdc\u7a0b\u5f00\u53d1",level:3},{value:"\u8bbe\u7f6eGoland",id:"\u8bbe\u7f6egoland",level:3},{value:"\u53bb\u6389Commit Checks\uff1a",id:"\u53bb\u6389commit-checks",level:3},{value:"\u5b89\u88c5NVM\u548cNode",id:"\u5b89\u88c5nvm\u548cnode",level:2},{value:"\u4f7f\u7528 nvm \u5b89\u88c5Node",id:"\u4f7f\u7528-nvm-\u5b89\u88c5node",level:3},{value:"\u5b89\u88c5Quasar",id:"\u5b89\u88c5quasar",level:2},{value:"PowerShell\u548cVSCode\u7ec8\u7aef\u90fd\u65e0\u6cd5\u4f7f\u7528",id:"powershell\u548cvscode\u7ec8\u7aef\u90fd\u65e0\u6cd5\u4f7f\u7528",level:3},{value:"\u8bbe\u7f6eVSCode",id:"\u8bbe\u7f6evscode",level:2},{value:"\u5b89\u88c5FxSound\u62a5\u9519\u60a8\u7684\u64ad\u653e\u8bbe\u5907\u8bbe\u7f6e\u6709\u95ee\u9898",id:"\u5b89\u88c5fxsound\u62a5\u9519\u60a8\u7684\u64ad\u653e\u8bbe\u5907\u8bbe\u7f6e\u6709\u95ee\u9898",level:2},{value:"\u89e3\u51b3",id:"\u89e3\u51b3",level:3},{value:"\u8fdc\u7a0b\u684c\u9762 \u7ba1\u7406\u58f0\u97f3\u8bbe\u5907 \u8fdc\u7a0b\u97f3\u9891",id:"\u8fdc\u7a0b\u684c\u9762-\u7ba1\u7406\u58f0\u97f3\u8bbe\u5907-\u8fdc\u7a0b\u97f3\u9891",level:3},{value:"\u5176\u4ed6\u53c2\u8003",id:"\u5176\u4ed6\u53c2\u8003",level:3},{value:"\u5b89\u88c5Foobar2000",id:"\u5b89\u88c5foobar2000",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"new-system-dev"},"New System Dev"),(0,o.kt)("p",null,"Windows10\u65b0\u7cfb\u7edf\u5f00\u53d1\u73af\u5883\u914d\u7f6e"),(0,o.kt)("h2",{id:"wsl"},"WSL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ lsb_release -a\n\n$ apt update\n")),(0,o.kt)("p",null,"\u5728\u6211\u7684\u7535\u8111\u6dfb\u52a0\u4e00\u4e2a\u7f51\u7edc\u4f4d\u7f6e\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"\\\\wsl$\\Ubuntu\\srv")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\\\\wsl$\\Ubuntu-20.04\\root\\  \u65e0\u6cd5\u8bbf\u95ee\n\u4fee\u6539wsl ubuntu \u9ed8\u8ba4\u767b\u5f55root\nubuntu config --default-user root\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5wsl"},"\u5b89\u88c5WSL"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/zh-cn/windows/wsl/basic-commands#install"},"WSL \u7684\u57fa\u672c\u547d\u4ee4 | Microsoft Learn")),(0,o.kt)("h2",{id:"\u5b89\u88c5git"},"\u5b89\u88c5Git"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'apt-get install git\ngit config --global user.name "Your Name"\ngit config --global user.email "youremail@domain.com"\n')),(0,o.kt)("p",null,'\u76f4\u63a5\u4ece\u6211\u7684Windows10\u7cfb\u7edf\u4e0b\u7684"C:\\Users\\Admin',".",'ssh"\u62f7\u8d1d\u5230"/root/.ssh"\u4fee\u6539\u4e86\u4e00\u4e0bconfig\u6587\u4ef6\u4e2d\u7684IdentityFile /root/.ssh/id_rsa_codeup\u8def\u5f84\u3002'),(0,o.kt)("p",null,"clone\u65f6\u62a5\u9519\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"root@DESKTOP-7J9I6QH:/srv/server# git clone git@git.yztiot.com:gdyz/app-iot-go.git\nCloning into 'app-iot-go'...\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nPermissions 0644 for '/root/.ssh/id_rsa_yztiot' are too open.\nIt is required that your private key files are NOT accessible by others.\n")),(0,o.kt)("p",null,"\u610f\u601d\u65f6ssh\u7684\u79c1\u6709\u5bc6\u94a5\u7684\u6743\u9650\u592a\u5927\u4e86\u3002\u89e3\u51b3\u65b9\u6848\uff1a\u5c06\u6743\u9650\u75310644\u964d\u4f4e\u4e3a0600"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd /root/.ssh\n$ chmod 600 ./*\n")),(0,o.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// \u63d0\u4ea4\u65f6\u8f6c\u6362\u4e3aLF\uff0c\u68c0\u51fa\u65f6\u8f6c\u6362\u4e3aCRLF\ngit config --global core.autocrlf true \n\n// \u62d2\u7edd\u63d0\u4ea4\u5305\u542b\u6df7\u5408\u6362\u884c\u7b26\u7684\u6587\u4ef6 \uff08\u4e00\u822c\u8bbe\u7f6e\u4e3atrue\uff09\ngit config --global core.safecrlf true  \n")),(0,o.kt)("p",null,"\u4f46\u662f\u5728\u4e00\u6b21\u4fee\u6539\u5e76\u63d0\u4ea4\u65f6\uff0c\u9047\u5230\u4e86\u4e0b\u9762\u7684\u9519\u8bef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fatal: LF would be replaced by CRLF in app/smartenergy/internal/handler/routes.go\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"wsl-git-autocrlf-1.jpg",src:n(742).Z,width:"1674",height:"681"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"wsl-git-autocrlf-2.jpg",src:n(3600).Z,width:"725",height:"213"})),(0,o.kt)("p",null,"\u4f30\u8ba1\u539f\u56e0\u662f\uff1a"),(0,o.kt)("p",null,"\u5982\u679c\u5de5\u4f5c\u533a\u56e0\u4e3a\u65b0\u589e\u6216\u7f16\u8f91\u51fa\u73b0\u4e86 LF \u6362\u884c\u7b26\u7684\u6587\u4ef6\uff0cgit add \u8fd9\u4e9b\u6587\u4ef6\u65f6\uff0c\u53d1\u73b0\u51c6\u5907\u63d0\u4ea4\u7684\u6587\u4ef6\u662f LF \u4f5c\u4e3a\u6362\u884c\u7b26\uff0c\u5c31\u4f1a\u51fa\u73b0\u8fd9\u4e2a\u8b66\u544a\uff0c\u5e76\u63d0\u793a\u54ea\u4e9b\u6587\u4ef6\u662f LF \u6362\u884c\u7684\uff08\u4f46 git \u4e0d\u4f1a\u5bf9\u5de5\u4f5c\u533a\u8fd9\u4e9b\u6587\u4ef6\u505a\u6362\u884c\u7b26\u7684\u8f6c\u6362\uff09\u3002"),(0,o.kt)("p",null,"\u624b\u52a8\u8f6c\u6362\u4e86\u4e0b\uff0c\u597d\u4e86\u3002"),(0,o.kt)("p",null,"Goland \u53ef\u4ee5\u5728\u5e95\u90e8\u72b6\u6001\u680f\u663e\u793a\u6587\u4ef6\u7684\u884c\u7ed3\u675f\u7b26\u3002\u4e5f\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u8fdb\u884c\u8f6c\u6362\u3002"),(0,o.kt)("p",null,"\u7ed3\u8bba\uff1a\u5728 WSL \u4e2d\u7f16\u8f91\u7684\u6587\u4ef6\u901a\u5e38\u4e0d\u9700\u8981\u624b\u52a8\u8f6c\u6362\u884c\u7ed3\u675f\u7b26\uff0c\u4f46\u5982\u679c\u4f60\u9700\u8981\u5728\u4e0d\u540c\u73af\u5883\u4e4b\u95f4\u5171\u4eab\u6587\u4ef6\u5e76\u4f7f\u7528\u4e0d\u540c\u7684\u884c\u7ed3\u675f\u7b26\uff0c\u53ef\u4ee5\u8fdb\u884c\u9002\u5f53\u7684\u914d\u7f6e\u3002\u5bf9\u4e8e\u7eaf\u7cb9\u5728 Windows \u4e0a\u7f16\u8f91\u7684\u6587\u4ef6\uff0c\u901a\u5e38\u4f7f\u7528 CRLF \u4f5c\u4e3a\u884c\u7ed3\u675f\u7b26\uff0c\u65e0\u9700\u624b\u52a8\u8f6c\u6362\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/50862500"},"git\u5982\u4f55\u907f\u514d\u201dwarning: LF will be replaced by CRLF\u201c\u63d0\u793a\uff1f - \u77e5\u4e4e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/wangwenhui/p/12141758.html"},"Git\u4e2dCRLF\u4e0eLF\u7684\u8f6c\u6362 - sandy.simple - \u535a\u5ba2\u56ed")),(0,o.kt)("p",null,"\u4e4b\u524d\u4e5f\u9047\u5230\u8fc7\u7c7b\u4f3c\u95ee\u9898\uff0c\u9700\u8981\u6ce8\u610f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PHPStorm\u7684Git\u8def\u5f84\u8bbe\u7f6e\u6210Windows\u4e2d\u5b89\u88c5\u7684Git\uff0c\u4e0d\u8981\u81ea\u52a8\u68c0\u6d4b\u4f7f\u7528Ubuntu\u7cfb\u7edf\u4e2d\u7684Git(\u5982\u679c\u5206\u522b\u5728Windows\u548cWSL\u7cfb\u7edf\u4e2d\u5206\u522b\u5b89\u88c5\u4e86Git\u7684\u8bdd)"),(0,o.kt)("li",{parentName:"ul"},"\u8fd9\u6837\u4fdd\u6301\u548cWindows\u7cfb\u7edf\u4e2d\u5176\u4ed6Git\u5ba2\u6237\u7aefTortoiseGit\u3001GitHub Desktop\u4fdd\u6301\u4e00\u81f4\uff01(\u5982\u679c\u5728Windows\u4e2d\u5b89\u88c5\u4e86\u5176\u4ed6Git\u5ba2\u6237\u7aef\u7684\u8bdd)")),(0,o.kt)("h2",{id:"\u5b89\u88c5go\u5f00\u53d1\u73af\u5883"},"\u5b89\u88c5Go\u5f00\u53d1\u73af\u5883"),(0,o.kt)("p",null,"\u5220\u9664 /usr/local/go \u6587\u4ef6\u5939\uff08\u5982\u679c\u5b58\u5728\uff09\u6765\u5220\u9664\u4efb\u4f55\u4ee5\u524d\u7684 Go \u5b89\u88c5\uff0c\u7136\u540e\u5c06\u521a\u521a\u4e0b\u8f7d\u7684\u5b58\u6863\u89e3\u538b\u7f29\u5230 /usr/local\uff0c\u5728 /usr/local/go \u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Go \u76ee\u5f55"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd /usr/local\n$ wget https://go.dev/dl/go1.19.10.linux-amd64.tar.gz\n$ rm -rf /usr/local/go && tar -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz\n")),(0,o.kt)("p",null,"\u5c06 /usr/local/go/bin \u6dfb\u52a0\u5230 PATH \u73af\u5883\u53d8\u91cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export GOROOT=/usr/local/go\nexport GOPATH=/srv/go\nexport GOBIN=$GOPATH/bin\nexport PATH=$PATH:$GOBIN\n")),(0,o.kt)("h3",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ go version\nwarning: GOPATH set to GOROOT (/usr/local/go) has no effect\ngo version go1.19.10 linux/amd64\n")),(0,o.kt)("p",null,"\u6839\u636e\u8b66\u544a\u4fe1\u606f\uff0c\u4f60\u5c06 GOPATH \u8bbe\u7f6e\u4e3a\u4e86 GOROOT \u7684\u8def\u5f84 /usr/local/go\uff0c\u8fd9\u662f\u4e0d\u6b63\u786e\u7684\u7528\u6cd5\u3002\u56e0\u4e3a GOPATH \u5e94\u8be5\u662f\u4e00\u4e2a\u72ec\u7acb\u4e8e GOROOT \u7684\u76ee\u5f55\uff0c\u7528\u4e8e\u5b58\u50a8\u4f60\u7684 Go \u5de5\u7a0b\u548c\u76f8\u5173\u4f9d\u8d56\u3002"),(0,o.kt)("p",null,"\u8981\u89e3\u51b3\u8fd9\u4e2a\u8b66\u544a\uff0c\u4f60\u5e94\u8be5\u5c06 GOPATH \u8bbe\u7f6e\u4e3a\u4e00\u4e2a\u4e0d\u540c\u4e8e GOROOT \u7684\u76ee\u5f55\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u76ee\u5f55\u4f5c\u4e3a GOPATH\uff0c\u5982 /home/yourusername/go\uff0c\u7136\u540e\u5c06 GOPATH \u8bbe\u7f6e\u4e3a\u8be5\u8def\u5f84\u3002\u786e\u4fdd\u4f60\u4e3a GOPATH \u521b\u5efa\u7684\u76ee\u5f55\u5177\u6709\u9002\u5f53\u7684\u6743\u9650\u3002"),(0,o.kt)("h3",{id:"\u5176\u4ed6\u914d\u7f6e"},"\u5176\u4ed6\u914d\u7f6e"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"GO111MODULE \u5f00\u542f")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ go env -w GO111MODULE=on\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u914d\u7f6e Proxy\u200b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ go env -w GOPROXY=https://goproxy.cn,direct\n")),(0,o.kt)("h3",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://go-zero.dev/docs/tasks"},"https://go-zero.dev/docs/tasks")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://go.dev/dl/"},"https://go.dev/dl/")),(0,o.kt)("h2",{id:"\u5b89\u88c5air"},"\u5b89\u88c5air"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go install github.com/cosmtrek/air@latest\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmtrek/air"},"cosmtrek/air: \u2601\ufe0f Live reload for Go apps")),(0,o.kt)("h2",{id:"\u5b89\u88c5make"},"\u5b89\u88c5make"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"apt install make\n")),(0,o.kt)("h2",{id:"\u767b\u5f55\u79c1\u6709\u5316docker\u4ed3\u5e93"},"\u767b\u5f55\u79c1\u6709\u5316docker\u4ed3\u5e93"),(0,o.kt)("p",null,"\u767b\u5f55\u8fd9\u4e00\u4e2a\u547d\u4ee4\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker login\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5goland"},"\u5b89\u88c5Goland"),(0,o.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/go/download/download-thanks.html"},"Thank you for downloading GoLand!")),(0,o.kt)("h3",{id:"\u6fc0\u6d3b"},"\u6fc0\u6d3b"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/yingxu/p/17456123.html"},"GoLand\u5b89\u88c5+\u7834\u89e3 - \u6f46\u52d6 - \u535a\u5ba2\u56ed")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://idea.javatiku.cn/"},"\u514d\u8d39\u63d0\u4f9b\u6700\u65b0IDEA\u6ce8\u518c\u7801, IDEA\u4e13\u5c5e\u6fc0\u6d3b\u7801, IDEA\u6ce8\u518c\u7801\u5728\u7ebf\u751f\u6210")),(0,o.kt)("h3",{id:"\u4e0d\u7528\u8fdc\u7a0b\u5f00\u53d1"},"\u4e0d\u7528\u8fdc\u7a0b\u5f00\u53d1"),(0,o.kt)("p",null,"Goland Retrieving IDE versions "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com.cn/en-us/help/go/how-to-use-wsl-development-environment-in-product.html#wsl-general"},"WSL | GoLand Documentation")),(0,o.kt)("h3",{id:"\u8bbe\u7f6egoland"},"\u8bbe\u7f6eGoland"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u5b57\u4f53")),(0,o.kt)("p",null,"Fira Code Nerd Font"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ryanoasis/nerd-fonts/releases"},"Releases \xb7 ryanoasis/nerd-fonts")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/ryanoasis/nerd-fonts"},"ryanoasis/nerd-fonts")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"UI\u8bbe\u7f6e")),(0,o.kt)("p",null,"\u4f7f\u7528\u65e7UI"),(0,o.kt)("p",null,"File | Settings | Appearance & Behavior | New UI"),(0,o.kt)("p",null,"\u8bbe\u7f6e\u5b57\u4f53"),(0,o.kt)("p",null,"File | Settings | Appearance & Behavior | Appearance"),(0,o.kt)("p",null,"File | Settings | Editor | Font"),(0,o.kt)("h3",{id:"\u53bb\u6389commit-checks"},"\u53bb\u6389Commit Checks\uff1a"),(0,o.kt)("p",null,"File | Settings | Version Control | Commit"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Analyze code"),(0,o.kt)("li",{parentName:"ul"},"Check TODO"),(0,o.kt)("li",{parentName:"ul"},"Go fmt")),(0,o.kt)("h2",{id:"\u5b89\u88c5nvm\u548cnode"},"\u5b89\u88c5NVM\u548cNode"),(0,o.kt)("p",null,"NVM \u662f\u4e00\u79cd\u7528\u4e8e\u7ba1\u7406\u8bbe\u5907\u4e0a\u7684 Node \u7248\u672c\u7684\u5de5\u5177"),(0,o.kt)("p",null,"\u5728 Windows \u4e0a\u5b89\u88c5 NVM"),(0,o.kt)("p",null,"\u4e0b\u8f7d\u5e76\u5355\u51fb nvm-setup.exe \u8d44\u6e90(\u6ce8\u610f\u53f3\u51fb\u9009\u62e9\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884c\uff0c\u5426\u5219\u4f1a\u6709\u6743\u9650\u95ee\u9898\uff0c\u5b89\u88c5node\u65f6\u4e5f\u5b89\u88c5\u4e0d\u4e0a)\uff0c\u5b83\u662f\u8be5\u5de5\u5177\u7684\u5b89\u88c5\u6587\u4ef6\u3002"),(0,o.kt)("p",null,"\u62a5",(0,o.kt)("inlineCode",{parentName:"p"},"access is denied"),"\u95ee\u9898"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bash: /c/Program Files/nvm/nvm: Permission denied\n")),(0,o.kt)("h3",{id:"\u4f7f\u7528-nvm-\u5b89\u88c5node"},"\u4f7f\u7528 nvm \u5b89\u88c5Node"),(0,o.kt)("p",null,"\u5b89\u88c5\u6307\u5b9a\u7248\u672c\uff0c\u53ef\u6a21\u7cca\u5b89\u88c5\uff0c\u5982\uff1a\u5b89\u88c5 v4.4.0\uff0c\u65e2\u53ef $ nvm install v4.4.0\uff0c\u53c8\u53ef $ nvm install 4.4"),(0,o.kt)("p",null,"\u6b63\u5e38\u5b89\u88c5\u6210\u529f\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,"\u6ce8\u610f\uff0c\u4e5f\u4f7f\u7528\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884c",(0,o.kt)("inlineCode",{parentName:"p"},"Windows PowerShell")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/50563188/access-denied-issue-with-nvm-in-windows-10"},"node.js - Access Denied issue with NVM in Windows 10 - Stack Overflow")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ nvm install 16.20.0\nDownloading node.js version 16.20.0 (64-bit)...\nExtracting node and npm...\nComplete\nnpm v8.19.4 installed successfully.\n\n\nInstallation complete. If you want to use this version, type\n\nnvm use 16.20.0\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ nvm install <version>\n")),(0,o.kt)("p",null,"\u5220\u9664\u5df2\u5b89\u88c5\u7684\u6307\u5b9a\u7248\u672c\uff0c\u8bed\u6cd5\u4e0e install \u7528\u6cd5\u4e00\u81f4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ nvm uninstall <version>\n")),(0,o.kt)("p",null,"\u5217\u51fa\u6240\u6709\u5b89\u88c5\u7684\u7248\u672c,\u5207\u6362\u4f7f\u7528\u6307\u5b9a\u7684\u7248\u672c node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ nvm ls\n$ nvm use <version>\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5quasar"},"\u5b89\u88c5Quasar"),(0,o.kt)("p",null,"\u5168\u5c40\u5b89\u88c5\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm i -g @quasar/cli\n\n")),(0,o.kt)("h3",{id:"powershell\u548cvscode\u7ec8\u7aef\u90fd\u65e0\u6cd5\u4f7f\u7528"},"PowerShell\u548cVSCode\u7ec8\u7aef\u90fd\u65e0\u6cd5\u4f7f\u7528"),(0,o.kt)("p",null,"\u4f46\u662f\u5728GitBash\u547d\u4ee4\u7a97\u53e3\u4e2d\u53ef\u4ee5\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ quasar -v\n@quasar/cli v2.3.0\n")),(0,o.kt)("p",null,"\u7ecf\u67e5\uff1a\u5728 Windows \u7cfb\u7edf\u4e0a\uff0cPowerShell \u548c Git Bash \u4f7f\u7528\u4e0d\u540c\u7684\u6267\u884c\u7b56\u7565\u3002Git Bash \u4f7f\u7528\u7684\u662f Bash Shell\uff0c\u800c PowerShell \u4f7f\u7528\u7684\u662f PowerShell Shell\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cWindows \u4f1a\u5bf9\u4e0d\u540c\u7684 Shell \u5e94\u7528\u4e0d\u540c\u7684\u6267\u884c\u7b56\u7565\u3002"),(0,o.kt)("p",null,"\u68c0\u67e5\u5f53\u524d\u7684\u6267\u884c\u7b56\u7565\uff1a\u5728\u4ee5\u7ba1\u7406\u5458\u8eab\u4efd\u8fd0\u884c\u7684 PowerShell \u7a97\u53e3\u4e2d\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u5f53\u524d\u7684\u6267\u884c\u7b56\u7565\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"Get-ExecutionPolicy")),(0,o.kt)("p",null,'\u8f93\u51fa\u7684\u7ed3\u679c\u5e94\u8be5\u662f "Restricted"\uff08\u53d7\u9650\u5236\uff09\u3002'),(0,o.kt)("p",null,'\u4fee\u6539\u6267\u884c\u7b56\u7565\uff1a\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u6765\u5c06\u6267\u884c\u7b56\u7565\u4fee\u6539\u4e3a "RemoteSigned"\uff08\u4ec5\u5141\u8bb8\u8fd0\u884c\u8fdc\u7a0b\u7b7e\u540d\u7684\u811a\u672c\uff09\uff1a'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"PS C:\\Windows\\system32> Get-ExecutionPolicy\nRestricted\nPS C:\\Windows\\system32> Set-ExecutionPolicy RemoteSigned\n\n\u6267\u884c\u7b56\u7565\u66f4\u6539\n\u6267\u884c\u7b56\u7565\u53ef\u5e2e\u52a9\u4f60\u9632\u6b62\u6267\u884c\u4e0d\u4fe1\u4efb\u7684\u811a\u672c\u3002\u66f4\u6539\u6267\u884c\u7b56\u7565\u53ef\u80fd\u4f1a\u4ea7\u751f\u5b89\u5168\u98ce\u9669\uff0c\u5982 https:/go.microsoft.com/fwlink/?LinkID=135170\n\u4e2d\u7684 about_Execution_Policies \u5e2e\u52a9\u4e3b\u9898\u6240\u8ff0\u3002\u662f\u5426\u8981\u66f4\u6539\u6267\u884c\u7b56\u7565?\n[Y] \u662f(Y)  [A] \u5168\u662f(A)  [N] \u5426(N)  [L] \u5168\u5426(L)  [S] \u6682\u505c(S)  [?] \u5e2e\u52a9 (\u9ed8\u8ba4\u503c\u4e3a\u201cN\u201d): Y\nPS C:\\Windows\\system32> Get-ExecutionPolicy\nRemoteSigned\nPS C:\\Windows\\system32> quasar -v\n@quasar/cli v2.3.0\n")),(0,o.kt)("p",null,"\u4fee\u6539\u7b56\u7565\u4ee5\u540e\uff0c\u89e3\u51b3\u4e86\uff0c\u53ef\u4ee5\u8fd0\u884c\u4e86\u3002"),(0,o.kt)("h2",{id:"\u8bbe\u7f6evscode"},"\u8bbe\u7f6eVSCode"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9690\u85cf\u9876\u90e8\u7684\u6587\u4ef6\u7684\u5217\u8868")),(0,o.kt)("p",null,'"\u6587\u4ef6"\uff08File\uff09\u9009\u9879 > "\u6587\u4ef6"\uff08File\uff09\u9009\u9879 > \u5355\u51fb "\u8bbe\u7f6e"\uff08Settings\uff09\u3002\u8fd9\u5c06\u6253\u5f00 VSCode \u7684\u8bbe\u7f6e\u9762\u677f\u3002'),(0,o.kt)("p",null,"\u8f93\u5165\u5e76\u641c\u7d22\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"workbench.editor.showTabs"),"\u53bb\u6389\u52fe\u9009\u72b6\u6001"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u591a\u9879\u76ee\u591a\u6d3b\u52a8\u7a97\u53e3")),(0,o.kt)("p",null,'"\u6587\u4ef6"\uff08File\uff09\u9009\u9879 > "\u6587\u4ef6"\uff08File\uff09\u9009\u9879 > \u5355\u51fb "\u8bbe\u7f6e"\uff08Settings\uff09\u3002\u8fd9\u5c06\u6253\u5f00 VSCode \u7684\u8bbe\u7f6e\u9762\u677f\u3002'),(0,o.kt)("p",null,"\u8f93\u5165\u5e76\u641c\u7d22\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"window.openFoldersInNewWindow"),"\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"on")),(0,o.kt)("h2",{id:"\u5b89\u88c5fxsound\u62a5\u9519\u60a8\u7684\u64ad\u653e\u8bbe\u5907\u8bbe\u7f6e\u6709\u95ee\u9898"},"\u5b89\u88c5FxSound\u62a5\u9519\u60a8\u7684\u64ad\u653e\u8bbe\u5907\u8bbe\u7f6e\u6709\u95ee\u9898"),(0,o.kt)("p",null,"\u4e00\u76f4\u5728\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u62a5\u9519\uff1a\u60a8\u7684\u64ad\u653e\u8bbe\u5907\u8bbe\u7f6e\u6709\u95ee\u9898"),(0,o.kt)("p",null,"\u5bf9\u5e94\u82f1\u6587\uff1aFxSound Oops! There\u2019s an issue with your playback device settings."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"windows10-fxsound-sound-setting-1.jpg",src:n(2557).Z,width:"1095",height:"603"})),(0,o.kt)("p",null,"\u6839\u636e\u63d0\u793a\u8df3\u8f6c\u5230\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.fxsound.com/learning-center/installation-troubleshooting"},"https://www.fxsound.com/learning-center/installation-troubleshooting")),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u6253\u5f00\u58f0\u97f3\u8bbe\u7f6e\uff0c\u53d1\u73b0\u6211\u7684\u53ea\u6709\u4e00\u4e2a\u201c\u8fdc\u7a0b\u97f3\u9891\u201d"),(0,o.kt)("h3",{id:"\u89e3\u51b3"},"\u89e3\u51b3"),(0,o.kt)("p",null,"\u4e0b\u8f7d\u4e86360\u9a71\u52a8\u5927\u5e08\u3001\u9a71\u52a8\u7cbe\u7075\u3001\u5355\u72ec\u4e0b\u8f7d\u4e86\u58f0\u5361\u9a71\u52a8\u7a0b\u5e8f\uff0c\u91cd\u65b0\u5b89\u88c5\u4e86\u9a71\u52a8\u7a0b\u5e8f\uff0c\u8fd8\u5b89\u88c5\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"visual c++ 2015-2022 \u8fd0\u884c\u5e93 x64")," \u90fd\u672a\u89e3\u51b3\u3002"),(0,o.kt)("p",null,"\u8fd8\u91cd\u65b0\u5b89\u88c5\u4e86FxSound\u4e2d\u6587v1.1.18.0\uff0c\u4e5f\u662f\u4e00\u6837\u4e0d\u884c\u3002"),(0,o.kt)("p",null,"FxSound 1.1.18 Multi-CN (2023/06/28)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://drive.fxsound.com/cs/R3CIo5NuEsJHh7m/downloads3.fxsound.com/fxsound/1.1.18.0/fxsound_setup.exe/download"},"https://drive.fxsound.com/cs/R3CIo5NuEsJHh7m/downloads3.fxsound.com/fxsound/1.1.18.0/fxsound_setup.exe/download")),(0,o.kt)("p",null,"Realtek HD\u58f0\u5361\u9a71\u52a8 V6.0.9235.1 \u5168\u529f\u80fd\u7248"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.xitongzhijia.net/soft/233444.html"},"https://www.xitongzhijia.net/soft/233444.html")),(0,o.kt)("p",null,"\u540e\u6765\u53d1\u73b0\u662f\u56e0\u4e3a\u6211\u662f\u8fdc\u7a0b\u684c\u9762\u8fde\u63a5\u7684\u6211\u7684\u7535\u8111\u5bfc\u81f4\u7684\u3002\u53ea\u987b\u5728\u8fde\u63a5\u65f6\u505a\u4e00\u4e0b\u8bbe\u7f6e\u5373\u53ef\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"windows10-fxsound-sound-setting-2.jpg",src:n(901).Z,width:"802",height:"458"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"windows10-fxsound-sound-setting-3.jpg",src:n(1080).Z,width:"474",height:"692"})),(0,o.kt)("h3",{id:"\u8fdc\u7a0b\u684c\u9762-\u7ba1\u7406\u58f0\u97f3\u8bbe\u5907-\u8fdc\u7a0b\u97f3\u9891"},"\u8fdc\u7a0b\u684c\u9762 \u7ba1\u7406\u58f0\u97f3\u8bbe\u5907 \u8fdc\u7a0b\u97f3\u9891"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/kangkang_01/article/details/124546551"},"Windows\u8fdc\u7a0b\u8fde\u63a5\u7535\u8111\u600e\u4e48\u914d\u7f6e\u8fdc\u7a0b\u97f3\u9891_win\u600e\u4e48\u8bbe\u7f6e\u58f0\u97f3\u4e3a\u8fdc\u7a0b\u97f3\u9891-CSDN\u535a\u5ba2")),(0,o.kt)("h3",{id:"\u5176\u4ed6\u53c2\u8003"},"\u5176\u4ed6\u53c2\u8003"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.fxsound.com/download"},"https://www.fxsound.com/download")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://forum.fxsound.com/t/oops-theres-an-issue-with-your-playback-device-settings-oops-error/553"},"Oops there's an issue with your playback device settings [OOPS ERROR] - Get Help - FxSound")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.52pojie.cn/thread-1491146-1-1.html"},"\u6c42\u52a9\uff01\u5b89\u88c5FxSound 2 pro \u7684\u65f6\u5019\u51fa\u73b0\u201cOops!Something went wrong.Please try runn... - \u300e\u60ac\u8d4f\u95ee\u7b54\u533a\u300f - \u543e\u7231\u7834\u89e3 - LCG - LSG |\u5b89\u5353\u7834\u89e3|\u75c5\u6bd2\u5206\u6790|www.52pojie.cn")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/481135461"},"\u8fd9\u6b3e\u8d85\u597d\u7528\u7684 Windows \u8f6f\u4ef6\u73b0\u5728\u53ef\u4ee5\u514d\u8d39\u4f7f\u7528\u4e86\uff1a\u5b8c\u5168\u514d\u8d39\u3001\u65e0\u5e7f\u544a\u3001\u65e0\u529f\u80fd\u9650\u5236 - \u77e5\u4e4e")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.bilibili.com/read/cv4721842/"},"\u3010\u6298\u817e\u3011\u5173\u4e8e\u65b0\u7248WIN10\u97f3\u9891\u8f93\u51fa\u8bbe\u5907\u7684\u5751 - \u54d4\u54e9\u54d4\u54e9")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://answers.microsoft.com/zh-hans/windows/forum/all/microsoft-visual-c-2015-2019-redistributable-x64/8c542878-af2a-4a50-b923-63f062ee4319"},"Microsoft Visual C++ 2015-2019 Redistributable (X64) - 14.27.29112 - Microsoft Community")),(0,o.kt)("h2",{id:"\u5b89\u88c5foobar2000"},"\u5b89\u88c5Foobar2000"),(0,o.kt)("p",null,"\u5173\u95ed\u65f6\u6700\u5c0f\u5316\u5230\u540e\u53f0\u64ad\u653e"),(0,o.kt)("p",null,"\u7ed9\u82f1\u6587\u7248\u7684\u7528\u6237\uff1a"),(0,o.kt)("p",null,"File->Perferences->Default User Interface->Backgroud and Notification\uff1a"),(0,o.kt)("p",null,"\u7b2c\u4e00\u4e2a\u662f\u5173\u95ed\u540e\u9000\u51fa \u7b2c\u4e8c\u4e2a\u662f\u6700\u5c0f\u5316\u4f1a\u5230\u540e\u53f0\uff0c\u5173\u95ed\u9000\u51fa\uff0c\u7b2c\u4e09\u4e2a\u5c31\u662f\u5173\u95ed\u6700\u5c0f\u5316\u5230\u540e\u53f0\u3002"))}c.isMDXComponent=!0},2557:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/windows10-fxsound-sound-setting-1-ba37ae28ec6a88a1df52e558025be66f.jpg"},901:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/windows10-fxsound-sound-setting-2-33446bfbeccfa5403da846320cdb7a21.jpg"},1080:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/windows10-fxsound-sound-setting-3-708eeb11c0769c91ad0f355fc90ab6b3.jpg"},742:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/wsl-git-autocrlf-1-50523b07118fad8ab4ff9bda25497ba0.jpg"},3600:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/wsl-git-autocrlf-2-2f978d0597d74b12d9bd653dbb4b6386.jpg"}}]);