let offset = 0; //move from left corner;
const sliderLine = document.querySelector(".slider__line");

document.querySelector(".btn").addEventListener("click", function () {
  offset -= 250;
  if (offset < -1750) {
    offset = 0;
  }
  sliderLine.style.left = offset + "px";
});

document.querySelector(".btn__random").addEventListener("click", function () {
  offset = Math.floor(Math.random() * 7) * -250;
  sliderLine.style.left = offset + "px";
});
