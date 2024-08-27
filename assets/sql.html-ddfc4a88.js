import{_ as n,o as s,c as a,e}from"./app-87ecfc16.js";const i={},d=e(`<h1 id="sql-练习" tabindex="-1"><a class="header-anchor" href="#sql-练习" aria-hidden="true">#</a> sql 练习</h1><h2 id="初始化数据库" tabindex="-1"><a class="header-anchor" href="#初始化数据库" aria-hidden="true">#</a> 初始化数据库</h2><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>    -- 创建数据库
  create database practice;
    -- 切换数据库
  use practice;

    -- 创建 customers 表，用于存储客户信息
CREATE TABLE IF NOT EXISTS \`customers\` (
 \`id\` int(11) NOT NULL AUTO_INCREMENT COMMENT &#39;客户ID，自增长&#39;,
 \`name\` varchar(255) NOT NULL COMMENT &#39;客户姓名，非空&#39;,
 PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT=&#39;客户信息表&#39;;

-- 创建 orders 表，用于存储订单信息
CREATE TABLE IF NOT EXISTS \`orders\` (
 \`id\` int(11) NOT NULL AUTO_INCREMENT COMMENT &#39;订单ID，自增长&#39;,
 \`customer_id\` int(11) NOT NULL COMMENT &#39;客户ID，非空&#39;,
 \`order_date\` date NOT NULL COMMENT &#39;订单日期，非空&#39;,
 \`total_amount\` decimal(10,2) NOT NULL COMMENT &#39;订单总金额，非空&#39;,
 PRIMARY KEY (\`id\`),
 FOREIGN KEY (\`customer_id\`) REFERENCES \`customers\` (\`id\`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT=&#39;订单信息表&#39;;

-- 创建 order_items 表，用于存储订单商品信息
CREATE TABLE IF NOT EXISTS \`order_items\` (
 \`id\` int(11) NOT NULL AUTO_INCREMENT COMMENT &#39;商品ID，自增长&#39;,
 \`order_id\` int(11) NOT NULL COMMENT &#39;订单ID，非空&#39;,
 \`product_name\` varchar(255) NOT NULL COMMENT &#39;商品名称，非空&#39;,
 \`quantity\` int(11) NOT NULL COMMENT &#39;商品数量，非空&#39;,
 \`price\` decimal(10,2) NOT NULL COMMENT &#39;商品单价，非空&#39;,
 PRIMARY KEY (\`id\`),
 FOREIGN KEY (\`order_id\`) REFERENCES \`orders\` (\`id\`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT=&#39;订单商品信息表&#39;;

-- 向 customers 表插入数据
INSERT INTO \`customers\` (\`name\`)
    VALUES
        (&#39;张丽娜&#39;),(&#39;李明&#39;),(&#39;王磊&#39;),(&#39;赵静&#39;),(&#39;钱伟&#39;),
        (&#39;孙芳&#39;),(&#39;周涛&#39;),(&#39;吴洋&#39;),(&#39;郑红&#39;),(&#39;刘华&#39;),
        (&#39;陈明&#39;),(&#39;杨丽&#39;),(&#39;王磊&#39;),(&#39;张伟&#39;),(&#39;李娜&#39;),
        (&#39;刘洋&#39;),(&#39;陈静&#39;),(&#39;杨阳&#39;),(&#39;王丽&#39;),(&#39;张强&#39;);

-- 向 orders 表插入数据
INSERT INTO \`orders\` (\`customer_id\`, \`order_date\`, \`total_amount\`)
    VALUES
        (1, &#39;2022-01-01&#39;,100.00),(1, &#39;2022-01-02&#39;,200.00),
        (2, &#39;2022-01-03&#39;,300.00),(2, &#39;2022-01-04&#39;,400.00),
        (3, &#39;2022-01-05&#39;,500.00),(3, &#39;2022-01-06&#39;,600.00),
        (4, &#39;2022-01-07&#39;,700.00),(4, &#39;2022-01-08&#39;,800.00),
        (5, &#39;2022-01-09&#39;,900.00),(5, &#39;2022-01-10&#39;,1000.00);

-- 向 order_items 表插入数据
INSERT INTO \`order_items\` (\`order_id\`, \`product_name\`, \`quantity\`, \`price\`)
    VALUES
        (1, &#39;耐克篮球鞋&#39;,1,100.00),
        (1, &#39;阿迪达斯跑步鞋&#39;,2,50.00),
        (2, &#39;匡威帆布鞋&#39;,3,100.00),
        (2, &#39;万斯板鞋&#39;,4,50.00),
        (3, &#39;新百伦运动鞋&#39;,5,100.00),
        (3, &#39;彪马休闲鞋&#39;,6,50.00),
        (4, &#39;锐步经典鞋&#39;,7,100.00),
        (5, &#39;亚瑟士运动鞋&#39;,10,50.00),
        (5, &#39;帆布鞋&#39;,1,100.00),
        (1, &#39;苹果手写笔&#39;,2,50.00),
        (2, &#39;电脑包&#39;,3,100.00),
        (3, &#39;苹果手机&#39;,4,50.00),
        (4, &#39;苹果耳机&#39;,5,100.00),
        (5, &#39;苹果平板&#39;,7,100.00);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取每一个人的总价" tabindex="-1"><a class="header-anchor" href="#获取每一个人的总价" aria-hidden="true">#</a> 获取每一个人的总价</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token keyword">select</span>  name , SUM<span class="token punctuation">(</span>o.total_amount<span class="token punctuation">)</span> as 总价 from customers  <span class="token function">join</span> orders o on customers.id <span class="token operator">=</span> o.customer_id group by customer_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取每一个人的总价占全部的比例" tabindex="-1"><a class="header-anchor" href="#获取每一个人的总价占全部的比例" aria-hidden="true">#</a> 获取每一个人的总价占全部的比例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token keyword">select</span>  name ,  SUM<span class="token punctuation">(</span>o.total_amount<span class="token punctuation">)</span> / <span class="token punctuation">(</span>select sum<span class="token punctuation">(</span>total_amount<span class="token punctuation">)</span> from orders<span class="token punctuation">)</span> as 比例 
      from customers
      <span class="token function">join</span> orders o
      on customers.id <span class="token operator">=</span> o.customer_id 
      group by customer_id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求-3-查询每个客户的订单总金额-并列出每个订单的商品清单" tabindex="-1"><a class="header-anchor" href="#需求-3-查询每个客户的订单总金额-并列出每个订单的商品清单" aria-hidden="true">#</a> 需求 3：查询每个客户的订单总金额，并列出每个订单的商品清单</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">select</span> name<span class="token punctuation">,</span> oi<span class="token punctuation">.</span>product_name<span class="token punctuation">,</span>o<span class="token punctuation">.</span>total_amount <span class="token punctuation">,</span>oi<span class="token punctuation">.</span>price <span class="token keyword">from</span> customers <span class="token keyword">join</span> orders o <span class="token keyword">on</span> customers<span class="token punctuation">.</span>id <span class="token operator">=</span> o<span class="token punctuation">.</span>customer_id  <span class="token keyword">join</span> order_items oi <span class="token keyword">on</span> o<span class="token punctuation">.</span>id <span class="token operator">=</span> oi<span class="token punctuation">.</span>order_id <span class="token keyword">order</span> <span class="token keyword">by</span> name <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="需求-4-需求-4-查询每个客户的订单总金额-并列出每个订单的商品清单-同时只显示客户名字姓-张-的客户的记" tabindex="-1"><a class="header-anchor" href="#需求-4-需求-4-查询每个客户的订单总金额-并列出每个订单的商品清单-同时只显示客户名字姓-张-的客户的记" aria-hidden="true">#</a> 需求 4 需求 4：查询每个客户的订单总金额，并列出每个订单的商品清单，同时只显示客户名字姓“张”的客户的记</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">select</span> name, oi.product_name,o.order_date,o.total_amount ,oi.price
from customers
    <span class="token function">join</span> orders o on customers.id <span class="token operator">=</span> o.customer_id
    <span class="token function">join</span> order_items oi on o.id <span class="token operator">=</span> oi.order_id
    where name like <span class="token string">&#39;%张%&#39;</span>
    order by o.order_date, oi.price desc<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求-5-查询每个客户的订单总金额-并列出每个订单的商品清单-同时只显示订单日期在2022年1月1日到2022年1月3日之间的记录" tabindex="-1"><a class="header-anchor" href="#需求-5-查询每个客户的订单总金额-并列出每个订单的商品清单-同时只显示订单日期在2022年1月1日到2022年1月3日之间的记录" aria-hidden="true">#</a> 需求 5:查询每个客户的订单总金额，并列出每个订单的商品清单，同时只显示订单日期在2022年1月1日到2022年1月3日之间的记录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token keyword">select</span> name, oi.product_name,o.order_date from
         customers
             <span class="token function">join</span> orders o on customers.id <span class="token operator">=</span> o.customer_id
             <span class="token function">join</span> order_items oi on o.id <span class="token operator">=</span> oi.order_id
            where o.order_date BETWEEN <span class="token string">&#39;2022-01-01&#39;</span> AND  <span class="token string">&#39;2022-01-03&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求-6-查询每个客户的订单总金额-并计算商品数量-只包含商品名称包含-鞋-的商品-商品名用-连接-显示前-3-条记录" tabindex="-1"><a class="header-anchor" href="#需求-6-查询每个客户的订单总金额-并计算商品数量-只包含商品名称包含-鞋-的商品-商品名用-连接-显示前-3-条记录" aria-hidden="true">#</a> 需求 6：查询每个客户的订单总金额，并计算商品数量，只包含商品名称包含“鞋”的商品，商品名用-连接，显示前 3 条记录：</h3><blockquote><p>group_concat 组字段串拼接<br> distinct 去重 separator 拼接字符串 默认 &#39;,&#39;,</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token keyword">select</span> name, oi.product_name,o.order_date from
         customers
             <span class="token function">join</span> orders o on customers.id <span class="token operator">=</span> o.customer_id
             <span class="token function">join</span> order_items oi on o.id <span class="token operator">=</span> oi.order_id
            where o.order_date BETWEEN <span class="token string">&#39;2022-01-01&#39;</span> AND  <span class="token string">&#39;2022-01-03&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求-7-查询存在订单的客户" tabindex="-1"><a class="header-anchor" href="#需求-7-查询存在订单的客户" aria-hidden="true">#</a> 需求 7：查询存在订单的客户</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    SELECT * FROM customers c
      WHERE EXISTS <span class="token punctuation">(</span>
            SELECT <span class="token number">1</span> FROM orders o <span class="token function">join</span> order_items oi on o.id <span class="token operator">=</span> oi.order_id WHERE o.customer_id <span class="token operator">=</span> c.id
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment"># 取false</span>
    SELECT * FROM customers c
      WHERE NOT EXISTS <span class="token punctuation">(</span>
            SELECT <span class="token number">1</span> FROM orders o WHERE o.customer_id <span class="token operator">=</span> c.id
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 查询</span>
    SELECT * FROM orders
      JOIN customers ON orders.customer_id <span class="token operator">=</span> customers.id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求-8-将王磊的订单总金额打九折" tabindex="-1"><a class="header-anchor" href="#需求-8-将王磊的订单总金额打九折" aria-hidden="true">#</a> 需求 8：将王磊的订单总金额打九折</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># IN 组方式删除</span>
update orders o <span class="token builtin class-name">set</span> o.total_amount <span class="token operator">=</span> o.total_amount/0.9 where o.customer_id IN  <span class="token punctuation">(</span>
    <span class="token keyword">select</span> <span class="token function">id</span> from customers where name <span class="token operator">=</span> <span class="token string">&#39;王磊&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 直接删除</span>
update orders o <span class="token builtin class-name">set</span> o.total_amount <span class="token operator">=</span> o.total_amount*0.9 where   <span class="token punctuation">(</span>
    <span class="token keyword">select</span> <span class="token number">1</span> from customers where name <span class="token operator">=</span> <span class="token string">&#39;王磊&#39;</span> and customers.id <span class="token operator">=</span> o.customer_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="需求-9-删除李明名下商品名叫耐克篮球鞋的" tabindex="-1"><a class="header-anchor" href="#需求-9-删除李明名下商品名叫耐克篮球鞋的" aria-hidden="true">#</a> 需求 9：删除李明名下商品名叫耐克篮球鞋的</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>delete from order_items where <span class="token punctuation">(</span>select <span class="token number">1</span> from customers where product_name <span class="token operator">=</span> <span class="token string">&#39;耐克篮球鞋&#39;</span> and name <span class="token operator">=</span> <span class="token string">&#39;李明&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事务相关" tabindex="-1"><a class="header-anchor" href="#事务相关" aria-hidden="true">#</a> 事务相关</h2><h3 id="开启事务" tabindex="-1"><a class="header-anchor" href="#开启事务" aria-hidden="true">#</a> 开启事务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  START TRANSACTION<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="提交事务" tabindex="-1"><a class="header-anchor" href="#提交事务" aria-hidden="true">#</a> 提交事务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>COMMIT<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="回滚事务" tabindex="-1"><a class="header-anchor" href="#回滚事务" aria-hidden="true">#</a> 回滚事务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ROLLBACK<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="取消事务" tabindex="-1"><a class="header-anchor" href="#取消事务" aria-hidden="true">#</a> 取消事务</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    rollback<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="保存节点" tabindex="-1"><a class="header-anchor" href="#保存节点" aria-hidden="true">#</a> 保存节点</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    SAVEPOINT aaa<span class="token punctuation">;</span>

    UPDATE order_items SET <span class="token assign-left variable">quantity</span><span class="token operator">=</span><span class="token number">1</span> WHERE <span class="token assign-left variable">order_id</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>

    SAVEPOINT bbb<span class="token punctuation">;</span>

    UPDATE orders SET <span class="token assign-left variable">total_amount</span><span class="token operator">=</span><span class="token number">200</span> WHERE <span class="token assign-left variable">id</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>

    SAVEPOINT ccc<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="读取节点" tabindex="-1"><a class="header-anchor" href="#读取节点" aria-hidden="true">#</a> 读取节点</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    ROLLBACK TO SAVEPOINT bbb<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查询隔离级别" tabindex="-1"><a class="header-anchor" href="#查询隔离级别" aria-hidden="true">#</a> 查询隔离级别</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token keyword">select</span> @@transaction_isolation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,37),r=[d];function l(o,c){return s(),a("div",null,r)}const u=n(i,[["render",l],["__file","sql.html.vue"]]);export{u as default};
