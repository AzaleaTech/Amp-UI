Component({
  externalClasses: ['a-class'],

  properties: {
    src: {
      type: String,
      value: '',
    },
    // large、default、small
    size: {
      type: String,
      value: 'default',
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
    name: {
      type: String,
      value: '',
    },
    desc: {
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
