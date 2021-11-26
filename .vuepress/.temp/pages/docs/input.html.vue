<template><h1 id="input-输入框" tabindex="-1"><a class="header-anchor" href="#input-输入框" aria-hidden="true">#</a> Input 输入框</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>文本输入框，在原生控件基础上进行了功能扩展。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>基础用法
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ value }}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleChange<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- 不同类型 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ value }}<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入手机号<span class="token punctuation">"</span></span> <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ 11 }}<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ value }}<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>safe-password<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入密码<span class="token punctuation">"</span></span> <span class="token attr-name">focus</span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- 禁用 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ value }}<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- 可清空 --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ value }}<span class="token punctuation">"</span></span> <span class="token attr-name">clearable</span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="apis" tabindex="-1"><a class="header-anchor" href="#apis" aria-hidden="true">#</a> APIs</h2>
<p>参考微信组件库<a href="https://developers.weixin.qq.com/miniprogram/dev/component/input.html" target="_blank" rel="noopener noreferrer">Input 文档<OutboundLink/></a></p>
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
<td>自定义 class 类名</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>输入框的唯一标识</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>value</td>
<td>输入框的初始内容</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>type</td>
<td>输入框类型</td>
<td>string</td>
<td>text</td>
<td>text、number、idcard、digit、safe-password</td>
<td></td>
</tr>
<tr>
<td>placeholder</td>
<td>占位文本</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>maxlength</td>
<td>最大输入长度,设置为 -1 的时候不限制最大长度</td>
<td>number</td>
<td>140</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>password</td>
<td>是否是密码类型</td>
<td>boolean</td>
<td>false</td>
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
<tr>
<td>clearable</td>
<td>是否可清空</td>
<td>boolean</td>
<td>false</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>focus</td>
<td>获取焦点</td>
<td>boolean</td>
<td>false</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>confirm-type</td>
<td>设置键盘右下角按钮的文字，仅在<code>type='text'</code>时生效</td>
<td>string</td>
<td>done</td>
<td><code>send</code>, <code>search</code>, <code>next</code>, <code>go</code></td>
<td>否</td>
</tr>
<tr>
<td>style</td>
<td>设置输入框的样式，默认 width 为 90%</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>placeholder-style</td>
<td>占位符的样式</td>
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
<td>change</td>
<td>当绑定值变化时触发的事件</td>
<td>e</td>
</tr>
<tr>
<td>focus</td>
<td>输入框 focus</td>
<td>e</td>
</tr>
<tr>
<td>blur</td>
<td>输入框 blur</td>
<td>e</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
</template>
