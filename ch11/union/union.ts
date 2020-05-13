function concat<T extends string | number>(strs: T, strs2: T): T;
function concat(s1: any, s2: any) {
  return s1 + s2;
}

console.log(concat<string | number>('abc', 1));

let mapArr: any[] = [];
function put<T, T2>(strs: T, strs2: T2): T;
function put(idx: any, str: any) {
  mapArr[idx] = str;
}

function get<T, T2>(idx: T): T2;
function get(idx: any) {
  return mapArr[idx];
}

put<number, string>(1, 'hello');
console.log(get(1));
