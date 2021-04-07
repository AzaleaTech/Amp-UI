Page({
  data: {
    card: {
      title: '测试标题',
      complexTitle: '测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题',
      contents: [
        { label: '测试项', content: '测试文本' },
        { label: '测试项', content: '测试文本' },
      ],
      complexContents: [
        { label: '测试项', content: '测试文本' },
        { label: '测试项', content: '测试文本测试文本测试文本' },
        {
          label: '测试项',
          content: '测试文本测试文本测试文本测试文本测试文本测试文本测试文本测试文本',
        },
      ],
      imgUrl: '/demo/assets/images/test-avatar.jpg',
      footer: '测试footer文本',
      spec: {
        label: '测试项',
        content: '测试文本',
        color: 'rgba(233, 163, 45, 1)',
        size: 26,
        tags: [{ content: '测试tag', color: 'rgba(255, 0, 0, 1)' }],
        likes: {
          url: '/demo/assets/images/likes-list-icon.png',
          value: 15,
        },
      },
    },
  },

  handleClickCard() {
    wx.showToast({ title: '点击卡片' });
  },
});
