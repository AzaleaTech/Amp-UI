# 贡献指南

## Issue

Issue 用来提交 Bug 或 Feature 相关的内容，一个 Bug Issue 应该反馈由代码问题导致的，可重现的 Bug，并且提供比较详细的 Bug 描述信息。

提交Issue请使用[Jira](http://server.azalea-tech.com:10000/projects/WXCOM/issues/)。

在提交 Issue 之前，请搜索 [Jira](http://server.azalea-tech.com:10000/projects/WXCOM/issues/) 中是否有相同的问题已被提出。

## Merge request

我们欢迎所有类型的 MR，感谢您愿意花时间贡献代码。

请遵守以下注意事项：

1. 如果想开发新的组件，麻烦先创建一个 Issue，这么做是为了避免大家同时修改同一个问题
2. 请按照以下流程复制你的代码：
    ```
    a. Fork本项目到自己的账号下，克隆自己fork的项目，而不是直接克隆本项目
    b. 在自己fork的项目中，基于 dev 创建一个新分支，请不要直接在仓库中创建分支
    c. 开始你的表演
    ```
3. Git Commit Message 的格式请遵循以下格式：`项目名-工单号: commit 描述`
4. Merge request 请提交到develop分支
5. 提交 MR 前，请先使用 `git rebase`保持 Commit 历史的干净
6. MR的描述信息必须填写，也请务必使用简介准确的语言填写
