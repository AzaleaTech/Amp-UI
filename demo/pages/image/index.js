Page({
  data: {
    url: 'https://wpw-dt.oss-cn-hangzhou.aliyuncs.com/material/index/share.jpg',
    defaultUrl: 'https://wpw-dt.oss-cn-hangzhou.aliyuncs.com/material/default/observer-default.png',
    urls: [
      'https://wpw-dt.oss-cn-hangzhou.aliyuncs.com/material/index/share.jpg',
      'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
      'https://wpw-dt.oss-cn-hangzhou.aliyuncs.com/material/default/observer-default.png',
    ],
  },

  handlePreview(e) {
    const { value } = e.detail;

    wx.previewImage({
      urls: [value],
      current: value,
    });
  },

  handlePreviewImgs(e) {
    const { value } = e.detail;

    wx.previewImage({
      urls: this.data.urls,
      current: value,
    });
  },
});
