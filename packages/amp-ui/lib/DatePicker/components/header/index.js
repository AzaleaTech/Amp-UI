import eventBus from '../../utils/event-bus';

Component({
  properties: {
    type: String,
  },

  data: {
    event: '',
    selectedDate: '',
    selectedWeek: '',
    selectedStamp: '',
    headerDateText: '',
    rangeDate: [],
    time: {},
    textStyle: 'leftDate',
  },

  lifetimes: {
    attached() {
      this.eventBusDateFun = (date) => {
        this.setData({
          selectedDate: date.selectedDate,
          selectedWeek: date.selectedWeek,
          event: date.event,
          headerDateText: date.headerDateText,
          selectedStamp: date.selectedStamp,
        });
      };

      this.eventBusRangeFun = (date) => {
        this.setData({ rangeDate: date });
      };

      this.eventBusTimeFun = (date) => {
        this.setData({ time: date });
      };

      this.changeCurDate();
    },

    detached() {
      // 在组件实例被从页面节点树移除时执行
      // 移除消息队列中的函数
      eventBus.off('curDate', this.eventBusDateFun);
      eventBus.off('rangeDate', this.eventBusRangeFun);
      eventBus.off('time', this.eventBusTimeFun);
    },
  },

  methods: {
    handleTap(e) {
      switch (this.data.type) {
        case 'date':
          this.triggerEvent('click', {
            event: this.data.event,
            selectedDate: this.data.selectedDate,
            selectedWeek: this.data.selectedWeek,
            selectedStamp: this.data.selectedStamp,
          });
          break;
        case 'range':
          // 选中两个时间才可以点击确定
          this.data.rangeDate.length === 2 && this.triggerEvent('click', this.data.rangeDate);
          break;
        case 'time':
          this.triggerEvent('click', this.data.time);
          break;
        case 'datetime':
          this.triggerEvent('click', {
            event: this.data.event,
            selectedDate: this.data.selectedDate,
            selectedWeek: this.data.selectedWeek,
            time: this.data.time,
          });
          break;
        default:
          throw new Error('错误信息');
      }
    },

    handleChange(e) {
      const { type } = e.currentTarget.dataset;
      this.setData({
        textStyle: type,
      });
      this.triggerEvent('remould', type);
    },

    changeCurDate() {
      switch (this.data.type) {
        case 'date':
          eventBus.on('curDate', this.eventBusDateFun);
          break;
        case 'range':
          eventBus.on('rangeDate', this.eventBusRangeFun);
          break;
        case 'time':
          eventBus.on('time', this.eventBusTimeFun);
          break;
        case 'datetime':
          eventBus.on('curDate', this.eventBusDateFun);
          eventBus.on('time', this.eventBusTimeFun);
          break;
        default:
          throw new Error('错误信息');
          break;
      }
    },
  },
});
