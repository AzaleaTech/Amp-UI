Component({
  externalClasses: ['a-class', 'a-class-tag'],

  options: {
    multipleSlots: true,
  },

  properties: {
    title: {
      type: String,
      value: '',
    },
    imgUrl: {
      type: String,
      value: '',
    },
    preview: {
      type: Boolean,
      value: false,
    },
  },

  methods: {
    handleTap(e) {
      if (this.properties.preview && e.target.id === 'card-img') {
        return;
      }

      this.triggerEvent('click', { value: e });
    },

    handlePreview(e) {
      if (!this.properties.preview) {
        return;
      }

      wx.previewImage({
        urls: [this.properties.imgUrl],
      });
    },
  },
});
