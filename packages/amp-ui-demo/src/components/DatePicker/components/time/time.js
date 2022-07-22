import eventBus from '../../utils/event-bus';
import tools from '../../utils/tools';

const hours = [];
const minutes = [];

for (let i = 0; i < 24; i++) {
  hours.push(i);
}
for (let i = 0; i < 60; i++) {
  minutes.push(i);
}
Component({
  externalClasses: ['a-class'],

  properties: {
    type: String,
    defaultValue: {
      type: [String, Number, Date, Array],
    },
  },

  data: {
    hours,
    minutes,
    hour: '',
    time: '',
    minute: '',
    value: [],
  },

  lifetimes: {
    attached() {
      const toDay = new Date(`${tools.formatDate(new Date(), 'yyyy-MM-dd')} 00:00`);
      const { defaultValue } = this.data;

      if (this.data.type === 'datetime') {
        const curDay = new Date(`${tools.formatDate(new Date(defaultValue), 'yyyy-MM-dd hh:mm')}`);
        const initDay = curDay >= toDay ? curDay : toDay;
        this.initinitCurDateTime(initDay);
      }
      if (this.data.type === 'time') {
        this.initinitCurDateTime(new Date());
      }
    },
  },

  methods: {
    initinitCurDateTime(initDay) {
      const hour = initDay.getHours();
      const minute = initDay.getMinutes();
      const value = [hour, minute];
      const time = tools.getTimeTemplateWithZero(hour, minute);

      this.setData({
        value,
        time,
        hour,
        minute,
      });
      eventBus.emit('time', { hour, minute, time });
    },

    bindChange(e) {
      const val = e.detail.value;
      const hour = this.data.hours[val[0]];
      const minute = this.data.minutes[val[1]];
      const time = tools.getTimeTemplateWithZero(hour, minute);

      this.setData({
        hour,
        minute,
        time,
      });
      eventBus.emit('time', { hour, minute, time });
    },
  },
});
