# 贡献指南

## Issue

Issues 是用来提交 Bug 或 Feature 相关的内容，一个 Bug Issue 应该由代码问题导致的，可重现的 Bug，并且有比较详细的 Bug 描述信息

在提交 Issue 之前，请搜索 [Jira issues](http://server.azalea-tech.com:10000/browse/WXCOM-76?jql=project%20%3D%20WXCOM%20ORDER%20BY%20priority%20DESC%2C%20updated%20DESC) 中是否有相同的问题已被提出。

## Pull requests

欢迎所有类型的 PR，感谢您愿意花时间贡献代码~

1. 如果是组件相关的 PR，麻烦先创建一个 Issue，这么做是避免大家同时修改同一个问题
2. Fork 一份代码到自己的账号下，请不要直接在仓库中创建分支
3. 基于 dev 创建一个新分支
4. Git Commit Message 的格式请遵循：项目名-工单号: commit 描述
5. 提交 PR 的时候，请使用 Rebase，这是为了保持 Commit 历史的干净（Merge request 到分支 dev）
6. 提交 PR 的时候，请添加一些关于你此次 PR 的描述信息
