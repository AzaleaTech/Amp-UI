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
    preview: {
      type: [Boolean, Array],
      value: true,
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
      type: Number,
      value: 640,
    },
    height: {
      type: Number,
      value: 480,
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
      this.triggerEvent('error', e.detail);
    },

    handleLoad(e) {
      this.triggerEvent('load', e.detail);
    },

    handleTap(e) {
      const { url } = e.currentTarget.dataset;
      let { preview } = this.data;

      if (preview) {
        !Array.isArray(preview) && (preview = [url]);
        wx.previewImage({
          urls: preview,
          current: url,
        });
      }
    },
  },
});
