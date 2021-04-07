Page({
  data: {
    components: [
      { label: 'Card 卡片', url: '../card/index' },
      { label: 'Tabbar 导航栏', url: '../tabbar/index/index' },
      { label: 'Button & ButtonGroup 按钮及按钮组', url: '../button/index' },
      { label: 'Form & FormItem 表单及表单项', url: '../form/index' },
      { label: 'Verification 验证码按钮', url: '../verification/index' },
      { label: 'Collapse 可折叠列表', url: '../collapse/index' },
    ],
  },

  handleClickFormItem(e) {
    wx.navigateTo({ url: e.currentTarget.dataset.url });
  },
});
