<template><h1 id="header-顶部栏" tabindex="-1"><a class="header-anchor" href="#header-顶部栏" aria-hidden="true">#</a> Header 顶部栏</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>用于自定义顶部栏。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>基础用法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ title }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-header</span><span class="token punctuation">></span></span>

返回上一页
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ title }}<span class="token punctuation">"</span></span> <span class="token attr-name">has-return</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-header</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ title }}<span class="token punctuation">"</span></span> <span class="token attr-name">has-return</span> <span class="token attr-name">navigator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>switchTab<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-header</span><span class="token punctuation">></span></span>

返回主页
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-header</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ title }}<span class="token punctuation">"</span></span> <span class="token attr-name">has-home</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-header</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
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
<td>title</td>
<td>标题</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>color</td>
<td>字体颜色</td>
<td>string</td>
<td><code>rgba(0, 0, 0, 1)</code></td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>background</td>
<td>背景颜色</td>
<td>string</td>
<td><code>rgba(255, 255, 255, 1)</code></td>
<td>=</td>
<td>否</td>
</tr>
<tr>
<td>has-return</td>
<td>是否需要返回按钮, 默认返回上一页</td>
<td>boolean</td>
<td>false</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>has-home</td>
<td>是否有首页按钮</td>
<td>boolean</td>
<td>false</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>navigator</td>
<td>返回按钮跳转方式, 参考<a href="https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html" target="_blank" rel="noopener noreferrer">微信官方文档<OutboundLink/></a></td>
<td>string</td>
<td><code>navigateBack</code></td>
<td><code>switchTab</code>, <code>reLaunch</code>, <code>redirectTo</code>, <code>navigateTo</code></td>
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
<td>暂无</td>
<td>-</td>
<td>-</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
</template>
