Component({
  properties: {
    /**
     * 展示的视频列表
     */
    videos: {
      type: Array,
      value: [],
    },
    /**
     * 拍摄视频最长拍摄时间，单位秒
     * 默认60s
     */
    maxDuration: {
      type: Number,
      value: 60,
    },
    /**
     * 是否压缩所选择的视频文件
     * 默认为true，压缩
     */
    compressed: {
      type: Boolean,
      value: false,
    },
    /**
     * 默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效
     * 默认为'back'，后置摄像头
     */
    camera: {
      type: String,
      value: 'back',
    },
    /**
     * 视频的来源 ['album', 'camera']
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
     * 展示的视频宽度， 默认宽度为200rpx，注意建议最小宽度为200rpx，不然可能无法正常显示全屏按钮
     */
    width: {
      type: Number,
      value: 200,
    },
     /**
     * 展示的视频高度， 默认高度为150rpx，注意建议最小高度为150rpx，不然可能无法正常显示全屏按钮
     */
    height: {
      type: Number,
      value: 150,
    },
  },

  methods: {
    removeVideo(e) {
      this.triggerEvent('remove', e.currentTarget.dataset.index);
    },

    chooseVideo() {
      wx.chooseVideo({
        sourceType: this.properties.sourceType,
        compressed: this.properties.compressed,
        maxDuration: this.properties.maxDuration,
        camera: this.properties.camera,
        success: (res) => {
          this.triggerEvent('choose', { value: res.tempFilePath });
        },
        fail: (err) =>{
          console.log('chooseVideo error', err);
        },
        complete: () =>{}
      });
    },
  },
});
