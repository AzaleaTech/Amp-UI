# Rate 评分

## 概述

用于对事物进行评级操作, 包含评分展示(可包含小数)。

> 默认两图标间距为图标宽度的一半。

## 示例

```html
基础用法
<a-rate bind:change="handleChange"></a-rate>

不同大小
<a-rate size="{{ 60 }}"></a-rate>
<a-rate size="{{ 80 }}"></a-rate>

不同数量
<a-rate count="{{ 3 }}"></a-rate>
<a-rate count="{{ 7 }}"></a-rate>

不同图标
<a-rate value="{{ 3 }}" icon-name="praise_fill" active-color="#3895f7"></a-rate>
<a-rate value="{{ 5 }}" icon-name="love_fill" active-color="#ed4115"></a-rate>

只读
<a-rate value="{{ 2.68 }}" disabled></a-rate>
<a-rate value="{{ 5 }}" disabled></a-rate>
```

## API

### Props

| 参数        | 说明                     | 类型    | 默认值    | 必填 |
| ----------- | ------------------------ | ------- | --------- | ---- |
| a-class     | 自定义 class 类名        | string  | -         | 否   |
| count       | star 总数                | number  | 5         | 否   |
| value       | 当前 star 数             | number  | 0         | 否   |
| iconName    | 图标名称，详见 Icon 组件 | string  | star_fill | 否   |
| size        | 图标大小，单位[`rpx`]    | number  | 92        | 否   |
| color       | 图标未选中时颜色         | string  | #d8d8d8   | 否   |
| activeColor | 图标选中时颜色           | string  | #ffb500   | 否   |
| disabled    | 是否只读，无法进行交互   | boolean | false     | 否   |

### Events

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| change | 点击评分时触发 | e    |

## 常见问题
