import{_ as r,r as l,o as d,c as a,a as e,b as n,d as s,e as t}from"./app-90e665c7.js";const o={},c=e("h1",{id:"动画渲染库",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#动画渲染库","aria-hidden":"true"},"#"),n(" 动画渲染库")],-1),v={href:"https://airbnb.io/lottie/#/README",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"几个打包工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#几个打包工具","aria-hidden":"true"},"#"),n(" 几个打包工具")],-1),m={href:"https://www.rollupjs.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://swc.rs/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.webpackjs.com/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://esbuild.docschina.org/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.gulpjs.com.cn/",target:"_blank",rel:"noopener noreferrer"},g=e("h2",{id:"前端cli工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#前端cli工具","aria-hidden":"true"},"#"),n(" 前端cli工具")],-1),f={href:"https://cn.vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://create-react-app.dev/",target:"_blank",rel:"noopener noreferrer"},w={id:"emoji-表情地址",tabindex:"-1"},j=e("a",{class:"header-anchor",href:"#emoji-表情地址","aria-hidden":"true"},"#",-1),y={href:"https://emojixd.com/group/travel-places",target:"_blank",rel:"noopener noreferrer"},S=e("h2",{id:"可视化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#可视化","aria-hidden":"true"},"#"),n(" 可视化")],-1),q={href:"https://cesium.com/platform/cesiumjs/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://threejs.org/",target:"_blank",rel:"noopener noreferrer"},$={href:"http://www.webgl3d.cn/",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"_2024下半年计划",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2024下半年计划","aria-hidden":"true"},"#"),n(" 2024下半年计划")],-1),R=e("ul",null,[e("li",null,"[x] 软考学习起来（系统集成项目管理工程师）"),e("li",null,"[ ] 了解pmp如有机会先报名学习起来"),e("li",null,"[ ] 英语每日学习10分钟+")],-1),C=e("h2",{id:"最近需要学习-学习顺序由上到下",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#最近需要学习-学习顺序由上到下","aria-hidden":"true"},"#"),n(" 最近需要学习（学习顺序由上到下）")],-1),D={href:"https://github.com/cuixiaorui/mini-vue/",target:"_blank",rel:"noopener noreferrer"},N=e("strong",null,"(计划时间 22/6/28 - 22/8/31)",-1),O={href:"http://www.webgl3d.cn/",target:"_blank",rel:"noopener noreferrer"},H={href:"http://www.webgl3d.cn/WebGL/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://cesium.com/platform/cesiumjs/",target:"_blank",rel:"noopener noreferrer"},A=e("strong",null,"(计划时间 22/9/1 - 22/10/31)",-1),B={href:"https://kaisery.github.io/trpl-zh-cn/title-page.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.rust-lang.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"},V=e("strong",null,"(计划时间 22/11/1 - 23/1/1)",-1),G=t(`<h2 id="jenkins-安装" tabindex="-1"><a class="header-anchor" href="#jenkins-安装" aria-hidden="true">#</a> jenkins 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  yum install -y java-1.8.0   // 安装java8
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
 
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="publish-over-ssh" tabindex="-1"><a class="header-anchor" href="#publish-over-ssh" aria-hidden="true">#</a> Publish Over SSH</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  系统配置 配置对应服务器 
   SSH Publishers 》Transfers
   Source files 为工作区的根目录！！
   Remove prefix  删除前缀
   Remote directory 远程地址
   勾选 Clean remote
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ng配置" tabindex="-1"><a class="header-anchor" href="#ng配置" aria-hidden="true">#</a> ng配置</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># For more information on configuration, see:
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
    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

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
#        ssl_certificate &quot;/etc/pki/nginx/server.crt&quot;;
#        ssl_certificate_key &quot;/etc/pki/nginx/private/server.key&quot;;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> rust</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> rust 打包工具 --bin 表示是新建一个可执行文件
 Cargo new 建一个项目
 --release  最终版本
  cargo build --release 
    cargo install .


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function I(M,T){const i=l("ExternalLinkIcon");return d(),a("div",null,[c,e("ul",null,[e("li",null,[e("a",v,[n("name Lottie"),s(i)])])]),u,e("ul",null,[e("li",null,[e("a",m,[n("Rollup"),s(i)])]),e("li",null,[e("a",h,[n("swc 编译器"),s(i)])]),e("li",null,[e("a",b,[n("webpack"),s(i)])]),e("li",null,[e("a",_,[n("esbuild"),s(i)])]),e("li",null,[e("a",p,[n("Gulp"),s(i)])])]),g,e("ul",null,[e("li",null,[e("a",f,[n("vite"),s(i)])]),e("li",null,[e("a",x,[n("vueCli"),s(i)])]),e("li",null,[e("a",k,[n("Create React App"),s(i)])])]),e("h2",w,[j,n(),e("a",y,[n("emoji 表情地址"),s(i)])]),S,e("ul",null,[e("li",null,[e("a",q,[n("cesium 三维地图"),s(i)])]),e("li",null,[e("a",L,[n("three 3D库"),s(i)]),n(),e("a",$,[n("中文地址"),s(i)])])]),E,R,C,e("ul",null,[e("li",null,[n("[x] vue3源码 "),e("a",D,[n("mini vue"),s(i)]),n(),N]),e("li",null,[n("[ ] 3d "),e("a",O,[n("three"),s(i)]),n(),e("a",H,[n("webgl"),s(i)]),n(),e("a",z,[n("cesium 三维地图"),s(i)]),A]),e("li",null,[n("[ ] "),e("a",B,[n("Rust 程序设计语言"),s(i)]),n(),e("a",P,[n("rust"),s(i)]),V])]),G])}const U=r(o,[["render",I],["__file","index.html.vue"]]);export{U as default};
