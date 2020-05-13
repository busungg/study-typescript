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

function array2string<T extends ArrayConvertor<T1>, T1>(elems: T): string {
  return elems.array2string();
}

console.log(array2string<ArrayConvertor<number>, number>(numConvertor));

interface IName {
  name: string;
}

class Profile implements IName {
  name: string = 'happy!';
}

class Accessor1 {
  getKey<T>(obj: T) {
    return obj['name'];
  }

  getKey2<T extends IName>(obj: T) {
    return obj.name;
  }

  get(obj) {
    let objName = obj instanceof Profile ? obj.name : obj;
    return objName;
  }
}

let ac = new Accessor1();
console.log(ac.getKey<IName>(new Profile()));
console.log(ac.getKey2(new Profile()));
console.log(ac.get(new Profile()));
