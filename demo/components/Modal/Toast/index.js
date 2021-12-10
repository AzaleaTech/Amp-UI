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
    iconName: '',
    iconColor: '',
    iconTypes: {
      success: ['succeed_fill', '#19BE6B'],
      warning: ['about_fill', '#FFB500'],
      error: ['error_fill', '#ED4114'],
    },
  },

  observers: {
    // 弹框默认1.5s关闭
    toastData(val) {
      if (val) {
        const iconStatus = this.data.iconTypes[val.type || 'success'];
        this.setData({ show: true, iconName: iconStatus[0], iconColor: iconStatus[1] });
        setTimeout(() => {
          this.setData({ show: false });
        }, val.duration || 1500);
      }
    },
  },
});
