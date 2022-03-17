Component({
  externalClasses: ['a-class'],

  properties: {
    src: {
      type: String,
      value: '',
    },
    width: {
      type: String | number,
      value: 680,
    },
    height: {
      type: String | number,
      value: 680,
    },
    fallback: {
      type: String,
      value: '',
    },
    mode: {
      type: String,
      value: 'scaleToFill',
    },
    webp: {
      type: Boolean,
      value: false,
    },
    lazyLoad: {
      type: Boolean,
      value: false,
    },
    showMenuByLongpress: {
      type: Boolean,
      value: false,
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
