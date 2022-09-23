//variables
let input, btn, list, form;

//create an array of todo list items
let items = [];
let listType = "all";

//create function
const createItem = (text) => {
  const ids = items.map((item) => {
    return item.id;
  });

  const max = Math.max(...ids);

  items.push({
    id: max + 1,
    text: text,
    isDone: false,
  });

  renderList();
};

//delete function
const deleteItem = (id) => {
  items = items.filter((item) => {
    return item.id !== id;
  });

  renderList();
};

//checked function

const checkedItem = (id, checked) => {
  items.forEach((item) => {
    if (item.id === id) {
      item.isDone = checked;
    }
  });

  renderList();
};

//Render list

const renderList = () => {
  list.textContent = "";

  items.forEach((item) => {
    let showItem = true;

    if (listType === "inprogress" && item.isDone) {
      showItem = false;
    }

    if (listType === "completed" && !item.isDone) {
      showItem = false;
    }

    if (showItem) {
      const li = document.createElement("li");
      li.className = "li";
      list.appendChild(li);

      const div = document.createElement("div");
      div.className = "div";
      li.appendChild(div);

      const checkBox = document.createElement("input");
      checkBox.className = "check__box";
      checkBox.setAttribute("type", "checkbox");
      // If the item is done, set the checkbox to checked
      if (item.isDone) {
        checkBox.setAttribute("checked", "checked");
      }

      checkBox.addEventListener("change", (e) => {
        checkedItem(item.id, checkBox.checked);
      });

      div.appendChild(checkBox);

      const span = document.createElement("span");
      span.textContent = item.text;

      // If the item is done, add the 'crossed__text' class to the span
      if (item.isDone) {
        span.classList.add("crossed__text");
      }

      div.appendChild(span);

      const btn = document.createElement("i");
      btn.className = "fa-solid fa-trash-can";
      div.appendChild(btn);
      btn.addEventListener("click", (e) => {
        deleteItem(item.id);
      });
    }
  });
};

//Add to list
const addToList = () => {
  if (input.value === "") return;
  createItem(input.value);
  input.value = "";
};

const makeBtnActive = (element) => {
  document.querySelectorAll(".menu .button").forEach((el) => {
    el.classList.remove("active");
  });
  element.classList.add("active");
};

window.addEventListener("DOMContentLoaded", () => {
  input = document.querySelector(".input__text");
  list = document.querySelector(".action__list");
  form = document.querySelector(".input__wrapper");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToList();
  });
  //List type button click
  const listTypeBtns = document.querySelectorAll(".menu .button");

  listTypeBtns.forEach((listTypeBtn) => {
    listTypeBtn.addEventListener("click", (e) => {
      makeBtnActive(e.target);

      listType = e.target.dataset.type;

      renderList();
    });
  });
});