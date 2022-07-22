# Dialog 弹出框

## 概述

弹出模态框，常用于消息确认，或在当前页面内完成特定的交互操作。

## 示例

```html
<a-dialog dialogData="{{ dialogData }}"></a-dialog>
```

```js
Page({
  handleText() {
    this.setData({
      dialogData: {
        title: '弹窗标题',
        content: '弹窗内容',
        cancelText: '取消',
        confirmText: '确定',
      },
    });
  },
});
```

## API

### Props

| 参数       | 说明         | 类型    | 默认值 | 必填 |
| ---------- | ------------ | ------- | ------ | ---- |
| dialogData | 弹框对象内容 | IDialog | -      | 是   |

```js
interface IDialog {
  content: String, // 弹框文本内容
  title?: String, // 弹框标题
  cancelText?: String, // 取消按钮文本
  confirmText?: String, // 确认按钮文本
  cancel?: Function  // 取消回调函数
  confirm?: Function // 确定回调函数
}
```

### Events

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| 暂无   | -    | -    |

## 常见问题
