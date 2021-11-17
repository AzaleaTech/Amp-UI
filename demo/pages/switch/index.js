Page({
  data: {
    checked1: true,
    checked2: true,
    checked3: true,
    checked4: false,
  },

  handleChange(e) {
    const { index } = e.currentTarget.dataset;
    const { value } = e.detail;

    this.setData({
      ['checked' + index]: value,
    });
  },
});
