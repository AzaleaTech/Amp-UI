Component({
  externalClasses: ['a-class'],

  properties: {
    size: {
      type: Number,
      value: 120,
    },
    src: {
      type: String,
      value: '',
    },
    circle: {
      type: Boolean,
      value: false,
    },
    border: {
      type: Boolean,
      value: false,
    },
    borderColor: {
      type: String,
      value: '',
    },
  },

  methods: {
    handleClick(e) {
      this.triggerEvent('click', { value: this.data.src });
    },
  },
});
