import{_ as n,o as s,c as a,e as t}from"./app-90e665c7.js";const p={},e=t(`<h1 id="面试题" tabindex="-1"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h1><h3 id="实现-lazyman" tabindex="-1"><a class="header-anchor" href="#实现-lazyman" aria-hidden="true">#</a> 实现 lazyMan</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code> <span class="token comment">/*
 * 实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!
LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
以此类推。
 * 
 * 
 * */</span>
<span class="token keyword">class</span> <span class="token class-name">_LazyMan</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tasks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> <span class="token function-variable function">task</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hi! This is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>               <span class="token comment">// 把 this.next() 放到调用栈清空之后执行</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> task <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取第一个任务执行</span>
        task <span class="token operator">&amp;&amp;</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_sleepWrapper</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>                     <span class="token comment">// 链式调用</span>
    <span class="token punctuation">}</span>

    <span class="token function">sleepFirst</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_sleepWrapper</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">_sleepWrapper</span><span class="token punctuation">(</span>time<span class="token punctuation">,</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token function-variable function">task</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Wake up after </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>time<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> time <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 放到任务队列顶部</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">// 放到任务队列尾部</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token function">eat</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token function-variable function">task</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Eat </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>task<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">LazyMan</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">_LazyMan</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> 双指针</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">let</span>	s <span class="token operator">=</span> <span class="token string">&quot;cbbdsdasssdshhdsgfgshigsadifggfstrgusadsfdgsadfdgiyasgigouasohbsdfpapsadmpnsdsas67rgtraddsadsadssaafasf7474safas&quot;</span>
	<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>str<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>right<span class="token operator">=</span>str<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span><span class="token punctuation">(</span>right<span class="token operator">&gt;=</span>left<span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token operator">!==</span>str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
			right<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> str<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">function</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token keyword">let</span> maxlength <span class="token operator">=</span> <span class="token number">0</span>
		<span class="token keyword">let</span> maxString <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			left <span class="token operator">=</span> i
			right <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">&lt;=</span> maxString<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">return</span> maxString
			<span class="token punctuation">}</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>right<span class="token operator">&gt;</span>left<span class="token punctuation">)</span><span class="token punctuation">{</span>
				<span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span> <span class="token operator">===</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token keyword">let</span> str<span class="token operator">=</span><span class="token function">isPalindrome</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span>right<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">if</span><span class="token punctuation">(</span>str<span class="token operator">!=</span><span class="token keyword">null</span><span class="token operator">&amp;&amp;</span>str<span class="token punctuation">.</span>length<span class="token operator">&gt;</span>maxString<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
						maxString<span class="token operator">=</span>str<span class="token punctuation">;</span>
						<span class="token keyword">break</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
				right<span class="token operator">--</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span>  maxString
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">longestPalindrome</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> git</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git cherry-pick  
 挑选一条commit记录合并
  git cherry-pick commit-id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","面试.html.vue"]]);export{k as default};
