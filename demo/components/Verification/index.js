Component({
  properties: {
    /**
     * 禁用验证码按钮，选填
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 启动计时按钮，必填
     */
    startCount: {
      type: Boolean,
      default: false,
    },
    /**
     * 重新获取验证码所需的时间，选填
     */
    totalTime: {
      type: Number,
      value: 60,
    },
    /**
     * 按钮文本，选填
     */
    content: {
      type: String,
      value: '获取验证',
    },
  },

  data: {
    remainingTime: 0,
  },

  lifetimes: {
    ready() {
      this.getStorageTime();
    },
  },

  observers: {
    /**
     * 执行倒计时
     */
    startCount(value) {
      if (value === true) {
        // 初始化倒计时并清空按钮文字
        this.setData({ remainingTime: this.data.totalTime });
        this.setData({ content: '' });
        // 开始倒计时
        this.countDownTime();
      }
    },
  },

  methods: {
    /**
     * 发送点击事件
     */
    handleClickButton() {
      this.triggerEvent('click');
    },

    /**
     * 进行验证码倒计时并存储该倒计时
     */
    countDownTime() {
      const timer = setInterval(() => {
        wx.setStorage({ key: 'remainingTime', data: this.data.remainingTime });
        this.setData({ remainingTime: this.data.remainingTime - 1 });
        // 倒计时结束，恢复按钮文字，清空倒计时和缓存
        if (this.data.remainingTime === 0) {
          this.setData({ content: '重新获取' });
          clearInterval(timer);
          wx.clearStorage('remainingTime');
          wx.clearStorage('timer');
        }
      }, 1000);
      wx.setStorage({ key: 'timer', data: timer });
    },

    /**
     * 获取已存储的验证码倒计时
     */
    getStorageTime() {
      // 获取全局时间缓存
      wx.getStorage({
        key: 'remainingTime',
        success: (res) => {
          const remainingTime = res.data;
          if (remainingTime > 0) {
            // 继续倒计时
            this.setData({ remainingTime, content: '' });
            this.countDownTime();
          }
        },
      });
    },
  },
});
