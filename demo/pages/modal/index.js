Page({
  data: {
    showModal: false,
    showDialog: false,
  },

  handleModal() {
    this.setData({
      showModal: true,
    });
  },

  handleDialog() {
    this.setData({
      showDialog: true,
      dialogData: {
        title: '弹窗标题',
        content: '弹窗内容',
      },
    });
  },

  handleSuccessToast() {
    this.setData({
      toastData: {
        content: '成功提示',
        type: 'success',
      },
      time: 2000,
    });
  },

  handleErrorToast() {
    this.setData({
      toastData: {
        content: '错误提示',
        type: 'error',
      },
      time: 1500,
    });
  },

  handleWarningToast() {
    this.setData({
      toastData: {
        content: '警告提示',
        type: 'warning',
      },
      time: 3000,
    });
  },
});
