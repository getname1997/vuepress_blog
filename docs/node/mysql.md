# 连接数据库
## 根目录配置  ormconfig.json
```json

{ 
    "type": "mysql",
    "host": "localhost", 
    "port": 3306, 
    "username": "root", 
    "password": "root", 
    "database": "blog", 
    "entities": ["dist/**/*.entity{.ts,.js}"], 
    "synchronize": true 
}

```

