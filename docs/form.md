# Form 表单

## 概述

表单组件。将组件内的用户输入的值提交。由于小程序组件化的限制，要触发 submit，必须使用 AButton 且设置 formType='submit'，onSubmit 事件获得的 event 中的 event.detail.value 始终为空对象，开发者要获取数据，可以自行在页面的 state 中获取。

## 示例

```html
<a-form
       bind:submit="handleSubmit"
       bind:reset="handleReset">
  <a-input name="input"/>
  <a-button formType="submit">提交</AtButton>
  <a-button formType="reset">重置</AtButton>
</a-form>
```

## API

### Props

#### Form

| 参数       | 说明                               | 类型   | 默认值 | 可选值                     | 必填 |
| ---------- | ---------------------------------- | ------ | ------ | -------------------------- | ---- |
| labelAlign | `label`标签的文本对齐方式          | string | -      | 'left'、'right'、'justify' | 否   |
| labelColor | `label`标签的文本颜色              | string | -      | -                          | 否   |
| labelWidth | `label`标签的文本宽度, 单位[`rpx`] | string | -      | -                          | 否   |

#### FormItem

| 参数           | 说明                               | 类型    | 默认值 | 可选值                     | 必填 |
| -------------- | ---------------------------------- | ------- | ------ | -------------------------- | ---- |
| label          | 标签名称                           | string  | -      | -                          | 否   |
| labelAlign     | `label`标签的文本对齐方式          | string  | -      | 'left'、'right'、'justify' | 否   |
| labelColor     | `label`标签的文本颜色              | string  | -      | -                          | 否   |
| labelWidth     | `label`标签的文本宽度, 单位[`rpx`] | string  | -      | -                          | 否   |
| required       | 是否必填                           | boolean | false  | -                          | 否   |
| warningMessage | 警告信息                           | string  | -      | -                          | 否   |

### Events

#### Form

| 事件名 | 说明                               | 参数 |
| ------ | ---------------------------------- | ---- |
| submit | 携带 form 中的数据触发 submit 事件 | e    |
| reset  | 表单重置时触发                     | e    |

## 常见问题