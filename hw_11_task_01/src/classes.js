function Car(brand, year, hp) {
  this.brand = brand;
  this.year = year;
  this.hp = hp;

  this.id = `car-${Math.random()}`;

  this.owner = null;
}

Car.prototype.setOwner = function (user, shouldSetToUser = true) {
  if (!User.prototype.isPrototypeOf(user)) {
    //remove the owner from the car (this = car)
    this.owner = "";
    //remove this car from any user
    //call f=remove car function for a user(first create it)
    return;
  }

  if (shouldSetToUser) {
    user.setCar(this, false);
  }

  this.owner = user;
};

function User(name, age) {
  this.name = name;
  this.age = age;

  this.id = `user-${Math.random()}`;

  this._cars = [];
}

User.prototype.setCar = function (car, shouldSetToCar = true) {
  if (!Car.prototype.isPrototypeOf(car)) {
    return;
  }
  this._cars.push(car);

  if (shouldSetToCar) {
    car.setOwner(this, false);
  }
};

User.prototype.getCars = function () {
  return this._cars;
};
