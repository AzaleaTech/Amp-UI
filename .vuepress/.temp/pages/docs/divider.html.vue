<template><h1 id="divider-分割线" tabindex="-1"><a class="header-anchor" href="#divider-分割线" aria-hidden="true">#</a> Divider 分割线</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>分割内容提示符。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>一般用法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-divider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>分割线<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-divider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>虚线<span class="token punctuation">"</span></span> <span class="token attr-name">dashed</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-divider</span><span class="token punctuation">></span></span>

字体大小
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>分割线<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ 28 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-divider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>分割线<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ 36 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-divider</span><span class="token punctuation">></span></span>

字体颜色
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>分割线<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#1f47d7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-divider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>分割线<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ff4949<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-divider</span><span class="token punctuation">></span></span>

线条颜色
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span> <span class="token attr-name">line-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#1f47d7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-divider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span> <span class="token attr-name">line-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#ff4949<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-divider</span><span class="token punctuation">></span></span>

slot插槽
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span><span class="token punctuation">></span></span>自定义内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-divider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-divider</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>succeed_line<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> icon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-divider</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
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
<td>content</td>
<td>文本内容</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>height</td>
<td>高度, 单位[<code>rpx</code>]</td>
<td>number</td>
<td>48</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>color</td>
<td>文本颜色</td>
<td>string</td>
<td>#2f2f2f</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>size</td>
<td>字体大小, 单位[<code>rpx</code>]</td>
<td>number</td>
<td>32</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>dashed</td>
<td>是否虚线</td>
<td>boolean</td>
<td>false</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>line-color</td>
<td>线条颜色</td>
<td>string</td>
<td>#ccc</td>
<td>-</td>
<td>否</td>
</tr>
</tbody>
</table>
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3>
<blockquote>
<p>只有当 content 为空时，才能嵌套子组件</p>
</blockquote>
<table>
<thead>
<tr>
<th>插槽名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>自定义内容, 如图标、图片等</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
</template>
