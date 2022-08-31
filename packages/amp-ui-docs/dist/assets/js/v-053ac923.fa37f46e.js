"use strict";(self.webpackChunkamp_ui_docs=self.webpackChunkamp_ui_docs||[]).push([[33],{7308:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-053ac923",path:"/src/button.html",title:"Button 按钮",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"概述",slug:"概述",children:[]},{level:2,title:"示例",slug:"示例",children:[]},{level:2,title:"API",slug:"api",children:[{level:3,title:"Props",slug:"props",children:[]},{level:3,title:"Events",slug:"events",children:[]}]},{level:2,title:"常见问题",slug:"常见问题",children:[]}],filePathRelative:"src/button.md",git:{updatedTime:null}}},6214:(n,a,s)=>{s.r(a),s.d(a,{default:()=>B});var t=s(6252);const p=(0,t.uE)('<h1 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>按钮用于触发一个操作，如提交表单。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>按钮类型\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n\n行内按钮\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">inline</span><span class="token punctuation">&gt;</span></span>按钮1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">inline</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">a-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>按钮2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n\n按钮形状\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">circle</span><span class="token punctuation">&gt;</span></span>圆角<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">circle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ false }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>无圆角<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n\n按钮尺寸\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>large<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>大尺寸<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>默认尺寸<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>小尺寸<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n\n按钮状态\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>禁用<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">loading</span><span class="token punctuation">&gt;</span></span>加载中<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n\n开放能力\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>contact<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>contact<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserInfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>getUserInfo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getPhoneNumber<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>getPhoneNumber<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>openSetting<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>openSetting<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">open-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>launchApp<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>launchApp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3>',7),l=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",null,"参数"),(0,t._)("th",null,"说明"),(0,t._)("th",null,"必填"),(0,t._)("th",null,"类型"),(0,t._)("th",null,"默认值"),(0,t._)("th",null,"可选值")])],-1),e=(0,t._)("tr",null,[(0,t._)("td",null,"a-class"),(0,t._)("td",null,"自定义根节点样式类，常用于指定按钮宽度"),(0,t._)("td",null,"否"),(0,t._)("td",null,"string"),(0,t._)("td",null,"-"),(0,t._)("td")],-1),o=(0,t._)("tr",null,[(0,t._)("td",null,"type"),(0,t._)("td",null,"按钮类型 (颜色，边框，字体)"),(0,t._)("td",null,"否"),(0,t._)("td",null,"string"),(0,t._)("td",null,"default"),(0,t._)("td",null,"default、primary、success、warning、error")],-1),u=(0,t._)("tr",null,[(0,t._)("td",null,"inline"),(0,t._)("td",null,"是否为行内元素，开启后宽度为自适应型"),(0,t._)("td",null,"否"),(0,t._)("td",null,"boolean"),(0,t._)("td",null,"false"),(0,t._)("td")],-1),c=(0,t._)("tr",null,[(0,t._)("td",null,"circle"),(0,t._)("td",null,"按钮圆角"),(0,t._)("td",null,"否"),(0,t._)("td",null,"boolean"),(0,t._)("td",null,"false"),(0,t._)("td")],-1),r=(0,t._)("tr",null,[(0,t._)("td",null,"size"),(0,t._)("td",null,"按钮尺寸"),(0,t._)("td",null,"否"),(0,t._)("td",null,"string"),(0,t._)("td",null,"default"),(0,t._)("td",null,"large、default、small")],-1),i=(0,t._)("tr",null,[(0,t._)("td",null,"disabled"),(0,t._)("td",null,"设置按钮为禁用状态"),(0,t._)("td",null,"否"),(0,t._)("td",null,"boolean"),(0,t._)("td",null,"false"),(0,t._)("td")],-1),k=(0,t._)("tr",null,[(0,t._)("td",null,"loading"),(0,t._)("td",null,"设置按钮为加载中状态"),(0,t._)("td",null,"否"),(0,t._)("td",null,"boolean"),(0,t._)("td",null,"false"),(0,t._)("td")],-1),d=(0,t._)("td",null,"open-type",-1),g=(0,t.Uk)("微信开放能力, 参考"),b={href:"https://developers.weixin.qq.com/miniprogram/dev/component/button.html",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("微信 button 文档"),h=(0,t._)("td",null,"否",-1),_=(0,t._)("td",null,"string",-1),q=(0,t._)("td",null,"-",-1),v=(0,t._)("td",null,null,-1),f=(0,t._)("td",null,"form-type",-1),y=(0,t.Uk)("用于 "),x=(0,t._)("code",null,"form",-1),U=(0,t.Uk)(" 组件, 参考"),w={href:"https://developers.weixin.qq.com/miniprogram/dev/component/button.html",target:"_blank",rel:"noopener noreferrer"},P=(0,t.Uk)("微信 button 文档"),A=(0,t._)("td",null,"否",-1),I=(0,t._)("td",null,"string",-1),z=(0,t._)("td",null,"-",-1),E=(0,t._)("td",null,null,-1),S=(0,t.uE)('<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>click</td><td>点击事件(无 openType, 且非禁用状态时触发)</td><td>-</td></tr><tr><td>contact</td><td>客服消息回调，open-type=&quot;contact&quot;时有效</td><td>e</td></tr><tr><td>error</td><td>当使用开放能力时，发生错误的回调，open-type=launchApp 时有效</td><td>e</td></tr><tr><td>getuserinfo</td><td>用户点击该按钮时，会返回获取到的用户信息，open-type=&quot;getUserInfo&quot;时有效</td><td>e</td></tr><tr><td>getphonenumber</td><td>获取用户手机号回调，open-type=getPhoneNumber 时有效</td><td>e</td></tr><tr><td>opensetting</td><td>在打开授权设置页后回调，open-type=openSetting 时有效</td><td>e</td></tr></tbody></table><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>',3),N={},B=(0,s(3744).Z)(N,[["render",function(n,a){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("table",null,[l,(0,t._)("tbody",null,[e,o,u,c,r,i,k,(0,t._)("tr",null,[d,(0,t._)("td",null,[g,(0,t._)("a",b,[m,(0,t.Wm)(s)])]),h,_,q,v]),(0,t._)("tr",null,[f,(0,t._)("td",null,[y,x,U,(0,t._)("a",w,[P,(0,t.Wm)(s)])]),A,I,z,E])])]),S],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}}}]);