<template><h1 id="前览" tabindex="-1"><a class="header-anchor" href="#前览" aria-hidden="true">#</a> 前览</h1>
<h2 id="项目目标" tabindex="-1"><a class="header-anchor" href="#项目目标" aria-hidden="true">#</a> 项目目标</h2>
<h3 id="短期目标" tabindex="-1"><a class="header-anchor" href="#短期目标" aria-hidden="true">#</a> 短期目标</h3>
<p>针对我司业务场景中高频使用的组件,结合微信小程序自定义组件特性，沉淀开发出一套简洁、易用、高效的组件库，兼容不同场景下的各类功能模块，以达到提高工作效率，提升工作体验的目的。</p>
<h3 id="长期目标" tabindex="-1"><a class="header-anchor" href="#长期目标" aria-hidden="true">#</a> 长期目标</h3>
<p>内部使用无碍且短期目标基本达到后，将代表研发部对外进行开源，分享至业内，为前端技术生态做出我们的贡献。</p>
<h2 id="功能特性" tabindex="-1"><a class="header-anchor" href="#功能特性" aria-hidden="true">#</a> 功能特性</h2>
<ol>
<li>UI 样式可配置，拓展灵活，轻松适应不同的设计风格</li>
<li>项目一键移植，提升开发效率，提高工作体验</li>
<li>代码以及图片压缩， 减少代码体积</li>
</ol>
<h2 id="预览" tabindex="-1"><a class="header-anchor" href="#预览" aria-hidden="true">#</a> 预览</h2>
<ul>
<li>
<p>小程序二维码(体验版)</p>
<img src="@source/docs/imgs/preview.jpg" style="width: 140px"/>
</li>
<li>
<p>正式版</p>
<img src="@source/docs/imgs/release.jpg" style="width: 140px"/>
</li>
</ul>
<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 克隆组件库至本地</span>
<span class="token function">git</span> clone <span class="token variable">${url}</span>

<span class="token comment"># 安装依赖</span>
<span class="token function">npm</span> <span class="token function">install</span> / <span class="token function">yarn</span>

<span class="token comment"># 开启开发环境</span>
<span class="token function">npm</span> run dev/ <span class="token function">yarn</span> dev

<span class="token comment"># 构建项目</span>
<span class="token function">npm</span> run build / <span class="token function">yarn</span> build

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote>
<p><em>开始前，请阅读<RouterLink to="/docs/">快速上手</RouterLink></em></p>
</blockquote>
<h2 id="已完成组件列表" tabindex="-1"><a class="header-anchor" href="#已完成组件列表" aria-hidden="true">#</a> 已完成组件列表</h2>
<p>基础组件</p>
<ul>
<li><RouterLink to="/docs/icon.html">Icon</RouterLink></li>
<li><RouterLink to="/docs/button.html">Button</RouterLink></li>
<li><RouterLink to="/docs/buttonGroup.html">ButtonGroup</RouterLink></li>
</ul>
<p>导航组件</p>
<ul>
<li><RouterLink to="/docs/header.html">Header</RouterLink></li>
<li><RouterLink to="/docs/tabs.html">Tabs</RouterLink></li>
</ul>
<p>视图组件</p>
<ul>
<li><RouterLink to="/docs/avatar.html">Avatar</RouterLink></li>
<li><RouterLink to="/docs/badge.html">Badge</RouterLink></li>
<li><RouterLink to="/docs/tag.html">Tag</RouterLink></li>
<li><RouterLink to="/docs/card.html">Card</RouterLink></li>
<li><RouterLink to="/docs/collapse.html">Collapse</RouterLink></li>
<li><RouterLink to="/docs/steps.html">Steps</RouterLink></li>
<li><RouterLink to="/docs/divider.html">Divider</RouterLink></li>
<li><RouterLink to="/docs/parse.html">Parse</RouterLink></li>
</ul>
<p>表单组件</p>
<ul>
<li><RouterLink to="/docs/form.html">Form</RouterLink></li>
<li><RouterLink to="/docs/input.html">Input</RouterLink></li>
<li><RouterLink to="/docs/checkbox.html">Checkbox</RouterLink></li>
<li><RouterLink to="/docs/checkboxGroup.html">CheckboxGroup</RouterLink></li>
<li><RouterLink to="/docs/rate.html">Rate</RouterLink></li>
<li><RouterLink to="/docs/radio.html">Radio</RouterLink></li>
<li><RouterLink to="/docs/switch.html">Switch</RouterLink></li>
<li><RouterLink to="/docs/player.html">Player</RouterLink></li>
<li><RouterLink to="/docs/record.html">Record</RouterLink></li>
<li><RouterLink to="/docs/cropper.html">Cropper</RouterLink></li>
<li><RouterLink to="/docs/upload.html">Upload</RouterLink></li>
</ul>
<p>操作反馈</p>
<ul>
<li>Modal (<RouterLink to="/docs/toast.html">Toast</RouterLink>&amp;&amp;<RouterLink to="/docs/dialog.html">Dialog</RouterLink>)</li>
</ul>
<h2 id="开发中" tabindex="-1"><a class="header-anchor" href="#开发中" aria-hidden="true">#</a> 开发中</h2>
<ul>
<li>Col *</li>
<li>Row *</li>
<li>Painter *</li>
<li>Swiper *</li>
<li>DatePicker *</li>
<li>List *</li>
</ul>
<h2 id="已移除" tabindex="-1"><a class="header-anchor" href="#已移除" aria-hidden="true">#</a> 已移除</h2>
<ul>
<li><s>Verfication</s></li>
<li><s>Echarts</s></li>
</ul>
<h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h2>
<ul>
<li><RouterLink to="/docs/toast.html">Toast</RouterLink>&amp;&amp;<RouterLink to="/docs/dialog.html">Dialog</RouterLink>支持函数调用</li>
<li>全局图标替换</li>
<li>demo 的进一步完善</li>
</ul>
<h2 id="贡献代码" tabindex="-1"><a class="header-anchor" href="#贡献代码" aria-hidden="true">#</a> 贡献代码</h2>
<p>代码基于 develop 分支开发，欢迎提交 Merge Request 进行代码贡献。
在提交 Merge Request 之前，请详细阅读<a href="http://server.azalea-tech.com:10086/pages/viewpage.action?pageId=21660191" target="_blank" rel="noopener noreferrer">开发规范<OutboundLink/></a>和<RouterLink to="/docs/dev/guide.html">贡献指南</RouterLink>。</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="./LICENSE">MIT License</a>© 2021</p>
</template>
