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
    labelWidth: {
      type: String | Number,
      value: undefined,
    },
    labelAlign: {
      type: String,
      value: 'left',
    },
    labelColor: {
      type: String,
      value: '',
    },
  },
});
