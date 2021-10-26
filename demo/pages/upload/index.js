Page({
  data: {
    images: [],
    cropperImages: [],
    videos: [],
    compressVideos: [],
    largeVideos: [],
    // 视频宽高
    minWidth: 140,
    minHeight: 140,
    largeWidth: 400,
    largeHeight: 300,
    // 是否裁剪图片
    isCropped: true,
  },

  handleImageChange(e) {
    console.log('1111', e)
    this.setData({
      images: e.detail.value,
    });
  },

  handleCropperImageChange(e) {
    if (e.detail.status === 'success') {
      this.setData({
        cropperImages: e.detail.value,
      });
    } else {
      this.setData({
        toastData: {
          content: e.detail.msg,
          type: 'error',
        },
      });
    }
  },

  handleChooseVideo(e) {
    this.setData({
      videos: this.data.videos.concat(e.detail.value),
    });
  },

  handleRemoveVideo(e) {
    this.data.videos.splice(e.detail, 1);
    this.setData({ videos: this.data.videos });
  },

  handleChooseCompressVideo(e) {
    this.setData({
      compressVideos: this.data.compressVideos.concat(e.detail.value),
    });
  },

  handleRemoveCompressVideo(e) {
    this.data.compressVideos.splice(e.detail, 1);
    this.setData({ compressVideos: this.data.compressVideos });
  },

  handleChooseLargeVideo(e) {
    this.setData({
      largeVideos: this.data.largeVideos.concat(e.detail.value),
    });
  },

  handleRemoveLargeVideo(e) {
    this.data.largeVideos.splice(e.detail, 1);
    this.setData({ largeVideos: this.data.largeVideos });
  },
});
