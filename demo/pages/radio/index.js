Page({
  data: {
    value1: '选项一',
    value2: '选项二',
    value3: '选项三',
    checked1: false,
    checked2: true,
    checked3: true,
    current: '选项一',
  },

  handleChange(e) {
    const { index } = e.currentTarget.dataset;
    const temp = `checked${index}`;
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
