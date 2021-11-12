Page({
  data: {
    imgs: [],
    videos: [],
    // 是否裁剪图片
    isCropped: true,
  },

  handleCropperImageChange(e) {
    if (e.detail.status === 'success') {
      this.setData({
        imgs: e.detail.value,
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
});
