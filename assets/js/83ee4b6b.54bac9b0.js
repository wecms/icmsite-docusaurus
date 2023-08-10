"use strict";(self.webpackChunkicmsite_docusaurus=self.webpackChunkicmsite_docusaurus||[]).push([[8592],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),g=c(n),d=a,m=g["".concat(l,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(m,s(s({ref:e},p),{},{components:n})):r.createElement(m,s({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[g]="string"==typeof t?t:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1002:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},s="Golang \u7684 \u201comitempty\u201d \u5173\u952e\u5b57\u7565\u89e3",i={unversionedId:"coding/golang/golang-omitempty-tag",id:"coding/golang/golang-omitempty-tag",title:"Golang \u7684 \u201comitempty\u201d \u5173\u952e\u5b57\u7565\u89e3",description:"\u539f\u6587\u8f7d\u4e8e https://old-panda.com/2019/12/11/golang-omitempty/",source:"@site/docs/coding/golang/golang-omitempty-tag.md",sourceDirName:"coding/golang",slug:"/coding/golang/golang-omitempty-tag",permalink:"/docs/coding/golang/golang-omitempty-tag",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/coding/golang/golang-omitempty-tag.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Coding - Langs",permalink:"/docs/coding/"},next:{title:"JavaScript",permalink:"/docs/coding/javascript/"}},l={},c=[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:2},{value:"\u9677\u9631",id:"\u9677\u9631",level:2}],p={toc:c},g="wrapper";function u(t){let{components:e,...n}=t;return(0,a.kt)(g,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"golang-\u7684-omitempty-\u5173\u952e\u5b57\u7565\u89e3"},"Golang \u7684 \u201comitempty\u201d \u5173\u952e\u5b57\u7565\u89e3"),(0,a.kt)("p",null,"\u539f\u6587\u8f7d\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://old-panda.com/2019/12/11/golang-omitempty/"},"https://old-panda.com/2019/12/11/golang-omitempty/")),(0,a.kt)("h2",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,a.kt)("p",null,"\u719f\u6089 Golang \u7684\u670b\u53cb\u5bf9\u4e8e json \u548c struct \u4e4b\u95f4\u7684\u8f6c\u6362\u4e00\u5b9a\u4e0d\u964c\u751f\uff0c\u4e3a\u4e86\u5c06\u4ee3\u7801\u4e2d\u7684\u7ed3\u6784\u4f53\u4e0e json \u6570\u636e\u89e3\u8026\uff0c\u901a\u5e38\u6211\u4eec\u4f1a\u5728\u7ed3\u6784\u4f53\u7684 field \u7c7b\u578b\u540e\u52a0\u4e0a\u89e3\u91ca\u8bf4\u660e\uff0c\u4f8b\u5982\u5728\u8868\u793a\u4e00\u4e2a\u5730\u5740\u7684\u65f6\u5019\uff0c json \u6570\u636e\u5982\u4e0b\u6240\u793a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "street": "200 Larkin St",\n    "city": "San Francisco",\n    "state": "CA",\n    "zipcode": "94102"\n}\n')),(0,a.kt)("p",null,"\u4e0e\u4e4b\u76f8\u5bf9\u5e94\u7684 Golang \u7ed3\u6784\u4f53\u8868\u793a\u53ef\u80fd\u662f\u8fd9\u4e2a\u6837\u5b50\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type address struct {\n    Street  string `json:"street"`  // \u8857\u9053\n    Ste     string `json:"suite"`   // \u5355\u5143\uff08\u53ef\u4ee5\u4e0d\u5b58\u5728\uff09\n    City    string `json:"city"`    // \u57ce\u5e02\n    State   string `json:"state"`   // \u5dde/\u7701\n    Zipcode string `json:"zipcode"` // \u90ae\u7f16\n}\n')),(0,a.kt)("p",null,"\u8fd9\u6837\u65e0\u8bba\u4ee3\u7801\u4e2d\u7684\u53d8\u91cf\u5982\u4f55\u6539\u53d8\uff0c\u6211\u4eec\u90fd\u80fd\u6210\u529f\u5c06 json \u6570\u636e\u89e3\u6790\u51fa\u6765\uff0c\u83b7\u5f97\u6b63\u786e\u7684\u8857\u9053\uff0c\u57ce\u5e02\u7b49\u4fe1\u606f\uff0c\u5230\u76ee\u524d\u4e3a\u6b62\u4e00\u5207\u6b63\u5e38\u3002\u4f46\u5982\u679c\u6211\u4eec\u60f3\u8981\u5c06\u5730\u5740\u7ed3\u6784\u4f53\u6062\u590d\u6210 json \u683c\u5f0f\u65f6\uff0c\u95ee\u9898\u5c31\u6765\u4e86\u3002\u6bd4\u65b9\u8bf4\u6211\u4eec\u7528\u4e0b\u9762\u8fd9\u6bb5\u4ee3\u7801\u8bfb\u53d6\u4e86\u5730\u5740 json \uff0c\u7136\u540e\u6839\u636e\u4e1a\u52a1\u903b\u8f91\u5904\u7406\u4e86\u4e4b\u540e\u6062\u590d\u6210\u6b63\u5e38\u7684 json \u6253\u5370\u51fa\u6765"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n        data := `{\n        "street": "200 Larkin St",\n        "city": "San Francisco",\n        "state": "CA",\n        "zipcode": "94102"\n    }`\n    addr := new(address)\n    json.Unmarshal([]byte(data), &addr)\n\n        // \u5904\u7406\u4e86\u4e00\u756a addr \u53d8\u91cf...\n\n    addressBytes, _ := json.MarshalIndent(addr, "", "    ")\n    fmt.Printf("%s\\n", string(addressBytes))\n}\n')),(0,a.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u7684\u8f93\u51fa\u662f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "street": "200 Larkin St",\n    "suite": "",\n    "city": "San Francisco",\n    "state": "CA",\n    "zipcode": "94102"\n}\n')),(0,a.kt)("p",null,'\u591a\u4e86\u4e00\u884c "suite": "", \uff0c\u800c\u8fd9\u5219\u4fe1\u606f\u5728\u539f\u672c\u7684 json \u6570\u636e\u4e2d\u662f\u6ca1\u6709\u7684\uff08\u5728\u7f8e\u56fd\u7684\u5730\u5740\u4e2d\uff0c\u5982\u679c\u4e0d\u662f\u7fa4\u79df\u516c\u5bd3\u6216\u8005\u5171\u4eab\u529e\u516c\u697c\uff0c suite \u8fd9\u4e00\u6761\u4e0d\u5b58\u5728\u5f88\u6b63\u5e38\uff0c\u4eba\u4eec\u76f4\u63a5\u7528\u8857\u9053\u95e8\u724c\u53f7\u6765\u8868\u793a\u5730\u5740\u5c31\u8db3\u591f\u4e86\uff09\uff0c\u4f46\u6211\u4eec\u66f4\u5e0c\u671b\u7684\u662f\uff0c\u5728\u4e00\u4e2a\u5730\u5740\u6709 suite \u53f7\u7801\u7684\u65f6\u5019\u8f93\u51fa\uff0c\u4e0d\u5b58\u5728 suite \u7684\u65f6\u5019\u5c31\u4e0d\u8f93\u51fa\uff0c\u5e78\u8fd0\u7684\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 Golang \u7684\u7ed3\u6784\u4f53\u5b9a\u4e49\u4e2d\u6dfb\u52a0 omitempty \u5173\u952e\u5b57\uff0c\u6765\u8868\u793a\u8fd9\u6761\u4fe1\u606f\u5982\u679c\u6ca1\u6709\u63d0\u4f9b\uff0c\u5728\u5e8f\u5217\u5316\u6210 json \u7684\u65f6\u5019\u5c31\u4e0d\u8981\u5305\u542b\u5176\u9ed8\u8ba4\u503c\u3002\u7a0d\u4f5c\u4fee\u6539\uff0c\u5730\u5740\u7ed3\u6784\u4f53\u5c31\u53d8\u6210\u4e86'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type address struct {\n    Street  string `json:"street"`\n    Ste     string `json:"suite,omitempty"`\n    City    string `json:"city"`\n    State   string `json:"state"`\n    Zipcode string `json:"zipcode"`\n}\n')),(0,a.kt)("p",null,"\u91cd\u65b0\u8fd0\u884c\uff0c\u5373\u53ef\u5f97\u5230\u6b63\u786e\u7684\u7ed3\u679c\u3002"),(0,a.kt)("h2",{id:"\u9677\u9631"},"\u9677\u9631"),(0,a.kt)("p",null,"\u5e26\u6765\u65b9\u4fbf\u7684\u540c\u65f6\uff0c\u4f7f\u7528 omitempty \u4e5f\u6709\u4e9b\u5c0f\u9677\u9631\uff0c\u4e00\u4e2a\u662f\u8be5\u5173\u952e\u5b57\u65e0\u6cd5\u5ffd\u7565\u6389\u5d4c\u5957\u7ed3\u6784\u4f53\u3002\u8fd8\u662f\u62ff\u5730\u5740\u7c7b\u578b\u8bf4\u4e8b\uff0c\u8fd9\u56de\u6211\u4eec\u60f3\u8981\u5f80\u5730\u5740\u7ed3\u6784\u4f53\u4e2d\u52a0\u4e00\u4e2a\u65b0 field \u6765\u8868\u793a\u7ecf\u7eac\u5ea6\uff0c\u5982\u679c\u6ca1\u6709\u7f3a\u4e4f\u76f8\u5173\u7684\u6570\u636e\uff0c\u6682\u65f6\u53ef\u4ee5\u5ffd\u7565\u3002\u65b0\u7684 struct \u5b9a\u4e49\u5982\u4e0b\u6240\u793a"),(0,a.kt)("p",null,"..."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/a2ed0d23d1b0"},"Golang \u7684 \u201comitempty\u201d \u5173\u952e\u5b57\u7565\u89e3 - \u7b80\u4e66")))}u.isMDXComponent=!0}}]);