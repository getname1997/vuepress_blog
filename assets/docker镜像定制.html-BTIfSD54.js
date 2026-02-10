import{_ as s,c as a,a as e,o as i}from"./app-Bjm7WZ4G.js";const l={};function c(p,n){return i(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="docker-镜像定制" tabindex="-1"><a class="header-anchor" href="#docker-镜像定制"><span>docker 镜像定制</span></a></h1><h2 id="项目目录新建-dockerfile-文件" tabindex="-1"><a class="header-anchor" href="#项目目录新建-dockerfile-文件"><span>项目目录新建 Dockerfile 文件</span></a></h2><div class="language-docker line-numbers-mode" data-highlighter="prismjs" data-ext="docker"><pre><code class="language-docker"><span class="line"><span class="token comment"># Use an official Node.js runtime as the base image</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> node:latest <span class="token keyword">as</span> build-stage</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Set the working directory in the container</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Copy the package.json and package-lock.json files to the working directory</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> package*.json ./</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Install project dependencies</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> npm install</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Copy all files to the working directory</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> . .</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Build the project</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">RUN</span> npm run build</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Use a lightweight nginx image as the base for the second stage</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">FROM</span> nginx:stable-alpine <span class="token keyword">as</span> production-stage</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Copy the built files from the previous stage to the nginx public directory 复制文件到nginx目录</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">build-stage</span></span> /app/dist /usr/share/nginx/html</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment"># Copy the nginx configuration file to the nginx configuration directory 自定义nginx配置文件</span></span>
<span class="line"><span class="token instruction"><span class="token keyword">COPY</span> umiBlog.conf /etc/nginx/nginx.conf</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment"># Expose port 80</span></span>
<span class="line"><span class="token comment">#EXPOSE 80</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Start the nginx server </span></span>
<span class="line"><span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;nginx&quot;</span>, <span class="token string">&quot;-g&quot;</span>, <span class="token string">&quot;daemon off;&quot;</span>] </span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerignore-文件" tabindex="-1"><a class="header-anchor" href="#dockerignore-文件"><span>.dockerignore 文件</span></a></h2><div class="language-.dockerignore line-numbers-mode" data-highlighter="prismjs" data-ext=".dockerignore"><pre><code class="language-.dockerignore"><span class="line">.idea/</span>
<span class="line">.git/</span>
<span class="line">node_modules/</span>
<span class="line">yarn-error.log</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-配置文件" tabindex="-1"><a class="header-anchor" href="#nginx-配置文件"><span>nginx 配置文件</span></a></h2><div class="language-umiBlog.conf line-numbers-mode" data-highlighter="prismjs" data-ext="umiBlog.conf"><pre><code class="language-umiBlog.conf"><span class="line"></span>
<span class="line">#user  nobody;</span>
<span class="line">worker_processes  1;</span>
<span class="line"></span>
<span class="line">#error_log  logs/error.log;</span>
<span class="line">#error_log  logs/error.log  notice;</span>
<span class="line">#error_log  logs/error.log  info;</span>
<span class="line"></span>
<span class="line">#pid        logs/nginx.pid;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">events {</span>
<span class="line">    worker_connections  1024;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">http {</span>
<span class="line">    include       mime.types;</span>
<span class="line">    default_type  application/octet-stream;</span>
<span class="line">    sendfile        on;</span>
<span class="line">    keepalive_timeout  65;</span>
<span class="line"></span>
<span class="line"> server {</span>
<span class="line">   listen 8080;</span>
<span class="line">   index index.html;</span>
<span class="line">   location / {</span>
<span class="line">        root   /usr/share/nginx/html;</span>
<span class="line">        index  index.html;</span>
<span class="line">       try_files $uri $uri/ /index.html;</span>
<span class="line">   }</span>
<span class="line"></span>
<span class="line">   location /api/ {</span>
<span class="line">     proxy_pass   http://175.24.115.95:8090/;</span>
<span class="line">   }</span>
<span class="line"> }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)])])}const r=s(l,[["render",c],["__file","docker镜像定制.html.vue"]]),o=JSON.parse('{"path":"/docker/docker%E9%95%9C%E5%83%8F%E5%AE%9A%E5%88%B6.html","title":"docker 镜像定制","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1718690390000,"contributors":[{"name":"G_xing","username":"","email":"g_xing@163.com","commits":1}],"changelog":[{"hash":"bd8e9e73b187645f098294dea2d1c759b7acaaa0","time":1718690390000,"email":"g_xing@163.com","author":"G_xing","message":"feat: 重新配置发布1"}]},"filePathRelative":"docker/docker镜像定制.md"}');export{r as comp,o as data};
