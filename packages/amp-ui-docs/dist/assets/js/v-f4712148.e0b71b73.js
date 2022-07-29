"use strict";(self.webpackChunkamp_ui_docs=self.webpackChunkamp_ui_docs||[]).push([[14],{3660:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-f4712148",path:"/src/avatar.html",title:"Avatar 头像",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"概述",slug:"概述",children:[]},{level:2,title:"示例",slug:"示例",children:[]},{level:2,title:"API",slug:"api",children:[{level:3,title:"Props",slug:"props",children:[]},{level:3,title:"Events",slug:"events",children:[]}]},{level:2,title:"常见问题",slug:"常见问题",children:[]}],filePathRelative:"src/avatar.md",git:{updatedTime:null}}},692:(a,n,s)=>{s.r(n),s.d(n,{default:()=>e});const t=(0,s(6252).uE)('<h1 id="avatar-头像" tabindex="-1"><a class="header-anchor" href="#avatar-头像" aria-hidden="true">#</a> Avatar 头像</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>用于展示用户头像。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>头像形状\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ imgUrl }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-avatar</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-avatar</span> <span class="token attr-name">circle</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ imgUrl }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-avatar</span><span class="token punctuation">&gt;</span></span>\n\n头像边框\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-avatar</span> <span class="token attr-name">border</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ imgUrl }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-avatar</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-avatar</span> <span class="token attr-name">circle</span> <span class="token attr-name">border</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ imgUrl }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-avatar</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-avatar</span> <span class="token attr-name">circle</span> <span class="token attr-name">border</span> <span class="token attr-name">border-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#009BA4<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ imgUrl }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-avatar</span><span class="token punctuation">&gt;</span></span>\n\n头像大小\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ imgUrl }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 100 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-avatar</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ imgUrl }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 120 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-avatar</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-avatar</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ imgUrl }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 140 }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-avatar</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th><th>必填</th></tr></thead><tbody><tr><td>a-class</td><td>自定义根节点样式类</td><td>string</td><td>-</td><td>-</td><td>否</td></tr><tr><td>src</td><td>头像图片地址</td><td>string</td><td>-</td><td>-</td><td>否</td></tr><tr><td>size</td><td>头像大小, 单位[<code>rpx</code>]</td><td>number</td><td>120</td><td>-</td><td>否</td></tr><tr><td>circle</td><td>头像是否圆形</td><td>boolean</td><td>false</td><td>-</td><td>否</td></tr><tr><td>border</td><td>头像是否带边框</td><td>boolean</td><td>false</td><td>-</td><td>否</td></tr><tr><td>border-color</td><td>头像边框颜色</td><td>String</td><td>-</td><td>-</td><td>否</td></tr></tbody></table><h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>click</td><td>头像点击事件</td><td>e</td></tr></tbody></table><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2>',11),p={},e=(0,s(3744).Z)(p,[["render",function(a,n){return t}]])},3744:(a,n)=>{n.Z=(a,n)=>{const s=a.__vccOpts||a;for(const[a,t]of n)s[a]=t;return s}}}]);