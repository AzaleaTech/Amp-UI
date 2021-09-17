Component({
  properties: {
    title: {
      type: String,
      value: '',
    },
    hasReturn: {
      type: Boolean,
      value: true,
    },
    background: {
      type: String,
      value: '',
    },
    color: {
      type: String,
      value: '',
    },
  },

  lifetimes: {
    attached() {
      wx.getSystemInfo({
        success: (res) => {
          this.setData({ statusBarHeight: res.statusBarHeight });
        },
      });
    },
  },
  methods: {
    handleReturn() {
      wx.navigateBack();
    },
  },
});
