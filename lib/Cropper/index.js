Component({
  properties: {
    /**
     * 所选图片url
     */
    imgUrl: {
      type: String,
      value: '',
    },
    /**
     * 保存路径类型
     */
    type: {
      type: String,
      value: 'extra',
    },
    /**
     * 裁剪宽高比例
     */
    cutScale: {
      type: Number,
      value: 1,
    },
  },

  data: {
    screenWidth: '',
    width: '',
    height: '',
    distance: '',
    oldWidth: '',
    oldHeight: '',
    cutWidth: '',
    x: 0,
    y: 0,
    croppedPic: '',
    oldImagePath: '',
  },

  lifetimes: {
    attached() {
      //判断图片的宽高，短的那边变成固定，长的自适应。
      wx.getSystemInfo({
        success: (e) => {
          const screenWidth = e.screenWidth - (e.screenWidth * 60) / 750;
          const cutWidth = screenWidth;
          this.setData({ screenWidth, cutWidth });
        },
      });
    },
  },

  observers: {
    imgUrl() {
      this.data.oldImagePath = this.properties.imgUrl;
      this.setImage();
    },
  },

  methods: {
    setImage() {
      const width = this.data.screenWidth;
      const height = this.data.screenWidth / this.properties.cutScale;
      const tempFilePaths = this.data.oldImagePath;

      wx.getImageInfo({
        src: tempFilePaths,
        success: (msg) => {
          const imageWidth = msg.width;
          const imageHeight = msg.height;
          const scale = imageWidth / imageHeight;

          //横向图片,高变成固定,宽度自适应
          if (scale > this.properties.cutScale) {
            this.setData({
              width: height * scale,
              height: height,
              oldWidth: height * scale,
              oldHeight: height,
              img: tempFilePaths,
            });
          } else {
            //纵向图片，短边是宽，宽变成系统固定，高自适应
            this.setData({
              width,
              height: width / scale,
              oldWidth: width,
              oldHeight: width / scale,
              img: tempFilePaths,
            });
          }
        },
      });
    },

    handleResetImage() {
      this.setData({ croppedPic: '' });
      this.setImage();
    },

    handleStart(e) {
      if (e.touches.length === 2) {
        const newX = e.touches[1].pageX - e.touches[0].pageX,
          newY = e.touches[1].pageY - e.touches[0].pageY,
          distance = Math.sqrt(Math.pow(newX, 2) + Math.pow(newY, 2));
        this.setData({ distance });
      }
    },

    handleMove(e) {
      if (e.touches.length === 2) {
        const newX = e.touches[1].pageX - e.touches[0].pageX,
          newY = e.touches[1].pageY - e.touches[0].pageY,
          oldWidth = this.data.oldWidth,
          oldHeight = this.data.oldHeight,
          newDistance = Math.sqrt(Math.pow(newX, 2) + Math.pow(newY, 2)),
          width = this.data.width,
          height = this.data.height,
          distance = this.data.distance,
          endDistance = newDistance - distance,
          picScale = 1 + endDistance * 0.002;

        // 设定缩小最小比例
        const max = (width * picScale) / oldWidth;

        if (max < 1) {
          this.setData({
            width: oldWidth,
            height: oldHeight,
          });
        } else {
          this.setData({
            width: width * picScale,
            height: height * picScale,
            distance: newDistance,
          });
        }
      }
    },

    handleScroll(e) {
      const x = e.detail.scrollLeft;
      const y = e.detail.scrollTop;
      this.setData({ x, y });
    },

    handleCrop() {
      let img = this.properties.imgUrl,
        width = this.data.width,
        height = this.data.height,
        crop = this.data.screenWidth,
        x = this.data.x,
        y = this.data.y;
      wx.showLoading({ title: '裁剪中' });
      const canvas = wx.createCanvasContext('canvas', this);

      canvas.drawImage(img, 0, 0, width, height);
      canvas.draw(
        setTimeout(() => {
          wx.hideLoading();
          wx.canvasToTempFilePath(
            {
              x,
              y,
              width: crop,
              height: crop / this.properties.cutScale,
              canvasId: 'canvas',
              success: (res) => {
                this.setData({ croppedPic: res.tempFilePath });
              },
            },
            this,
          );
        }, 1000),
      );
    },

    handleSave() {
      [this.data.croppedPic].forEach((item) => {
       const suffix = item.substr(item.lastIndexOf('.') + 1);
        const fileName = `${this.properties.type}/${new Date().valueOf()}${Math.random()
          .toString(36)
          .slice(-6)}.${suffix}`;
        this.triggerEvent('save', { item, fileName });
      });
    },

    handleCancel() {
      this.triggerEvent('cancel');
    },
  },
});
