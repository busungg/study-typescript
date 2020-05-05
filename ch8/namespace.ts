namespace info1 {
  export let name = '1';
  export function getName() {
    return name + info2.name;
  }
}

namespace info2 {
  export let name = '2';
  export function getName() {
    return name + info1.name;
  }
}

console.log(info1.getName());
console.log(info2.getName());
