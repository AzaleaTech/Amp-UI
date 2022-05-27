Page({
  data: {
    format: { day: 'Day', hour: ':', minute: ':', second: '' },
    status: '进行中...',
  },

  handleEnd() {
    wx.showToast({
      title: 'countDown ends',
      icon: 'none',
    });
    this.setData({
      status: '已结束',
    });
  },
});
