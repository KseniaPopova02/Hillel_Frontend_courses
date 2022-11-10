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
const select = new SelectField("test", "test", [
  {
    value: "1",
    label: "Option 1",
  },
  {
    value: "2",
    label: "Option 2",
  },
  {
    value: "3",
    label: "Option 3",
  },
  {
    value: "4",
    label: "Option 4",
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
  ],
  (e) => {
    e.preventDefault();
    alert("submit");
  }
);
const formWrapper = document.querySelector(".form__wrapper");
form.renderForm("formId", formWrapper);
