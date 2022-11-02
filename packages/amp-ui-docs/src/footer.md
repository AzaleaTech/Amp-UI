# Footer 页脚

## 概述

展示页面到底文案。

## 示例

```html
基础用法
<a-footer content="{{ content }}"></a-footer>

文案加引导
<a-footer content="没找到需要的？搜一下试试" background-color="#fff">
  <view slot="after">
    <view>参加活动</view>
    <view>评一评</view>
    <view>我的积分</view>
  </view>
</a-footer>

文案带品牌
<a-footer  content="{{ content }}" background-color="#fff">
  <view slot="before">
    <image src="{{ logoUrl }}"/>
  </view>
</a-footer>
```

## API

### Props

| 参数       | 说明                  | 类型    | 默认值  | 可选值 | 必填 |
| ---------- | --------------------- | ------- | ------- | ------ | ---- |
| a-class    | 自定义根节点样式类    | string  | -       | -      | 否   |
| content    | 文本内容              | string  | -       | -      | 是   |
| backgroundColor    | 背景色              | string  | rgba(255, 255, 255, 1)       | -      | 否   |

### Slots

| 插槽名 | 说明                       |
| ------ | -------------------------- |
| before     | 自定义内容, 内容上方 |
| after     | 自定义内容, 内容下方 |

## 常见问题
