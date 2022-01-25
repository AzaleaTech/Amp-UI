# Form 表单

## 概述

表单组件。将组件内的用户输入的值提交。要获取数据，可以自行在页面的 state 中获取。

## 示例

```html
Form 统一标签对齐方式（justify）
<a-form label-width="160" label-align="justify">
  <a-form-item label="标签1"></a-form-item>
  <a-form-item label="标签2"></a-form-item>
</a-form>

FormItem 标签对齐方式（left、right、justify）
<a-form>
  <a-form-item label="左对齐"></a-form-item>
  <a-form-item label="右对齐" label-width="160" label-align="right"></a-form-item>
  <a-form-item label="居中对齐" label-width="160" label-align="justify"></a-form-item>
</a-form>

校验设置
<a-form>
  <a-form-item label="必填项" required></a-form-item>
  <a-form-item label="警告信息" warning-message="数据格式错误"></a-form-item>
</a-form>

附加设置（图标、箭头）
<a-form>
  <a-form-item label="带图标表单项" icon-url="/demo/assets/images/logo.png"></a-form-item>
  <a-form-item
    label="尾部信息及箭头"
    footer="详情"
    footer-arrow
    bind:click="handleClickFormItem"
  ></a-form-item>
</a-form>

结合其他表单输入组件
<a-form labelWidth="160" labelAlign="left">
  <a-form-item label="Input">
    <input placeholder="请输入文字" />
  </a-form-item>
  <a-form-item label="Picker">
    <picker range="{{ range }}" value="{{ value }}" bind:change="handlePickerChange"
      >{{ value }}
    </picker>
  </a-form-item>
</a-form>
```

```js
Page({
  data: {
    range: [0, 1, 2, 3, 4],
    value: 0,
  },

  handleClickFormItem() {
    wx.showToast({ title: '点击表单项' });
  },

  handlePickerChange(e) {
    const { value } = e.detail;
    this.setData({
      value,
    });
  },
});
```

## API

### Props

#### Form

| 参数        | 说明                                                  | 类型   | 默认值 | 可选值               | 必填 |
| ----------- | ----------------------------------------------------- | ------ | ------ | -------------------- | ---- |
| label-align | `label`标签的文本对齐方式, 需结合`labelWidth`一起使用 | string | left   | left、right、justify | 否   |
| label-color | `label`标签的文本颜色                                 | string | -      | -                    | 否   |
| label-width | `label`标签的文本宽度, 单位[`rpx`]                    | string | -      | -                    | 否   |

#### FormItem

| 参数            | 说明                                                  | 类型    | 默认值 | 可选值               | 必填 |
| --------------- | ----------------------------------------------------- | ------- | ------ | -------------------- | ---- |
| label           | 标签名称                                              | string  | -      | -                    | 是   |
| label-align     | `label`标签的文本对齐方式, 需结合`labelWidth`一起使用 | string  | -      | left、right、justify | 否   |
| label-color     | `label`标签的文本颜色                                 | string  | -      | -                    | 否   |
| label-width     | `label`标签的文本宽度, 单位[`rpx`]                    | string  | -      | -                    | 否   |
| required        | 是否必填                                              | boolean | false  | -                    | 否   |
| warning-message | 警告信息                                              | string  | -      | -                    | 否   |
| iconUrl         | 表单项图标地址                                        | string  | -      | -                    | 否   |
| footer          | 表单项尾部文字                                        | string  | -      | -                    | 否   |
| footer-arrow    | 表单项尾部箭头                                        | boolean | false  | -                    | 否   |

### FormItem Slots

| 插槽名 | 说明                                 |
| ------ | ------------------------------------ |
| -      | 自定义表单组件, 如`input`, `radio`等 |

### Events

#### Form

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| 暂无   | -    | -    |

#### FormItem

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| click  | 每一项点击事件 | e    |

## 常见问题
