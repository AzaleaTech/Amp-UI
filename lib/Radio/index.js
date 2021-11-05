Component({
  externalClasses: ['a-class'],

  relations: {
    '../RadioGroup/index': {
      type: 'parent',
      linked(target) {
        if (!this.properties.disabled && target.data.disabled) {
          this.setData({ disabled: target.data.disabled });
        }
      },
    },
  },

  properties: {
    value: {
      type: String,
      value: '',
    },
    checked: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    color: {
      type: String,
      value: '',
    },
    // left, right
    position: {
      type: String,
      value: 'left',
    },
  },

  data: {
    checked: true,
  },

  methods: {
    changeCurrent(checked) {
      this.setData({ checked });
    },

    handleChange() {
      if (this.data.disabled) return;
      const item = { checked: !this.data.checked, value: this.data.value };
      const parent = this.getRelationNodes('../RadioGroup/index')[0];
      parent ? parent.emitEvent(item) : this.triggerEvent('change', item);
    },
  },
});
