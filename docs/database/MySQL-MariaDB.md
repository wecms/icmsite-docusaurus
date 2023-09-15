# MySQL MariaDB

## 怎么建立索引

Normal 普通索引

表示普通索引，大多数情况下都可以使用

Unique 唯一索引

表示唯一的，不允许重复的索引，如果该字段信息保证不会重复例如身份证号用作索引时，可设置为unique

约束唯一标识数据库表中的每一条记录，即在单表中不能用每条记录是唯一的（例如身份证就是唯一的），Unique(要求列唯一)和Primary Key(primary key = unique + not null 列唯一)约束均为列或列集合中提供了唯一性的保证，Primary Key是拥有自动定义的Unique约束，但是每个表中可以有多个Unique约束，但是只能有一个Primary Key约束。
mysql中创建Unique约束

Full Text 全文索引

表示全文收索，在检索长文本的时候，效果最好，短文本建议使用Index,但是在检索的时候数据量比较大的时候，现将数据放入一个没有全局索引的表中，然后在用Create Index创建的Full Text索引，要比先为一张表建立Full Text然后在写入数据要快的很多

FULLTEXT 用于搜索很长一篇文章的时候，效果最好。用在比较短的文本，如果就一两行字的，普通的 INDEX 也可以。

SPATIAL 空间索引

空间索引是对空间数据类型的字段建立的索引，MYSQL中的空间数据类型有4种，分别是GEOMETRY、POINT、LINESTRING、POLYGON。MYSQL使用SPATIAL关键字进行扩展，使得能够用于创建正规索引类型的语法创建空间索引。创建空间索引的列，必须将其声明为NOT NULL，空间索引只能在存储引擎为MYISAM的表中创建

btree索引和hash索引的区别

1、BTREE（B树（可以是多叉树）） {主流使用}
2、HASH（key,value） 这种方式对范围查询支持得不是很好

- 索引  FULLTEXT  NORMAL  SPATIAL  UNIQUE
- 索引 BTREE HASH RTREE

### 参考文献

[MySQL/MariaDB数据库的索引工作原理和优化 - 尹正杰 - 博客园](https://www.cnblogs.com/yinzhengjie/p/11762653.html)

[MYSQL索引类型：FULLTEXT、NORMAL、SPATIAL、UNIQUE_索引spatial_是誰萆微了承諾的博客-CSDN博客](https://blog.csdn.net/weixin_44779466/article/details/117709146)

[MySql下大数据量级别（1000万+）优化查询和操作方法_mysql数量级别_caox_nazi的博客-CSDN博客](https://blog.csdn.net/caox_nazi/article/details/88853008)

[处理亿级数据的“定时任务”，如何缩短执行时间？-阿里云开发者社区](https://developer.aliyun.com/article/743951)

[15 个有用的 MySQL/MariaDB 性能调整和优化技巧 - da0h1 - 博客园](https://www.cnblogs.com/dh17/p/14484423.html)

[MariaDB 10.9 中文](https://runebook.dev/zh/docs/mariadb/-index-#%E4%BC%98%E5%8C%96%E5%92%8C%E8%B0%83%E6%95%B4)

[Mysql索引数据类型：HASH，BTREE，RTREE。_mysql 索引 btree rtree hash_峰之流觞的博客-CSDN博客](https://blog.csdn.net/koli6678/article/details/79915404)

## MySQL 子查询(IN)

```sql
select SUM(`sum_value`) as `data_value`, `report_date_day` as `data_time` from `device_sensor_data_hourly` where (`function_key_value` = '3-29') and `report_date_day` between 20230801 and 20230808 group by `data_time`
```

[MySQL(七)---子查询(IN)_子查询 in 抽离写法_加大爷的博客-CSDN博客](https://blog.csdn.net/jj1995/article/details/104009058)

## 查询LOG

```sql
set @device_sensor_id:=160;
set @device_property_id:=5576;

SELECT function_key_value FROM `sh-iot`.`device_sensor_specs` WHERE `device_sensor_id` = @device_sensor_id AND `group` = '内机6数据' AND `function_name` = '开关机' LIMIT 1 INTO @function_key_value_kaiguan;
SELECT function_key_value FROM `sh-iot`.`device_sensor_specs` WHERE `device_sensor_id` = @device_sensor_id AND `group` = '内机6数据' AND `function_name` = '运行模式设定' LIMIT 1 INTO @function_key_value_moshi;
SELECT function_key_value FROM `sh-iot`.`device_sensor_specs` WHERE `device_sensor_id` = @device_sensor_id AND `group` = '内机6数据' AND `function_name` = '温度' LIMIT 1 INTO @function_key_value_wendu;
SELECT function_key_value FROM `sh-iot`.`device_sensor_specs` WHERE `device_sensor_id` = @device_sensor_id AND `group` = '内机6数据' AND `function_name` = '风速' LIMIT 1 INTO @function_key_value_fengsu;

INSERT INTO `sh-iot`.`virtual_device_data` (`virtual_device_id`, `device_id`, `device_property_id`, `device_sensor_id`, `function_key_value`, `name`, `created_at`, `updated_at`) VALUES (@virtual_device_id, @device_id, @device_property_id, @device_sensor_id, @function_key_value_kaiguan, '开关', NOW(), NOW());

INSERT INTO `sh-iot`.`virtual_device_data` (`virtual_device_id`, `device_id`, `device_property_id`, `device_sensor_id`, `function_key_value`, `name`, `created_at`, `updated_at`) VALUES (@virtual_device_id, @device_id, @device_property_id, @device_sensor_id, @function_key_value_moshi, '模式', NOW(), NOW());

INSERT INTO `sh-iot`.`virtual_device_data` (`virtual_device_id`, `device_id`, `device_property_id`, `device_sensor_id`, `function_key_value`, `name`, `created_at`, `updated_at`) VALUES (@virtual_device_id, @device_id, @device_property_id, @device_sensor_id, @function_key_value_wendu, '温度', NOW(), NOW());

INSERT INTO `sh-iot`.`virtual_device_data` (`virtual_device_id`, `device_id`, `device_property_id`, `device_sensor_id`, `function_key_value`, `name`, `created_at`, `updated_at`) VALUES (@virtual_device_id, @device_id, @device_property_id, @device_sensor_id, @function_key_value_fengsu, '风速', NOW(), NOW());
```
