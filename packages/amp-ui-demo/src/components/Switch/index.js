Component({
  externalClasses: ['a-class'],

  properties: {
    checked: {
      type: Boolean,
      value: false,
    },
    color: {
      type: String,
      value: '',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
  },

  methods: {
    handleSwitch() {
      if (this.data.disabled) return;
      const value = this.data.checked ? false : true;
      this.triggerEvent('change', {
        value,
      });
    },
  },
});
