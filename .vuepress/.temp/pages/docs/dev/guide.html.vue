<template><h1 id="贡献指南" tabindex="-1"><a class="header-anchor" href="#贡献指南" aria-hidden="true">#</a> 贡献指南</h1>
<h2 id="issue" tabindex="-1"><a class="header-anchor" href="#issue" aria-hidden="true">#</a> Issue</h2>
<p>Issue 用来提交 Bug 或 Feature 相关的内容，一个 Bug Issue 应该反馈由代码问题导致的，可重现的 Bug，并且提供比较详细的 Bug 描述信息。</p>
<p>提交Issue请使用<a href="http://server.azalea-tech.com:10000/projects/WXCOM/issues/" target="_blank" rel="noopener noreferrer">Jira<OutboundLink/></a>。</p>
<p>在提交 Issue 之前，请搜索 <a href="http://server.azalea-tech.com:10000/projects/WXCOM/issues/" target="_blank" rel="noopener noreferrer">Jira<OutboundLink/></a> 中是否有相同的问题已被提出。</p>
<h2 id="merge-request" tabindex="-1"><a class="header-anchor" href="#merge-request" aria-hidden="true">#</a> Merge request</h2>
<p>我们欢迎所有类型的 MR，感谢您愿意花时间贡献代码。</p>
<p>请遵守以下注意事项：</p>
<ol>
<li>如果想开发新的组件，麻烦先创建一个 Issue，这么做是为了避免大家同时修改同一个问题</li>
<li>请按照以下流程复制你的代码：<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a. Fork本项目到自己的账号下，克隆自己fork的项目，而不是直接克隆本项目
b. 在自己fork的项目中，基于 dev 创建一个新分支，请不要直接在仓库中创建分支
c. 开始你的表演
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
<li>Git Commit Message 的格式请遵循以下格式：<code>项目名-工单号: commit 描述</code></li>
<li>Merge request 请提交到develop分支</li>
<li>提交 MR 前，请先使用 <code>git rebase</code>保持 Commit 历史的干净</li>
<li>MR的描述信息必须填写，也请务必使用简介准确的语言填写</li>
</ol>
</template>
