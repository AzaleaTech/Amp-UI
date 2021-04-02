Component({
  relations: {
    '../Button/index': {
      type: 'child',
    },
  },

  lifetimes: {
    ready() {
      const targets = this.getRelationNodes('../Button/index');
      if (targets.length > 1) {
        targets[0].setData({ childType: 'first' });
        targets[targets.length - 1].setData({ childType: 'last' });
        for (let i = 1; i < targets.length - 1; i += 1) {
          targets[i].setData({ childType: 'middle' });
        }
      }
    },
  },

  properties: {
    /**
     * 按钮宽度, 选填
     * 默认单位为rpx
     */
    width: {
      type: Number,
      default: undefined,
    },
    /**
     * 非图标按钮的大小规格，选填
     * 包括'normal'、'mini'两类
     */
    size: {
      type: String,
      value: 'normal',
    },
  },
});
