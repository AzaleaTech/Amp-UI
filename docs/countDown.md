# CountDown 倒计时

## 概述

倒计时组件。

## 示例

```html
基本使用
<a-count-down value="{{ 100 }}"></a-count-down>
<a-count-down value="{{ 60 }}"></a-count-down>
<a-count-down value="{{ 90000 }}"></a-count-down>

自定义格式化
<a-count-down value="{{ 90000 }}" format="{{ format }}"></a-count-down>

倒计时结束回调
<a-count-down value="{{ 10 }}" bind:end="handleEnd"></a-count-down>
<text>倒计时状态：{{ status }}</text>
```

```js
Page({
  data: {
    format: { day: 'Day', hour: ':', minute: ':', second: '' },
    status: '进行中...',
  },

  handleEnd() {
    wx.showToast({
      title: 'countDown ends',
      icon: 'none',
    });
    this.setData({
      status: '已结束',
    });
  },
});
```

## API

### Props

| 参数      | 说明                           | 类型    | 默认值 | 可选值 | 必填 |
| --------- | ------------------------------ | ------- | ------ | ------ | ---- |
| a-class   | 自定义根节点样式类             | string  | -      | -      | 否   |
| value   | 倒计时时间，单位[`秒`]             | number  | -      | -      | 是   |
| format   | 格式化分割符号             | object  | {day: '天', hours: '时', minutes: '分', seconds: '秒'}      | -      | 否   |

### Events

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| end   | 倒计时结束，执行的回调函数    | -    |

## 常见问题
