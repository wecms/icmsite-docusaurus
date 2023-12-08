# Cheatsheet

## app-energy-go

项目: app-energy-go

目录： `\\wsl$\Ubuntu-20.04\srv\app-energy-go`

### Windows 终端 Terminal

批量打开 Hyperf Terminal

```cmd
wt -p "APP-Farm+System"; split-pane -V  -p "APP-Farm+System"; new-tab -p "Service-Acl+Auth"; split-pane -V  -p "Service-Acl+Auth" ; new-tab -p "Service-Broadcast+Device"; split-pane -V  -p "Service-Broadcast+Device"; new-tab -p "Service-DeviceReciever+Group"; split-pane -V  -p "Service-DeviceReciever+Group"; new-tab -p "Service-Notice+Report"; split-pane -V  -p "Service-Notice+Report"; new-tab -p "Service-Trigger+Weather"; split-pane -V  -p "Service-Trigger+Weather"; new-tab -p "Service-Simdata+common"; split-pane -V  -p "Service-Simdata+common"; new-tab  -p "Ubuntu-20.04" --title Ubuntu-20.04
```

批量打开 Go-Zero Terminal

```cmd
wt -p "Usercenter"; split-pane -V  -p "Usercenter"; new-tab -p "Sms"; split-pane -V  -p "Sms" ;  new-tab -p "Device"; split-pane -V  -p "Device" ; new-tab -p "GoGroup"; split-pane -V  -p "GoGroup"; new-tab -p "GoTrigger"; split-pane -V  -p "GoTrigger";new-tab -p "GoStats"; split-pane -V  -p "GoStats";new-tab -p "GoCtrl"; split-pane -V  -p "GoCtrl"; new-tab -p "Ubuntu-20.04"; split-pane -V  -p "Ubuntu-20.04" --title Ubuntu-20.04
```

### 启动Nginx和PHP-FPM

```bash
/srv/http# service nginx start

/srv/http# service php7.4-fpm start
```

### 启动启动微服务

Hyperf

```sh
cd app-farm && php bin/hyperf.php server:watch
cd app-system && php bin/hyperf.php server:watch

cd service-acl && php bin/hyperf.php server:watch
cd service-auth && php bin/hyperf.php server:watch

cd service-broadcast && php bin/hyperf.php server:watch
cd service-device && php bin/hyperf.php server:watch

cd service-device-reciever && php bin/hyperf.php server:watch
cd service-group && php bin/hyperf.php server:watch

cd service-notice && php bin/hyperf.php server:watch
cd service-report && php bin/hyperf.php server:watch

cd service-trigger && php bin/hyperf.php server:watch
cd service-weather && php bin/hyperf.php server:watch
 
cd service-simdata && php bin/hyperf.php server:watch
cd service-common && php bin/hyperf.php server:watch
```

Go-Zero app-energy-go

```
$ cd rpc && air
$ cd api && air
```

### 我旧平台api和rpc生成

```bash
# service/device/api 目录下执行
goctl api go -api *.api -dir ./  --style=goZero  // 后期可以考虑可以加 --home ./tpl

# service/device/rpc/pb 目录下执行
goctl rpc protoc *.proto --go_out=../ --go-grpc_out=../  --zrpc_out=../ --style=goZero  // 后期可以考虑加 --home ./tpl
```

### 旧平台 自动Docker打包并推送

```
$ cd /srv/app-energy-go // 进入到项目根目录
$ make push-latest name=usercenter-rpc // 只推送

$ make push app=device/api name=device-api // 打包并只推送

$ make push app=device/rpc name=device-rpc // 打包并只推送

$ make push app=stats/rpc name=stats-rpc
$ make push app=stats/api name=stats-api
```

### 生成模型　Model

```bash title="生成模型"
goctl14 model mysql ddl -src="./service/device/model/groups.sql" -dir="./service/device/model" -style=goZero -c --home=.goctl
goctl14 model mysql ddl -src="./service/device/model/virtual_device_group.sql" -dir="./service/device/model" -style=goZero -c --home=.goctl
```

这里有几个关键参数

