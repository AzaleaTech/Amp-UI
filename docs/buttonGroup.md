# Button-group 按钮组

## 概述

自定义按钮组

## 示例

通过 width 来设置按钮组宽度，组内按钮等宽

```html
按钮组宽度
<button-group>
  <a-button>width:375rpx<a-button>
  <a-button>width:375rpx<a-button>
</button-group>

<button-group width="{{ 600 }}">
  <a-button>width:200rpx<a-button>
  <a-button>width:200rpx<a-button>
  <a-button>width:200rpx<a-button>
</button-group>

按钮组内按钮尺寸
<button-group size="large">
  <a-button>first<a-button>
</button-group>

<button-group size="default">
  <a-button>first<a-button>
</button-group>

<button-group size="small">
  <a-button>first<a-button>
</button-group>
```

## API

### Props

| 参数  | 说明                       | 必填 | 类型   | 默认值  | 可选值                |
| ----- | -------------------------- | ---- | ------ | ------- | --------------------- |
| size  | 设置按钮组内按钮的 size    | 否   | string | default | large、default、small |
| width | 按钮组宽度，默认单位为 rpx | 否   | number | 750     |

### Events

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| 暂无   | -    | -    |

## 常见问题
