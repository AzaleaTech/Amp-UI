Page({
  data: {
    count: 1,
    imgUrl: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
  },

  handleClick(e) {
    wx.showToast({ title: `${this.data.count > 1 ? '第' + this.data.count + '次' : ''}点击头像` });
    this.data.count += 1;
  },
});
