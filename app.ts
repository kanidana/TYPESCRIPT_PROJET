// interface nommée Véhicule avec les propriétés
interface Vehecule {
    make : string;
    model : string;
    year : number;
    methostart() : void ;
}
// implémentation une classe nommée car qui implémente l'interface Véhicule
class Car implements Vehecule {
    make : string;
    model : string;
    year : number;

// Un constructeur qui initialise les propriétés make, model, et year.
    constructor(make : string, model : string, year : number){
        this.make = make;
        this.model = model;
        this.year = year;
    }
// Implémenter la méthode methostart pour enregistrer "Car engine started" sur la console.
    methostart(): void {
        console.log("Car engine started");
    }
}

// Appellez la méthode start sur l'instance de la classe Car pour vérifier qu'elle enregistre le message approprié dans la console.
const voiture = new Car("By BMW", "Toyota", 1990)
voiture.methostart()
