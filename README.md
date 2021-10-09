### 微信小程序组件库

## Done

- [Button](./docs/button.md)
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
- [Tabs](./docs/tabs.md)
- [Upload](./docs/upload.md)
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

- [Icon](./docs/icon.md)

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

## docs

项目中引用, 查看[快速上手](./docs/index.md)

> ## Notice

1. 组件中若存在样式, 需包含`.less`样式文件（暂不支持只含`.wxss`, 只编译转换`.less`文件）

2. `Echarts`目前引入的是完整包(约 900 多 k)，具体项目具体配置。[查看链接](https://github.com/ecomfe/echarts-for-weixin)
