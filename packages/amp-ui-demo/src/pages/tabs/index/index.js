Page({
  data: {
    currentTab: 1,
    ceiling: false,
    tabsHeight: 96,
    staticTabs: ['标签1', '标签2', '标签3'],
    overflowTabs: ['标签1', '标签2', '标签3', '标签4', '标签5', '标签6', '标签7'],
    card: {
      title: '标题',
      imgUrl: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
    },
  },

  onPageScroll(res) {
    if (res.scrollTop >= this.data.tabsHeight && !this.data.ceiling) {
      this.setData({ ceiling: true });
    } else if (res.scrollTop < this.data.tabsHeight && this.data.ceiling) {
      this.setData({ ceiling: false });
    }
  },

  handleSwitchTab(e) {
    this.setData({ currentTab: e.detail.value });
  },

  handleCeiling() {
    wx.navigateTo({ url: '/pages/tabs/ceiling/index' });
  },
});
