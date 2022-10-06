//variables
let input, form;
let personArr = [];

const getPersonInfo = () => {
  personArr.push(input.value);
};

const addToArr = () => {};

window.addEventListener("DOMContentLoaded", () => {
  input = document.querySelectorAll(".input__person");
  form = document.querySelector(".input__wrapper");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getPersonInfo();
  });
});
console.log(input);
