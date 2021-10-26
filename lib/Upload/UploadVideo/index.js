Component({
  properties: {
    videos: {
      type: Array,
      value: [],
    },
    width: {
      type: Number,
      value: 200,
    },
    height: {
      type: Number,
      value: 150,
    },
    sourceType: {
      type: Array,
      value: ['album', 'camera'],
    },
    maxDuration: {
      type: Number,
      value: 60,
    },
    compressed: {
      type: Boolean,
      value: false,
    },
    camera: {
      type: String,
      value: 'back',
    },
    limit: {
      type: Number,
      value: -1,
    },
    size: {
      type: Number,
      value: -1,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    videoList: [],
  },

  lifetimes: {
    attached() {
      this.setData({ videoList: this.properties.videos });
    },
  },

  methods: {
    removeVideo(e) {
      this.data.videoList.splice(e.currentTarget.dataset.index, 1);
      this.setData({
        videoList: this.data.videoList,
      });
      this.triggerEvent('change', { status: 'success', value: this.data.videoList });
    },

    chooseVideo() {
      wx.chooseVideo({
        sourceType: this.properties.sourceType,
        compressed: this.properties.compressed,
        maxDuration: this.properties.maxDuration,
        camera: this.properties.camera,
        success: (res) => {
          // 判断上传视频大小
          if (this.properties.size > 0) {
            let overLimit = false;
            res.tempFiles.forEach((item) => {
              if (item.size > this.properties.size * 1024 * 1024) {
                overLimit = true;
              }
            });
            if (overLimit) {
              this.triggerEvent('change', {
                status: 'error',
                msg: `上传的视频大小不得超过${this.properties.size}MB`,
              });
              return;
            }
          }
          this.data.videoList = this.data.videoList.concat(res.tempFilePaths);
          this.setData({
            videoList: this.data.videoList,
          });
          this.triggerEvent('change', { status: 'success', value: this.data.videoList });
        },
        fail: (err) => {
          console.warn('ChooseVideo error', err);
        },
      });
    },
  },
});
