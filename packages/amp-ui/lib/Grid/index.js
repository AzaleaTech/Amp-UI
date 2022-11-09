Component({
  externalClasses: ['a-class'],

  relations: {
    '../GridItem/index': {
      type: 'child',
      linked(target) {
        const { columnNum, border, direction, iconSize, iconColor, clickable } = this.properties;
        this.createSelectorQuery()
          .select('.a-grid')
          .boundingClientRect((re) => {
            target.setData({
              width: re.width / columnNum, // 指定grid-item每项宽度
              direction,
              iconSize,
              iconColor,
              clickable,
            });
          })
          .exec();
        if (this.properties.border) {
          target.setData({
            border,
          });
        }
      },
    },
  },

  properties: {
    columnNum: {
      type: Number,
      value: 3,
    },
    border: {
      type: Boolean,
      value: false,
    },
    iconSize: {
      type: Number,
      value: 60,
    },
    iconColor: {
      type: Number,
      value: '',
    },
    // 'vertical' ｜ 'horizontal'
    direction: {
      type: String,
      value: 'vertical',
    },
    backgroundColor: {
      type: String,
      value: '#fff',
    },
    clickable: {
      type: Boolean,
      value: true,
    },
  },
});
