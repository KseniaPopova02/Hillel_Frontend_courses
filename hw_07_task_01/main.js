const name = prompt("Enter your name:");
const age= prompt("Enter your age:");

if (age < 18) {
    alert ("You can't drive a car")
} else {
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.returnAgeName = function () {
            console.log("Name:", this.name)
            console.log("Age:", this.age)
        }
    }

    const someone = new User(name, age);

    console.log(someone)

    someone.returnAgeName();

    const autoBrand = prompt("Brand:");
    const autoColor = prompt("Color:");
    const autoYear = prompt("Year:");

    function Auto (brand, color, year) {
        this.brand = brand;
        this.color = color;
        this.year = year;
        this.setOwner = function (user) {
            this.owner = user;
            console.log(`This is a car owner. Name: ${this.owner.name} Age: ${this.owner.age}`)
        }
        this.returnBrandColorYear = function () {
            console.log("Brand: ", brand);
            console.log("Color: ", color);
            console.log("Year: ", year);
        }
    }

    const auto = new Auto (autoBrand, autoColor, autoYear);
   
    auto.setOwner(someone);
    auto.returnBrandColorYear();
}