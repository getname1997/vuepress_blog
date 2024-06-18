import{_ as n,o as s,c as a,e}from"./app-90e665c7.js";const i={},c=e(`<h1 id="docker-初始化" tabindex="-1"><a class="header-anchor" href="#docker-初始化" aria-hidden="true">#</a> DOCKER 初始化</h1><h2 id="安装-init" tabindex="-1"><a class="header-anchor" href="#安装-init" aria-hidden="true">#</a> 安装 init</h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> windows</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> winget <span class="token function">install</span> Docker.DockerDesktop

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> linux</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 卸载旧版本<span class="token punctuation">[</span>docker镜像使用.md<span class="token punctuation">]</span><span class="token punctuation">(</span>docker%BE%B5%CF%F1%CA%B9%D3%C3.md<span class="token punctuation">)</span>
<span class="token function">sudo</span> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span><span class="token punctuation">[</span>docker镜像使用.md<span class="token punctuation">]</span><span class="token punctuation">(</span>docker%BE%B5%CF%F1%CA%B9%D3%C3.md<span class="token punctuation">)</span>
                  docker-client <span class="token punctuation">\\</span>
                  docker-client-latest <span class="token punctuation">\\</span>
                  docker-common <span class="token punctuation">\\</span>
                  docker-latest <span class="token punctuation">\\</span>
                  docker-latest-logrotate <span class="token punctuation">\\</span>
                  docker-logrotate <span class="token punctuation">\\</span>
                  docker-selinux <span class="token punctuation">\\</span>
                  docker-engine-selinux <span class="token punctuation">\\</span>
                  docker-engine

// 安装依赖
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils
// 更换源
<span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
<span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/download.docker.com/mirrors.aliyun.com\\/docker-ce/g&#39;</span> /etc/yum.repos.d/docker-ce.repo
<span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io

// 防火墙
firewall-cmd <span class="token parameter variable">--permanent</span> <span class="token parameter variable">--zone</span><span class="token operator">=</span>trusted --add-interface<span class="token operator">=</span>docker0
firewall-cmd <span class="token parameter variable">--reload</span>

// 启动
<span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[c];function o(l,d){return s(),a("div",null,t)}const u=n(i,[["render",o],["__file","docker.html.vue"]]);export{u as default};
