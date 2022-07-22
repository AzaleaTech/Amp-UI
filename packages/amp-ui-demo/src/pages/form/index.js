Page({
  data: {
    range: [0, 1, 2, 3, 4],
    value: 0,
  },

  handleClickFormItem() {
    wx.showToast({ title: '点击表单项' });
  },

  handlePickerChange(e) {
    const { value } = e.detail;
    this.setData({
      value,
    });
  },
});
