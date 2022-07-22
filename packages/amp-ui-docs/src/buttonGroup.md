# Button-group 按钮组

## 概述

自定义按钮组

## 示例

```html
默认按钮组
<a-button-group>
  <a-button>left</a-button>
  <a-button>right</a-button>
</a-button-group>

整体按钮组
<a-button-group entire>
  <a-button>left</a-button>
  <a-button>right</a-button>
</a-button-group>

按钮组内按钮尺寸
<a-button-group size="large">
  <a-button>large1</a-button>
</a-button-group>
<a-button-group size="default">
  <a-button>default1</a-button>
  <a-button>default2</a-button>
  <a-button>default3</a-button>
</a-button-group>
<a-button-group size="small">
  <a-button>small1</a-button>
  <a-button>small2</a-button>
</a-button-group>
```

## API

### Props

| 参数   | 说明                                                  | 必填 | 类型    | 默认值  | 可选值                |
| ------ | ----------------------------------------------------- | ---- | ------- | ------- | --------------------- |
| size   | 设置按钮组内按钮的 size                               | 否   | string  | default | large、default、small |
| entire | 设置按钮组为一个整体按钮(当且仅当按钮数量为 2 时生效) | 否   | boolean | false   |

### Events

| 事件名 | 说明 | 参数 |
| ------ | ---- | ---- |
| 暂无   | -    | -    |

## 常见问题
