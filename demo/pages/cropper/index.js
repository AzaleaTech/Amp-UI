Page({
  data: {
    isCropper: false,
    image: '',
  },

  onLoad(e) {
    this.setData({ image: e.image });
  },

  handleClick() {
    this.setData({ isCropper: true });
  },

  handleSave(e) {},

  handleCancel() {},
});
