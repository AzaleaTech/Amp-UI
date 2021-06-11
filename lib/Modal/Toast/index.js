Component({
  properties: {
    /**
     * 提示框对象内容
     * declare toastData {
     *    content: String
     *    type?: String //默认'success', 可选'warning', 'error'
     * }
     */
    toastData: {
      type: Object,
      default: {},
    },
     /**
     * timeout时间，默认为1500ms
     */
    time: {
      type: Number,
      default: 1500,
    }
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
        }, this.properties.time);
      }
    },
  },
});
