"use strict";
var info1;
(function (info1) {
    info1.name = '1';
    function getName() {
        return info1.name + info2.name;
    }
    info1.getName = getName;
})(info1 || (info1 = {}));
var info2;
(function (info2) {
    info2.name = '2';
    function getName() {
        return info2.name + info1.name;
    }
    info2.getName = getName;
})(info2 || (info2 = {}));
console.log(info1.getName());
console.log(info2.getName());
