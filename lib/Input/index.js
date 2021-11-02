/**
 * 只对原生部分属性做了兼容，需要用到清除内容时使用该组件，其他情况尽量使用原生组件,
 * 详细参考https://developers.weixin.qq.com/miniprogram/dev/component/input.html
 */
Component({
  properties: {
    /**
     * 输入框的唯一标识符，用于表单提交时
     */
    name: {
      type: String,
      value: 'input',
    },
    /**
     * Input内容
     */
    value: {
      type: String,
      value: '',
    },
    /**
     * input的类型，原生属性
     */
    type: {
      type: String,
      value: 'text',
    },
    /**
     * 提示信息
     */
    placeholder: {
      type: String,
      value: undefined,
    },
    /**
     * 最大输入长度，原生属性，-1时不限制最大长度
     */
    maxlength: {
      type: Number,
      value: -1,
    },
    /**
     * 是否是密码类型，原生属性
     */
    password: {
      type: Boolean,
      value: false,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      value: false,
    },
    /**
     * 是否可清除文本
     */
    allowClear: {
      type: Boolean,
      value: true,
    },
    /**
     * 是否获取焦点，原生属性
     */
    focus: {
      type: Boolean,
      value: true,
    },
    /**
     * 键盘右下角的文字，默认'done',可选'send','search','next','go'，原生属性
     */
    confirmType: {
      type: String,
      value: 'done',
    },
    /**
     * input样式, 默认width为90%
     */
    style: {
      type: String,
      value: '',
    },
    /**
     * 占位符的样式，原生属性
     */
    placeholderStyle: {
      type: String,
      value: '',
    },
  },

  externalClasses: ['a-class'],

  methods: {
    handleChange(e) {
      const value = e.detail.value ? e.detail.value : '';
      this.setData({
        value,
      });
      this.triggerEvent('change', { value });
    },

    handleBlur(e) {
      const value = e.detail.value ? e.detail.value : '';
      this.triggerEvent('blur', { value });
    },

    handleFocus(e) {
      const value = e.detail.value ? e.detail.value : '';
      this.triggerEvent('focus', { value });
    },
  },
});
