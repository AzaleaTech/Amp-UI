# Switch 开关

## 概述

用于两状态之间的相互切换。

## 示例

```html
不同颜色
<a-switch checked="{{ checked }}" bind:change="handleChange"></a-switch>
<a-switch checked="{{ checked }}" color="#f42dee" bind:change="handleChange"></a-switch>
<a-switch checked="{{ checked }}" color="#2f445d" bind:change="handleChange"></a-switch>

禁用状态
<a-switch checked disabled></a-switch>
```

## API

### Props

| 参数     | 说明                         | 类型    | 默认值           | 可选值 | 必填 |
| -------- | ---------------------------- | ------- | ---------------- | ------ | ---- |
| a-class  | 自定义根节点样式类           | string  | -                | -      | 否   |
| checked  | 是否选中                     | boolean | false            | -      | 否   |
| color    | checked 为 true 时，对应底色 | string  | ${primary-color} | -      | 否   |
| disabled | 是否禁用                     | boolean | false            | -      | 否   |

### Events

| 事件名 | 说明               | 参数 |
| ------ | ------------------ | ---- |
| change | 开关变化时触发事件 | e    |

## 常见问题
