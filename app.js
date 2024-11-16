var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.methostart = function () {
        console.log("Car engine started");
    };
    return Car;
}());
var voiture = new Car("By BMW", "Toyota", 1990);
voiture.methostart();
