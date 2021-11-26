<template><h1 id="rate-评分" tabindex="-1"><a class="header-anchor" href="#rate-评分" aria-hidden="true">#</a> Rate 评分</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>用于对事物进行评级操作, 包含评分展示(可包含小数)。</p>
<blockquote>
<p>默认两图标间距为图标宽度的一半。</p>
</blockquote>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>基础用法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name"><span class="token namespace">bind:</span>change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">></span></span>

不同大小
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>60<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">></span></span>

不同数量
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ 3 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ 7 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">></span></span>

只读
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ 2.68 }}<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ 5 }}<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
<table>
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
<td>a-class</td>
<td>自定义 class 类名</td>
<td>string</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>count</td>
<td>star 总数</td>
<td>number</td>
<td>5</td>
<td>否</td>
</tr>
<tr>
<td>value</td>
<td>当前 star 数</td>
<td>number</td>
<td>0</td>
<td>否</td>
</tr>
<tr>
<td>size</td>
<td>图标大小，单位[<code>rpx</code>]</td>
<td>string</td>
<td>50</td>
<td>否</td>
</tr>
<tr>
<td>disabled</td>
<td>是否只读，无法进行交互</td>
<td>boolean</td>
<td>false</td>
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
<td>点击评分时触发</td>
<td>e</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
</template>
