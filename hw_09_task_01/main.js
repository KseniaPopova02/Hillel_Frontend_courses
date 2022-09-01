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

function slider(el) {
  const content = el.querySelector(".content");
  const prevBtn = el.querySelector(".prev");
  const nextBtn = el.querySelector(".next");
  const buttons = el.querySelectorAll(".btn");
  let counter = 0;
  console.log(el);

  function getSlide() {
    if (counter < images.length) {
      content.innerHTML = "";
      let image = document.createElement("img");
      image.setAttribute("src", images[counter]);
      content.prepend(image);

      console.log(image);
    }
  }

  getSlide();

  //one eventlistener

  buttons.forEach((element) => {
    console.log(element);
    element.addEventListener("click", function (e) {
      console.log(e);
      if (e.target.classList.contains("prev")) {
        counter--;

        if (counter < 0) {
          counter = images.length - 1;
        }
      } else {
        counter++;

        if (counter > images.length - 1) {
          counter = 0;
        }
      }

      console.log(counter);
      getSlide();
    });
  });

  // two eventListeners

  // nextBtn.addEventListener("click", function () {
  //   counter++;

  //   if (counter > images.length - 1) {
  //     counter = 0;
  //   }
  //   console.log(counter);
  //   getSlide();
  // });

  // prevBtn.addEventListener("click", function () {
  //   counter--;

  //   if (counter < 0) {
  //     counter = images.length - 1;
  //   }
  //   console.log(counter);
  //   getSlide();
  // });
}

slider(document.querySelector(".slider-1"));

slider(document.querySelector(".slider-2"));
