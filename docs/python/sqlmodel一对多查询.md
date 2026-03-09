## 一 定义订单表

~~~python
class Orders(SQLModel, table=True):
    id: int = Field(
        default=None,
        primary_key=True,
        description="订单id,自增长",
    )
    customer_id: int = Field(
        default=None,
        index=True,
        primary_key=True,
        description="客户id,非空",
        foreign_key="customers.id",
    )
    order_date: date = Field(
        description="订单日期", sa_column=Column(Date), default=date.today()
    )
    total_amount: int = Field(description="订单金额")

    # 关联订单项
    heroes: list["Order_Items"] = Relationship(back_populates="orders")



~~~

## 二 .定义商品表

```python
class Order_Items(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True, description="订单id")
    order_id: int | None = Field(
        description="订单id", index=True, foreign_key="orders.id"
    )
    product_name: str = Field(description="商品名称")
    quantity: int = Field(description="商品数量")
    price: Decimal = Field(
        default=Decimal("0.00"),
        sa_column=Column(DECIMAL(precision=10, scale=2)),
        description="商品单价",
    )
```

## 三. 关联关系建立

~~~python
# 使用 foreign_key 建立外键  Relationship 建立关系 back_populates关联relationship属性名称 backref单向定义
class Orders(SQLModel, table=True):
    id: int = Field(
        default=None,
        primary_key=True,
        description="订单id,自增长",
    )
    customer_id: int = Field(
        default=None,
        index=True,
        primary_key=True,
        description="客户id,非空",
        foreign_key="customers.id",
    )
    order_date: date = Field(
        description="订单日期", sa_column=Column(Date), default=date.today()
    )
    total_amount: int = Field(description="订单金额")

    # 关联订单项
    heroes: list["Order_Items"] = Relationship(back_populates="orders")

~~~

## 4.查询使用

~~~python
# 查询单个订单及其所有订单项
def get_order_with_items(session: Session):
    statement = select(Orders)
    orders = session.exec(statement).all()
    return orders


~~~

```python
# join 语法
statement = select(Orders, Order_Items).join(Order_Items,Orders.id == Order_Items.order_id).where(Orders.id == 2)
articles = session.exec(statement).all()
        
return articles
```

