Component({
  properties: {
    /**
     * 展示的图片列表
     */
    imgs: {
      type: Array,
      value: [],
    },
    /**
     * 是否需要裁剪图片，默认为false
     */
    isCropper: {
      type: Boolean,
      value: false,
    },
    /**
     * 限制图片上传数量
     * 默认无限制
     */
    limit: {
      type: Number,
      value: 0,
    },
    /**
     * 图片的来源 ['album', 'camera']
     * 默认两者均可
     * ['album']: ['album']
     * ['camera']: ['camera']
     */
    sourceType: {
      type: Array,
      value: ['album', 'camera'],
    },
    /**
     * upload禁用, read-only
     */
    disabled: {
      type: Boolean,
      value: false,
    },
    /**
     * 展示图片的宽度， 默认140rpx
     */
    width: {
      type: Number,
      value: 140,
    },
    /**
     * 展示图片的高度， 默认140rpx
     */
    height: {
      type: Number,
      value: 140,
    },
    /**
     * 上传图片的最大大小, 默认为-1，不限制大小，单位为kb
     */
    size: {
      type: Number,
      value: -1,
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
      this.triggerEvent('change', { status: 'success', imgList: this.data.imgList });
    },

    chooseImage() {
      wx.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: this.properties.sourceType,
        count: this.data.limit,
        success: (res) => {
          // 判断上传图片大小
          if (this.properties.size > 0 && this.properties.size * 1024 < res.tempFiles[0].size) {
            this.triggerEvent('change', {
              status: 'error',
              msg: `上传的图片大小不得超过${this.properties.size}kb`,
            });
            return;
          }
          // 判断是否需要裁剪
          if (this.properties.isCropper) {
            this.setData({
              imgUrl: res.tempFilePaths[0],
            });
            this.setData({ showCropper: true });
          } else {
            this.data.imgList = this.data.imgList.concat(res.tempFilePaths);
            this.setData({
              imgList: this.data.imgList,
            });
            this.triggerEvent('change', { status: 'success', imgList: this.data.imgList });
          }
        },
        fail: (err) => {
          console.log('chooseImage error', err);
          this.triggerEvent('change', { status: 'error', msg: err });
        },
        complete: () => {},
      });
    },

    handleSave(e) {
      const { item, fileName } = e.detail;
      this.data.imgList.push(item);
      this.setData({
        imgList: this.data.imgList,
        showCropper: false,
      });
      this.triggerEvent('change', { status: 'success', imgList: this.data.imgList });
    },

    handleCancel() {
      this.data.imgList.push(this.data.imgUrl);
      this.setData({
        imgList: this.data.imgList,
        showCropper: false,
      });
      this.triggerEvent('change', { status: 'success', imgList: this.data.imgList });
    },
  },
});
