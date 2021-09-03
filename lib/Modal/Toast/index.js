Component({
  properties: {
    /**
     * 提示框对象内容
     * declare toastData {
     *    content: String
     *    type?: String //默认'success', 可选'warning', 'error'
     *    duration?: number //默认1500ms
     * }
     */
    toastData: {
      type: Object,
      value: {},
    },
  },

  data: {
    show: false,
  },

  observers: {
    // 弹框默认1.5s关闭
    toastData(val) {
      if (val) {
        this.setData({ show: true });
        setTimeout(() => {
          this.setData({ show: false });
        }, val.duration || 1500);
      }
    },
  },
});
