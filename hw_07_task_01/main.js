function User(name, age) {
  this.name = name;
  this.age = age;
}

function Auto(brand, color, year) {
  this.brand = brand;
  this.color = color;
  this.year = year;
  this.owner = null;
}

function showCarInfo() {
  console.log(this);
}

function assignOwner(customer) {
  this.owner = customer;
}

(() => {
  const name = prompt("Enter your name:");
  if (!name) {
    console.log("wrong data");
    return;
  }

  const age = prompt("Enter your age:");
  checkAge(age);
  function checkAge(age) {
    console.log(!isNaN(age));
    while (isNaN()) {
      alert("Please enter a number");
      prompt("Enter your age:");
    }
    if (!age) {
      console.log("wrong data");
      return;
    }
    if (age < 18) {
      console.log("so young");
      return;
    }
  }

  const customer = new User(name, age);

  const autoBrand = prompt("Brand:");
  if (!autoBrand) {
    console.log("wrong data");
    return;
  }
  const autoColor = prompt("Color:");
  if (!autoColor) {
    console.log("wrong data");
    return;
  }
  const autoYear = prompt("Year:");
  if (!autoYear) {
    console.log("wrong data");
    return;
  }
  const auto = new Auto(autoBrand, autoColor, autoYear);
  assignOwner.apply(auto, [customer]);
  const showAutoInfo = showCarInfo.bind(auto);
  showAutoInfo();
})();
