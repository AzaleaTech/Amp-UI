# Divider 分割线

## 概述

分割内容提示符。

## 示例

```html
一般用法
<a-divider></a-divider>
<a-divider content="分割线"></a-divider>
<a-divider content="虚线" dashed></a-divider>

字体大小
<a-divider content="分割线" size="{{ 28 }}"></a-divider>
<a-divider content="分割线" size="{{ 36 }}"></a-divider>

字体颜色
<a-divider content="分割线" color="#1f47d7"></a-divider>
<a-divider content="分割线" color="#ff4949"></a-divider>

线条颜色
<a-divider line-color="#1f47d7"></a-divider>
<a-divider line-color="#ff4949"></a-divider>

slot插槽
<a-divider>自定义内容</a-divider>
<a-divider> <a-icon name="succeed_line" /> icon</a-divider>
```

## API

### Props

| 参数       | 说明                  | 类型    | 默认值  | 可选值 | 必填 |
| ---------- | --------------------- | ------- | ------- | ------ | ---- |
| a-class    | 自定义根节点样式类    | string  | -       | -      | 否   |
| content    | 文本内容              | string  | -       | -      | 否   |
| height     | 高度, 单位[`rpx`]     | number  | 48      | -      | 否   |
| color      | 文本颜色              | string  | #2f2f2f | -      | 否   |
| size       | 字体大小, 单位[`rpx`] | number  | 32      | -      | 否   |
| dashed     | 是否虚线              | boolean | false   | -      | 否   |
| line-color | 线条颜色              | string  | #ccc    | -      | 否   |

### Slots

> 只有当 content 为空时，才能嵌套子组件

| 插槽名 | 说明                       |
| ------ | -------------------------- |
| -      | 自定义内容, 如图标、图片等 |

## 常见问题
