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

只有修改正确的路径后，才能编译通过。

```
[MySQL-MariaDB](./database/MySQL-MariaDB)
```

有这个错误检查，很好！

正确的链接：

[MySQL-MariaDB](./database/MySQL-MariaDB)

