Component({
  relations: {
    '../CollapseItem/index': {
      type: 'child',
    },
  },

  properties: {
    value: {
      type: Array,
      value: [],
    },
    accordion: {
      type: Boolean,
      value: false,
    },
  },

  lifetimes: {
    ready() {
      this.data.children = this.getRelationNodes('../CollapseItem/index');
      this.data.children[this.data.children.length - 1].setData({
        last: true,
      });
    },
  },

  methods: {
    handleCollapse() {
      this.data.children.forEach((child) => {
        child.handleCollapse();
      });
    },

    changeExpandList(name, expand) {
      if (expand) {
        if (this.properties.accordion) {
          this.setData({
            value: [name],
          });
        } else {
          this.data.value.push(name);
          this.setData({
            value: this.data.value,
          });
        }
        this.triggerEvent('open', { value: name });
      } else {
        this.setData({
          value: this.data.value.filter((activeName) => activeName !== name),
        });
        this.triggerEvent('close', { value: name });
      }
      this.handleCollapse();
    },
  },
});
