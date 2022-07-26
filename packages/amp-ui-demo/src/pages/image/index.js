Page({
  data: {
    url: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
    urls: [
      'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
      'https://wpw-dt.oss-cn-hangzhou.aliyuncs.com/material/default/observer-default.png',
    ],
  },

  handlePreviewImgs(e) {
    const { value } = e.detail;
    wx.previewImage({
      urls: this.data.urls,
      current: value,
    });
  },
});
