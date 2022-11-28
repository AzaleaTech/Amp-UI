Component({
  properties: {
    tabList: {
      type: Array,
      default: [],
    },
    current: {
      type: Number,
      default: 0,
    },
    ceiling: {
      type: Boolean,
      default: false,
    },
  },

  data: {
    // 当前tab索引
    currentIndex: 0,
  },

  lifetimes: {
    attached() {
      this.setData({ currentIndex: this.properties.current });
    },
  },

  methods: {
    /**
     * 父组件取得当前tab索引
     */
    switchTab(e) {
      const { current } = e.currentTarget.dataset;
      if (this.data.currentIndex !== current) {
        this.setData({ currentIndex: current });
      }
      this.triggerEvent('change', { value: current });
    },
  },
});
