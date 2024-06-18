import{_ as n,o as e,c as s,e as i}from"./app-90e665c7.js";const a={},l=i(`<h1 id="docker-镜像定制" tabindex="-1"><a class="header-anchor" href="#docker-镜像定制" aria-hidden="true">#</a> docker 镜像定制</h1><h2 id="项目目录新建-dockerfile-文件" tabindex="-1"><a class="header-anchor" href="#项目目录新建-dockerfile-文件" aria-hidden="true">#</a> 项目目录新建 Dockerfile 文件</h2><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># Use an official Node.js runtime as the base image</span>
<span class="token instruction"><span class="token keyword">FROM</span> node:latest <span class="token keyword">as</span> build-stage</span>

<span class="token comment"># Set the working directory in the container</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token comment"># Copy the package.json and package-lock.json files to the working directory</span>
<span class="token instruction"><span class="token keyword">COPY</span> package*.json ./</span>

<span class="token comment"># Install project dependencies</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm install</span>

<span class="token comment"># Copy all files to the working directory</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>

<span class="token comment"># Build the project</span>
<span class="token instruction"><span class="token keyword">RUN</span> npm run build</span>

<span class="token comment"># Use a lightweight nginx image as the base for the second stage</span>
<span class="token instruction"><span class="token keyword">FROM</span> nginx:stable-alpine <span class="token keyword">as</span> production-stage</span>

<span class="token comment"># Copy the built files from the previous stage to the nginx public directory 复制文件到nginx目录</span>
<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">build-stage</span></span> /app/dist /usr/share/nginx/html</span>
 
<span class="token comment"># Copy the nginx configuration file to the nginx configuration directory 自定义nginx配置文件</span>
<span class="token instruction"><span class="token keyword">COPY</span> umiBlog.conf /etc/nginx/nginx.conf</span>
 
<span class="token comment"># Expose port 80</span>
<span class="token comment">#EXPOSE 80</span>

<span class="token comment"># Start the nginx server </span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>] </span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerignore-文件" tabindex="-1"><a class="header-anchor" href="#dockerignore-文件" aria-hidden="true">#</a> .dockerignore 文件</h2><div class="language-.dockerignore line-numbers-mode" data-ext=".dockerignore"><pre class="language-.dockerignore"><code>.idea/
.git/
node_modules/
yarn-error.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-配置文件" tabindex="-1"><a class="header-anchor" href="#nginx-配置文件" aria-hidden="true">#</a> nginx 配置文件</h2><div class="language-umiBlog.conf line-numbers-mode" data-ext="umiBlog.conf"><pre class="language-umiBlog.conf"><code>
#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

 server {
   listen 8080;
   index index.html;
   location / {
        root   /usr/share/nginx/html;
        index  index.html;
       try_files $uri $uri/ /index.html;
   }

   location /api/ {
     proxy_pass   http://175.24.115.95:8090/;
   }
 }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[l];function r(c,o){return e(),s("div",null,d)}const v=n(a,[["render",r],["__file","docker镜像定制.html.vue"]]);export{v as default};
