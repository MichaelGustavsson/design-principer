class Vehicle{
  constructor(make, model, modelYear, mileage){
    let _speed = 80;

    //Encapsulating the values from the constructor
    let _make = make;
    let _model = model;
    let _modelYear = modelYear;
    let _mileage = mileage;

    //Create methods for returning the inner values of the variables.
    this.getMake = () => _make;
    this.getModel = () => _model;
    this.getModelYear = () => _modelYear;
    this.getMileage = () => _mileage;
    
    //Encapsulated function for increasing the speed.
    this.accelerate = (speed) => { _speed += speed; }
    this.getSpeed = () => _speed;

  }
  
  //Public getters for accessing the internal state of the object...
  get make() {
    return this.make();
  }
  get model() {
    return this.getModel();
  }
  get modelYear() {
    return this.getModelYear();
  }
  get mileage() {
    return this.getMileage();
  }
  get speed() {
    return this.getSpeed();
  }
}

const volvo = new Vehicle('Volvo', 'XC90', 2019, 1500);

console.log(volvo);
volvo.mileage = 20500;
console.log(volvo.getMileage());
console.log(volvo);

volvo.accelerate(20);
console.log(volvo.getSpeed());

