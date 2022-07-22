Page({
  data: {
    currentTab: 0,
    staticTabs: ['标签1', '标签2', '标签3'],
    card: {
      title: '标题',
      imgUrl: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
    },
  },

  handleSwitchTab(e) {
    this.setData({ currentTab: e.detail.value });
    wx.createSelectorQuery()
      .select('.tabs')
      .boundingClientRect((res) => {
        wx.pageScrollTo({
          scrollTop: res.top,
          duration: 300,
        });
      })
      .exec();
  },
});
