import{_ as n,c as a,a as e,o as i}from"./app-BbvArNMd.js";const l={};function c(d,s){return i(),a("div",null,[...s[0]||(s[0]=[e(`<h3 id="事务-防止多个sql其中一个出问题-可以回退" tabindex="-1"><a class="header-anchor" href="#事务-防止多个sql其中一个出问题-可以回退"><span>事务 - 防止多个sql其中一个出问题，可以回退</span></a></h3><div class="language-sqlite line-numbers-mode" data-highlighter="prismjs" data-ext="sqlite"><pre><code class="language-sqlite"><span class="line">-- 开启事务</span>
<span class="line">START TRANSACTION</span>
<span class="line"></span>
<span class="line">-- 保存</span>
<span class="line">SAVEPOINT aaa;</span>
<span class="line"></span>
<span class="line">UPDATE order_items SET quantity=1 WHERE order_id=3;</span>
<span class="line"></span>
<span class="line">SAVEPOINT bbb;</span>
<span class="line"></span>
<span class="line">UPDATE orders SET total_amount=200 WHERE id=3;</span>
<span class="line"></span>
<span class="line">SAVEPOINT ccc;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">-- 回退</span>
<span class="line">ROLLBACK TO SAVEPOINT bbb;</span>
<span class="line"></span>
<span class="line">--完成</span>
<span class="line">COMMIT </span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事务级别" tabindex="-1"><a class="header-anchor" href="#事务级别"><span>事务级别</span></a></h2><ul><li><p><strong>READ UNCOMMITTED</strong>：可以读到别的事务尚未提交的数据。</p></li><li><p><strong>READ COMMITTED</strong>：只读取别的事务已提交的数据。</p></li><li><p><strong>REPEATABLE READ</strong>：在同一事务内，多次读取数据将保证结果相同。 默认</p></li><li><p><strong>SERIALIZABLE</strong>：在同一时间只允许一个事务修改数据。</p></li></ul>`,4)])])}const p=n(l,[["render",c],["__file","7.事务.html.vue"]]),t=JSON.parse('{"path":"/python/7.%E4%BA%8B%E5%8A%A1.html","title":"","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1773020306000,"contributors":[{"name":"g_xing","username":"","email":"g_xing@163.com","commits":1}],"changelog":[{"hash":"1ed0e0b2faefeac3f186b556ea91afe1e91079c1","time":1773020306000,"email":"g_xing@163.com","author":"g_xing","message":"feat: 日常更新-2026-3-9"}]},"filePathRelative":"python/7.事务.md"}');export{p as comp,t as data};
