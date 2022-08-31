// Measure the combined width of all slides together with clientBoundingRect function

// We need a total slide count variable

// We need a current slide variable
// We need a direction variable (forward of backwards)

// Select the Next / Previous buttons

// On addEventListner click on Next duplicate slide to the end because of infinite loop

// On addEventListner click on Next duplicate all slides to the end because of infinite loop

// Append slide to end when not in view any more

// Animate slide change

// let totalSlideCount = 0;

// const slides = document.querySelectorAll(".slide");
// let current = 0;

// function slider() {
//   for (let i = 0; i < slides.length; i++) {
//     // slides[i].classList.add("opacity0");
//   }
//   //   slides[current].classList.remove("opacity0");
//   current++;
// }
// document.querySelector(".slide").onclick = slider;

// function sliderCount() {
//   const slideCount = slides.length;
//   console.log(slideCount);
// }
// function slideWidth() {
//   const slideWidth = document.querySelector(".slider").clientWidth;
//   console.log(slideWidth);
// }

// slider();
// sliderCount();
// slideWidth();

// const slides = document.querySelectorAll(".slide");
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");

// const img1 = "./Kharkiv_img/img1.jpg";
// const img2 = "./Kharkiv_img/img2.jpg";
// const img3 = "./Kharkiv_img/img3.jpg";
// const img4 = "./Kharkiv_img/img4.jpg";
// const img5 = "./Kharkiv_img/img5.jpg";
// const img6 = "./Kharkiv_img/img6.jpg";
// const img7 = "./Kharkiv_img/img7.jpg";
// const img8 = "./Kharkiv_img/img8.jpg";
// const img9 = "./Kharkiv_img/img9.jpg";
// const img10 = "./Kharkiv_img/img10.jpg";
// const img11 = "./Kharkiv_img/img11.jpg";

// const images = document.querySelectorAll("img");

// let i = 0;

// slides.innerHTML = `img src=${images[i]}`;

// nextBtn.onclick = () => {
//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }
//   slides.innerHTML = `<img src=${images[i]}>`;
// };

// prevBtn.onclick = () => {
//   if (i > 0) {
//     i--;
//   } else {
//     i = images.length - 1;
//   }
//   slides.innerHTML = `<img src=${images[i]}>`;
// };

const images = [
  "./Kharkiv_img/img1.jpg",
  "./Kharkiv_img/img2.jpg",
  "./Kharkiv_img/img3.jpg",
  "./Kharkiv_img/img4.jpg",
  "./Kharkiv_img/img5.jpg",
  "./Kharkiv_img/img6.jpg",
  "./Kharkiv_img/img7.jpg",
  "./Kharkiv_img/img8.jpg",
  "./Kharkiv_img/img9.jpg",
  "./Kharkiv_img/img10.jpg",
  "./Kharkiv_img/img11.jpg",
];

const content = document.querySelector(".content");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let counter = 0;

// getSlide(0);

// function currentSlide() {
//   for (let i = 0; i < images.length; i++) {
//     // console.log(images[i]);
//     let image = document.createElement("img");
//     image.setAttribute("src", images[i]);
//     // image = image.setAttribute("src", images[i]);
//     // console.log(image)
//     content.prepend(image);
//   }
// }

function getSlide(slide) {
  // console.log("Total: " + images.length);
  // console.log(slide);
  if (slide < images.length && slide == counter) {
    content.innerHTML = "";
    let image = document.createElement("img");
    image.setAttribute("src", images[slide]);
    console.log(image);
    // image = image.setAttribute("src", images[i]);
    // console.log(image)
    content.prepend(image);
  }
}

nextBtn.addEventListener("click", function () {
  counter++;
  getSlide(counter);

  if (counter > images.length) {
    counter = images.length;
  }
  console.log(counter);
});

prevBtn.addEventListener("click", function () {
  // content.innerHtml = `<img src = ${--counter}/>`;
  counter--;
  getSlide(counter);

  if (counter <= 0) {
    console.log(images.length);
    counter = images.length - 1;
  }
  console.log(counter);
});
