Component({
  externalClasses: ['a-class'],

  properties: {
    lazyLoad: {
      type: Boolean,
      value: false,
    },
    mode: {
      type: String,
      value: 'scaleToFill',
    },
    webp: {
      type: Boolean,
      value: false,
    },
    showMenuByLongpress: {
      type: Boolean,
      value: false,
    },
    src: {
      type: String,
      value: '',
    },
    fallback: {
      type: String,
      value: '',
    },
    width: {
      type: String,
      value: '680rpx',
    },
    height: {
      type: String,
      value: '640rpx',
    },
  },

  methods: {
    handleError(e) {
      const { fallback } = this.data;

      this.setData({
        src:
          fallback ||
          'https://wpw-dt.oss-cn-hangzhou.aliyuncs.com/material/default/observer-default.png',
      });
      this.triggerEvent('error', { value: e.detail });
    },

    handleLoad(e) {
      this.triggerEvent('load', { value: e.detail });
    },

    handleTap(e) {
      const { url } = e.currentTarget.dataset;

      this.triggerEvent('click', { value: url });
    },
  },
});
