const $window = $(window);
const modalFade = $(".modal fade");

let isModalShowed = false;

const isShowModal = () => {
  if ($window.width() <= 768) {
    if (!isModalShowed) {
      $("#trigger-button").trigger("click");
      isModalShowed = true;
    }
  } else if ($("body.modal-open")) {
    $(".modal-header .btn-close").trigger("click");
    isModalShowed = false;
  }
  console.log(isModalShowed);
};

$window.on("resize", function () {
  isShowModal();
});

isShowModal();
