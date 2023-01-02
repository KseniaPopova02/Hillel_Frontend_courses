//function constructions
function Person(name, surname, age, telephoneNum) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.telephoneNum = telephoneNum;
  this.cars = [];
  this.addCar = (car) => {
    this.cars.push(car);
  };
}

function Car(brand, color, year) {
  this.brand = brand;
  this.color = color;
  this.year = year;
}

//variables
let carForm,
  carTextBrand,
  carTextColor,
  carTextYear,
  personInfo,
  personForm,
  personTextName,
  personTextSurname,
  personTextAge,
  personTextTel,
  personInfoSubmit,
  listPersonInfo;

const createPerson = (name, surname, age, tel) => {
  personInfo = new Person(name, surname, age, tel);
  console.log(personInfo);

  renderList();
};

const createCar = (brand, color, year) => {
  let carInfo = new Car(brand, color, year);
  personInfo.addCar(carInfo);
  console.log(personInfo);
};

const addToPersonList = () => {
  if (
    personTextName.value === "" ||
    personTextSurname.value === "" ||
    personTextAge.value === "" ||
    personTextTel.value === ""
  )
    return;
  createPerson(
    personTextName.value,
    personTextSurname.value,
    personTextAge.value,
    personTextTel.value
  );
  personTextName.value = "";
  personTextSurname.value = "";
  personTextAge.value = "";
  personTextTel.value = "";
};

const addToCarList = () => {
  if (
    carTextBrand.value === "" ||
    carTextColor.value === "" ||
    carTextYear.value === ""
  )
    return;
  createCar(carTextBrand.value, carTextColor.value, carTextYear.value);
  carTextBrand.value = "";
  carTextColor.value = "";
  carTextYear.value = "";
};

//Render list
const renderList = () => {
  listPersonInfo.innerHTML = "";

  toLocalStorage();

  if (personInfo) {
    const td = document.createElement("td");
    td.className = "td";
    td.innerText = personInfo.name;
    td.innerText = personInfo.surname;
    td.innerText = personInfo.age;
    td.innerText = personInfo.tel;
    listPersonInfo.appendChild(td);
  }
};

//Local storage

const toLocalStorage = () => {
  localStorage.setItem("data", JSON.stringify(personInfo));
};

const loadLocalStorage = () => {
  let rawData = localStorage.getItem("data");
  if (rawData) {
    personInfo = JSON.parse(rawData);
    renderList();
    // @todo show car form
  }
};

const deleteLocalStorage = () => {
  localStorage.clear();
  items = [];
  renderList();
};

//functions

window.addEventListener("DOMContentLoaded", () => {
  carForm = document.querySelector(".car");
  carTextBrand = document.querySelector("#brand");
  carTextColor = document.querySelector("#color");
  carTextYear = document.querySelector("#year");

  personForm = document.querySelector(".person");
  personTextName = document.querySelector("#fname");
  personTextSurname = document.querySelector("#lname");
  personTextAge = document.querySelector("#age");
  personTextTel = document.querySelector("#tel");
  listPersonInfo = document.querySelector(".list__personInfo");

  let personFormSubmit = personForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addToPersonList();
  });

  carForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addToCarList();
  });
});
