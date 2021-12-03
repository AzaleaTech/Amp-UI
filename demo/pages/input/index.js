Page({
  data: {
    basicValue: '初始数据',
    phone: '',
    password: [],
    value: '',
  },

  handleChange(e) {
    const { value } = e.detail;
    this.setData({
      value,
    });
  },
});
