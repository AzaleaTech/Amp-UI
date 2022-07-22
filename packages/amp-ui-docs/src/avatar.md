# Avatar 头像

## 概述

用于展示用户头像。

## 示例

```html
头像形状
<a-avatar src="{{ imgUrl }}"></a-avatar>
<a-avatar circle src="{{ imgUrl }}"></a-avatar>

头像边框
<a-avatar border src="{{ imgUrl }}"></a-avatar>
<a-avatar circle border src="{{ imgUrl }}"></a-avatar>
<a-avatar circle border border-color="#009BA4" src="{{ imgUrl }}"></a-avatar>

头像大小
<a-avatar src="{{ imgUrl }}" size="{{ 100 }}"></a-avatar>
<a-avatar src="{{ imgUrl }}" size="{{ 120 }}"></a-avatar>
<a-avatar src="{{ imgUrl }}" size="{{ 140 }}"></a-avatar>
```

## API

### Props

| 参数         | 说明                  | 类型    | 默认值 | 可选值 | 必填 |
| ------------ | --------------------- | ------- | ------ | ------ | ---- |
| a-class      | 自定义根节点样式类    | string  | -      | -      | 否   |
| src          | 头像图片地址          | string  | -      | -      | 否   |
| size         | 头像大小, 单位[`rpx`] | number  | 120    | -      | 否   |
| circle       | 头像是否圆形          | boolean | false  | -      | 否   |
| border       | 头像是否带边框        | boolean | false  | -      | 否   |
| border-color | 头像边框颜色          | String  | -      | -      | 否   |

### Events

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| click  | 头像点击事件 | e    |

## 常见问题
