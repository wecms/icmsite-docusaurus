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