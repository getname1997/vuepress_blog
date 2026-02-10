import{_ as s,c as a,a as e,o as i}from"./app-Bjm7WZ4G.js";const l={};function c(p,n){return i(),a("div",null,[...n[0]||(n[0]=[e(`<h1 id="docker-初始化" tabindex="-1"><a class="header-anchor" href="#docker-初始化"><span>DOCKER 初始化</span></a></h1><h2 id="安装-init" tabindex="-1"><a class="header-anchor" href="#安装-init"><span>安装 init</span></a></h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>windows</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line"> winget <span class="token function">install</span> Docker.DockerDesktop</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>linux</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">// 卸载旧版本<span class="token punctuation">[</span>docker镜像使用.md<span class="token punctuation">]</span><span class="token punctuation">(</span>docker%BE%B5%CF%F1%CA%B9%D3%C3.md<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span><span class="token punctuation">[</span>docker镜像使用.md<span class="token punctuation">]</span><span class="token punctuation">(</span>docker%BE%B5%CF%F1%CA%B9%D3%C3.md<span class="token punctuation">)</span></span>
<span class="line">                  docker-client <span class="token punctuation">\\</span></span>
<span class="line">                  docker-client-latest <span class="token punctuation">\\</span></span>
<span class="line">                  docker-common <span class="token punctuation">\\</span></span>
<span class="line">                  docker-latest <span class="token punctuation">\\</span></span>
<span class="line">                  docker-latest-logrotate <span class="token punctuation">\\</span></span>
<span class="line">                  docker-logrotate <span class="token punctuation">\\</span></span>
<span class="line">                  docker-selinux <span class="token punctuation">\\</span></span>
<span class="line">                  docker-engine-selinux <span class="token punctuation">\\</span></span>
<span class="line">                  docker-engine</span>
<span class="line"></span>
<span class="line">// 安装依赖</span>
<span class="line"><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils</span>
<span class="line">// 更换源</span>
<span class="line"><span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span></span>
<span class="line">    --add-repo <span class="token punctuation">\\</span></span>
<span class="line">    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span>
<span class="line"><span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/download.docker.com/mirrors.aliyun.com\\/docker-ce/g&#39;</span> /etc/yum.repos.d/docker-ce.repo</span>
<span class="line"><span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io</span>
<span class="line"></span>
<span class="line">// 防火墙</span>
<span class="line">firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>trusted --add-interface<span class="token operator">=</span>docker0</span>
<span class="line">firewall-cmd <span class="token parameter variable">--reload</span></span>
<span class="line"></span>
<span class="line">// 启动</span>
<span class="line"><span class="token function">sudo</span> systemctl start <span class="token function">docker</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)])])}const o=s(l,[["render",c],["__file","docker.html.vue"]]),d=JSON.parse('{"path":"/docker/docker.html","title":"DOCKER  初始化","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1718690390000,"contributors":[{"name":"G_xing","username":"","email":"g_xing@163.com","commits":1}],"changelog":[{"hash":"bd8e9e73b187645f098294dea2d1c759b7acaaa0","time":1718690390000,"email":"g_xing@163.com","author":"G_xing","message":"feat: 重新配置发布1"}]},"filePathRelative":"docker/docker.md"}');export{o as comp,d as data};
