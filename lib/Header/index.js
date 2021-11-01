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
    hasHome: {
      type: Boolean,
      value: false,
    },
    /*
     * 页面路由跳转方式，参考：https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html
     * 当 "navigate"的值为 'navigateBack' 默认使用 wx.navigateBack()；
     * 其他方式时，开发者可在页面文件自行跳转；
     */
    navigator: {
      type: String,
      value: 'navigateBack',
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
      const { width, height, right, left } = wx.getMenuButtonBoundingClientRect();
      wx.getSystemInfo({
        success: (res) => {
          const { windowWidth, statusBarHeight } = res;
          const leftMargin = windowWidth - right;
          this.setData({
            statusBarHeight,
            leftMargin,
            width,
            height,
          });
        },
      });
    },
  },

  methods: {
    handleReturn() {
      const navigatorList = ['navigateBack', 'switchTab', 'reLaunch', 'redirectTo', 'navigateTo'];
      if (navigatorList.includes(this.data.navigator)) {
        this.data.navigator === 'navigateBack' ? wx.navigateBack() : this.triggerEvent('back');
      } else {
        console.log('error');
      }
    },

    handleHome() {
      this.triggerEvent('backHome');
    },
  },
});
