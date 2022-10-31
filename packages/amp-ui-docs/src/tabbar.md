# Tabbar 底部标签栏

## 概述

自定义底部标签栏组件，基于[微信自定义tabBar](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html) 扩展。

## 用法

## API

### Props

| 参数    | 说明                 | 类型          | 默认值 | 必填 |
| ------- | -------------------- | ------------- | ------ | ---- |
| tabbar | tabbar栏数据             | ITabbar | -     | 是   |

```js
interface ITabbar {
  show: boolean;  // modal组件渲染时隐藏tab栏
  selected: number; // 当前选中下标
  color: string; // 字体颜色
  selectedColor: string; // 选中字体颜色
  backgroundColor: string; // 背景色
  list: Array<ITabbarItem>; // 底部栏数据
  customFn: function; // 自定义点击回调方法, 参数为`ITabbarItem`项
}

interface ITabbarItem {
  pagePath: string; // 页面路径
  text: string; // 文案
  iconPath: string; // 图标路径, 支持本地/网络图片
  selectedIconPath: string; // 选中图标路径, 支持本地/网络图片
  badge?: boolean; // 是否展示角标
  dot?: boolean; // 是否展示红点
  value?: number; // 角标数值大小
  maxValue?: number; // 角标最大数值，超过用`···`展示
  openType?: string; // 参考(小程序button)[https://developers.weixin.qq.com/miniprogram/dev/component/button.html]
}
```

### Events

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| change | 切换标签回调 | e    |

## 常见问题

1. 页面中`getTabBar`获取不到实例？

    页面路径需在`package.json`的`tabBar`中定义。
