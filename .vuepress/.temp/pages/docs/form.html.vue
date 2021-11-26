<template><h1 id="form-表单" tabindex="-1"><a class="header-anchor" href="#form-表单" aria-hidden="true">#</a> Form 表单</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>表单组件。将组件内的用户输入的值提交。要获取数据，可以自行在页面的 state 中获取。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>Form 统一标签对齐方式（justify）
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form</span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>160<span class="token punctuation">"</span></span> <span class="token attr-name">label-align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>justify<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form</span><span class="token punctuation">></span></span>

FormItem 标签对齐方式（left、right、justify）
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>左对齐<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>右对齐<span class="token punctuation">"</span></span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>160<span class="token punctuation">"</span></span> <span class="token attr-name">label-align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>居中对齐<span class="token punctuation">"</span></span> <span class="token attr-name">label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>160<span class="token punctuation">"</span></span> <span class="token attr-name">label-align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>justify<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form</span><span class="token punctuation">></span></span>

校验设置
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>必填项<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>警告信息<span class="token punctuation">"</span></span> <span class="token attr-name">warning-message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>数据格式错误<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form</span><span class="token punctuation">></span></span>

附加设置（图标、箭头）
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>带图标表单项<span class="token punctuation">"</span></span> <span class="token attr-name">icon-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/demo/assets/images/test-avatar.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span>
    <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>尾部信息及箭头<span class="token punctuation">"</span></span>
    <span class="token attr-name">footer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>详情<span class="token punctuation">"</span></span>
    <span class="token attr-name">footer-arrow</span>
    <span class="token attr-name"><span class="token namespace">bind:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClickFormItem<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form</span><span class="token punctuation">></span></span>

结合其他表单输入组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form</span> <span class="token attr-name">labelWidth</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>160<span class="token punctuation">"</span></span> <span class="token attr-name">labelAlign</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Input<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>请输入文字<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Picker<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picker</span> <span class="token attr-name">range</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ range }}<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ value }}<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handlePickerChange<span class="token punctuation">"</span></span>
      <span class="token punctuation">></span></span>{{ value }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picker</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form-item</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token punctuation">{</span>
    range<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">handleClickFormItem</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'点击表单项'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">handlePickerChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      value<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
<h4 id="form" tabindex="-1"><a class="header-anchor" href="#form" aria-hidden="true">#</a> Form</h4>
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
<td>labelAlign</td>
<td><code>label</code>标签的文本对齐方式, 需结合<code>labelWidth</code>一起使用</td>
<td>string</td>
<td>left</td>
<td>left、right、justify</td>
<td>否</td>
</tr>
<tr>
<td>labelColor</td>
<td><code>label</code>标签的文本颜色</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>labelWidth</td>
<td><code>label</code>标签的文本宽度, 单位[<code>rpx</code>]</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
</tbody>
</table>
<h4 id="formitem" tabindex="-1"><a class="header-anchor" href="#formitem" aria-hidden="true">#</a> FormItem</h4>
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
<td>label</td>
<td>标签名称</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>是</td>
</tr>
<tr>
<td>labelAlign</td>
<td><code>label</code>标签的文本对齐方式, 需结合<code>labelWidth</code>一起使用</td>
<td>string</td>
<td>-</td>
<td>left、right、justify</td>
<td>否</td>
</tr>
<tr>
<td>labelColor</td>
<td><code>label</code>标签的文本颜色</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>labelWidth</td>
<td><code>label</code>标签的文本宽度, 单位[<code>rpx</code>]</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>required</td>
<td>是否必填</td>
<td>boolean</td>
<td>false</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>warningMessage</td>
<td>警告信息</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>iconUrl</td>
<td>表单项图标地址</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>footer</td>
<td>表单项尾部文字</td>
<td>string</td>
<td>-</td>
<td>-</td>
<td>否</td>
</tr>
<tr>
<td>footer-arrow</td>
<td>表单项尾部箭头</td>
<td>boolean</td>
<td>false</td>
<td>-</td>
<td>否</td>
</tr>
</tbody>
</table>
<h3 id="formitem-slots" tabindex="-1"><a class="header-anchor" href="#formitem-slots" aria-hidden="true">#</a> FormItem Slots</h3>
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
<td>自定义表单组件, 如<code>input</code>, <code>radio</code>等</td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
<h4 id="form-1" tabindex="-1"><a class="header-anchor" href="#form-1" aria-hidden="true">#</a> Form</h4>
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
<h4 id="formitem-1" tabindex="-1"><a class="header-anchor" href="#formitem-1" aria-hidden="true">#</a> FormItem</h4>
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
<td>每一项点击事件</td>
<td>e</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
</template>
