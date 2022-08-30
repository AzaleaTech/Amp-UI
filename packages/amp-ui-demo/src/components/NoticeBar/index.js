import { getNodeRectFromComponent } from './utils/node-utils.js';

Component({
  externalClasses: ['a-class'],

  options: {
    pureDataPattern: /^_/, // 指定所有 _ 开头的和delay数据字段为纯数据字段
  },

  properties: {
    text: {
      type: String,
      value: '',
    },
    iconUrl: {
      type: String,
      value: '',
    },
    iconName: {
      type: String,
      value: '',
    },
    iconColor: {
      type: String,
      value: '',
    },
    iconSize: {
      type: Number,
      value: 60,
    },
    roll: {
      type: Boolean,
      value: true,
      observer(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.destroyTimer();
          newVal && !this.data.vertical ? this.initAnimation() : this.resetAnimation(0);
        }
      },
    },
    vertical: {
      type: Boolean,
      value: false,
      observer(newVal, oldVal) {
        newVal !== oldVal && this.data.roll && !newVal && this.initAnimation();
      },
    },
    delay: {
      type: Number,
      value: 400,
      observer(newVal, oldVal) {
        newVal !== oldVal && this.isAnimation() && this.initAnimation();
      },
    },
    speed: {
      type: Number,
      value: 100,
      observer(newVal, oldVal) {
        newVal !== oldVal && this.isAnimation() && this.initAnimation();
      },
    },
    swiperArr: {
      type: Array,
      value: [],
    },
    current: {
      type: Number,
      value: 0,
    },
    clearable: {
      type: Boolean,
      value: false,
    },
  },

  lifetimes: {
    attached() {
      this.isAnimation() && this.initAnimation();
    },

    detached() {
      this.destroyTimer();
    },
  },

  methods: {
    isAnimation() {
      return this.data.roll && !this.data.vertical;
    },

    async initAnimation() {
      this.destroyTimer();
      const content = await getNodeRectFromComponent(this, '.a-notice-bar-content');
      const contentWrap = await getNodeRectFromComponent(this, '.a-notice-bar-wrap');
      const _duration = ((content.width + contentWrap.width) * 2000) / this.data.speed;
      const _animation = wx.createAnimation({
        _duration,
        timingFunction: 'linear',
      });

      this.setData(
        {
          _wrapWidth: contentWrap.width,
          _width: content.width,
          _duration,
          _animation,
        },
        () => {
          this.startAnimation();
        },
      );
    },

    startAnimation() {
      const { _wrapWidth, _width } = this.data;

      this.resetAnimation(_wrapWidth);
      this.moveAnimation(-_width);
      this.reStartAnimation();
    },

    // 慢慢移动到position处
    moveAnimation(position) {
      const { _duration, _animation, delay } = this.data;
      _animation.option.transition.duration = _duration;
      const animationData = _animation.translateX(position).step();
      const _startTimer = setTimeout(() => {
        this.setData({
          animationData: animationData.export(),
        });
      }, delay);

      this.setData({
        _startTimer,
      });
    },

    reStartAnimation() {
      const { _duration, delay } = this.data;
      const _reStartTimer = setTimeout(() => {
        this.startAnimation();
      }, _duration + delay);

      this.setData({
        _reStartTimer,
      });
    },

    // 快速复原到position处
    resetAnimation(position) {
      const { _animation } = this.data;

      if (_animation.option.transition.duration !== 0) {
        _animation.option.transition.duration = 0;
        const resetAnimation = _animation.translateX(position).step();
        this.setData({
          animationData: resetAnimation.export(),
        });
      }
    },

    destroyTimer() {
      const { _reStartTimer, _startTimer } = this.data;
      if (_reStartTimer || _startTimer) {
        clearTimeout(_startTimer);
        clearTimeout(_reStartTimer);
      }
    },

    handleTap() {
      const { type, text, swiperArr } = this.data;
      type !== 'swiper' && text && this.triggerEvent('click', { value: text });
      type === 'swiper' &&
        swiperArr.length !== 0 &&
        this.triggerEvent('click', { value: swiperArr });
    },

    handleChange(e) {
      this.setData({
        current: e.detail.current,
      });
      this.triggerEvent('change', { value: e.detail });
    },

    handleClear() {
      this.triggerEvent('clear', { value: this.data.current });
    },
  },
});
