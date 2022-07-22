Page({
  data: {
    imgUrl: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg',
    time: '2021-10-10 10:10:10',
    content1: '文本内容1',
    content2: '文本内容2',
  },

  handleClickCard() {
    wx.showToast({ title: '点击卡片' });
  },

  handelClickBtn() {
    wx.showToast({ title: '点击按钮' });
  },
});
