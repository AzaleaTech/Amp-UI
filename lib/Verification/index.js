Component({
  data: {
    content: '获取验证码',
    remainingTime: 0,
    totalTime: 60,
  },

  lifetimes: {
    ready() {
      this.getStorageTime();
    },
  },

  methods: {
    /**
     * 点击获取验证码，执行倒计时并发送点击事件
     */
    handleClickButton() {
      // 初始化倒计时并清空按钮文字
      this.setData({ remainingTime: this.data.totalTime });
      this.setData({ content: '' });
      // 开始倒计时
      this.countDownTime();
      // 发送点击事件
      this.triggerEvent('clickVerification', this.data.data);
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
          this.setData({ content: '再次获取验证码' });
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
        }
      });
    },

  },
})