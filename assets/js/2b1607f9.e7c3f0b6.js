"use strict";(self.webpackChunkicmsite_docusaurus=self.webpackChunkicmsite_docusaurus||[]).push([[502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),i=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=i(r),m=n,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(g,l(l({ref:t},u),{},{components:r})):a.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6886:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=r(7462),n=(r(7294),r(3905));const o={},l="PostgreSQL",p={unversionedId:"database/PostgreSQL",id:"database/PostgreSQL",title:"PostgreSQL",description:"\u6a21\u5f0f",source:"@site/docs/database/PostgreSQL.md",sourceDirName:"database",slug:"/database/PostgreSQL",permalink:"/docs/database/PostgreSQL",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/database/PostgreSQL.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MySQL MariaDB",permalink:"/docs/database/MySQL-MariaDB"},next:{title:"Iot",permalink:"/docs/iot/"}},s={},i=[{value:"\u6a21\u5f0f",id:"\u6a21\u5f0f",level:2},{value:"\u4ec0\u4e48\u662f\u6a21\u5f0f",id:"\u4ec0\u4e48\u662f\u6a21\u5f0f",level:3},{value:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u6a21\u5f0f",id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u6a21\u5f0f",level:3},{value:"ERROR:  syntax error at or near &quot;group&quot;",id:"error--syntax-error-at-or-near-group",level:2},{value:"postgresql \u5b57\u6bb5\u4e0d\u652f\u6301\u79fb\u52a8\u4f4d\u7f6e\u5417",id:"postgresql-\u5b57\u6bb5\u4e0d\u652f\u6301\u79fb\u52a8\u4f4d\u7f6e\u5417",level:2}],u={toc:i},c="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"postgresql"},"PostgreSQL"),(0,n.kt)("h2",{id:"\u6a21\u5f0f"},"\u6a21\u5f0f"),(0,n.kt)("h3",{id:"\u4ec0\u4e48\u662f\u6a21\u5f0f"},"\u4ec0\u4e48\u662f\u6a21\u5f0f"),(0,n.kt)("p",null,"\u6a21\u5f0f\u7c7b\u4f3c\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u5c42\u6b21\u7684\u76ee\u5f55\uff0c\u53ea\u4e0d\u8fc7\u6a21\u5f0f\u4e0d\u80fd\u5d4c\u5957\u3002"),(0,n.kt)("p",null,"\u4e00\u4e2a\u6570\u636e\u5e93\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a\u5df2\u547d\u540d\u7684\u6a21\u5f0f\uff0c\u6a21\u5f0f\u53c8\u5305\u542b\u8868\u3002\u6a21\u5f0f\u8fd8\u53ef\u4ee5\u5305\u542b\u5176\u5b83\u5bf9\u8c61\uff0c\u5305\u62ec\u6570\u636e\u7c7b\u578b\u3001\u51fd\u6570\u3001\u64cd\u4f5c\u7b26\u7b49\u3002\u540c\u4e00\u4e2a\u5bf9\u8c61\u540d\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u6a21\u5f0f\u91cc\u4f7f\u7528\u800c\u4e0d\u4f1a\u5bfc\u81f4\u51b2\u7a81\uff1b\u6bd4\u5982\uff0cschema1\u548cmyschema\u90fd\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a\u540d\u4e3amytable\u7684\u8868\u3002\u548c\u6570\u636e\u5e93\u4e0d\u540c\uff0c\u6a21\u5f0f\u4e0d\u662f\u4e25\u683c\u5206\u79bb\u7684\uff1a\u53ea\u8981\u6709\u6743\u9650\uff0c\u4e00\u4e2a\u7528\u6237\u53ef\u4ee5\u8bbf\u95ee\u4ed6\u6240\u8fde\u63a5\u7684\u6570\u636e\u5e93\u4e2d\u7684\u4efb\u610f\u6a21\u5f0f\u4e2d\u7684\u5bf9\u8c61\u3002"),(0,n.kt)("p",null,"\u5728PostgreSQL\u4e2d\uff0c\u6a21\u5f0f\u4e5f\u79f0\u4e3a\u547d\u540d\u7a7a\u95f4\u3002\u5b83\u7528\u4e8e\u8bc6\u522b\u548c\u533a\u5206\u6570\u636e\u5e93\u4e2d\u7684\u67d0\u4e9b\u5bf9\u8c61\uff08\u8868\u3001\u89c6\u56fe\u3001\u5217\u7b49\uff09\u3002\u5b83\u4e0d\u5141\u8bb8\u5728\u4e00\u4e2a\u6a21\u5f0f\u4e2d\u521b\u5efa\u4e24\u4e2a\u540c\u540d\u7684\u8868\uff0c\u4f46\u53ef\u4ee5\u5728\u4e24\u4e2a\u4e0d\u540c\u7684\u6a21\u5f0f\u4e2d\u521b\u5efa\u540c\u540d\u7684\u8868\u3002"),(0,n.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u6a21\u5f0f"},"\u4e3a\u4ec0\u4e48\u8981\u4f7f\u7528\u6a21\u5f0f"),(0,n.kt)("p",null,"\u6a21\u5f0f\u5b58\u5728\u7684\u76ee\u7684\u662f\u5c06\u6570\u636e\u5e93\u5bf9\u8c61\u7ec4\u7ec7\u6210\u4e00\u4e2a\u4e2a\u7684\u903b\u8f91\u7ec4\uff0c\u5e76\u907f\u514d\u540d\u79f0\u4e4b\u95f4\u7684\u51b2\u7a81\u3002\u9664\u6b64\u4e4b\u5916\uff0c\u6a21\u5f0f\u901a\u5e38\u7528\u4e8e\u5141\u8bb8\u4e0d\u540c\u7684\u7528\u6237\u5728\u4e0d\u76f8\u4e92\u5e72\u6270\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u540c\u4e00\u4e2a\u6570\u636e\u5e93\u3002\u4e00\u4e2a\u5e38\u89c1\u7684\u4f8b\u5b50\u662f\uff0c\u5f53\u6bcf\u4e2a\u6570\u636e\u5e93\u7528\u6237\u90fd\u4f7f\u7528\u81ea\u5df1\u7684\u67b6\u6784\u65f6\uff0c\u4e0d\u4f1a\u5e72\u6270\u5176\u4ed6\u7528\u6237\u5e76\u907f\u514d\u51b2\u7a81\u3002 \u7b80\u5355\u6765\u8bf4\u5c31\u662f\u628a\u4e00\u4e2a\u6570\u636e\u5e93\u903b\u8f91\u4e0a\u5206\u5272\u6210\u4e0d\u540c\u7684\u533a\u57df\u3002"),(0,n.kt)("h2",{id:"error--syntax-error-at-or-near-group"},'ERROR:  syntax error at or near "group"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'SELECT id,app_id,app_key,name,`group`,type,path,method,created_at,updated_at,deleted_at FROM\n "public"."auth_permission" ORDER BY created_at DESC LIMIT 20 OFFSET 0\n> ERROR:  syntax error at or near "group"\nLINE 1: SELECT id,app_id,app_key,name,`group`,type,path,method,creat...\n')),(0,n.kt)("p",null,'\u8fd9\u4e2a\u9519\u8bef\u901a\u5e38\u662f\u56e0\u4e3a\u5728SELECT\u8bed\u53e5\u4e2d\u4f7f\u7528\u4e86\u4fdd\u7559\u5173\u952e\u5b57"group"\u4f5c\u4e3a\u5217\u540d\u6216\u8868\u540d\uff0c\u800cPostgreSQL\u5c06\u5176\u89e3\u91ca\u4e3aGROUP BY\u5b50\u53e5\uff0c\u4ece\u800c\u5bfc\u81f4\u8bed\u6cd5\u9519\u8bef\u3002'),(0,n.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u4ee5\u4e0b\u51e0\u79cd\u65b9\u6cd5\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'\u91cd\u547d\u540d\u4f7f\u7528\u4e86\u4fdd\u7559\u5173\u952e\u5b57"group"\u7684\u5217\u540d\u6216\u8868\u540d\u3002'),(0,n.kt)("li",{parentName:"ol"},'\u5728\u4f7f\u7528\u4fdd\u7559\u5173\u952e\u5b57"group"\u7684\u5217\u540d\u6216\u8868\u540d\u65f6\uff0c\u7528\u53cc\u5f15\u53f7\u5c06\u5176\u62ec\u8d77\u6765\uff0c\u4ee5\u660e\u786e\u544a\u8bc9PostgreSQL\u8fd9\u662f\u4e00\u4e2a\u5217\u540d\u6216\u8868\u540d\u800c\u4e0d\u662fGROUP BY\u5b50\u53e5\u3002\u4f8b\u5982\uff1a',(0,n.kt)("inlineCode",{parentName:"li"},'SELECT "group" FROM mytable;')),(0,n.kt)("li",{parentName:"ol"},'\u5982\u679c\u4f60\u4f7f\u7528\u4e86GROUP BY\u5b50\u53e5\uff0c\u5e76\u4e14\u60f3\u8981\u5728SELECT\u5217\u8868\u4e2d\u5305\u542b\u4e00\u4e2a\u540d\u4e3a"group"\u7684\u5217\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u4f7f\u7528\u522b\u540d\u6765\u91cd\u547d\u540d\u8be5\u5217\u3002\u4f8b\u5982\uff1a',(0,n.kt)("inlineCode",{parentName:"li"},"SELECT mycolumn AS mygroup FROM mytable GROUP BY mycolumn;"))),(0,n.kt)("h2",{id:"postgresql-\u5b57\u6bb5\u4e0d\u652f\u6301\u79fb\u52a8\u4f4d\u7f6e\u5417"},"postgresql \u5b57\u6bb5\u4e0d\u652f\u6301\u79fb\u52a8\u4f4d\u7f6e\u5417"),(0,n.kt)("p",null,"\u662f\u7684\uff0c\u6211\u662f\u5148\u6dfb\u52a0\u4e00\u4e2a\u5b57\u6bb5\u518d\u8f6c\u51fasql\u7ed3\u6784\uff0c\u624b\u52a8\u79fb\u52a8sql\u7ed3\u6784\u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\u63d2\u5165\u4f4d\u7f6e\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://segmentfault.com/q/1010000013554602"},"postgresql \u5982\u4f55\u6539\u53d8\u8868\u7684\u5b57\u6bb5\u987a\u5e8f? - SegmentFault \u601d\u5426")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://qastack.cn/programming/285733/how-do-i-alter-the-position-of-a-column-in-a-postgresql-database-table"},"\u5982\u4f55\u66f4\u6539PostgreSQL\u6570\u636e\u5e93\u8868\u4e2d\u5217\u7684\u4f4d\u7f6e\uff1f"))))}d.isMDXComponent=!0}}]);