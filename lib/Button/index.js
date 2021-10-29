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
  externalClasses: ['a-class'],

  relations: {
    '../ButtonGroup/index': {
      type: 'parent',
      /**
       * 获取并同步按钮组的统一格式，当Button有单独定义时不生效
       * @param {*} target 父组件Form节点
       */
      linked(target) {
        if (!this.properties.size && target.data.size) {
          this.setData({ size: target.data.size });
        }
      },
    },
  },

  properties: {
    circle: {
      type: Boolean,
      value: false,
    },
    block: {
      type: Boolean,
      value: false,
    },
    size: {
      type: String,
      value: '',
    },
    type: {
      type: String,
      value: 'default',
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    openType: {
      type: String,
      value: '',
    },
    formType: {
      type: String,
      value: '',
    },
  },

  data: {
    // button-group父组件传入的按钮样式
    childType: false,
  },

  lifetimes: {
    ready() {
      if (!this.data.size) {
        this.setData({
          size: 'default ',
        });
      }
    },
  },

  methods: {
    /**
     * 点击结束抑制按钮，若未被禁用则提供点击事件
     */
    handleTouchEnd: debounce(function () {
      if (!this.properties.disabled) {
        this.triggerEvent('click');
      }
    }),

    handleContact(e) {
      this.triggerEvent('contact', { value: e.detail });
    },

    handleGetUserInfo(e) {
      this.triggerEvent('getuserinfo', { value: e.detail });
    },

    handleOpenSetting(e) {
      this.triggerEvent('opensetting', { value: e.detail });
    },

    handleLaunchApp(e) {
      this.triggerEvent('launchapp', { value: e.detail });
    },

    handleGetPhoneNumber(e) {
      this.triggerEvent('getphonenumber', { value: e.detail });
    },

    handleError(e) {
      this.triggerEvent('error', { value: e.detail });
    },
  },
});
