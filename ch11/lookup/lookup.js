"use strict";
var myNum = 'one';
function getValue(obj, key) {
    return obj[key];
}
var numberKeys = { one: 1, two: 2, three: 3 };
console.log(getValue(numberKeys, 'two'));
var Filter = /** @class */ (function () {
    function Filter() {
    }
    Filter.prototype.unique = function (array) {
        return array.filter(function (v, i, array) { return array.indexOf(v) === i; });
    };
    return Filter;
}());
var myFilter = new Filter();
console.log(myFilter.unique([0, 1, 2, 3, 2, 5, 1]));
