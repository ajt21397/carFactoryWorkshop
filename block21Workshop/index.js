// Write code that defines a class of Car with a constructor that takes the following properties: make, model, and year.

class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Add a method called getDescription to the Car prototype, which returns a string containing information about the car.
    getDescription(){
        return `This car is a ${this.make} , ${this.model} , and  ${this.year} year.`;
    }
}


// Define the ElectricCar function as a subclass of Car. 
// Include an additional property called range that represents the range of the electric car in miles.
class ElectricCar extends Car{
    constructor(make, model, year, range){
        super(make,model,year);
        this.range = range;
    }

    // Have the ElectricCar prototype override the getDescription method of the Car prototype with a 
    // new implementation that includes information about the range of the electric car.

    getDescription(){
        return `${super.getDescription()}  It has a ${this.range} mile range.`;
    }
}

// Create an instance of ElectricCar with the make "Tesla", model "Model S", year 2019, and range 300, 
// and the getDescription method is called on the instance. 
// The output will be a string containing the make, model, year, and range of the electric car.

const car1 = new ElectricCar("Tesla", "Model S", 2019 , 300);

console.log(car1.getDescription());