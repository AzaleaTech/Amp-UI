Component({
  externalClasses: ['a-class'],
  properties: {
    content: {
      type: String,
      value: '',
    },
    width: {
      type: Number,
      value: 120,
    },
    height: {
      type: Number,
      value: 120,
    },
    gapX: {
      type: Number,
      value: 100,
    },
    gapY: {
      type: Number,
      value: 60,
    },
    fontColor: {
      type: String,
      value: 'rgba(0, 0, 0, .15)',
    },
    fontSize: {
      type: String | Number,
      value: 32,
    },
    rotate: {
      type: Number,
      value: -20,
    },
    image: {
      type: String,
      value: '',
    },
  },

  data: {
    canvasId: 'wm-canvas',
    ratio: 1,
    canvasWidth: '',
    canvasHeight: '',
    imgUrl: '',
  },

  attached() {
    this.getRatio();
    const { canvasId } = this.data;
    const ctx = wx.createCanvasContext(canvasId, this);
    const { width, height, gapX, gapY, fontSize, fontColor, rotate, content, image, ratio } =
      this.data;
    const canvasWidth = `${(gapX + width) * ratio}px`;
    const canvasHeight = `${(gapY + height) * ratio}px`;
    this.setData({
      canvasWidth,
      canvasHeight,
    });
    let fontWidth = ctx.measureText(content).width; // 获取字符宽度
    ctx.rotate((Math.PI / 180) * Number(rotate));
    if (image) {
      ctx.translate(0, ((height + gapY) / 2) * ratio);
      wx.getImageInfo({
        src: image,
        success: (imgInfo) => {
          ctx.drawImage(
            imgInfo.path,
            0,
            0,
            ((width + gapX) / 2) * ratio,
            ((height + gapY) / 2) * ratio,
          );
          ctx.draw(false, () => {
            this.canvasToFilePath();
          });
        },
      });
    } else {
      ctx.translate(((width + gapX) / 2) * ratio - fontWidth, ((height + gapY) / 2) * ratio);
      ctx.setFontSize(fontSize * ratio); //注意：设置文字大小必须放在填充文字之前，否则不生效
      ctx.setFillStyle(fontColor);
      ctx.fillText(content, 0, 0);
      ctx.draw(false, () => {
        this.canvasToFilePath();
      });
    }
  },

  methods: {
    getRatio() {
      wx.getSystemInfo({
        success: (res) => {
          this.data.ratio = res.windowWidth / 750;
        },
      });
    },

    canvasToFilePath() {
      const { canvasId } = this.data;
      wx.canvasToTempFilePath(
        {
          canvasId,
          success: (res) => {
            const url = wx.getFileSystemManager().readFileSync(res.tempFilePath, 'base64');
            let imgUrl = 'data:image/png;base64,' + url;
            this.setData({ imgUrl });
          },
          fail: (err) => {
            console.log('WaterMark CanvasToTempFilePath Error:', err);
          },
        },
        this,
      );
    },
  },
});
