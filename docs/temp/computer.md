# 电脑组装

## computer

- 攀升 B550  Memory timelock speed
- 主板设置 Memory  timeClock speed

1. [TUF GAMING B550M-PLUS - 规格参数｜主板｜ASUS 中国](https://www.asus.com.cn/motherboards-components/motherboards/tuf-gaming/tuf-gaming-b550m-plus/techspec/)

## 内存时钟频率

[内存 核心频率、时钟频率、数据传输率各是什么？有什么区别？高手请进_百度知道](https://zhidao.baidu.com/question/124235267.html)

[内存的实际工作频率到底和什么有关？什么是标称频率？一文读懂内存频率 - 知乎](https://zhuanlan.zhihu.com/p/342995382)

[捋一捋DDR内存相关的各种频率_传输速率266mt_跑来跑去的修理工的博客-CSDN博客](https://blog.csdn.net/dl_wrh/article/details/105019095)

## 梵想（FANXIANG）

梵想（FANXIANG） 固态硬盘 低端

致态 固态硬盘 高端

长江存储 凯凡

[梵想是什么品牌？是杂牌吗？他们的硬盘怎么样？ - 知乎](https://www.zhihu.com/question/340118959)

[梵想 FANXIANG | SSD 固態硬碟、移動式固態硬碟、隨身碟、各式手機隨身碟、記憶卡等存儲類產品](https://www.fanxiangusb.com/)

##  x86 x64 Arm64 关系

amd64是X86架构的CPU，64位版。amd64又叫X86_64。主流的桌面PC，笔记本电脑，服务器（包括虚拟机）都在用X86_64的CPU。

arm64是ARM架构的CPU，64位版。苹果新出的电脑在用ARM架构的CPU。有些路由器和嵌入式设备在用arm64的CPU。手机和安卓平板电脑最常用的CPU也是ARM架构的。

MIPS是MIPS架构的CPU。有些嵌入式设备和家用路由器在用MIPS架构的CPU。

### X86 ARM 处理器

X86 和 ARM 都是CPU设计的一个架构。

X86 用的是复杂指令集。

ARM用的是精简指令集。

指令集其实就是机器码，机器码上是汇编，汇编之上是C++。

复杂指令集是在硬件层面上设计了很多指令，所以编程会复杂些。

精简指令集是在硬件层面上设计的指令比较少，所以编程会简单些。

除了指令集的区别，X86 和 ARM的设计理念和应用场景也不同。

ARM的硬件框架更加耦合，没有’桥‘的存在，所以可扩展性不好，也就是说换个硬件平台就得重新设计，但它的功耗低，所以特别适合在手机上用。

X86体系庞大，设计完整，历史悠久，所以他有很多第三方软件可以用，一个体系可以用在各种电脑上，可移植性强。主机一般都用它。

Intel是在X86的推动着，他和windows在一起，可以说称雄电脑市场。ARM以前和linux结盟，搞嵌入式，但现在因为，Android的异军突起，ARM在移动端焕发新的生机。

AMD和Intel是两家公司，AMD卖CPU,GPU,主板等各种芯片。就是卖芯片和卖显卡的。Ryzen是它卖的。

Intel也是CPU，显卡，芯片什么都卖，但它主要还是CPU强一些。

至于高通，Nivida,Apple，联发科，大家都是芯片（集成电路）行业的小伙伴，也各种卖，各种竞争。

[Intel和AMD 与 x86，ARM，MIPS有什么区别？ - 知乎](https://www.zhihu.com/question/63627218)

[计算机CPU之CISC、RISC、x86、IA32、x86-64、IA64、ARM - 知乎](https://zhuanlan.zhihu.com/p/375053912)


其他参考

[x86,amd64,x86-64,x64区别_x64和下6-CSDN博客](https://blog.csdn.net/kathlon/article/details/83117591)

### x64 处理器

时间来到1999年，Intel 向世界宣布了它全新的 64bit 处理器安腾，其使用的架构被命名为 IA-64。不过由于 Intel 过于激进，IA-64 架构并不兼容 x86 处理器，也就是原先众多运行在 x86 处理器上的 32bit 软件，完全不能运行在 IA-64 处理器上。这种不兼容问题，很快让 Intel 遭遇了滑铁卢，基于 IA-64 架构的安腾处理器并未得到市场的广泛认可。

就在 Intel 宣布安腾处理器的第二天，AMD 公司也向世界公布了自己全新的 64bit 处理器架构 AMD64。AMD64 架构可以看成是 x86 架构的扩展，完全向下兼容 x86 处理器，得到了市场的强烈反响。Intel 眼见大事不妙，赶忙调整了技术方向，放弃了之前的 IA-64 架构，采用了几乎与 AMD64 完全一样的技术方案，实现了自己的兼容 x86 处理器的 64bit 架构。不过为了面子，Intel 一开始将自己的 64bit 架构命令为 EM64T，后来又改为 IA-32e，再后来又改为 Intel64，总之就是只字不提 AMD 三个字。

由于 Intel 和 AMD 64bit 处理器都是遵循同样的架构，因此它们被统一被称为 x64 处理器。

[一文搞懂 x64 IA-64 AMD64 Inte64 IA-32e 架构之间的关系 - chaoguo1234 - 博客园](https://www.cnblogs.com/chaoguo1234/p/17368572.html)

### ARM 64 处理器

低于Arm8架构的都是32位处理器。

2012年10月，ARM公司发布了第一款基于64位架构的处理器核心“Cortex-A50”系列

首次实现ARM64的ARMv8-A架构在功能和性能上都有着32位ARM（ARMv7及更早）无可比拟的优势，同时ARMv8完全兼容32位的ARMv7。

[ARM64介绍](https://forum.huawei.com/enterprise/zh/thread/580930977809711104)

[armv7l 32 Bit or 64 Bit - 知乎](https://zhuanlan.zhihu.com/p/548802383)

**ARM市场占有**

目前为止，智能手机处理器前十大厂商已经全部购买ARM64授权，并且Intel开始代工生产ARM64芯片。可以预见，未来的智能终端一定是ARM64的天下。

在今日，ARM家族占了所有32位嵌入式处理器75%的比例，使它成为占全世界最多数的32位架构之一。ARM处理器可以在很多消费性电子产品上看到，从可携式装置（PDA、移动电话、多媒体播放器、掌上型电子游戏，和计算机）到电脑外设（硬盘、桌上型路由器）甚至在导弹的弹载计算机等军用设施中都有他的存在。

[一文看懂arm架构和x86架构有什么区别 - 知乎](https://zhuanlan.zhihu.com/p/95028674)

[一文看懂arm架构和x86架构有什么区别-电子发烧友网](https://m.elecfans.com/article/678193.html)
