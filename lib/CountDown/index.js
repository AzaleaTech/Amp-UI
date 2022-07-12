Component({
  externalClasses: ['a-class'],

  properties: {
    value: {
      type: Number,
      value: 0,
    },
    format: {
      type: Object,
      value: { day: '天', hour: '时', minute: '分', second: '秒' },
    },
  },

  data: {
    timer: null,
    showTime: '',
    showDay: false,
    showHour: false,
    showMinute: false,
    showSecond: false,
  },

  ready() {
    this.init();
    this.initFormat();
  },

  detached() {
    if (this.data.timer) {
      clearTimeout(this.data.timer);
      this.data.timer = null;
    }
  },

  methods: {
    init() {
      this.data.timer = setTimeout(() => {
        this.countDown();
      }, 1000);
    },

    initFormat() {
      const { value } = this.data;
      if (value > 0) {
        this.data.showSecond = true;
      }
      if (value > 60) {
        this.data.showMinute = true;
      }
      if (value > 3600) {
        this.data.showHour = true;
      }
      if (value > 86400) {
        this.data.showDay = true;
      }
    },

    countDown() {
      if (this.data.value === 0) {
        this.triggerEvent('end');
        return;
      }
      this.data.value -= 1;
      this.triggerEvent('start', { value: this.data.value });
      let showTime = this.formatTime();
      this.setData({
        showTime,
      });
      this.init();
    },

    formatTime() {
      const { showDay, showHour, showMinute, showSecond, format } = this.data;
      const value = this.data.value;

      const day = this.formatNum(parseInt(value / 86400));
      let lastTime = value % 86400;
      const hour = this.formatNum(parseInt(lastTime / 3600));
      lastTime = lastTime % 3600;
      const minute = this.formatNum(parseInt(lastTime / 60));
      const second = this.formatNum(lastTime % 60);

      const time = `${showDay ? day + ' ' + format.day : ''} ${
        showHour ? hour + ' ' + format.hour : ''
      } ${showMinute ? minute + ' ' + format.minute : ''} ${
        showSecond ? second + ' ' + format.second : ''
      }`;

      return time;
    },

    formatNum(num) {
      return num > 9 ? num : `0${num}`;
    },
  },
});
