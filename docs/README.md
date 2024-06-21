---
{
  home: true,
  heroText: 备忘录,
  text: 备忘录,
  tagline: 个人备忘录,
  footer: <a href='https://beian.miit.gov.cn/' target='_blank'>浙ICP备2023020020号</a>,
  footerHtml: true,
#  footer:<a href='https://beian.miit.gov.cn/' target='_blank'>浙ICP备2023020020号</a>,
 
}
---
# 动画渲染库
* [name Lottie](https://airbnb.io/lottie/#/README)
## 几个打包工具
* [Rollup](https://www.rollupjs.com/)
* [swc 编译器](https://swc.rs/)
* [webpack](https://www.webpackjs.com/)
* [esbuild](https://esbuild.docschina.org/)
* [Gulp](https://www.gulpjs.com.cn/)


## 前端cli工具
* [vite](https://cn.vitejs.dev/)
* [vueCli](https://cli.vuejs.org/zh/)
* [Create React App](https://create-react-app.dev/)

## [emoji 表情地址](https://emojixd.com/group/travel-places) 

## 可视化
* [cesium 三维地图](https://cesium.com/platform/cesiumjs/)
* [three 3D库](https://threejs.org/) [中文地址](http://www.webgl3d.cn/)

## 2024下半年计划
- [ ] 软考学习起来（系统集成项目管理工程师）
- [ ] 了解pmp如有机会先报名学习起来
- [ ] 英语每日学习10分钟+

## 最近需要学习（学习顺序由上到下）
- [x] vue3源码 [mini vue](https://github.com/cuixiaorui/mini-vue/) **(计划时间 22/6/28 - 22/8/31)**
- [ ] 3d  [three](http://www.webgl3d.cn/) [webgl](http://www.webgl3d.cn/WebGL/) [cesium 三维地图](https://cesium.com/platform/cesiumjs/)**(计划时间 22/9/1 - 22/10/31)**
- [ ] [Rust 程序设计语言](https://kaisery.github.io/trpl-zh-cn/title-page.html)  [rust](https://www.rust-lang.org/zh-CN/)**(计划时间 22/11/1 - 23/1/1)**

## jenkins 安装
~~~
  yum install -y java-1.8.0   // 安装java8
  // 更改yun 源
  wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat/jenkins.repo
  rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key
  
  // 安装
  yum install -y jenkins
        // 查看启动密码  
  cat /var/lib/jenkins/secrets/initialAdminPassword
    // 安装git
 yum -y install git
        // jenkins 命令
 service jenkins start(stop restart)
    //插件 
Blue Ocean  // 方便页面好看一点
node    
Publish Over SSH // 用来发布的
 
 
~~~

## Publish Over SSH 
~~~
  系统配置 配置对应服务器 
   SSH Publishers 》Transfers
   Source files 为工作区的根目录！！
   Remove prefix  删除前缀
   Remote directory 远程地址
   勾选 Clean remote
~~~



## ng配置
```
# For more information on configuration, see:
#   * Official English Documentation: http://nginx.org/en/docs/
#   * Official Russian Documentation: http://nginx.org/ru/docs/

user root;  // 使用root权限
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.
include /usr/share/nginx/modules/*.conf;

events {
    worker_connections 1024;
}

http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 4096;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;

    # Load modular configuration files from the /etc/nginx/conf.d directory.
    # See http://nginx.org/en/docs/ngx_core_module.html#include
    # for more information.
    include /etc/nginx/conf.d/*.conf;

    server {
        listen       80;  
        listen       [::]:80;
        server_name  _;
         include /etc/nginx/default.d/*.conf;
           location  / {
                 root /root/www;
		index index.html;
        }
    
        # Load configuration files for the default server block.
       
	
        error_page 404 /404.html;
        location = /404.html {
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
    }

# Settings for a TLS enabled server.
#
#    server {
#        listen       443 ssl http2;
#        listen       [::]:443 ssl http2;
#        server_name  _;
#        root         /usr/share/nginx/html;
#
#        ssl_certificate "/etc/pki/nginx/server.crt";
#        ssl_certificate_key "/etc/pki/nginx/private/server.key";
#        ssl_session_cache shared:SSL:1m;
#        ssl_session_timeout  10m;
#        ssl_ciphers HIGH:!aNULL:!MD5;
#        ssl_prefer_server_ciphers on;
#
#        # Load configuration files for the default server block.
#        include /etc/nginx/default.d/*.conf;
#           
#        error_page 404 /404.html;
#            location = /40x.html {
#        }
#
#        error_page 500 502 503 504 /50x.html;
#            location = /50x.html {
#        }
#    }

}
```

## rust
```
 rust 打包工具 --bin 表示是新建一个可执行文件
 Cargo new 建一个项目
 --release  最终版本
  cargo build --release 
    cargo install .


```


