<template><h1 id="tabs-标签页" tabindex="-1"><a class="header-anchor" href="#tabs-标签页" aria-hidden="true">#</a> Tabs 标签页</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>标签页组件，用于让用户在不同的视图中进行切换。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>基础用法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-tabs</span> <span class="token attr-name">tabList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ [<span class="token punctuation">'</span>tab1<span class="token punctuation">'</span>, <span class="token punctuation">'</span>tab2<span class="token punctuation">'</span>] }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-tabs</span><span class="token punctuation">></span></span>

默认选中标签页
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-tabs</span> <span class="token attr-name">tabList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ [<span class="token punctuation">'</span>tab1<span class="token punctuation">'</span>, <span class="token punctuation">'</span>tab2<span class="token punctuation">'</span>] }}<span class="token punctuation">"</span></span> <span class="token attr-name">current</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ 1 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-tabs</span><span class="token punctuation">></span></span>

顶部吸附
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-tabs</span> <span class="token attr-name">tabList</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ [<span class="token punctuation">'</span>tab1<span class="token punctuation">'</span>, <span class="token punctuation">'</span>tab2<span class="token punctuation">'</span>] }}<span class="token punctuation">"</span></span> <span class="token attr-name">ceiling</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-tabs</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
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
<td>tabList</td>
<td>tab 列表</td>
<td>Array[string]</td>
<td>[]</td>
<td>是</td>
</tr>
<tr>
<td>current</td>
<td>当前选中的标签索引值</td>
<td>number</td>
<td>0</td>
<td>否</td>
</tr>
<tr>
<td>ceiling</td>
<td>是否顶部吸附</td>
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
<td>切换标签回调</td>
<td>e</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
</template>
