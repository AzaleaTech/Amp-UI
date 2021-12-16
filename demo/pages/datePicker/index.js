Page({
  data: {
    show: false,
    type: '',
    dateValue: '',
    valueFormat: 'yyyy-MM-dd hh:mm',
    label: '空',
    value: '空',
    markers: [{
        date: '2022-01-01',
        text: '生日',
        disabled: true,
      },
      {
        date: '12-31',
        text: '跨年',
        bgColor: 'pink',
      },
      {
        date: '12-04',
        text: '色标',
      },
      {
        date: '12-28',
        text: '测试',
      },
    ],
    formatter: (date) => {
      return date;
    },
  },

  handleBtnClick(e) {
    const {
      type
    } = e.currentTarget.dataset;
    let dateValue = '';

    if (type === 'range') {
      dateValue = ['2022-2-1', '2022-11-30'];
    } else {
      dateValue = '2022-11-30 23:59';

    }
    this.setData({
      show: true,
      type,
      dateValue,
    });
  },

  handleConfirm(e) {
    this.setData({
      value: e.detail.value,
      label: e.detail.label
    })
  },

  handleCancel() {
    wx.showToast({
      title: '取消',
    });
  },
});