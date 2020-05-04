'use strict';
var WeekDay;
(function (WeekDay) {
  WeekDay[(WeekDay['Mon'] = 0)] = 'Mon';
  WeekDay[(WeekDay['Tue'] = 1)] = 'Tue';
  WeekDay[(WeekDay['Wed'] = 2)] = 'Wed';
  WeekDay[(WeekDay['Thu'] = 3)] = 'Thu';
})(WeekDay || (WeekDay = {}));
var thu2 = 10 * 2;
var WeekDay2;
(function (WeekDay2) {
  WeekDay2[(WeekDay2['Mon'] = 10)] = 'Mon';
  WeekDay2[(WeekDay2['Tue'] = 11)] = 'Tue';
  WeekDay2[(WeekDay2['Wed'] = 40)] = 'Wed';
  WeekDay2[(WeekDay2['Thu'] = thu2)] = 'Thu';
})(WeekDay2 || (WeekDay2 = {}));
//string 초기
var WeekDay3;
(function (WeekDay3) {
  WeekDay3['Mon'] = 'Monday';
  WeekDay3['Tue'] = 'Tuesday';
})(WeekDay3 || (WeekDay3 = {}));
console.log('1. ' + JSON.stringify(WeekDay));
console.log('2. ' + JSON.stringify(WeekDay2));
console.log('3. ' + JSON.stringify(WeekDay3));
