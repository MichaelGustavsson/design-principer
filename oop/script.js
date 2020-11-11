/* JAVASCRIPT CONSTRUCTOR FUNCTION */
// Create an class that simulates a Vehicle
// by using Javascripts Construction functions
/*const Vehicle = function(id, make, model, modelYear) {
  this.id = id;  //We are defining the objects property or state on these lines.
  this.make = make,
  this.model = model;
  this.modelYear = modelYear
}

// To add methods to a class we use the class prototype object.
Vehicle.prototype.showInfo = function(){
  console.log(`${this.make} ${this.model}`);
}

// To consume and use the object we need to instantiate it
const bmw = new Vehicle(1, 'BMW', 'X3 2.0', 2020);
const volvo = new Vehicle(2, 'Volvo', 'V40', 2018);
console.log(volvo.__proto__);

// Lets console out our two objects.
console.log(bmw);
console.log(volvo.hasOwnProperty('model'));

// And finally call the newly added method...
bmw.showInfo();
volvo.showInfo();*/

// Prototype vehicle...
/*const Vehicle = {
  showInfo() {
    console.log(`${this.make} ${this.model}`);
  },

  //Create an init function
  init(id, make, model, modelYear) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.modelYear = modelYear;
  }
};

// Create a link to prototype Vehicle
const volvo = Object.create(Vehicle);
// Initialize properties
volvo.init(1, 'Volvo', 'V40', 2018);

console.log(volvo);
console.log(volvo.__proto__);
volvo.showInfo();

const saab = Object.create(Vehicle);
saab.init(2, 'Saab', 'Saab 900', 1996);

console.log(saab);
console.log(saab.__proto__);
saab.showInfo();*/

/* ES6 classes */
/*class Vehicle{
  constructor(id, make, model, modelYear){
    this.id = id;
    this.make = make;
    this.model = model;
    this.modelYear = modelYear;
  }

  get vehicleMake() {
    return this.make.toUpperCase();
  }

  set modelYear(value){
    if(value > 2020){
      alert('A vehicle model year can not be in the future!');
    }
    else {
      this._modelYear = value;
    }
  }

  showInfo(){
    console.log(`${this.make} ${this.model}`);
  }
}

const bmw = new Vehicle(1, 'bmw', 'X3 2.0', 2020);
const volvo = new Vehicle(2, 'vOlVo', 'V60', 2019);

console.log(bmw._modelYear);
//bmw.modelYear = 2022;
volvo.make = 'voLVo'

console.log(volvo.vehicleMake);

console.log(bmw, volvo);
console.log(bmw.__proto__, volvo.__proto__);
bmw.showInfo();
volvo.showInfo();*/

/* INHERITANCE */
// Inheritance by using Constructor Functions...
/*const Vehicle = function (id, make, model, modelYear) {
  this.id = id; //We are defining the objects property or state on these lines.
  this.make = make, 
  this.model = model;
  this.modelYear = modelYear;
};

// To add methods to a class we use the class prototype object.
Vehicle.prototype.showInfo = function () {
  console.log(`${this.make} ${this.model}`);
};

const Car = function(id, make, model, modelYear, registrationNumber, speed){
  Vehicle.call(this, id, make, model, modelYear);
  //This are the speficic properties for a Car...
  this.registrationNumber = registrationNumber;
  this.speed = speed;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.accelerate = function(speed) {
  this.speed += speed;
  console.log(`The current speed is now ${this.speed} km/h`);
}

Car.prototype.brake = function() {
  this.speed -= 10;
  console.log(`The current speed is now ${this.speed} km/h`);
}


const volvo = new Car(2, 'Volvo', 'XC60', 2016, 'ABC123', 80);
const bmw = new Car(1, "bmw", "X3 2.0", 2020, 'CDE456', 70);
// console.log(volvo, bmw);
// volvo.showInfo();
// bmw.showInfo();
bmw.accelerate(30);
bmw.brake();*/

// Inheritance by using E6 Classes...
/*class Vehicle {
  constructor(id, make, model, modelYear) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.modelYear = modelYear;
  }

  get vehicleMake() {
    return this.make.toUpperCase();
  }

  set modelYear(value) {
    if (value > 2020) {
      alert("A vehicle model year can not be in the future!");
    } else {
      this._modelYear = value;
    }
  }

  showInfo() {
    console.log(`${this.make} ${this.model}`);
  }
}

class Car extends Vehicle {
  constructor(id, make, model, modelYear, registrationNumber, speed) {
    super(id, make, model, modelYear);
    this.registrationNumber = registrationNumber;
    this.speed = speed;
  }

  accelerate(speed) {
    this.speed += speed;
    console.log(`The current speed is now ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 10;
    console.log(`The current speed is now ${this.speed} km/h`);
  }

  // Shadowing the parents showInfo
  showInfo() {
    console.log(`${this.registrationNumber} [${this.make} ${this.model}]`);
  }
}

const ford = new Car(1, "Ford", "Mondeo", 2015, "FGH555", 80);
ford.showInfo();

ford._modelYear = 2018;*/

// Inheritance by using Object.create()...
/*const Vehicle = {
  showInfo() {
    console.log(`${this.make} ${this.model}`);
    return this;
  },

  // Create a init method that takes the argument that will be used as properties
  init(id, make, model, modelYear) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.modelYear = modelYear;
  }
};

const Car = Object.create(Vehicle);
Car.init = function (id, make, model, modelYear, registrationNumber, speed) {
  Vehicle.init.call(this, id, make, model, modelYear);
  this.registrationNumber = registrationNumber;
  this.speed = speed;
};

Car.accelerate = function (value) {
  this.speed += value;
  console.log(`Current speed is now ${this.speed} km/h`);
  return this;
};

Car.brake = function () {
  this.speed -= 10;
  console.log(`Current speed is now ${this.speed} km/h`);
  return this;
};

const bmw = Object.create(Car);
bmw.init(1, 'BMW', '520i', 2012, 'ABC1234', 100);
bmw.showInfo().accelerate(20).brake();
//bmw.accelerate(20).brake();
//bmw.brake();*/

/* Demo of new proposal for JavaScript */
// How to implement truly private and public properties and methods.
class Account {

  language = navigator.language;
  #transactions = [];

  constructor(number, customer){
    this.customerNumber = number;
    this.customer = customer;    
  }

  //Public API...
  getTransactions() {
    return this.#transactions;
  }

  deposit (value){
    this.#transactions.push(value);
  }
  withdraw(value){
    this.deposit(-value);
  }
}

const acc = new Account(1111, 'Michael');
acc.deposit(1000);
acc.withdraw(250);
console.log(acc.getTransactions());








