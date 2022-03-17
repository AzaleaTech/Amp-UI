Page({
  data: {
    imgs: [],
    videos: [],
    // 是否裁剪图片
    crop: true,
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
    if (e.detail.status === 'success') {
      this.setData({
        videos: this.data.videos.concat(e.detail.value),
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
});
