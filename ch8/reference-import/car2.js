'use strict';
exports.__esModule = true;
var ns = require('./car1');
var Car;
(function (Car) {
  var wheels = 2;
  console.log(ns.Car.auto);
  var Taxi = /** @class */ (function () {
    function Taxi(name, vendor) {
      this.name = name;
      this.vendor = vendor;
    }
    return Taxi;
  })();
})(Car || (Car = {}));
