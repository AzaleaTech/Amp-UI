Component({
  externalClasses: ['a-class'],

  relations: {
    '../Checkbox/index': {
      type: 'child',
      linked() {
        this.changeCurrent();
      },
      linkChanged() {
        this.changeCurrent();
      },
      unlinked() {
        this.changeCurrent();
      },
    },
  },

  properties: {
    current: {
      type: Array,
      value: [],
      observer: 'changeCurrent',
    },
    type: {
      type: String,
      value: 'default',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    // vertical, horizontal
    direction: {
      type: String,
      value: 'vertical',
    },
  },

  methods: {
    changeCurrent(val = this.data.current) {
      let items = this.getRelationNodes('../Checkbox/index');
      const len = items.length;
      if (len > 0) {
        items.forEach((item) => {
          item.changeCurrent(val.indexOf(item.data.value) !== -1);
        });
      }
    },

    emitEvent(current) {
      this.triggerEvent('change', current);
    },
  },
});
