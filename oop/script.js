
/* JAVASCRIPT CONSTRUCTOR FUNCTION */
// Create an class that simulates a Vehicle
// by using Javascripts Construction functions
const Vehicle = function(id, make, model, modelYear) {
  this.id = id;                 //We are defining the objects property or state on these lines.
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

// Lets console out our two objects.
console.log(bmw);
console.log(volvo);

// And finally call the newly added method...
bmw.showInfo();
volvo.showInfo();