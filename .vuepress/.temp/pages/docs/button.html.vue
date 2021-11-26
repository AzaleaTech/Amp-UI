<template><h1 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>按钮用于触发一个操作，如提交表单。</p>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>按钮类型
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>error<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>

行内按钮
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">inline</span><span class="token punctuation">></span></span>按钮1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">inline</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>按钮2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>

按钮形状
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">circle</span><span class="token punctuation">></span></span>圆角<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">circle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{ false }}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>无圆角<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>

按钮尺寸
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>大尺寸<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>default<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>默认尺寸<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>小尺寸<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>

按钮状态
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>禁用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">loading</span><span class="token punctuation">></span></span>加载中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>

开放能力
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>contact<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>contact<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getUserInfo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>getUserInfo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getPhoneNumber<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>getPhoneNumber<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>openSetting<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>openSetting<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>launchApp<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>launchApp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>必填</th>
<th>类型</th>
<th>默认值</th>
<th>可选值</th>
</tr>
</thead>
<tbody>
<tr>
<td>a-class</td>
<td>自定义外部样式类</td>
<td>否</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>按钮类型 (颜色，边框，字体)</td>
<td>否</td>
<td>string</td>
<td>default</td>
<td>default、primary、success、warning、error</td>
</tr>
<tr>
<td>inline</td>
<td>是否为行内元素，开启后宽度为自适应型</td>
<td>否</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>circle</td>
<td>按钮圆角</td>
<td>否</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>按钮尺寸</td>
<td>否</td>
<td>string</td>
<td>default</td>
<td>large、default、small</td>
</tr>
<tr>
<td>disabled</td>
<td>设置按钮为禁用状态</td>
<td>否</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>loading</td>
<td>设置按钮为加载中状态</td>
<td>否</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>open-type</td>
<td>微信开放能力, 参考<a href="https://developers.weixin.qq.com/miniprogram/dev/component/button.html" target="_blank" rel="noopener noreferrer">微信 button 文档<OutboundLink/></a></td>
<td>否</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>form-type</td>
<td>用于 <code>form</code> 组件, 参考<a href="https://developers.weixin.qq.com/miniprogram/dev/component/button.html" target="_blank" rel="noopener noreferrer">微信 button 文档<OutboundLink/></a></td>
<td>否</td>
<td>string</td>
<td>-</td>
<td></td>
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
<td>点击事件(无 openType 时触发)</td>
<td>-</td>
</tr>
<tr>
<td>contact</td>
<td>客服消息回调，open-type=&quot;contact&quot;时有效</td>
<td>e</td>
</tr>
<tr>
<td>error</td>
<td>当使用开放能力时，发生错误的回调，open-type=launchApp 时有效</td>
<td>e</td>
</tr>
<tr>
<td>getuserinfo</td>
<td>用户点击该按钮时，会返回获取到的用户信息，open-type=&quot;getUserInfo&quot;时有效</td>
<td>e</td>
</tr>
<tr>
<td>getphonenumber</td>
<td>获取用户手机号回调，open-type=getPhoneNumber 时有效</td>
<td>e</td>
</tr>
<tr>
<td>opensetting</td>
<td>在打开授权设置页后回调，open-type=openSetting 时有效</td>
<td>e</td>
</tr>
</tbody>
</table>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>
</template>
