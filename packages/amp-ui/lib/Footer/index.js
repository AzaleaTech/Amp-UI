Component({
  externalClasses: ['a-class'],

  options: {
    multipleSlots: true, // 启用多slot支持
  },

  properties: {
    content: {
      type: String,
      value: '',
    },
    backgroundColor: {
      type: String,
      value: '',
    },
  },
});
