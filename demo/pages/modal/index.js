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

  handleButtonDialog() {
    this.setData({
      showDialog: true,
      dialogData: {
        title: '弹窗标题',
        content: '弹窗内容',
        cancelText: '取消',
        confirmText: '确定',
      },
    });
  },

  handleMaxHeightDialog() {
    this.setData({
      showDialog: true,
      dialogData: {
        title: '弹窗标题',
        content:
          '弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容弹窗内容',
      },
    });
  },

  handleSuccessToast() {
    this.setData({
      toastData: {
        content: '成功提示',
        // type: 'success',
        duration: 4000,
      },
    });
  },

  handleErrorToast() {
    this.setData({
      toastData: {
        content: '错误提示',
        type: 'error',
      },
    });
  },

  handleWarningToast() {
    this.setData({
      toastData: {
        content: '警告提示',
        type: 'warning',
      },
    });
  },
});
