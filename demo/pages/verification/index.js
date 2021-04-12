Page({
  data: {
    phoneNumber: '',
    startCount: false,
  },

  handlePhoneNumberInput(e) {
    this.setData({ phoneNumber: e.detail.value });
  },

  handleClickVerification() {
    const phoneNumber = this.data.phoneNumber;
    if (/(^[1-9]\d*$)/.test(phoneNumber) && phoneNumber.length === 11) {
      wx.showToast({ title: '开始计时' });
      this.setData({ startCount: true });
    } else {
      wx.showToast({ title: '格式错误！' });
      // this.setData({ startCount: false });
    }
  },
});
