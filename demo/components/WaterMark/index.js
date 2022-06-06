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
    ratio: 1,
    canvasWidth: '',
    canvasHeight: '',
    imgUrl: '',
  },

  attached() {
    this.getRatio();
    let canvasId = 'wm-canvas';
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
      ctx.translate((((width + gapX) / 2) * ratio) / 2, ((height + gapY) / 2) * ratio);
      ctx.drawImage(image, 0, 0, ((width + gapX) / 2) * ratio, ((height + gapY) / 2) * ratio);
    } else {
      ctx.translate(((width + gapX) / 2) * ratio - fontWidth, ((height + gapY) / 2) * ratio);
      ctx.setFontSize(fontSize * ratio); //注意：设置文字大小必须放在填充文字之前，否则不生效
      ctx.setFillStyle(fontColor);
      ctx.fillText(content, 0, 0);
    }
    ctx.draw(false, () => {
      wx.canvasToTempFilePath(
        {
          canvasId,
          success: (res) => {
            let imgUrl =
              'data:image/png;base64,' +
              wx.getFileSystemManager().readFileSync(res.tempFilePath, 'base64');
            this.setData({ imgUrl });
          },
          fail: (err) => {
            console.log('WaterMark CanvasToTempFilePath Error:', err);
          },
        },
        this,
      );
    });
  },

  methods: {
    getRatio() {
      wx.getSystemInfo({
        success: (res) => {
          this.data.ratio = res.windowWidth / 750;
        },
      });
    },
  },
});
