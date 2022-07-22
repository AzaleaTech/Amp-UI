# Swiper 轮播图

## 概述

常用于一组图片轮播（基于微信自带[`swiper`](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)组件）。

## 示例

```html
基础用法
<a-swiper img-urls="{{ imgUrls }}" />

组合用法
<a-swiper
  a-class="a-swiper-class"
  img-urls="{{ imgUrls }}"
  current="{{ current }}"
  autoplay="{{ autoplay }}"
  circular="{{ circular }}"
  duration="{{ duration }}"
  dots="{{ dots }}"
  dot-color="{{ dotColor }}"
  dot-active-color="{{ dotActiveColor }}"
  easing-function="{{ easingFunction }}"
  interval="{{ interval }}"
  next-margin="{{ nextMargin }}"
  previous-margin="{{ previousMargin }}"
  vertical="{{ vertical }}"
/>
```

```js
Page({
  data: {
    imgUrls: [
      'https://scpic.chinaz.net/files/pic/pic9/202111/bpic24797.jpg',
      'https://scpic.chinaz.net/files/pic/pic9/202111/bpic24796.jpg',
      'https://scpic.chinaz.net/files/pic/pic9/202111/bpic24800.jpg',
    ],
    dots: true,
    autoplay: false,
    current: 0,
    interval: 5000,
    duration: 500,
    dotColor: '#fff',
    dotActiveColor: '#f80',
    easingFunction: 'default',
    circular: true,
    previousMargin: 10,
    nextMargin: 10,
    vertical: false,
  },
});
```

## API

### Props

| 参数             | 说明                                        | 类型          | 默认值  | 可选值 | 必填 |
| ---------------- | ------------------------------------------- | ------------- | ------- | ------ | ---- |
| a-class          | 自定义根节点样式类                          | string        | -       | -      | 否   |
| img-urls         | 轮播图数据列表, 传 url 地址                 | Array[string] | -       | -      | 是   |
| dots             | 是否显示面板指示点                          | boolean       | false   | -      | 否   |
| dot-color        | 指示点颜色                                  | string        | #D8D8D8 | -      | 否   |
| dot-active-color | 当前选中的指示点颜色                        | string        | #FFFFFF | -      | 否   |
| current          | 当前步骤索引值                              | number        | 0       | -      | 否   |
| vertical         | 滑动方向是否为纵向                          | boolean       | false   | -      | 否   |
| circular         | 是否采用衔接滑动                            | boolean       | false   | -      | 否   |
| autoplay         | 是否自动切换                                | boolean       | false   | -      | 否   |
| interval         | 自动切换时间间隔                            | number        | 5000    | -      | 否   |
| duration         | 滑动动画时长                            | number        | 500     | -      | 否   |
| previous-margin  | 前边距，可用于露出前一项的一小部分，单位 px | number        | 0       | -      | 否   |
| next-margin      | 后边距，可用于露出后一项的一小部分，单位 px | number        | 0       | -      | 否   |
| easing-function  | 指定 swiper 切换缓动动画类型                | string        | default | -      | 否   |

`easing-function 合法值`
| 参数 | 说明 |
| -- | -- |
| default | 默认缓动函数 |
| linear | 线性动画 |
| easeInCubic | 缓入动画 |
| easeOutCubic | 缓出动画 |
| easeInOutCubic | 缓入缓出动画 |

### Events

| 事件名 | 说明                                                           | 参数 |
| ------ | -------------------------------------------------------------- | ---- |
| change | current 改变时会触发 change 事件，e.detail.value = {current, source} | e    |

## 常见问题
