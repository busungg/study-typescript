'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Flashlight = /** @class */ (function () {
  function Flashlight(lightIntensity) {
    this.lightIntensity = lightIntensity;
  }
  return Flashlight;
})();
var Bicycle = /** @class */ (function () {
  function Bicycle(numberOfWheel) {
    this.numberOfWheel = numberOfWheel;
  }
  Bicycle.prototype.getNumberOfWheel = function () {
    return this.numberOfWheel;
  };
  return Bicycle;
})();
var MountainBike = /** @class */ (function (_super) {
  __extends(MountainBike, _super);
  function MountainBike(numberOfWheel, hasBackSaddle) {
    var _this = _super.call(this, numberOfWheel) || this;
    _this.numberOfWheel = numberOfWheel;
    _this.hasBackSaddle = hasBackSaddle;
    _this.flashlight = new Flashlight(90);
    return _this;
  }
  MountainBike.prototype.getHasBackSaddle = function () {
    return this.hasBackSaddle;
  };
  return MountainBike;
})(Bicycle);
var hasBackSaddle = true;
var numberOfWheel = 2;
var mountainBike = new MountainBike(numberOfWheel, hasBackSaddle);
console.log(mountainBike);
console.log(mountainBike.getNumberOfWheel());
//생성자 매개변수에 접근 제한자 추가
/**
 * 매개변수 속성이 돼 멤버 변수가 되는 효과가 발생합니다.
 */
var Cube = /** @class */ (function () {
  function Cube(pWidth, pLength, pHeight) {
    this.width = pWidth;
    this.length = pLength;
    this.height = pHeight;
  }
  return Cube;
})();
var cube = new Cube(1, 2, 3);
console.log(cube);
console.log(cube.width);
var CubeSimple = /** @class */ (function () {
  function CubeSimple(width, length, height) {
    this.width = width;
    this.length = length;
    this.height = height;
  }
  CubeSimple.prototype.getVolume = function () {
    return this.width * this.length * this.height;
  };
  return CubeSimple;
})();
var cubeSimple = new CubeSimple(1, 2, 3);
console.log(cubeSimple);
console.log(cubeSimple.getVolume());
// 부모 클래스의 멤버 이용하기
/**
 * 1. super 키워드는 부모 클래스의 공개 멤버에만 접근할 수 있습니다.
 * 2. this 키워드는 부모 클래스에서 상속받은 멤버와 현재 클래스의 멤버 모두에 접근할 수 있습니다.
 */
var PC = /** @class */ (function () {
  function PC(hddCapacity) {
    this.hddCapacity = hddCapacity;
    this.ram = '0G';
  }
  Object.defineProperty(PC.prototype, 'ramCapacity', {
    get: function () {
      return this.ram;
    },
    set: function (value) {
      this.ram = value;
    },
    enumerable: true,
    configurable: true,
  });
  PC.prototype.getHddCapacity = function () {
    return this.hddCapacity;
  };
  return PC;
})();
var Desktop = /** @class */ (function (_super) {
  __extends(Desktop, _super);
  function Desktop(hddCapaticy) {
    return _super.call(this, hddCapaticy) || this;
  }
  Desktop.prototype.getInfo = function () {
    return (
      'hdd capacity is ' +
      _super.prototype.getHddCapacity.call(this) +
      ' and ram capacity is ' +
      this.ramCapacity
    );
  };
  return Desktop;
})(PC);
var desktop = new Desktop('10G');
console.log(desktop);
