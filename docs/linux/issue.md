# Issue

## centos  安装 sz rz

```
yum -y install lrzszyum -y install lrzsz
```

## 查看Linux是CentOS还是Ubuntu的方法

```
lsb_release -a
```

## linux 压缩文件夹的一部分目录

将a目录(包括子目录)进行压缩，但排除a1目录。

```
tar czvf a.tar.gz  /home/test/a  --exclude=/home/test/a/a1
```

将a目录(包括子目录)进行压缩，多个排除条件。

```
tar czvf a.tar.gz  /home/test/a  --exclude=/home/test/a/a1 --exclude=*.tmp --exclude=/home/test/a/b2
```

选择部分目录进行压缩打包用什么参数呢？

```
tar -czvf archive.tar.gz --include='dir1*' --include='dir2*' source_directory
```
