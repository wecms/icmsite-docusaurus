# Go-Zero

## Goctl CLI工具

goctl 是 go-zero 配套的代码生成工具脚手架，其集成了 Go HTTP 服务，Go gRPC 服务，数据库 model，k8s，Dockerfile 等生成功能。

### goctl completion

goctl 采用了 [Cobra](https://github.com/spf13/cobra) 框架开发，因此其继承了 Cobra 的自动补全功能，在 goctl 中，我们提供了 bash、fish、zsh、powershell 的自动补全功能。

[goctl completion | go-zero Documentation](https://go-zero.dev/docs/tutorials/cli/completion)

## go-zero  路由  api 读取

go-zero  路由  api 读取

## 在Go-Zero  中间件 ctx上下文

在Go-Zero中怎么把请求中internal logic中的l.ctx变量传递到中间件中使用


从request中可以获取上下文：

```go
func (m *AuthInterceptorMiddleware) Handle(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		ctx := r.Context()
		uid := ctxdata.GetUserId(ctx)
		logx.WithContext(ctx).Infof("get userid by AuthInterceptorMiddleware: %v", uid)
		next(w, r)
	}
}
```

- go-zero 怎么中中间件中使用servicecontext.go上下文

[路由中间件支持ServiceContext参数传递 · Issue #867 · zeromicro/go-zero](https://github.com/zeromicro/go-zero/issues/867)
[userid怎么传递给鉴权中间件？ · Issue #121 · Mikaelemmmm/go-zero-looklook](https://github.com/Mikaelemmmm/go-zero-looklook/issues/121)

## cortesi/modd

- bilibili  go-zero-looklook  modd
- Go 语言的热加载
- golang air 指定版本
- 监听上级目录

[cortesi/modd：一种灵活的开发人员工具，可运行进程并响应文件系统更改](https://github.com/cortesi/modd)

[go-zero-looklook/modd.conf at main · Mikaelemmmm/go-zero-looklook](https://github.com/Mikaelemmmm/go-zero-looklook/blob/main/modd.conf)
[go-zero-looklook/doc/chinese/01-开发环境搭建.md at main · Mikaelemmmm/go-zero-looklook](https://github.com/Mikaelemmmm/go-zero-looklook/blob/main/doc/chinese/01-开发环境搭建.md)


[利用 Modd 提高 Go 开发效率 - Razon Yang](https://razonyang.com/zh-hans/posts/go/modd/)

[Modd 热编译重启 Go 项目 - 掘金](https://juejin.cn/post/7075521293549830152)

[Mikaelemmmm的个人空间_哔哩哔哩_bilibili](https://space.bilibili.com/389552232/video?tid=0&pn=2&keyword=&order=pubdate)

[cosmtrek/air: ☁️ Live reload for Go apps](https://github.com/cosmtrek/air)