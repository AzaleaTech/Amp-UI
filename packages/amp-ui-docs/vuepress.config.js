module.exports = {
  base: '/amp-ui/v2/',
  title: 'Amp UI', // 设置网站标题
  description: '文档', //描述
  dest: './dist', // 设置输出目录
  themeConfig: {
    repo: 'https://github.com/AzaleaTech/Amp-UI',
    repoLabel: '查看源码',
    contributors: false,
    navbar: [
      {
        text: 'v2.x',
        children: [
          {
            text: '更新日志',
            link: './CHANGELOG.md',
          },
        ],
      },
    ],
    sidebar: {
      '/': [
        {
          text: '概要',
          collapsable: true,
          children: ['/README.md', '/src/index.md'],
        },
        {
          text: '基础组件',
          collapsable: true,
          children: ['/src/icon', '/src/button', '/src/buttonGroup', '/src/layout'],
        },
        {
          text: '导航组件',
          collapsable: true,
          children: ['/src/header', '/src/tabs'],
        },
        {
          text: '视图组件',
          collapsable: true,
          children: [
            '/src/avatar',
            '/src/badge',
            '/src/tag',
            '/src/card',
            '/src/collapse',
            '/src/countDown',
            '/src/empty',
            '/src/image',
            '/src/noticeBar',
            '/src/steps',
            '/src/swiper',
            '/src/divider',
            '/src/waterMark',
            '/src/parse',
          ],
        },
        {
          text: '表单组件',
          collapsable: true,
          children: [
            '/src/form',
            '/src/input',
            '/src/checkbox',
            '/src/checkboxGroup',
            '/src/radio',
            '/src/switch',
            '/src/rate',
            '/src/player',
            '/src/record',
            '/src/cropper',
            '/src/upload',
            '/src/datePicker',
          ],
        },
        {
          text: '操作反馈',
          collapsable: true,
          children: ['/src/toast', '/src/dialog'],
        },
        {
          text: '其他',
          collapsable: true,
          children: ['/src/painter', '/src/echarts'],
        },
      ],
    },
  },
  plugins: [['@vuepress/plugin-back-to-top'], ['@vuepress/plugin-search']],
};
