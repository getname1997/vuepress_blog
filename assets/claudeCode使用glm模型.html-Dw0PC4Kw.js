import{_ as n,c as a,a as e,o as l}from"./app-BbvArNMd.js";const i={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="安装claude-code" tabindex="-1"><a class="header-anchor" href="#安装claude-code"><span>安装claude code</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">npm install -g @anthropic-ai/claude-code</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>配置key （我们使用百炼大模型的 glm-4.7 不支持 使用qwen3-max）</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"># MacOS &amp; Linux 为 \`~/.claude/settings.json\`</span>
<span class="line"># Windows 为\`用户目录/.claude/settings.json\`</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;ANTHROPIC_AUTH_TOKEN&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sk-a020dd52bad2445798883d11e242bf42&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;ANTHROPIC_DEFAULT_HAIKU_MODEL&quot;</span><span class="token operator">:</span> <span class="token string">&quot;qwen-plus&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;ANTHROPIC_DEFAULT_SONNET_MODEL&quot;</span><span class="token operator">:</span> <span class="token string">&quot;qwen3-max&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;ANTHROPIC_DEFAULT_OPUS_MODEL&quot;</span><span class="token operator">:</span> <span class="token string">&quot;qwen3-max&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;ANTHROPIC_BASE_URL&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://dashscope.aliyuncs.com/apps/anthropic&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;API_TIMEOUT_MS&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3000000&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC&quot;</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"># 再编辑或新增 \`.claude.json\` 文件</span>
<span class="line"># MacOS &amp; Linux 为 \`~/.claude.json\`</span>
<span class="line"># Windows 为\`用户目录/.claude.json\`</span>
<span class="line"># 新增 \`hasCompletedOnboarding\` 参数</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;hasCompletedOnboarding&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>claude 命令里面 安装 ui-ux-pro-max-skill 安装 （命令行先 claude -&gt; /init ）</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill</span>
<span class="line">/plugin install ui-ux-pro-max@ui-ux-pro-max-skill</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>项目初始化</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line"></span>
<span class="line"># Install CLI globally</span>
<span class="line">npm install -g uipro-cli</span>
<span class="line"></span>
<span class="line"># Go to your project</span>
<span class="line">cd /path/to/your/project</span>
<span class="line"></span>
<span class="line"># Install for your AI assistant</span>
<span class="line">uipro init --ai claude      # Claude Code</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 正常使用claude即可</p>`,10)])])}const o=n(i,[["render",p],["__file","claudeCode使用glm模型.html.vue"]]),d=JSON.parse('{"path":"/python/claudeCode%E4%BD%BF%E7%94%A8glm%E6%A8%A1%E5%9E%8B.html","title":"安装claude code","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1773020306000,"contributors":[{"name":"g_xing","username":"","email":"g_xing@163.com","commits":1}],"changelog":[{"hash":"1ed0e0b2faefeac3f186b556ea91afe1e91079c1","time":1773020306000,"email":"g_xing@163.com","author":"g_xing","message":"feat: 日常更新-2026-3-9"}]},"filePathRelative":"python/claudeCode使用glm模型.md"}');export{o as comp,d as data};
