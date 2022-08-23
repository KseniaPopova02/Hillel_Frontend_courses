const name = prompt("Enter your name:");
const age= prompt("Enter your age:");

if (age < 18) {
    alert ("You can't drive a car")
} else {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }

    const someone = new User(name, age);

    const autoBrand = prompt("Brand:");
    const autoColor = prompt("Color:");
    const autoYear = prompt("Year:");

    function Auto (brand, color, year, owner) {
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.owner = owner;
    }

    const auto = new Auto (autoBrand, autoColor, autoYear, someone);
   
   console.log(auto)
}