# Golang 的 “omitempty” 关键字略解

原文载于 https://old-panda.com/2019/12/11/golang-omitempty/

## 用法

熟悉 Golang 的朋友对于 json 和 struct 之间的转换一定不陌生，为了将代码中的结构体与 json 数据解耦，通常我们会在结构体的 field 类型后加上解释说明，例如在表示一个地址的时候， json 数据如下所示

```json
{
    "street": "200 Larkin St",
    "city": "San Francisco",
    "state": "CA",
    "zipcode": "94102"
}
```

与之相对应的 Golang 结构体表示可能是这个样子的

```go
type address struct {
    Street  string `json:"street"`  // 街道
    Ste     string `json:"suite"`   // 单元（可以不存在）
    City    string `json:"city"`    // 城市
    State   string `json:"state"`   // 州/省
    Zipcode string `json:"zipcode"` // 邮编
}
```

这样无论代码中的变量如何改变，我们都能成功将 json 数据解析出来，获得正确的街道，城市等信息，到目前为止一切正常。但如果我们想要将地址结构体恢复成 json 格式时，问题就来了。比方说我们用下面这段代码读取了地址 json ，然后根据业务逻辑处理了之后恢复成正常的 json 打印出来

```go
func main() {
        data := `{
        "street": "200 Larkin St",
        "city": "San Francisco",
        "state": "CA",
        "zipcode": "94102"
    }`
    addr := new(address)
    json.Unmarshal([]byte(data), &addr)

        // 处理了一番 addr 变量...

    addressBytes, _ := json.MarshalIndent(addr, "", "    ")
    fmt.Printf("%s\n", string(addressBytes))
}
```

这段代码的输出是

```json
{
    "street": "200 Larkin St",
    "suite": "",
    "city": "San Francisco",
    "state": "CA",
    "zipcode": "94102"
}
```

多了一行 "suite": "", ，而这则信息在原本的 json 数据中是没有的（在美国的地址中，如果不是群租公寓或者共享办公楼， suite 这一条不存在很正常，人们直接用街道门牌号来表示地址就足够了），但我们更希望的是，在一个地址有 suite 号码的时候输出，不存在 suite 的时候就不输出，幸运的是，我们可以在 Golang 的结构体定义中添加 omitempty 关键字，来表示这条信息如果没有提供，在序列化成 json 的时候就不要包含其默认值。稍作修改，地址结构体就变成了

```go
type address struct {
    Street  string `json:"street"`
    Ste     string `json:"suite,omitempty"`
    City    string `json:"city"`
    State   string `json:"state"`
    Zipcode string `json:"zipcode"`
}
```

重新运行，即可得到正确的结果。

## 陷阱

带来方便的同时，使用 omitempty 也有些小陷阱，一个是该关键字无法忽略掉嵌套结构体。还是拿地址类型说事，这回我们想要往地址结构体中加一个新 field 来表示经纬度，如果没有缺乏相关的数据，暂时可以忽略。新的 struct 定义如下所示

...