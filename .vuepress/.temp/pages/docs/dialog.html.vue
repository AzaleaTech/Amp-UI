<template><h1 id="dialog-弹出框" tabindex="-1"><a class="header-anchor" href="#dialog-弹出框" aria-hidden="true">#</a> Dialog 弹出框</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>弹出模态框，常用于消息确认，或在当前页面内完成特定的交互操作。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-dialog</span> <span class="token attr-name">dialogData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ dialogData }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-dialog</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">handleText</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      dialogData<span class="token operator">:</span> <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'弹窗标题'</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token string">'弹窗内容'</span><span class="token punctuation">,</span>
        cancelText<span class="token operator">:</span> <span class="token string">'取消'</span><span class="token punctuation">,</span>
        confirmText<span class="token operator">:</span> <span class="token string">'确定'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">declare</span> dialogData <span class="token punctuation">{</span>
  content<span class="token operator">:</span> String<span class="token punctuation">,</span>
  title<span class="token operator">?</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  cancelText<span class="token operator">?</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  confirmText<span class="token operator">?</span><span class="token operator">:</span> String
  cancel<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Function</span>  <span class="token comment">// 取消回调函数</span>
  confirm<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Function</span> <span class="token comment">// 确定回调函数</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>dialogData</td>
<td>弹框对象内容</td>
<td>Object</td>
<td>-</td>
<td>是</td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>暂无</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
</template>
