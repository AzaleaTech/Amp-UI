Component({
  externalClasses: ['a-class'],

  properties: {
    title: {
      type: String,
      value: '',
    },
    color: {
      type: String,
      value: '#000',
    },
    background: {
      type: String,
      value: '#fff',
    },
    iconColor: {
      type: String,
      value: '#000',
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
  },

  data: {
    iconSize: 48, // 默认图标大小 单位rpx
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
        console.warn('illegal property of navigator');
      }
    },

    handleHome() {
      this.triggerEvent('backHome');
    },
  },
});
