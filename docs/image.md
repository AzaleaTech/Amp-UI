# Image 图片

## 概述

常用于显示图片（基于微信自带[`image`](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)组件）。

## 示例

```html
基础用法
<a-image src="{{ url }}" bind:click="handlePreview" />

自定义预览
<a-image src="{{ url }}" bind:click="handlePreviewImgs" />

容错处理
<a-image src="xxx" fallback="{{ defaultUrl }}" />
```

```js
Page({
  data: {
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    defaultUrl: 'https://wpw-dt.oss-cn-hangzhou.aliyuncs.com/material/default/observer-default.png',
    urls: [
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
      'https://img-blog.csdn.net/20170525131248116',
    ],
  },

  handlePreview(e) {
    const { url } = e.detail;

    wx.previewImage({
      urls: [url],
      current: url,
    });
  },

  handlePreviewImgs(e) {
    const { url } = e.detail;

    wx.previewImage({
      urls: this.data.urls,
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
| src      | 图片地址           | string |        | -      | 否   |
| fallback | 加载失败容错地址   | string |        | -      | 否   |
| width    | 图像宽度           | string | 680rpx | -      | 否   |
| height   | 图像高度           | string | 640rpx | -      | 否   |

其他属性见[`image`](https://developers.weixin.qq.com/miniprogram/dev/component/image.html)组件）。

### Events

| 事件名 | 说明                      | 参数 |
| ------ | ------------------------- | ---- |
| click  | 点击事件,在此处理预览逻辑 | e    |

全屏预览图片，参考使用[`wx.previewImage`](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.previewImage.html)。

## 常见问题
