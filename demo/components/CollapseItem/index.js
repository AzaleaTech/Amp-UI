Component({
  relations: {
    '../Collapse/index': {
      type: 'parent',
      linked(target) {
        if (target.data.iconColor && !this.properties.iconColor) {
          this.setData({ iconColor: target.data.iconColor });
        }
      },
    },
  },

  options: {
    multipleSlots: true,
  },

  properties: {
    name: {
      type: String,
      value: '',
    },
    title: {
      type: String,
      value: '',
    },
    value: {
      type: String,
      value: '',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    content: {
      type: Array,
      value: [],
    },
    iconColor: {
      type: String,
      value: '',
    },
  },

  data: {
    // 控制当前项的展开合拢
    expand: false,
    // 判断是否是最后一项
    last: false,
  },

  lifetimes: {
    ready() {
      this.data.parent = this.getRelationNodes('../Collapse/index')[0];
      this.handleCollapse();
      if (!this.properties.name) {
        console.error('collapse-item组件缺少"name"属性');
      }
    },
  },

  methods: {
    handleCollapse() {
      if (!this.data.parent) {
        return;
      }
      const { value } = this.data.parent.data;
      this.setData({
        expand: value.some((name) => name + '' === this.properties.name),
      });
    },

    handleCollapseItem() {
      if (this.data.disabled) {
        return;
      }
      this.data.parent.changeExpandList(this.properties.name, !this.data.expand);
    },

    handleContent(e) {
      this.triggerEvent('click', { value: e.currentTarget.dataset.item });
    },
  },
});