1. goctl版本是14(最早使用Go-Zero时用的goctl13，后来升级到了14)
2. 在 `app-energy-go` 项目根目录下执行
3. 参数 `-c` 带缓存
4. `--home=.goctl` 生成模板目录


### 编译打包和Docker Image Push

```bash
$ cd /srv/app-energy-go

$ make push-latest name=usercenter-rpc # 只推送

$ make push app=device/api name=device-api # 编译并推送

$ make push app=device/rpc name=device-rpc # 编译并推送
```

遇到问题：

```
=> ERROR [builder 1/9] FROM docker.io/library/golang:alpine@sha256:7839c9f01b5502d7cb5198b2c  132.1s
...
 > [builder 1/9] FROM docker.io/library/golang:alpine@sha256:7839c9f01b5502d7cb5198b2c032857023424470b3e31ae46a8261ffca72912a:
------
failed commit on ref "layer-sha256:31e352740f534f9ad170f75378a84fe453d6156e40700b882d737a8f4a6988a3"
```

问AI说：

这个错误提示是在使用 Docker 构建过程中遇到的问题。具体来说，这个错误指示在构建过程的第一个步骤中，从 docker.io/library/golang 镜像获取失败。

这个错误可能有以下几个原因：

1. 网络连接问题：构建过程无法连接到 docker.io 服务器来获取所需的镜像。请确保你的网络连接正常，可以尝试重新运行构建命令。

2. 镜像不存在：docker.io/library/golang 镜像可能不存在或被移除。你可以在 Docker Hub 或其他镜像仓库中验证该镜像是否可用。

. 访问权限问题：你可能没有足够的权限来访问 docker.io/library/golang 镜像。检查你的 Docker 配置，确保你有适当的访问权限。

解决这个问题的方法可能包括：

确保你的网络连接正常，能够访问 docker.io。

验证 docker.io/library/golang 镜像是否存在和可用。

如果你在构建过程中使用了自定义的镜像源，确保配置正确。

如果问题仍然存在，可以尝试使用其他可用的镜像源或本地镜像。

我的是网络连接问题，`ping docker.io` 不通。

```
vim /etc/hosts

34.205.13.154   registry-1.docker.io
```

保存，解决了。

