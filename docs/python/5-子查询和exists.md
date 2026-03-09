### 子查询

~~~sql
SELECT * FROM student WHERE score > (SELECT AVG(score) FROM student);
~~~

### **EXISTS** 语法 子查询是否有数据 有返回true 没有false

~~~sql
SELECT name FROM department
    WHERE EXISTS (
        SELECT * FROM employee WHERE department.id = employee.department_id
    );
    
    SELECT name FROM department
    WHERE NOT EXISTS (
        SELECT * FROM employee WHERE department.id = employee.department_id
    );


~~~

