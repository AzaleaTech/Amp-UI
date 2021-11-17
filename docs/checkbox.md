# Checkbox 多选框

## 概述

多选框组件, 一般结合[checkbox-group](./checkboxGroup.md)使用。

## 示例

```html
不同状态
<a-checkbox-group>
  <a-checkbox value="{{ value1 }}"></a-checkbox>
  <a-checkbox value="{{ value2 }}" checked></a-checkbox>
  <a-checkbox value="{{ value3 }}" checked disabled></a-checkbox>
</a-checkbox-group>

按钮位置
<a-checkbox-group>
  <a-checkbox value="{{ value1 }}" checked position="right"></a-checkbox>
</a-checkbox-group>

按钮颜色
<a-checkbox-group>
  <a-checkbox value="{{ value1 }}" checked color="#3e04df"></a-checkbox>
</a-checkbox-group>
```

## API

### Props

| 参数     | 说明                                                                              | 类型    | 默认值  | 可选值      | 必填 |
| -------- | --------------------------------------------------------------------------------- | ------- | ------- | ----------- | ---- |
| a-class  | 自定义根节点样式类                                                                | string  | -       | -           | 否   |
| value    | checkbox 标识，选中时触发 checkbox-group 的 change 事件，并携带 checkbox 的 value | string  | -       | -           | 否   |
| checked  | 当前项是否选中                                                                    | boolean | false   | -           | 否   |
| disabled | 当前项是否禁用                                                                    | boolean | false   | -           | 否   |
| color    | 选中状态颜色                                                                      | string  | #3895f7 | -           | 否   |
| position | 按钮位置                                                                          | string  | left    | left、right | 否   |

### Events

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| change | 切换选中状态 | e    |

## 常见问题