1. [Docker拉取镜像时错误解决办法 - WaterStream - 博客园](https://www.cnblogs.com/ws0316/p/12066454.html)
2. [域名解析查询 | DNS查询 | IPv6解析 | 在线dig | IP查询(ipw.cn)](https://ipw.cn/dns/)

## html-energy 打包编译 

```
PS D:\Hostv\html-energy> nvm ls

    18.16.0
  * 16.20.0 (Currently using 64-bit executable)
    14.19.1
PS D:\Hostv\html-energy> npm run build:prod
```

ZD上传目录：`~/docker-compose/local-nginx/http`

## App-System前端项目

启动：

```
npx quasar dev
```

## app-iot-3

### 生成模型

使用的PostgresSQL数据库

```
$ ./goctl-linux model pg datasource --url="postgresql://iot:123123@192.168.0.96:5432/iot?sslmode=disable" --table="*" -dir "./module/internal/model/" -c -home ./template/

goctl15 model pg datasource --url="postgresql://iot:123123@192.168.0.96:5432/iot?sslmode=disable" --table="*" -dir "./module/internal/model/" -c 
goctl15 model pg datasource --url="postgresql://iot:123123@192.168.0.96:5432/iot?sslmode=disable" --table="*" -dir "./module/internal/model/" -c 
-home ./template/1.5.3

goctl15 model pg datasource --url="postgresql://iot:123123@192.168.0.96:5432/iot?sslmode=disable" --table="auth_module" -dir "./module/internal/model/" -c -home ./template/

goctl15 model pg datasource --url="postgresql://iot:123123@192.168.0.96:5432/iot?sslmode=disable" --table="casbin_rule" -dir "./module/internal/model/" -c -home ./template/

goctl15 model pg datasource --url="postgresql://iot:123123@192.168.0.96:5432/iot?sslmode=disable" --table="app_user" -dir "./module/internal/model/" -c -home ./template/

```

### 生成Logic

修改了`*.api`文件以后，这个需要生成，因为应用中比如这个`app/system/internal/types/types.go`需要。

```bash
# 系统后台
goctl15 api go -api ./app/system/apifile/main.api -dir ./app/system/ -style gozero -home ./template

# 智慧能源
goctl15 api go -api ./app/smartenergy/apifile/main.api -dir ./app/smartenergy/ -style gozero -home ./template
```

### 生成TS

```bash
$ chmod +x ./goctl-linux
$	./goctl-linux api ts -api ./app/system/apifile/main.api -dir ./app/system/ts -unwrap true
```

```bash
$ chmod +x ./goctl-linux
$	./goctl-linux api ts -api ./app/smartenergy/apifile/main.api -dir ./app/smartenergy/ts -unwrap true
```

### 生成仓库代码

```
$ chmod +x genrepo
$ ./genrepo
```

```
root@DESKTOP-TCU7QHA:/srv/app-iot-3# ./genrepo
./module/internal/model/iot.sql
缺少模型sql文件参数 这里须先转储casbin_rule单张表到./module/internal/model/iot.sql 可以单张表命名为iot.sql即可
root@DESKTOP-TCU7QHA:/srv/app-iot-3# ./genrepo
./module/internal/model/iot.sql
casbin_rule
upperModelName ==  CasbinRule
生成casbin_rulecus
```

## 新系统一些重构指令

goctl-linux  1.5.4

goctl15 1.5.3

```
goctl15 api go -api ./app/system/apifile/main.api -dir ./app/system/ -style gozero -home ./template
./goctl-linux api go -api ./app/system/apifile/main.api -dir ./app/system/ -style gozero -home ./template
```

## 定制生成ts

ts:

```bash
$	./goctl-linux api ts -api ./app/system/apifile/main.api -dir ./app/system/ts -unwrap true
```

或者使用make命令

```
make ts APP=system
```

每次启动项目前都要执行一下：

```
export GOROOT=/root/sdk/go1.19
```

## app-iot-goctl 定制开发

```bash title="\srv\app-iot-goctl\Makefile" showLineNumbers
linux:
	CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o goctl-linux goctl.go
	$(if $(shell command -v upx), upx goctl-linux)
```

`$(shell command -v ...)`  `$(if ...)`函数用于进行条件判断。在你提供的示例中，`$(if $(shell command -v ...)`的意思是判断一个命令是否存在。

在大多数Linux发行版中，你可以通过包管理器来安装upx。例如，在Ubuntu上，你可以使用以下命令来安装：

```
apt-get install upx
```

## 新平台后端编译打包并推送

生产服生成json

```
./goctl-linux-p api perm --api ./app/smartenergy/apifile/main.api --o ./app/smartenergy/permission -app e1ace6bab92f27acc26b9d1d840fa8b3
```

1. 后端接口

```bash
make build-app APP=system

make build-app APP=smartenergy
```

然后手动打开Portainer拉取新的Docker Image重建一下Docker Container即可。

2. 系统管理后台前端

```bash
quasar build

// 删除再拷贝disk目录编译好的文件
//rm -rf ./gitignore/*/*
//cp -r ./dist/spa/* ./gitignore/*/

// 推送到GIT仓库 参考手动
//cd ./gitignore/*/ && git add . && git commit -m "update" && git push

// 推送打包好的文件到build分支   参考手动
//cd ./gitignore/*/ && git tag $(VERSION) && git push origin $(VERSION)


// 只要这样操作
1. quasar build
2. 须要切换到`gitignore/app-system`目录下,删除再拷贝disk目录编译好的文件
3. 使用git bash here shell, git add . && git commit -m "update" && git push
4. VERSION=$(date +"%y.%-m.%-d.%H%M%S") && git tag $VERSION && git push origin $VERSION


// 然后到https://cd.yztiot.com/web/app-system/105部署
```

3. 应用后台前端项目打包

类似上面的步骤

```
quasar build
// 删除`gitignore`再拷贝`disk`目录编译好的文件

// 切换到`gitignore/app-system`目录下
VERSION=$(date +"%y.%-m.%-d.%H%M%S")
git tag $VERSION && git push origin $VERSION

// 然后到https://cd.yztiot.com/web/app-system/105部署
```