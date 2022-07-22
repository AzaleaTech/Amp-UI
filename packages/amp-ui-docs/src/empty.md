# Empty 空状态

## 概述

空状态时的展示占位图。

## 示例

```html
基本使用
<a-empty url="{{ url }}" desc="{{ description }}">
  <view slot="footer">
    <a-button type="primary"> 点击 </a-button>
  </view>
</a-empty>
```

```js
Page({
  data: {
    url: 'https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original',
    description: '这是描述',
  },
});
```

## API

### Props

| 参数    | 说明                                | 类型   | 默认值 | 可选值 | 必填 |
| ------- | ----------------------------------- | ------ | ------ | ------ | ---- |
| a-class | 自定义根节点样式类                  | string | -      | -      | 否   |
| url     | 设置显示图片,加载错误时显示默认图片 | string | -      | -      | 否   |
| desc    | 自定义描述内容                      | string | -      | -      | 否   |

### Slots

| 插槽名 | 说明                   |
| ------ | ---------------------- |
| footer | 底部插槽，一般用于按钮 |

## 常见问题
