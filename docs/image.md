# Image 图片

## 概述

常用于显示图片（基于微信自带[`image`](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)组件）。

## 示例

```html
基础用法
<a-image src="{{ url }}" bind:click="handlePreview" />

容错处理
<a-image src="xxx" fallback="{{ defaultUrl }}" />
```

```js
Page({
  data: {
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    defaultUrl: 'https://wpw-dt.oss-cn-hangzhou.aliyuncs.com/material/default/observer-default.png',
  },

  handlePreview(e) {
    const { url } = e.detail;

    wx.previewImage({
      urls: [url],
      current: url,
    });
  },
});
```

## API

### Props

| 参数     | 说明               | 类型   | 默认值 | 可选值 | 必填 |
| -------- | ------------------ | ------ | ------ | ------ | ---- |
| a-class  | 自定义根节点样式类 | string | -      | -      | 否   |
| src      | 图片地址           | string |        | -      | 是   |
| width    | 图像宽度，单位[`rpx`]         | string \| number | 680 | -      | 否   |
| height   | 图像高度，单位[`rpx`]           | string \| number | 680 | -      | 否   |
| fallback | 加载失败容错地址   | string |        | -      | 否   |
| mode | 图片裁剪、缩放的模式, 参考[微信 Image 文档](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)   | string |    scaleToFill    | -      | 否   |
| webp | 默认不解析 webP 格式，只支持网络资源   | boolean |  false      | -      | 否   |
| lazy-load | 图片懒加载，在即将进入一定范围（上下三屏）时才开始加载  | boolean |   false     | -      | 否   |
| show-menu-by-longpress | 长按图片显示发送给朋友、收藏、保存图片、搜一搜、打开名片/前往群聊/打开小程序（若图片中包含对应二维码或小程序码）的菜单。   | boolean | false    | -      | 否   |

### Events

| 事件名 | 说明                      | 参数 |
| ------ | ------------------------- | ---- |
| click  | 点击事件,在此处理预览逻辑 | e    |
| error  | 当错误发生时触发, e.detail.value = {errMsg} | e    |
| load  | 当图片载入完毕时触发, e.detail.value = {height, width}| e    |
## 常见问题
