/** 日期通用操作方法工具类 */

const DateTool = class {
  constructor(props) {
    const opt = Object.assign(
      {
        initailDate: new Date(),
      },
      props
    );

    this.initailDate = opt.initailDate;
    /**
     * 1900 ~ 2100 各年24节气速查表
     * @return 0x string For splice
     */
    this.sTermInfo = [
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd0b06bdb0722c965ce1cfcc920f",
      "b027097bd097c36b0b6fc9274c91aa",
      "9778397bd19801ec9210c965cc920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd197c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bd09801d98082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec95f8c965cc920e",
      "97bcf97c3598082c95f8e1cfcc920f",
      "97bd097bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c3598082c95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf97c359801ec95f8c965cc920f",
      "97bd097bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd19801ec9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b97bd19801ec95f8c965cc920f",
      "97bd07f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bd07f1487f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c965cc920e",
      "97bcf7f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b97bd19801ec9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b97bd197c36c9210c9274c920e",
      "97bcf7f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36c9210c9274c920e",
      "97b6b7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c36b0b6fc9210c8dc2",
      "9778397bd097c36b0b70c9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9274c91aa",
      "97b6b7f0e47f531b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c91aa",
      "97b6b7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "9778397bd097c36b0b6fc9210c8dc2",
      "977837f0e37f149b0723b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f5307f595b0b0bc920fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc9210c8dc2",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd097c35b0b6fc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0b0bb0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14998082b0723b06bd",
      "7f07e7f0e37f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e397bd07f595b0b0bc920fb0722",
      "977837f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f595b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e37f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e47f149b0723b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14998082b0723b06bd",
      "7f07e7f0e37f14998083b0787b0721",
      "7f0e27f0e47f531b0723b0b6fb0722",
      "7f0e37f0e366aa89801eb072297c35",
      "7ec967f0e37f14898082b0723b02d5",
      "7f07e7f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66aa89801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b0721",
      "7f07e7f0e47f531b0723b0b6fb0722",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b0723b02d5",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e36665b66a449801e9808297c35",
      "665f67f0e37f14898082b072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e26665b66a449801e9808297c35",
      "665f67f0e37f1489801eb072297c35",
      "7ec967f0e37f14998082b0787b06bd",
      "7f07e7f0e47f531b0723b0b6fb0721",
      "7f0e27f1487f531b0b0bb0b6fb0722",
    ];
    /**
     * 24节气速查表
     * @Array Of Property
     * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
     * @return Cn string
     */
    this.solarTerm = [
      "\u5c0f\u5bd2",
      "\u5927\u5bd2",
      "\u7acb\u6625",
      "\u96e8\u6c34",
      "\u60ca\u86f0",
      "\u6625\u5206",
      "\u6e05\u660e",
      "\u8c37\u96e8",
      "\u7acb\u590f",
      "\u5c0f\u6ee1",
      "\u8292\u79cd",
      "\u590f\u81f3",
      "\u5c0f\u6691",
      "\u5927\u6691",
      "\u7acb\u79cb",
      "\u5904\u6691",
      "\u767d\u9732",
      "\u79cb\u5206",
      "\u5bd2\u9732",
      "\u971c\u964d",
      "\u7acb\u51ac",
      "\u5c0f\u96ea",
      "\u5927\u96ea",
      "\u51ac\u81f3",
    ];
  }

  // 获取当月所有日 - 返回一个数组
  getMonthDays(month) {
    let days = [];
    let total = 30; // 默认一个月30天
    const curMonth = month || Date(this.initailDate).getMonth() + 1;
    if (curMonth === 2) {
      // 二月 - 平年28天；闰年29天
      if (this.isLeapYear) {
        total = 29;
      } else {
        total = 28;
      }
    } else if ([1, 3, 5, 7, 8, 10, 12].includes(curMonth)) {
      // 闰月 - 31天
      total = 31;
    } else {
      total = 30;
    }

    for (let i = 0; i < total; i++) {
      days.push(i + 1);
    }

    return days;
  }

  /** 是否闰年
   * 闰年计算公式：四年一闰，百年不闰, 四百年再闰。 */

  isLeapYear(curYear) {
    const year = curYear || new Date(this.initailDate).getFullYear();
    if (year % 400 === 0 || (year % 4 === 0 && year & (100 !== 0))) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 传入阳历y年，获取该年的二十四节气
   * @param {number} y 阳历y年；二十四节气从(小寒)算起
   */
  getTerm(y) {
    if (y < 1900 || y > 2100) return -1;
    const _table = this.sTermInfo[y - 1900]; // 9778397bd097c36b0b6fc9274c91aa
    // console.log('当前查询节气的年', y, _table);
    const _info = [
      parseInt("0x" + _table.substring(0, 5)),
      parseInt("0x" + _table.substring(5, 10)),
      parseInt("0x" + _table.substring(10, 15)),
      parseInt("0x" + _table.substring(15, 20)),
      parseInt("0x" + _table.substring(20, 25)),
      parseInt("0x" + _table.substring(25, 30)),
    ];
    // 返回一个24长度的数组，每2个元素代表一个月的阳历日期。例如：
    // 某年24节气数组为：['5', '20', '4', '19', '5', '20', '5', '20', '5', '21', '6', '21', '7', '23', '7', '23', '7', '23', '8', '23', '7', '22', '7', '22']
    // 则该年 1月5日(阳历)为小寒，2月4日为立春，2月19日为雨水
    let _calday = [];
    for (let i = 0; i < _info.length; i++) {
      let str = String(_info[i]);
      let arr = [str.substring(0, 1), str.substring(1, 3), str.substring(3, 4), str.substring(4, 6)];
      _calday = _calday.concat(arr);
    }
    let terms = [];
    for (let i = 0; i < _calday.length; i++) {
      const m = Math.floor(i / 2) + 1;
      terms.push({
        solarDate: m + "-" + _calday[i],
        term: this.solarTerm[i],
      });
    }
    // 返回y年24节气列表
    // console.log("返回的二十四节气", terms);
    return terms;
  }

  /**
   * 查询阳历特殊节日
   * @param {*} y 阳历y月
   * @param {*} d 阳历d日
   * @returns 返回节日名称，无则返回null
   */
  solarFestival(m, d) {
    const festivals = [
      { val: "10-1", txt: "国庆节" },
      { val: "1-1", txt: "元旦节" },
    ];
    const key = m + "-" + d;
    const r = festivals.find((v) => v.val == key);
    return r ? r.txt : null;
  }
};

/** ----------阴历---------- */
/** 阴历十六进制换算规则：
 * 例如：1949年对应十六进制 0x0b557
 * 高位-> 0000 1011 0101 0101 0111 ->低位
 * 高位[20-17]代表闰月大小，0001代表大闰月30天，0000代表小闰月29天（当且低位存在闰月有效）
 * 中间位[16-5]代表一月到十二月大小月，其中1代表大月30天，0代表小月29天 (注：其中一月对应16位，十二月对应5位)
 * 低位[4-1]代表闰月所在的月份，上述例子7代表的就是闰月在七月，若无闰月就为0 */
const LunarDateTool = class {
  // todo receive props
  constructor() {
    // 农历十六进制规则查询表 (1900 ~ 2100)
    this.lunarYearArr = [
      0x04bd8,
      0x04ae0,
      0x0a570,
      0x054d5,
      0x0d260,
      0x0d950,
      0x16554,
      0x056a0,
      0x09ad0,
      0x055d2,
      0x04ae0,
      0x0a5b6,
      0x0a4d0,
      0x0d250,
      0x1d255,
      0x0b540,
      0x0d6a0,
      0x0ada2,
      0x095b0,
      0x14977,
      0x04970,
      0x0a4b0,
      0x0b4b5,
      0x06a50,
      0x06d40,
      0x1ab54,
      0x02b60,
      0x09570,
      0x052f2,
      0x04970,
      0x06566,
      0x0d4a0,
      0x0ea50,
      0x06e95,
      0x05ad0,
      0x02b60,
      0x186e3,
      0x092e0,
      0x1c8d7,
      0x0c950,
      0x0d4a0,
      0x1d8a6,
      0x0b550,
      0x056a0,
      0x1a5b4,
      0x025d0,
      0x092d0,
      0x0d2b2,
      0x0a950,
      0x0b557,
      0x06ca0,
      0x0b550,
      0x15355,
      0x04da0,
      0x0a5b0,
      0x14573,
      0x052b0,
      0x0a9a8,
      0x0e950,
      0x06aa0,
      0x0aea6,
      0x0ab50,
      0x04b60,
      0x0aae4,
      0x0a570,
      0x05260,
      0x0f263,
      0x0d950,
      0x05b57,
      0x056a0,
      0x096d0,
      0x04dd5,
      0x04ad0,
      0x0a4d0,
      0x0d4d4,
      0x0d250,
      0x0d558,
      0x0b540,
      0x0b6a0,
      0x195a6,
      0x095b0,
      0x049b0,
      0x0a974,
      0x0a4b0,
      0x0b27a,
      0x06a50,
      0x06d40,
      0x0af46,
      0x0ab60,
      0x09570,
      0x04af5,
      0x04970,
      0x064b0,
      0x074a3,
      0x0ea50,
      0x06b58,
      0x055c0,
      0x0ab60,
      0x096d5,
      0x092e0,
      0x0c960,
      0x0d954,
      0x0d4a0,
      0x0da50,
      0x07552,
      0x056a0,
      0x0abb7,
      0x025d0,
      0x092d0,
      0x0cab5,
      0x0a950,
      0x0b4a0,
      0x0baa4,
      0x0ad50,
      0x055d9,
      0x04ba0,
      0x0a5b0,
      0x15176,
      0x052b0,
      0x0a930,
      0x07954,
      0x06aa0,
      0x0ad50,
      0x05b52,
      0x04b60,
      0x0a6e6,
      0x0a4e0,
      0x0d260,
      0x0ea65,
      0x0d530,
      0x05aa0,
      0x076a3,
      0x096d0,
      0x04afb,
      0x04ad0,
      0x0a4d0,
      0x1d0b6,
      0x0d250,
      0x0d520,
      0x0dd45,
      0x0b5a0,
      0x056d0,
      0x055b2,
      0x049b0,
      0x0a577,
      0x0a4b0,
      0x0aa50,
      0x1b255,
      0x06d20,
      0x0ada0,
      0x14b63,
      0x09370,
      0x049f8,
      0x04970,
      0x064b0,
      0x168a6,
      0x0ea50,
      0x06b20,
      0x1a6c4,
      0x0aae0,
      0x0a2e0,
      0x0d2e3,
      0x0c960,
      0x0d557,
      0x0d4a0,
      0x0da50,
      0x05d55,
      0x056a0,
      0x0a6d0,
      0x055d4,
      0x052d0,
      0x0a9b8,
      0x0a950,
      0x0b4a0,
      0x0b6a6,
      0x0ad50,
      0x055a0,
      0x0aba4,
      0x0a5b0,
      0x052b0,
      0x0b273,
      0x06930,
      0x07337,
      0x06aa0,
      0x0ad50,
      0x14b55,
      0x04b60,
      0x0a570,
      0x054e4,
      0x0d160,
      0x0e968,
      0x0d520,
      0x0daa0,
      0x16aa6,
      0x056d0,
      0x04ae0,
      0x0a9d4,
      0x0a2d0,
      0x0d150,
      0x0f252,
      0x0d520,
    ];

    /**
     * 数字转中文对照表
     * @trans ['日','一','二','三','四','五','六','七','八','九','十']
     */
    this.nStr1 = [
      "\u65e5",
      "\u4e00",
      "\u4e8c",
      "\u4e09",
      "\u56db",
      "\u4e94",
      "\u516d",
      "\u4e03",
      "\u516b",
      "\u4e5d",
      "\u5341",
    ];
    /**
     * 日期转农历称呼对照表
     * @trans ['初','十','廿','卅']
     */
    this.nStr2 = ["\u521d", "\u5341", "\u5eff", "\u5345"];
    /**
     * 月份转农历称呼对照表
     * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
     */
    this.nStr3 = [
      "\u6b63",
      "\u4e8c",
      "\u4e09",
      "\u56db",
      "\u4e94",
      "\u516d",
      "\u4e03",
      "\u516b",
      "\u4e5d",
      "\u5341",
      "\u51ac",
      "\u814a",
    ];
  }

  // 计算非闰月的天数：大月(30天)小月(29天)
  monthDays(y, m) {
    if (y < 1900 || y > 2100) return -1;
    if (m < 1 || m > 12) return -1;
    const lunarY = this.lunarYearArr[y - 1900];
    return lunarY & (0x10000 >> m) ? 30 : 29;
  }
  // 返回阴历y年哪个月是闰月，若该年无闰月，返回0
  leapMonth(y) {
    // 低四位[4-0]表示哪个月是闰月
    return this.lunarYearArr[y - 1900] & 0xf;
  }
  // 返回阴历y年闰月的天数，若该年无闰月，则返回0
  leapMonthDays(y) {
    if (this.leapMonth(y)) {
      // 高四位[20-17]表示该年闰月是大闰月(30天)或小闰月(29天)
      return this.lunarYearArr[y - 1900] & 0x10000 ? 30 : 29;
    } else {
      return 0;
    }
  }
  // 返回阴历y年一整年总天数
  lunarYearDays(y) {
    let sum = 348;
    // 计算大月(30天)加1，小月(29天)加0
    for (let i = 0x8000; i > 0x8; i >>= 1) {
      sum += this.lunarYearArr[y - 1900] & i ? 1 : 0;
    }
    // 若有闰月，增加闰月天数
    return sum + this.leapMonthDays(y);
  }

  /** 阴历传统节日和重要节日
   * 文档参考来源：http://openstd.samr.gov.cn/bzgk/gb/newGbInfo?hcno=E107EA4DE9725EDF819F33C60A44B296
   * @param {number} m 农历月份
   * @param {number} d 农历日期
   * @returns  未匹配到节日，则返回null
   */
  lunarFestival(m, d) {
    const festivals = [
      {
        val: "1-1",
        txt: "春节",
      },
      {
        val: "1-15",
        txt: "元宵节",
      },
      {
        val: "2-2",
        txt: "龙头节",
      },
      {
        val: "3-3",
        txt: "上巳节",
      },
      {
        val: "5-5",
        txt: "端午节",
      },
      {
        val: "7-7",
        txt: "七夕节",
      },
      {
        val: "8-15",
        txt: "中秋节",
      },
      {
        val: "9-9",
        txt: "重阳节",
      },
      {
        val: "12-8",
        txt: "腊八节",
      },
    ];
    const key = m + "-" + d;
    // console.log('传入月日', key);
    const r = festivals.find((v) => v.val == key);
    return r ? r.txt : null;
  }

  /**
   * 传入阴历月份，转成汉语名称
   * @param {*} m 传入m月
   * @returns 转换后的汉语称呼，例如：正月，腊月等
   */
  toChinaMonth(m) {
    if (m < 1 || m > 12) return -1; // 若参数错误，返回-1
    const str = this.nStr3[m - 1] + "\u6708";
    return str;
  }

  toChinaDay(d) {
    let str;
    switch (d) {
      case 10: {
        str = "\u521d\u5341";
        break;
      }
      case 20: {
        str = "\u4e8c\u5341";
        break;
      }
      case 30: {
        str = "\u4e09\u5341";
        break;
      }
      default: {
        // 1~9 表示为初几；11~19表示为十几；21~29表示为廿几
        const positionTen = Math.floor(d / 10);
        const positionBit = d % 10;
        str = this.nStr2[positionTen] + this.nStr1[positionBit];
      }
    }
    return str;
  }

  /** 根据阳历日期，转换为对应的阴历日期
   * @param 参数对应传入阳历的年月日
   */
  solar2lunar(year, month, day) {
    // console.log('要转换成阴历的阳历日期',year, month, day);
    // 边界判断
    if (year < 1900 || year > 2100) {
      return -1;
    }

    //1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    // var stmap   =   Date.UTC(1900,1,30,0,0,0);
    // 将传入年月日转换为日期对象
    const objDate = new Date(year, parseInt(month) - 1, day);
    // 修正ymd参数
    let y = objDate.getFullYear(),
      m = objDate.getMonth(),
      d = objDate.getDate();
    // 计算偏移量：当前日期 减去 1900年起始日期，再除以天数；一天：86400000 = 1000*60*60*24
    let index, temp;
    let offset = (Date.UTC(y, m, d) - Date.UTC(1900, 0, 31)) / 86400000; // 备注：阳历1900-1-31即阴历1900年正月初一
    // console.log("当前天数偏移量", offset); // 偏移量为：1900年正月初一 距今多少天。可用于校准计算公式
    for (index = 1900; index <= 2100 && offset > 0; index++) {
      temp = this.lunarYearDays(index);
      offset -= temp;
      // console.log('年份遍历', index, this.lunarYearDays(index), offset);
    }
    if (offset < 0) {
      index--;
      offset += temp;
    }
    // console.log('年份转换后农历偏移天数/年份/年总天数', offset, index, temp);  // 备注：这里是offset，指计算的当前年份(index)已经过了多少天

    let lunarYear = index; // 阴历年份
    let currentLeap = this.leapMonth(index); // 阴历该年闰哪个月
    let isLeap = false;
    let mIndex;
    for (mIndex = 1; mIndex <= 12 && offset > 0; mIndex++) {
      // 当前农历年的
      temp = this.monthDays(lunarYear, mIndex);
      offset -= temp;
      if (currentLeap == mIndex) {
        isLeap = true;
        temp = this.leapMonthDays(lunarYear);
        offset -= temp;
      } else {
        isLeap = false;
      }
      // console.log("月份遍历", mIndex, offset, temp, currentLeap);
    }
    if (offset < 0 && !isLeap) {
      mIndex--;
      offset += temp;
    }
    // console.log("月份遍历结束 偏移天数/月份/月总天数",  offset, mIndex, temp);  // 备注：这里的offset，指基于当前计算月份(mIndex)已经过了多少天
    // 函数返回 阴历的年月日
    const currentObj = {
      year: index,
      month: mIndex,
      day: offset + 1,
      isLeap: isLeap, // 是否闰月
    };
    return currentObj;
  }

  /** 生成一段期间内的阴历日期
   * @param startDate  传入一个阳历日期(Date对象)，作为起始日期
   * @param len  要生成的期间天数
   */
  generateLunarDays(startDate, len) {
    // console.log("入参", startDate, len);
    const dt = new Date(startDate);
    const startDateObj = this.solar2lunar(dt.getFullYear(), dt.getMonth() + 1, dt.getDate());
    // console.log("起始日期", dt, startDateObj, len);
    // 修正ymd参数
    let y = startDateObj.year,
      m = startDateObj.month,
      d = startDateObj.day;
    let lunarDayList = [];
    let mdLen = 0;
    if (startDateObj.isLeap) {
      // 当前农历月为闰月
      mdLen = this.leapMonthDays(y);
    } else {
      // 当前农历月为非闰月
      mdLen = this.monthDays(y, m);
    }
    for (d; d <= mdLen; d++) {
      lunarDayList.push({
        year: y,
        month: m,
        day: d,
        lunarFlag: !startDateObj.isLeap && this.lunarFestival(m, d),
        aliasMonth: this.toChinaMonth(m),
        aliasDay: this.toChinaDay(d) == "初一" ? this.toChinaMonth(m) : this.toChinaDay(d),
      });
    }

    while (lunarDayList.length < len) {
      let nextY = y,
        nextM = m; // 初始均为1，方便调试测错
      if (m == this.leapMonth(m)) {
        // 若当前月是闰月
        if (startDateObj.isLeap) {
          // 若起始日期的月已经是闰月，月数正常向后推一个月
          if (m == 12) {
            // 已经是12月，年份+1，月份初始为1月
            nextY = y + 1;
            nextM = 1;
          } else {
            // 1 ~ 11月
            nextM = m + 1;
          }

          mdLen = this.monthDays(nextY, nextM); // 非闰月天数
        } else {
          // 起始日期不是闰月，但下一个月是闰月
          nextM = m;

          mdLen = this.leapMonthDays(nextY); // 闰月天数
        }
      } else {
        // 当前月不是闰月
        if (m == 12) {
          // 已经是12月，年份+1，月份初始为1月
          nextY = y + 1;
          nextM = 1;
        } else {
          // 1 ~ 11月
          nextM = m + 1;
        }

        mdLen = this.monthDays(nextY, nextM); // 非闰月天数
      }

      // if (m == 12) {
      //   // 若当前已经是12月，年递增一,月初始化；若12月是闰月？截止2100年无闰12月(若存在闰12月，这里可能会有Bug)
      //   y += 1;
      //   m = 1;
      // }
      // if (startDateObj.isLeap) {
      //   // 若起始日期是闰月
      //   m += 1;
      //   mdLen = this.monthDays(y, m); // 非闰月天数
      // } else if (m != this.leapMonth(y)) {
      //   // 若起始日期不是闰月，且起始日期月也不是今年的闰月
      //   m += 1;
      //   mdLen = this.monthDays(y, m); // 非闰月天数
      // } else {
      //   mdLen = this.leapMonthDays(y); // 闰月天数
      // }
      let minSurplus = Math.min(mdLen, len - lunarDayList.length); // 月长度与剩余天数的最小值作为剩余天数遍历长度
      for (let i = 1; i <= minSurplus; i++) {
        lunarDayList.push({
          year: nextY,
          month: nextM,
          day: i,
          lunarFlag: !startDateObj.isLeap && m != this.leapMonth(nextY) && this.lunarFestival(nextM, i), // 阴历节日在非闰月，这里是遍历次月，所以直接判断月不等于闰月月份即可
          aliasMonth: this.toChinaMonth(nextM),
          aliasDay: this.toChinaDay(i) == "初一" ? this.toChinaMonth(nextM) : this.toChinaDay(i),
        });
      }
    }

    // 返回期间阴历日历
    // console.log("返回期间阴历日历", lunarDayList);
    return lunarDayList;
  }
};

// 导出阳历，阴历日期工具类
export { DateTool, LunarDateTool };
