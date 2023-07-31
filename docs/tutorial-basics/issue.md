# Issue

## Error: Docusaurus found broken links

```
Error:  Unable to build website for locale en.
Error:  Error: Docusaurus found broken links!

[INFO] Docusaurus version: 2.4.1
Please check the pages of your site in the list below, and make sure you don't reference any path that does not exist.
Node version: v16.20.1
Note: it's possible to ignore broken links with the 'onBrokenLinks' Docusaurus configuration, and let the build pass.

Exhaustive list of all broken links found:

- On source page path = /docs/yuanzhong:
   -> linking to ./temp/cheatsheet (resolved as: /docs/temp/cheatsheet)
```

根据这里的关键信息：

```
- On source page path = /docs/yuanzhong:
   -> linking to ./temp/cheatsheet (resolved as: /docs/temp/cheatsheet)
```

知道 `/docs/yuanzhong` 路由下面 `readme.md` 中的 `./temp/cheatsheet` 连接有问题。


```md
[常用命令](./temp/cheatsheet)
```

报错是因为没有上述连接，修正为：

```md
[常用命令](./yuanzhong/cheatsheet)
```