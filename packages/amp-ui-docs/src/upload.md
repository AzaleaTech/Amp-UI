# Upload 上传

## 概述

从本地相册选择图片(视频)或使用相机拍照(拍摄视频)

## 示例

基础用法

```html
上传图片(单次最多上传3张，每张最大限制为0.5MB)
<a-upload-image imgs="{{ imgs }}" limit="{{ 3 }}" size="{{ 0.5 }}"></a-upload-image>

上传图片(可裁剪，默认单次只能上传一张)
<a-upload-image crop imgs="{{ cropImgs }}"></a-upload-image>

上传视频(单次只能上传一个，限制大小为30MB)
<a-upload-video videos="{{ videos }}" size="{{ 30 }}"></a-upload-video>
```

## API

### Props

#### 图片

参考[`wx.chooseImage`](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.chooseImage.html)微信文档

| 参数        | 说明                                            | 类型          | 默认值                     | 必填 |
| ----------- | ----------------------------------------------- | ------------- | -------------------------- | ---- |
| imgs        | 图片列表                                        | Array[string] | []                         | 是   |
| width       | 每张图片宽度, 单位[`rpx`]                       | number        | 140                        | 否   |
| height      | 每张图片高度, 单位[`rpx`]                       | number        | 140                        | 否   |
| source-type | 图片来源                                        | Array[string] | ['album', 'camera']        | 否   |
| count       | 最多可以选择的图片张数, 开启裁剪则固定`count`为 1 | number        | 9                          | 否   |
| size-type   | 所选的图片的尺寸                                | Array[string] | ['original', 'compressed'] | 否   |
| limit       | 限制图片上传数量, 默认无限制                    | number        | -1                         | 否   |
| size        | 上传图片的最大大小, 默认无限制, 单位[`MB`]      | number        | -1                         | 否   |
| disabled    | 是否禁用                                        | boolean       | false                      | 否   |
| crop  | 是否需要裁剪图片                                | boolean       | false                      | 否   |

#### 视频

参考[`wx.chooseVideo`](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.chooseVideo.html)微信文档

| 参数         | 说明                                       | 类型          | 默认值              | 必填 |
| ------------ | ------------------------------------------ | ------------- | ------------------- | ---- |
| videos       | 视频列表                                   | Array[string] | []                  | 是   |
| width        | 视频宽度, 单位[`rpx`]                      | number        | 200                 | 否   |
| height       | 视频高度, 单位[`rpx`]                      | number        | 180                 | 否   |
| source-type  | 视频来源                                   | Array[string] | ['album', 'camera'] | 否   |
| max-duration | 拍摄视频最长拍摄时间，单位[`s`]            | number        | 60                  | 否   |
| compressed   | 是否压缩所选择的视频文件                   | boolean       | false               | 否   |
| camera       | 默认拉起的是前置或者后置摄像头             | string        | 'back'              | 否   |
| limit        | 限制视频上传数量, 默认无限制               | number        | -1                  | 否   |
| size         | 上传视频的最大大小, 默认无限制, 单位[`MB`] | number        | -1                  | 否   |
| disabled     | 是否禁用                                   | boolean       | false               | 否   |

### Events

#### 图片

| 事件名 | 说明                     | 参数 |
| ------ | ------------------------ | ---- |
| change | 图片上传或移除对应的回调 | e    |

#### 视频

| 事件名 | 说明                     | 参数 |
| ------ | ------------------------ | ---- |
| change | 视频上传或移除对应的回调 | e    |

## 常见问题