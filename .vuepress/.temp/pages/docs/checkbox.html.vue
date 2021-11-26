<template><h1 id="checkbox-多选框" tabindex="-1"><a class="header-anchor" href="#checkbox-多选框" aria-hidden="true">#</a> Checkbox 多选框</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>多选框组件, 一般结合<RouterLink to="/docs/checkboxGroup.html">checkbox-group</RouterLink>使用。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>不同状态
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-checkbox-group</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ value1 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ value2 }}<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-checkbox</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ value3 }}<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-checkbox-group</span><span class="token punctuation">></span></span>

按钮位置
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-checkbox-group</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ value1 }}<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-checkbox-group</span><span class="token punctuation">></span></span>

按钮颜色
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-checkbox-group</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-checkbox</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ value1 }}<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#3e04df<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-checkbox</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-checkbox-group</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
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
<td>value</td>
<td>checkbox 标识，选中时触发 checkbox-group 的 change 事件，并携带 checkbox 的 value</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>checked</td>
<td>当前项是否选中</td>
<td>boolean</td>
<td>false</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>disabled</td>
<td>当前项是否禁用</td>
<td>boolean</td>
<td>false</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>color</td>
<td>选中状态颜色</td>
<td>string</td>
<td>#3895f7</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>position</td>
<td>按钮位置</td>
<td>string</td>
<td>left</td>
<td>left、right</td>
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
<td>切换选中状态</td>
<td>e</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
</template>
