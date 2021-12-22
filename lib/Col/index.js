Component({
  externalClasses: ['a-class'],

  relations: {
    '../Row/index': {
      type: 'parent',
      linked(target) {
        if (target.data.gutter) {
          this.setData({ gutter: target.data.gutter });
        }
        if (target.data.align) {
          this.setData({ align: target.data.align });
        }
      },
    },
  },

  properties: {
    span: {
      type: Number,
      value: 0,
    },
    offset: {
      type: Number,
      value: 0,
    },
  },

  data: {},
});
