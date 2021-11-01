# Toast 提示框

## 概述

一种轻量级反馈/提示，一般用于消息通知、加载提示、操作结果提示等场景。

## 示例

```html
基础用法 <a-toast toastData="{{ toastData }}"></a-toast>
```

```js
Page({
  handleText() {
    this.setData({
      toastData: {
        content: '文本提示',
      },
    });
  },

  handleSuccess() {
    this.setData({
      toastData: {
        content: '成功提示',
        type: 'success',
      },
    });
  },

  handleWarning() {
    this.setData({
      toastData: {
        content: '警告提示',
        type: 'warning',
      },
    });
  },

  handleError() {
    this.setData({
      toastData: {
        content: '错误提示',
        type: 'error',
      },
    });
  },

  handleClose() {
    this.setData({
      toastData: {
        content: '5s后自动关闭',
        duration: 5000,
      },
    });
  },
});
```

## API

### Props

```ts
declare toastData {
  content: string,
  type?: string,
  duration?: number
}
```

| 参数      | 说明           | 类型   | 默认值 | 必填 |
| --------- | -------------- | ------ | ------ | ---- |
| toastData | 提示框对象内容 | Object | -      | 是   |

### Events

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| 暂无   | -    | -    |

## 常见问题
