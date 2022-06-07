# Rate 评分

## 概述

用于对事物进行评级操作, 包含评分展示(可包含小数)。

> 默认两图标间距为图标宽度的一半。

## 示例

```html
基础用法
<a-rate bind:change="handleChange"></a-rate>

不同数量大小
<a-rate count="{{ 3 }}" icon-size="{{ 60 }}"></a-rate>
<a-rate icon-size="{{ 60 }}"></a-rate>
<a-rate icon-size="{{ 80 }}"></a-rate>

不同图标
<a-rate value="{{ 3 }}" icon-name="praise_fill" active-icon-color="#3895f7"></a-rate>
<a-rate value="{{ 5 }}" icon-name="love_fill" active-icon-color="#ed4115"></a-rate>

图标半边点击
<a-rate show-half></a-rate>
<a-rate show-half icon-name="love_fill" active-icon-color="#ed4115"></a-rate>

只读
<a-rate value="{{ 2.68 }}" disabled></a-rate>
<a-rate value="{{ 5 }}" disabled></a-rate>
```

## API

### Props

| 参数         | 说明                                     | 类型    | 默认值    | 必填 |
| ------------ | ---------------------------------------- | ------- | --------- | ---- |
| a-class      | 自定义根节点样式类                       | string  | -         | 否   |
| a-class-item | 自定义每项图标样式类，常用于设置图标间距 | string  | -         | 否   |
| count        | star 总数                                | number  | 5         | 否   |
| value        | 当前 star 数                             | number  | 0         | 否   |
| icon-name    | 图标名称，详见 Icon 组件                 | string  | star_fill | 否   |
| icon-size    | 图标大小，单位[`rpx`]                    | number  | 100        | 否   |
| icon-color   | 图标未选中时颜色                         | string  | #d8d8d8   | 否   |
| active-icon-color | 图标选中时颜色                           | string  | #ffb500   | 否   |
| show-half    | 是否支持图标一半点击                 | boolean | false     | 否   |
| disabled     | 是否只读，无法进行交互                   | boolean | false     | 否   |

### Events

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| change | 点击图标时触发 | e    |

## 常见问题
