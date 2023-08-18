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

## 一个指针引起的列表数据为空

```go
QueryDetailRes struct {
	Id          int64  `db:"id"`
	AppKey      string `db:"app_key"`
	UserId      int64  `db:"user_id"` // user表id
	RoleId      *int64 `db:"role_id"`
	CreatedBy   int64  `db:"created_by"`   // 邀请/创建者用户id
	Openid      string `db:"openid"`       // 关联应用的小程序openid，不同应用可能会使用不同小程序
	Unionid     string `db:"unionid"`      // 关联应用的小程序unionid
	EnableAlarm int64  `db:"enable_alarm"` // 是否接收推送消息
	//        下面信息来自user表
	Username  string       `db:"username"`
	Avatar    string       `db:"avatar"`
	Nickname  string       `db:"nickname"`
	Mobile    string       `db:"mobile"`
	Email     string       `db:"email"`
	CreatedAt sql.NullTime `db:"created_at"`
}
```

添加了一个字段

```go
RoleId      *int64 `db:"role_id"`
```

是经过TortoiseGit对比看出来的，找了很久不知道为什么数据为空，SQL查询是有结果的。

追踪代码很深，一直追踪到这里，未查到果：

```go
# \\wsl$\Ubuntu-20.04\srv\app-iot-go\module\internal\model\appusermodel.go

func (m *customAppUserModel) QueryRawsNoCacheCtx(ctx context.Context, v any, q string, args ...any) error {
	return m.defaultAppUserModel.QueryRowsNoCacheCtx(ctx, v, q, args...)
}
```

最后打印发现是少一个查询字段导致的：

```go
# \\wsl$\Ubuntu-20.04\root\go\pkg\mod\github.com\zeromicro\go-zero@v1.5.3\core\stores\sqlx\sqlconn.go
func (db *commonSqlConn) QueryRowsCtx(ctx context.Context, v any, q string,
	args ...any) (err error) {
	ctx, span := startSpan(ctx, "QueryRows")
	defer func() {
		endSpan(span, err)
	}()

	return db.queryRows(ctx, func(rows *sql.Rows) error {
		columns,_:=rows.Columns()
		fmt.Printf("columns:",columns) // 我在这里打印了查询字段
		return unmarshalRows(v, rows, true)
	}, q, args...)
}
```

```go
# module/internal/repository/appuser/repository.go
// queryDetailBuilder 查询详情构造器 连同user表的数据查询出来
// 注 ： 在 PostgreSQL 中，user 是一个保留关键字，所以需要用双引号引起来
func (r *customRepository) queryDetailBuilder(ctx context.Context, query any, orderBy ...any) squirrel.SelectBuilder {
	bd := squirrel.Select("app_user.id," +
		"app_user.app_key," +
		"app_user.user_id," +
		"app_user.role_id," +
		"app_user.created_by," +
		"app_user.openid," +
		"app_user.unionid," +
		"app_user.enable_alarm," +
		"\"user\".username," +
		"\"user\".avatar," +
		"\"user\".nickname," +
		"\"user\".mobile," +
		"\"user\".email," +
		"\"user\".created_at").From("app_user").
		Join("\"user\" on app_user.user_id = \"user\".id")
```

问AI说，在使用 Squirrel SQL 的 Select 方法时如果漏掉了一个字段，比如 "column3"，那么在 rows.Scan() 中尝试扫描 "column3" 的值时，会出现错误，导致整个行的扫描失败。这也会导致结果为空，因为没有成功扫描到完整的行数据。


## 传递参数必须为指针，否则报错 `reflect.Value.IsNil(...)`

不知道是同事写的代码有问题，还是什么原因？？？

DetailPaginate(ctx, v, page, pageSize, q, o) // 这里的q, o都要加&否则报下面错

