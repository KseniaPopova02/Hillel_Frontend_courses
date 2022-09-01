//variables
const input = document.querySelector(".input__text");
const btn = document.querySelector(".btn__add");
const list = document.querySelector(".action__list");

const addToList = () => {
  if (input.value === "") return;
  createDeleteEl(input.value);
  input.value = "";
};

btn.addEventListener("click", addToList);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addToList();
  }
});

// create and delete items
function createDeleteEl(value) {
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
  checkBox.addEventListener("click", (e) => {
    li.classList.toggle("crossed_text");
  });

  const btn = document.createElement("i");
  btn.className = "fa-solid fa-trash-can";
  div.appendChild(btn);
  //   remove items
  btn.addEventListener("click", (e) => {
    list.removeChild(li);
  });
}
