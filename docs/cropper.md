# Cropper 图片裁剪

## 概述

图片裁剪。

## 示例

```html
<!-- 需裁剪的图片 -->
<a-cropper img-url="{{ imgUrl }}"></a-cropper>

<!-- 保存路径为uploadImg -->
<a-cropper img-url="{{ imgUrl }}" prefix-name="uploadImg"></a-cropper>

<!-- 剪裁比列为1.2 -->
<a-cropper img-url="{{ imgUrl }}" ratio="{{ 1.2 }}"></a-cropper>
```

## API

### Props

| 参数        | 说明             | 类型   | 默认值  | 可选值 | 必填 |
| ----------- | ---------------- | ------ | ------- | ------ | ---- |
| img-url     | 图片地址         | string | -       | -      | 是   |
| prefix-name | 保存路径前缀名称 | string | 'extra' | -      | 否   |
| ratio       | 裁剪比例         | number | 1       | -      | 否   |

### Events

| 事件名 | 说明           | 参数               |
| ------ | -------------- | ------------------ |
| cancel | 取消裁剪       | -                  |
| save   | 裁剪后保存图片 | { file, fileName } |

## 常见问题
