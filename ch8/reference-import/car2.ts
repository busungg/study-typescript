import * as ns from './car1';

namespace Car {
  let wheels: number = 2;
  console.log(ns.Car.auto);
  class Taxi implements ns.Car.ICar {
    constructor(public name: string, public vendor: string) {}
  }
}
