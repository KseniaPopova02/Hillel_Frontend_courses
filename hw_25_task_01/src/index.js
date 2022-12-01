import "./styles/index.scss";
import $ from "jquery";
import Swiper, { Navigation } from "swiper";

$(".block").text("hello form jquery");

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  observer: true,
  observeParents: true,
});
