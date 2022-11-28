/**
 * 只对原生部分属性做了兼容，需要用到清除内容时使用该组件，其他情况尽量使用原生组件,
 * 详细参考https://developers.weixin.qq.com/miniprogram/dev/component/input.html
 */
Component({
  externalClasses: ['a-class'],

  options: {
    multipleSlots: true,
  },

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
      value: '',
    },
    maxlength: {
      type: Number,
      value: 140,
    },
    password: {
      type: Boolean,
      value: false,
    },
    title: {
      type: String,
      value: '',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    clearable: {
      type: Boolean,
      value: false,
    },
    focus: {
      type: Boolean,
      value: false,
    },
    cursorSpacing: {
      type: Number,
      value: 20,
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

  data: {
    passwordVisible: false, // 展示密码图标
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

    handlePassword() {
      this.setData({
        passwordVisible: !this.data.passwordVisible,
      });
    },
  },
});
