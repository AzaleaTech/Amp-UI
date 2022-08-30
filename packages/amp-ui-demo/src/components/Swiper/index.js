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
    autoplay: {
      type: Boolean,
      value: false,
    },
    circular: {
      type: Boolean,
      value: false,
    },
    duration: {
      type: Number,
      value: 500,
    },
    dots: {
      type: Boolean,
      value: false,
    },
    dotCircle: {
      type: Boolean,
      value: true,
    },
    dotColor: {
      type: String,
      value: '',
    },
    dotActiveColor: {
      type: String,
      value: '',
    },
    easingFunction: {
      type: String,
      value: 'default',
    },
    interval: {
      type: Number,
      value: 5000,
    },
    previousMargin: {
      type: Number,
      value: 0,
    },
    nextMargin: {
      type: Number,
      value: 0,
    },
    vertical: {
      type: Boolean,
      value: false,
    },
  },

  methods: {
    handleChange(e) {
      this.setData({
        current: e.detail.current,
      });
      this.triggerEvent('change', { value: e.detail });
    },
  },
});
