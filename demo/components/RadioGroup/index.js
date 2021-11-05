Component({
  externalClasses: ['a-class'],

  relations: {
    '../Radio/index': {
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
      type: String,
      value: '',
      observer: 'changeCurrent',
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
      let items = this.getRelationNodes('../Radio/index');
      const len = items.length;
      if (len > 0) {
        items.forEach((item) => {
          item.changeCurrent(val === item.data.value);
        });
      }
    },

    emitEvent(current) {
      this.triggerEvent('change', current);
    },
  },
});
