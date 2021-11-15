# 微信小程序组件库（wxcom）

## 设计目标

针对业务中出现的高频组件, 基于微信小程序自定义组件特性开发而成的一套简洁、易用、高效的组件库, 尽可能兼容不同场景各个模块。

## 功能特性

1. UI 样式可配置，拓展灵活，轻松适应不同的设计风格
2. 项目一键移植，提升开发效率
3. 代码以及图片压缩， 减少代码体积

## 使用

```bash
# clone
git clone ${url}

# dependence
npm install / yarn

# dev
npm run dev/ yarn dev

# build
npm run build / yarn build

```

> _开始前，请阅读[快速上手](./docs/index.md)_

## Done

基础

- [Icon](./docs/icon.md)
- [Button](./docs/button.md)
- [ButtonGroup](./docs/buttonGroup.md)

导航

- [Header](./docs/header.md)
- [Tabs](./docs/tabs.md)

视图

- [Avatar](./docs/avatar.md)
- [Badge](./docs/badge.md)
- [Tag](./docs/tag.md)
- [Card](./docs/card.md)
- [Collapse](./docs/collapse.md)
- [Steps](./docs/steps.md)
- [Divider](./docs/divider.md)
- [Parse](./docs/parse.md)

表单

- [Form](./docs/form.md)
- [Input](./docs/input.md)
- [Checkbox](./docs/checkbox.md)
- [CheckboxGroup](./docs/checkboxGroup.md)
- [Rate](./docs/rate.md)
- [Radio](./docs/radio.md)
- [Switch](./docs/switch.md)
- [Player](./docs/player.md)
- [Record](./docs/record.md)
- [Cropper](./docs/cropper.md)
- [Upload](./docs/upload.md)

操作反馈

- Modal ([Toast](./docs/toast.md)&&[Dialog](./docs/dialog.md))

## In Progress

- Col \*
- Row \*
- Painter \*
- Swiper \*
- DatePicker \*
- List \*

## Remove

- ~~Verfication~~
- ~~Echarts~~

## TODO

- [Toast](./docs/toast.md)&&[Dialog](./docs/dialog.md)支持函数调用
- 全局图标替换
- demo 完善

## 预览

- 小程序二维码(体验版)

  <image src="./docs/imgs/preview.jpg" style="width: 140px"/>

## 贡献代码

代码基于 develop 分支开发，欢迎提交 Pull Request 进行代码贡献。
在提交 Pull Request 之前，请详细阅读[开发规范](http://server.azalea-tech.com:10086/pages/viewpage.action?pageId=21660191)和[贡献指南](./docs/dev/guide.md)。

## License

[MIT](https://opensource.org/licenses/MIT)© 2021
