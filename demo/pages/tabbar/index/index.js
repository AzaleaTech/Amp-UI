Page({
  data: {
    currentTab: 1,
    isCeiling: false,
    tabbarHeight: 96,
    staticTabs: ['测试标签1', '测试标签2', '测试标签3'],
    overflowTabs: ['测试标签1', '测试标签2', '测试标签3', '测试标签4', '测试标签5'],
    card: {
      title: '测试Tab页',
      contents: [{ label: '测试项', content: '测试Tab页' }],
      imgUrl: '/demo/assets/images/test-avatar.jpg',
    },
  },

  onPageScroll(res) {
    if (res.scrollTop >= this.data.tabbarHeight && !this.data.isCeiling) {
      this.setData({ isCeiling: true });
    } else if (res.scrollTop < this.data.tabbarHeight && this.data.isCeiling) {
      this.setData({ isCeiling: false });
    }
  },

  handleSwitchTab(e) {
    this.setData({ currentTab: e.detail });
  },

  handleCeiling() {
    wx.navigateTo({ url: '/demo/pages/tabbar/ceiling/index' });
  },
});
