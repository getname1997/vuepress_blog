# sql 练习

## 初始化数据库
```SQL
    -- 创建数据库
  create database practice;
    -- 切换数据库
  use practice;

    -- 创建 customers 表，用于存储客户信息
CREATE TABLE IF NOT EXISTS `customers` (
 `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '客户ID，自增长',
 `name` varchar(255) NOT NULL COMMENT '客户姓名，非空',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='客户信息表';

-- 创建 orders 表，用于存储订单信息
CREATE TABLE IF NOT EXISTS `orders` (
 `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单ID，自增长',
 `customer_id` int(11) NOT NULL COMMENT '客户ID，非空',
 `order_date` date NOT NULL COMMENT '订单日期，非空',
 `total_amount` decimal(10,2) NOT NULL COMMENT '订单总金额，非空',
 PRIMARY KEY (`id`),
 FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='订单信息表';

-- 创建 order_items 表，用于存储订单商品信息
CREATE TABLE IF NOT EXISTS `order_items` (
 `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品ID，自增长',
 `order_id` int(11) NOT NULL COMMENT '订单ID，非空',
 `product_name` varchar(255) NOT NULL COMMENT '商品名称，非空',
 `quantity` int(11) NOT NULL COMMENT '商品数量，非空',
 `price` decimal(10,2) NOT NULL COMMENT '商品单价，非空',
 PRIMARY KEY (`id`),
 FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='订单商品信息表';

-- 向 customers 表插入数据
INSERT INTO `customers` (`name`)
    VALUES
        ('张丽娜'),('李明'),('王磊'),('赵静'),('钱伟'),
        ('孙芳'),('周涛'),('吴洋'),('郑红'),('刘华'),
        ('陈明'),('杨丽'),('王磊'),('张伟'),('李娜'),
        ('刘洋'),('陈静'),('杨阳'),('王丽'),('张强');

-- 向 orders 表插入数据
INSERT INTO `orders` (`customer_id`, `order_date`, `total_amount`)
    VALUES
        (1, '2022-01-01',100.00),(1, '2022-01-02',200.00),
        (2, '2022-01-03',300.00),(2, '2022-01-04',400.00),
        (3, '2022-01-05',500.00),(3, '2022-01-06',600.00),
        (4, '2022-01-07',700.00),(4, '2022-01-08',800.00),
        (5, '2022-01-09',900.00),(5, '2022-01-10',1000.00);

-- 向 order_items 表插入数据
INSERT INTO `order_items` (`order_id`, `product_name`, `quantity`, `price`)
    VALUES
        (1, '耐克篮球鞋',1,100.00),
        (1, '阿迪达斯跑步鞋',2,50.00),
        (2, '匡威帆布鞋',3,100.00),
        (2, '万斯板鞋',4,50.00),
        (3, '新百伦运动鞋',5,100.00),
        (3, '彪马休闲鞋',6,50.00),
        (4, '锐步经典鞋',7,100.00),
        (5, '亚瑟士运动鞋',10,50.00),
        (5, '帆布鞋',1,100.00),
        (1, '苹果手写笔',2,50.00),
        (2, '电脑包',3,100.00),
        (3, '苹果手机',4,50.00),
        (4, '苹果耳机',5,100.00),
        (5, '苹果平板',7,100.00);
```
### 获取每一个人的总价
```shell
  select  name , SUM(o.total_amount) as 总价 from customers  join orders o on customers.id = o.customer_id group by customer_id;
```

### 获取每一个人的总价占全部的比例
```shell
 select  name ,  SUM(o.total_amount) / (select sum(total_amount) from orders) as 比例 
      from customers
      join orders o
      on customers.id = o.customer_id 
      group by customer_id;
```

### 需求 3：查询每个客户的订单总金额，并列出每个订单的商品清单
```sql
 select name, oi.product_name,o.total_amount ,oi.price from customers join orders o on customers.id = o.customer_id  join order_items oi on o.id = oi.order_id order by name ;
```
### 需求 4 需求 4：查询每个客户的订单总金额，并列出每个订单的商品清单，同时只显示客户名字姓“张”的客户的记

```shell
select name, oi.product_name,o.order_date,o.total_amount ,oi.price
from customers
    join orders o on customers.id = o.customer_id
    join order_items oi on o.id = oi.order_id
    where name like '%张%'
    order by o.order_date, oi.price desc;
```


### 需求 5:查询每个客户的订单总金额，并列出每个订单的商品清单，同时只显示订单日期在2022年1月1日到2022年1月3日之间的记录
```shell
  select name, oi.product_name,o.order_date from
         customers
             join orders o on customers.id = o.customer_id
             join order_items oi on o.id = oi.order_id
            where o.order_date BETWEEN '2022-01-01' AND  '2022-01-03';
```

### 需求 6：查询每个客户的订单总金额，并计算商品数量，只包含商品名称包含“鞋”的商品，商品名用-连接，显示前 3 条记录：
 > group_concat 组字段串拼接  
 > distinct 去重 
 > separator 拼接字符串
 > 默认 ',',
 

```shell
  select name, oi.product_name,o.order_date from
         customers
             join orders o on customers.id = o.customer_id
             join order_items oi on o.id = oi.order_id
            where o.order_date BETWEEN '2022-01-01' AND  '2022-01-03';
```


### 需求 7：查询存在订单的客户

```shell
    SELECT * FROM customers c
      WHERE EXISTS (
            SELECT 1 FROM orders o join order_items oi on o.id = oi.order_id WHERE o.customer_id = c.id
    );
    # 取false
    SELECT * FROM customers c
      WHERE NOT EXISTS (
            SELECT 1 FROM orders o WHERE o.customer_id = c.id
    );
# 查询
    SELECT * FROM orders
      JOIN customers ON orders.customer_id = customers.id;
```






### 需求 8：将王磊的订单总金额打九折

```shell
# IN 组方式删除
update orders o set o.total_amount = o.total_amount/0.9 where o.customer_id IN  (
    select id from customers where name = '王磊' );
# 直接删除
update orders o set o.total_amount = o.total_amount*0.9 where   (
    select 1 from customers where name = '王磊' and customers.id = o.customer_id);
```

### 需求 9：删除李明名下商品名叫耐克篮球鞋的
```shell
delete from order_items where (select 1 from customers where product_name = '耐克篮球鞋' and name = '李明');

```


## 事务相关

### 开启事务
```shell
  START TRANSACTION;
```

### 提交事务
```shell
COMMIT;
```
### 回滚事务
```shell
ROLLBACK;
```
### 取消事务
```shell
    rollback;
```

### 保存节点
```shell
    SAVEPOINT aaa;

    UPDATE order_items SET quantity=1 WHERE order_id=3;

    SAVEPOINT bbb;

    UPDATE orders SET total_amount=200 WHERE id=3;

    SAVEPOINT ccc;
```


### 读取节点
```shell
    ROLLBACK TO SAVEPOINT bbb;
```

### 查询隔离级别
```shell
  select @@transaction_isolation
```
