const title = new TitleField("Форма для справжнього українця");
const firstQuestionField = new TextField(
  "firstQuestionField",
  "Батько наш -",
  "Бандера"
);
const secondQuestionField = new TextField("lastNameField", "Україна -", "мати");
const checkbox = new CheckBoxField(
  "checkbox",
  "Вапще не хочу из уезжать из Крыма...",
  "",
  "из Алушты"
);
const checkbox2 = new CheckBoxField("checkbox", "", "", "из Ceвастополя");
const checkbox3 = new CheckBoxField(
  "checkbox",
  "Я привыкла здесь, как в своем доме жить, настолько все душевно...",
  "",
  "по родному"
);
const checkbox4 = new CheckBoxField("checkbox", "", "", "па дамашнему!!!!");
const select = new SelectField("Чий Крим?", "Чий Крим?", [
  {
    value: "1",
    label: "Український",
  },
  {
    value: "2",
    label: "йа умственно атсталій клоун",
  },
]);

const form = new Form(
  [
    title,
    firstQuestionField,
    secondQuestionField,
    checkbox,
    checkbox2,
    checkbox3,
    checkbox4,
    select,
  ],
  (e) => {
    e.preventDefault();
    alert("submit");
  }
);
const formWrapper = document.querySelector(".form__wrapper");
form.renderForm("formId", formWrapper);
