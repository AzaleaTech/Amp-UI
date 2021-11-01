# Tabs 标签页

## 概述

标签页组件，用于让用户在不同的视图中进行切换。

## 示例

```html
基础用法
<a-tabs tabList="{{ ['tab1', 'tab2'] }}"></a-tabs>

默认选中标签页
<a-tabs tabList="{{ ['tab1', 'tab2'] }}" current="{{ 1 }}"></a-tabs>

顶部吸附
<a-tabs tabList="{{ ['tab1', 'tab2'] }}" ceiling></a-tabs>
```

## API

### Props

| 参数    | 说明                 | 类型          | 默认值 | 必填 |
| ------- | -------------------- | ------------- | ------ | ---- |
| tabList | tab 列表             | Array[string] | []     | 是   |
| current | 当前选中的标签索引值 | number        | 0      | 否   |
| ceiling | 是否顶部吸附         | boolean       | false  | 否   |

### Events

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| change | 切换标签回调 | e    |

## 常见问题
