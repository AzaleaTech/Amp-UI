Page({
  data: {
    components: [
      {
        title: '基础',
        data: [
          { label: 'Icon 图标', url: '../icon/index' },
          { label: 'Button 按钮', url: '../button/index' },
          { label: 'ButtonGroup 按钮组', url: '../buttonGroup/index' },
        ],
      },
      {
        title: '导航',
        data: [
          { label: 'Header 顶部栏', url: '../header/index' },
          { label: 'Tabs 标签页', url: '../tabs/index/index' },
        ],
      },
      {
        title: '视图',
        data: [
          { label: 'Avatar 头像', url: '../avatar/index' },
          { label: 'Badge 徽标', url: '../badge/index' },
          { label: 'Tag 标签', url: '../tag/index' },
          { label: 'Card 卡片', url: '../card/index' },
          { label: 'Collapse 可折叠列表', url: '../collapse/index' },
          { label: 'Steps 步骤条', url: '../steps/index' },
          { label: 'Swiper 轮播图', url: '../swiper/index' },
          { label: 'Divider 分割线', url: '../divider/index' },
          { label: 'Parse 富文本解析', url: '../parse/index' },
        ],
      },
      {
        title: '表单',
        data: [
          { label: 'Form & FormItem 表单及表单项', url: '../form/index' },
          { label: 'input 输入框', url: '../input/index' },
          { label: 'Rate 评分组件', url: '../rate/index' },
          { label: 'Radio 单选框', url: '../radio/index' },
          { label: 'Checkbox 多选框', url: '../checkbox/index' },
          { label: 'Switch 开关', url: '../switch/index' },
          { label: 'Audio 音频和录音组件', url: '../audio/index' },
          { label: 'Cropper 图片裁剪组件', url: '../cropper/index' },
          { label: 'Upload 上传图片或视频组件', url: '../upload/index' },
        ],
      },
      {
        title: '操作反馈',
        data: [{ label: 'Modal 遮罩层（包括Dialog和Toast）', url: '../modal/index' }],
      },
      {
        title: '其他',
        data: [{ label: 'Echarts 图表', url: '/demo/subPages/echarts/index/index' }],
      },
    ],
  },

  handleClickFormItem(e) {
    const { url } = e.currentTarget.dataset;
    wx.navigateTo({ url });
  },
});
