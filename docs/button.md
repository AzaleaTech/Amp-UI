# Button 按钮

## 概述

按钮用于触发一个操作，如提交表单。

## 示例

```html
按钮类型
<a-button type="default">default</a-button>
<a-button type="primary">primary</a-button>
<a-button type="success">success</a-button>
<a-button type="warning">warning</a-button>
<a-button type="error">error</a-button>

行内按钮
<a-button inline>按钮1</a-button>
<a-button inline type="primary">按钮2</a-button>

按钮形状
<a-button circle>圆角</a-button>
<a-button circle="{{ false }}">无圆角</a-button>

按钮尺寸
<a-button size="large">大尺寸</a-button>
<a-button size="default">默认尺寸</a-button>
<a-button size="small">小尺寸</a-button>

按钮状态
<a-button disabled>禁用</a-button>
<a-button loading>加载中</a-button>

开放能力
<a-button open-type="contact">contact</a-button>
<a-button open-type="getUserInfo">getUserInfo</a-button>
<a-button open-type="getPhoneNumber">getPhoneNumber</a-button>
<a-button open-type="openSetting">openSetting</a-button>
<a-button open-type="launchApp">launchApp</a-button>
```

## API

### Props

| 参数      | 说明                                                                                                             | 必填 | 类型    | 默认值  | 可选值                                    |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ---- | ------- | ------- | ----------------------------------------- |
| a-class   | 自定义外部样式类                                                                                                 | 否   | string  | -       |                                           |
| type      | 按钮类型 (颜色，边框，字体)                                                                                      | 否   | string  | default | default、primary、success、warning、error |
| inline    | 是否为行内元素，开启后宽度为自适应型                                                                             | 否   | boolean | false   |                                           |
| circle    | 按钮圆角                                                                                                         | 否   | boolean | false   |                                           |
| size      | 按钮尺寸                                                                                                         | 否   | string  | default | large、default、small                     |
| disabled  | 设置按钮为禁用状态                                                                                               | 否   | boolean | false   |                                           |
| loading   | 设置按钮为加载中状态                                                                                             | 否   | boolean | false   |                                           |
| open-type | 微信开放能力, 参考[微信 button 文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)     | 否   | string  | -       |                                           |
| form-type | 用于 `form` 组件, 参考[微信 button 文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) | 否   | string  | -       |                                           |

### Events

| 事件名         | 说明                                                                    | 参数 |
| -------------- | ----------------------------------------------------------------------- | ---- |
| click          | 点击事件(无 openType 时触发)                                            | -    |
| contact        | 客服消息回调，open-type="contact"时有效                                 | e    |
| error          | 当使用开放能力时，发生错误的回调，open-type=launchApp 时有效            | e    |
| getuserinfo    | 用户点击该按钮时，会返回获取到的用户信息，open-type="getUserInfo"时有效 | e    |
| getphonenumber | 获取用户手机号回调，open-type=getPhoneNumber 时有效                     | e    |
| opensetting    | 在打开授权设置页后回调，open-type=openSetting 时有效                    | e    |

## 常见问题
