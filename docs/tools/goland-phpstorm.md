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
