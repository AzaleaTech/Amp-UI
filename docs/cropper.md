# Cropper 图片裁剪

## 概述

图片裁剪。

## 示例

```html
基础用法
<a-cropper img-url="{{ imgUrl }}"></a-cropper>
<a-cropper img-url="{{ imgUrl }}" circle></a-cropper>
<a-cropper img-url="{{ imgUrl }}" ratio="{{ 1.2 }}"></a-cropper>
```

## API

### Props

| 参数    | 说明                          | 类型    | 默认值 | 可选值 | 必填 |
| ------- | ----------------------------- | ------- | ------ | ------ | ---- |
| img-url | 图片地址                      | string  | -      | -      | 是   |
| ratio   | 裁剪比例                      | number  | 1      | -      | 否   |
| circle  | 是否圆形裁剪, 大小固定 400rpx | boolean | false  | -      | 否   |

### Events

| 事件名 | 说明           | 参数               |
| ------ | -------------- | ------------------ |
| cancel | 取消裁剪       | -                  |
| save   | 裁剪后保存图片 | { file, fileName } |

## 常见问题

Q:tempFilePath 无法作为 img 标签的 src 属性显示图片。

A:使用本地图片而非网络图片
