# Tag 标签

## 概述

用于简单标记和分类。

## 示例

```html
标签大小
<a-tag size="small">标签</a-tag>
<a-tag size="default">标签</a-tag>
<a-tag size="large">标签</a-tag>

标签类型
<a-tag name="标签" type="default"></a-tag>
<a-tag name="标签" type="primary"></a-tag>
<a-tag name="标签" type="success"></a-tag>
<a-tag name="标签" type="warning"></a-tag>
<a-tag name="标签" type="error"></a-tag>

镂空标签
<a-tag name="标签" plain></a-tag>

圆角标签
<a-tag name="标签" circle></a-tag>

禁用标签
<a-tag name="标签" disabled></a-tag>
```

## API

### Props

| 参数     | 说明               | 类型    | 默认值  | 可选值                                    | 必填 |
| -------- | ------------------ | ------- | ------- | ----------------------------------------- | ---- |
| a-class  | 自定义根节点样式类 | string  | -       | -                                         | 否   |
| name     | 标签名称           | string  | -       | -                                         | 否   |
| size     | 标签尺寸           | string  | default | large、default、small                     | 否   |
| type     | 标签类型           | string  | default | default、primary、success、warning、error | 否   |
| circle   | 标签是否圆角       | boolean | false   | -                                         | 否   |
| plain    | 标签是否镂空       | boolean | false   | -                                         | 否   |
| disabled | 标签是否禁用       | boolean | false   | -                                         | 否   |

### Events

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| click  | 标签点击事件 | e    |

## 常见问题
