# RadioGroup 单选框组

## 概述

单项选择器，内部由多个[radio](./radio.md)组成。

## 示例

```html
排列方向
<a-radio-group current="{{ current }}" direction="horizontal" bind:change="handleGroupChange">
  <a-radio value="{{ value1 }}"></a-radio>
  <a-radio value="{{ value2 }}"></a-radio>
  <a-radio value="{{ value3 }}"></a-radio>
</a-radio-group>

禁用
<a-radio-group current="{{ current }}" disabled>
  <a-radio value="{{ value1 }}"></a-radio>
  <a-radio value="{{ value2 }}"></a-radio>
</a-radio-group>
```

## API

### Props

| 参数      | 说明                     | 类型    | 默认值   | 可选值               | 必填 |
| --------- | ------------------------ | ------- | -------- | -------------------- | ---- |
| a-class   | 自定义根节点样式类       | string  | -        | -                    | 否   |
| current   | 指定当前选中的项目 value | string  | ''       | -                    | 否   |
| disabled  | 是否禁用所有单选框       | boolean | false    | -                    | 否   |
| direction | 排列方向，默认竖直方向   | string  | vertical | vertical、horizontal | 否   |

### Events

| 事件名 | 说明                     | 参数 |
| ------ | ------------------------ | ---- |
| change | 当绑定值变化时触发的事件 | e    |

## 常见问题
