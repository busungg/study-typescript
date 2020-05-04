'use strict';
var fruits = ['apple', 'banana'];
var cars = [1, 'hyundai'];
var num = [1, 2, 3, 4];
var numUnionStr = [1, '1', 2, '2'];
console.log(typeof numUnionStr);
var numUnionStr2 = [1, '1', 2, '2'];
var nums = [
  function () {
    return 'one';
  },
  function () {
    return 'two';
  },
];
console.log(nums[0]);
console.log(nums[0]());
var tuple = ['1', 1];
var tuples = [
  ['1', 1],
  ['2', 2],
];
