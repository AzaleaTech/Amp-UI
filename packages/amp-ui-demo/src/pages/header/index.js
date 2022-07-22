const data = {
  background: 'white',
  color: 'black',
  iconColor: 'black',
  title: '标题栏',
  hasReturn: false,
  hasHome: false,
};

Page({
  data,

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

  handleIcon() {
    this.setData({
      iconColor: this.data.iconColor === 'black' ? 'blue' : 'black',
    });
  },

  handleTitle() {
    this.setData({
      title: this.data.title === '标题栏' ? '标题栏1' : '标题栏',
    });
  },

  goHome() {
    wx.redirectTo({
      url: '/demo/pages/index/index',
    });
  },

  handleReset() {
    this.setData({ ...data });
  },
});
