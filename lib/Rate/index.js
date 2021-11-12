Component({
  externalClasses: ['a-class'],

  properties: {
    // star数量, 默认5
    count: {
      type: Number,
      value: 5,
    },
    // 展示评分, 默认最大分值为count数
    value: {
      type: Number,
      value: 0,
    },
    // 指定图标大小，单位rpx
    size: {
      type: String,
      value: '50',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    images: ['./images/star-unselected.png', './images/star-selected.png'],
    style: null,
  },

  lifetimes: {
    ready() {
      this.setData({
        style: `width: ${this.properties.size}rpx; height: ${this.properties.size}rpx`,
      });
    },
  },

  methods: {
    handleClick(e) {
      if (!this.data.disabled) {
        const { index } = e.currentTarget.dataset;
        this.setData({ value: index + 1 });
        this.triggerEvent('change', {
          value: index + 1,
        });
      }
    },
  },
});
