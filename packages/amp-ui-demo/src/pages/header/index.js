const data = {
  background: 'white',
  color: 'black',
  iconColor: 'black',
  title: '标题',
  hasReturn: false,
  hasHome: false,
  subTitle: '',
};

Page({
  data,

  handleBackground() {
    this.setData({
      background:
        this.data.background === 'white'
          ? 'linear-gradient(225deg, #04A8B2 0%, #007A96 100%);'
          : 'white',
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
      title: this.data.title === '标题' ? '页面一' : '标题',
    });
  },

  handleSubTitle() {
    this.setData({
      subTitle: this.data.subTitle === '' ? '副标题' : '',
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
