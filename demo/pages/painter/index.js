Page({
  data: {
    palette1: {
      width: '750rpx',
      height: '600rpx',
      background: '#eee',
      borderRadius: '20rpx',
      views: [
        {
          type: 'rect',
          css: {
            top: '10rpx',
            left: '50rpx',
            width: '650rpx',
            height: '580rpx',
            color: '#fff',
            borderRadius: '10rpx',
          },
        },
        {
          type: 'text',
          text: 'AmpUI组件库',
          css: {
            top: '40rpx',
            left: '100rpx',
            width: '500rpx',
            fontSize: '36rpx',
            textAlign: 'center',
            color: '#3895f7',
          },
        },
        {
          type: 'text',
          text: `1.UI 样式可配置，拓展灵活，轻松适应不同的设计风格 \n2.项目一键移植，提升开发效率，提高工作体验 \n3.代码以及图片压缩， 减少代码体积`,
          css: {
            top: '100rpx',
            left: '100rpx',
            width: '560rpx',
            fontSize: '32rpx',
            lineHeight: '50rpx',
          },
        },
        {
          type: 'text',
          text: `扫一扫 \n 查看示例`,
          css: {
            bottom: '72rpx',
            right: '260rpx',
            lineHeight: '36rpx',
            fontSize: '26rpx',
            textAlign: 'center',
            align: 'right',
            color: '#868686',
          },
        },
        {
          type: 'image',
          url: '/docs/imgs/release.jpg',
          css: {
            bottom: '20rpx',
            right: '80rpx',
            width: '160rpx',
            height: '160rpx',
          },
        },
      ],
    },
    palette2: {
      width: '750rpx',
      height: '400rpx',
      borderRadius: '20rpx',
      views: [
        {
          type: 'rect',
          css: {
            width: '750rpx',
            height: '400rpx',
            color: 'linear-gradient(0, #fff 0%, #009aa5 100%);',
            borderRadius: '20rpx',
          },
        },
        {
          type: 'image',
          url: '/demo/assets/images/logo.png',
          css: {
            top: '80rpx',
            left: '80rpx',
            width: '200rpx',
            height: '200rpx',
          },
        },
        {
          type: 'text',
          text: '岭上科技',
          css: {
            top: '300rpx',
            left: '80rpx',
            width: '200rpx',
            textAlign: 'center',
            fontSize: '28rpx',
          },
        },
        {
          type: 'text',
          text: '扫描二维码进入官网',
          css: {
            top: '120rpx',
            right: '120rpx',
            fontSize: '28rpx',
          },
        },
        {
          type: 'qrcode',
          content: 'https://azalea-tech.com/',
          css: {
            top: '180rpx',
            right: '180rpx',
            width: '120rpx',
            height: '120rpx',
          },
        },
      ],
    },
    imgUrl1: '',
    imgUrl2: '',
  },

  onImgOK(e) {
    const { index } = e.currentTarget.dataset;
    const path = `imgUrl${index}`;
    this.setData({
      [path]: e.detail.path,
    });
  },

  handleSave(e) {
    const { path } = e.currentTarget.dataset;
    wx.showLoading({
      title: '正在保存...',
    });
    wx.saveImageToPhotosAlbum({
      filePath: path,
      success: (res) => {
        wx.hideLoading();
        this.setData({
          toastData: {
            alertTitle: '保存成功',
            duration: 1500,
            type: 'success',
          },
        });
        setTimeout(() => {
          this.setData({
            show: false,
          });
        }, 300);
      },
      fail: (res) => {
        wx.getSetting({
          success: (res) => {
            let authSetting = res.authSetting;
            if (!authSetting['scope.writePhotosAlbum']) {
              wx.showModal({
                title: '提示',
                content: '您未开启保存图片到相册的权限，请点击确定去开启权限！',
                success(res) {
                  if (res.confirm) {
                    wx.openSetting();
                  }
                },
              });
            }
          },
        });
      },
    });
  },
});
