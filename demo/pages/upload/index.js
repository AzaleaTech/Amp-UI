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

  handleChooseImage1(e){
    if(this.data.isCropper1){
      this.data.image1.push(e.detail.value);
    }
    else {
      this.data.image1.push(...e.detail.value);
    }
    this.setData({
      image1: this.data.image1,
    });
  },

  handleRemoveImage1(e){
    this.data.image1.splice(e.detail, 1);
    this.setData({ image1: this.data.image1 });
  },

  handleChooseImage2(e){
    // 注意，若定义了isCropper2字段，则必须有下面的if判断
    if(this.data.isCropper2){
      this.data.image2.push(e.detail.value);
    }
    else {
      this.data.image2.push(...e.detail.value);
    }
    this.setData({
      image2: this.data.image2,
    });
  },

  handleRemoveImage2(e){
    this.data.image2.splice(e.detail, 1);
    this.setData({ image2: this.data.image2 });
  },

  handleChooseVideo(e){
    this.setData({
      videos: this.data.videos.concat(e.detail.value),
    })
  },

  handleRemoveVideo(e){
    this.data.videos.splice(e.detail, 1);
    this.setData({ videos: this.data.videos });
  },

  handleChooseVideo1(e){
    this.setData({
      videos1: this.data.videos1.concat(e.detail.value),
    })
  },

  handleRemoveVideo1(e){
    this.data.videos1.splice(e.detail, 1);
    this.setData({ videos1: this.data.videos1 });
  },

  handleChooseVideo2(e){
    this.setData({
      videos2: this.data.videos2.concat(e.detail.value),
    })
  },

  handleRemoveVideo2(e){
    this.data.videos2.splice(e.detail, 1);
    this.setData({ videos2: this.data.videos2 });
  }
})