# Card 卡片

## 概述

自定义卡片，支持图片预览。

> 卡片图片部分固定宽高为 204rpx。

## 示例

```html
<!-- 自定义根节点样式类 -->
<a-card a-class="custom-class"></a-card>

<!-- 自定义tag插槽样式类 -->
<a-card a-class-content="custom-class-content"></a-card>

<!-- 自定义tag插槽样式类 -->
<a-card a-class-tag="custom-class-tag"></a-card>

<!-- 标题 -->
<a-card title="标题"></a-card>

<!-- 图片 -->
<a-card img-url="{{ imgUrl }}"></a-card>
```

## API

### Props

| 参数        | 说明                 | 类型   | 默认值 | 可选值 | 必填 |
| ----------- | -------------------- | ------ | ------ | ------ | ---- |
| a-class     | 自定义根节点样式类   | string | -      | -      | 否   |
| a-class-tag | 自定义标签插槽样式类 | string | -      | -      | 否   |
| title       | 标题                 | string | -      | -      | 否   |
| img-url     | 图片地址             | string | -      | -      | 否   |

### Slots

| 插槽名    | 说明                                                 |
| --------- | ---------------------------------------------------- |
| header    | 顶部插槽，一般用于时间                               |
| content   | 内容插槽                                             |
| footer    | 底部插槽，一般用于按钮                               |
| tag-left  | 标签左插槽，类似有活动进行中等状态标签（默认左上角） |
| tag-right | 标签右插槽，类似有文章等标签（默认右上角）           |

### Events

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| click  | 卡片点击事件 | e    |

## 常见问题