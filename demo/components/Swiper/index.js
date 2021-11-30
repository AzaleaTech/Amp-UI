Component({
  externalClasses: ['a-class'],

  properties: {
    imgUrls: {
      type: Array,
      value: [],
    },
    current: {
      type: Number,
      value: 0,
    },
    dots: {
      type: Boolean,
      value: false,
    },
    dotColor: {
      type: String,
      value: '',
    },
    dotActiveColor: {
      type: String,
      value: '',
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    interval: {
      type: Number,
      value: 5000,
    },
    duration: {
      type: Number,
      value: 500,
    },
    vertical: {
      type: Boolean,
      value: false,
    },
    circle: {
      type: Boolean,
      value: false,
    },
    easingFunction: {
      type: String,
      value: 'default',
    },
    previousMargin: {
      type: Number,
      value: 0,
    },
    nextMargin: {
      type: Number,
      value: 0,
    },
  },

  methods: {
    swiperChange(e) {
      this.setData({
        current: e.detail.current,
      });
      this.triggerEvent('change', { value: e.detail });
    },
  },
});
