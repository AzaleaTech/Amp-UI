Page({
  data: {
    value1: '选项一',
    value2: '选项二',
    value3: '选项三',
    checked1: false,
    checked2: true,
    checked3: true,
    current: ['选项一', '选项二', '选项三'],
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
    let tempCurrent = this.data.current;
    if (checked) {
      if (!this.data.current.includes(value)) {
        tempCurrent.push(value);
      }
    } else {
      if (this.data.current.includes(value)) {
        tempCurrent = tempCurrent.filter((item) => item !== value);
      }
    }
    this.setData({
      current: tempCurrent,
    });
  },
});
