# Input 输入框

## 概述

文本输入框，在原生控件基础上进行了功能扩展。

## 示例

```html
<!-- 基础用法 -->
<a-input value="{{ value }}" bind:change="handleChange" />

<!-- 不同类型 -->
<a-input value="{{ value }}" type="number" placeholder="请输入手机号" maxlength="{{ 11 }}" />
<a-input value="{{ value }}" type="safe-password" placeholder="请输入密码" focus />

<!-- 禁用 -->
<a-input value="{{ value }}" disabled />

<!-- 可清空 -->
<a-input value="{{ value }}" clearable />
```

## APIs

参考微信组件库[Input 文档](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)

### Props

| 参数         | 说明                                              | 类型    | 默认值 | 可选值                                     | 必填 |
| ------------ | ------------------------------------------------- | ------- | ------ | ------------------------------------------ | ---- |
| a-class      | 自定义 class 类名                                 | string  | -      | -                                          | -    |
| name         | 输入框的唯一标识                                  | string  | -      | -                                          | -    |
| value        | 输入框的初始内容                                  | string  | -      | -                                          | 否   |
| type         | 输入框类型                                        | string  | text   | text、number、idcard、digit、safe-password |
| placeholder  | 占位文本                                          | string  | -      | -                                          | 否   |
| maxlength    | 最大输入长度,设置为 -1 的时候不限制最大长度       | number  | 140    | -                                          | 否   |
| password     | 是否是密码类型                                    | boolean | false  | -                                          | 否   |
| disabled     | 是否禁用                                          | boolean | false  | -                                          | 否   |
| clearable    | 是否可清空                                        | boolean | false  | -                                          | 否   |
| focus        | 获取焦点                                          | boolean | false  | -                                          | 否   |
| confirm-type | 设置键盘右下角按钮的文字，仅在`type='text'`时生效 | string  | done   | -                                          | 否   |

### Events

| 事件名 | 说明                     | 参数 |
| ------ | ------------------------ | ---- |
| change | 当绑定值变化时触发的事件 | e    |
| focus  | 输入框 focus             | e    |
| blur   | 输入框 blur              | e    |

## 常见问题
