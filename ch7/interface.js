"use strict";
/**
 * 인터페이스는 Javascript가 지원하지 않는 타입스크립트만의 특징입니다.
 *
 * 자바스크립트 객체는 구조를 고정할 수 없고 쉽게 변화하는 특성이 존재합니다.
 * 객체는 유지보수와 확장 그리고 안정성을 고려해 선언과 동시에 고정할 필요가 있습니다.
 * => 인터페이스를 이용하면 객체의 구조를 고정할 수 있습니다.
 */
var myCar = {};
myCar.speed = 100;
myCar.acceleration = 100;
myCar.waterproof = true;
//배열 요소 타입을 객체 리터럴 타입으로 사용하기
var persons = [];
persons[0] = {
    name: '0 name',
    city: '0 city'
};
persons[1] = {
    name: '1 name',
    city: '1 city'
};
persons[2] = {
    name: '2 name',
    city: '2 city'
};
console.log(persons);
var persons1 = [];
persons1[0] = {
    name: '1',
    city: '1',
    getIntroduce: function () {
        return "name: " + this.name + ", city: " + this.city;
    }
};
console.log(persons1);
console.log(persons1[0].getIntroduce());
