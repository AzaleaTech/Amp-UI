# CheckboxGroup 多选框组

## 概述

多项选择器，内部由多个[checkbox](./checkbox.md)组成。

## 示例

```html
排列方向
<a-checkbox-group current="{{ current }}" direction="horizontal" bind:change="handleGroupChange">
  <a-checkbox value="{{ value1 }}"></a-checkbox>
  <a-checkbox value="{{ value2 }}"></a-checkbox>
  <a-checkbox value="{{ value3 }}"></a-checkbox>
</a-checkbox-group>

禁用
<a-checkbox-group current="{{ current }}" disabled>
  <a-checkbox value="{{ value1 }}"></a-checkbox>
  <a-checkbox value="{{ value2 }}"></a-checkbox>
</a-checkbox-group>
```

## API

### Props

| 参数      | 说明                     | 类型    | 默认值   | 可选值               | 必填 |
| --------- | ------------------------ | ------- | -------- | -------------------- | ---- |
| a-class   | 自定义根节点样式类       | string  | -        | -                    | 否   |
| current   | 指定当前选中的项目 value | array   | []       | -                    | 否   |
| disabled  | 是否禁用所有单选框       | boolean | false    | -                    | 否   |
| direction | 排列方向，默认竖直方向   | string  | vertical | vertical、horizontal | 否   |

### Events

| 事件名 | 说明                     | 参数 |
| ------ | ------------------------ | ---- |
| change | 当绑定值变化时触发的事件 | e    |

## 常见问题
