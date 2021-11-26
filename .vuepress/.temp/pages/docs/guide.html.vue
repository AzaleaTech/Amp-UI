<template><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2>
<h3 id="自定义全局样式" tabindex="-1"><a class="header-anchor" href="#自定义全局样式" aria-hidden="true">#</a> 自定义全局样式</h3>
<ol>
<li>修改<code>lib/styles/_variables.less</code>文件中配置</li>
<li><code>yarn dev</code> 预览查看效果</li>
<li><code>yarn build</code> 生成的 dist 包即为项目中所要导入的文件</li>
</ol>
<h3 id="引入组件" tabindex="-1"><a class="header-anchor" href="#引入组件" aria-hidden="true">#</a> 引入组件</h3>
<blockquote>
<p>选择 dist 文件夹中项目中需要的组件导入（后续会新增按需打包功能）</p>
</blockquote>
<p>以 Icon 组件为例，只需要在 app.json 或 index.json 中配置 Icon 对应的路径即可。</p>
<p>一般全局 app.json 中引入。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">// app.json</span>
<span class="token property">"usingComponents"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">"a-icon"</span><span class="token operator">:</span> <span class="token string">"${path}/Icon/Icon"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote>
<h2 id="notice" tabindex="-1"><a class="header-anchor" href="#notice" aria-hidden="true">#</a> Notice</h2>
</blockquote>
<ol>
<li>
<p>组件中若存在样式, 需包含<code>.less</code>样式文件（暂不支持只含<code>.wxss</code>, 只编译转换<code>.less</code>文件）</p>
</li>
<li>
<p><code>Echarts</code>已从<code>lib</code>目录中移除, 具体使用可参照示例:<code>demo/subPages/</code>目录。 目前引入的是完整包(约 900 多 k)，具体项目具体配置。<a href="https://github.com/ecomfe/echarts-for-weixin" target="_blank" rel="noopener noreferrer">查看链接<OutboundLink/></a></p>
</li>
</ol>
</template>
