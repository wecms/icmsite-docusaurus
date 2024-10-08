# PostgreSQL

## 模式

### 什么是模式

模式类似于操作系统层次的目录，只不过模式不能嵌套。

一个数据库包含一个或多个已命名的模式，模式又包含表。模式还可以包含其它对象，包括数据类型、函数、操作符等。同一个对象名可以在不同的模式里使用而不会导致冲突；比如，schema1和myschema都可以包含一个名为mytable的表。和数据库不同，模式不是严格分离的：只要有权限，一个用户可以访问他所连接的数据库中的任意模式中的对象。

在PostgreSQL中，模式也称为命名空间。它用于识别和区分数据库中的某些对象（表、视图、列等）。它不允许在一个模式中创建两个同名的表，但可以在两个不同的模式中创建同名的表。

### 为什么要使用模式

模式存在的目的是将数据库对象组织成一个个的逻辑组，并避免名称之间的冲突。除此之外，模式通常用于允许不同的用户在不相互干扰的情况下使用同一个数据库。一个常见的例子是，当每个数据库用户都使用自己的架构时，不会干扰其他用户并避免冲突。 简单来说就是把一个数据库逻辑上分割成不同的区域。

## ERROR:  syntax error at or near "group"

```
SELECT id,app_id,app_key,name,`group`,type,path,method,created_at,updated_at,deleted_at FROM
 "public"."auth_permission" ORDER BY created_at DESC LIMIT 20 OFFSET 0
> ERROR:  syntax error at or near "group"
LINE 1: SELECT id,app_id,app_key,name,`group`,type,path,method,creat...
```

这个错误通常是因为在SELECT语句中使用了保留关键字"group"作为列名或表名，而PostgreSQL将其解释为GROUP BY子句，从而导致语法错误。

为了解决这个问题，你可以尝试以下几种方法：

1. 重命名使用了保留关键字"group"的列名或表名。
2. 在使用保留关键字"group"的列名或表名时，用双引号将其括起来，以明确告诉PostgreSQL这是一个列名或表名而不是GROUP BY子句。例如：`SELECT "group" FROM mytable;`
3. 如果你使用了GROUP BY子句，并且想要在SELECT列表中包含一个名为"group"的列，那么你可以使用别名来重命名该列。例如：`SELECT mycolumn AS mygroup FROM mytable GROUP BY mycolumn;`

## postgresql 字段不支持移动位置吗

是的，我是先添加一个字段再转出sql结构，手动移动sql结构文件中的字段插入位置。

1. [postgresql 如何改变表的字段顺序? - SegmentFault 思否](https://segmentfault.com/q/1010000013554602)
2. [如何更改PostgreSQL数据库表中列的位置？](https://qastack.cn/programming/285733/how-do-i-alter-the-position-of-a-column-in-a-postgresql-database-table)

##  PostgreSQL 中字段类型

-  在 PostgreSQL 中间件 没有 bigint  numeric(20,0)
-  navicat PostgreSQL  类型  长度
-  Navicat for PostgreSQL 类型  长度

[[译文] 在 Postgres 中使用 BIGINT - 墨天轮](https://www.modb.pro/db/102497)

[mysql使用navicat设计类型及长度及外键的注意事项Incorrect datetime value: ‘‘ for column ‘createTime‘ at row 1_navicat设置字段必须18位_GFJadfkljasfg的博客-CSDN博客](https://blog.csdn.net/GFJadfkljasfg/article/details/115712805)

[编辑 PostgreSQL 基本类型常规设置 - Navicat Documentation](https://documentation.help/Navicat-zh/TypeBaseGenPGSQL.html)

[postgresql 10 数据类型 (完整版) - nickchou - 博客园](https://www.cnblogs.com/nickchou/p/9382701.html)

[数值类型](http://www.postgres.cn/docs/9.4/datatype-numeric.html)

[PostgreSQL数据类型，一篇就够了 - 知乎](https://zhuanlan.zhihu.com/p/105097036)

