Page({
  data: {
    image1: [],
    image2: [],
    videos: [],
    videos1: [],
    videos2: [],
    // 视频宽高
    width1: 140,
    height1: 140,
    width2: 400,
    height2: 300,
    // 是否裁剪图片
    isCropper1: false,
    isCropper2: true,
  },

  handleChange1(e) {
    this.setData({
      image1: e.detail.imgList,
    });
  },

  handleChange2(e) {
    if (e.detail.status === 'success') {
      this.setData({
        image2: e.detail.imgList,
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

  handleChooseVideo1(e) {
    this.setData({
      videos1: this.data.videos1.concat(e.detail.value),
    });
  },

  handleRemoveVideo1(e) {
    this.data.videos1.splice(e.detail, 1);
    this.setData({ videos1: this.data.videos1 });
  },

  handleChooseVideo2(e) {
    this.setData({
      videos2: this.data.videos2.concat(e.detail.value),
    });
  },

  handleRemoveVideo2(e) {
    this.data.videos2.splice(e.detail, 1);
    this.setData({ videos2: this.data.videos2 });
  },
});
