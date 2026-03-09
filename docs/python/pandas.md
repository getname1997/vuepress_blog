## pandas

### DataFrame 数据结构

### 新增

~~~python
#  
df = pd.DataFrame(
    {
        "Name": [
            "Braund, Mr. Owen Harris",
            "Allen, Mr. William Henry",
            "Bonnell, Miss. Elizabeth",
        ],
        "Age": [22, 35, 58],
        "Sex": ["male", "male", "female"],
    }
)
# 输入df 返回下面格式
#df
#                        Name  Age     Sex
#0   Braund, Mr. Owen Harris   22    male
#1  Allen, Mr. William Henry   35    male
#2  Bonnell, Miss. Elizabeth   58  female
#
~~~

### 查询

1. df 

    直接返回表结构

2. df['Age']

​        返回只有Age列的表





### Series数据结构

新增

~~~python
ages = pd.Series([22, 35, 58], name="Age")

~~~





