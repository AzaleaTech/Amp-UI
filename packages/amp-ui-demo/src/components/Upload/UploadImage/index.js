Component({
  properties: {
    // Array<string>
    imgs: {
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
    sizeType: {
      type: Array,
      value: ['original', 'compressed'],
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
    crop: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    imgList: [],
    // 用于裁剪图片
    imgUrl: undefined,
  },

  lifetimes: {
    attached() {
      this.setData({ imgList: this.properties.imgs });
    },
  },

  methods: {
    previewImage(e) {
      const { index } = e.currentTarget.dataset;
      const images = this.data.imgList;
      wx.previewImage({
        current: images[index],
        urls: images,
      });
    },

    removeImage(e) {
      this.data.imgList.splice(e.currentTarget.dataset.index, 1);
      this.setData({
        imgList: this.data.imgList,
      });
      this.triggerEvent('change', { status: 'success', value: this.data.imgList });
    },

    chooseImage() {
      const { sizeType, sourceType, count, camera } = this.properties;
      wx.chooseMedia({
        sizeType,
        sourceType,
        count,
        mediaType: ['image'],
        camera,
        success: (res) => {
          // 判断上传图片大小
          if (this.properties.size > 0) {
            let overLimit = false;
            res.tempFiles.forEach((item) => {
              if (item.size > this.properties.size * 1024 * 1024) {
                overLimit = true;
              }
              if (overLimit) {
                this.triggerEvent('change', {
                  status: 'error',
                  msg: `上传的图片大小不得超过${this.properties.size}MB`,
                });
                return;
              }
            });
          }
          // 判断是否需要裁剪
          if (this.properties.crop) {
            this.setData({
              imgUrl: res.tempFiles[0].tempFilePath,
            });
            this.setData({ showCropper: true });
          } else {
            const urls = res.tempFiles.map((item) => item.tempFilePath);
            this.data.imgList = this.data.imgList.concat(urls);
            this.setData({
              imgList: this.data.imgList,
            });
            this.triggerEvent('change', { status: 'success', value: this.data.imgList });
          }
        },
        fail: (err) => {
          console.warn('ChooseVideo error', err);
        },
      });
    },

    handleSave(e) {
      const { value } = e.detail;
      this.data.imgList.push(value);
      this.setData({
        imgList: this.data.imgList,
        showCropper: false,
      });
      this.triggerEvent('change', { status: 'success', value: this.data.imgList });
    },

    handleCancel() {
      this.data.imgList.push(this.data.imgUrl);
      this.setData({
        imgList: this.data.imgList,
        showCropper: false,
      });
      this.triggerEvent('change', { status: 'success', value: this.data.imgList });
    },
  },
});
