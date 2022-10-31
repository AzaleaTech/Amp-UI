Page({
  data: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
  },

  onShow() {
    this.getTabBar().setData({
      tabbar: {
        ...this.getTabBar().data.tabbar,
        selected: 1,
      },
    });
  },

  handleChangeColor(e) {
    const { value } = e.detail;
    this.setData({
      checked1: value,
    });
    this.getTabBar().setData({
      tabbar: {
        ...this.getTabBar().data.tabbar,
        color: value ? '#1E90FF' : '#252525',
        selectedColor: value ? '#0000FF' : '#009CA5',
      },
    });
  },

  handleChangeBgColor(e) {
    const { value } = e.detail;
    this.setData({
      checked2: value,
    });
    this.getTabBar().setData({
      tabbar: {
        ...this.getTabBar().data.tabbar,
        backgroundColor: value ? '#CDC9C9' : '#fff',
      },
    });
  },

  handleChangeBadge(e) {
    const { value } = e.detail;
    this.setData({
      checked3: value,
    });
    const list = this.getTabBar().data.tabbar.list;
    this.getTabBar().setData({
      tabbar: {
        ...this.getTabBar().data.tabbar,
        list: [list[0], { ...list[1], badge: value, dot: false, value: 6 }],
      },
    });
  },

  handleChangeDot(e) {
    const { value } = e.detail;
    this.setData({
      checked4: value,
    });
    const list = this.getTabBar().data.tabbar.list;
    this.getTabBar().setData({
      tabbar: {
        ...this.getTabBar().data.tabbar,
        list: [list[0], { ...list[1], badge: value, dot: value, value: 6 }],
      },
    });
  },
});
