# Goland PHPStorm

## 经常索引慢

![goland-external-file-changes-sync-may-be-slow.jpg](./img/goland-external-file-changes-sync-may-be-slow.jpg)

## PHPStorm语法检查 关闭

![phpstorm-close-phpstan-1.jpg](./img/phpstorm-close-phpstan-1.jpg)

![phpstorm-close-phpstan-2.jpg](./img/phpstorm-close-phpstan-2.jpg)

![phpstorm-close-phpstan-3.jpg](./img/phpstorm-close-phpstan-3.jpg)

## Goland Terminal中的Go Version是怎么变为Go1.19的

WSL Ubuntu系统中安装了两个Go版本，Go1.18和Go1.19两个版本，但是Goland Terminal是怎么默认为Go1.19的？

在使用Go1.19版本开发的系统中，两次遇到：

```
compile: version "go1.18" does not match go tool version "go1.19"
```

第一次记得是清除了Goland缓存重新启动解决的。

第二次是在Goland Terminal中设置了`$GOROOT`环境变量`/root/sdk/go1.19`解决的。

```
compile: version "go1.18" does not match go tool version "go1.19"

$ echo $GOROOT
$ /root/sdk/go1.18
$ export GOROOT=/root/sdk/go1.19
$ echo $GOROOT
$ /root/sdk/go1.19
```

### 参考文献

- Go  多个版本 compile: version  does not match go tool version

1. [go版本匹配错误解决 - 简书](https://www.jianshu.com/p/fa04bcbffcc1)
2. [go 1.15.2升级到 go 1.16.3遇到的问题: version “go1.16.3“ does not match go tool version “go1.15.2“_bkzy的博客-CSDN博客](https://blog.csdn.net/weixin_41621706/article/details/115898144)
3. [go版本匹配错误解决_go tool version_nicoxix的博客-CSDN博客](https://blog.csdn.net/nxb593427560/article/details/82972601)