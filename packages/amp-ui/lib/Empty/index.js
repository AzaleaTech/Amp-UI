Component({
  externalClasses: ['a-class'],

  properties: {
    content: {
      type: String,
      value: '',
    },
    desc: {
      type: String,
      value: '',
    },
    url: {
      type: String,
      value: '',
    },
    fallbackUrl: {
      type: String,
      value: 'https://wpw-dt.oss-cn-hangzhou.aliyuncs.com/material/default/observer-default.png',
    },
  },

  data: {
    size: 400, // 图片默认大小（rpx ）
  },
});
