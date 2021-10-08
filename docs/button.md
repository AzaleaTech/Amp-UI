# Button 按钮

## 概述

自定义按钮

## 示例

在.json 中引入组件

```html
按钮形状
<a-button circle="{{ true }}">圆角</a-button>
<a-button circle="{{ false }}">无圆角</a-button>

按钮尺寸
<a-button size="large">size:large</a-button>
<a-button size="default">size:default</a-button>
<a-button size="small">size:small</a-button>

按钮类型
<a-button type="default">type:default</a-button>
<a-button type="primary">type:primary</a-button>
<a-button type="success">type:success</a-button>
<a-button type="error">type:error</a-button>
<a-button type="warning">type:warning</a-button>

按钮外边距
<a-button margin-x="20">margin-x:20rpx</a-button>

按钮状态
<a-button disabled="{{ false }}">disabled:false</a-button>
<a-button disabled="{{ true }}">disabled:true</a-button>

按钮加载状态
<a-button loading="{{ false }}">loading:false</a-button>
<a-button loading="{{ true }}">loading:true</a-button>

开放能力
<a-button open-type="contact">contact</a-button>
<a-button open-type="getUserInfo">getUserInfo</a-button>
<a-button open-type="getPhoneNumber">getPhoneNumber</a-button>
<a-button open-type="openSetting">openSetting</a-button>
<a-button open-type="launchApp">launchApp</a-button>
```

## API

### Props

| 参数      | 说明                           | 必填 | 类型    | 默认值  | 可选值                                                                                                                                           |
| --------- | ------------------------------ | ---- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| circle    | 按钮圆角                       | 否   | boolean | false   |
| margin-x  | 按钮左右外边距，默认单位为 rpx | 否   | number  | 20      |
| size      | 按钮尺寸                       | 否   | string  | default | large、default、small                                                                                                                            |
| type      | 按钮样式 (颜色，边框，字体)    | 否   | string  | default | default、primary、success、 error、warning                                                                                                       |
| disabled  | 禁用按钮                       | 否   | boolean | false   |
| loading   | 名称前是否带 loading 图标      | 否   | boolean | false   |
| open-type | 微信开放能力                   | 否   | string  | -       | contact、getUserInfo、getPhoneNumber、openSetting、launchApp，[官方文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) |

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
