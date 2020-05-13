"use strict";
function concat3(strs, strs2) {
    console.log(typeof strs, strs);
    console.log(typeof strs2, strs2);
    return String(strs) + String(strs2);
}
console.log(concat3('abc', '123'));
console.log(concat3('abc', '123'));
function concat4(strs, strs2) {
    return strs + strs2;
}
console.log(concat4('1', '2'));
console.log(concat4('1'));
function concat5(strs, strs2) {
    return strs + strs2;
}
console.log(concat5(1, 2));
console.log(concat5(1, 3));
