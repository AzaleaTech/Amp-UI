# Empty 空状态

## 概述

空状态时的展示占位图。

## 示例

```html
基本使用
<a-empty url="{{ url }}" content="{{ content }}" desc="{{ desc }}">
  <a-button circle bind:click="handleBack">返回首页</a-button>
</a-empty>
```

## API

### Props

| 参数    | 说明                                | 类型   | 默认值 | 可选值 | 必填 |
| ------- | ----------------------------------- | ------ | ------ | ------ | ---- |
| a-class | 自定义根节点样式类                  | string | -      | -      | 否   |
| content | 文本内容                      | string | -      | -      | 否   |
| desc    | 描述内容                      | string | -      | -      | 否   |
| url     | 设置显示图片,加载错误时显示默认错误图片 | string | -      | -      | 否   |
| fallbackUrl    | 加载错误时显示图片 | string | `https://wpw-dt.oss-cn-hangzhou.aliyuncs.com/material/default/observer-default.png`     | -      | 否   |

### Slots

| 插槽名 | 说明                   |
| ------ | ---------------------- |
| footer | 底部插槽，一般用于按钮 |

## 常见问题
