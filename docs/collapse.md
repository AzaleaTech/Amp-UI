# Collapse 折叠列表

## 概述

用于内容区域折叠/展开。

## 示例

```html
非手风琴模式
<a-collapse>
  <a-collapse-item name="标题1" title="标题1" value="文本内容">
    <view slot="content">
      <view>文本内容1</view>
    </view>
  </a-collapse-item>
  <a-collapse-item
    name="标题2"
    title="标题2"
    value="content内容列表"
    content="{{ content }}"
    bind:click="handleClick"
  />
  <a-collapse-item name="标题3" title="标题3" value="自定义标题">
    <a-icon slot="icon-left" name="star_fill" class="icon-left" />
    <a-icon slot="icon-right" name="star_fill" class="icon-right" />
    <view slot="content">
      <view>文本内容3</view>
    </view>
  </a-collapse-item>
  <a-collapse-item disabled name="标题1" title="标题1" value="禁用展开">
    <view slot="content">
      <view>文本内容4</view>
    </view>
  </a-collapse-item>
</a-collapse>

手风琴模式
<a-collapse accordion>
  <a-collapse-item
    wx:for="{{ 3 }}"
    wx:key="index"
    name="{{ '标题'+ (index + 1) }}"
    title="{{ '标题'+ (index + 1) }}"
  >
    <view slot="content">
      <view>文本内容 {{ index + 1 }}</view>
    </view>
  </a-collapse-item>
</a-collapse>
```

```js
Page({
  data: {
    content: [
      {
        title: '标题2-1',
        value: '内容2-1',
      },
      {
        title: '标题2-2',
        value: '内容2-2',
      },
      {
        title: '标题2-3',
        value: '内容2-3',
      },
    ],
  },
});
```

## API

### Collapse Props

| 参数      | 说明                | 类型                                                                  | 默认值 | 可选值 | 必填 |
| --------- | ------------------- | --------------------------------------------------------------------- | ------ | ------ | ---- |
| value     | 所有展开面板的 name | 非手风琴模式：Array[string \| number] ，手风琴模式： string \| number | -      | -      | 否   |
| accordion | 手风琴模式          | boolean                                                               | false  | -      | 否   |

### Collapse Events

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| open   | 展开面板时触发 | e    |
| close  | 关闭面板时触发 | e    |

### CollapseItem Props

| 参数     | 说明                              | 类型             | 默认值 | 可选值 | 必填 |
| -------- | --------------------------------- | ---------------- | ------ | ------ | ---- |
| name     | 唯一标识符                        | string \| number | -      | -      | 是   |
| title    | 标题栏左侧内容                    | string           | -      | -      | 否   |
| value    | 标题栏右侧内容                    | string           | -      | -      | 否   |
| disabled | 是否禁用面板                      | boolean          | false  | -      | 否   |
| content  | 内容列表[{ title: '', value: ''}] | array            |        | -      | 否   |

### CollapseItem Events

| 事件名 | 说明                                               | 参数 |
| ------ | -------------------------------------------------- | ---- |
| click  | 点击内容具体项时触发，仅当使用"content"prop 时有效 | e    |

### CollapseItem Slots

| 插槽名     | 说明                                        |
| ---------- | ------------------------------------------- |
| content    | 子项插槽                                    |
| icon-left  | 标题栏左侧图标插槽                          |
| icon-right | 标题栏右侧图标插槽，默认插入 arrow 箭头图标 |

## 常见问题
