'use strict';
let map = new Map([
  ['one', 1],
  ['one2', 2],
]);
map.set(1, 1).set(2, 2).set(3, 3);
for (const item of map) {
  console.log(`key is ${item[0]} and value is ${item[1]}`);
}
console.log(map.get('one'));
map.set('one', 'changed value');
for (const item of map) {
  console.log(`key is ${item[0]} and value is ${item[1]}`);
}
