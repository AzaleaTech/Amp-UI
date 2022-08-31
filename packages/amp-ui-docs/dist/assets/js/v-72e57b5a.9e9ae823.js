"use strict";(self.webpackChunkamp_ui_docs=self.webpackChunkamp_ui_docs||[]).push([[245],{2116:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-72e57b5a",path:"/src/badge.html",title:"Badge 徽标",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"概述",slug:"概述",children:[]},{level:2,title:"示例",slug:"示例",children:[]},{level:2,title:"API",slug:"api",children:[{level:3,title:"Props",slug:"props",children:[]},{level:3,title:"Events",slug:"events",children:[]}]},{level:2,title:"常见问题",slug:"常见问题",children:[]}],filePathRelative:"src/badge.md",git:{updatedTime:null}}},5625:(a,n,s)=>{s.r(n),s.d(n,{default:()=>e});const t=(0,s(6252).uE)('<h1 id="badge-徽标" tabindex="-1"><a class="header-anchor" href="#badge-徽标" aria-hidden="true">#</a> Badge 徽标</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>在元素右上角展示消息提醒，可用于图片、按钮等组件。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>不同数值\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 2 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>badge-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-badge</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 99 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>badge-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-badge</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-badge</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 100 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>badge-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-badge</span><span class="token punctuation">&gt;</span></span>\n\n红点\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-badge</span> <span class="token attr-name">dot</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>badge-box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-badge</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-badge</span> <span class="token attr-name">dot</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ imgUrl }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-badge</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th><th>必填</th></tr></thead><tbody><tr><td>a-class</td><td>自定义根节点样式类</td><td>string</td><td>-</td><td>-</td><td>否</td></tr><tr><td>value</td><td>角标内容</td><td>number</td><td>0</td><td>-</td><td>否</td></tr><tr><td>max-value</td><td>角标最大值</td><td>number</td><td>99</td><td>-</td><td>否</td></tr><tr><td>dot</td><td>是否不展示角标内容, 只展示红点</td><td>boolean</td><td>false</td><td>-</td><td>否</td></tr></tbody></table><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>暂无</td><td>-</td><td>-</td></tr></tbody></table><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>',11),p={},e=(0,s(3744).Z)(p,[["render",function(a,n){return t}]])},3744:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,t]of n)s[a]=t;return s}}}]);