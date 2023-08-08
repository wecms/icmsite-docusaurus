# Database

本地连接都是相对于根目录说的，另外注意目录路由和区分大小写的：

比如当前目录下，这样的链接会在线上部署时报错

```md
[MySQL-MariaDB](./temp/MySQL-MariaDB)
```

```bash
Please check the pages of your site in the list below, and make sure you don't reference any path that does not exist.
Note: it's possible to ignore broken links with the 'onBrokenLinks' Docusaurus configuration, and let the build pass.

Exhaustive list of all broken links found:

- On source page path = /docs/database:
   -> linking to ./temp/MySQL-MariaDB (resolved as: /docs/temp/MySQL-MariaDB)

    at throwError (/home/runner/work/icmsite-docusaurus/icmsite-docusaurus/node_modules/@docusaurus/logger/lib/index.js:76:11)
```

像下种图片路径错误、或者找不到图片的也会编译更新失败：

```bash
Error:  Client bundle compiled with errors therefore further build is impossible.
Error: Image docs/tools/img/windows10-system-input-method-3.jpg used in docs/tools/windows10.md not found.
    at async Promise.all (index 2)
Error: Process completed with exit code 1.
```

只有修改正确的路径后，才能编译通过。

```
[MySQL-MariaDB](./database/MySQL-MariaDB)
```

有这个错误检查，很好！

正确的链接：

[MySQL-MariaDB](./database/MySQL-MariaDB)

