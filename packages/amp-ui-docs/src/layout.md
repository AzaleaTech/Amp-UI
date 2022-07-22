# Layout 布局

## 概述

通过基础的 24 分栏，迅速简便地创建布局。

## 示例

```html
基本使用
<a-row a-class="row">
  <a-col span="24" a-class="col col-light">col-24</a-col>
</a-row>
<a-row a-class="row">
  <a-col span="8">
    <view class="col">col-8</view>
  </a-col>
  <a-col span="8">
    <view class="col col-light">col-8</view>
  </a-col>
  <a-col span="8">
    <view class="col">col-8</view>
  </a-col>
</a-row>
```

## API

### Props

#### Row

| 参数    | 说明                  | 类型   | 默认值 | 可选值              | 必填 |
| ------- | --------------------- | ------ | ------ | ------------------- | ---- |
| a-class | 自定义根节点样式类    | string | -      | -                   | 否   |
| align   | 文本对齐方式          | string | left   | left、center、right | 否   |
| gutter  | 栅格间隔, 单位[`rpx`] | number | -      | -                   | 否   |

#### Col

| 参数    | 说明               | 类型   | 默认值 | 可选值      | 必填 |
| ------- | ------------------ | ------ | ------ | ----------- | ---- |
| a-class | 自定义根节点样式类 | string | -      | -           | 否   |
| span    | 栅格占据的格数     | number | -      | 0~24 的整数 | 否   |
| offset  | 栅格左侧的间隔格数 | number | -      | -           | 否   |

## 常见问题
