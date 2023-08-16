# Golang

## Go语言GOPROXY设置

不同系统设置方式有不同的吗？还不一样？

```bash
go env -w GOPROXY=https://代理地址
```

[Go语言GOPROXY设置_深漂小码哥的博客-CSDN博客](https://blog.csdn.net/qq2942713658/article/details/112915326)
[GOLand设置报错warning: go env -w GOPROXY=... does not override conflicting OS environm_Amazing_deron的博客-CSDN博客](https://blog.csdn.net/Deronn/article/details/108362982)

## go get 安装  verifying module read: connection reset by peer

在安装包的时候出现类似错误，是因为Go env中设置代理的问题，可能是代理服务器网络问题。

[处理 Go 中的 'connection reset by peer' 错误 | lbbniu](https://blog.lbbniu.com/2022/07/28/connection-reset-by-peer/)


```bash
$ GO111MODULE=on go get -u github.com/zeromicro/go-zero/tools/goctl@latest
```

[goctl 安装 | go-zero Documentation](https://go-zero.dev/docs/tasks/installation/goctl)

[Release goctl/v1.5.3 · zeromicro/go-zero](https://github.com/zeromicro/go-zero/releases/tag/tools%2Fgoctl%2Fv1.5.3)

手动下载拷贝到指定 了目录

## .air.toml 文件支持向上级目录监控吗

[air/air_example.toml at master · cosmtrek/air](https://github.com/cosmtrek/air/blob/master/air_example.toml)

[.air.toml 文件在哪里，是要新建根目录下吗 | Go | Go 技术论坛](https://learnku.com/go/t/65077)
[air/README-zh_cn.md at master · cosmtrek/air](https://github.com/cosmtrek/air/blob/master/README-zh_cn.md)

## Go 1.16 中关于 go get 和 go install 

[Go 1.16 中关于 go get 和 go install 你需要注意的地方 - 知乎](https://zhuanlan.zhihu.com/p/338011682)