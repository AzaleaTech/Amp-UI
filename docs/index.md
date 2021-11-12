# 快速上手

## 使用

### 自定义全局样式

1. 修改`lib/styles/_variables.less`文件中配置
2. `yarn dev` 预览查看效果
3. `yarn build` 生成的 dist 包即为项目中所要导入的文件

### 引入组件

> 选择 dist 文件夹中项目中需要的组件导入（后续会新增按需打包功能）

以 Icon 组件为例，只需要在 app.json 或 index.json 中配置 Icon 对应的路径即可。

一般全局 app.json 中引入。

```json
// app.json
"usingComponents": {
  "a-icon": "${path}/Icon/Icon"
}
```

> ## Notice

1. 组件中若存在样式, 需包含`.less`样式文件（暂不支持只含`.wxss`, 只编译转换`.less`文件）

2. `Echarts`已从`lib`目录中移除, 具体使用可参照示例:`demo/subPages/`目录。 目前引入的是完整包(约 900 多 k)，具体项目具体配置。[查看链接](https://github.com/ecomfe/echarts-for-weixin)
