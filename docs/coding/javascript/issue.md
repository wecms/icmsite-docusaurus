# JavaScript Issue

## Uncaught (in promise) TypeError: Cannot read properties of null

经常遇到的一个错误，要跟踪一下代码很快可以查到原因。

```
Uncaught (in promise) TypeError: Cannot read properties of null (reading 'message')
    at api.interceptors.response.use.message (axios.ts:39:13)
```

![error-TypeError-cannot-read-properties-of-null-1.jpg](./img/error-TypeError-cannot-read-properties-of-null-1.jpg)

这个由于Golang后端接口返回的数据为NULL引起的：

![error-TypeError-cannot-read-properties-of-null-2.jpg](./img/error-TypeError-cannot-read-properties-of-null-2.jpg)

```go title="app/system/internal/handler/auth/moduleaddhandler.go"
func ModuleAddHandler(svcCtx *svc.ServiceContext) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var req types.ModuleAddReq
		if err := httpx.Parse(r, &req); err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
			return
		}

		l := auth.NewModuleAddLogic(r.Context(), svcCtx)
		resp, err := l.ModuleAdd(&req)
		if err != nil {
			httpx.ErrorCtx(r.Context(), w, err)
		} else {
			httpx.OkJsonCtx(r.Context(), w, resp) // 这里应是httpx.OkJsonCtx(r.Context(), w, bizresponse.Response(resp, err))
		}
	}
}
```

## TypeScript语法`?:`和`<>`

```ts
export function _login(req?: components.TLoginReq) {
  return api.post<components.TLoginRes>('/api/auth/login', req);
}
```

`req?: components.TLoginReq`这里代表可选参数。

代表函数参数中的可选参数、接口属性中的可选属性。

可选参数注意几个点

- 在所有必须参数后面的带默认初始化的参数都是可选的
- 可选参数与末尾的默认参数共享参数类型
- 在定义对象接口时也可代表可选属性`（?:）`

1. [TypeScript基础入门 - 函数 - 可选参数和... - 知乎](https://zhuanlan.zhihu.com/p/42239974)
2. [TS中常见的7种操作符&运算符 - 掘金](https://juejin.cn/post/7019914200273125407)

api：这是一个对象，它包含了用于进行网络请求的方法，其中包括 get 方法，get 方法是一个泛型函数。

通过在尖括号内提供返回类型`<TBucketInfoRes>`参数，告诉编译器我们期望的响应数据类型是 `TBucketInfoRes`。这样，编译器在解析和类型检查代码时，会相应地将响应数据的类型设置为 `TBucketInfoRes`。这样，在发送 GET 请求到 `'/api/auth/bucketInfo'` 端点后，返回的响应数据会被自动解析成 `TBucketInfoRes` 类型，并作为 `Promise` 对象的结果返回。

总结起来，`< >` 尖括号语法用于指定泛型类型参数，允许我们在使用泛型方法或类时明确指定类型参数的值。在这个场景中，我们使用 `<TBucketInfoRes>` 来指定 api.get 方法的类型参数，即指定响应数据的类型为 `TBucketInfoRes`。

定义接口 TBucketInfoRes 可以提供类型定义和约束、提高代码可读性和维护性、增加代码重用性，并促进与其他开发人员的协作。

PHP7中也有类似的写法：三元运算符 `?:` 简写。

### 调用泛型函数

- TypeScript  泛型函数调用

1. [04-简化泛型函数调用_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV14Z4y1u7pi/?p=52&vd_source=37e495a67612a8945d66bb3c4d4be50c)
2. [TypeScript(四) —— 函数，接口，类，泛型语法总结 - 知乎](https://zhuanlan.zhihu.com/p/339737393)
3. [【豁然开朗】为什么要用那么复杂的TS - 掘金](https://juejin.cn/post/6953500339425247246)
4. [TypeScript-从函数返回类型开始讲怎么用好TS - 知乎](https://zhuanlan.zhihu.com/p/366957318)

### 其他参考

- TS使用的初衷
- TypeScript 函数 泛型函数  区别

1. [ts必备基础知识总结_ts 尖括号_Hdudw的博客-CSDN博客](https://blog.csdn.net/Howhanh/article/details/121886520)
2. [🚀 TS项目如何高效处理接口返回数据 - 掘金](https://juejin.cn/post/7184711253867102264)
3. [泛型 · TypeScript中文网 · TypeScript——JavaScript的超集](https://www.tslang.cn/docs/handbook/generics.html)
4. [TypeScript 泛型 - TypeScript 教程 - 网道](https://wangdoc.com/typescript/generics)
5. [《TypeScript 教程》发布了 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2023/08/typescript-tutorial.html)
6. [写给前端新人的话：为什么要用那么复杂的TS - 知乎](https://zhuanlan.zhihu.com/p/389592607)
7. [TypeScript是什么，为什么要使用它？ - 知乎](https://zhuanlan.zhihu.com/p/267778856)
8. [TS入门篇 | 详解 TypeScript 函数类型 - 掘金](https://juejin.cn/post/6998690233067765796)
9. [你不知道的 TypeScript 泛型（万字长文，建议收藏） - 知乎](https://zhuanlan.zhihu.com/p/149965449)
10. [看懂复杂的TypeScript泛型运算 - 掘金](https://juejin.cn/post/6881978855096057863)
11. [Typescript（真的）遵循泛型中参数化类型（T，U，V，W）的命名约定吗？_baoleilei6的博客-CSDN博客](https://blog.csdn.net/qq_34629352/article/details/119100075)