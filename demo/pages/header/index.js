Page({
  data: {
    background: 'white',
    color: 'black',
    hasReturn: true,
    title: 'Header',
    hasHome: false,
  },

  handleBackground() {
    this.setData({
      background: this.data.background === 'white' ? 'gray' : 'white',
    });
  },

  handleColor() {
    this.setData({
      color: this.data.color === 'black' ? 'blue' : 'black',
    });
  },

  handleReturn() {
    this.setData({
      hasReturn: this.data.hasReturn && this.hasHome ? false : true,
      hasHome: this.data.hasReturn && this.hasHome ? true : false,
    });
  },

  handleHome() {
    this.setData({
      hasHome: this.data.hasReturn && this.hasHome ? false : true,
      hasReturn: this.data.hasReturn && this.hasHome ? true : false,
    });
  },

  handleBoth() {
    this.setData({
      hasHome: true,
      hasReturn: true,
    });
  },

  handleTitle() {
    this.setData({
      title: this.data.title === 'Header' ? 'Header1' : 'Header',
    });
  },

  goHome() {
    wx.redirectTo({
      url: '/demo/pages/index/index',
    });
  },
});
