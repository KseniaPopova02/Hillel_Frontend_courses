//variables
let input, btn, list, form;

const addToList = () => {
  if (input.value === "") return;
  createEl(input.value);
  input.value = "";
};

// create and delete items
const createEl = (value) => {
  console.log(value);

  const li = document.createElement("li");
  li.className = "li";
  list.appendChild(li);

  const div = document.createElement("div");
  div.className = "div";
  li.appendChild(div);

  const checkBox = document.createElement("input");
  checkBox.className = "check__box";
  checkBox.setAttribute("type", "checkbox");
  div.appendChild(checkBox);

  const span = document.createElement("span");
  span.textContent = value;
  div.appendChild(span);

  // add crossed text
  checkBox.addEventListener("change", (e) => {
    if (checkBox.checked) {
      span.classList.add("crossed__text");
    } else {
      span.classList.remove("crossed__text");
    }
  });

  const btn = document.createElement("i");
  btn.className = "fa-solid fa-trash-can";
  div.appendChild(btn);
  //   remove items
  btn.addEventListener("click", (e) => {
    delEl(li);
  });
};

const delEl = (el) => {
  list.removeChild(el);
};

const makeBtnActive = (element) => {
  document.querySelectorAll(".menu .button").forEach((el) => {
    el.classList.remove("active");
  });
  element.classList.add("active");
};

window.addEventListener("DOMContentLoaded", () => {
  input = document.querySelector(".input__text");
  btn = document.querySelector(".btn__add");
  list = document.querySelector(".action__list");
  form = document.querySelector(".input__wrapper");

  btn.addEventListener("click", addToList);

  form.addEventListener("submit", (e) => {
    addToList();
  });

  //Btn in progress
  document
    .querySelector(".button__inprogress .button")
    .addEventListener("click", (e) => {
      makeBtnActive(e.target);
      //get all li el
      const items = list.querySelectorAll("li");
      //show everything
      items.forEach((element) => {
        element.style.display = "block";
      });
      //display none completed
      items.forEach((element) => {
        if (element.querySelector("input[type=checkbox]").checked) {
          element.style.display = "none";
        }
      });
    });
  //Btn completed
  document
    .querySelector(".button__completed .button")
    .addEventListener("click", (e) => {
      makeBtnActive(e.target);
      //get all li el
      const items = list.querySelectorAll("li");
      //show everything
      items.forEach((element) => {
        element.style.display = "none";
      });
      //display none completed
      items.forEach((element) => {
        if (element.querySelector("input[type=checkbox]").checked) {
          element.style.display = "block";
        }
      });
    });
  //Btn All
  document
    .querySelector(".button__all .button")
    .addEventListener("click", (e) => {
      makeBtnActive(e.target);
      //get all li el
      const items = list.querySelectorAll("li");
      //show everything
      items.forEach((element) => {
        element.style.display = "block";
      });
    });
});
