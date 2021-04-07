Page({
  data: {
    singleList: [
      { content: '文本', detail: '详情' },
      { content: '文本', detail: '详情' },
    ],
    doubleList: [
      {
        content: '文本',
        children: [{ content: '子项', detail: '子项详情' }],
      },
    ],
    clickList: [
      {
        content: '文本',
        children: [
          { content: '子项1', detail: '子项详情' },
          { content: '子项2', detail: '子项详情' },
        ],
      },
    ],
  },

  handleCollapse(e) {
    const childItem = e.detail;
    wx.showToast({ title: `点击${childItem.content}` });
  },
});
