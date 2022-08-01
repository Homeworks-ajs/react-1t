import moment from "moment";
import { MONTHS, WEEKDAYS } from "./enums";

export default class CalendarUtills {
  constructor() {
    moment().format();

    const _ = moment();
    this.weekday = WEEKDAYS[_.isoWeekday() - 1];
    this.day = _.day();
    this.month = MONTHS[_.month()];
    this.year = _.year();
    this.monthName = MONTHS[_.month()];
  }

  _containingLastMonth(arr) {
    const _ = moment();
    const weekdayOfFirstMonthDay = _.clone().year(_.year())
      .month(_.month())
      .date(1)
      .weekday();
    const mm = moment().year(moment().year())
      .month(_.month()).date(1);

    for (let i = -1; Math.abs(i) < weekdayOfFirstMonthDay; i--) {
      arr.push({
        date: mm.clone().add(i, 'd'),
        thisMonth: false
      })
    }
    arr.reverse();
    return arr;
  }

  _containingThisAndNextMonth(arr) {
    const mm = moment().year(moment().year())
      .month(moment().month()).date(1);
    for (let i = 0; i < 38; i++) {
      let obj = {
        date: mm.clone().add(i, 'd'),
        thisMonth: true,
        currentDay: false
      }
      if (i >= mm.daysInMonth()) {
        obj.thisMonth = !obj.thisMonth;
      }

      if (i + 1 === moment().date()) {
        obj.currentDay = true;
      }
      console.log(obj)
      arr.push(obj)
    }
    return arr;
  }

  _fullfillingResultToWeek(arr) {
    const result = [];
    for (let i = 0; i <= arr.length - 7; i += 7) {
      const start = i;
      const final = start + 7;
      result.push(arr.slice(start, final))
    }

    return result;
  }

  getMonthList() {
    const arr = this._containingThisAndNextMonth(this._containingLastMonth([]));

    return this._fullfillingResultToWeek(arr);
  }

  getDateMap() {
    return {
      weekday: this.weekday,
      day: this.day,
      month: this.month,
      year: this.year,
      monthName: this.monthName
    }
  }
}
