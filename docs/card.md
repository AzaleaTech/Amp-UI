# Card 卡片

## 概述

自定义卡片，支持图片预览。

> 卡片图片部分固定宽高为 204rpx。

## 示例

```html
基础用法
<a-card title="card标题" imgUrl="{{ imgUrl }}">
  <view slot="content">
    <view>{{ content1 }}</view>
    <view>{{ content2 }}</view>
  </view>
</a-card>

左侧图片支持预览
<a-card title="card标题" imgUrl="{{ imgUrl }}" preview bind:click="handleClickCard">
  <view slot="content">
    <view>{{ content1 }}</view>
    <view>{{ content2 }}</view>
  </view>
</a-card>

带头部及尾部内容
<a-card title="card标题" imgUrl="{{ imgUrl }}" preview bind:click="handleClickCard">
  <view slot="header" class="card-header">{{ time }} </view>
  <view slot="content">
    <view>{{ content1 }}</view>
    <view>{{ content2 }}</view>
  </view>
  <view slot="footer" class="card-footer" catch:tap="handelClickBtn">
    <a-button type="primary" size="small">操作按钮 </a-button>
  </view>
</a-card>
```

```js
Page({
  data: {
    imgUrl: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
    time: '2021-10-10 10:10:10',
    content1: '文本内容1',
    content2: '文本内容2',
  },

  handleClickCard() {
    wx.showToast({ title: '点击卡片' });
  },

  handelClickBtn() {
    wx.showToast({ title: '点击按钮' });
  },
});
```

## API

### Props

| 参数        | 说明                 | 类型    | 默认值 | 可选值 | 必填 |
| ----------- | -------------------- | ------- | ------ | ------ | ---- |
| a-class     | 自定义根节点样式类   | string  | -      | -      | 否   |
| a-class-tag | 自定义标签插槽样式类 | string  | -      | -      | 否   |
| title       | 标题                 | string  | -      | -      | 否   |
| img-url     | 图片地址             | string  | -      | -      | 否   |
| preview     | 图片是否可预览       | boolean | false  | -      | 否   |

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
