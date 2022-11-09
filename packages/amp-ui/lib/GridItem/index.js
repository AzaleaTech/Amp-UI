Component({
  externalClasses: ['a-class'],

  relations: {
    '../Grid/index': {
      type: 'parent',
    },
  },

  properties: {
    title: {
      type: String,
      value: '',
    },
    desc: {
      type: String,
      value: '',
    },
    iconName: {
      type: String,
      value: '',
    },
    iconColor: {
      type: String,
      value: '',
    },
    iconSize: {
      type: Number,
      value: 60,
    },
  },

  methods: {
    handleClick(e) {
      if (this.data.clickable) {
        this.triggerEvent('click', { value: this.data });
      }
    },
  },
});
