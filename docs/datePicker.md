# DatePicker 日期选择组件

## 概述

用于选择年月日时分，可自定义需要选择的时间范围。

## 示例

```html
基础用法
<a-date-picker a-class="picker-text-color" show="{{ show }}" />

日期添加标记
<a-date-picker
  a-class="picker-text-color"
  markers="{{ markers }}"
  type="{{ type }}"
  show="{{ show }}"
/>

日期输出格式格式化
<a-date-picker
  a-class="picker-text-color"
  value-format="{{ valueFormat }}"
  format="{{ formatter }}"
  type="{{ type }}"
  show="{{ show }}"
  bind:confirm="handleConfirm"
  bind:cancel="handleCancel"
/>

打开组件默认显示的时间
<a-date-picker
  a-class="picker-text-color"
  default-value="{{ dateValue }}"
  type="{{ type }}"
  show="{{ show }}"
  bind:confirm="handleConfirm"
  bind:cancel="handleCancel"
/>
```

```js
Page({
  data: {
    show: false,
    type: 'date',
    dateValue: '2022-11-30',
    valueFormat: 'yyyy-MM-dd hh:mm',
    markers: [
      {
        date: '2022-01-01',
        text: '生日',
        disabled: true,
      },
      {
        date: '12-31',
        text: '跨年',
        bgColor: 'pink',
      },
      {
        date: '12-04',
        text: '色标',
      },
      {
        date: '12-28',
        text: '测试',
      },
    ],
    formatter: (date) => {
      Array.isArray(date)
        ? date.forEach((item, idx) => {
            date[idx] = item + '自定义模板';
          })
        : (date += '自定义模板');
      return date;
    },
  },

  handleConfirm(e) {
    wx.showToast({
      title: String(e.detail.value),
    });
  },

  handleCancel() {
    wx.showToast({
      title: '取消',
    });
  },
});
```

## API

### Props

| 参数          | 说明                                                                                                         | 类型                          | 默认值    | 可选值                                     | 必填 |
| ------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------- | --------- | ------------------------------------------ | ---- |
| a-class       | 自定义根节点样式类                                                                                           | string                        | -         | -                                          | 否   |
| show          | 控制日期选择组件的显示和隐藏                                                                                 | boolean                       | false     | true \| false                              | 否   |
| default-value | 默认显示的时间,type 为 range 时为数组                                                                        | String\|Number\|Date \| Array | -         | 可被 new Date()解析,且时间大于等于当前时间 | 否   |
| type          | 选择类型:date 表示选择单个日期，time 表示选择时间(时分)，range 表示选择日期区间，datetime 表示选择日期和时间 | string                        | date      | date \| time \| range \| datetime          | 否   |
| value-format  | 返回对象 value 属性 的日期格式                                                                               | string                        | timestamp | timestamp \| yyyy-MM-dd hh:mm:ss 任意组合  | 否   |
| format        | 返回对象 label 属性的自定义格式化函数,不指定则返回值和 value 属性一样                                        | function                      | -         | -                                          | 否   |
| markers       | 日历上某一天的标记功能                                                                                       | Array[mark]                   | []        | -                                          | 否   |

`mark` object 字段说明
| 参数 | 说明 | 类型 | 默认值 | 可选值 | 必填 |
| -- | -- | -- | --- | --- | --- |
| date | 日期 | string | - | - | 否 |
| text | 标记内容 | string | - | - | 否 |
| disabled | 是否不可选 | boolean | false | true \| false | 否 |
| bg-color | 日期背景色 | string | - | - | 否 |

### Events

| 事件名  | 说明         | 参数 |
| ------- | ------------ | ---- |
| confirm | 确定点击事件 | e    |
| cancel  | 取消事件     | e    |

## 常见问题
