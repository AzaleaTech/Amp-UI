# Collapse 折叠列表

## 概述

折叠列表

## 示例

```html
<!-- 非手风琴模式 -->
<a-collapse value="{{ names }}" bind:open="handleOpen" bind:close="handleClose">
  <a-collapse-item name="name1" title="标题1">
    <a-icon name="icon" slot="icon-left"></a-icon>
  </a-collapse-item>

  <a-collapse-item name="name2" title="标题2" value="详情">
    <a-icon name="arrow" slot="icon-right"></a-icon>
  </a-collapse-item>

  <a-collapse-item name="name3" disabled>
    <a-list-item slot="content"></a-list-item>
  </a-collapse-item>
</a-collapse>

<!-- 手风琴模式 -->
<a-collapse accordion value="{{ name }}" bind:open="handleOpen" bind:close="handleClose">
  <a-collapse-item name="name1" title="标题1">
    <a-icon name="icon" slot="icon-left"></a-icon>
  </a-collapse-item>

  <a-collapse-item name="name2" title="标题2" value="详情">
    <a-icon name="arrow" slot="icon-right"></a-icon>
  </a-collapse-item>

  <a-collapse-item name="name3" disabled>
    <a-list-item slot="content"></a-list-item>
  </a-collapse-item>
</a-collapse>
```

## API

### Collapse Props

| 参数      | 说明                | 类型                                                                  | 默认值 | 可选值 | 必填 |
| --------- | ------------------- | --------------------------------------------------------------------- | ------ | ------ | ---- |
| value     | 所有展开面板的 name | 非手风琴模式：Array[string \| number] ，手风琴模式： string \| number | -      | -      | 是   |
| accordion | 手风琴模式          | boolean                                                               | false  | -      | 否   |

### Collapse Events

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| open   | 展开面板时触发 | e    |
| close  | 关闭面板时触发 | e    |

### CollapseItem Props

| 参数     | 说明           | 类型             | 默认值 | 可选值 | 必填 |
| -------- | -------------- | ---------------- | ------ | ------ | ---- |
| name     | 唯一标识符     | string \| number | -      | -      | 是   |
| title    | 标题栏左侧内容 | string           | -      | -      | 否   |
| value    | 标题栏右侧内容 | string           | -      | -      | 否   |
| disabled | 是否禁用面板   | boolean          | false  | -      | 否   |

### CollapseItem Slots

| 插槽名     | 说明                                        |
| ---------- | ------------------------------------------- |
| content    | 子项插槽                                    |
| icon-left  | 标题栏左侧图标插槽                          |
| icon-right | 标题栏右侧图标插槽，默认插入 arrow 箭头图标 |

## 常见问题
