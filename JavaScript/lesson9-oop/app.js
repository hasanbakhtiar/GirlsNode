// function Car(brand, year) {
//     this.myBrand = brand;
//     this.myYear = year;
// }

// const myCar1 = new Car("BMW",2000);
// const myCar2 = new Car("Audi",2025);
// const myCar3 = new Car("Volga",1950);

// console.log(myCar1.myBrand);
// console.log(myCar2.myBrand);
// console.log(myCar3.myBrand);



class Car {
    constructor(brand, year) {
        this.myBrand = brand;
        this.myYear = year;
    }
    calculateSpeed(km, hour) {
        return `${this.myBrand} : ${km / hour} km/h`
    }

    calculateAge(currentTime) {
        return `${this.myBrand} : is ${currentTime - this.myYear} age`
    }
}

const myCar = new Car("BMW", 2000);
console.log(myCar.myBrand);
console.log(myCar.calculateSpeed(1000, 4));
console.log(myCar.calculateAge(2026));



class Moto extends Car {
    constructor(brand, year) {
        super(brand, year)
    }
    checkEngine(checked) {
        if (checked) {
            return `Engine is works!`
        } else {
            return `Engine dont work!`
        }
    }
}

const myMoto = new Moto("Yamaha", 2023);
console.log(myMoto.calculateSpeed(1200, 3));

console.log(myMoto.checkEngine(true));

