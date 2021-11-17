const previewUrl = 'https://s3.bmp.ovh/imgs/2021/11/f28c260582b9944d.png';

Page({
  data: {
    webviewPath: '/demo/pages/webview/index',
    node1: `<p><img src="https://wpw-qt.oss-cn-hangzhou.aliyuncs.com/article/1628208832066472069.png"/></p><p style="text-align: justify; text-indent: 2em;">1978年8月5日、6日，邓小平在同阿拉伯利比亚代表团会谈时指出：双方对某些问题看法不一致没有关系。有些问题是要由实践来证明的，双方可以保留各自的观点，允许我们继续考虑，继续观察。即使是最亲密的国家之间，也不可能对问题的看法完全一致。我们同各国朋友打交道，总是采取这样一个原则，求同存异。找出共同点，这当然很好，即使有不同点，双方仍可保留自己的观点。个人之间也是这样，朋友再好，也有吵架的时候。我们希望有二十年的和平时期，好好搞建设。我们希望安定二十年，有一个安定的国际环境，来发展我们的经济，增加人民的收入。</p>`,
    node2: `<p><a href="https://azalea-tech.com/">岭上官网</a>`,
  },

  handleClick() {
    wx.previewImage({
      current: previewUrl,
      urls: [previewUrl],
    });
  },
});
