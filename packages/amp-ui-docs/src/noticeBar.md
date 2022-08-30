# NoticeBar 消息通知栏

## 概述

常用于显示消息通知

## 示例

```html
基本使用
<a-notice-bar text="{{ text }}" />

左侧带图标使用
<a-notice-bar icon-name="{{ icon }}" text="{{ text }}" />
```

```js
Page({
  data: {
    text: 'NoticeBar组件常用于显示消息通知',
    icon: 'trumpet_fill',
  },
});
```

## API

### Props

| 参数       | 说明                                           | 类型    | 默认值 | 可选值 | 必填 |
| ---------- | ---------------------------------------------- | ------- | ------ | ------ | ---- |
| a-class    | 自定义根节点样式类                             | string  | -      | -      | 否   |
| roll       | 是否能够滚动                                   | boolean | true   | -      | 否   |
| vertical   | 是否为竖向滚动                                 | boolean | false  | -      | 否   |
| text       | 通告栏展示文案                                 | string  | -      | -      | 否   |
| icon-name  | 左侧图标名称，可选值见[`Icon`](./icon.md) 组件 | string  | -      | -      | 否   |
| icon-size  | 左侧图标或图片的尺寸, 单位[`rpx`]              | number  | 60     | -      | 否   |
| icon-color | 左侧图标颜色                                   | string  | -      | -      | 否   |
| icon-url   | 图片链接，若已经有 icon-name 属性则该属性失效  | string  | -      | -      | 否   |
| delay      | 动画延迟时间, 单位[`ms`]                       | number  | 400    | -      | 否   |
| speed      | 滚动速率, 单位[`rpx/s`]                        | number  | 100    | -      | 否   |
| clearable  | 是否可删除                                 | boolean | false  | -      | 否   |

### Events

| 事件名 | 说明                          | 参数 |
| ------ | ----------------------------- | ---- |
| click  | 点击 NoticeBar 组件触发的事件 | e    |
| change | 轮播内容切换时触发 | e    |
| clear  | 点击删除按钮触发, `e.detail.value`当前选项下标 | e    |

## 常见问题
