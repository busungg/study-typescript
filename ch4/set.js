"use strict";
let sets = new Set();
sets.add(1);
sets.add(1);
sets.add(1);
sets.add(1);
sets.add(1);
sets.add(1);
sets.add(1);
sets.add(2);
sets.add(2);
sets.add(3);
for (const item of sets) {
    console.log(item);
}
console.log(sets);
