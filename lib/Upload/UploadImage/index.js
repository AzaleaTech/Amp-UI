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
     * 展示的图片宽高， 默认140rpx
     */
    size: {
      type: Number,
      value: 140,
    },
  },

  data: {
    // 用于裁剪图片
    imgUrl: undefined,
  },

  methods: {
    previewImage(e) {
      const { index } = e.currentTarget.dataset;
      const images = this.properties.imgs;
      wx.previewImage({
        current: images[index],
        urls: images,
      });
    },

    removeImage(e) {
      this.triggerEvent('remove', e.currentTarget.dataset.index);
    },

    chooseImage() {
      wx.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: this.properties.sourceType,
        count: this.data.limit,
        success: (res) => {
          if(this.properties.isCropper){
            this.setData({
              imgUrl: res.tempFilePaths[0],
            });
            this.setData({ showCropper: true });
          }
          else {
            this.triggerEvent('choose', { value: res.tempFilePaths });
          }
        },
        fail: (err) =>{
          console.log('chooseImage error', err);
        },
        complete: () =>{}
      });
    },

    handleClick(){
      this.setData({
        isCropper: true,
      })
    },

    handleSave(e) {
      const { item, fileName } = e.detail;
      const length = this.properties.imgs.length;
      this.properties.imgs[length - 1] = item,
      this.setData(
        {
          imgs: this.properties.imgs,
        },
        () => {
          this.triggerEvent('choose', { value: item });
          this.setData({ showCropper: false });
        },
      );
    },
  
    handleCancel() {
      this.triggerEvent('choose', { value: this.data.imgUrl });
      this.setData({ showCropper: false });
    },
  },
});
