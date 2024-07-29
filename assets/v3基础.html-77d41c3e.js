import{_ as n,o as s,c as a,e as t}from"./app-a3b4d25a.js";const e={},p=t(`<h1 id="❤️-父子传参" tabindex="-1"><a class="header-anchor" href="#❤️-父子传参" aria-hidden="true">#</a> ❤️ 父子传参</h1><h3 id="💡-v3-组件传参设置默认值" tabindex="-1"><a class="header-anchor" href="#💡-v3-组件传参设置默认值" aria-hidden="true">#</a> 💡 v3 组件传参设置默认值</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/*
*  @defineProps  获取传来的值
*  @withDefaults 设置默认值❤️🔑   🔩 ⚡️ ⚙💡
* 
* */</span>
        <span class="token keyword">import</span> <span class="token punctuation">{</span>defineProps<span class="token punctuation">,</span> ref<span class="token punctuation">,</span>withDefaults<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span>typePlanList<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./type&#39;</span>
        <span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>
        planList<span class="token operator">:</span> typePlanList<span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token generic-function"><span class="token function">defineProps</span><span class="token generic class-name"><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">planList</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🔑-v3-keepalive用法" tabindex="-1"><a class="header-anchor" href="#🔑-v3-keepalive用法" aria-hidden="true">#</a> 🔑 v3 KeepAlive用法</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>    

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ Component }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>KeepAlive</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Component<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>KeepAlive</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","v3基础.html.vue"]]);export{r as default};
