# PHP Issue

## strtotime(2023080801)的坑

经测试，我的PHP7.4环境中，strtotime(2023080801)返回false，无法解析

```php
$data_time = strtotime("2023080801"); // 也不行

$data_time = Carbon::make(2023080801)->startOfHour()->toDateTimeString(); // 也不行 Could not parse '2023080801'

$data_time = Carbon::make(2023080801 . "0000")->startOfHour()->toDateTimeString(); // 补全后可以了
```

### 参考文献

1. [PHP: strtotime - Manual](https://www.php.net/manual/zh/function.strtotime.php)
2. [PHP中strtotime函数的坑_php strtotime 坑_笑笑堂主的博客-CSDN博客](https://blog.csdn.net/bianxiaoxm/article/details/115898649)
3. [strtotime()函数可以用来判断是否是日期类型_杨鲜生的博客-CSDN博客](https://blog.csdn.net/u013252047/article/details/97151955)
4. [关于strtotime函数不为人知的使用方法_青野月音的博客-CSDN博客](https://blog.csdn.net/GlatChen/article/details/86711907)

