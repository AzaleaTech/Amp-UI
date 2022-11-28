Component({
  externalClasses: ['a-class'],

  relations: {
    '../Button/index': {
      type: 'child',
    },
  },

  properties: {
    size: {
      type: String,
      value: 'default',
    },
    entire: {
      type: Boolean,
      value: false,
    },
  },

  lifetimes: {
    ready() {
      const targets = this.getRelationNodes('../Button/index');
      if (targets.length === 2 && this.properties.entire) {
        targets[0].setData({
          childType: 'left',
          circle: true,
          size: this.properties.size,
          type: 'default',
        });
        targets[targets.length - 1].setData({
          childType: 'right',
          circle: true,
          size: this.properties.size,
          type: 'primary',
        });
      } else if (targets.length > 1) {
        targets[targets.length - 1].setData({
          childType: 'last',
          size: this.properties.size,
        });
        for (let i = 0; i < targets.length - 1; i += 1) {
          targets[i].setData({
            childType: 'normal',
            size: this.properties.size,
          });
        }
      }
    },
  },
});
