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
      value: 100,
    },
    iconColor: {
      type: String,
      value: '#d8d8d8',
    },
    activeIconColor: {
      type: String,
      value: '#ffb500',
    },
    showHalf: {
      type: Boolean,
      value: false,
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
        // 当前点击位置
        const { x } = e.detail;
        const { showHalf } = this.properties;
        let value;
        // 第一个图标左边距
        let iconLeft;
        // 图标宽度
        let iconWidth;
        let query = this.createSelectorQuery();
        query
          .select('.a-rate-item')
          .boundingClientRect((res) => {
            iconLeft = res.left;
            iconWidth = res.width;
            // 判断当前点击位置
            if (showHalf && x < iconLeft + (iconWidth * (2 * index + 1)) / 2) {
              value = index + 0.5;
            } else {
              value = index + 1;
            }
            this.setData({ value });
            this.triggerEvent('change', {
              value,
            });
          })
          .exec();
      }
    },
  },
});
