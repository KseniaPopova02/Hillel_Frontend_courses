function getCarHtml(car) {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <div class="card-body">
      <p>${car.brand}, ${car.year}. Power: ${car.hp} hP</p>
      <div class="select-wrapper"></div>
    </div>`;
  return div;
}

function getUserHtml(user) {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <div class="card-body">
      <p>${user.name}</p>
      <p>${user.age} y/o</p>
      <p>Cars: ${user
        .getCars()
        .reduce((acc, item) => `${acc ? acc + ", " : ""}${item.brand}`, "")}
      </p>
      <div class="select-wrapper"></div>
    </div>
  `;
  return div;
}

/**
 * Create select ti bind some object to another
 * @param {function} callback - callback to be called on select changes
 * @param {[{text, disabled: boolean, instance: object, id}]} options
 */
function appendSelectHtml(
  callback,
  options,
  parentEl,
  defaultOptionName,
  selectedOption = false
) {
  const selectEl = document.createElement("select");
  selectEl.classList.add("form-select");

  selectEl.innerHTML += `<option value="">${defaultOptionName}</option>`;

  options.forEach(({ text, disabled, id }, index) => {
    selectEl.innerHTML += `<option value="${index}" ${
      disabled ? "disabled" : ""
    }
     ${id === selectedOption ? "selected" : ""}>${text}</option>`;
  });

  parentEl.append(selectEl);

  // on select call callback with instance
  selectEl.addEventListener("change", function (event) {
    callback(options[event.target.value].instance);
    //check this option with event.target.value if it's there call the callback function
    //if it's not there call the callback function with false
  });

  return selectEl;
}
