## 增

```python
user = User(
    username=payload.username,
    email=payload.email,
    hashed_password=payload.hashed_password,
    is_active=payload.is_active,
    is_superuser=payload.is_superuser,
    created_at=current_time,
    updated_at=current_time,
)
session.add(user)
session.commit()
session.refresh(user)
```

## 删

```python
statement = select(User).where(User.id == user_id)
user = session.exec(statement).one()
if user:
    session.delete(user)
    session.commit()
    session.refresh(user)
```



## 改

```python
statement = select(User).where(User.id == user_id)
user = session.exec(statement).one()
if user:
    user.username = payload.username
    user.email = payload.email
    user.hashed_password = payload.hashed_password
    user.is_active = payload.is_active
    user.is_superuser = payload.is_superuser
    session.add(user)
    session.commit()
    session.refresh(user)
```



## 查

```python
# 构建查询条件
statement = select(User)
count_statement = select(func.count()).select_from(User)

# 根据查询参数添加过滤条件
if user_query.user_id is not None:
    statement = statement.where(User.id == user_query.user_id)
    count_statement = count_statement.where(User.id == user_query.user_id)

if user_query.username is not None:
    statement = statement.where(User.username.contains(user_query.username))
    count_statement = count_statement.where(
        User.username.contains(user_query.username)
    )

if user_query.email is not None:
    statement = statement.where(User.email.contains(user_query.email))
    count_statement = count_statement.where(User.email.contains(user_query.email))

# 查询总条数
total = session.exec(count_statement).one()

# 查询分页数据
offset = (user_query.page - 1) * user_query.page_size
statement = statement.offset(offset).limit(user_query.page_size)
users = list(session.exec(statement).all())
```

