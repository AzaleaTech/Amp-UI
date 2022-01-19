# Image 图片

## 概述

常用于显示图片（基于微信自带[`image`](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)组件）。

## 示例

```html

```

```js
Page({
  data: {},
});
```

## API

### Props

| 参数     | 说明                                        | 类型            | 默认值 | 可选值 | 必填 |
| -------- | ------------------------------------------- | --------------- | ------ | ------ | ---- |
| a-class  | 自定义根节点样式类                          | string          | -      | -      | 否   |
| preview  | 预览，为 false 时禁用，数组时为预览图片链接 | boolean\| array | true   | -      | 否   |
| src      | 图片地址                                    | string          |        | -      | 否   |
| fallback | 加载失败容错地址                            | string          |        | -      | 否   |
| width    | 图像宽度                                    | number          | -      | -      | 否   |
| height   | 图像高度                                    | number          | -      | -      | 否   |

其他属性见[`image`](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)组件）。

## 常见问题
