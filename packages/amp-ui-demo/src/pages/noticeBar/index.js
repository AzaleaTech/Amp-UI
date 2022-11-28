import { getRandomColor } from './utils/index.js';

Page({
  data: {
    iconName: 'trumpet_fill',
    iconColor: 'rgba(255, 143, 31, 1)',
    iconSize: 60,
    text: 'NoticeBar组件常用于显示消息通知',
    iconUrl: 'https://profile.csdnimg.cn/9/0/A/2_swingdance',
    swiperArr: ['第一条通知', '第二条通知', '第三条通知'],
    speed: 100,
    delay: 400,
    roll: true,
    vertical: false,
    clearable: false,
  },

  handleClick(e) {},

  handleChangeColor() {
    this.setData({
      iconColor: getRandomColor(),
    });
  },

  handleProperty(e) {
    const { propertyName } = e.currentTarget.dataset;

    this.setData({
      [propertyName]: e.detail.value,
    });
  },

  handleClear(e) {
    console.log('e: ', e);
    const { value } = e.detail;
    wx.showToast({
      title: `点击删除第${value + 1}条通知`,
      icon: 'none',
    });
  },
});
