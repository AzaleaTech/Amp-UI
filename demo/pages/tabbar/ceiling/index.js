Page({
  data: {
    currentTab: 0,
    isCeiling: false,
    tabbarHeight: 41.6,
    staticTabs: ['测试标签'],
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
});
