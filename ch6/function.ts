function max(x: number, y: number): number {
  return x > y ? x : y;
}

const a = max(1, 2);
console.log(`max value is ${a}`);

//기본 매개변수
function pow(x: number, y: number = 2): number {
  return x ** y;
}

console.log(pow(10, 1));
console.log(pow(10));
console.log(pow(10, 3));

//나머지 매개 변수
function restParameter(...params: any[]): string {
  return params.join(',');
}

console.log(restParameter('a', 1, {}, undefined, null));

function colors(a: string, ...b: Array<string>): string {
  return b.concat(a).join(',');
}

console.log(colors('red', 'blue', 'green', 'violet'));

//선택 매개변수
function sum(a: number, b?: number): number {
  return a + (b ? b : 0);
}

console.log(sum(1));

//함수 오버로드 조심해서 사용하자
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add('a', ',b'));
console.log(add(1, 1));

//객체 리터럴의 타입은 인터페이스를 이용해 정의합니다.
interface PersonType {
  name: string;
  hello(this: PersonType, name2: string): string;
}

let typedPerson: PersonType = {
  name: 'Happy',
  hello: function (this: PersonType, name2: string): string {
    let message = `Hello, ${this.name + name2}`;
    return message;
  },
};

console.log(typedPerson.hello('world'));

//익명함수의 함수 타입
type calcType = (a: number, b: number) => number;
let addCalc: calcType = (a, b) => a + b;

console.log(addCalc(1, 2));
