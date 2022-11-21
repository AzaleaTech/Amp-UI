Component({
  properties: {
    /**
     * declare Obj {
     *    url: string,   // 视频/图片链接
     *    type: 'image' | 'video', // 类型
     *    size?: number, // 视频/图片大小
     *    poster?: string, // 视频封面图
     *    duration?: number  // 视频时长
     * }
     */
    videos: {
      type: Array,
      value: [],
    },
    width: {
      type: Number,
      value: 150,
    },
    height: {
      type: Number,
      value: 150,
    },
    count: {
      type: Number,
      value: 9,
    },
    sourceType: {
      type: Array,
      value: ['album', 'camera'],
    },
    maxDuration: {
      type: Number,
      value: 60,
    },
    sizeType: {
      type: Array,
      value: ['original', 'compressed'],
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
    handlePreview(e) {
      const { index } = e.currentTarget.dataset;
      wx.previewMedia({
        sources: this.data.videoList,
        current: index,
      });
    },

    removeVideo(e) {
      this.data.videoList.splice(e.currentTarget.dataset.index, 1);
      this.setData({
        videoList: this.data.videoList,
      });
      this.triggerEvent('change', { status: 'success', value: this.data.videoList });
    },

    chooseVideo() {
      const { sizeType, sourceType, count, maxDuration, camera } = this.properties;
      wx.chooseMedia({
        sizeType,
        sourceType,
        count,
        mediaType: ['video'],
        maxDuration,
        camera,
        success: (res) => {
          // 判断上传视频大小
          if (this.properties.size > 0) {
            let overLimit = false;
            res.tempFiles.forEach((item) => {
              if (item.size > this.properties.size * 1024 * 1024) {
                overLimit = true;
              }
              if (overLimit) {
                this.triggerEvent('change', {
                  status: 'error',
                  msg: `上传的视频大小不得超过${this.properties.size}MB`,
                });
                return;
              }
            });
          }
          // 对象映射
          const arr = res.tempFiles.map((item) => {
            return {
              url: item.tempFilePath,
              type: item.fileType,
              size: item.size,
              poster: item.thumbTempFilePath,
              duration: item.duration,
            };
          });
          this.setData({
            videoList: [...this.data.videoList, ...arr],
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
