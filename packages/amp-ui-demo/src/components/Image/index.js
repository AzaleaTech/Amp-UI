Component({
  externalClasses: ['a-class'],

  properties: {
    src: {
      type: String,
      value: '',
    },
    width: {
      type: String | Number,
      value: 340,
    },
    height: {
      type: String | Number,
      value: 340,
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
    preview: {
      type: Boolean,
      value: true,
    },
    showMenuByLongpress: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    error: false,
  },

  methods: {
    handleError(e) {
      this.data.error = true;
      const { fallback } = this.data;
      this.setData({
        src: fallback || 'https://wpw-dt.oss-cn-hangzhou.aliyuncs.com/material/img-error.png',
      });
      this.triggerEvent('error', { value: e.detail });
    },

    handleLoad(e) {
      this.triggerEvent('load', { value: e.detail });
    },

    handleTap(e) {
      const { preview, error } = this.data;
      if (error) return;
      const { url } = e.currentTarget.dataset;
      if (preview) {
        wx.previewImage({
          urls: [url],
          current: url,
        });
      }
      this.triggerEvent('click', { value: url });
    },
  },
});
