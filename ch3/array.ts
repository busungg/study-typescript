let fruits: string[] = ['apple', 'banana'];
let cars: (number | string)[] = [1, 'hyundai'];
let num: Array<number> = [1, 2, 3, 4];
let numUnionStr: Array<number | string> = [1, '1', 2, '2'];
console.log(typeof numUnionStr);
let numUnionStr2: typeof numUnionStr = [1, '1', 2, '2'];

let nums: Array<() => string> = [() => 'one', () => 'two'];
console.log(nums[0]);
console.log(nums[0]());

let tuple: [string, number] = ['1', 1];
let tuples: [string, number][] = [
  ['1', 1],
  ['2', 2],
];
let arrayTuple: Array<[string, number]>;
arrayTuple = [
  ['1', 1],
  ['2', 2],
];
