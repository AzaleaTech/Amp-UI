Page({
  data: {
    checked: true,
    checked1: false
  },

  handleChange(e) {
    this.setData({
      checked: e.detail.value
    })
  },
});
