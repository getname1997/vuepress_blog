# nestjs 安装

``` bash
 npm i -g @nestjs/cli  //全局安装脚手架
 nest new project-name  //  创建项目
 npm run start   // 启动
```

|          文件名           |                               |
|:----------------------:|:-----------------------------:|
|   app.controller.ts    |         带有单个路由的基本控制器。         |
| app.controller.spec.ts |          针对控制器的单元测试。          |
|     app.module.ts      |           应用程序的根模块。           |
|     app.service.ts     | 具有单一方法的基本服务（service）。 method. |
|        main.ts         |             入口文件。             |


## nestCli 常用命令

### 文件类型
* mo 模块
* co 控制器
* filter 过滤器
* interceptor 拦截器
* service 服务
* resource 一套crud()
### 其他命令
![VuePress Logo](/img/rustCli.png)
```bash
    nest g [文件类型]  [文件名] [目录] 
```



### new 命令

~~~js
nest new 项目名
      -g        --skip-git   // 跳过初始化git
      -s        -skip-install  //跳过初始化
	  -d        --dry-run     // 是否直接启动默认false
	  -p        --package-manager //指定包管理器的
	  -l        --language      // 指定开发语言默认ts
      --strict               // 是否开启ts编译的严格模式 默认false
      -c           --collection //配置nestcli模板（一般无需配置）默认 @nestjs/schematics
~~~

### g(generate)命令 

~~~
nest g  [options] [name] [path]
mo 模块
co 控制器
filter 过滤器
interceptor 拦截器
service 服务
resource 一套crud()
         其他命令

~~~



