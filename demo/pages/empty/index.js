Page({
  data: {
    description: '这是描述',
    url: 'error',
  },

  handleProperty(e) {
    const { propertyName } = e.currentTarget.dataset;

    this.setData({
      [propertyName]: e.detail.value,
    });
  },

  handleBack() {
    wx.navigateTo({
      url: '../index/index',
    });
  },
});
