# Result 结果页

## 概述

展示操作结果页。

## 示例

```html
基本使用
<a-result content="{{ content }}" desc="{{ desc }}"></a-result>
```

## API

### Props

| 参数    | 说明                                | 类型   | 默认值 | 可选值 | 必填 |
| ------- | ----------------------------------- | ------ | ------ | ------ | ---- |
| a-class | 自定义根节点样式类                  | string | -      | -      | 否   |
| type    | 类型                      | string | success      | success、error、warning、pending、info       | 否   |
| content | 文本内容                      | string | -      | -      | 否   |
| desc    | 描述内容                      | string | -      | -      | 否   |
| icon-color | 图标颜色, 和`type`默认色不一致时使用                      | string | -      | -      | 否   |
| background-color    | 背景颜色                      | string | #fff      | -      | 否   |
| confirm-btn | 确认按钮内容, 为空时不展示              | string | 确认      | -      | 否   |
| cancel-btn  | 取消按钮内容, 为空时不展示              | string | 取消     | -      | 否   |

### Events

| 事件名 | 说明                                     | 参数 |
| ------ | ---------------------------------------- | ---- |
| confirm | 点击确认按钮回调 | -    |
| cancel  | 点击取消按钮回调 | -    |

## 常见问题
