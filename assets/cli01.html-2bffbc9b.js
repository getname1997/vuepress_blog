import{_ as e,o as i,c as n,e as a}from"./app-90e665c7.js";const d={},s=a(`<h1 id="cli-初始化" tabindex="-1"><a class="header-anchor" href="#cli-初始化" aria-hidden="true">#</a> cli 初始化</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  npm init -y // 初始化npm
  npm i commander download-git-repo ora handlebars -s
  commander 命令行工具
  download-git-repo 下载git代码
  figlet  命令行工具 字体变大
  clear 清空命令行
  chalk  命令行颜色
  ora 进度条
  open 打开浏览器
   // 版本写死 
  “chalk”: “^4.1.2”,
  “ora”: “^5.1.0”,

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更改package" tabindex="-1"><a class="header-anchor" href="#更改package" aria-hidden="true">#</a> 更改package</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 添加 
{
  &quot;bin&quot;: {
    &quot;ks&quot; : &quot;./bin/ks.js&quot;
  }
  
}
 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[s];function c(r,v){return i(),n("div",null,l)}const u=e(d,[["render",c],["__file","cli01.html.vue"]]);export{u as default};
