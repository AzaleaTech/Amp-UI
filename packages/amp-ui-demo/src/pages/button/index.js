Page({
  data: {
    userInfo: {},
  },

  handleClickButton() {
    wx.showToast({ title: '点击按钮' });
  },

  getUserInfo(e) {
    const { userInfo } = e.detail.value;
    this.setData({
      userInfo,
      dialogData: {
        confirmText: '确定',
      },
    });
  },

  getPhoneNumber(e) {
    if (e.detail.errMsg === 'getPhoneNumber:ok') {
      wx.showToast({
        title: '获取手机号成功',
      });
    } else {
      wx.showModal({
        content: '仅针对非个人开发者，并完成小程序认证',
      });
    }
  },

  handleError(e) {
    wx.showModal({
      content: 'APP内打开的小程序，才能返回打开APP',
    });
  },

  handleTapIcon() {
    wx.showToast({
      title: '点击了图标按钮',
    });
  },
});
