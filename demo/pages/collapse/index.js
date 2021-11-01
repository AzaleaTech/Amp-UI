Page({
  data: {
    content: [
      {
        title: '测试标题1',
        value: '测试内容1',
      },
      {
        title: '测试标题2',
        value: '测试内容2',
      },
      {
        title: '测试标题3',
        value: '测试内容3',
      },
    ],
  },

  handleOpen(e) {
    wx.showToast({ title: `打开${e.detail.value}` });
  },

  handleClose(e) {
    wx.showToast({ title: `关闭${e.detail.value}` });
  },

  handleClick(e) {
    wx.showToast({ title: `点击${e.detail.value.value}` });
  },
});
