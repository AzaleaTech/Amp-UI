module.exports = {
  title: 'Amp UI', // 设置网站标题
  description: '文档', //描述
  dest: './docs-dist', // 设置输出目录
  themeConfig: {
    repo: 'https://github.com/AzaleaTech/Amp-UI',
    repoLabel: '查看源码',
    contributors: false,
    sidebar: {
      '/': [
        {
          text: '概要',
          collapsable: true,
          children: ['/README.md', '/docs/index.md'],
        },
        {
          text: '基础组件',
          collapsable: true,
          children: ['/docs/icon', '/docs/button', '/docs/buttonGroup', '/docs/layout'],
        },
        {
          text: '导航组件',
          collapsable: true,
          children: ['/docs/header', '/docs/tabs'],
        },
        {
          text: '视图组件',
          collapsable: true,
          children: [
            '/docs/avatar',
            '/docs/badge',
            '/docs/tag',
            '/docs/card',
            '/docs/collapse',
            '/docs/empty',
            '/docs/image',
            '/docs/noticeBar',
            '/docs/steps',
            '/docs/swiper',
            '/docs/divider',
            '/docs/parse',
          ],
        },
        {
          text: '表单组件',
          collapsable: true,
          children: [
            '/docs/form',
            '/docs/input',
            '/docs/checkbox',
            '/docs/checkboxGroup',
            '/docs/radio',
            '/docs/switch',
            '/docs/rate',
            '/docs/player',
            '/docs/record',
            '/docs/cropper',
            '/docs/upload',
            '/docs/datePicker',
          ],
        },
        {
          text: '操作反馈',
          collapsable: true,
          children: ['/docs/toast', '/docs/dialog'],
        },
        {
          text: '其他',
          collapsable: true,
          children: ['/docs/painter', '/docs/echarts'],
        },
      ],
    },
  },
};
