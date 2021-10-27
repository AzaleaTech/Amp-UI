# Rate 评分

## 概述

用于对事物进行评级操作, 包含评分展示(可包含小数)。

> 默认两图标间距为图标宽度的一半。

## 示例

```html
<!-- 基础用法 -->
<a-rate bind:change="handleChange"></a-rate>

<!-- 不同大小 -->
<a-rate size="30"></a-rate>
<a-rate size="40"></a-rate>

<!-- 只读 -->
<a-rate value="{{ 2.88 }}" disabled></a-rate>
<a-rate value="{{ 5 }}" disabled></a-rate>
```

## API

### Props

| 参数     | 说明                   | 类型    | 默认值 | 必填 |
| -------- | ---------------------- | ------- | ------ | ---- |
| a-class  | 自定义 class 类名      | string  | -      | 否   |
| count    | star 总数              | number  | 5      | 否   |
| value    | 当前 star 数           | number  | 0      | 否   |
| size     | 图标大小，单位[`rpx`]  | string  | 40     | 否   |
| disabled | 是否只读，无法进行交互 | boolean | false  | 否   |

### Events

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| change | 点击评分时触发 | e    |

## 常见问题
