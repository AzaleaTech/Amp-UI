# Grid 宫格

## 概述

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

## 示例

```html
水平方向（不带边框）
<a-grid direction="horizontal">
  <a-grid-item wx:for="{{ 2 }}" iconName="visible" title="{{ title }}" desc="{{ desc }}"></a-grid-item>
</a-grid>

竖直方向（带边框）
<a-grid border>
  <a-grid-item wx:for="{{ 6 }}" iconName="visible" title="{{ title }}" desc="{{ desc }}"></a-grid-item>
</a-grid>
```

```js
Page({
  data: {
    title: '标题文字',
    desc: '描述信息',
  },
});
```

## API

### Props

#### Grid

| 参数    | 说明                                | 类型   | 默认值 | 可选值 | 必填 |
| ------- | ----------------------------------- | ------ | ------ | ------ | ---- |
| a-class | 自定义根节点样式类                  | string | -      | -      | 否   |
| column-num | 列数                  | number | 3      | -      | 否   |
| border | 是否显示边框                  | boolean | false      | -      | 否   |
| icon-size | 图标大小，默认单位[`rpx`]                  | number | 60      | -      | 否   |
| icon-color | 图标颜色                  | string | -      | -      | 否   |
| direction | 排列方向                  | string | vertical      | vertical、horizontal      | 否   |
| background-color | 背景色                  | string | #fff      | -      | 否   |
| clickable | 是否可点击                 | boolean | false      | -      | 否   |

#### GridItem

| 参数    | 说明                                | 类型   | 默认值 | 可选值 | 必填 |
| ------- | ----------------------------------- | ------ | ------ | ------ | ---- |
| a-class | 自定义根节点样式类                  | string | -      | -      | 否   |
| title | 文本内容                  | string | -      | -      | 否   |
| desc  | 描述内容                  | string | -      | -      | 否   |
| icon-name | 图标名称，参考[`Icon`](./icon.md)组件                  | string | -      | -      | 是   |
| icon-size | 图标大小，默认单位[`rpx`]                  | number | 60      | -      | 否   |
| icon-color | 图标颜色                  | string | -      | -      | 否   |

### GridItem Slots

| 插槽名 | 说明                                 |
| ------ | ------------------------------------ |
| icon      | 自定义图标, 如设置`icon-name`属性则不生效 |

### Events

#### Grid

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| 暂无   | -    | -    |

#### GridItem

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| click  | 每一项点击事件`e.detail.value` | e    |

## 常见问题
