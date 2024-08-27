import{_ as n,o as s,c as a,e}from"./app-87ecfc16.js";const t={},p=e(`<h1 id="任务调度" tabindex="-1"><a class="header-anchor" href="#任务调度" aria-hidden="true">#</a> 任务调度</h1><h3 id="第一步下载依赖" tabindex="-1"><a class="header-anchor" href="#第一步下载依赖" aria-hidden="true">#</a> 第一步下载依赖</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>//<span class="token punctuation">]</span>: <span class="token comment"># (yarn add  @nestjs/schedule 依赖 cron)</span>
  <span class="token function">yarn</span> <span class="token function">add</span>  @nestjs/schedule

  <span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @types/cron
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二步引入依赖-并且初始化" tabindex="-1"><a class="header-anchor" href="#第二步引入依赖-并且初始化" aria-hidden="true">#</a> 第二步引入依赖 并且初始化</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// @@filename(app.module) </span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ScheduleModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/schedule&#39;</span><span class="token punctuation">;</span>


<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  imports<span class="token operator">:</span> <span class="token punctuation">[</span>
    ScheduleModule<span class="token punctuation">.</span><span class="token function">forRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  controllers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  providers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三步创建任务" tabindex="-1"><a class="header-anchor" href="#第三步创建任务" aria-hidden="true">#</a> 第三步创建任务</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// @@filename(XXX.service) 你的sevice文件 </span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nestjs/common&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Cron<span class="token punctuation">,</span> Interval<span class="token punctuation">,</span> Timeout<span class="token punctuation">,</span> NestSchedule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;nest-schedule&quot;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ScheduleService</span> <span class="token keyword">extends</span> <span class="token class-name">NestSchedule</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Cron</span></span><span class="token punctuation">(</span><span class="token string">&quot;0 0 0 * * *&quot;</span><span class="token punctuation">)</span>
  <span class="token keyword">async</span> <span class="token function">cronJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;每天0点执行一次&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="cron表达式" tabindex="-1"><a class="header-anchor" href="#cron表达式" aria-hidden="true">#</a> cron表达式</h4><table><thead><tr><th>* * * * * *</th><th>每秒执行</th></tr></thead><tbody><tr><td>45 * * * * *</td><td>每分钟第 45 秒执行</td></tr><tr><td>* 10 * * * *</td><td>每小时的第 10 分钟执行</td></tr><tr><td>0 */30 9-17 * * *</td><td>每天 9-17 点 每 30 分钟执行一次</td></tr><tr><td>0 30 11 * * 1-5</td><td>每周星期一到星期五 11.30 执行一次</td></tr></tbody></table><h3 id="第四步引入任务" tabindex="-1"><a class="header-anchor" href="#第四步引入任务" aria-hidden="true">#</a> 第四步引入任务</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// @@filename(XXX.model) sevice对应的模块文件 一般已经引入过了 </span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/common&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ScheduleModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@nestjs/schedule&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ScheduleService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./schedule.service&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Module</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  controllers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  providers<span class="token operator">:</span> <span class="token punctuation">[</span>ScheduleService<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),o=[p];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","taskScheduling.html.vue"]]);export{d as default};