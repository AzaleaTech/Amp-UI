# NoticeBar 消息通知栏

## 概述

常用于显示消息通知

## 示例

```html
基本使用
<a-notice-bar text="{{ text }}" />
左侧带图标使用
<a-notice-bar left-icon="{{ icon }}" text="{{ text }}" />
```

```js
Page({
  data: {
    text: "一个mut-bind触发后,如果事件冒泡到其他节点上,其他节点上的mut-bind绑定函数不会被触发,换而言之,所有mut-bind是“互斥”的,只会有其中一个绑定函数被触发。但bind绑定函数和catch绑定函数依旧会被触发。",
    icon: "trumpet_fill",
  },
});
```

## API

### Props

| 参数       | 说明                                           | 类型   | 默认值 | 可选值                   | 必填 |
| ---------- | ---------------------------------------------- | ------ | ------ | ------------------------ | ---- |
| a-class    | 自定义根节点样式类                             | string | -      | -                        | 否   |
| type       | 通告栏类型                                     | string | roll   | roll \| static \| swiper | 否   |
| text       | 通告栏展示文案                                 | string | -      | -                        | 否   |
| color      | 文本颜色                                       | string |        | -                        | 否   |
| bg-color   | 滚动条背景                                     | string |        | -                        | 否   |
| left-icon  | 左侧图标名称，可选值见[`Icon`](./icon.md) 组件 | string | -      | -                        | 否   |
| icon-size  | 左侧图标或图片的尺寸(rpx)                      | number | 60     | -                        | 否   |
| icon-color | 左侧图标颜色                                   | string | -      | -                        | 否   |
| left-src   | 图片链接，若已经有 left-icon 属性则该属性失效  | string | -      | -                        | 否   |
| delay      | 动画延迟时间 (ms)                              | number | 400    | -                        | 否   |
| speed      | 滑动速度、滚动速率 (rpx/s)                     | number | 100    | -                        | 否   |

### Events

| 事件名 | 说明                          | 参数 |
| ------ | ----------------------------- | ---- |
| click  | 点击 NoticeBar 组件触发的事件 | e    |

## 常见问题
