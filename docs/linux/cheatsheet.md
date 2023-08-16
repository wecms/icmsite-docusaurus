# Cheatsheet

## kill 命令

```
$ netstat -aptn|grep 8008
tcp6       0      0 :::8008                 :::*                    LISTEN      25896/main
$ kill 25896
$ netstat -aptn|grep 8008
$ 
```

Linux killall 用于杀死一个进程，与 kill 不同的是它会杀死指定名字的所有进程。

kill 命令杀死指定进程 PID，需要配合 ps 使用，而 killall 直接对进程对名字进行操作，更加方便。

实例

```bash
$ killall -9 php-fpm          //结束所有的 php-fpm 进程
$ killall hello* //批量杀死进程
$ killall -u harry //杀死用户 harry 所运行的所有进程
```