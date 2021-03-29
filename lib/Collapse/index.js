Component({
  properties: {
    /**
     * 折叠列表参数，必填
     * @property {string} content       -列表项内容
     * @property {string} [detail]      -列表项详情
     * @property {array}  [children]    -列表项子项数组，格式与上同
     * @example 
     * {
     *  content: '',
     *  detail: '',
     *  clickable:'',
     *  children: [],
     * }
     */
    options: {
      type: Array,
      default: [],
    },
  },

  methods: {
    /**
     * 处理点击动作
     * 当为父项时控制折叠
     */
    handleCollapse(e) {
      const { index } = e.currentTarget.dataset;
      if (this.properties.options[index].children) {
        this.setData({ [`options[${index}].opened`]: !this.properties.options[index].opened });
      }
    },

    /**
     * 处理子项的点击动作并回传点击事件和子项内容
     */
    handleCollapseChild(e) {
      this.triggerEvent('collapse', e.currentTarget.dataset.item);
    },
  }
})