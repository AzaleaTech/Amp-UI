Page({
  data: {
    format: { day: 'Day', hour: ':', minute: ':', second: '' },
    status: '进行中...',
    time: 0,
  },

  handleStart(e) {
    this.setData({
      time: e.detail.value,
    });
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
