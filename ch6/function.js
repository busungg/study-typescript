"use strict";
function max(x, y) {
    return x > y ? x : y;
}
var a = max(1, 2);
console.log("max value is " + a);
//기본 매개변수
function pow(x, y) {
    if (y === void 0) { y = 2; }
    return Math.pow(x, y);
}
console.log(pow(10, 1));
console.log(pow(10));
console.log(pow(10, 3));
//나머지 매개 변수
function restParameter() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    return params.join(',');
}
console.log(restParameter('a', 1, {}, undefined, null));
function colors(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    return b.concat(a).join(',');
}
console.log(colors('red', 'blue', 'green', 'violet'));
//선택 매개변수
function sum(a, b) {
    return a + (b ? b : 0);
}
console.log(sum(1));
function add(a, b) {
    return a + b;
}
console.log(add('a', ',b'));
console.log(add(1, 1));
var typedPerson = {
    name: 'Happy',
    hello: function (name2) {
        var message = "Hello, " + (this.name + name2);
        return message;
    },
};
console.log(typedPerson.hello('world'));
var addCalc = function (a, b) { return a + b; };
console.log(addCalc(1, 2));
