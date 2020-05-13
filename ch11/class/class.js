"use strict";
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
}());
var arr = [1, 2];
var numConvertor = new ArrayConvertor(arr);
console.log(numConvertor.array2string());
console.log(numConvertor.getValue(arr, 1));
var arr2 = [1, '1', 2];
var numConvertor2 = new ArrayConvertor(arr2);
console.log(numConvertor2.array2string());
function array2string(elems) {
    return elems.array2string();
}
console.log(array2string(numConvertor));
var Profile = /** @class */ (function () {
    function Profile() {
        this.name = 'happy!';
    }
    return Profile;
}());
var Accessor1 = /** @class */ (function () {
    function Accessor1() {
    }
    Accessor1.prototype.getKey = function (obj) {
        return obj['name'];
    };
    Accessor1.prototype.getKey2 = function (obj) {
        return obj.name;
    };
    Accessor1.prototype.get = function (obj) {
        var objName = obj instanceof Profile ? obj.name : obj;
        return objName;
    };
    return Accessor1;
}());
var ac = new Accessor1();
console.log(ac.getKey(new Profile()));
console.log(ac.getKey2(new Profile()));
console.log(ac.get(new Profile()));
