function concat3<T>(strs: T, strs2: T) {
  console.log(typeof strs, strs);
  console.log(typeof strs2, strs2);

  return String(strs) + String(strs2);
}

console.log(concat3('abc', '123'));
console.log(concat3<string>('abc', '123'));

function concat4<T extends string>(strs: T, strs2?: T) {
  return strs + strs2;
}
console.log(concat4('1', '2'));
console.log(concat4('1'));

function concat5<T>(strs: T, strs2: T): T;
function concat5(strs: any, strs2: any) {
  return strs + strs2;
}
console.log(concat5<number>(1, 2));
console.log(concat5<number>(1, 3));
