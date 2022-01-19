import { getNodeRectFromComponent } from './utils/node-utils.js';

Component({
  externalClasses: ['a-class'],

  properties: {
    text: {
      type: String,
      value: '',
    },
    color: {
      type: String,
      value: '',
    },
    bgColor: {
      type: String,
      value: '',
    },
    leftSrc: {
      type: String,
      value: '',
    },
    leftIcon: {
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
    //roll | swiper | static
    type: {
      type: String,
      value: 'roll',
    },
    delay: {
      type: Number,
      value: 400,
    },
    speed: {
      type: Number,
      value: 100,
    },
    swiperArr: {
      type: Array,
      value: [],
    },
  },

  lifetimes: {
    attached() {
      this.data.type === 'roll' && this.initAnimation();
    },
    detached() {
      this.destroyTimer();
    },
  },
  methods: {
    async initAnimation() {
      const content = await getNodeRectFromComponent(this, '.a-notice-bar-content');
      const contentWrap = await getNodeRectFromComponent(this, '.a-notice-bar-wrap');
      const duration = ((content.width + contentWrap.width) * 2000) / this.data.speed;
      const animation = wx.createAnimation({
        duration: duration,
        timingFunction: 'linear',
      });

      this.setData(
        {
          wrapWidth: contentWrap.width,
          width: content.width,
          duration: duration,
          animation: animation,
        },
        () => {
          this.startAnimation();
        },
      );
    },

    startAnimation() {
      //reset
      if (this.data.animation.option.transition.duration !== 0) {
        this.data.animation.option.transition.duration = 0;
        const resetAnimation = this.data.animation.translateX(this.data.wrapWidth).step();
        this.setData({
          animationData: resetAnimation.export(),
        });
      }
      this.data.animation.option.transition.duration = this.data.duration;
      const animationData = this.data.animation.translateX(-this.data.width).step();
      const startTimer = setTimeout(() => {
        this.setData({
          animationData: animationData.export(),
        });
      }, this.data.delay);
      const reStartTimer = setTimeout(() => {
        this.startAnimation();
      }, this.data.duration + this.data.delay);

      this.setData({
        startTimer,
        reStartTimer,
      });
    },

    destroyTimer() {
      if (this.data.reStartTimer || this.data.startTimer) {
        clearTimeout(this.data.startTimer);
        clearTimeout(this.data.reStartTimer);
      }
    },
    handleTap() {
      const { type, text, swiperArr } = this.data;
      type !== 'swiper' && text && this.triggerEvent('click', text);
      type === 'swiper' && swiperArr.length !== 0 && this.triggerEvent('click', swiperArr);
    },
  },
});
