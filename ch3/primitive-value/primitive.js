"use strict";
//typescript에서 지원하는 기본 타입
/**
 * string, number, boolean
 * symbole(ES6에서 추가됨)
 * enum
 * 문자열 리터럴
 */
//string
var myNickname = 'happy'; //typescript에서는 문자열일때 큰 따옴표 사용 권장
var age = 20;
//문자열 리터럴
var sentence = myNickname + " \uC758 \uB098\uC774\uB294 " + age + " \uC785\uB2C8\uB2E4.";
console.log(sentence);
/**
 * number 타입은
 * 10진수
 * 16진수
 * 8진수
 * 2진수
 * 를 지원합니다.
 */
var decimal = 10;
var hex = 0x10;
var octal = 8;
var binary = 2;
console.log("decimal = " + decimal);
console.log("hex = " + hex);
console.log("octal = " + octal);
console.log("binary = " + binary);
/**
 * enum은 number에서 확장된 타입으로 첫 번째 Enum 요소에는 숫자 0값이 할당됩니다.
 */
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["mon"] = 0] = "mon";
    WeekDay[WeekDay["tue"] = 1] = "tue";
    WeekDay[WeekDay["wed"] = 2] = "wed";
})(WeekDay || (WeekDay = {}));
var day = WeekDay.mon;
console.log(day);
var eventType = '123'; //'keyup';
console.log(eventType);
