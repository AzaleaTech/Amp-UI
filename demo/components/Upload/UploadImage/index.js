Component({
  properties: {
    imgs: {
      type: Array,
      value: [],
    },
    width: {
      type: Number,
      value: 140,
    },
    height: {
      type: Number,
      value: 140,
    },
    sourceType: {
      type: Array,
      value: ['album', 'camera'],
    },
    count: {
      type: Number,
      value: 9,
    },
    sizeType: {
      type: Array,
      value: ['original', 'compressed'],
    },
    limit: {
      type: Number,
      value: 0,
    },
    size: {
      type: Number,
      value: -1,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    isCropped: {
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
      wx.chooseImage({
        sizeType: this.properties.sizeType,
        sourceType: this.properties.sourceType,
        count: this.properties.isCropped ? 1 : this.properties.count,
        success: (res) => {
          // 判断上传图片大小
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
                msg: `上传的图片大小不得超过${this.properties.size}MB`,
              });
              return;
            }
          }
          // 判断是否需要裁剪
          if (this.properties.isCropped) {
            this.setData({
              imgUrl: res.tempFilePaths[0],
            });
            this.setData({ showCropper: true });
          } else {
            this.data.imgList = this.data.imgList.concat(res.tempFilePaths);
            this.setData({
              imgList: this.data.imgList,
            });
            this.triggerEvent('change', { status: 'success', value: this.data.imgList });
          }
        },
        fail: (err) => {
          console.warn('ChooseImage error', err);
          this.triggerEvent('change', { status: 'error', msg: err });
        },
      });
    },

    handleSave(e) {
      const { item, fileName } = e.detail;
      this.data.imgList.push(item);
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
