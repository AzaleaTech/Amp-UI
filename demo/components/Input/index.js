/**
 * 只对原生部分属性做了兼容，需要用到清除内容时使用该组件，其他情况尽量使用原生组件,
 * 详细参考https://developers.weixin.qq.com/miniprogram/dev/component/input.html
 */
Component({
  externalClasses: ['a-class'],

  properties: {
    name: {
      type: String,
      value: 'input',
    },
    value: {
      type: String,
      value: '',
    },
    type: {
      type: String,
      value: 'text',
    },
    placeholder: {
      type: String,
      value: undefined,
    },
    maxlength: {
      type: Number,
      value: -1,
    },
    password: {
      type: Boolean,
      value: false,
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    allowClear: {
      type: Boolean,
      value: true,
    },
    focus: {
      type: Boolean,
      value: true,
    },
    confirmType: {
      type: String,
      value: 'done',
    },
    placeholderStyle: {
      type: String,
      value: '',
    },
  },

  methods: {
    handleChange(e) {
      const value = e.detail.value ? e.detail.value : '';

      this.setData({
        value,
      });

      this.triggerEvent('change', {
        value,
      });
    },

    handleBlur(e) {
      const value = e.detail.value ? e.detail.value : '';

      this.triggerEvent('blur', {
        value,
      });
    },

    handleFocus(e) {
      const value = e.detail.value ? e.detail.value : '';

      this.triggerEvent('focus', {
        value,
      });
    },
  },
});
