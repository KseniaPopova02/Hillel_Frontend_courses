//variables
const input = document.querySelector(".input__text");
const btn = document.querySelector(".btn__add");
const list = document.querySelector(".action__list");

btn.addEventListener("click", (e) => {
  //   list.innerHTML += `<li>${input.value}</li>`;
  if (input.value === "") return;
  createDeleteEl(input.value);
  input.value = "";
});
// create and delete items
function createDeleteEl(value) {
  console.log(value);

  const li = document.createElement("li");
  li.className = "li";
  li.textContent = value;
  list.appendChild(li);

  const btn = document.createElement("i");
  btn.className = "fa-solid fa-trash-can";
  li.appendChild(btn);
  //   remove items
  btn.addEventListener("click", (e) => {
    list.removeChild(li);
  });
}
