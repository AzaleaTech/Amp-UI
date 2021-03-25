Component({
  properties: {
    /**
     * 按钮样式，选填
     * 包括'primary'、'default'、'icon'三类
     */
    type: {
      type: String,
      value: 'default',
    },
    /**
     * 非图标按钮的大小规格，选填
     * 包括'normal'、'mini'两类
     */
    size: {
      type: String,
      value: 'normal',
    },
    /**
     * 图标地址，选填
     */
    iconUrl: {
      type: String,
      value: undefined,
    },
    /**
     * 按钮宽度, 选填
     * 默认单位为rpx 
     */
    width: {
      type: Number,
      value: undefined,
    },
    /**
     * 禁用按钮，选填
     */
    disabled: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    // 按钮当前激活状态
    active: false,
  },

  methods: {
    /**
     * 点击开始激活按钮
     */
    handleTouchStart() {
      this.setData({ active: true });
    },

    /**
     * 点击结束抑制按钮，若未被禁用则提供点击事件
     */
    handleTouchEnd() {
      this.setData({ active: false });
      if (!this.properties.disabled) {
        this.triggerEvent('clickButton');
      }
    },
  },
})