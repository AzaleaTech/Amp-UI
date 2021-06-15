const innerAudioContext = wx.createInnerAudioContext();

Component({
  properties: {
    // 音频链接
    url: {
      type: String,
      value: '',
    },
  },

  data: {
    playIcon: 2,
    time: null,
    isPlaying: false,
  },

  lifetimes: {
    attached() {
      wx.setInnerAudioOption({
        obeyMuteSwitch: false,
      });
      
      // 监听语音播放对象的播放完毕以及关闭
      innerAudioContext.onEnded(() => {
        clearTimeout(this.data.time);
        this.data.time = null;
        this.setData({
          playIcon: 2,
          isPlaying: false,
        });
      });

      innerAudioContext.onStop(() => {
        this.setData({
          playIcon: 2,
          isPlaying: false,
        });
        clearTimeout(this.data.time);
        this.data.time = null;
      });
    },
  },

  methods: {
    playVoice() {
      this.data.time = setTimeout(() => {
        this.setData({
          playIcon: this.data.playIcon === 2 ? 0 : this.data.playIcon + 1,
        });
        this.playVoice();
      }, 300);
    },

    tapPlayer() {
      innerAudioContext.stop();
      if (!this.data.time) {
        setTimeout(() => {
          innerAudioContext.src = this.properties.url;
          innerAudioContext.play();
          this.playVoice();
          this.setData({
            playIcon: 0,
            isPlaying: true,
          });
        }, 50);
      } else {
        this.setData({
          playIcon: 1,
          isPlaying: false,
        });
        innerAudioContext.stop();
        // 当音频文件错误时innerAudioContext无法监测停止，需要手动关闭计时器
        clearTimeout(this.data.time);
        this.data.time = null;
      }
    },
  },
});
