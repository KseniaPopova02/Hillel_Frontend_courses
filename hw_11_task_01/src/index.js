const usersBlock = document.getElementById("pills-users");
const carsBlock = document.getElementById("pills-cars");

const usersOptions = users.map((item) => {
  const { name, age, id } = item;

  return {
    id: id,
    text: `${name}, ${age}`,
    disabled: false,
    instance: item,
  };
});

const renderUsers = () => {
  usersBlock.innerHTML = "";

  const carsOptions = cars
    .filter((item) => {
      const { owner } = item;
      if (owner) {
        return false;
      }
      return true;
    })
    .map((item) => {
      const { brand, year, id } = item;

      return {
        id: id,
        text: `${brand} ${year}`,
        disabled: false,
        instance: item,
      };
    });

  users.forEach((item) => {
    usersBlock.appendChild(getUserHtml(item));
    const selectorWrapper =
      usersBlock.children[usersBlock.children.length - 1].querySelector(
        ".select-wrapper"
      );

    appendSelectHtml(
      item.setCar.bind(item),
      carsOptions,
      selectorWrapper,
      "select car"
    );
  });
};

const renderCars = () => {
  carsBlock.innerHTML = "";

  cars.forEach((item) => {
    carsBlock.appendChild(getCarHtml(item));

    const selectorWrapper =
      carsBlock.children[carsBlock.children.length - 1].querySelector(
        ".select-wrapper"
      );

    appendSelectHtml(
      item.setOwner.bind(item),
      usersOptions,
      selectorWrapper,
      "no owner",
      item.owner ? item.owner.id : false
    );
  });
};

// перехватываем change, чтобы знать когда произошли изменения и надо перерендерить пользователей
carsBlock.addEventListener("change", renderUsers);
carsBlock.addEventListener("change", renderCars);

usersBlock.addEventListener("change", renderUsers);
usersBlock.addEventListener("change", renderCars);
renderCars();
renderUsers();
