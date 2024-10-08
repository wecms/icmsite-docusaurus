# Quasar

Quasar (发音 /ˈkweɪ.zɑɹ/) 是一个基于 Vue.js 的开源框架，遵循 MIT 开源协议。它可以帮您快速构建多种模式的响应式网站和应用程序：

- SPA (Single Page App，单页应用)
- SSR (Server-side Rendered App，服务端渲染) (可与 PWA 同时存在)
- PWA (渐进式 web 应用程序)
- BEX (Browser Extension，浏览器插件)
- 手机 App (Android, iOS, …) 通过 Cordova 或者 Capacitor 构建
- 跨平台的桌面应用 (使用 Electron 构建)

Quasar 的座右铭是：编写一次代码，同时将其部署为网站、手机应用程序和桌面应用程序。

[quasar 与 uniapp 选型简单对比 - 掘金](https://juejin.cn/post/6844903822771372040)

Quasar Framework 还缺少开发 微信小程序


## 使用Quasar

安装yarn(全局安装过就不用再安装)

npm install -g yarn

安装成功后，查看版本号：

yarn --version

yarn install --registry=https://registry.npm.taobao.org

## Quasar中后台模板

- quasar 2.X admin template
- quasar 2.X admin
- [如何评价Quasar Framework? - 知乎](https://www.zhihu.com/question/54913702)
- [quasarframework/quasar-play: [<= 0.17] Quasar Framework Showcase App](https://github.com/quasarframework/quasar-play)

[Quasar Framework](https://quasar.dev/#/showcase)
[quasar/Quasar: Remote Administration Tool for Windows](https://github.com/quasar/Quasar)
[标准的表格 - Quasar admin](https://dirkhe1051931999.github.io/quasar/#/table/standard)
[Quasar-Sika-Design 开箱即用的中台前端 / 设计解决方案 - Qusar Framework 中文社区](http://forum.quasarchs.com/article/1608355100586?p=1&m=0)
[mayank091193/quasar-admin-crm: Quasar CRM Admin | VueJS Admin | Featuring 3 different dashboards | Give it a star if you find it useful.](https://github.com/mayank091193/quasar-admin-crm)
[pratik227/quasar-admin: Free Quasar Admin Template based on Vue.js and used Quasar Framework.](https://github.com/pratik227/quasar-admin)

[Netlify - 知乎](https://www.zhihu.com/topic/20747725/hot)

[SalesInvoices - CoAdmin管理系统](http://jinjinge.gitee.io/quasar-admin-template/sales/invoices)

## Quasar优秀开源项目

[Quasar Framework 中文网右上角](http://www.quasarchs.com/)

[quasar-admin · GitHub Topics](https://github.com/topics/quasar-admin)

一直未找到合适好的Quasar Admin Template开源项目。

## Quasar Framework  Admin (找到了)

找到的一个差不多的Quasar Admin Template开源项目

https://github.com/dirkhe1051931999/quasar-typescript-admin-template/

[jen](https://he-jen.blogspot.com/)

Using vue-facing-decorator allows you to write Vue3 code using class syntax, making the code more structured and object-oriented, and thus easier to read and maintain. 

vue-facing-decorator class syntax 通过类的方式来写vue组件。

https://github.com/facing-dev/vue-facing-decorator

[vue-facing-decorator 让你在vue3中使用类的方式来写组件](https://facing-dev.github.io/vue-facing-decorator/#/zh-cn/readme)

### 其他参考

- vue-facing-decorator

[在 Vue 中使用装饰器 Decorator - 掘金](https://juejin.cn/post/7025198357211676708)

[Overview | Vue Class Component](https://class-component.vuejs.org/)

[Quasar admin Vue3 Preview Login by typing in any username, code and password](https://dirkhe1051931999.github.io/v3-admin/#/dashboard)



## 推荐两个 vue3 框架

[v3-admin-vite/README.zh-CN.md at main · un-pany/v3-admin-vite](https://github.com/un-pany/v3-admin-vite/blob/main/README.zh-CN.md)

[介绍 | Vben Admin](https://doc.vvbin.cn/guide/introduction.html)

https://github.com/vbenjs/vue-vben-admin

[v 友们 推荐几个好看的 vue3 模板 - V2EX](https://www.v2ex.com/t/944602)
[终于实现了照片备份到 NAS 的终极方案 - V2EX](https://www.v2ex.com/t/971308#reply41)
[各位 V 友们，求好用的燃油小踏板摩托 ，有没有过来人，推荐一下？ - V2EX](https://www.v2ex.com/t/971385#reply6)

## 新系统安装Quasar后PowerShell无法使用

但是在GitBash命令窗口中可以用：

```
$ quasar -v
@quasar/cli v2.3.0
```

经查：在 Windows 系统上，PowerShell 和 Git Bash 使用不同的执行策略。Git Bash 使用的是 Bash Shell，而 PowerShell 使用的是 PowerShell Shell。默认情况下，Windows 会对不同的 Shell 应用不同的执行策略。

检查当前的执行策略：在以管理员身份运行的 PowerShell 窗口中，执行以下命令来查看当前的执行策略：`Get-ExecutionPolicy`

输出的结果应该是 "Restricted"（受限制）。

修改执行策略：执行以下命令来将执行策略修改为 "RemoteSigned"（仅允许运行远程签名的脚本）：

```
PS C:\Windows\system32> Get-ExecutionPolicy
Restricted
PS C:\Windows\system32> Set-ExecutionPolicy RemoteSigned

执行策略更改
执行策略可帮助你防止执行不信任的脚本。更改执行策略可能会产生安全风险，如 https:/go.microsoft.com/fwlink/?LinkID=135170
中的 about_Execution_Policies 帮助主题所述。是否要更改执行策略?
[Y] 是(Y)  [A] 全是(A)  [N] 否(N)  [L] 全否(L)  [S] 暂停(S)  [?] 帮助 (默认值为“N”): Y
PS C:\Windows\system32> Get-ExecutionPolicy
RemoteSigned
PS C:\Windows\system32> quasar -v
@quasar/cli v2.3.0
```
