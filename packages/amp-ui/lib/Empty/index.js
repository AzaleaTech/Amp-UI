Component({
  externalClasses: ['a-class'],

  options: {
    multipleSlots: true,
  },

  properties: {
    url: {
      type: String,
      value: '',
    },
    desc: {
      type: String,
      value: '',
    },
  },
});
