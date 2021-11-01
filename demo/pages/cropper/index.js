Page({
  data: {
    isCropper: false,
    img: '',
  },

  onLoad(e) {
    this.setData({ img: e.img });
  },

  handleClick() {
    this.setData({ isCropper: true });
  },

  handleSave(e) {
    this.setData({
      toastData: {
        content: '裁剪成功',
      },
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
