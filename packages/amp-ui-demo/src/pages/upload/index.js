Page({
  data: {
    imgs: [],
    cropImgs: [],
    videos: [],
  },

  handleChooseImg(e) {
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

  handleCropImg(e) {
    if (e.detail.status === 'success') {
      this.setData({
        cropImgs: e.detail.value,
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
