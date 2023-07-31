# Cheatsheet

## app-energy-go

项目: app-energy-go

目录： `\\wsl$\Ubuntu-20.04\srv\app-energy-go`

### Windows 终端 Terminal

```cmd
wt -p "APP-Farm+System"; split-pane -V  -p "APP-Farm+System"; new-tab -p "Service-Acl+Auth"; split-pane -V  -p "Service-Acl+Auth" ; new-tab -p "Service-Broadcast+Device"; split-pane -V  -p "Service-Broadcast+Device"; new-tab -p "Service-DeviceReciever+Group"; split-pane -V  -p "Service-DeviceReciever+Group"; new-tab -p "Service-Notice+Report"; split-pane -V  -p "Service-Notice+Report"; new-tab -p "Service-Trigger+Weather"; split-pane -V  -p "Service-Trigger+Weather"; new-tab -p "Service-Simdata+common"; split-pane -V  -p "Service-Simdata+common"; new-tab  -p "Ubuntu-20.04" --title Ubuntu-20.04


wt -p "Usercenter"; split-pane -V  -p "Usercenter"; new-tab -p "Sms"; split-pane -V  -p "Sms" ;  new-tab -p "Device"; split-pane -V  -p "Device" ; new-tab -p "GoGroup"; split-pane -V  -p "GoGroup"; new-tab -p "GoTrigger"; split-pane -V  -p "GoTrigger";new-tab -p "GoStats"; split-pane -V  -p "GoStats";new-tab -p "GoCtrl"; split-pane -V  -p "GoCtrl"; new-tab -p "Ubuntu-20.04"; split-pane -V  -p "Ubuntu-20.04" --title Ubuntu-20.04
```

### 启动Nginx和PHP-FPM

```bash
/srv/http# service nginx start

/srv/http# service php7.4-fpm start
```

### 启动app-energy-go

Go-Zero

```
$ cd rpc && air
$ cd api && air
```

### api和rpc生成

```bash
# service/device/api 目录下执行
goctl api go -api *.api -dir ./  --style=goZero  // 后期可以考虑可以加 --home ./tpl

# service/device/rpc/pb 目录下执行
goctl rpc protoc *.proto --go_out=../ --go-grpc_out=../  --zrpc_out=../ --style=goZero  // 后期可以考虑加 --home ./tpl
```

### 编译打包和Docker Image Push

```bash
$ cd /srv/app-energy-go

$ make push-latest name=usercenter-rpc # 只推送

$ make push app=device/api name=device-api # 编译并推送

$ make push app=device/rpc name=device-rpc # 编译并推送
```