```go
# module/auth/service/appuser/svc.go

func (s *Service) Paginate(ctx context.Context, v any, page uint64, pageSize uint64, query *ParamQuery, order *ParamOrder) (currentPage uint64, perPage uint64, maxPage uint64, total uint64, err error) {
	var (
		q appuser.ParamQuery
		o appuser.ParamOrder
	)
	_ = bizcopier.CopyWithConverters(&q, query)
	_ = bizcopier.CopyWithConverters(&o, order)

	//currentPage, perPage, maxPage, total, err = s.svcCtx.AppUserRepo.Paginate(ctx, v, page, pageSize, &q, &o)

	//currentPage, perPage, maxPage, total, err = s.svcCtx.AppUserRepo.DetailPaginate(ctx, v, page, pageSize, &q, &o)
	currentPage, perPage, maxPage, total, err = s.svcCtx.AppUserRepo.DetailPaginate(ctx, v, page, pageSize, q, o) // 这里的q, o都要加&否则报下面错误

	return
}
```

```
(/api/auth/app-user/list - 192.168.50.1:54345) reflect: call of reflect.Value.IsNil on struct Value goroutine 27 [running]:
runtime/debug.Stack()
/root/sdk/go1.19/src/runtime/debug/stack.go:24 +0x65
github.com/zeromicro/go-zero/rest/handler.RecoverHandler.func1.1()
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/recoverhandler.go:16 +0x66
panic({0x10b14a0, 0xc0003ac918})
/root/sdk/go1.19/src/runtime/panic.go:884 +0x212
reflect.Value.IsNil(...)
/root/sdk/go1.19/src/reflect/value.go:1554
git.yztiot.com/gdyz/app-iot-go/module/internal/repository/appuser.(*customRepository).queryDetailBuilder(0xc00033ee68, {0x13ff378, 0xc000825f20}, {0x11ef9c0, 0xc0003bb180}, {0xc0008a18b8, 0x1, 0x18?})
/srv/app-iot-go/module/internal/repository/appuser/repository.go:189 +0x707
git.yztiot.com/gdyz/app-iot-go/module/internal/repository/appuser.(*customRepository).DetailGet(0xc00033ee68, {0x13ff378, 0xc000825f20}, {0x102de00, 0xc0003ac858}, {0x11ef9c0?, 0xc0003bb180?}, {0x1122180?, 0xc000497370?}, 0xc0008a1930, ...)
/srv/app-iot-go/module/internal/repository/appuser/repository.go:105 +0x85
git.yztiot.com/gdyz/app-iot-go/module/internal/repository/appuser.(*customRepository).DetailPaginate(0xc00033ee68, {0x13ff378, 0xc000825f20}, {0x102cb00, 0xc0003ac750}, 0xc0004d57c0?, 0x14, {0x11ef9c0, 0xc0003bb180}, {0x1122180, ...})
/srv/app-iot-go/module/internal/repository/appuser/repository.go:127 +0x1eb
git.yztiot.com/gdyz/app-iot-go/module/auth/service/appuser.(*Service).Paginate(0xc00033eeb0, {0x13ff378, 0xc000825f20}, {0x102cb00, 0xc0003ac750}, 0xc0003ac6c0?, 0x30?, 0xc0008a1af0?, 0x40d5f4?)
/srv/app-iot-go/module/auth/service/appuser/svc.go:72 +0x1b0
git.yztiot.com/gdyz/app-iot-go/app/system/internal/logic/auth.(*AppUserListLogic).AppUserList(0xc0008a1bc8, 0xc000825f50)
/srv/app-iot-go/app/system/internal/logic/auth/appuserlistlogic.go:45 +0x1ad
git.yztiot.com/gdyz/app-iot-go/app/system/internal/handler/auth.AppUserListHandler.func1({0x13fe1b0, 0xc000328ba0}, 0xc000892900)
/srv/app-iot-go/app/system/internal/handler/auth/appuserlisthandler.go:22 +0x19d
net/http.HandlerFunc.ServeHTTP(0xc0008a1cc0?, {0x13fe1b0?, 0xc000328ba0?}, 0xc000497080?)
/root/sdk/go1.19/src/net/http/server.go:2109 +0x2f
github.com/zeromicro/go-zero/rest/handler.Authorize.func1.1({0x13fe1b0, 0xc000328ba0}, 0xc000892800)
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/authhandler.go:81 +0x4b3
net/http.HandlerFunc.ServeHTTP(0x0?, {0x13fe1b0?, 0xc000328ba0?}, 0x0?)
/root/sdk/go1.19/src/net/http/server.go:2109 +0x2f
github.com/zeromicro/go-zero/rest/handler.GunzipHandler.func1({0x13fe1b0, 0xc000328ba0}, 0xc000892800)
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/gunziphandler.go:26 +0xe9
net/http.HandlerFunc.ServeHTTP(0xedc716664?, {0x13fe1b0?, 0xc000328ba0?}, 0x1fa8f5c05?)
/root/sdk/go1.19/src/net/http/server.go:2109 +0x2f
github.com/zeromicro/go-zero/rest/handler.MaxBytesHandler.func2.1({0x13fe1b0?, 0xc000328ba0?}, 0x1cb1fc0?)
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/maxbyteshandler.go:24 +0xff
net/http.HandlerFunc.ServeHTTP(0x0?, {0x13fe1b0?, 0xc000328ba0?}, 0x0?)
/root/sdk/go1.19/src/net/http/server.go:2109 +0x2f
github.com/zeromicro/go-zero/rest/handler.MetricHandler.func1.1({0x13fe1b0, 0xc000328ba0}, 0x0?)
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/metrichandler.go:21 +0xd5
net/http.HandlerFunc.ServeHTTP(0x0?, {0x13fe1b0?, 0xc000328ba0?}, 0x0?)
/root/sdk/go1.19/src/net/http/server.go:2109 +0x2f
github.com/zeromicro/go-zero/rest/handler.RecoverHandler.func1({0x13fe1b0?, 0xc000328ba0?}, 0x0?)
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/recoverhandler.go:21 +0x83
net/http.HandlerFunc.ServeHTTP(0x0?, {0x13fe1b0?, 0xc000328ba0?}, 0x0?)
/root/sdk/go1.19/src/net/http/server.go:2109 +0x2f
github.com/zeromicro/go-zero/rest/handler.(*timeoutHandler).ServeHTTP.func1()
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/timeouthandler.go:81 +0x7c
created by github.com/zeromicro/go-zero/rest/handler.(*timeoutHandler).ServeHTTP
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/timeouthandler.go:75 +0x350

```

