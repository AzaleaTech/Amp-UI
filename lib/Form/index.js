Component({
  relations: {
    '../FormItem/index': {
      type: 'child',
    }
  },

  properties: {
    /**
     * 所有表单项标签宽度，选填
     * 默认单位为rpx
     */
    labelWidth: {
      type: Number,
      value: undefined,
    },
    /**
     * 所有列表项标签对齐方式，选填
     * 包括'left'、'right'、'justify'
     */
    labelAlign: {
      type: String,
      value: 'left',
    }
  }
})