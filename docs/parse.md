# Parse 富文本解析

## 概述

用于小程序富文本内容解析(图片、视频、链接), 参考 [github](https://github.com/csonchen/wxParse)。

> tip: 后台富文本暂不支持语音和代码高亮, 故移除 _wxAudio_ 和 _highLight_ 组件。

## 示例

```html
基本使用
<a-parse nodes="{{ node1 }}"></a-parse>

外部链接跳转
<a-parse nodes="{{ node2 }}" webview-path="{{ webviewPath }}"></a-parse>
```

```js
Page({
  data: {
    webviewPath: '/demo/pages/webview/index',
    node1: `<p><img src="https://wpw-qt.oss-cn-hangzhou.aliyuncs.com/article/1628208832066472069.png"/></p><p style="text-align: justify; text-indent: 2em;">1978年8月5日、6日，邓小平在同阿拉伯利比亚代表团会谈时指出：双方对某些问题看法不一致没有关系。有些问题是要由实践来证明的，双方可以保留各自的观点，允许我们继续考虑，继续观察。即使是最亲密的国家之间，也不可能对问题的看法完全一致。我们同各国朋友打交道，总是采取这样一个原则，求同存异。找出共同点，这当然很好，即使有不同点，双方仍可保留自己的观点。个人之间也是这样，朋友再好，也有吵架的时候。我们希望有二十年的和平时期，好好搞建设。我们希望安定二十年，有一个安定的国际环境，来发展我们的经济，增加人民的收入。</p><p><br/></p>`,
    node2: `<p><a href="https://azalea-tech.com/">岭上官网</a>`,
  },
});
```

## API

### Props

| 参数        | 说明                                     | 类型   | 默认值 | 可选值              | 必填 |
| ----------- | ---------------------------------------- | ------ | ------ | ------------------- | ---- |
| nodes       | 富文本内容                               | string | -      | -                   | 是   |
| language    | 语言                                     | string | html   | html, markdown (md) | 否   |
| webviewPath | 外部跳转页面路径, 可以在组件内部统一指定 | string | -      | -                   | 否   |

## 常见问题

Q: 富文本链接打不开？

A: 检查 webview 路径, 以及检查是否带了 src 参数
