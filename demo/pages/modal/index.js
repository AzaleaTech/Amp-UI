Page({
  data: {
    showModal: false,
    showDialog: false,
  },

  handleModal() {
    this.setData({
      showModal: true,
    });
    setTimeout(() => {
      this.setData({
        showModal: false,
      });
    }, 1000);
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

  handleSlotDialog() {
    this.setData({
      showDialog: true,
      dialogData: {
        title: '弹窗标题',
        extra: 'http://img.touxiangwu.com/uploads/allimg/2021090520/4ypmjhjszm0.jpg',
      },
    });
  },

  handleSuccessToast() {
    this.setData({
      toastData: {
        content: '成功提示',
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

  handleImage() {
    console.log(this.data.dialogData.extra);
  },
});
