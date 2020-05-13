interface INumber {
  one: number;
  two: number;
  three: number;
}
type NumberKeys = keyof INumber;

let myNum: NumberKeys = 'one';

function getValue<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let numberKeys = { one: 1, two: 2, three: 3 };
console.log(getValue(numberKeys, 'two'));

interface IFilter<T> {
  unique: (array: Array<T>) => Array<T>;
}

class Filter<T> implements IFilter<T> {
  unique(array: Array<T>): Array<T> {
    return array.filter((v, i, array) => array.indexOf(v) === i);
  }
}

let myFilter = new Filter<number>();
console.log(myFilter.unique([0, 1, 2, 3, 2, 5, 1]));
