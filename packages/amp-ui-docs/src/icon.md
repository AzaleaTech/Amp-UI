# Icon 图标

## 概述

自定义图标库, 基于[Iconfont 图标库](https://www.iconfont.cn/), [mini-program-iconfont-cli 插件](https://www.npmjs.com/package/mini-program-iconfont-cli) 生成

> 需联系管理员加入对应的 iconfont 项目组

![symbol](https://raw.githubusercontent.com/iconfont-cli/mini-program-iconfont-cli/master/images/symbol-url.png)

1. 替换`iconfont.json`文件中`symbol_url`字段为上图中链接
2. run `yarn icon` 生成 Icon 文件夹

## 示例

在.json 中引入组件

```html
基础用法
<a-icon name="satisfied_fill"></a-icon>
<a-icon name="satisfied_fill" size="{{ 80 }}"></a-icon>
```

## API

### Props

| 参数  | 说明                        | 类型   | 默认值   | 必填 |
| ----- | --------------------------- | ------ | -------- | ---- |
| name  | 图标名称                    | string | -        | 是   |
| color | 图标颜色                    | string | string[] | -    | 否  |
| size  | 图标大小, 默认单位为[`rpx`] | number | 60       | 否   |

### Events

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| 暂无   | -    | -    |

## 常见问题

1. rpx适配误差问题, 导致图标错位等？

    A：小程序在rpx和px转换的时候，只保留整数。
