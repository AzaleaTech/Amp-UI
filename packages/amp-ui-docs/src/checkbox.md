# Checkbox 多选框

## 概述

多选框组件, 一般结合[checkbox-group](./checkboxGroup.md)使用。

## 示例

```html
不同状态
<a-checkbox value="{{ value1 }}"></a-checkbox>
<a-checkbox value="{{ value2 }}" checked disabled></a-checkbox>

不同类型
<a-checkbox value="{{ value1 }}" type="dot"></a-checkbox>
<a-checkbox value="{{ value2 }}" checked disabled type="dot"></a-checkbox>

按钮位置
<a-checkbox value="left" checked position="left"></a-checkbox>
<a-checkbox value="right" checked position="right"></a-checkbox>

按钮颜色
<a-checkbox value="#3e04df" checked color="#3e04df" data-index="1"></a-checkbox>
<a-checkbox value="#cf2828" checked color="#cf2828" data-index="2"></a-checkbox>
```

## API

### Props

| 参数     | 说明                                                                              | 类型    | 默认值  | 可选值      | 必填 |
| -------- | --------------------------------------------------------------------------------- | ------- | ------- | ----------- | ---- |
| a-class  | 自定义根节点样式类                                                                | string  | -       | -           | 否   |
| value    | checkbox 标识，选中时触发 checkbox-group 的 change 事件，并携带 checkbox 的 value | string  | -       | -           | 是   |
| type     | 复选框样式类型 | string  | default      | default、dot           | 否   |
| checked  | 当前项是否选中                                                                    | boolean | false   | -           | 否   |
| disabled | 当前项是否禁用                                                                    | boolean | false   | -           | 否   |
| color    | 选中状态颜色                                                                      | string  | #3895f7 | -           | 否   |
| position | 按钮位置                                                                          | string  | left    | left、right | 否   |

### Events

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| change | 切换选中状态 | e    |

## 常见问题
