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

    handleScroll(e) {
      // 默认遮罩宽度 px
      const MARGIN = 32;
      // 页面宽度
      const WINDOW_HEIGHT = 375;
      const { scrollLeft, scrollWidth } = e.detail;
      if (scrollLeft > 0) {
        this.setData({
          showPrevModal: true,
        });
      } else {
        this.setData({
          showPrevModal: false,
        });
      }
      if (scrollWidth - WINDOW_HEIGHT - scrollLeft > MARGIN) {
        this.setData({
          showLastModal: true,
        });
      } else {
        this.setData({
          showLastModal: false,
        });
      }
    },
  },
});
