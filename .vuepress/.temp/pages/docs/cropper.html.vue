<template><h1 id="cropper-图片裁剪" tabindex="-1"><a class="header-anchor" href="#cropper-图片裁剪" aria-hidden="true">#</a> Cropper 图片裁剪</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>图片裁剪。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>基础用法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-cropper</span> <span class="token attr-name">img-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ imgUrl }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-cropper</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-cropper</span> <span class="token attr-name">img-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ imgUrl }}<span class="token punctuation">"</span></span> <span class="token attr-name">circle</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-cropper</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-cropper</span> <span class="token attr-name">img-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ imgUrl }}<span class="token punctuation">"</span></span> <span class="token attr-name">ratio</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ 1.2 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-cropper</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
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
<td>img-url</td>
<td>图片地址</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>是</td>
</tr>
<tr>
<td>ratio</td>
<td>裁剪比例</td>
<td>number</td>
<td>1</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>circle</td>
<td>是否圆形裁剪, 大小固定 400rpx</td>
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
<td>cancel</td>
<td>取消裁剪</td>
<td>-</td>
</tr>
<tr>
<td>save</td>
<td>裁剪后保存图片</td>
<td>{ file, fileName }</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
<p>Q:tempFilePath 无法作为 img 标签的 src 属性显示图片。</p>
<p>A:使用本地图片而非网络图片</p>
</template>
