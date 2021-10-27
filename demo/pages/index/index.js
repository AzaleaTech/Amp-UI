Page({
  data: {
    components: [
      { label: 'Icon 图标', url: '../icon/index' },
      { label: 'Card 卡片', url: '../card/index' },
      { label: 'Tabs 标签页', url: '../tabs/index/index' },
      { label: 'Button & ButtonGroup 按钮及按钮组', url: '../button/index' },
      { label: 'Form & FormItem 表单及表单项', url: '../form/index' },
      { label: 'Verification 验证码按钮', url: '../verification/index' },
      { label: 'Collapse 可折叠列表', url: '../collapse/index' },
      { label: 'Modal 遮罩层（包括Dialog和Toast）', url: '../modal/index' },
      { label: 'Header 页面header', url: '../header/index' },
      { label: 'Rate 评分组件', url: '../rate/index' },
      { label: 'Audio 音频和录音组件', url: '../audio/index' },
      { label: 'Cropper 图片裁剪组件', url: '../cropper/index' },
      { label: 'Upload 上传图片或视频组件', url: '../upload/index' },
      { label: 'Echarts 图表', url: '../echarts/map/index' },
    ],
    //用于图片剪裁
    img: '/demo/assets/images/test-avatar.jpg',
  },

  handleClickFormItem(e) {
    if (e.currentTarget.dataset.label == 'Cropper 图片裁剪组件') {
      wx.navigateTo({
        url: e.currentTarget.dataset.url + `?image=${this.data.img}`,
      });
    }
    wx.navigateTo({ url: e.currentTarget.dataset.url });
  },
});
