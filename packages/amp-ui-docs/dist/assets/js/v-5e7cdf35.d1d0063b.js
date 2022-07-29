"use strict";(self.webpackChunkamp_ui_docs=self.webpackChunkamp_ui_docs||[]).push([[416],{876:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-5e7cdf35",path:"/src/rate.html",title:"Rate 评分",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"概述",slug:"概述",children:[]},{level:2,title:"示例",slug:"示例",children:[]},{level:2,title:"API",slug:"api",children:[{level:3,title:"Props",slug:"props",children:[]},{level:3,title:"Events",slug:"events",children:[]}]},{level:2,title:"常见问题",slug:"常见问题",children:[]}],filePathRelative:"src/rate.md",git:{updatedTime:null}}},9699:(a,n,s)=>{s.r(n),s.d(n,{default:()=>e});const t=(0,s(6252).uE)('<h1 id="rate-评分" tabindex="-1"><a class="header-anchor" href="#rate-评分" aria-hidden="true">#</a> Rate 评分</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>用于对事物进行评级操作, 包含评分展示(可包含小数)。</p><blockquote><p>默认两图标间距为图标宽度的一半。</p></blockquote><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>基础用法\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name"><span class="token namespace">bind:</span>change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">&gt;</span></span>\n\n不同数量大小\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 3 }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 60 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">icon-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 60 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">icon-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 80 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">&gt;</span></span>\n\n不同图标\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 3 }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>praise_fill<span class="token punctuation">&quot;</span></span> <span class="token attr-name">active-icon-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#3895f7<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 5 }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>love_fill<span class="token punctuation">&quot;</span></span> <span class="token attr-name">active-icon-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#ed4115<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">&gt;</span></span>\n\n图标半边点击\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">show-half</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">show-half</span> <span class="token attr-name">icon-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>love_fill<span class="token punctuation">&quot;</span></span> <span class="token attr-name">active-icon-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#ed4115<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">&gt;</span></span>\n\n只读\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 2.68 }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-rate</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 5 }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-rate</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>必填</th></tr></thead><tbody><tr><td>a-class</td><td>自定义根节点样式类</td><td>string</td><td>-</td><td>否</td></tr><tr><td>a-class-item</td><td>自定义每项图标样式类，常用于设置图标间距</td><td>string</td><td>-</td><td>否</td></tr><tr><td>count</td><td>star 总数</td><td>number</td><td>5</td><td>否</td></tr><tr><td>value</td><td>当前 star 数</td><td>number</td><td>0</td><td>否</td></tr><tr><td>icon-name</td><td>图标名称，详见 Icon 组件</td><td>string</td><td>star_fill</td><td>否</td></tr><tr><td>icon-size</td><td>图标大小，单位[<code>rpx</code>]</td><td>number</td><td>100</td><td>否</td></tr><tr><td>icon-color</td><td>图标未选中时颜色</td><td>string</td><td>#d8d8d8</td><td>否</td></tr><tr><td>active-icon-color</td><td>图标选中时颜色</td><td>string</td><td>#ffb500</td><td>否</td></tr><tr><td>show-half</td><td>是否支持图标一半点击</td><td>boolean</td><td>false</td><td>否</td></tr><tr><td>disabled</td><td>是否只读，无法进行交互</td><td>boolean</td><td>false</td><td>否</td></tr></tbody></table><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>点击图标时触发</td><td>e</td></tr></tbody></table><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>',12),p={},e=(0,s(3744).Z)(p,[["render",function(a,n){return t}]])},3744:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,t]of n)s[a]=t;return s}}}]);