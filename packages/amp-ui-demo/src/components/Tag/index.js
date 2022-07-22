Component({
  externalClasses: ['a-class'],

  properties: {
    name: {
      type: String,
      value: '',
    },
    // small, default, large
    size: {
      type: String,
      value: 'default',
    },
    // default, primary, success, warning, error
    type: {
      type: String,
      value: 'default',
    },
    circle: {
      type: Boolean,
      value: false,
    },
    plain: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
  },

  methods: {
    handleTap(e) {
      if (this.data.disabled) return;
      this.triggerEvent('click', {
        value: this.data.name,
      });
    },
  },
});
