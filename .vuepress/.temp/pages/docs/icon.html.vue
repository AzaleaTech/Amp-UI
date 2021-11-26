<template><h1 id="icon-图标" tabindex="-1"><a class="header-anchor" href="#icon-图标" aria-hidden="true">#</a> Icon 图标</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>自定义图标库, 基于<a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">Iconfont 图标库<OutboundLink/></a>, <a href="https://www.npmjs.com/package/mini-program-iconfont-cli" target="_blank" rel="noopener noreferrer">mini-program-iconfont-cli 插件<OutboundLink/></a> 生成</p>
<blockquote>
<p>需联系管理员加入对应的 iconfont 项目组</p>
</blockquote>
<p><img src="https://raw.githubusercontent.com/iconfont-cli/mini-program-iconfont-cli/master/images/symbol-url.png" alt="symbol"></p>
<ol>
<li>替换<code>iconfont.json</code>文件中<code>symbol_url</code>字段为上图中链接</li>
<li>run <code>npx iconfont-wechat</code> 生成 Icon 文件夹</li>
</ol>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<p>在.json 中引入组件</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>基础用法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>satisfied_fill<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-icon</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>satisfied_fill<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ 80 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-icon</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
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
<td>name</td>
<td>图标名称</td>
<td>string</td>
<td>-</td>
<td>是</td>
</tr>
<tr>
<td>color</td>
<td>图标颜色</td>
<td>string</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>size</td>
<td>图标大小, 默认单位为[<code>rpx</code>]</td>
<td>number</td>
<td>60</td>
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
