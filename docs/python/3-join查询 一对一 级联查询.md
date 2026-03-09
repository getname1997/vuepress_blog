## 建立索引

  INDEX（key）  建立索引  索引为 user_id 索引名称 card_id_idx

~~~sql
-- 示例 
CREATE TABLE `id_card` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
  `card_name` varchar(45) NOT NULL COMMENT '身份证号',
  `user_id` int DEFAULT NULL COMMENT '用户 id',
  PRIMARY KEY (`id`),
  INDEX `card_id_idx` (`user_id`)
)  CHARSET=utf8mb4

~~~



###  外键

用于数据引用 关联 

~~~sql
-- 方式1：直接在列定义后
CREATE TABLE 表名 (
    列1 数据类型,
    列2 数据类型,
    外键列 数据类型 REFERENCES 主表名(主键列)
        [ON DELETE 级联操作] [ON UPDATE 级联操作]
);

-- 方式2：使用 CONSTRAINT 命名约束
CREATE TABLE 表名 (
    列1 数据类型,
    列2 数据类型,
    外键列 数据类型,
    CONSTRAINT 约束名 FOREIGN KEY (外键列)
        REFERENCES 主表名(主键列)
        [ON DELETE 级联操作] [ON UPDATE 级联操作]
);

-- 方式3：表级约束（多列外键）
CREATE TABLE 表名 (
    列1 数据类型,
    列2 数据类型,
    外键列1 数据类型,
    外键列2 数据类型,
    CONSTRAINT 约束名 FOREIGN KEY (外键列1, 外键列2)
        REFERENCES 主表名(主键列1, 主键列2)
        [ON DELETE 级联操作] [ON UPDATE 级联操作]
);

~~~



### 联表查询 JOIN  左查询 右查询

~~~sql

--  JOIN ON 默认 INNER JOIN NO 返回关联上的数据
--  LEFT JOIN 是额外返回左表中没有关联上的数据。
--  RIGHT JOIN 是额外返回右表中没有关联上的数据。
SELECT * FROM user JOIN id_card ON user.id = id_card.user_id;
~~~





### 级联操作

```sql
ON DELETE CASCADE      -- 删除主表记录时，同时删除子表相关记录
ON DELETE SET NULL     -- 删除主表记录时，将子表外键设为NULL
ON DELETE SET DEFAULT  -- 删除主表记录时，将子表外键设为默认值
ON DELETE NO ACTION    -- 默认，删除主表记录前需确保无关联子表记录
ON DELETE RESTRICT     -- 类似NO ACTION，但有些DBMS中检查时机不同

ON UPDATE CASCADE      -- 更新主表主键时，同时更新子表外键
ON UPDATE SET NULL     -- 更新主表主键时，将子表外键设为NULL
ON UPDATE SET DEFAULT  -- 更新主表主键时，将子表外键设为默认值
```



