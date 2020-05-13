class ArrayConvertor<T> {
  constructor(public elements: Array<T>) {}

  array2string(): string {
    return this.elements.join(',');
  }

  getValue(elms: Array<T>, index: number): T {
    return elms[index];
  }
}

let arr = [1, 2];
let numConvertor = new ArrayConvertor<number>(arr);
console.log(numConvertor.array2string());
console.log(numConvertor.getValue(arr, 1));

let arr2 = [1, '1', 2];
let numConvertor2 = new ArrayConvertor<number | string>(arr2);
console.log(numConvertor2.array2string());
