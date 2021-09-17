/**
 * 防抖函数
 * @param {*} func 执行函数
 * @param {*} interval 时间间隔 默认:1s
 * @param {*} immediate 是否立即执行 默认:true
 * @returns
 */
function debounce(func, interval = 1000, immediate = true) {
  let timer;
  return function () {
    clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, interval);
      if (callNow) func.apply(this, arguments);
    } else {
      timer = setTimeout(() => {
        func.apply(this, arguments);
      }, interval);
    }
  };
}

Component({
  relations: {
    '../ButtonGroup/index': {
      type: 'parent',
      /**
       * 获取并同步按钮组的统一格式，当Button有单独定义时不生效
       * @param {*} target 父组件Form节点
       */
      linked(target) {
        if (!this.properties.width && target.data.width) {
          this.setData({ width: target.data.width });
        }
        if (!this.properties.size && target.data.size) {
          this.setData({ size: target.data.size });
        }
      },
    },
  },

  properties: {
    /**
     * 按钮样式，选填
     * 包括'primary'、'default'、'icon'三类
     */
    type: {
      type: String,
      value: 'default',
    },
    /**
     * 非图标按钮的大小规格，选填
     * 包括'normal'、'mini'两类
     */
    size: {
      type: String,
      value: '',
    },
    /**
     * 图标地址，选填
     */
    iconUrl: {
      type: String,
      value: undefined,
    },
    /**
     * 按钮宽度, 选填
     * 默认单位为rpx
     */
    width: {
      type: Number,
      value: undefined,
    },
    /**
     * 禁用按钮，选填
     */
    disabled: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    // 按钮当前激活状态
    active: false,
    // button-group父组件传入的按钮样式
    childType: false,
  },

  lifetimes: {
    ready() {
      // 若无传入值和父组件统一设置则初始化默认值
      if (!this.properties.size) {
        this.setData({ size: 'normal' });
      }
    },
  },

  methods: {
    /**
     * 点击开始激活按钮
     */
    handleTouchStart() {
      this.setData({ active: true });
    },

    /**
     * 点击结束抑制按钮，若未被禁用则提供点击事件
     */
    handleTouchEnd: debounce(function () {
      this.setData({ active: false });
      if (!this.properties.disabled) {
        this.triggerEvent('click');
      }
    }),
  },
});
