Page({
  data: {
    content: '这里什么都没有呢',
    desc: '有什么意见或建议都可以提哦！',
    url: 'error',
  },

  handleBack() {
    wx.switchTab({
      url: '../index/index',
    });
  },
});
