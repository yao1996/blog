/**
 * 将2019-07-01 00:00:00 或 2019/07/01 00:00:00的日期格式化
 * @param {String} dateStr 日期类
 * @param {String} fmt     格式
 */
export const formatStr = function(dateStr, fmt) {
  dateStr = dateStr.replace(/-/g, '/');
  return format(new Date(dateStr), fmt);
};

/**
 * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
 * 可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
 * Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 */
export const format = function(date, fmt) {
  let o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  let week = {
    '0': '日',
    '1': '一',
    '2': '二',
    '3': '三',
    '4': '四',
    '5': '五',
    '6': '六'
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '星期' : '周') : '') + week[date.getDay() + '']
    );
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
};

/**
 * 将日期字符串转化为Date对象
 * @param {String} dateStr 日期字符串，格式为yyyy-MM-dd HH:mm:ss 或 yyyy/MM/dd HH:mm:ss
 */
export const parse = function(dateStr) {
  dateStr = dateStr.replace(/-/g, '/');
  return new Date(dateStr);
};

/**
 * 判断dateStr1是否在dateStr2前;dateStr2可不加，默认为当前时间
 * dateStr格式为yyyy-MM-dd HH:mm:ss 或 yyyy/MM/dd HH:mm:ss
 * @param {Date} dateStr1
 * @param {Date} dateStr2
 */
export const isBefore = (dateStr1, dateStr2) => {
  let d1 = new Date(dateStr1.replace(/-/g, '/'));
  let d2;
  if (dateStr2 === undefined) {
    d2 = new Date();
  } else {
    d2 = new Date(dateStr2.replace(/-/g, '/'));
  }
  return d1.getTime() < d2.getTime();
};

/**
 * 判断是否为当天
 * @param {Date | String} date
 */
export const isToday = function(date) {
  if (typeof date === 'string') {
    date = parse(date);
  }
  let now = new Date();
  return format(date, 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd');
};
