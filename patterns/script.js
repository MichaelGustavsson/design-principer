/* CONSTRUCTOR DESIGN PATTERN */
/*function Vehicle(make, model, modelYear) {
  this.make = make;
  this.model = model;
  this.modelYear = modelYear;
}

Vehicle.prototype.showInfo = function(){
  return `${this.make} ${this.model} ${this.modelYear}`;
}

const volvo = new Vehicle('Volvo', 'XC60', 2019);
const volkswagen = new Vehicle('Volkswagen', 'Tiguan', 2014);

console.log(volvo, volkswagen);*/

/* FACTORY DESIGN PATTERN */
/*function Car(options) {
  this.make = options.make || "Volvo";
  this.model = options.model || "XC60";
  this.modelYear = options.modelYear || 2020;
}
function Bike(options) {
  this.make = options.make || "Crescent";
  this.model = options.model || "Mountain X200";
  this.modelYear = options.modelYear || 2019;
}

//Factory function...
function VehicleFactory() {}

VehicleFactory.prototype.create = function (options) {
  switch (options.vehicleType) {
    case "car":
      this.vehicleClass = Car;
      break;
    case "bike":
      this.vehicleClass = Bike;
      break;
  }
  return new this.vehicleClass(options);
};

//Usage...
const factory = new VehicleFactory();
const car = factory.create({
  vehicleType: "car",
  model: '245GL',
  modelYear: '1982'
});
const bike = factory.create({
  vehicleType: "bike",
});
console.log(car instanceof Car);
console.log(car);
console.log(bike instanceof Bike);
console.log(bike);*/

/* SINGLETON DESIGN PATTERN */

/*
const singleton = (function(){
  let instance;

  function init() {
    let randomNumber = Math.random();

    return {
      getRandomNumber: function() {
        return randomNumber;
      }
    }
  }
  return {
    getInstance: function() {
      if(!instance) {
        instance = init();
      }
      return instance;
    }
  }
})();

//Usage ...
const objA = singleton.getInstance();
console.log(objA.getRandomNumber());
const objB = singleton.getInstance();
console.log(objB.getRandomNumber());
const objC = singleton.getInstance();
console.log(objC.getRandomNumber());*/


/* FACADE PATTERN */
/*const Account = function(accountNumber, customer){
  this.accountNumber = accountNumber;
  this.customer = customer;
};

Account.prototype = {
  //Facade...
  applyForLoan: function(amount) {
    let result = 'approved';
    if(!new Credit().checkBalance(amount)){
      result = 'denied';
    }else if(!new Background().check()){
      result = 'denied';
    }

    return `${this.customer} has been ${result} for a ${amount} mortgage`;

  }
}

const Credit = function() {
  this.checkBalance = function(amount){
    //Complex logic for checking balance...
    return amount < 30000;
  }
}

const Background = function() {
  this.check = function(name){
    //Complex background check...
    return true;
  }
}

//Usage...
const loan = new Account(123456, 'Michael');
const result = loan.applyForLoan(35000);
console.log(result);*/

/* MODULE PATTERN */
/*const demoModule = (function(){
  //Private variable...
  let counter = 0;

  return {
    //Public interface...
    incrementCounter: function() {
      return counter++;
    },
    reset: function() {
      console.log(`Counter value before reset: ${counter}`);
      counter = 0;
    }
  }
})();

//Usage...
demoModule.counter++;

demoModule.incrementCounter();
demoModule.incrementCounter();
demoModule.counter = 0;
demoModule.incrementCounter();
demoModule.incrementCounter();

demoModule.reset();*/

/* REVEALING MODULE PATTERN */
/* USING IIFE */
/*const vehicle = (function(){
  //Data hiding...
  // Private...
  let speed = 80;

  // Private...
  function increaseSpeed(value) {
    speed += value;
    console.log(speed);
  }
  // Private...
  function decreaseSpeed() {
    speed -= 20;
  }
  // Private...
  function getSpeed() {
    return speed;
  }

  //Create public interface (API)...
  return {
    accelerate: increaseSpeed,
    brake: decreaseSpeed,
    displaySpeed: getSpeed,
  };
})();

console.log(vehicle.displaySpeed());
vehicle.accelerate(30);
vehicle.brake();
console.log(vehicle.displaySpeed());*/
