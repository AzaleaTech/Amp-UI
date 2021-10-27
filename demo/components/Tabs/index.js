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
    // 滚动标志
    scroll: false,
    // 当前tab索引
    currentIndex: 0,
  },

  lifetimes: {
    attached() {
      this.setData({ currentIndex: this.properties.current });
    },

    ready() {
      this.setScroll();
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

    /**
     * 判定导航栏是否需要设为滚动状态
     */
    setScroll() {
      // 小程序支持的最大RPX宽度
      const MAX_WIDTH = 750;
      // 滚动状态下tab间距
      const TAB_MARGIN = 64;
      // 滚动状态下滚动条边距
      const TABBAR_PADDING = 60;
      // tab个数
      const length = this.properties.tabList.length;
      // rpx与px转换倍数
      const rpxMultiple = MAX_WIDTH / wx.getSystemInfoSync().windowWidth;
      // 总宽度
      let totalWidth = 0;
      const query = wx.createSelectorQuery().in(this);
      // 获取各个tab节点数据
      for (let i = 0; i < length; i += 1) {
        query.select(`.tab-${i}`).boundingClientRect();
      }
      query.exec((res) => {
        // 计算tab纯文本总宽度
        for (let i = 0; i < length; i += 1) {
          totalWidth += rpxMultiple * res[i].width;
        }
        // 添加各个边距宽度
        totalWidth += TAB_MARGIN * (length - 1) + TABBAR_PADDING;
        // 超过页面宽度则设定为滚动
        if (totalWidth > MAX_WIDTH) {
          this.setData({ scroll: true });
        }
      });
    },
  },
});
