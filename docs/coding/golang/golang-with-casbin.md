# Golang Casbin

## 缩写词含义

在 Casbin 的策略定义中，g 代表 "group"，指的是访问控制中的角色或组。

Casbin 的策略规则通常由 "sub", "obj", "act" 组成，分别代表 "subject"、"object" 和 "action"：

- "sub"（subject）：执行操作的实体，通常是用户或角色，例如想要访问资源的用户。
- "obj"（object）：被操作的资源或对象，例如文件、数据库记录等。
- "act"（action）：执行的操作类型，例如读取、写入、删除等。

在 Casbin 中，p 在 policy_definition 中代表 "policy"（策略）。

在 Casbin 的 policy_definition 中，通常使用以下表示法：

```
p, sub, obj, act
```

- p：代表策略（policy）。它指示你正在定义的规则是关于策略部分的定义。
- sub：代表 "subject"（主体），即执行操作的实体，通常是用户或角色。
- obj：代表 "object"（对象），即被操作的资源或对象，例如文件、数据库记录等。
- act：代表 "action"（操作），即执行的操作类型，例如读取、写入、删除等。

## 关键API代码

### 定义请求参数

Request定义，访问控制模型Model CONF中 [request_definition] 部分。

```
[request_definition]
r = sub, obj, act
```

sub, obj, act 表示经典三元组: 访问实体 (Subject)，访问资源 (Object) 和访问方法 (Action)。 但是, 你可以自定义你自己的请求表单, 如果不需要指定特定资源，则可以这样定义 sub、act ，或者如果有两个访问实体, 则为 sub、sub2、obj、act。

Request定义实际上定义了我们应该提供访问控制匹配功能的参数**名称和顺序**。

即：它定义了 `e.Enforce(...)` 函数中的参数。

[Model 的语法 | Casbin](https://casbin.org/zh/docs/syntax-for-models/#request定义)


### 检查权限

```go
// 从文件中加载信息，将返回一个执行者
enforcer, err := casbin.NewEnforcer("./example/model.conf", "./example/policy.csv")
if err != nil {
    log.Fatalf("error, detail: %s", err)
}

// 检查权限，如果alice可以通过read操作访问data1，返回值ok将是true，否则将是false
sub := "alice" // 想要访问资源的用户。
obj := "data1" // 将被访问的资源。
act := "read" // 用户对资源执行的操作。
ok, err := enforcer.Enforce(sub, obj, act)

if err != nil {
    // 处理err
}

if ok == true {
    // 允许alice读取data1
} else {
    // 拒绝请求，抛出异常
}
```

[开始使用 | Casbin](https://casbin.org/zh/docs/get-started)
[API概述 | Casbin](https://casbin.org/zh/docs/api-overview/)

## 模块和权限是不区域多租户或者域的

模块和权限是不区域多租户或者域的，也就是说模块和权限是属于总平台，所有租户共有的。

其实这两个概念的东西可以放到一张表里，一个是视图菜单、按钮的权限，一个是api接口的权限，反正都属于角色所拥有的资源，包括后面的设备也都属于角色控制的资源。

须研究一下，看怎么组合？

## casbin  casbin-pg-adapter  schema

好像不兼容PostgresSQL `模式.数据库` 的连接形式

- casbin  casbin-pg-adapter  schema
- golang postgres   pg.Options
- postgresql  db schema

[cychiuae/casbin-pg-adapter: PostgreSQL adapter for Casbin](https://github.com/cychiuae/casbin-pg-adapter)

### 其他参考

1. [Releases · go-pg/pg](https://github.com/go-pg/pg/releases)
2. [Getting started - PostgreSQL client and ORM for Go](https://pg.uptrace.dev/)
3. [PostgreSQL: Documentation: 15: postgres](https://www.postgresql.org/docs/current/app-postgres.html)
4. [postgresql中的Search_path、schema等概念的理解-CSDN博客](https://blog.csdn.net/tiandao2009/article/details/79630822?ydreferer=aHR0cHM6Ly93d3cuYmluZy5jb20v)
5. [go - Connect with postgreSQL schema - Stack Overflow](https://stackoverflow.com/questions/51459170/connect-with-postgresql-schema)