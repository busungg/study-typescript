"use strict";
function concat(s1, s2) {
    return s1 + s2;
}
console.log(concat('abc', 1));
var mapArr = [];
function put(idx, str) {
    mapArr[idx] = str;
}
function get(idx) {
    return mapArr[idx];
}
put(1, 'hello');
console.log(get(1));
