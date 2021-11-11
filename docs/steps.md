# Steps 步骤条

## 概述

用于展示某项任务的具体流程。

## 示例

```html
基础用法
<a-steps steps="{{ steps1 }}"></a-steps>
<a-steps steps="{{ steps2 }}"></a-steps>

竖直方向
<a-steps direction="vertical" steps="{{ steps1 }}"></a-steps>
<a-steps current="{{ 1 }}" direction="vertical" steps="{{ steps2 }}"></a-steps>
```

```js
Page({
  data: {
    steps1: ['第一步', '第二步', '第三步'],
    steps2: [
      {
        title: '第一步',
        desc: '描述信息',
      },
      {
        title: '第二步',
        desc: '这是描述信息, 最多两行',
      },
      {
        title: '第三步',
        desc: '这是描述信息描述信息描述信息描述信息描述信息描述信息',
      },
    ],
  },
});
```

## API

### Props

| 参数      | 说明                                                                 | 类型                           | 默认值     | 可选值               | 必填 |
| --------- | -------------------------------------------------------------------- | ------------------------------ | ---------- | -------------------- | ---- |
| a-class   | 自定义根节点样式类                                                   | string                         | -          | -                    | 否   |
| steps     | 步骤条数据列表, 只有标题时可以传`Array[string]`,其他具体字段详见下表 | Array[string] \| Array[`step`] | -          | -                    | 是   |
| current   | 当前步骤索引值                                                       | number                         | 0          | -                    | 否   |
| direction | 显示方向                                                             | string                         | horizontal | horizontal、vertical | 否   |

`step` object 字段说明
| 参数 | 说明 | 类型 | 默认值 | 可选值 | 必填 |
| -- | -- | -- | --- | --- | --- |
| title | 标题 | string | - | - | 是 |
| desc | 描述 | string | - | - | 否 |

### Events

| 事件名 | 说明                                     | 参数 |
| ------ | ---------------------------------------- | ---- |
| click  | 点击步骤时触发的事件, 返回当前步骤的索引 | e    |

## 常见问题
