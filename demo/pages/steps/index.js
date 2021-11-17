Page({
  data: {
    steps1: ['第一步', '第二步', '第三步'],
    steps2: [
      {
        title: '第一步',
        desc: '描述信息',
      },
      {
        title: '第二步',
        desc: '这是描述信息, 最多两行',
      },
      {
        title: '第三步',
        desc: '这是描述信息描述信息描述信息描述信息描述信息描述信息',
      },
    ],
    current1: 0,
    current2: 1,
  },

  handleStep() {
    if (this.data.current1 >= this.data.steps1.length - 1) {
      this.setData({
        current1: 0,
      });
    } else {
      this.setData({
        current1: this.data.current1 + 1,
      });
    }
    if (this.data.current2 >= this.data.steps2.length - 1) {
      this.setData({
        current2: 0,
      });
    } else {
      this.setData({
        current2: this.data.current2 + 1,
      });
    }
  },
});