```go
# app/system/internal/logic/auth/modulelistalllogic.go
func (l *ModuleListAllLogic) ModuleListAll(req *types.ModuleListAllReq) (resp *types.ModuleListAllRes, err error) {
	var params module.ParamQuery

	if req.Keyword != nil {
		params.Name = req.Keyword
	}
	order := module.ParamOrder{
		Id:        tea.String(repository.OrderDesc),
		CreatedAt: tea.String(repository.OrderDesc),
	}

	var data []*types.ModuleDetailRes

	err = l.svcCtx.AuthSvc.Module.Get(l.ctx, &data, &params, order, nil, nil)  // 这里order应该为&order否则报下面错误
	...

	return
}
```

```
(/api/auth/module/list-all - "<<<<192.168.50.1":55909) "reflect": call of reflect.Value.IsNil on struct Value
goroutine 43 [running]:
runtime/debug.Stack()
/root/sdk/go1.19/src/runtime/debug/stack.go:24 "+0x65
github.com/zeromicro/go-zero/rest/handler.RecoverHandler.func1.1()
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/recoverhandler.go":16 +0x66
panic({0x10b14a0, 0xc0007fdcc8})
/root/sdk/go1.19/src/runtime/panic.go:884 "+0x212
reflect.Value.IsNil(...)
/root/sdk/go1.19/src/reflect/value.go":1554
git.yztiot.com/gdyz/app-iot-go/common/repository/abstract.(*BaseRepository).QueryBuilder(0xc0004107b0, {0x13ff398, 0xc000a41920}, {0x10352c0, 0xc0007e4230}, {0xc000a5fa70, 0x1, 0xc000111310?})
/srv/app-iot-go/common/repository/abstract/base.go:372 +0x6f5
git.yztiot.com/gdyz/app-iot-go/common/repository/abstract.(*BaseRepository).Get(0xc000a5fb18?, {0x13ff398, 0xc000a41920}, {0x102cf80, 0xc0007fdc80}, {0x10352c0?, 0xc0007e4230?}, {0x1121b40?, 0xc000111310?}, 0x0, "...)
/srv/app-iot-go/common/repository/abstract/base.go":105 "+0x86
git.yztiot.com/gdyz/app-iot-go/module/auth/service/module.(*Service).Get(...)
/srv/app-iot-go/module/auth/service/module/svc.go":100
git.yztiot.com/gdyz/app-iot-go/app/system/internal/logic/auth.(*ModuleListAllLogic).ModuleListAll(0xc000a5fbc8, "0xc00045ac28)
/srv/app-iot-go/app/system/internal/logic/auth/modulelistalllogic.go":42 +0x19a
git.yztiot.com/gdyz/app-iot-go/app/system/internal/handler/auth.ModuleListAllHandler.func1({0x13fe1d0, 0xc000a176e0}, "0xc000a4ec00)
/srv/app-iot-go/app/system/internal/handler/auth/modulelistallhandler.go":22 +0x19d
net/http.HandlerFunc.ServeHTTP(0xc000a5fcc0?, {0x13fe1d0?, 0xc000a176e0?}, "0xc000110f30?)
/root/sdk/go1.19/src/net/http/server.go":2109 +0x2f
github.com/zeromicro/go-zero/rest/handler.Authorize.func1.1({0x13fe1d0, 0xc000a176e0}, "0xc000a4eb00)
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/authhandler.go":81 +0x4b3
net/http.HandlerFunc.ServeHTTP(0x0?, {0x13fe1d0?, 0xc000a176e0?}, "0x0?)
/root/sdk/go1.19/src/net/http/server.go":2109 +0x2f
github.com/zeromicro/go-zero/rest/handler.GunzipHandler.func1({0x13fe1d0, 0xc000a176e0}, "0xc000a4eb00)
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/gunziphandler.go":26 +0xe9
net/http.HandlerFunc.ServeHTTP(0xedc716b66?, {0x13fe1d0?, 0xc000a176e0?}, "0xbfb241601?)
/root/sdk/go1.19/src/net/http/server.go":2109 +0x2f
github.com/zeromicro/go-zero/rest/handler.MaxBytesHandler.func2.1({0x13fe1d0?, 0xc000a176e0?}, "0x1cb1fc0?)
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/maxbyteshandler.go":24 +0xff
net/http.HandlerFunc.ServeHTTP(0x0?, {0x13fe1d0?, 0xc000a176e0?}, "0x0?)
/root/sdk/go1.19/src/net/http/server.go":2109 +0x2f
github.com/zeromicro/go-zero/rest/handler.MetricHandler.func1.1({0x13fe1d0, 0xc000a176e0}, "0x0?)
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/metrichandler.go":21 +0xd5
net/http.HandlerFunc.ServeHTTP(0x0?, {0x13fe1d0?, 0xc000a176e0?}, "0x0?)
/root/sdk/go1.19/src/net/http/server.go":2109 +0x2f
github.com/zeromicro/go-zero/rest/handler.RecoverHandler.func1({0x13fe1d0?, 0xc000a176e0?}, "0x0?)
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/recoverhandler.go":21 +0x83
net/http.HandlerFunc.ServeHTTP(0x0?, {0x13fe1d0?, 0xc000a176e0?}, "0x0?)
/root/sdk/go1.19/src/net/http/server.go":2109 "+0x2f
github.com/zeromicro/go-zero/rest/handler.(*timeoutHandler).ServeHTTP.func1()
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/timeouthandler.go":81 +0x7c
created by "github.com/zeromicro/go-zero/rest/handler.(*timeoutHandler).ServeHTTP
/root/go/pkg/mod/github.com/zeromicro/go-zero@v1.5.3/rest/handler/timeouthandler.go":75 +0x350
```

