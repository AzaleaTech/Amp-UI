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

export default formatDate;
