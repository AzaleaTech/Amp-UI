Page({
  data: {
    imgs: '',
    imgParam: 'imgs',
  },

  onLoad(e) {
    this.setData({ imgs: e.imgs, imgParam: e.imgParam || 'imgs' });
  },

  handleSave(e) {
    const { item, fileName } = e.detail;
    wx.showLoading({ title: '保存中' });
    // 保存图片后的操作
  },

  handleCancel() {
    wx.navigateBack();
  },
});
