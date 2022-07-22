# Header 顶部栏

## 概述

用于自定义顶部栏。

## 示例

```html
基础用法
<a-header title="{{ title }}"></a-header>

返回上一页
<a-header title="{{ title }}" has-return></a-header>
<a-header title="{{ title }}" has-return navigator="switchTab"></a-header>

返回主页
<a-header title="{{ title }}" has-home></a-header>
```

## API

### Props

| 参数       | 说明                                                                                                                    | 类型    | 默认值         | 可选值                                              | 必填 |
| ---------- | ----------------------------------------------------------------------------------------------------------------------- | ------- | -------------- | --------------------------------------------------- | ---- |
| a-class    | 自定义根节点样式类                                                                                                      | string  | -              | -                                                   | 否   |
| title      | 标题                                                                                                                    | string  | -              | -                                                   | 否   |
| color      | 字体颜色                                                                                                                | string  | #000           | -                                                   | 否   |
| background | 背景颜色                                                                                                                | string  | #fff           | -                                                   | 否   |
| icon-color | 图标颜色                                                                                                                | string  | #000           | -                                                   | 否   |
| has-return | 是否需要返回按钮, 默认返回上一页                                                                                        | boolean | false          | -                                                   | 否   |
| has-home   | 是否有首页按钮                                                                                                          | boolean | false          | -                                                   | 否   |
| navigator  | 返回按钮跳转方式, 参考[微信官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html) | string  | `navigateBack` | `switchTab`, `reLaunch`, `redirectTo`, `navigateTo` | 否   |

### Events

| 事件名   | 说明                                            | 参数 |
| -------- | ----------------------------------------------- | ---- |
| backHome | 首页跳转事件                                    | -    |
| back     | 返回跳转事件（navigator!=="navigateBack"时有效) | -    |

## 常见问题
