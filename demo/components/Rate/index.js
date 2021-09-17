Component({
  properties: {
    // star数量, 默认5
    count: {
      type: Number,
      value: 5,
    },
    // 展示评分, 默认最大分值为5
    value: {
      type: Number,
      value: 0,
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      value: false,
    },
    // star默认宽度, 单位rpx
    width: {
      type: Number,
      value: 80,
    },
    // star默认高度, 单位rpx
    height: {
      type: Number,
      value: 80,
    },
  },

  data: {
    images: ['./images/star-unselected.png', './images/star-selected.png'],
    style: null,
  },

  lifetimes: {
    ready() {
      this.setData({
        style: `width: ${this.properties.width}rpx; height: ${this.properties.height}rpx`,
      });
    },
  },

  methods: {
    handleClick(e) {
      if (!this.data.disabled) {
        const { index } = e.currentTarget.dataset;
        this.setData({ value: index + 1 });
        this.triggerEvent('change', {
          index: index + 1,
        });
      }
    },
  },
});
