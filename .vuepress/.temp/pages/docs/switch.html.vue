<template><h1 id="switch-开关" tabindex="-1"><a class="header-anchor" href="#switch-开关" aria-hidden="true">#</a> Switch 开关</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>用于两状态之间的相互切换。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>不同颜色
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-switch</span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ checked1 }}<span class="token punctuation">"</span></span> <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-switch</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-switch</span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ checked2 }}<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#f42dee<span class="token punctuation">"</span></span> <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-switch</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-switch</span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ checked3 }}<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#2f445d<span class="token punctuation">"</span></span> <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-switch</span><span class="token punctuation">></span></span>

禁用状态
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-switch</span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ checked4 }}<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-switch</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-switch</span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ !checked4 }}<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-switch</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    checked1<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    checked2<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    checked3<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    checked4<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> index <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>dataset<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token punctuation">[</span><span class="token string">'checked'</span> <span class="token operator">+</span> index<span class="token punctuation">]</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
<th>可选值</th>
<th>必填</th>
</tr>
</thead>
<tbody>
<tr>
<td>a-class</td>
<td>自定义根节点样式类</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>checked</td>
<td>是否选中</td>
<td>boolean</td>
<td>false</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>color</td>
<td>checked 为 true 时，对应底色</td>
<td>string</td>
<td>${primary-color}</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>false</td>
<td>-</td>
<td>否</td>
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
<td>change</td>
<td>开关变化时触发事件</td>
<td>e</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
</template>
