Component({
  relations: {
    '../Form/index': {
      type: 'parent',
    },
  },

  properties: {
    /**
     * 该表单项是否为必填项，选填
     */
    required: {
      type: Boolean,
      value: false,
    },
    /**
     * 表单项标签，选填
     * 不填则无标签
     */
    label: {
      type: String,
      value: '',
    },
    /**
     * 表单项标签宽度，选填
     * 默认单位为rpx
     */
    labelWidth: {
      type: Number,
      value: undefined,
    },
    /**
     * 表单项标签颜色，选填
     * 不填则使用默认色
     */
    labelColor: {
      type: String,
      value: '',
    },
    /**
     * 列表项标签对齐方式，选填
     * 包括'left'、'right'、'justify'
     */
    labelAlign: {
      type: String,
      value: '',
    },
    /**
     * 表单项图标地址，选填
     * 不填则无图标
     */
    iconUrl: {
      type: String,
      value: '',
    },
    /**
     * 表单项警告信息，选填
     */
    warningMessage: {
      type: String,
      value: '',
    },
    /**
     * 表单项尾部文字，选填
     * 不填则无尾部文字
     */
    footer: {
      type: String,
      value: '',
    },
    /**
     * 表单项尾部箭头，选填
     * 不填则无尾箭头
     */
    footerArrow: {
      type: Boolean,
      value: false,
    },
    /**
     * 用于回调的额外参数
     */
    extraData: {
      type: Object,
      value: undefined,
    }
  },

  lifetimes: {
    ready() {
      if (!this.properties.labelAlign) {
        this.setData({ labelAlign: 'left' });
      }
    },
  },

  methods: {
    /**
     * 提供列表项点击事件
     */
    handleTap() {
      this.triggerEvent('clickFormItem', this.properties.extraData);
    },
  },
});
