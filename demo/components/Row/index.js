Component({
  externalClasses: ['a-class'],

  relations: {
    '../Col/index': {
      type: 'child',
    },
  },

  properties: {
    align: {
      type: String,
      value: 'left',
    },
    gutter: {
      type: Number,
      value: 0,
    },
  },
});
