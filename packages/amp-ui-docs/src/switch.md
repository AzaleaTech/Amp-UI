# Switch 开关

## 概述

用于两状态之间的相互切换。

## 示例

```html
不同颜色
<a-switch checked="{{ checked1 }}" data-index="1" bind:change="handleChange"></a-switch>
<a-switch checked="{{ checked2 }}" color="#f42dee" data-index="2" bind:change="handleChange">
</a-switch>
<a-switch checked="{{ checked3 }}" color="#2f445d" data-index="3" bind:change="handleChange">
</a-switch>

禁用状态
<a-switch checked="{{ checked4 }}" disabled></a-switch>
<a-switch checked="{{ !checked4 }}" disabled></a-switch>
```

```js
Page({
  data: {
    checked1: true,
    checked2: true,
    checked3: true,
    checked4: false,
  },

  handleChange(e) {
    const { index } = e.currentTarget.dataset;
    const { value } = e.detail;

    this.setData({
      ['checked' + index]: value,
    });
  },
});
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
