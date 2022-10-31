const app = getApp();

Component({
  properties: {
    tabbar: {
      type: Object,
      value: {},
    },
  },

  methods: {
    handleTap(e) {
      const { url, index } = e.currentTarget.dataset;
      if (this.data.tabbar.customFn) {
        this.data.tabbar.customFn(this.data.tabbar?.list[index]);
      } else {
        wx.switchTab({ url });
      }
    },
  },
});
