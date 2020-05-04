//typescript에서 지원하는 기본 타입
/**
 * string, number, boolean
 * symbole(ES6에서 추가됨)
 * enum
 * 문자열 리터럴
 */

//string
let myNickname: string = 'happy'; //typescript에서는 문자열일때 큰 따옴표 사용 권장
const age = 20;

//문자열 리터럴
const sentence: string = `${myNickname} 의 나이는 ${age} 입니다.`;
console.log(sentence);

/**
 * number 타입은
 * 10진수
 * 16진수
 * 8진수
 * 2진수
 * 를 지원합니다.
 */

const decimal: number = 10;
const hex: number = 0x10;
const octal: number = 0o10;
const binary: number = 0b10;
console.log(`decimal = ${decimal}`);
console.log(`hex = ${hex}`);
console.log(`octal = ${octal}`);
console.log(`binary = ${binary}`);

/**
 * enum은 number에서 확장된 타입으로 첫 번째 Enum 요소에는 숫자 0값이 할당됩니다.
 */
enum WeekDayPrimitive {
  mon,
  tue,
  wed
}
const day: WeekDayPrimitive = WeekDayPrimitive.mon;
console.log(day);

/**
 * 문자열 리터럴 타입은 -> string 타입의 확장 타입
 *                    -> 정의 타입에 정의한 문자열만 할당 받을 수 있습니다.
 * type 키워드를 이용합니다.
 */
type EventType = 'keyup' | 'mouseover';
const eventType: EventType = 'keyup';
console.log(eventType);
