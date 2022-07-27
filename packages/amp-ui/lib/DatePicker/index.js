import tools from './utils/tools';

Component({
  externalClasses: ['a-class'],

  properties: {
    type: {
      type: String,
      value: 'date',
      options: ['date', 'range', 'time', 'datetime'],
    },
    markers: {
      type: Array,
      value: [],
    },
    show: {
      type: Boolean,
      value: false,
    },
    valueFormat: {
      type: String,
      value: 'timestamp', // yyyy-MM-dd hh:mm:ss等任意组合 注意大小写
    },
    format: {
      type: Function,
    },
    defaultValue: {
      type: [String, Number, Date, Array],
    },
  },

  data: {
    textStyle: '',
  },

  methods: {
    // 返回模板格式时间
    getFormatTemplate(e) {
      const { valueFormat } = this.data;
      let template = '';

      switch (this.data.type) {
        case 'date':
          template =
            valueFormat === 'timestamp'
              ? e.detail.selectedStamp
              : tools.formatDate(e.detail.selectedStamp, valueFormat);
          break;
        case 'range':
          template = [];
          e.detail.forEach((item) => {
            template.push(
              valueFormat === 'timestamp'
                ? item.selectedStamp
                : tools.formatDate(item.selectedStamp, valueFormat),
            );
          });
          break;
        case 'time':
          template = e.detail.time;
          break;
        case 'datetime':
          const datetime = e.detail.selectedDate + ' ' + e.detail.time.time;
          const datetimeStamp = new Date(datetime).getTime();
          template =
            valueFormat === 'timestamp'
              ? datetimeStamp
              : tools.formatDate(datetimeStamp, valueFormat);
          break;
        default:
          throw new Error('错误type');
      }

      return template;
    },

    handleRemould(e) {
      this.setData({
        textStyle: e.detail,
      });
    },

    closeDialog() {
      this.setData({
        show: false,
        textStyle: '',
      });
      this.triggerEvent('cancel');
    },

    sendEvent(event, e) {
      this.triggerEvent(event, {
        value: this.getFormatTemplate(e),
        label: this.data.format(this.getFormatTemplate(e)),
      });
    },

    // 输出格式{value: 'xxx', label: 'xxx'}
    // 确定按钮
    handleClick(e) {
      this.sendEvent('confirm', e);
      this.setData({
        show: false,
        textStyle: '',
      });
    },
  },
});
