//Поиск по селектору тега
const paragraph = document.querySelector(".paragraph");
const button = document.querySelector(".btn");

//Cоздаем функции для переключения цвета

// function changeColorWhite() {
//   paragraph.style.color = "white";
// }

// function changeColorBlack() {
//   paragraph.style.color = "black";
// }

// button.addEventListener("click", changeColorWhite);

button.onclick = function () {
  //   changeColorBlack();
  //   changeColorW();
  paragraph.classList.toggle("white");
};
