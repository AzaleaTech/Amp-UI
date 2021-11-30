Page({
  data: {
    imgUrls: [
      'https://scpic.chinaz.net/files/pic/pic9/202111/bpic24797.jpg',
      'https://scpic.chinaz.net/files/pic/pic9/202111/bpic24796.jpg',
      'https://scpic.chinaz.net/files/pic/pic9/202111/bpic24800.jpg',
    ],
    dots: true,
    current: 0,
    autoplay: false,
    interval: 5000,
    duration: 500,
    easingFunction: 'default',
    dotColor: '#B8B8B8',
    dotActiveColor: '#FFFFFF',
    circle: true,
    previousMargin: 0,
    nextMargin: 0,
    vertical: false,
  },

  handleProperty(e) {
    const { propertyName } = e.currentTarget.dataset;
    this.setData({
      [propertyName]: e.detail.value,
    });
  },
});
