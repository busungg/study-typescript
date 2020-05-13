interface Profile {
  name: string;
  gender: string;
  age: number;
}

type Profile1 = keyof Profile;
type Profile2 = keyof { [x: string]: Profile };

let pValue1: Profile1 = 'name';
let pValue2: Profile2 = 'number';
