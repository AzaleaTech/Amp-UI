const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();

Component({
  properties: {
    tip: {
      type: String,
      value: '长按录入详细信息',
    },
    iconColor: {
      type: String,
      value: '#3895f7',
    },
    iconSize: {
      type: Number,
      value: 160,
    },
  },

  data: {
    recordIcon: 0,
    playIcon: 0,
    time: null,
    recordManager: null,
    filePath: '',
    canRecord: false,
    isRecording: false,
    show: true,
    isPlaying: false,
  },

  lifetimes: {
    attached() {
      wx.setInnerAudioOption({
        // 仅在iOS生效，是否遵循静音开关，若设置为false，即使是静音状态，也会播放声音
        obeyMuteSwitch: false,
      });
    },

    ready() {
      wx.authorize({
        scope: 'scope.record',
        success: () => {
          this.data.canRecord = true;
        },
        fail: () => {
          wx.showModal({
            title: '提示',
            content: '您未授权录音，功能将无法使用',
            showCancel: true,
            confirmText: '授权',
            success: (res) => {
              if (res.confirm) {
                // 确认则打开设置页面
                wx.openSetting({
                  success: (res) => {
                    if (!res.authSetting['scope.record']) {
                      // 未设置录音授权
                      wx.showModal({
                        title: '提示',
                        content: '您未授权录音，功能将无法使用',
                        showCancel: false,
                      });
                    } else {
                      this.data.canRecord = true;
                    }
                  },
                });
              } else {
                this.data.canRecord = false;
              }
            },
          });
        },
      });
    },

    detached() {
      clearInterval(this.data.time);
      innerAudioContext.stop();
      recorderManager.stop();
    },
  },

  methods: {
    recording() {
      this.data.time = setInterval(() => {
        this.setData({
          recordIcon: this.data.recordIcon === 2 ? 0 : this.data.recordIcon + 1,
        });
      }, 400);
    },

    handleLongPress() {
      if (this.data.canRecord) {
        if (!this.data.isRecording && !this.data.filePath) {
          this.setData({
            isRecording: true,
          });
          this.setData(
            {
              show: true,
            },
            () => {
              this.recording();
              // 指定输出音频格式 默认'aac'
              recorderManager.start({ format: 'mp3' });
            },
          );
        }
      } else {
        wx.openSetting({
          success: (res) => {
            if (!res.authSetting['scope.record']) {
              // 未设置录音授权
              wx.showModal({
                title: '提示',
                content: '您未授权录音，功能将无法使用',
                showCancel: false,
              });
            } else {
              this.data.canRecord = true;
            }
          },
        });
      }
    },

    cancelTouch() {
      if (this.data.isRecording && !this.data.filePath) {
        this.setData({
          isRecording: false,
        });
        clearInterval(this.data.time);
        this.data.time = null;
        recorderManager.stop();
        recorderManager.onStop((res) => {
          this.data.filePath = res.tempFilePath;
          innerAudioContext.src = this.data.filePath;
          this.setData({
            filePath: this.data.filePath,
            recordIcon: 0,
          });
          this.triggerEvent('change', { value: this.data.filePath });
        });
      }
    },

    handleRecord() {
      if (this.data.canRecord) {
        if (this.data.filePath) {
          if (this.data.time) {
            innerAudioContext.stop();
            clearInterval(this.data.time);
            this.data.time = null;
            this.setData({
              playIcon: 0,
              isPlaying: false,
            });
          } else {
            innerAudioContext.play();
            innerAudioContext.onEnded(() => {
              clearInterval(this.data.time);
              this.data.time = null;
              this.setData({
                playIcon: 0,
                isPlaying: false,
              });
            });
            this.playVoice();
            this.setData({
              isPlaying: true,
            });
          }
        }
      } else {
        wx.openSetting({
          success: (res) => {
            if (!res.authSetting['scope.record']) {
              // 未设置录音授权
              wx.showModal({
                title: '提示',
                content: '您未授权录音，功能将无法使用',
                showCancel: false,
              });
            } else {
              this.data.canRecord = true;
            }
          },
        });
      }
    },

    playVoice() {
      this.data.time = setInterval(() => {
        this.setData({
          playIcon: this.data.playIcon === 2 ? 0 : this.data.playIcon + 1,
        });
      }, 400);
    },

    handleDelete() {
      innerAudioContext.stop();
      clearInterval(this.data.time);
      this.data.time = null;
      this.setData({ filePath: '', playIcon: 0 });
      this.triggerEvent('change', { value: this.data.filePath });
    },
  },
});
