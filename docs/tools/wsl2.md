# WSL2

## 回收Docker环境中的空间

Docker用久了会残留很多无用的Image。这些Image文件少则几十上百兆，多则几个G，给本就捉襟见肘的磁盘空间造成巨大浪费， 这时可以删掉不需要的Image文件。但你可能愕然发现，即使删掉了好几个Image，磁盘依然没有苗条下来。

这是因为ext4.vhdx磁盘空间会根据加载的数据自动增长，但是无法自动回收。下面是手动回收的步骤。

1、在Windows PowerShell中停止正在运行的Linux子系统。

```cmd
> wsl --shutdown
```

这一步是准备工作

在压缩虚拟磁盘前，需要将 WSL2 先关闭。

可以先使用命令行来检查它的状态：

```cmd
> wsl.exe --list --verbose
```

如果没有关闭（状态是 Running ），再用命令行去关闭它：

```cmd
> wsl.exe --terminate
```

比如我遇到我的Ubuntu-20.04一直处于Running状态，原因是我的Windows PowerShell启动工作目录是Ubuntu-20.04系统中的目录，导致停止不成功，先切换到Windows系统中C盘目录，再次执行`wsl --terminate Ubuntu-20.04`停止成功了。

```cmd
PS Microsoft.PowerShell.Core\FileSystem::\\wsl$\Ubuntu-20.04\srv\http> cd c:/
PS C:\> wsl.exe --list --verbose
  NAME                   STATE           VERSION
* Ubuntu-20.04           Running         2
  docker-desktop-data    Stopped         2
  docker-desktop         Stopped         2
PS C:\> wsl --terminate Ubuntu-20.04
PS C:\> wsl.exe --list --verbose
  NAME                   STATE           VERSION
* Ubuntu-20.04           Stopped         2
  docker-desktop-data    Stopped         2
  docker-desktop         Stopped         2
```

2、运行diskpart释放空间

```cmd
# open window Diskpart
> diskpart
# 选择虚拟机文件执行瘦身
> select vdisk file="D:\WSL\docker-desktop-data\ext4.vhdx"
> attach vdisk readonly
> compact vdisk
> detach vdisk
> exit
```

如果有其他虚拟机文件需要瘦身，按照上述方法重复执行即可。

```
select vdisk file="D:\WSL2\Ubuntu-20.04\ext4.vhdx"
```

遇到问题：

```cmd
DISKPART> attach vdisk readonly

DiskPart 遇到错误: 另一个程序正在使用此文件，进程无法访问。
有关详细信息，请参阅系统事件日志。
```

重新执行了一次：`wsl --shutdown`好了。

```
DISKPART> select vdisk file="D:\WSL2\Ubuntu-20.04\ext4.vhdx"

DiskPart 已成功选择虚拟磁盘文件。

DISKPART> attach vdisk readonly

  100 百分比已完成

DiskPart 已成功连接虚拟磁盘文件。

DISKPART> compact vdisk

  100 百分比已完成

DiskPart 已成功压缩虚拟磁盘文件。
```

## 在WSL2发行版(Ubuntu20.04)上直接安装docker和WSL2+Docker Desktop for Windows有什么不同？

wsl2占用空间太大

docker-desktop-data  占用空间太大

[拯救被WSL占满的C盘 - 知乎](https://zhuanlan.zhihu.com/p/437983382)

[清理WSL2的磁盘占用 - 知乎](https://zhuanlan.zhihu.com/p/614993276)

[Windows10上不使用WSL2 使用docker - 掘金](https://juejin.cn/post/7077190268575252517)

在Windows10环境下使用Docker，Docker Desktop for Windows 必须安装吗

可以不安装Docker Desktop for Windows，直接在WSL中Ubuntu20.04中安装docker可以吗?

先说结论：

直接在 WSL2 发行版（没有 Docker Desktop）中使用 Docker 时兼容性更好。如果您习惯了 Linux 环境，那么在考虑兼容性时，使用不带 Docker Desktop 的 Docker 可能是更好的选择。

我也赞成如此安装。

[Difference between "WSL2+docker desktop windows" and directly install docker on the WSL2 distro? - Stack Overflow](https://stackoverflow.com/questions/61920866/difference-between-wsl2docker-desktop-windows-and-directly-install-docker-on)

[在WSL2发行版上直接安装docker和"WSL2+docker桌面windows“有什么不同？-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/ask/sof/1433210)

### WSL不支持Systemd

但是，有的网友说：

Windows WSL虽然支持通过命令行直接运行Linux系统发行版，但WSL并不支持Systemd，导致Linux系统的Docker无法以后台服务的形式启动。通常的解决办法为安装Docker Desktop，再设置WSL为后端来在Linux下运行Docker，这种方式还是不太方便。

但是，上述说法不完全对：

正确的说法应该是：WLS2下通过`apt install docker-ce`命令安装的docker无法启动。不同于完全linux虚拟机方式，WSL2方式的ubuntu里面没有systemd。但是可以通过官方get-docker.sh安装的docker，dockerd进程是用ubuntu传统的init方式而非systemd启动的。

[如何不安装Docker Desktop在WSL下运行Docker - 知乎](https://zhuanlan.zhihu.com/p/500450853)

[WSL 上的 Docker 容器入门 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-containers#install-docker-desktop)

[安装 WSL | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/install)

### WSL下原生linux安装docker方式

因为wsl2已经完整使用了linux内核了，此种方式和先前在linux虚拟机安装docker类似，步骤如下：

```
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
$ sudo service docker start
```

执行脚本安装过程中，脚本提示“建议使用Docker Desktop for windows”，20s内按Ctrl+C会退出安装，所以需要等待20s，另外此种方式需要访问外网。

检查docker安装正常

```
# 检查dockerd进程启动
service docker status
ps aux|grep docker
# 检查拉取镜像等正常
docker pull busybox
docker images
```

注意：不同于完全linux虚拟机方式，WLS2下通过apt install docker-ce命令安装的docker无法启动，因为WSL2方式的ubuntu里面没有systemd。上述官方get-docker.sh安装的docker，dockerd进程是用ubuntu传统的init方式而非systemd启动的。

[win10利用WSL2安装docker的2种方式 - 知乎](https://zhuanlan.zhihu.com/p/148511634)
