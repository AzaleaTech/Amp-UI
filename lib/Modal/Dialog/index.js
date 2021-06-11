Component({
  properties: {
    /**
     * 弹框对象内容
     * declare dialogData {
     *    title?: String,
     *    content: String,
     *    cancelText?: String,
     *    confirmText?: String
     *    cancel?: Function  // 取消回调函数
     *    confirm?: Function // 确定回调函数
     * }
     */
    dialogData: {
      type: Object,
      value: {},
    },
  },

  data: {
    show: false,
  },

  observers: {
    dialogData(val) {
      if (val) {
        this.setData({
          show: true,
        });
      }
    },
  },

  methods: {
    closeDialog() {
      this.setData({
        show: false,
      });
    },

    cancel() {
      setTimeout(() => {
        this.closeDialog();
        if (this.data.dialogData.cancel) {
          this.data.dialogData.cancel();
        }
        this.triggerEvent('cancel');
      }, 300);
    },

    confirm() {
      setTimeout(() => {
        this.closeDialog();
        if (this.data.dialogData.confirm) {
          this.data.dialogData.confirm();
        }
        this.triggerEvent('confirm');
      }, 300);
    },
  },
});
