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

  function checkAge() {
    let age = prompt("Enter your age:");

    while (isNaN(age)) {
      alert("Please enter a number");
      age = prompt("Enter your age:");
    }

    return age;
  }

  const age = checkAge();

  if (!age) {
    console.log("wrong data");
    return;
  }
  if (age < 18) {
    console.log("so young");
    return;
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
