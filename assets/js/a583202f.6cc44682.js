"use strict";(self.webpackChunkicmsite_docusaurus=self.webpackChunkicmsite_docusaurus||[]).push([[5861],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(a),p=r,v=s["".concat(o,".").concat(p)]||s[p]||_[p]||i;return a?n.createElement(v,d(d({ref:t},u),{},{components:a})):n.createElement(v,d({ref:t},u))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,d=new Array(i);d[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[s]="string"==typeof e?e:r,d[1]=l;for(var c=2;c<i;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>_,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={},d="MySQL MariaDB",l={unversionedId:"database/MySQL-MariaDB",id:"database/MySQL-MariaDB",title:"MySQL MariaDB",description:"\u600e\u4e48\u5efa\u7acb\u7d22\u5f15",source:"@site/docs/database/MySQL-MariaDB.md",sourceDirName:"database",slug:"/database/MySQL-MariaDB",permalink:"/docs/database/MySQL-MariaDB",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/database/MySQL-MariaDB.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/docs/database/"},next:{title:"PostgreSQL",permalink:"/docs/database/PostgreSQL"}},o={},c=[{value:"\u600e\u4e48\u5efa\u7acb\u7d22\u5f15",id:"\u600e\u4e48\u5efa\u7acb\u7d22\u5f15",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:3},{value:"MySQL \u5b50\u67e5\u8be2(IN)",id:"mysql-\u5b50\u67e5\u8be2in",level:2},{value:"\u67e5\u8be2LOG",id:"\u67e5\u8be2log",level:2}],u={toc:c},s="wrapper";function _(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql-mariadb"},"MySQL MariaDB"),(0,r.kt)("h2",{id:"\u600e\u4e48\u5efa\u7acb\u7d22\u5f15"},"\u600e\u4e48\u5efa\u7acb\u7d22\u5f15"),(0,r.kt)("p",null,"Normal \u666e\u901a\u7d22\u5f15"),(0,r.kt)("p",null,"\u8868\u793a\u666e\u901a\u7d22\u5f15\uff0c\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u90fd\u53ef\u4ee5\u4f7f\u7528"),(0,r.kt)("p",null,"Unique \u552f\u4e00\u7d22\u5f15"),(0,r.kt)("p",null,"\u8868\u793a\u552f\u4e00\u7684\uff0c\u4e0d\u5141\u8bb8\u91cd\u590d\u7684\u7d22\u5f15\uff0c\u5982\u679c\u8be5\u5b57\u6bb5\u4fe1\u606f\u4fdd\u8bc1\u4e0d\u4f1a\u91cd\u590d\u4f8b\u5982\u8eab\u4efd\u8bc1\u53f7\u7528\u4f5c\u7d22\u5f15\u65f6\uff0c\u53ef\u8bbe\u7f6e\u4e3aunique"),(0,r.kt)("p",null,"\u7ea6\u675f\u552f\u4e00\u6807\u8bc6\u6570\u636e\u5e93\u8868\u4e2d\u7684\u6bcf\u4e00\u6761\u8bb0\u5f55\uff0c\u5373\u5728\u5355\u8868\u4e2d\u4e0d\u80fd\u7528\u6bcf\u6761\u8bb0\u5f55\u662f\u552f\u4e00\u7684\uff08\u4f8b\u5982\u8eab\u4efd\u8bc1\u5c31\u662f\u552f\u4e00\u7684\uff09\uff0cUnique(\u8981\u6c42\u5217\u552f\u4e00)\u548cPrimary Key(primary key = unique + not null \u5217\u552f\u4e00)\u7ea6\u675f\u5747\u4e3a\u5217\u6216\u5217\u96c6\u5408\u4e2d\u63d0\u4f9b\u4e86\u552f\u4e00\u6027\u7684\u4fdd\u8bc1\uff0cPrimary Key\u662f\u62e5\u6709\u81ea\u52a8\u5b9a\u4e49\u7684Unique\u7ea6\u675f\uff0c\u4f46\u662f\u6bcf\u4e2a\u8868\u4e2d\u53ef\u4ee5\u6709\u591a\u4e2aUnique\u7ea6\u675f\uff0c\u4f46\u662f\u53ea\u80fd\u6709\u4e00\u4e2aPrimary Key\u7ea6\u675f\u3002\nmysql\u4e2d\u521b\u5efaUnique\u7ea6\u675f"),(0,r.kt)("p",null,"Full Text \u5168\u6587\u7d22\u5f15"),(0,r.kt)("p",null,"\u8868\u793a\u5168\u6587\u6536\u7d22\uff0c\u5728\u68c0\u7d22\u957f\u6587\u672c\u7684\u65f6\u5019\uff0c\u6548\u679c\u6700\u597d\uff0c\u77ed\u6587\u672c\u5efa\u8bae\u4f7f\u7528Index,\u4f46\u662f\u5728\u68c0\u7d22\u7684\u65f6\u5019\u6570\u636e\u91cf\u6bd4\u8f83\u5927\u7684\u65f6\u5019\uff0c\u73b0\u5c06\u6570\u636e\u653e\u5165\u4e00\u4e2a\u6ca1\u6709\u5168\u5c40\u7d22\u5f15\u7684\u8868\u4e2d\uff0c\u7136\u540e\u5728\u7528Create Index\u521b\u5efa\u7684Full Text\u7d22\u5f15\uff0c\u8981\u6bd4\u5148\u4e3a\u4e00\u5f20\u8868\u5efa\u7acbFull Text\u7136\u540e\u5728\u5199\u5165\u6570\u636e\u8981\u5feb\u7684\u5f88\u591a"),(0,r.kt)("p",null,"FULLTEXT \u7528\u4e8e\u641c\u7d22\u5f88\u957f\u4e00\u7bc7\u6587\u7ae0\u7684\u65f6\u5019\uff0c\u6548\u679c\u6700\u597d\u3002\u7528\u5728\u6bd4\u8f83\u77ed\u7684\u6587\u672c\uff0c\u5982\u679c\u5c31\u4e00\u4e24\u884c\u5b57\u7684\uff0c\u666e\u901a\u7684 INDEX \u4e5f\u53ef\u4ee5\u3002"),(0,r.kt)("p",null,"SPATIAL \u7a7a\u95f4\u7d22\u5f15"),(0,r.kt)("p",null,"\u7a7a\u95f4\u7d22\u5f15\u662f\u5bf9\u7a7a\u95f4\u6570\u636e\u7c7b\u578b\u7684\u5b57\u6bb5\u5efa\u7acb\u7684\u7d22\u5f15\uff0cMYSQL\u4e2d\u7684\u7a7a\u95f4\u6570\u636e\u7c7b\u578b\u67094\u79cd\uff0c\u5206\u522b\u662fGEOMETRY\u3001POINT\u3001LINESTRING\u3001POLYGON\u3002MYSQL\u4f7f\u7528SPATIAL\u5173\u952e\u5b57\u8fdb\u884c\u6269\u5c55\uff0c\u4f7f\u5f97\u80fd\u591f\u7528\u4e8e\u521b\u5efa\u6b63\u89c4\u7d22\u5f15\u7c7b\u578b\u7684\u8bed\u6cd5\u521b\u5efa\u7a7a\u95f4\u7d22\u5f15\u3002\u521b\u5efa\u7a7a\u95f4\u7d22\u5f15\u7684\u5217\uff0c\u5fc5\u987b\u5c06\u5176\u58f0\u660e\u4e3aNOT NULL\uff0c\u7a7a\u95f4\u7d22\u5f15\u53ea\u80fd\u5728\u5b58\u50a8\u5f15\u64ce\u4e3aMYISAM\u7684\u8868\u4e2d\u521b\u5efa"),(0,r.kt)("p",null,"btree\u7d22\u5f15\u548chash\u7d22\u5f15\u7684\u533a\u522b"),(0,r.kt)("p",null,"1\u3001BTREE\uff08B\u6811\uff08\u53ef\u4ee5\u662f\u591a\u53c9\u6811\uff09\uff09 {\u4e3b\u6d41\u4f7f\u7528}\n2\u3001HASH\uff08key,value\uff09 \u8fd9\u79cd\u65b9\u5f0f\u5bf9\u8303\u56f4\u67e5\u8be2\u652f\u6301\u5f97\u4e0d\u662f\u5f88\u597d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15  FULLTEXT  NORMAL  SPATIAL  UNIQUE"),(0,r.kt)("li",{parentName:"ul"},"\u7d22\u5f15 BTREE HASH RTREE")),(0,r.kt)("h3",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/yinzhengjie/p/11762653.html"},"MySQL/MariaDB\u6570\u636e\u5e93\u7684\u7d22\u5f15\u5de5\u4f5c\u539f\u7406\u548c\u4f18\u5316 - \u5c39\u6b63\u6770 - \u535a\u5ba2\u56ed")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_44779466/article/details/117709146"},"MYSQL\u7d22\u5f15\u7c7b\u578b\uff1aFULLTEXT\u3001NORMAL\u3001SPATIAL\u3001UNIQUE",(0,r.kt)("em",{parentName:"a"},"\u7d22\u5f15spatial"),"\u662f\u8ab0\u8406\u5fae\u4e86\u627f\u8afe\u7684\u535a\u5ba2-CSDN\u535a\u5ba2")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/caox_nazi/article/details/88853008"},"MySql\u4e0b\u5927\u6570\u636e\u91cf\u7ea7\u522b\uff081000\u4e07+\uff09\u4f18\u5316\u67e5\u8be2\u548c\u64cd\u4f5c\u65b9\u6cd5_mysql\u6570\u91cf\u7ea7\u522b_caox_nazi\u7684\u535a\u5ba2-CSDN\u535a\u5ba2")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.aliyun.com/article/743951"},"\u5904\u7406\u4ebf\u7ea7\u6570\u636e\u7684\u201c\u5b9a\u65f6\u4efb\u52a1\u201d\uff0c\u5982\u4f55\u7f29\u77ed\u6267\u884c\u65f6\u95f4\uff1f-\u963f\u91cc\u4e91\u5f00\u53d1\u8005\u793e\u533a")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/dh17/p/14484423.html"},"15 \u4e2a\u6709\u7528\u7684 MySQL/MariaDB \u6027\u80fd\u8c03\u6574\u548c\u4f18\u5316\u6280\u5de7 - da0h1 - \u535a\u5ba2\u56ed")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://runebook.dev/zh/docs/mariadb/-index-#%E4%BC%98%E5%8C%96%E5%92%8C%E8%B0%83%E6%95%B4"},"MariaDB 10.9 \u4e2d\u6587")),(0,r.kt)("h2",{id:"mysql-\u5b50\u67e5\u8be2in"},"MySQL \u5b50\u67e5\u8be2(IN)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select SUM(`sum_value`) as `data_value`, `report_date_day` as `data_time` from `device_sensor_data_hourly` where (`function_key_value` = '3-29') and `report_date_day` between 20230801 and 20230808 group by `data_time`\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/jj1995/article/details/104009058"},"MySQL(\u4e03)---\u5b50\u67e5\u8be2(IN)",(0,r.kt)("em",{parentName:"a"},"\u5b50\u67e5\u8be2 in \u62bd\u79bb\u5199\u6cd5"),"\u52a0\u5927\u7237\u7684\u535a\u5ba2-CSDN\u535a\u5ba2")),(0,r.kt)("h2",{id:"\u67e5\u8be2log"},"\u67e5\u8be2LOG"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"set @device_sensor_id:=160;\nset @device_property_id:=5576;\n\nSELECT function_key_value FROM `sh-iot`.`device_sensor_specs` WHERE `device_sensor_id` = @device_sensor_id AND `group` = '\u5185\u673a6\u6570\u636e' AND `function_name` = '\u5f00\u5173\u673a' LIMIT 1 INTO @function_key_value_kaiguan;\nSELECT function_key_value FROM `sh-iot`.`device_sensor_specs` WHERE `device_sensor_id` = @device_sensor_id AND `group` = '\u5185\u673a6\u6570\u636e' AND `function_name` = '\u8fd0\u884c\u6a21\u5f0f\u8bbe\u5b9a' LIMIT 1 INTO @function_key_value_moshi;\nSELECT function_key_value FROM `sh-iot`.`device_sensor_specs` WHERE `device_sensor_id` = @device_sensor_id AND `group` = '\u5185\u673a6\u6570\u636e' AND `function_name` = '\u6e29\u5ea6' LIMIT 1 INTO @function_key_value_wendu;\nSELECT function_key_value FROM `sh-iot`.`device_sensor_specs` WHERE `device_sensor_id` = @device_sensor_id AND `group` = '\u5185\u673a6\u6570\u636e' AND `function_name` = '\u98ce\u901f' LIMIT 1 INTO @function_key_value_fengsu;\n\nINSERT INTO `sh-iot`.`virtual_device_data` (`virtual_device_id`, `device_id`, `device_property_id`, `device_sensor_id`, `function_key_value`, `name`, `created_at`, `updated_at`) VALUES (@virtual_device_id, @device_id, @device_property_id, @device_sensor_id, @function_key_value_kaiguan, '\u5f00\u5173', NOW(), NOW());\n\nINSERT INTO `sh-iot`.`virtual_device_data` (`virtual_device_id`, `device_id`, `device_property_id`, `device_sensor_id`, `function_key_value`, `name`, `created_at`, `updated_at`) VALUES (@virtual_device_id, @device_id, @device_property_id, @device_sensor_id, @function_key_value_moshi, '\u6a21\u5f0f', NOW(), NOW());\n\nINSERT INTO `sh-iot`.`virtual_device_data` (`virtual_device_id`, `device_id`, `device_property_id`, `device_sensor_id`, `function_key_value`, `name`, `created_at`, `updated_at`) VALUES (@virtual_device_id, @device_id, @device_property_id, @device_sensor_id, @function_key_value_wendu, '\u6e29\u5ea6', NOW(), NOW());\n\nINSERT INTO `sh-iot`.`virtual_device_data` (`virtual_device_id`, `device_id`, `device_property_id`, `device_sensor_id`, `function_key_value`, `name`, `created_at`, `updated_at`) VALUES (@virtual_device_id, @device_id, @device_property_id, @device_sensor_id, @function_key_value_fengsu, '\u98ce\u901f', NOW(), NOW());\n")))}_.isMDXComponent=!0}}]);