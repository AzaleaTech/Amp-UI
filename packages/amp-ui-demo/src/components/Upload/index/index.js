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
    value: {
      type: Array,
      value: [],
    },
    width: {
      type: Number,
      value: 180,
    },
    height: {
      type: Number,
      value: 180,
    },
    count: {
      type: Number,
      value: 9,
    },
    sourceType: {
      type: Array,
      value: ['album', 'camera'],
    },
    mediaType: {
      type: Array,
      value: ['image', 'video'],
    },
    maxDuration: {
      type: Number,
      value: 10,
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
    imgSize: {
      type: Number,
      value: -1,
    },
    videoSize: {
      type: Number,
      value: -1,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    mediaList: [],
  },

  lifetimes: {
    attached() {
      this.setData({ mediaList: this.properties.value });
    },
  },

  methods: {
    handlePreview(e) {
      const { index } = e.currentTarget.dataset;
      wx.previewMedia({
        sources: this.data.mediaList,
        current: index,
      });
    },

    removeMedia(e) {
      this.data.mediaList.splice(e.currentTarget.dataset.index, 1);
      this.setData({
        mediaList: this.data.mediaList,
      });
      this.triggerEvent('change', { status: 'success', value: this.data.mediaList });
    },

    chooseMedia() {
      const { sizeType, sourceType, count, mediaType, maxDuration, camera } = this.properties;
      wx.chooseMedia({
        sizeType,
        sourceType,
        count,
        mediaType,
        maxDuration,
        camera,
        success: (res) => {
          // 判断上传图片/视频大小
          if (this.properties.size > 0) {
            let overLimit = false;
            res.tempFiles.forEach((item) => {
              if (item.fileType === 'image' && item.size > this.properties.imgSize * 1024 * 1024) {
                overLimit = true;
              } else if (
                item.fileType === 'video' &&
                item.size > this.properties.videoSize * 1024 * 1024
              ) {
                overLimit = true;
              }
            });
            if (overLimit) {
              this.triggerEvent('change', {
                status: 'error',
                msg: `上传的图片/视频大小不得超过${this.properties.size}MB`,
              });
              return;
            }
          }
          // 对象映射
          const arr = res.tempFiles.map((item) => {
            return {
              url: item.tempFilePath,
              type: item.fileType,
              size: item.size,
              poster: item.thumbTempFilePath || '',
              duration: item.duration || '',
            };
          });
          this.setData({
            mediaList: [...this.data.mediaList, ...arr],
          });
          this.triggerEvent('change', { status: 'success', value: this.data.mediaList });
        },
        fail: (err) => {
          console.warn('chooseMedia error', err);
        },
      });
    },
  },
});
