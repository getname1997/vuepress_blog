~~~python
# 查询全部列 * 全部
SELECT * FROM student;
# 查询对应列 as 改名返回
SELECT name as 名字, score as 分数 FROM student;

~~~

## 简单查询语句

~~~sql
# 条件查询
select name as 名字,class as 班级 from student where age >= 19;
# and 拼接条件
select name as 名字,class as 班级 from student where age >= 19 and score <= 89 and gender='男';
# 模糊搜索  like '王%'
select name as 名字,class as 班级 from student where name like '王%';
# in 指定集合
select name as 名字,class as 班级 from student where name in ('王五','钱七');
# not in 除去这个集合
select name as 名字,class as 班级 from student where name not in ('王五','钱七');

# between and  区间
select name as 名字,class as 班级 from student where age between 19 and 20 

# 分页 limit age1,age2  age1:开始的索引 age2 多少条
select * from student limit 0,5;
# order by 排序 asc：升序 desc 降序 
select name,score,age from student order by score asc,age desc;


#  GROUP BY 分组 根据班级分组 AVG 平均值 count 计数 * 当前行 having: GROUP BY 后筛选
SELECT class as 班级, AVG(score) AS 平均成绩 , count(*) as count
FROM student
GROUP BY class
ORDER BY 平均成绩 DESC
having AVG > 40;



~~~



## 聚合函数 用于分组

avg

​	平均数

count

  	计数

sum

 	 和

min

​	 最小值

max

 	 最大值



## 字符串函数

### CONCAT

​    字符串连接  

~~~sql
SELECT CONCAT('Hello', ' ', 'World');  -- 返回 'Hello World'
~~~

###  SUBSTR / SUBSTRING - 截取子字符串

```sql
SELECT SUBSTR('MySQL', 2, 3);     -- 返回 'ySQ'
SELECT SUBSTRING('Database', 5);   -- 返回 'base'

SELECT SUBSTR('Hello', -3, 2);    -- 返回 'll'
```

###  LENGTH / CHAR_LENGTH - 获取字符串长度

```sql
SELECT LENGTH('ABC');        -- 返回 3（英文字符）
SELECT LENGTH('你好');       -- 在utf8mb4编码下返回 6（每个中文字符3字节）

SELECT CHAR_LENGTH('ABC');   -- 返回 3
SELECT CHAR_LENGTH('你好');  -- 返回 2（字符数）
```

###  UPPER / UCASE - 转换为大写

```sql
SELECT UPPER('mysql');      -- 返回 'MYSQL'
SELECT UCASE('Hello World'); -- 返回 'HELLO WORLD'
```

### LOWER / LCASE - 转换为小写

```sql
SELECT LOWER('MySQL');      -- 返回 'mysql'
SELECT LCASE('Hello World'); -- 返回 'hello world'
```



## 数字类型 

 ROUND 四舍五入、CEIL 向上取整、FLOOR 向下取整、ABS 绝对值、MOD 取模

~~~sql
# ROUND 四舍五入、CEIL 向上取整、FLOOR 向下取整、ABS 绝对值、MOD 取模。
SELECT ROUND(1.234567, 2), CEIL(1.234567), FLOOR(1.234567), ABS(-1.234567), MOD(5, 2);
~~~

## **日期函数**：

对日期、时间进行处理，比如 DATE 年:月:日 YYYY-MM-DD、TIME 时:分:秒 HH:mm:ss、YEAR 年 YYYY、MONTH 月 M、DAY 日 DD

~~~sql
SELECT YEAR('2023-06-01 22:06:03'), MONTH('2023-06-01 22:06:03'),DAY('2023-06-01 22:06:03'),DATE('2023-06-01 22:06:03'), TIME('2023-06-01 22:06:03');

~~~

条件函数

根据条件是否成立返回不同的值，比如 IF、CASE

if 函数适合单个条件，case 适合多个条件。

~~~sql
select name, if(score >=60, '及格', '不及格') from student;

SELECT name, score, CASE WHEN score >=90 THEN '优秀' WHEN score >=60 THEN '良好'ELSE '差' END AS '档次' FROM student;



~~~

## 系统函数

VERSION 数据库版本、DATABASE 数据库名称、USER 用户。



## 类型转换

convert 

  ~~~sql
select greatest(1, convert('123', signed),3);
  ~~~

cast

```sql
select greatest(1, cast('123' as  signed),3);

#这里可以转换的类型有这些：


```

- signed：整型；

- unsigned：无符号整型
- decimal：浮点型；
- char：字符类型；
- date：日期类型；
- time：时间类型；
- datetime：日期时间类型；
- binary：二进制类型

## 时间转换 STR_TO_DATE  STR_TO_DATE 

```sql
SELECT DATE_FORMAT('2022-01-01', '%Y年%m月%d日')

```



## 其他

NULLIF：如果相等返回 null，不相等返回第一个值。

COALESCE：返回第一个非 null 的值：

GREATEST、LEAST：返回几个值中最大最小的。