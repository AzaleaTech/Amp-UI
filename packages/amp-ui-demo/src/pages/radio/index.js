Page({
  data: {
    value1: '单选项一',
    value2: '单选项二',
    checked1: false,
    checked2: true,
    color1: true,
    color2: true,
    current: '单选项一',
  },

  handleChange(e) {
    const { index } = e.currentTarget.dataset;
    const temp = `checked${index}`;
    this.setData({
      [temp]: !this.data[temp],
    });
  },

  handleColorChange(e) {
    const { index } = e.currentTarget.dataset;
    const temp = `color${index}`;
    this.setData({
      [temp]: !this.data[temp],
    });
  },

  handleGroupChange(e) {
    const { checked, value } = e.detail;
    if (checked) {
      this.setData({
        current: value,
      });
    }
  },
});
