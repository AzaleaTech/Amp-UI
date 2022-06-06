# WaterMark 水印组件

## 概述

给页面的某个区域加上水印。

## 示例

```html
基础用法
<a-water-mark content="AmpUI">
  <view class="content">
    <view>1. UI 样式可配置，拓展灵活，轻松适应不同的设计风格</view>
    <view>2. 项目一键移植，提升开发效率，提高工作体验</view>
    <view>3. 代码以及图片压缩， 减少代码体积</view>
  </view>
</a-water-mark>

图片水印
<a-water-mark image="https://azalea-official.oss-cn-hangzhou.aliyuncs.com/lingshang.png"  width="{{ 220 }}">
<view class="content"></view>
</a-water-mark>

```

## API

### Props

| 参数      | 说明                           | 类型    | 默认值 | 可选值 | 必填 |
| --------- | ------------------------------ | ------- | ------ | ------ | ---- |
| a-class   | 自定义根节点样式类             | string  | -      | -      | 否   |
| content   | 水印文字内容             | string  | -      | -      | 否   |
| width   | 水印的宽度             | number  | 120      | -      | 否   |
| height   | 水印的高度             | number  | 120      | -      | 否   |
| gapX   | 水印之间的水平间距            | number  | 100      | -      | 否   |
| gapY   | 水印之间的垂直间距             | number  | 60      | -      | 否   |
| font-color   | 水印文字颜色           | string  | rgba(0,0,0,.15)      | -      | 否   |
| font-size   | 水印文字大小， 单位[`rpx`]           | string \| number  | 16      | -      | 否   |
| rotate   | 水印绘制时，旋转的角度，单位 °            | number  | -20      | -      | 否   |
| image   | 水印图片源, 和content同时存在时，优先使用图片          | string  | -      | -      | 否   |

### Events

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| 暂无   | -    | -    |

## 常见问题
