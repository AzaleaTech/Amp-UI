<template><h1 id="steps-步骤条" tabindex="-1"><a class="header-anchor" href="#steps-步骤条" aria-hidden="true">#</a> Steps 步骤条</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>用于展示某项任务的具体流程。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>基础用法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-steps</span> <span class="token attr-name">steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ steps1 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-steps</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-steps</span> <span class="token attr-name">steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ steps2 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-steps</span><span class="token punctuation">></span></span>

竖直方向
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-steps</span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ steps1 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-steps</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-steps</span> <span class="token attr-name">current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ 1 }}<span class="token punctuation">"</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>vertical<span class="token punctuation">"</span></span> <span class="token attr-name">steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ steps2 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-steps</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    steps1<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'第一步'</span><span class="token punctuation">,</span> <span class="token string">'第二步'</span><span class="token punctuation">,</span> <span class="token string">'第三步'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    steps2<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'第一步'</span><span class="token punctuation">,</span>
        desc<span class="token operator">:</span> <span class="token string">'描述信息'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'第二步'</span><span class="token punctuation">,</span>
        desc<span class="token operator">:</span> <span class="token string">'这是描述信息, 最多两行'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'第三步'</span><span class="token punctuation">,</span>
        desc<span class="token operator">:</span> <span class="token string">'这是描述信息描述信息描述信息描述信息描述信息描述信息'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
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
<td>steps</td>
<td>步骤条数据列表, 只有标题时可以传<code>Array[string]</code>,其他具体字段详见下表</td>
<td>Array[string] | Array[<code>step</code>]</td>
<td>-</td>
<td>-</td>
<td>是</td>
</tr>
<tr>
<td>current</td>
<td>当前步骤索引值</td>
<td>number</td>
<td>0</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>direction</td>
<td>显示方向</td>
<td>string</td>
<td>horizontal</td>
<td>horizontal、vertical</td>
<td>否</td>
</tr>
</tbody>
</table>
<p><code>step</code> object 字段说明</p>
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
<td>title</td>
<td>标题</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>是</td>
</tr>
<tr>
<td>desc</td>
<td>描述</td>
<td>string</td>
<td>-</td>
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
<td>click</td>
<td>点击步骤时触发的事件, 返回当前步骤的索引</td>
<td>e</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
</template>
