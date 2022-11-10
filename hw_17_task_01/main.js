const $window = $(window);
const modal = new bootstrap.Modal("#exampleModal");

const isShowModal = () => {
  if ($window.width() > 768) {
    modal.hide();
    return;
  }

  modal.show();
};

$window.on("resize", function () {
  isShowModal();
});

isShowModal();
