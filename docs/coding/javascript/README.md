# JavaScript

本地连接都是相对于根目录说的：

[Issue](./javascript/issue)

## 可以使用 if (variable) 来判断一个变量是否为真值

在 JavaScript 中，以下值被视为假值（falsy values）: false、0、''（空字符串）、null、undefined 和 NaN。除了这些假值之外的所有值都被视为真值。

```js
if (variable) {
  // 变量不是 undefined 或 null 的处理逻辑
}
```

## 对象 e.map is not a function

TypeError: "x" is not a function
JavaScript 异常"is not a function"会在试图去调用一个像函数一样的值，但是该值实际上不是函数时被抛出。

是因为在 JavaScript 中单纯的对象 (Object) 没有map函数，但是 JavaScript 数组 (Array) 对象却有这个函数

```JS
// obj是一个对象
var obj = { 交流配电: [{id:1,sort:2},{id:2,sort:1}], 交流配电告警: [{id:1,sort:2},{id:2,sort:1}], 休眠功能: [{id:1,sort:2},{id:2,sort:1}] };
```

```js
this.clusterList = res.data.data.map(item => {
  let name = 0
  name = item.name.replace(/ /g, "")
  name = parseInt(name, 16)
  item.name = item.name + "(" + name + ")"
  return item
});
```

## Lodash 工具库

Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。

[Lodash 简介 | Lodash中文文档 | Lodash中文网](https://www.lodashjs.com/)

[lodash/lodash: A modern JavaScript utility library delivering modularity, performance, & extras.](https://github.com/lodash/lodash)
