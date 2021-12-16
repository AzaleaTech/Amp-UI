// 时分补零
const getTimeTemplateWithZero = (hour, minute, second) => {
  if (second) {
    return `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${
      second < 10 ? '0' + second : second
    }`;
  } else {
    return `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}`;
  }
};

// 获取某一年某个月一共有几天
const getMonthDays = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

// 获取补零的时间模板
const getDateTemplateWithZero = (mon, day, year) => {
  if (year) {
    return year + '-' + `${mon >= 10 ? mon : '0' + mon}` + '-' + `${day >= 10 ? day : '0' + day}`;
  } else {
    return `${mon >= 10 ? mon : '0' + mon}` + '-' + `${day >= 10 ? day : '0' + day}`;
  }
};

// 获取中文的时间模板
const getDateTemplateWithText = (mon, day, year) => {
  if (year) {
    return `${year}年${mon}月${day}日`;
  } else {
    return `${mon}月${day}日`;
  }
};

/**
 * 按照指代的格式输出一个日期字符串
 * @param { Date | any } _date 待处理的日期，有效值：new Date()、1597827975722、'2020/08/19 17:06:5'......
 * @param { string } _template 待输出的日期模板，如 "yyyy-MM-dd hh:mm:ss"
 * @returns { string }
 */
const formatDate = (_date, _template) => {
  let date = _date;
  let template = _template;

  try {
    date = new Date(date);
  } catch {
    throw new Error(
      '函数 formatDate() 第一个参数必须为 Date 对象，或可以通过 new Date(arg) 转换为 Date 对象',
    );
  }

  if (/(y+)/.test(template)) {
    template = template.replace(RegExp.$1, `${date.getFullYear()}`.substr(4 - RegExp.$1.length));
  }

  const map = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
  };

  Object.keys(map).forEach((key) => {
    const value = map[key];

    if (new RegExp(`(${key})`).test(template)) {
      template = template.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? value : `00${value}`.substr(String(value).length),
      );
    }
  });

  return template;
};

// 比较日期大小
const compareDate = (startDate, endDate, includeEqual = false) => {
  startDate = new Date(`${formatDate(new Date(startDate), 'yyyy-MM-dd')} 00:00`);
  endDate = new Date(`${formatDate(new Date(endDate), 'yyyy-MM-dd')} 00:00`);
  if (includeEqual) {
    return endDate >= startDate;
  } else {
    return endDate > startDate;
  }
};

// 返回Date对象的日期
const getDateFormat = (startDate, endDate) => {
  const start = new Date(`${formatDate(new Date(startDate), 'yyyy-MM-dd')} 00:00`);
  const end = new Date(`${formatDate(new Date(endDate), 'yyyy-MM-dd')} 00:00`);
  if (startDate && endDate) {
    return [start, end];
  } else {
    return [start];
  }
};

export default {
  getTimeTemplateWithZero,
  getDateTemplateWithZero,
  getDateTemplateWithText,
  getMonthDays,
  formatDate,
  compareDate,
  getDateFormat,
};
