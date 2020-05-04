'use strict';
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };

var _a = { id: 'happy' },
  id = _a.id,
  _b = _a.country,
  country = _b === void 0 ? 88 : _b;
console.log(id, country);
var _c = { id: 'happy' },
  id1 = _c.id,
  _d = _c.country,
  country1 = _d === void 0 ? 10 : _d;
console.log(id1, country1);
function printProfile(_a) {
  var _b = _a === void 0 ? { name: '?' } : _a,
    name = _b.name,
    _c = _b.desc,
    desc = _c === void 0 ? 'there is no desc' : _c;
  console.log(name, desc);
}
printProfile();
printProfile({ name: 'K' });
function fruit(_a) {
  var a = _a.a,
    b = _a.b;
  console.log(a, b);
}
fruit({ a: 'apple', b: 10 });
fruit({ a: 'apple' });

var array1 = [1, 2, 3, { a: 1 }];
var array2 = __spreadArrays(array1, [{ b: 2 }]);
console.log(array1);
console.log(array2);
array2[3].a = 10;
console.log(array1);
console.log(array2);
