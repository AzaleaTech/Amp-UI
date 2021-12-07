Page({
  data: {
    content: [
      {
        title: '标题2-1',
        value: '内容2-1',
      },
      {
        title: '标题2-2',
        value: '内容2-2',
      },
      {
        title: '标题2-3',
        value: '内容2-3',
      },
    ],
    iconColor: '#3895f7',
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
