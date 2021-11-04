# 微信小程序组件库

## Done

- [Button](./docs/button.md)
- [ButtonGroup](./docs/buttonGroup.md)
- [Card](./docs/card.md)
- [Collapse](./docs/collapse.md)
- [Cropper](./docs/cropper.md)
- [Form](./docs/form.md)
- [Header](./docs/header.md)
- [Input](./docs/input.md)
- Modal ([Toast](./docs/toast.md)&&[Dialog](./docs/dialog.md))
- [Player](./docs/player.md)
- [Rate](./docs/rate.md)
- [Record](./docs/record.md)
- [Tabs](./docs/tabs.md)
- [Upload](./docs/upload.md)
- Verfication
- Echarts
- [Avatar](./docs/avatar.md)

## In Progress

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
- [Toast](./docs/toast.md)&&[Dialog](./docs/dialog.md)支持函数调用

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
