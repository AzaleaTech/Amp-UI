Page({
  data: {
    isCropper: false,
    imgUrl: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
  },

  handleClick() {
    this.setData({ isCropper: true });
  },

  handleSave(e) {
    this.setData({
      toastData: {
        content: '裁剪成功',
      },
      imgUrl: e.detail.value,
      isCropper: false,
    });
  },

  handleCancel() {
    this.setData({
      toastData: {
        content: '取消操作',
      },
      isCropper: false,
    });
  },
});
