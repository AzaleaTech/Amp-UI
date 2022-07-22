Page({
  data: {
    basicValue: '初始数据',
    phone: '',
    password: [],
    value: '',
    customValue: '',
    disabled: false,
    second: 60,
  },

  handleChange(e) {
    const { value } = e.detail;
    this.setData({
      value,
    });
  },

  sendCode() {
    if (this.data.disabled) return;
    this.setData({
      disabled: true,
    });
    // 倒计时
    const timer = setInterval(() => {
      if (this.data.second > 0) {
        this.setData({
          second: this.data.second - 1,
        });
      } else {
        this.setData({
          second: 60,
          disabled: false,
        });
        clearInterval(timer);
      }
    }, 1000);
  },

  handleEnd() {
    this.setData({ disabled: false });
  },
});
