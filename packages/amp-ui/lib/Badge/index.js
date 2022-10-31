Component({
  externalClasses: ['a-class'],

  properties: {
    value: {
      type: Number,
      value: 0,
    },
    maxValue: {
      type: Number,
      value: 999,
      observer: function (e) {
        this.setData({
          maxValue: e ? e : 999,
        });
      },
    },
    dot: {
      type: Boolean,
      value: false,
    },
  },
});
