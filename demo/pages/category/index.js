Page({
  data: {
    components: [
      { label: 'Card 卡片', url: '../card/index' },
      { label: 'Tabbar 导航栏', url: '../tabbar/index/index' },
      { label: 'Button & ButtonGroup 按钮及按钮组', url: '../button/index' },
      { label: 'Form & FormItem 表单及表单项', url: '../form/index' },
      { label: 'Verification 验证码按钮', url: '../verification/index' },
      { label: 'Collapse 可折叠列表', url: '../collapse/index' },
      { label: 'Modal 遮罩层（包括Dialog和Toast）', url: '../modal/index' },
      { label: 'Cropper 图片剪裁', url: '../cropper/index' },
      { label: 'Header 页面header', url: '../header/index' },
    ],
    //用于图片剪裁
    imgs: '/demo/assets/images/test-avatar.jpg'
  },

  handleClickFormItem(e) {
    if(e.currentTarget.dataset.label ==  'Cropper 图片剪裁') {
      wx.navigateTo({
        url: e.currentTarget.dataset.url + `?imgs=${this.data.imgs}`,
      });
    }
    wx.navigateTo({ url: e.currentTarget.dataset.url });
  },
});
