# Radio 单选框

## 概述

单选框组件, 一般结合[radio-group](./radioGroup.md)使用。

## 示例

```html
不同状态
<a-radio-group>
  <a-radio value="{{ value1 }}"></a-radio>
  <a-radio value="{{ value2 }}" checked></a-radio>
  <a-radio value="{{ value3 }}" checked disabled></a-radio>
</a-radio-group>

按钮位置
<a-radio-group>
  <a-radio value="{{ value1 }}" checked position="right"></a-radio>
</a-radio-group>

按钮颜色
<a-radio-group>
  <a-radio value="{{ value1 }}" checked color="#3e04df"></a-radio>
</a-radio-group>
```

## API

### Props

| 参数     | 说明                     | 类型    | 默认值 | 可选值      | 必填 |
| -------- | ------------------------ | ------- | ------ | ----------- | ---- |
| a-class  | 自定义根节点样式类       | string  | -      | -           | 否   |
| value    | 选项标识符，必须保证唯一 | string  | -      | -           | 否   |
| checked  | 当前项是否选中           | boolean | false  | -           | 否   |
| disabled | 当前项是否禁用           | boolean | false  | -           | 否   |
| color    | 选中状态颜色             | string  | -      | -           | 否   |
| position | 按钮位置                 | string  | left   | left、right | 否   |

### Events

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| change | 切换选中状态 | e    |

## 常见问题
