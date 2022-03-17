Component({
  externalClasses: ['a-class', 'a-class-item'],

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
    iconName: {
      type: String,
      value: 'star_fill',
    },
    // 指定图标大小，单位rpx
    iconSize: {
      type: Number,
      value: 92,
    },
    iconColor: {
      type: String,
      value: '#d8d8d8',
    },
    iconActiveColor: {
      type: String,
      value: '#ffb500',
    },
    disabled: {
      type: Boolean,
      value: false,
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
