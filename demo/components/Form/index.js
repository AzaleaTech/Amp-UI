Component({
  relations: {
    '../FormItem/index': {
      type: 'child',
      /**
       * 获取并同步表单的统一格式，当item有单独定义时不生效
       * @param {*} target 父组件Form节点
       */
      linked(target) {
        if (!target.data.labelAlign && this.properties.labelAlign) {
          target.setData({ labelAlign: this.properties.labelAlign });
        }
        if (!target.data.labelWidth && this.properties.labelWidth) {
          target.setData({ labelWidth: this.properties.labelWidth });
        }
        if (!target.data.labelColor && this.properties.labelColor) {
          target.setData({ labelColor: this.properties.labelColor });
        }
      },
    },
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
    },
    /**
     * 所有列表项标签颜色，选填
     */
    labelColor: {
      type: String,
      value: '',
    },
  },
});
