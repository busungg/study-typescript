var Animal;
(function (Animal) {
    function run(animal) {
        return animal + " \uB2EC\uB9B0\uB2E4";
    }
    Animal.run = run;
})(Animal || (Animal = {}));
(function (Animal) {
    var Land;
    (function (Land) {
        var animal = '타조';
        Land.result = Animal.run(animal);
    })(Land = Animal.Land || (Animal.Land = {}));
})(Animal || (Animal = {}));
console.log(Animal.Land.result);
console.log(Animal);
