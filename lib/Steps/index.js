Component({
  externalClasses: ['a-class'],

  properties: {
    steps: {
      type: Array,
      value: [],
    },
    current: {
      type: Number,
      value: 0,
    },
    // horizontal、vertical
    direction: {
      type: String,
      value: 'horizontal',
    },
  },
});
