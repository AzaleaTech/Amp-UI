<template><h1 id="parse-富文本解析" tabindex="-1"><a class="header-anchor" href="#parse-富文本解析" aria-hidden="true">#</a> Parse 富文本解析</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>用于小程序富文本内容解析(图片、视频、链接), 参考 <a href="https://github.com/csonchen/wxParse" target="_blank" rel="noopener noreferrer">github<OutboundLink/></a>。</p>
<blockquote>
<p>tip: 后台富文本暂不支持语音和代码高亮, 故移除 <em>wxAudio</em> 和 <em>highLight</em> 组件。</p>
</blockquote>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>基本使用
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-parse</span> <span class="token attr-name">nodes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ node1 }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-parse</span><span class="token punctuation">></span></span>

外部链接跳转
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-parse</span> <span class="token attr-name">nodes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ node2 }}<span class="token punctuation">"</span></span> <span class="token attr-name">webview-path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ webviewPath }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-parse</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    webviewPath<span class="token operator">:</span> <span class="token string">'/demo/pages/webview/index'</span><span class="token punctuation">,</span>
    node1<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;p>&lt;img src="https://wpw-qt.oss-cn-hangzhou.aliyuncs.com/article/1628208832066472069.png"/>&lt;/p>&lt;p style="text-align: justify; text-indent: 2em;">1978年8月5日、6日，邓小平在同阿拉伯利比亚代表团会谈时指出：双方对某些问题看法不一致没有关系。有些问题是要由实践来证明的，双方可以保留各自的观点，允许我们继续考虑，继续观察。即使是最亲密的国家之间，也不可能对问题的看法完全一致。我们同各国朋友打交道，总是采取这样一个原则，求同存异。找出共同点，这当然很好，即使有不同点，双方仍可保留自己的观点。个人之间也是这样，朋友再好，也有吵架的时候。我们希望有二十年的和平时期，好好搞建设。我们希望安定二十年，有一个安定的国际环境，来发展我们的经济，增加人民的收入。&lt;/p>&lt;p>&lt;br/>&lt;/p></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    node2<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;p>&lt;a href="https://azalea-tech.com/">岭上官网&lt;/a></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
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
<td>nodes</td>
<td>富文本内容</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>是</td>
</tr>
<tr>
<td>language</td>
<td>语言</td>
<td>string</td>
<td>html</td>
<td>html, markdown (md)</td>
<td>否</td>
</tr>
<tr>
<td>webviewPath</td>
<td>外部跳转页面路径, 可以在组件内部统一指定</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
<p>Q: 富文本链接打不开？</p>
<p>A: 检查 webview 路径, 以及检查是否带了 src 参数</p>
</template>
