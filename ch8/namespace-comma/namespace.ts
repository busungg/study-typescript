namespace Animal {
  export function run(animal: string): string {
    return `${animal} 달린다`;
  }
}

namespace Animal.Land {
  const animal: string = '타조';

  export const result: string = Animal.run(animal);
}

console.log(Animal.Land.result);
console.log(Animal);
