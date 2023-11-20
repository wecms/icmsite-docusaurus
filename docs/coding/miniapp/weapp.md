# Weapp Issue

## Now you can provide attr `wx:key` for a `wx:for` to improve performance

当我们在使用wx:for遍历列表数据的时候，原则上来讲每条数据都是不一样的，所以需要使用 wx:key来指定列表中项目的唯一的标识符

解决：在所有的`wx:for`处理添加`wx:key="id"`


```php
<block wx:for="{{projectList}}" wx:key="id">
```

如果添加成：`wx:key="{{item.id}}"`还会报错。

```php
<block wx:for="{{projectList}}" wx:key="{{item.id}}">
```

```
wx:key="{{item.id}}" does not look like a valid key name (did you mean wx:key="id" ?)
```

## 微信小程序在循环元素中 bindtap data-argument 获取不到参数

```
<view id="tapTest" data-hi="WeChat" bindtap="tapName"> Click me! </view>
```

`var hi = event.target.dataset.hi;`

但是在循环中，上述方式是拿不到数据的。

```
<view id="tapTest" data-hi="{{item.hi}}" bindtap="tapName" wx:for="{{list}}" wx:item="{{item}}"> Click me! </view>
```

需要：`var hi = event.currentTarget.dataset.hi;`

target 触发事件的源组件。
currentTarget 事件绑定的当前组件。

[微信小程序_bindtap获取不到参数_data-hi-CSDN博客](https://blog.csdn.net/weixin_39646711/article/details/105044389)

[微信小程序（五）bindtap事件传递当前循环到的对象_微信小程序 循环点击传值传对象_jonssonyan的博客-CSDN博客](https://blog.csdn.net/y1534414425/article/details/116505912)

[小程序（十一）小程序bindtap传参_小程序 bindtap 传参-CSDN博客](https://blog.csdn.net/qq_39708228/article/details/108886600)

## view hidden属性使用示例

但没有 show  属性

```
<view hidden="{{!statusTag}}">我出来了~</view>
```

### wx:if vs hidden

因为 wx:if 之中的模板也可能包含数据绑定，所以当 wx:if 的条件值切换时，框架有一个局部渲染的过程，因为它会确保条件块在切换时销毁或重新渲染。
同时 wx:if 也是惰性的，如果在初始渲染条件为 false，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。
相比之下，hidden 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏。
一般来说，wx:if 有更高的切换消耗而 hidden 有更高的初始渲染消耗。因此，如果需要频繁切换的情景下，用 hidden 更好，如果在运行时条件不大可能改变则 wx:if 较好。

[【hidden】微信小程序hidden属性使用示例_微信小程序hidden的用法-CSDN博客](https://blog.csdn.net/weixin_44691513/article/details/113885463)

[微信小程序小知识-hidden隐藏显示 - 知乎](https://zhuanlan.zhihu.com/p/97589592)

### 应用示例

echarts层级太高，遮挡van-popup弹框组件

微信小程序：echarts层级太高，遮挡van-popup弹框组件

1、使用hidden

注意，不能直接加在组件上，需要外层包裹一个view

```html
<view hidden="{{hiddenChart}}">

    <echart></echart> 
</view>
```

[微信小程序：echarts层级太高，遮挡van-popup弹框组件_van-popup弹窗被van-circle遮挡_彭世瑜的博客-CSDN博客](https://blog.csdn.net/mouday/article/details/121626561)

## 微信小程序原生和VantUI都没有找到table表格组件

？？？

## 小程序下拉刷新、加载更多及数据分页

[小程序下拉刷新、加载更多及数据分页 - 掘金](https://juejin.cn/post/7222855604406796346)

[微信小程序开发--上拉加载更多(分页加载) - 掘金](https://juejin.cn/post/7029497008993861663)


## 在微信小程序中使用 ECharts

echarts来自BAT中的B前端团队，对应的小程序版本为：echarts-for-weixin

echarts-for-weixin 项目提供了一个小程序组件，用这种方式可以方便地使用 ECharts。

[微信小程序 - 跨平台方案 - 应用篇 - Handbook - Apache ECharts](https://echarts.apache.org/handbook/zh/how-to/cross-platform/wechat-app/)

[ecomfe/echarts-for-weixin: Apache ECharts 的微信小程序版本](https://github.com/ecomfe/echarts-for-weixin)

### 示例

[echarts-for-weixin/pages/line/index.js at master · ecomfe/echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin/blob/master/pages/line/index.js)

[apache/echarts-examples: Examples of Apache ECharts](https://github.com/apache/echarts-examples)

[Documentation - Apache ECharts](https://echarts.apache.org/zh/option.html#series-line)

### 其他参考

[Echarts 在 Vue 中的最佳实践 - 掘金](https://juejin.cn/post/7208445726905303101)

[散点图](https://v-charts.js.org/#/scatter)

[ElemeFE/v-charts: 基于 Vue2.0 和 ECharts 封装的图表组件📈📊](https://github.com/ElemeFE/v-charts)

[xiaolin3303/wx-charts: 微信小程序图表charts组件，Charts for WeChat Mini Program](https://github.com/xiaolin3303/wx-charts/tree/master)

### 语雀，支付宝匠心打造的在线文档平台

[AntV | 蚂蚁数据可视化](https://antv.antgroup.com/)

## 报错：未找到 van-toast 节点，请确认 selector 及 context 是否正确

需要在wxml中添加标签

```
<van-toast id="van-toast" />标签
```

传入context: this即可。

```
Toast({message: 'xxxx', context: this});
```

[未找到 van-toast 节点，请确认 selector 及 context 是否正确-CSDN博客](https://blog.csdn.net/interestANd/article/details/123072568)

## vant Weapp中 Cell单元格修改样式

- van-cell 组件，van-cell__title和van-cell__value的宽度无法修改

添加custom-class和!important

[vant Weapp中 Cell单元格修改样式_孤独的马铃薯的博客-CSDN博客](https://blog.csdn.net/qq_41168765/article/details/130022359)

[Vant cell 自定义title和value宽度(van-cell宽度问题) - 掘金](https://juejin.cn/post/7086274819695575071)

## 更新已有icomoon图标

须要本地icomoon文件夹中的selection .json文件。

[个人笔记|前端项目中icomoon图标使用 - 简书](https://www.jianshu.com/p/527c0f82a572)

[IcoMoon App - Icon Font, SVG, PDF & PNG Generator](https://icomoon.io/app/#/select)

[Online @font-face generator — Transfonter](https://transfonter.org/)

### 其他参考

[字体图标库——icomoon的详细使用教程 - 掘金](https://juejin.cn/post/7017695705221300254)

[IcoMoon | 强悍的 WEB 字体图标制造器 | Boss设计](https://www.bossdesign.cn/icomoon/)

[让微信小程序使用base64字体图标icomoon - 简书](https://www.jianshu.com/p/f14cbab75635)

## 微信小程序this.setData不渲染问题

[关于微信小程序this.setData不渲染问题_蛋蛋糊涂的博客-CSDN博客](https://blog.csdn.net/qq_19999205/article/details/119062728)


