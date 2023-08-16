"use strict";(self.webpackChunkicmsite_docusaurus=self.webpackChunkicmsite_docusaurus||[]).push([[877],{3905:(o,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>u});var n=t(7294);function r(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function i(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.push.apply(t,n)}return t}function a(o){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(o,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(t,e))}))}return o}function l(o,e){if(null==o)return{};var t,n,r=function(o,e){if(null==o)return{};var t,n,r={},i=Object.keys(o);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=o[t]);return r}(o,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(o);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(o,t)&&(r[t]=o[t])}return r}var s=n.createContext({}),p=function(o){var e=n.useContext(s),t=e;return o&&(t="function"==typeof o?o(e):a(a({},e),o)),t},c=function(o){var e=p(o.components);return n.createElement(s.Provider,{value:e},o.children)},d="mdxType",g={inlineCode:"code",wrapper:function(o){var e=o.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(o,e){var t=o.components,r=o.mdxType,i=o.originalType,s=o.parentName,c=l(o,["components","mdxType","originalType","parentName"]),d=p(t),m=r,u=d["".concat(s,".").concat(m)]||d[m]||g[m]||i;return t?n.createElement(u,a(a({ref:e},c),{},{components:t})):n.createElement(u,a({ref:e},c))}));function u(o,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof o||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=o,l[d]="string"==typeof o?o:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1259:(o,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const i={},a="Goland PHPStorm",l={unversionedId:"tools/goland-phpstorm",id:"tools/goland-phpstorm",title:"Goland PHPStorm",description:"\u7ecf\u5e38\u7d22\u5f15\u6162",source:"@site/docs/tools/goland-phpstorm.md",sourceDirName:"tools",slug:"/tools/goland-phpstorm",permalink:"/docs/tools/goland-phpstorm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools/goland-phpstorm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/docs/tools/git"},next:{title:"MobaXterm",permalink:"/docs/tools/mobaXterm"}},s={},p=[{value:"\u7ecf\u5e38\u7d22\u5f15\u6162",id:"\u7ecf\u5e38\u7d22\u5f15\u6162",level:2},{value:"PHPStorm\u8bed\u6cd5\u68c0\u67e5 \u5173\u95ed",id:"phpstorm\u8bed\u6cd5\u68c0\u67e5-\u5173\u95ed",level:2},{value:"Goland Terminal\u4e2d\u7684Go Version\u662f\u600e\u4e48\u53d8\u4e3aGo1.19\u7684",id:"goland-terminal\u4e2d\u7684go-version\u662f\u600e\u4e48\u53d8\u4e3ago119\u7684",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:3},{value:"Go\u591a\u7248\u672c\u5f15\u8d77\u7684\u51b2\u7a81\u95ee\u9898",id:"go\u591a\u7248\u672c\u5f15\u8d77\u7684\u51b2\u7a81\u95ee\u9898",level:2},{value:"synchronizing files slow",id:"synchronizing-files-slow",level:2}],c={toc:p},d="wrapper";function g(o){let{components:e,...i}=o;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"goland-phpstorm"},"Goland PHPStorm"),(0,r.kt)("h2",{id:"\u7ecf\u5e38\u7d22\u5f15\u6162"},"\u7ecf\u5e38\u7d22\u5f15\u6162"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"goland-external-file-changes-sync-may-be-slow.jpg",src:t(5190).Z,width:"470",height:"221"})),(0,r.kt)("h2",{id:"phpstorm\u8bed\u6cd5\u68c0\u67e5-\u5173\u95ed"},"PHPStorm\u8bed\u6cd5\u68c0\u67e5 \u5173\u95ed"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"phpstorm-close-phpstan-1.jpg",src:t(1122).Z,width:"526",height:"391"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"phpstorm-close-phpstan-2.jpg",src:t(6431).Z,width:"756",height:"677"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"phpstorm-close-phpstan-3.jpg",src:t(773).Z,width:"756",height:"677"})),(0,r.kt)("h2",{id:"goland-terminal\u4e2d\u7684go-version\u662f\u600e\u4e48\u53d8\u4e3ago119\u7684"},"Goland Terminal\u4e2d\u7684Go Version\u662f\u600e\u4e48\u53d8\u4e3aGo1.19\u7684"),(0,r.kt)("p",null,"WSL Ubuntu\u7cfb\u7edf\u4e2d\u5b89\u88c5\u4e86\u4e24\u4e2aGo\u7248\u672c\uff0cGo1.18\u548cGo1.19\u4e24\u4e2a\u7248\u672c\uff0c\u4f46\u662fGoland Terminal\u662f\u600e\u4e48\u9ed8\u8ba4\u4e3aGo1.19\u7684\uff1f"),(0,r.kt)("p",null,"\u5728\u4f7f\u7528Go1.19\u7248\u672c\u5f00\u53d1\u7684\u7cfb\u7edf\u4e2d\uff0c\u4e24\u6b21\u9047\u5230\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'compile: version "go1.18" does not match go tool version "go1.19"\n')),(0,r.kt)("p",null,"\u7b2c\u4e00\u6b21\u8bb0\u5f97\u662f\u6e05\u9664\u4e86Goland\u7f13\u5b58\u91cd\u65b0\u542f\u52a8\u89e3\u51b3\u7684\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u6b21\u662f\u5728Goland Terminal\u4e2d\u8bbe\u7f6e\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"$GOROOT"),"\u73af\u5883\u53d8\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"/root/sdk/go1.19"),"\u89e3\u51b3\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'compile: version "go1.18" does not match go tool version "go1.19"\n\n$ echo $GOROOT\n$ /root/sdk/go1.18\n$ export GOROOT=/root/sdk/go1.19\n$ echo $GOROOT\n$ /root/sdk/go1.19\n')),(0,r.kt)("h3",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go  \u591a\u4e2a\u7248\u672c compile: version  does not match go tool version")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/fa04bcbffcc1"},"go\u7248\u672c\u5339\u914d\u9519\u8bef\u89e3\u51b3 - \u7b80\u4e66")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_41621706/article/details/115898144"},"go 1.15.2\u5347\u7ea7\u5230 go 1.16.3\u9047\u5230\u7684\u95ee\u9898: version \u201cgo1.16.3\u201c does not match go tool version \u201cgo1.15.2\u201c_bkzy\u7684\u535a\u5ba2-CSDN\u535a\u5ba2")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/nxb593427560/article/details/82972601"},"go\u7248\u672c\u5339\u914d\u9519\u8bef\u89e3\u51b3_go tool version_nicoxix\u7684\u535a\u5ba2-CSDN\u535a\u5ba2"))),(0,r.kt)("h2",{id:"go\u591a\u7248\u672c\u5f15\u8d77\u7684\u51b2\u7a81\u95ee\u9898"},"Go\u591a\u7248\u672c\u5f15\u8d77\u7684\u51b2\u7a81\u95ee\u9898"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'root@DESKTOP-TCU7QHA:/srv/app-iot-3# go get github.com/casbin/casbin-pg-adapter\ngo: downloading github.com/casbin/casbin-pg-adapter v1.2.1\ngo: github.com/casbin/casbin-pg-adapter@v1.2.1: verifying module: github.com/casbin/casbin-pg-adapter@v1.2.1: Get "https://proxy.golang.com.cn/sumdb/sum.golang.org/lookup/github.com/\ncasbin/casbin-pg-adapter@v1.2.1": read tcp 192.168.50.2:54970->60.188.67.206:443: read: connection reset by peer\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ping proxy.golang.com.cn"),"\u4e5f\u662f\u901a\u7684\uff0c\u53ef\u80fd\u662f\u4ee3\u7406\u7684\u95ee\u9898\uff0c\u4fee\u6539\u4e86\u4e00\u4e2a\u963f\u91cc\u4e91\u4ee3\u7406\uff0c\u53ef\u4ee5\u5b89\u88c5\u4e86\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/\nexport GOPROXY=https://mirrors.aliyun.com/goproxy/\n\ngo env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct\n\ngo env -w GOPROXY=https://mirrors.aliyun.com/goproxy/,direct\nwarning: go env -w GOPROXY=... does not override conflicting OS environment variable\n\nroot@DESKTOP-TCU7QHA:/srv/app-iot-3#GO111MODULE=on go get -u github.com/casbin/casbin-pg-adapter\ngo: downloading github.com/casbin/casbin-pg-adapter v1.2.1\ngo: downloading github.com/go-pg/pg/v10 v10.9.1\ngo: downloading github.com/mmcloughlin/meow v0.0.0-20181112033425-871e50784daf\ngo: downloading mellium.im/sasl v0.2.1\ngo: downloading github.com/go-pg/zerochecker v0.2.0\ngo: downloading github.com/jinzhu/inflection v1.0.0\ngo: downloading github.com/vmihailenco/msgpack/v5 v5.3.0\ngo: downloading github.com/vmihailenco/tagparser v0.1.2\ngo: downloading github.com/tmthrgd/go-hex v0.0.0-20190904060850-447a3041c3bc\ngo: downloading github.com/vmihailenco/bufpool v0.1.11\ngo: downloading github.com/vmihailenco/tagparser/v2 v2.0.0\ngo: added github.com/casbin/casbin-pg-adapter v1.2.1\ngo: added github.com/go-pg/pg/v10 v10.9.1\ngo: added github.com/go-pg/zerochecker v0.2.0\ngo: added github.com/jinzhu/inflection v1.0.0\ngo: added github.com/mmcloughlin/meow v0.0.0-20181112033425-871e50784daf\ngo: added github.com/tmthrgd/go-hex v0.0.0-20190904060850-447a3041c3bc\ngo: added github.com/vmihailenco/bufpool v0.1.11\ngo: added github.com/vmihailenco/msgpack/v5 v5.3.0\ngo: added github.com/vmihailenco/tagparser v0.1.2\ngo: added github.com/vmihailenco/tagparser/v2 v2.0.0\ngo: added mellium.im/sasl v0.2.1\n")),(0,r.kt)("p",null,"\u53c8\u6709\u95ee\u9898"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"github.com/Masterminds/squirrel@v1.5.4: is explicitly required in go.mod, but not marked as explicit in vendor/modules.txt\ngithub.com/alibabacloud-go/darabonba-openapi/v2@v2.0.4: is explicitly required in go.mod, but not marked as explicit in vendor/modules.txt\ngithub.com/alibabacloud-go/iot-20180120/v4@v4.1.3: is explicitly required in go.mod, but not marked as explicit in vendor/modules.txt\ngithub.com/alibabacloud-go/tea@v1.2.0: is explicitly required in go.mod, but not marked as explicit in vendor/modules.txt\n")),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,r.kt)("p",null,"\u786e\u8ba4\u4f9d\u8d56\u9879\u7684\u4e00\u81f4\u6027\uff1a\u8fd0\u884c go mod tidy \u547d\u4ee4\uff0c\u5b83\u4f1a\u81ea\u52a8\u8c03\u6574 go.mod \u6587\u4ef6\u4e2d\u7684\u4f9d\u8d56\u9879\u4ee5\u5339\u914d\u5b9e\u9645\u4f7f\u7528\u7684\u4f9d\u8d56\u9879\u7248\u672c\uff0c\u5e76\u66f4\u65b0 vendor/modules.txt \u6587\u4ef6\u3002\u8fd9\u53ef\u4ee5\u786e\u4fdd\u4e24\u4e2a\u6587\u4ef6\u4e4b\u95f4\u7684\u4e00\u81f4\u6027\u3002"),(0,r.kt)("p",null,"\u6e05\u7406 vendor \u76ee\u5f55\uff1a\u5982\u679c\u95ee\u9898\u4ecd\u7136\u5b58\u5728\uff0c\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u6e05\u7406 vendor \u76ee\u5f55\u5e76\u91cd\u65b0\u751f\u6210\u5b83\u3002\u60a8\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go mod vendor\n")),(0,r.kt)("p",null,"\u5220\u9664 vendor \u76ee\u5f55\u548c modules.txt \u6587\u4ef6\uff1a\u60a8\u53ef\u4ee5\u624b\u52a8\u5220\u9664 vendor \u76ee\u5f55\u548c vendor/modules.txt \u6587\u4ef6\uff0c\u5e76\u91cd\u65b0\u8fd0\u884c go mod vendor \u547d\u4ee4\u91cd\u65b0\u751f\u6210\u5b83\u4eec\u3002"),(0,r.kt)("p",null,"\u66f4\u65b0 Go \u7248\u672c\uff1a\u786e\u4fdd\u60a8\u4f7f\u7528\u7684\u662f\u6700\u65b0\u7248\u672c\u7684 Go\uff0c\u4ee5\u907f\u514d\u4e0e Go Modules \u76f8\u5173\u7684\u5df2\u77e5\u95ee\u9898\u3002"),(0,r.kt)("h2",{id:"synchronizing-files-slow"},"synchronizing files slow"),(0,r.kt)("p",null,"synchronizing files slow"),(0,r.kt)("p",null,"windows WSL\u4e0b\u7684 goland synchronizing files \u975e\u5e38\u6162"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://intellij-support.jetbrains.com/hc/en-us/community/posts/360003425160-synchronizing-files-takes-days-and-doesn-t-stop"},"synchronizing files takes days and doesn't stop \u2013 IDEs Support (IntelliJ Platform) | JetBrains")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://blog.51cto.com/u_14301180/5364561"},"windows\u4e0b\u7684 goland synchronizing files \u975e\u5e38\u6162_qq5cbd62bd202f1\u7684\u6280\u672f\u535a\u5ba2_51CTO\u535a\u5ba2")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/sxdcgaq8080/p/12607912.html"},"\u3010IDEA\u3011idea\u4e00\u76f4\u4e0d\u505c\u7684scanning files to index \u89e3\u51b3\u65b9\u6cd5 - Angel\u6324\u4e00\u6324 - \u535a\u5ba2\u56ed"))))}g.isMDXComponent=!0},5190:(o,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/goland-external-file-changes-sync-may-be-slow-4dd236d92b27e873996ad5d6a8e1db3c.jpg"},1122:(o,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/phpstorm-close-phpstan-1-778e0ecf9fb9581fda38c3dd64abb790.jpg"},6431:(o,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/phpstorm-close-phpstan-2-89ffe0f2f98566287f6a863f3417e90c.jpg"},773:(o,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/phpstorm-close-phpstan-3-8b5c0b85f613c10459ffce26f733cf87.jpg"}}]);