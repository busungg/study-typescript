let { id, country = 88 } = { id: 'happy' };
console.log(id, country);

let { id: id1, country: country1 = 10 } = { id: 'happy' };
console.log(id1, country1);

function printProfile({ name, desc = 'there is no desc' } = { name: '?' }) {
  console.log(name, desc);
}

printProfile();
printProfile({ name: 'K' });

type C = { a: string; b?: number };
function fruit({ a, b }: C): void {
  console.log(a, b);
}

fruit({ a: 'apple', b: 10 });
fruit({ a: 'apple' });

const array1: (number | { a: number })[] = [1, 2, 3, { a: 1 }];
const array2: any[] = [...array1, { b: 2 }];
console.log(array1);
console.log(array2);
array2[3].a = 10;
console.log(array1);
console.log(array2);
