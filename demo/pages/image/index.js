Page({
  data: {
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    url2: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    defaultUrl:'https://wpw-dt.oss-cn-hangzhou.aliyuncs.com/material/default/observer-default.png',
    urls: [
      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
      'https://img-blog.csdn.net/20170525131248116',
    ],
  },
  handleLoad(e) {
    console.log(23, e);
  },
  handleError(e) {
    console.log(123, e);
  },
  handleTap(e) {
    const { url } = e.currentTarget.dataset;
    wx.previewImage({
      urls: this.data.urls,
      current: url,
    });
  },
});
