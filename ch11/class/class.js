'use strict';
var ArrayConvertor = /** @class */ (function () {
  function ArrayConvertor(elements) {
    this.elements = elements;
  }
  ArrayConvertor.prototype.array2string = function () {
    return this.elements.join(',');
  };
  ArrayConvertor.prototype.getValue = function (elms, index) {
    return elms[index];
  };
  return ArrayConvertor;
})();

var arr = [1, 2];
var numConvertor = new ArrayConvertor(arr);
console.log(numConvertor.array2string());
console.log(numConvertor.getValue(arr, 1));

var arr2 = [1, '1', 2];
var numConvertor2 = new ArrayConvertor(arr2);
console.log(numConvertor2.array2string());
