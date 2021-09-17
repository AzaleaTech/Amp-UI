### 微信小程序组件库

## Done

- Button
- ButtonGroup
- Card
- Collapse
- Cropper
- Echarts
- Form
- FormItem
- Header
- Input (clearable)
- Modal (Toast&&Dialog)
- Player
- Rate
- Record
- Tabbar
- Upload
- Verfication

## In Progress

- Avatar \*
- Badge \*
- Checkbox
- Divider \*
- Radio
- Steps \*
- Painter \*
- Progress
- Pagination
- WxParse \*

## Optimize

- Icon (完善图标库)

## Usage

```bash
git clone ${url}

# dependence
npm install / yarn

# dev
yarn dev

# build
yarn build

```

> ## Reference

- Icon 组件使用 [Iconfont 图标库](https://www.iconfont.cn/) (Symbol)

  1. 插件 `mini-program-iconfont-cli` [文档地址](https://www.npmjs.com/package/mini-program-iconfont-cli)

> ## Notice

1. 组件中若存在样式, 需包含`.less`样式文件（暂不支持只含`.wxss`, 只编译转换`.less`文件）

2. `Echarts`目前引入的是完整包(约900多k)，具体项目具体配置。[查看链接](https://github.com/ecomfe/echarts-for-weixin)
