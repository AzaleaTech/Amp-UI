# Badge 徽标

## 概述

在元素右上角展示消息提醒，可用于图片、按钮等组件。

## 示例

```html
不同数值
<a-badge value="{{ 2 }}">
  <view class="badge-box"></view>
</a-badge>
<a-badge value="{{ 99 }}">
  <view class="badge-box"></view>
</a-badge>
<a-badge value="{{ 100 }}">
  <view class="badge-box"></view>
</a-badge>

红点
<a-badge dot>
  <view class="badge-box"></view>
</a-badge>
<a-badge dot>
  <image src="{{ imgUrl }}"></image>
</a-badge>
```

## API

### Props

| 参数     | 说明                           | 类型    | 默认值 | 可选值 | 必填 |
| -------- | ------------------------------ | ------- | ------ | ------ | ---- |
| a-class  | 自定义根节点样式类             | string  | -      | -      | 否   |
| value    | 角标内容                       | number  | 0      | -      | 否   |
| maxValue | 角标最大值                     | number  | 99     | -      | 否   |
| dot      | 是否不展示角标内容, 只展示红点 | boolean | false  | -      | 否   |

### Events

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| 暂无   | -    | -    |

## 常见问题
