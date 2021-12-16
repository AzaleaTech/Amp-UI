import eventBus from '../../utils/event-bus';
import tools from '../../utils/tools';

const defaultData = {
  selectedDate: '', //选中的几月几号
  selectedWeek: '', //选中的是星期几
  selectedIndex: 0, // 选中的是第几行的日期
  weeklySchedule: ['日', '一', '二', '三', '四', '五', '六'],
  dateList: [], // 需要渲染的所有的日期
  rangeDate: [], // range模式下存放的两个对应日期
};
const weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
let nowEvent = ''; // 初始化的时候拿到的event(日期上面的标注（例如：国庆节）)
const daysCountArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

Component({
  externalClasses: ['a-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    // 日历上显示某一天标记的功能
    markers: {
      type: Array,
      value: [],
    },
    type: {
      type: String,
    },
    defaultValue: {
      type: [String, Number, Date, Array],
    },
  },

  /**
   * 组件的初始数据
   */
  data: defaultData,

  lifetimes: {
    // 在这个生命周期中只能拿到传参的初始值(就是页面data中的值)
    attached() {
      // 最小日期
      const minDate = new Date(`${tools.formatDate(new Date(), 'yyyy-MM-dd')} 00:00`);
      const nowYear = minDate.getFullYear();
      const nowMonth = minDate.getMonth(); // 当前月份-1
      // 最大日期
      const maxDate =
        nowMonth + 12 > 12
          ? new Date(
              `${nowYear + 1}-${nowMonth}-${tools.getMonthDays(nowYear + 1, nowMonth - 1)} 23:59`,
            )
          : new Date(
              `${nowYear}-${nowMonth + 12}-${tools.getMonthDays(nowYear, nowMonth + 11)} 23:59`,
            );
      const { defaultValue } = this.data;
      const initDay = this.getInitDay(minDate, maxDate, defaultValue);

      initDay && this.initCurDate(...initDay);
    },

    detached() {
      // 在组件实例被从页面节点树移除时执行
      // 切换页面,组件消亡this.data里面的数据并不会回收而是存在内存中了?为啥?
      // 组件消亡this.data里面的数据并不会回收而是存在内存中了,这里做了简单处理，不能根除
      // 猜测小程序的组件在实例化的时候，内部必然data做了深拷贝来隔离数据。以下defaultData依然是原来的初始值
      this.setData(defaultData);
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取初始化时间
    getInitDay(minDate, maxDate, defaultValue) {
      if (this.data.type === 'date' || this.data.type === 'datetime') {
        return tools.compareDate(minDate, defaultValue, true) &&
          tools.compareDate(defaultValue, maxDate, true)
          ? tools.getDateFormat(defaultValue)
          : [minDate];
      }
      if (this.data.type === 'range') {
        if (Array.isArray(defaultValue)) {
          const [startDate, endDate] = defaultValue;
          if (
            tools.compareDate(startDate, endDate) &&
            tools.compareDate(minDate, startDate) &&
            tools.compareDate(endDate, maxDate, true)
          ) {
            const initDay = tools.getDateFormat(startDate, endDate);
            return [initDay[0], initDay];
          } else {
            return [minDate];
          }
        } else {
          return [minDate];
        }
      }
    },

    // 初始化显示日期
    initCurDate(initDay, initDayArr) {
      const curYear = initDay.getFullYear();
      const curMonth = initDay.getMonth() + 1;
      const curDay = initDay.getDate();
      const i = initDay.getDay();
      const selectedDate = tools.getDateTemplateWithZero(curMonth, curDay, curYear);
      const selectedWeek = weekArr[i];
      const headerDateText = tools.getDateTemplateWithText(curMonth, curDay, curYear);
      const selectedStamp = new Date(`${selectedDate} 00:00:00`).getTime();
      const headerRangeText = tools.getDateTemplateWithText(curMonth, curDay);
      const today = new Date();
      const nowYear = today.getFullYear();
      const nowMonth = today.getMonth();
      const nowDay = today.getDate();

      this.setData({
        selectedDate,
        selectedWeek,
        selectedStamp,
      });
      // 初始化所有的时间、事件、传来的节日标注、style
      this.getDateList(nowYear, nowMonth, nowDay);
      eventBus.emit('curDate', {
        selectedDate,
        selectedWeek,
        selectedStamp,
        event: nowEvent,
        headerDateText,
      });
      if (this.data.type === 'range') {
        const { rangeDate } = this.data;

        rangeDate.push({
          selectedDate,
          selectedStamp,
          headerRangeText,
        });
        if (initDayArr) {
          const curYear = initDayArr[1].getFullYear();
          const curMonth = initDayArr[1].getMonth() + 1;
          const curDay = initDayArr[1].getDate();
          const selectedDate = tools.getDateTemplateWithZero(curMonth, curDay, curYear);
          const selectedStamp = new Date(`${selectedDate} 00:00:00`).getTime();
          const headerRangeText = tools.getDateTemplateWithText(curMonth, curDay);

          rangeDate.push({
            selectedDate,
            selectedStamp,
            headerRangeText,
          });
        }
        this.setData({
          rangeDate,
        });
        eventBus.emit('rangeDate', this.data.rangeDate);
      }
    },

    getDateList(NowYear, NowMon, NowDay) {
      const dateList = [];
      dateList[0] = [];
      const nowDateMon = NowMon + 1;
      const nowDateDay = NowDay;
      const nowDateObj = {
        nowDate: nowDateMon + '-' + nowDateDay, // 1-1
        nowDateFormat: tools.getDateTemplateWithZero(nowDateMon, nowDateDay),
      };
      let year = NowYear;
      let weekIndex = 0;

      // 这个for循环就是实现这个月加上未来11个月的
      for (let m = NowMon; m <= NowMon + 11; m++) {
        let mon = m;
        if (mon > 11) {
          mon = mon - 12;
          if (year === NowYear) {
            year += 1;
          }
        }
        // 判断闰年
        daysCountArr[1] = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;

        // 遍历生成某一个月的数据
        for (let i = 0; i < daysCountArr[mon]; i++) {
          let week = new Date(Date.UTC(year, mon, i + 1)).getDay();
          const date = tools.getDateTemplateWithZero(mon + 1, i + 1, year);
          const time = tools.getDateTemplateWithZero(mon + 1, i + 1);
          const stamp = new Date(`${date} 00:00:00`).getTime();
          const subValue = i === 0 ? `${mon + 1}月` : '';

          date === this.data.selectedDate && this.setData({ selectedIndex: weekIndex });

          dateList[weekIndex].push({
            value: date, // "2021-12-01"
            time, // "12-01"
            subValue,
            dateTime: mon + 1 + '-' + (i + 1), // "12-1"
            date: i + 1,
            week: week,
            disabled: false,
            stamp,
          });

          if (week === 6) {
            weekIndex++;
            dateList[weekIndex] = [];
          }
        }
      }
      this.data.dateList = dateList;

      // 统一setData(防止出现闪屏)
      this.addMark(nowDateObj);

      // 让当前选中日期之前日期无法选中
      this.disabledBeforeToday();
    },

    // 添加标记
    addMark(nowDateObj) {
      const { markers, dateList } = this.data;

      dateList.forEach((i) => {
        i.forEach((j) => {
          // 添加文字标记
          for (let k in markers) {
            if (
              j.time === markers[k].date ||
              j.value === markers[k].date ||
              j.dateTime === markers[k].date
            ) {
              j.event = markers[k].text ? markers[k].text : '';
              j.disabled = markers[k].disabled ? markers[k].disabled : false;
              j.bgColor = markers[k].bgColor ? markers[k].bgColor : '';
            }
            // 初始化今日的event
            (nowDateObj.nowDate === markers[k].date ||
              nowDateObj.nowDateFormat === markers[k].date) &&
              (nowEvent = markers[k].text ? markers[k].text : '');
          }
        });
      });
      this.setData({
        dateList,
      });
    },

    // 今天之前的时间禁止选中
    disabledBeforeToday() {
      const today = new Date(tools.formatDate(new Date(), 'yyyy-MM-dd')); // TODO 转化为年月份00:00:00
      const { dateList } = this.data;

      dateList.forEach((i) => {
        i.forEach((j) => {
          const forDate = new Date(j.value);
          j.disabled = forDate < today;
        });
      });
      this.setData({
        dateList,
      });
    },

    // 重置禁止选中区域
    resetDisabled(date) {
      // range时候让当前选中日期之前日期无法选中
      const { dateList } = this.data;

      dateList.forEach((i) => {
        i.forEach((j) => {
          const forDate = new Date(j.value);
          const selectDate = new Date(date);
          // 循环的时间小于选中时间，前面的日期无法选中
          j.disabled = forDate < selectDate;
        });
      });
      this.setData({
        dateList,
      });
    },

    // 选中日期
    selectDate(e) {
      const dateObj = e.currentTarget.dataset.date;
      const selectedDate = dateObj.value;
      const { dateTime } = dateObj;
      const selectedWeek = weekArr[dateObj.week];
      const event = dateObj.event;
      const headerDateText = tools.getDateTemplateWithText(
        dateTime.split('-')[0],
        dateTime.split('-')[1],
        selectedDate.split('-')[0],
      );
      const headerRangeText = tools.getDateTemplateWithText(
        dateTime.split('-')[0],
        dateTime.split('-')[1],
      );
      const selectedStamp = new Date(`${selectedDate} 00:00:00`).getTime();

      // 公共选择动作
      const selectAction = () => {
        this.setData({
          selectedDate,
          selectedWeek,
          selectedStamp,
        });
        eventBus.emit('curDate', {
          selectedDate,
          selectedWeek,
          selectedStamp,
          event: event ? event : '',
          headerDateText,
        });
      };
      // switch 内申明变量每一个case都可以访问到，整个的switch是一个作用域
      switch (this.data.type) {
        case 'date':
          selectAction();
          break;
        case 'range':
          // 清空选中数组
          this.data.rangeDate.length === 2 && this.setData({ rangeDate: [] });

          const { rangeDate } = this.data;
          // 边界情况，选同一天
          if (rangeDate.length === 1 && rangeDate[0].selectedStamp >= selectedStamp) {
            return;
          }
          // 进行push操作
          rangeDate.push({
            selectedDate,
            selectedStamp,
            headerRangeText,
          });
          this.setData({
            rangeDate,
          });

          // push之后的操作

          // 重置禁止选中区域
          this.data.rangeDate.length === 1 &&
            this.resetDisabled(e.currentTarget.dataset.date.value);

          // 清空disabled
          this.data.rangeDate.length === 2 && this.disabledBeforeToday();

          // 发给兄弟组件header
          eventBus.emit('rangeDate', this.data.rangeDate);
          break;
        case 'datetime':
          selectAction();
          break;
        default:
          throw new Error('错误type');
          break;
      }
    },
  },
});
